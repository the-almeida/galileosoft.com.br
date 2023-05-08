import BackgroundImage from "@/components/BackgroundImage";
import Card from "@/components/Card";
import ContentContainer from "@/components/ContentContainer";
import Particles from "@/components/Particles";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <section className="h-screen relative w-full" id="heroSection">
          <BackgroundImage
            src="/bgImageHomePageHeroSection.jpg"
            withOverlay
          />
          <ContentContainer className="flex flex-row pt-16 text-center md:text-left">
            <div className="flex flex-col justify-center gap-5 text-white md:w-2/3 px-3 md:px-6 lg:px-8">
              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                Inove e cresça com tecnologia de ponta.
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                Atuamos como agentes integradores entre as melhores ferramentas digitais do mercado, desenvolvedores altamente capacitados e a realidade tecnológica da sua empresa.
              </p>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                Somos seus parceiros em tecnologia para crescer e inovar com tecnologia de ponta.
              </p>
              <Link href="https://calendly/criar-evento-newton-account" className="bg-gradient-to-br from-pink-600 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-900 text-white text-lg font-medium rounded-lg w-fit px-5 py-2.5 text-center mr-2 mb-2">
                Agendar reunião
              </Link>
            </div>
            <div className="fixed md:relative flex flex-1 justify-center -ml-3 md:-ml-8 lg:-ml-13 -z-10">
              {/* <p>TODO: Trocar o backckgroud para um sem foguete e adicionar só o foguete no lugar desse paragrafo</p> */}
            </div>
          </ContentContainer>
        </section>

        <section className="w-full flex bg-black relative min-h-[65vh]" id="aboutSection">
          <Particles
            className="absolute animate-fade-in"
            quantity={200}
          />
          <ContentContainer className="flex flex-col text-black my-auto z-10">
            <span className="text-orange-500 font-bold text-center">
              São mais de 7 anos de história!
            </span>
            <h2 className="text-3xl text-center text-white font-bold">
              Conheça a GalileoSoft
            </h2>
            <div className="block lg:flex gap-6 mt-10">
              <Card>
                <h3 className="text-2xl font-bold text-black text-center mb-2">
                  Gestão inteligente
                </h3>
                <p className="text-gray-600 leading-normal">
                  Utilizamos nossa expertise de gestão em conjunto com nosso conhecimento tecnológico para identificar e resolver gargalos nos processos operacionais da sua empresa com agilidade.
                </p>
              </Card>
              <Card>
                <h3 className="text-2xl font-bold text-black text-center mb-2">Inovação constante</h3>
                <p className="text-gray-600 leading-normal">
                  Trabalhamos incansavelmente avaliando as tendências do mercado de tecnologia para conseguirmos oferecer soluções personalizadas, inovadoras e que atenderão suas necessidades por um longo prazo.
                </p>
              </Card>
              <Card>
                <h3 className="text-2xl font-bold text-black text-center mb-2">Mais do que Software</h3>
                <p className="text-gray-600 leading-normal">
                  O nosso diferencial é entender o lado humano e operacional de cada empresa para criar uma experiência encantadora para os seus clientes, prática para os seus colaboradores e lucrativa para você.
                </p>
              </Card>
            </div>
            <div className="flex flex-col gap-5 mt-10">
              <p className="text-lg leading-5 text-center font-semibold w-1/2 mx-auto">
                Estamos prontos expandir os horizontes do seu negócio, vamos juntos nessa jornada?
              </p>
              <Link href="https://calendly/criar-evento-newton-account" className="bg-gradient-to-br from-pink-600 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-900 text-white text-lg font-medium rounded-lg w-fit px-5 py-2.5 text-center mx-auto">
                Falar com especialista!
              </Link>
            </div>
          </ContentContainer>
        </section>
      </main>
    </>
  )
}
