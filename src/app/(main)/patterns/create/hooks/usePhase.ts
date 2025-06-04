import { useState } from 'react'

type Phase = 'survey' | 'loading' | 'result'

const useStep = () => {
  const [phase, setPhase] = useState<Phase>('survey')

  const shiftToResultPhase = () => {
    setPhase('loading')

    setTimeout(() => {
      setPhase('result')
    }, 4000)
  }

  return {
    phase,
    shiftToResultPhase,
  }
}

export default useStep
