import { NextResponse } from "next/server"
import { logger } from "@/lib/logger"
import { z } from "zod"

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    logger.info("API: Creating newsletter subscription", { email: body.email })

    // Validate input
    const validatedData = newsletterSchema.parse(body)

    // TODO: Save to database when integration is ready
    const subscription = {
      id: crypto.randomUUID(),
      ...validatedData,
      subscribedAt: new Date().toISOString(),
      status: "active" as const,
    }

    logger.info("API: Newsletter subscription created", { subscriptionId: subscription.id })
    return NextResponse.json(subscription, { status: 201 })
  } catch (error) {
    logger.error("API: Error creating newsletter subscription", { error })
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    return NextResponse.json({ error: "Failed to subscribe to newsletter" }, { status: 500 })
  }
}
