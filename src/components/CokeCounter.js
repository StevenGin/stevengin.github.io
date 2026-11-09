import React, {useEffect, useState} from "react"

// A very serious live count of Coke Zeros consumed. The pace is a
// guess (one every 3 seconds from a base of 1,337 on Nov 9, 2026) —
// calibrate it with a real number and it becomes science.
const EPOCH = new Date("2026-11-09T00:00:00-08:00").getTime()
const BASE = 1337
const MS_PER_COKE = 3000

function countAt(now) {
  return BASE + Math.max(0, Math.floor((now - EPOCH) / MS_PER_COKE))
}

export function CokeCounter() {
  const [count, setCount] = useState(() =>
    typeof window === "undefined" ? BASE : countAt(Date.now()),
  )

  useEffect(() => {
    const timer = setInterval(() => setCount(countAt(Date.now())), 1000)
    return () => clearInterval(timer)
  }, [])

  return <>{count.toLocaleString("en-US")}</>
}
