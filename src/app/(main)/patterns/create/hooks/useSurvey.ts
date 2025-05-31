import { produce } from 'immer'
import { useCallback, useState } from 'react'
import { CommonQuestions, QUESTIONS } from '../constants'
import { CommonQuestionType, QuestionType } from '../types'
import { AnswersType } from '../ui/Survey/types'

const useSurvey = (onSurveyEnd: () => void) => {
  // 질문
  const [questions, setQuestions] = useState<
    (QuestionType | CommonQuestionType)[]
  >([
    QUESTIONS.Red1,
    QUESTIONS.Red2[0],
    ...CommonQuestions,
    QUESTIONS.Green1,
    QUESTIONS.Green2[0],
    ...CommonQuestions,
    QUESTIONS.Blue1,
    QUESTIONS.Blue2[0],
    ...CommonQuestions,
  ])

  const setNextQuestionFromAnswer = useCallback(
    (currentIdx: number, newQuestion: QuestionType) => {
      setQuestions(
        produce((prevQuestion) => {
          prevQuestion[currentIdx + 1] = newQuestion
        })
      )
    },
    []
  )

  // 답변
  const [answers, setAnswers] = useState<AnswersType>(
    new Array(questions.length).fill(null) as AnswersType
  )

  const setNthAnswer = useCallback(
    (idx: number) => (value: number) => {
      setAnswers(
        produce((prevAnswer) => {
          prevAnswer[idx] = value
        })
      )

      // 다음 질문 조정
      switch (idx) {
        case 0:
          setNextQuestionFromAnswer(idx, QUESTIONS['Red2'][value])
          break
        case questions.length / 3:
          setNextQuestionFromAnswer(idx, QUESTIONS['Green2'][value])
          break
        case (questions.length / 3) * 2:
          setNextQuestionFromAnswer(idx, QUESTIONS['Blue2'][value])
          break
        case questions.length - 1:
          onSurveyEnd?.()
          break
      }
    },
    [questions.length, setNextQuestionFromAnswer, onSurveyEnd]
  )

  return {
    questions,
    answers,
    setNthAnswer,
  }
}

export default useSurvey
