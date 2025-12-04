import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const files = formData.getAll('images') as File[]

    const uploadedUrls: string[] = []
    const uploadDir = path.join(process.cwd(), 'public/uploads')

    // Ensure upload folder exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true })
    }

    for (const file of files) {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const filePath = path.join(uploadDir, file.name)

      // ✅ Skip duplicate file
      if (fs.existsSync(filePath)) {
        console.log(`Skipped duplicate file: ${file.name}`)
        continue
      }

      fs.writeFileSync(filePath, buffer)
      uploadedUrls.push(`/uploads/${file.name}`)
    }

    return NextResponse.json({
      urls: uploadedUrls,
      message: uploadedUrls.length
        ? 'Images uploaded successfully'
        : 'All files already exist (no new uploads)',
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'Failed to upload images' }, { status: 500 })
  }
}
