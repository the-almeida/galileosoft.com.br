import BackgroundImage from "@/components/BackgroundImage";
import Container from "@/components/FlexContainer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* TODO Improve the bgImageHomePageHeroSection, move the rocket to the #heroSection*/}
      
      <main className="flex flex-col items-center justify-between">
        <section className="h-screen relative w-full" id="heroSection">
          <BackgroundImage
            src="/bgImageHomePageHeroSection.jpg"
            withOverlay
          />
          <Container className="flex-row">
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
            </div>
            <div className="absolute md:relative min-h-screen md:min-h-fit w-full flex flex-1 justify-center bg-slate-500/50 mt-16 -z-10">
              <p>Foguete</p>
            </div>
          </Container>
        </section>

        <section className="bg-red-600 h-screen" id="aboutSection">
          <h2 className="text-2xl">Conheça a GalileoSoft</h2>
          <div>
            <h3 className="text-2xl">São mais de 7 anos de história</h3>
            <p>
              A GalileoSoft surgiu em 2016 com foco em posicionamento digital associado a softwares personalizados.
            </p>
          </div>
          <div>
            <h3>A inovação é nossa essência</h3>
            <p>
              Desde a nossa entrada no mercado buscamos evoluir constantemente. Por conta disso notamos que muitas empresas que nos contratavam não tinham acesso às mais novas e modernas ferramentas de gestão.
              <strong>Estamos aqui para acabar com esse problema.</strong>
            </p>

          </div>
          <div>
            <h3>O nosso diferencial</h3>
            <p>
              Identificamos que integrar e adaptar ferramentas modernas de altíssima qualidade (com reconhecimento nacional) aos negócios tradicionais seria o caminho que trilharíamos.
              <strong> 
                Nosso trunfo é conseguir conectar a realidade da operação às ferramentas de gestão com agilidade.
              </strong>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
