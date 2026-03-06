"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

type Stats = {
  "giáo dục": number
  "kinh tế": number
  "xã hội": number
  "đạo đức": number
}

type Card = {
  text: string
  left: { label: string; effect: Partial<Stats> }
  right: { label: string; effect: Partial<Stats> }
}

const cards: Card[] = [

  {
    text: "Một CLB khởi nghiệp mời bạn tham gia. Điều này có thể giúp mở rộng quan hệ nhưng sẽ tốn thời gian học tập.",
    left: { label: "Từ chối", effect: { "giáo dục": 8 } },
    right: { label: "Tham gia", effect: { "xã hội": 10, "kinh tế": 3 } }
  },

  {
    text: "Bạn được đề nghị làm thêm vào cuối tuần.",
    left: { label: "Tập trung học", effect: { "giáo dục": 6 } },
    right: { label: "Nhận việc", effect: { "kinh tế": 8, "giáo dục": -3 } }
  },

  {
    text: "Bạn được mời tham gia tình nguyện vùng sâu.",
    left: { label: "Đi tình nguyện", effect: { "xã hội": 10, "đạo đức": 6 } },
    right: { label: "Ở lại học", effect: { "giáo dục": 5 } }
  },

  {
    text: "Một startup đề nghị bạn tham gia từ sớm.",
    left: { label: "Thử sức", effect: { "kinh tế": 12, "giáo dục": -4 } },
    right: { label: "Từ chối", effect: { "giáo dục": 5 } }
  },

  {
    text: "Bạn được học bổng đi du học.",
    left: { label: "Đi du học", effect: { "giáo dục": 15, "xã hội": -3 } },
    right: { label: "Ở lại VN", effect: { "xã hội": 6 } }
  },

  {
    text: "Một phong trào xã hội cần người lãnh đạo.",
    left: { label: "Tham gia", effect: { "xã hội": 12, "đạo đức": 5 } },
    right: { label: "Tránh xa", effect: { "kinh tế": 3 } }
  },

  {
    text: "Bạn phát hiện gian lận trong công ty.",
    left: { label: "Tố cáo", effect: { "đạo đức": 12, "kinh tế": -6 } },
    right: { label: "Im lặng", effect: { "kinh tế": 8, "đạo đức": -5 } }
  },

  {
    text: "Bạn có cơ hội đầu tư vào công nghệ mới.",
    left: { label: "Đầu tư", effect: { "kinh tế": 15 } },
    right: { label: "Không mạo hiểm", effect: { "đạo đức": 2 } }
  },

  {
    text: "Một người bạn cần giúp đỡ tài chính.",
    left: { label: "Giúp", effect: { "đạo đức": 8, "kinh tế": -4 } },
    right: { label: "Từ chối", effect: { "kinh tế": 2 } }
  },

  {
    text: "Bạn được đề nghị tham gia chính quyền địa phương.",
    left: { label: "Tham gia", effect: { "xã hội": 10, "đạo đức": 5 } },
    right: { label: "Không tham gia", effect: { "kinh tế": 4 } }
  },
  {
  text: "Một cuộc thi sáng tạo công nghệ dành cho sinh viên đang mở đăng ký.",
  left: { label: "Tham gia", effect: { "giáo dục": 10, "kinh tế": 2 } },
  right: { label: "Bỏ qua", effect: { "xã hội": 3 } }
  },
  
  {
    text: "Bạn được mời làm mentor cho một nhóm sinh viên trẻ.",
    left: { label: "Nhận lời", effect: { "xã hội": 8, "đạo đức": 5 } },
    right: { label: "Từ chối", effect: { "kinh tế": 3 } }
  },

  {
    text: "Một công ty lớn muốn tuyển bạn với mức lương hấp dẫn.",
    left: { label: "Nhận việc", effect: { "kinh tế": 12, "giáo dục": -2 } },
    right: { label: "Tiếp tục học", effect: { "giáo dục": 8 } }
  },

  {
    text: "Bạn có cơ hội tổ chức một dự án cộng đồng cho thanh niên.",
    left: { label: "Thực hiện", effect: { "xã hội": 12, "đạo đức": 6 } },
    right: { label: "Không tham gia", effect: { "kinh tế": 3 } }
  },

  {
    text: "Bạn được mời phát biểu tại một hội thảo thanh niên.",
    left: { label: "Nhận lời", effect: { "xã hội": 8, "giáo dục": 4 } },
    right: { label: "Từ chối", effect: { "đạo đức": 2 } }
  },

  {
    text: "Một người bạn rủ bạn cùng mở quán cà phê startup.",
    left: { label: "Hợp tác", effect: { "kinh tế": 10, "xã hội": 4 } },
    right: { label: "Không tham gia", effect: { "giáo dục": 3 } }
  },

  {
    text: "Bạn phát hiện một dự án xã hội đang thiếu người lãnh đạo.",
    left: { label: "Đứng ra lãnh đạo", effect: { "xã hội": 14, "đạo đức": 6 } },
    right: { label: "Để người khác làm", effect: { "giáo dục": 2 } }
  },

  {
    text: "Bạn được mời tham gia một khóa đào tạo lãnh đạo trẻ.",
    left: { label: "Tham gia", effect: { "giáo dục": 9, "xã hội": 5 } },
    right: { label: "Bỏ qua", effect: { "kinh tế": 4 } }
  },

  {
    text: "Một dự án khởi nghiệp thất bại khiến bạn mất tiền.",
    left: { label: "Bắt đầu lại", effect: { "kinh tế": -4, "giáo dục": 5 } },
    right: { label: "Dừng lại", effect: { "đạo đức": 2 } }
  },

  {
    text: "Bạn được đề nghị tham gia ban tổ chức một sự kiện thanh niên lớn.",
    left: { label: "Tham gia", effect: { "xã hội": 11, "giáo dục": 3 } },
    right: { label: "Từ chối", effect: { "kinh tế": 3 } }
  }

  ]

const characters = [
  "🧑‍🎓",
  "💼",
  "👨‍💼",
  "🏛",
  "⭐"
]

function applyEffect(stats: Stats, effect: Partial<Stats>): Stats {
  const newStats = { ...stats }

  Object.entries(effect).forEach(([k, v]) => {
    const key = k as keyof Stats
    newStats[key] = Math.max(0, Math.min(100, newStats[key] + (v ?? 0)))
  })

  return newStats
}

export default function GamePage() {

  const [stats, setStats] = useState<Stats>({
    "giáo dục": 50,
    "kinh tế": 50,
    "xã hội": 50,
    "đạo đức": 50
  })

  const [index, setIndex] = useState(0)

  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-12, 12])

  const card = cards[index % cards.length]

  const year = 2025 + index

  const phase = Math.min(4, Math.floor(index / 5))

  const character = characters[phase]

  const handleChoice = (side: "left" | "right") => {

    const effect =
      side === "left"
        ? card.left.effect
        : card.right.effect

    setStats(applyEffect(stats, effect))

    setIndex(index + 1)
  }

  const gameOver =
    Object.values(stats).some(v => v <= 0 || v >= 100)

  const endingText = () => {

    if (stats["giáo dục"] >= 100)
      return "Bạn trở thành trí thức dẫn dắt xã hội."

    if (stats["kinh tế"] >= 100)
      return "Bạn trở thành doanh nhân giàu có."

    if (stats["xã hội"] >= 100)
      return "Bạn trở thành nhà hoạt động xã hội."

    if (stats["đạo đức"] >= 100)
      return "Bạn trở thành biểu tượng đạo đức."

    return "Xã hội sụp đổ vì mất cân bằng."
  }

  const effectPreview =
    x.get() > 60
      ? card.right.effect
      : x.get() < -60
      ? card.left.effect
      : null

  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a] text-white relative overflow-hidden">

      <Header />

      

      <main className="relative flex-grow flex items-center justify-center py-16 overflow-hidden">
        {/* SKYLINE BACKGROUND */}

        <div
          className="absolute inset-0 bg-[url('/background/skyline.jpg')] bg-bottom bg-cover opacity-20 pointer-events-none z-0"
        />

        <div className="relative z-10 w-[340px] bg-[#2b2b2b] rounded shadow-[0_10px_40px_rgba(0,0,0,0.7)] overflow-hidden">

          {/* STAT BAR */}

          <div className="bg-[#1f1f1f] px-4 py-3 space-y-2">

            <Stat icon="🎓" value={stats["giáo dục"]} color="bg-green-500" />
            <Stat icon="👥" value={stats["xã hội"]} color="bg-blue-500" />
            <Stat icon="⚖️" value={stats["đạo đức"]} color="bg-yellow-500" />
            <Stat icon="💰" value={stats["kinh tế"]} color="bg-purple-500" />

          </div>

          {!gameOver && (

            <motion.div
              drag="x"
              style={{ x, rotate }}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {

                if (info.offset.x > 120)
                  handleChoice("right")

                if (info.offset.x < -120)
                  handleChoice("left")

              }}
              className="p-6 text-center cursor-grab select-none"
            >

              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                {card.text}
              </p>

              {/* EFFECT PREVIEW */}

              {effectPreview && (
                <div className="text-xs mb-3 text-yellow-300">

                  {Object.entries(effectPreview).map(([k, v]) => (
                    <div key={k}>
                      {v > 0 ? "+" : ""}
                      {v} {k}
                    </div>
                  ))}

                </div>
              )}

              {/* CHARACTER */}

              <div className="bg-red-900 rounded-lg h-40 flex items-center justify-center mb-4">

                <span className="text-6xl animate-breathe">
                  {character}
                </span>

              </div>

              <div className="text-sm text-gray-400 mb-1">
                Thanh niên Việt Nam
              </div>

              <div className="text-xs text-gray-500">
                Năm {year}
              </div>

              <div className="flex justify-between text-xs text-gray-400 mt-4">

                <span>⬅ {card.left.label}</span>
                <span>{card.right.label} ➡</span>

              </div>

            </motion.div>

          )}

          {gameOver && (

            <div className="p-10 text-center">

              <h2 className="text-xl text-red-400 mb-4">
                Kết thúc
              </h2>

              <p className="text-sm text-gray-300 mb-6">
                {endingText()}
              </p>

              <button
                className="px-4 py-2 bg-blue-600 rounded"
                onClick={() => {

                  setStats({
                    "giáo dục": 50,
                    "kinh tế": 50,
                    "xã hội": 50,
                    "đạo đức": 50
                  })

                  setIndex(0)

                }}
              >
                Chơi lại
              </button>

            </div>

          )}

        </div>

      </main>

      <Footer />

    </div>
  )
}

function Stat({ icon, value, color }: any) {

  return (

    <div className="flex items-center gap-2 text-xs">

      <span className="w-5 text-center">
        {icon}
      </span>

      <div className="flex-1 bg-gray-700 h-2 rounded">

        <div
          className={`${color} h-2 rounded transition-all duration-500`}
          style={{ width: `${value}%` }}
        />

      </div>

    </div>

  )
}