import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center w-[100%]">
      <HeroCarousel />
      <div className="m-auto lg:text-right  text-center">
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          Get-set-buy
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          maxime laboriosam, deserunt velit qui quia? Dolor dolores esse
          corporis. Dolores.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
    </section>
  );
}
export default Hero;
