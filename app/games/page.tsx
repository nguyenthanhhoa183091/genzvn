"use client"

import { useState } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

type Stats = {
  education: number
  economy: number
  society: number
  ethics: number
}

type Card = {
  text: string
  left: {
    label: string
    effect: Partial<Stats>
  }
  right: {
    label: string
    effect: Partial<Stats>
  }
}

const cards: Card[] = [
  {
    text: "Bạn có nên tham gia CLB khởi nghiệp?",
    left: {
      label: "Tập trung học",
      effect: { education: +10, economy: -3 },
    },
    right: {
      label: "Tham gia CLB",
      effect: { economy: +6, society: +5 },
    },
  },
  {
    text: "Bạn được mời làm thêm cuối tuần.",
    left: {
      label: "Từ chối",
      effect: { education: +5 },
    },
    right: {
      label: "Nhận việc",
      effect: { economy: +8, education: -3 },
    },
  },
  {
    text: "Bạn thấy một chiến dịch tình nguyện.",
    left: {
      label: "Tham gia",
      effect: { society: +10, economy: -2 },
    },
    right: {
      label: "Bỏ qua",
      effect: { economy: +3, society: -4 },
    },
  },
]

function applyEffect(stats: Stats, effect: Partial<Stats>): Stats {
  const newStats = { ...stats }

  Object.entries(effect).forEach(([key, value]) => {
    const k = key as keyof Stats
    newStats[k] = Math.max(0, Math.min(100, newStats[k] + (value ?? 0)))
  })

  return newStats
}

export default function YouthLapseGame() {

  const [stats, setStats] = useState<Stats>({
    education: 50,
    economy: 50,
    society: 50,
    ethics: 50,
  })

  const [index, setIndex] = useState(0)

  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-15, 15])

  const card = cards[index % cards.length]

  const handleChoice = (side: "left" | "right") => {

    const effect = side === "left"
      ? card.left.effect
      : card.right.effect

    const newStats = applyEffect(stats, effect)

    setStats(newStats)
    setIndex(index + 1)
  }

  const gameOver = Object.values(stats).some(v => v <= 0 || v >= 100)

  return (

    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">

      <h1 className="text-3xl font-bold mb-6">
        Thanh Niên Decisions
      </h1>

      {/* Stats */}

      <div className="grid grid-cols-2 gap-4 mb-8 w-80">

        {Object.entries(stats).map(([key, value]) => (

          <div key={key}>

            <div className="text-sm">{key}</div>

            <div className="bg-gray-700 h-3 rounded">

              <div
                className="bg-green-500 h-3 rounded"
                style={{ width: `${value}%` }}
              />

            </div>

          </div>

        ))}

      </div>

      {!gameOver && (

        <motion.div
          drag="x"
          style={{ x, rotate }}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {

            if (info.offset.x > 120) {
              handleChoice("right")
            }

            if (info.offset.x < -120) {
              handleChoice("left")
            }

          }}
          className="w-80 bg-gray-800 p-6 rounded-xl shadow-lg text-center cursor-grab"
        >

          <p className="mb-6">{card.text}</p>

          <div className="flex justify-between text-sm text-gray-400">

            <span>{card.left.label}</span>

            <span>{card.right.label}</span>

          </div>

        </motion.div>

      )}

      {gameOver && (

        <div className="text-center">

          <h2 className="text-3xl text-red-400">
            Society Collapse
          </h2>

          <button
            className="mt-6 px-6 py-3 bg-blue-600 rounded"
            onClick={() => {
              setStats({
                education: 50,
                economy: 50,
                society: 50,
                ethics: 50,
              })
              setIndex(0)
            }}
          >
            Restart
          </button>

        </div>

      )}

    </main>
  )
}