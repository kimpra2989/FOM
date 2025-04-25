import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { useEffect, useState } from 'react'

const useCarousel = () => {
  const options: EmblaOptionsType = { axis: 'y' }

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    WheelGesturesPlugin(),
  ])

  const scrollNext = () => emblaApi?.scrollNext()
  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollTo = (index: number) => emblaApi?.scrollTo(index)

  // 현재 슬라이드 idx
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setCurrentSlideIdx(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return {
    ref: emblaRef,
    scrollNext,
    scrollPrev,
    scrollTo,
    currentSlideIdx,
  }
}

export default useCarousel
export type CarouselHookReturnType = ReturnType<typeof useCarousel>
