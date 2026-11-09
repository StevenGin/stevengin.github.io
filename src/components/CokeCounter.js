import React, {useEffect, useState} from "react"

// Live joke counters. The paces are guesses — calibrate them with real
// numbers and they become science.
function useLiveCount(epochISO, base, msPerUnit) {
  const epoch = new Date(epochISO).getTime()
  const countAt = now =>
    base + Math.max(0, Math.floor((now - epoch) / msPerUnit))

  const [count, setCount] = useState(() =>
    typeof window === "undefined" ? base : countAt(Date.now()),
  )

  useEffect(() => {
    const timer = setInterval(() => setCount(countAt(Date.now())), 1000)
    return () => clearInterval(timer)
  }, [])

  return count
}

export function CokeCounter() {
  const count = useLiveCount("2026-11-09T00:00:00-08:00", 1337, 3000)
  return <>{count.toLocaleString("en-US")}</>
}

export function GuitarStringsCounter() {
  const count = useLiveCount("2026-11-09T00:00:00-08:00", 47, 30000)
  return <>{count.toLocaleString("en-US")}</>
}
