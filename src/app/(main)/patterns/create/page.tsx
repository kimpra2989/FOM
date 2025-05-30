'use client'

import { useBeforeUnload } from '#/hooks'
import { usePhase, useSurvey } from './hooks'
import { LoadingStep, ResultStep, SurveyStep } from './ui'

export default function CreatePatternPage() {
  useBeforeUnload()

  const { phase, shiftToResultPhase } = usePhase()
  const { questions, setNthAnswer, answers } = useSurvey(shiftToResultPhase)

  if (phase === 'survey')
    return <SurveyStep questions={questions} setNthAnswer={setNthAnswer} />
  if (phase === 'loading') return <LoadingStep />
  if (phase === 'result') return <ResultStep answer={answers as number[]} />
}
