export type Questions = Record<QuestionCategory, Question | Question[]>

interface Question {
  title: string
  answers: [string, string, string]
}

type Colors = 'Red' | 'Green' | 'Blue'
type Layer = 1 | 2
type QuestionCategory = `${Colors}${Layer}`
