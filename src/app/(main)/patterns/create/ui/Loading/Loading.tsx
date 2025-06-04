import { container } from './loading.css'

const LoadingStep = () => {
  return (
    <div className={container}>
      <video src={'/LoadingVideo.webm'} autoPlay muted />
    </div>
  )
}

export default LoadingStep
