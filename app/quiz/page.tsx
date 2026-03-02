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
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([])
  const [showResults, setShowResults] = useState(false)
  const [showAnswerResult, setShowAnswerResult] = useState(false)

  useEffect(() => {
    fetch('/quiz.json')
      .then(response => response.json())
      .then(data => {
        setQuestions(data)
        setUserAnswers(new Array(data.length).fill(null))
      })
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
    const newAnswers = [...userAnswers]
    newAnswers[currentQuestion] = index
    setUserAnswers(newAnswers)
    setShowAnswerResult(true)
  }

  const handleShowHint = () => {
    setShowHint(true)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(userAnswers[currentQuestion + 1])
      setShowHint(false)
      setShowAnswerResult(false)
    } else {
      setShowResults(true)
    }
  }

  const calculateScore = () => {
    let correct = 0
    let incorrect = 0
    questions.forEach((question, index) => {
      if (userAnswers[index] !== null) {
        if (userAnswers[index] === question.correct) {
          correct++
        } else {
          incorrect++
        }
      }
    })
    return { correct, incorrect, total: questions.length }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowHint(false)
    setUserAnswers(new Array(questions.length).fill(null))
    setShowResults(false)
    setShowAnswerResult(false)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16 overflow-visible">
            <span className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 drop-shadow-md px-4 py-3 select-none leading-tight">
              {showResults ? 'Kết Quả Quiz' : 'Trắc Nghiệm Kiến Thức'}
            </span>
          </div>

          {/* Results Screen */}
          {showResults && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              {/* Score Summary */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                  <span className="text-3xl font-bold text-white">
                    {Math.round((calculateScore().correct / calculateScore().total) * 100)}%
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {calculateScore().correct >= calculateScore().total * 0.8 ? 'Xuất sắc!' : 
                   calculateScore().correct >= calculateScore().total * 0.6 ? 'Khá tốt!' : 
                   calculateScore().correct >= calculateScore().total * 0.4 ? 'Cần cố gắng thêm!' : 'Hãy thử lại nhé!'}
                </h2>
                <div className="flex justify-center gap-6 mt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">{calculateScore().correct}</div>
                    <div className="text-sm text-muted-foreground">Đúng</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600">{calculateScore().incorrect}</div>
                    <div className="text-sm text-muted-foreground">Sai</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-600">{calculateScore().total}</div>
                    <div className="text-sm text-muted-foreground">Tổng</div>
                  </div>
                </div>
              </div>

              {/* Detailed Results */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Chi tiết kết quả</h3>
                <div className="space-y-3">
                  {questions.map((question, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          userAnswers[index] === question.correct 
                            ? 'bg-green-100 text-green-700' 
                            : userAnswers[index] !== null 
                            ? 'bg-red-100 text-red-700'
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          {userAnswers[index] === question.correct ? '✓' : 
                           userAnswers[index] !== null ? '✗' : '?'}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground mb-2">
                            Câu {question.id}: {question.question}
                          </div>
                          <div className="text-sm space-y-1">
                            <div className="text-muted-foreground">
                              Bạn chọn: <span className={`font-medium ${
                                userAnswers[index] === question.correct ? 'text-green-600' : 
                                userAnswers[index] !== null ? 'text-red-600' : 'text-gray-500'
                              }`}>
                                {userAnswers[index] !== null ? question.options[userAnswers[index]] : 'Không chọn'}
                              </span>
                            </div>
                            {userAnswers[index] !== question.correct && (
                              <div className="text-green-600">
                                Đáp án đúng: <span className="font-medium">{question.options[question.correct]}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center mt-8">
                <button
                  onClick={resetQuiz}
                  className="px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-blue-800 transition-colors"
                >
                  Làm lại
                </button>
              </div>
            </div>
          )}

          {/* Quiz Content */}
          {!showResults && (
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
                  disabled={selectedAnswer !== null}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selectedAnswer === index
                      ? 'border-primary bg-primary/10 text-primary font-bold'
                      : selectedAnswer !== null
                      ? index === currentQ.correct
                        ? 'border-green-400 bg-green-50 text-green-700'
                        : 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                      : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
                  } ${selectedAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      selectedAnswer === index
                        ? 'bg-primary text-white'
                        : selectedAnswer !== null
                        ? index === currentQ.correct
                          ? 'bg-green-400 text-white'
                          : 'bg-gray-300 text-gray-500'
                        : 'bg-gray-100'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className={`text-sm leading-relaxed ${
                      selectedAnswer === index
                        ? 'font-bold'
                        : selectedAnswer !== null && index === currentQ.correct
                        ? 'font-medium text-green-700'
                        : selectedAnswer !== null
                        ? 'text-gray-400'
                        : ''
                    }`}>{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Answer Result */}
            {showAnswerResult && selectedAnswer !== null && (
              <div className={`border rounded-lg p-4 mb-6 ${
                selectedAnswer === currentQ.correct 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-red-50 border-red-200'
              }`}>
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    selectedAnswer === currentQ.correct 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {selectedAnswer === currentQ.correct ? '✓' : '✗'}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium leading-relaxed ${
                      selectedAnswer === currentQ.correct 
                        ? 'text-green-800' 
                        : 'text-red-800'
                    }`}>
                      {selectedAnswer === currentQ.correct 
                        ? 'Chính xác! Đáp án của bạn đúng.' 
                        : 'Chưa chính xác!'}
                    </p>
                    {selectedAnswer !== currentQ.correct && (
                      <p className="text-sm text-green-700 mt-1">
                        <strong>Đáp án đúng:</strong> {currentQ.options[currentQ.correct]}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

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
          )}
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </main>
  )
}
