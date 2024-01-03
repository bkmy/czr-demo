import { ProjectSchema } from '@/lib/schema'
import { readJsonFile } from '@/lib/read-file'
import { NextResponse } from 'next/server'
import { z } from 'zod'

type ErrorResponse = {
  error: {
    message: string
    details: z.ZodError
  }
}

export async function GET() {
  const data = await readJsonFile('/src/mocks/projects_sample.json')

  const validatedProjects = ProjectSchema.array().safeParse(data)

  if (!validatedProjects.success) {
    const errorResponse: ErrorResponse = {
      error: {
        message: 'Invalid Response Type',
        details: validatedProjects.error,
      },
    }
    return NextResponse.json(errorResponse, { status: 422 })
  }

  return NextResponse.json(validatedProjects.data)
}
