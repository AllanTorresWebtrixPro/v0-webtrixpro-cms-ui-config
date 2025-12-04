import { NextResponse } from "next/server"
import { logger } from "@/lib/logger"
import { createContactSchema } from "@/types/contact"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    logger.info("API: Creating new contact", { email: body.email })

    // Validate input
    const validatedData = createContactSchema.parse(body)

    // TODO: Save to database when integration is ready
    // For now, just return success with the data
    const contact = {
      id: crypto.randomUUID(),
      ...validatedData,
      createdAt: new Date().toISOString(),
      status: "new" as const,
    }

    logger.info("API: Contact created successfully", { contactId: contact.id })
    return NextResponse.json(contact, { status: 201 })
  } catch (error) {
    logger.error("API: Error creating contact", { error })
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    return NextResponse.json({ error: "Failed to create contact" }, { status: 500 })
  }
}

export async function GET() {
  try {
    logger.info("API: Fetching all contacts")

    // TODO: Fetch from database when integration is ready
    const contacts = []

    return NextResponse.json(contacts)
  } catch (error) {
    logger.error("API: Error fetching contacts", { error })
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 })
  }
}
