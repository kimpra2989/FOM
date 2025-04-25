export type Answers = [...Answer, ...Answer, ...Answer]

type Answer = [basicAnswer, basicAnswer, slideAnswer]
type basicAnswer = number | null
type slideAnswer = number[] | null
