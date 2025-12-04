import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function DELETE(req: Request) {
  try {
    const { imageUrl } = await req.json()

    if (!imageUrl) {
      return NextResponse.json({ error: 'Missing image URL' }, { status: 400 })
    }

    // Extract filename from URL (e.g. "/uploads/1730594453000-test.png")
    const fileName = path.basename(imageUrl)
    const filePath = path.join(process.cwd(), 'public/uploads', fileName)

    // Delete the file if it exists
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath)
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }
  } catch (error) {
    console.error('Delete error:', error)
    return NextResponse.json({ error: 'Failed to delete image' }, { status: 500 })
  }
}
