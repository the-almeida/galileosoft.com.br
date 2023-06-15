import ContentContainer from "@/components/ContentContainer";
import LightButton from "@/components/GradientButton";
import Particles from "@/components/Particles";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import Image from "next/image";

export default function Home() {

  const cards = [
    <Card key={'smartManagement'}>
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/iconGestaoInteligente.png"
          alt="Icone Gestão Inteligente"
          className="object-contain absolute"
          fill
        />
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">
        Gestão inteligente
      </h3>
      <p className="leading-normal">
        Utilizamos nossa expertise de gestão em conjunto com nosso conhecimento tecnológico para identificar e resolver gargalos nos processos operacionais da sua empresa com agilidade.
      </p>
    </Card>,
    <Card key={'contantInovation'}>
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/iconInovacaoConstante.png"
          alt="Icone Gestão Inteligente"
          className="object-contain absolute"
          fill
        />
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">Inovação constante</h3>
      <p className="leading-normal">
        Trabalhamos incansavelmente avaliando as tendências do mercado de tecnologia para conseguirmos oferecer soluções personalizadas, inovadoras e que atenderão suas necessidades por um longo prazo.
      </p>
    </Card>,
    <Card key={'moreThanSoftware'}>
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/iconMaisDoQueSoftware.png"
          alt="Icone Gestão Inteligente"
          className="object-contain absolute"
          fill
        />
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">Mais do que Software</h3>
      <p className="leading-normal">
        O nosso diferencial é entender o lado humano e operacional de cada empresa para criar uma experiência encantadora para os seus clientes, prática para os seus colaboradores e lucrativa para você.
      </p>
    </Card>
  ];

  return (
    <>
      <main className="relative flex flex-col items-center justify-between bg-galileoPurple-400">
        <Particles
          className="fixed animate-fade-in z-10"
          quantity={200}
        />
        <div className="absolute right-[10vw] w-[40vw] h-screen hidden md:block">
          <Image
            src="/rocket.jpg"
            alt="Foguete decolando"
            className="object-contain absolute"
            fill
            sizes="50vw"
          />
        </div>
        <section className="h-screen relative w-full" id="heroSection">
          <ContentContainer className="flex flex-row pt-16 text-center md:text-left relative z-10">
            <div className="flex flex-col justify-center gap-5 text-white px-3 md:px-6 lg:px-8 md:w-2/3">
              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                Inove e cresça com tecnologia de ponta.
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                Atuamos como agentes integradores entre as melhores ferramentas digitais do mercado, desenvolvedores altamente capacitados e a realidade tecnológica da sua empresa.
              </p>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                Somos seus parceiros em tecnologia para crescer e inovar com tecnologia de ponta.
              </p>
              <LightButton target="_blank" href="https://calendly.com/galileosoft-br" className="mx-auto" >
                Agendar avaliação
              </LightButton>
            </div>
          </ContentContainer>
        </section>

        <section className="w-full flex bg-gradient-to-b from-galileoPurple-400 to-galileoPurple-900 relative min-h-[75vh]" id="aboutSection">
          <ContentContainer className="flex flex-col my-auto py-6 z-10">
            <h1 className="text-center text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
              Simplificamos a sua Gestão
              <br />
              <span className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-medium mb-6">através da tecnologia</span>
            </h1>
            <div className="hidden lg:flex gap-6 mt-10 text-white">
              {cards}
            </div>
            <div className="lg:hidden mt-10 text-white">
              <Carousel>
                {cards}
              </Carousel>
            </div>
            <div className="flex flex-col gap-5 mt-10">
              <p className="text-lg leading-5 text-center font-semibold md:w-1/2 mx-auto">
                Estamos prontos para expandir os horizontes do seu negócio, vamos juntos nessa jornada?
              </p>
              <LightButton
                target="_blank"
                href="https://calendly.com/galileosoft-br"
                className="mx-auto"
              >
                Falar com especialista!
              </LightButton>
            </div>
          </ContentContainer>
        </section>
      </main>
    </>
  )
}
