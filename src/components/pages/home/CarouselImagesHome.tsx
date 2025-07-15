import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export const CarouselImagesHome = () => {
  return (
    <div className="bg-in-blue-main">
        <Carousel>
    <CarouselContent className="flex flex-nowrap overflow-hidden">
        <CarouselItem className="min-w-[25%] flex-shrink-0 bg-red-400"> 1 </CarouselItem>
        <CarouselItem className="min-w-[25%] flex-shrink-0 bg-red-400"> 2 </CarouselItem>
        <CarouselItem className="min-w-[25%] flex-shrink-0 bg-red-400"> 3 </CarouselItem>
        <CarouselItem className="min-w-[25%] flex-shrink-0 bg-red-400"> 4 </CarouselItem>
        <CarouselItem className="min-w-[25%] flex-shrink-0 bg-red-400"> 5 </CarouselItem>
        <CarouselItem className="min-w-[25%] flex-shrink-0 bg-red-400"> 6 </CarouselItem>
        <CarouselItem className="min-w-[25%] flex-shrink-0 bg-red-400"> 7 </CarouselItem>
    </CarouselContent>
</Carousel>
    </div>
  )
}
