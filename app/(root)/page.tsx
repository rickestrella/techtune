import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Tecnología en Sintonía Contigo
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              En TechTune, fusionamos la innovación con la calidad. Especializados en el diseño web y el mantenimiento de hardware, estamos aquí para sintonizar tu experiencia tecnológica.
            </p>
            <Button size={"lg"} asChild className="button w-full sm:w-fit">
              <Link href="#events">Ver más</Link>
            </Button>
          </div>
          <Image src={"/assets/images/hero.png"} width={1000} height={1000} alt="hero" className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"/>
        </div>
      </section>

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">No te pierdas <br /> De los mejores eventos</h2>
        <div className="flex w-full gap-5 flex-col md:flex-row">
          Search
          CategoryFilter
        </div>
      </section>
    </>
  );
}
