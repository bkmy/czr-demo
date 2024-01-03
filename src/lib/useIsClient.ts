import { useEffect, useState } from 'react'

export default function useIsClient(): boolean {
  const [isClient, setIsClient] = useState(false)
  // Used to prevent hydration error
  // https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}
