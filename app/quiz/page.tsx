'use client'

import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  hint: string
}

export default function QuizPage() {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showHint, setShowHint] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [questions, setQuestions] = useState<Question[]>([])

  useEffect(() => {
    fetch('/quiz.json')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error('Error loading questions:', error))
  }, [])

  const currentQ = questions[currentQuestion]

  // Show loading state while questions are being fetched
  if (questions.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="text-2xl font-bold text-foreground mb-4">Đang tải câu hỏi...</div>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          </div>
        </section>
        <Footer />
        <ScrollToTop />
      </main>
    )
  }

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index)
  }

  const handleShowHint = () => {
    setShowHint(true)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowHint(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16 overflow-visible">
            <span className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 drop-shadow-md px-4 py-3 select-none leading-tight">
              Trắc Nghiệm Kiến Thức
            </span>
          </div>

          {/* Quiz Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            {/* Question Number */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-medium text-muted-foreground">
                Câu hỏi {currentQ.id} / {questions.length}
              </span>
              <div className="flex gap-2">
                {[...Array(questions.length)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i <= currentQuestion ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-6 leading-relaxed">
                {currentQ.question}
              </h2>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selectedAnswer === index
                      ? 'border-primary bg-primary/10 text-primary font-bold'
                      : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-sm leading-relaxed">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Hint Section */}
            {showHint && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 text-lg">💡</span>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <strong>Gợi ý:</strong> {currentQ.hint}
                  </p>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              {!showHint && (
                <button
                  onClick={handleShowHint}
                  className="px-6 py-3 bg-yellow-400 text-blue-900 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                >
                  Hiện gợi ý
                </button>
              )}
              
              {selectedAnswer !== null && (
                <button
                  onClick={handleNext}
                  className="px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-blue-800 transition-colors"
                >
                  {currentQuestion < questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
                </button>
              )}
            </div>
          </div>

          {/* Score Display */}
          <div className="bg-gradient-to-r from-primary to-blue-700 text-white rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Kết quả</h3>
            <p className="text-3xl font-black">
              {selectedAnswer !== null && selectedAnswer === currentQ.correct ? '✓ Đúng!' : 
               selectedAnswer !== null ? '✗ Chưa đúng' : 'Chọn câu trả lời'}
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </main>
  )
}
