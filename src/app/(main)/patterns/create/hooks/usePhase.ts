import { useState } from 'react'

type Phase = 'survey' | 'loading' | 'result'

const useStep = () => {
  const [phase, setPhase] = useState<Phase>('survey')

  const shiftToResultPhase = () => {
    setPhase('loading')

    setTimeout(() => {
      setPhase('result')
    }, 3000)
  }

  return {
    phase,
    shiftToResultPhase,
  }
}

export default useStep
