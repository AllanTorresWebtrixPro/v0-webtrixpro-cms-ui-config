import { logger } from "./logger"

class FetchError extends Error {
  constructor(
    message: string,
    public status: number,
    public statusText: string,
    public data?: unknown,
  ) {
    super(message)
    this.name = "FetchError"
  }
}

interface CustomFetchOptions extends RequestInit {
  timeout?: number
}

export async function customFetch<T>(url: string, options: CustomFetchOptions = {}): Promise<T> {
  const { timeout = 30000, ...fetchOptions } = options

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  try {
    logger.debug("[customFetch] Request:", { url, method: options.method || "GET" })

    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        ...fetchOptions.headers,
      },
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      const errorData = await response.json().catch(() => null)
      logger.error("[customFetch] Error response:", {
        url,
        status: response.status,
        statusText: response.statusText,
        errorData,
      })

      throw new FetchError(
        errorData?.error || `HTTP ${response.status}: ${response.statusText}`,
        response.status,
        response.statusText,
        errorData,
      )
    }

    const data = await response.json()
    logger.debug("[customFetch] Success:", { url, data })

    return data as T
  } catch (error) {
    clearTimeout(timeoutId)

    if (error instanceof FetchError) {
      throw error
    }

    if (error instanceof Error) {
      if (error.name === "AbortError") {
        logger.error("[customFetch] Request timeout:", { url, timeout })
        throw new Error(`Request timeout after ${timeout}ms`)
      }

      logger.error("[customFetch] Network error:", { url, error: error.message })
      throw new Error(`Network error: ${error.message}`)
    }

    logger.error("[customFetch] Unknown error:", { url, error })
    throw new Error("An unknown error occurred")
  }
}
