import { promises as fs } from 'fs'

// read mock data
export async function readJsonFile<T>(path: string): Promise<T> {
  const file = await fs.readFile(process.cwd() + path, 'utf8')
  return JSON.parse(file)
}
