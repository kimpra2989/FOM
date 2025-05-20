export type QuestionsType = Record<
  QuestionCategory,
  QuestionType | QuestionType[]
>

export interface QuestionType {
  question: string
  answers: [string, string, string]
  color: QuestionColorType
}

export type QuestionColorType = 'Red' | 'Green' | 'Blue'
type Layer = 1 | 2
type QuestionCategory = `${QuestionColorType}${Layer}`
