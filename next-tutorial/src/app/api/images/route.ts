import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const uploadDir = path.join(process.cwd(), 'public/uploads')
    if (!fs.existsSync(uploadDir)) return NextResponse.json({ urls: [] })

    const files = fs.readdirSync(uploadDir)
    const urls = files.map((file) => `/uploads/${file}`)

    return NextResponse.json({ urls })
  } catch (error) {
    console.error('Fetch error:', error)
    return NextResponse.json({ urls: [] }, { status: 500 })
  }
}
