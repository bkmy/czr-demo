import type { Project } from '@/lib/schema'
import { useEffect, useState } from 'react'

export async function getProjects(): Promise<Project[]> {
  const res = await fetch('http://localhost:3000/projects', {
    method: 'GET',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch projects')
  }
  const projects = await res.json()
  return projects
}

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      const allProjects = await getProjects()
      setProjects(allProjects)
    }
    fetchProjects()
  }, [])

  return projects
}
