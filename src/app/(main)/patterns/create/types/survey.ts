export type QuestionsType = Record<
  QuestionCategory,
  QuestionType | QuestionType[]
>

export interface CommonQuestionType {
  question: string
  answers: [string, string, string]
}

export interface QuestionType extends CommonQuestionType {
  color: QuestionColorType
}

export type QuestionColorType = 'Red' | 'Green' | 'Blue'
type Layer = 1 | 2
type QuestionCategory = `${QuestionColorType}${Layer}`
