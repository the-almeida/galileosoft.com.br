import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="fixed -z-20 w-full h-screen">
        <div className="bg-gray-900/50 md:bg-gray-900/20 w-full h-screen z-0" />
        {/* TODO Improve this asset and structure: only bg here with overlay + the rocket inside the layout below (review unnecessary margins and width like 'sm:w-3/4 lg:w-1/2 xl:pr-[5%]') */}
        <Image
          className="-z-10"
          src="/bgImageHomePageHeroSection.jpg"
          alt="Background Image purple with a rocket."
          fill
        />
      </div>
      <main className="flex h-screen max-w-7xl mx-auto flex-col items-center justify-between p-6 md:p-10 lg:p-16">
        <section className="h-full" id="hero-section">
          <div className="flex flex-col justify-center gap-5 text-white h-full text-center sm:text-left sm:w-3/4 lg:w-1/2 xl:pr-[5%]">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
              Inove e cresça com tecnologia de ponta.
            </h1>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
              Atuamos como agentes integradores entre as melhores ferramentas digitais do mercado, desenvolvedores altamente capacitados e a realidade tecnológica da sua empresa.
            </p>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
              Somos seus parceiros em tecnologia para crescer e inovar com tecnologia de ponta.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
