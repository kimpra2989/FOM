export type AnswersType = [...Answer, ...Answer, ...Answer]

type Answer = [basicAnswer, basicAnswer, slideAnswer, slideAnswer, slideAnswer]
type basicAnswer = number | null
type slideAnswer = number | null
