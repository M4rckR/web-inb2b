import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export const CarouselImagesHome = () => {
  return (
    <div className="bg-in-blue-main">
        <Carousel className="w-full">
    <CarouselContent className="flex">
        <CarouselItem className="bg-red-400"> 1 </CarouselItem>
        <CarouselItem className="bg-red-400"> 2 </CarouselItem>
        <CarouselItem className="bg-red-400"> 3 </CarouselItem>
        <CarouselItem className="bg-red-400"> 4 </CarouselItem>
        <CarouselItem className="bg-red-400"> 5 </CarouselItem>
        <CarouselItem className="bg-red-400"> 6 </CarouselItem>
        <CarouselItem className="bg-red-400"> 7 </CarouselItem>
    </CarouselContent>
</Carousel>
    </div>
  )
}
