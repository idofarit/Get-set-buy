"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import hero1 from "@/public/images/hero1.jpg";
import hero2 from "@/public/images/hero2.jpg";
import hero3 from "@/public/images/hero3.jpg";
import hero4 from "@/public/images/hero4.jpg";
import hero5 from "@/public/images/hero5.jpg";
import hero6 from "@/public/images/hero6.jpg";
import { supabase } from "@/utils/supabase";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
const carouselImages = [hero1, hero2, hero3, hero4, hero5, hero6];

function HeroCarousel() {
  return (
    <Carousel
      className="w-full max-w-xl m-auto"
      plugins={[Autoplay({ delay: 2000 })]}
    >
      <CarouselContent>
        {carouselImages?.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={image}
                    alt="hero"
                    className="w-full h-full rounded-md object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
export default HeroCarousel;
