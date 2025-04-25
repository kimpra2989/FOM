export type QuestionsType = Record<
  QuestionCategory,
  QuestionType | QuestionType[]
>

export interface QuestionType {
  question: string
  answers: [string, string, string]
}

type Colors = 'Red' | 'Green' | 'Blue'
type Layer = 1 | 2
type QuestionCategory = `${Colors}${Layer}`
