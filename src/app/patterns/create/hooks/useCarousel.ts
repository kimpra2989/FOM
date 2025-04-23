import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

const useCarousel = () => {
  const options: EmblaOptionsType = { axis: 'y' }

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    WheelGesturesPlugin(),
  ])

  const scrollNext = () => emblaApi?.scrollNext()
  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollTo = (index: number) => emblaApi?.scrollTo(index)

  return {
    ref: emblaRef,
    scrollNext,
    scrollPrev,
    scrollTo,
  }
}

export default useCarousel
export type CarouselHookReturnType = ReturnType<typeof useCarousel>
