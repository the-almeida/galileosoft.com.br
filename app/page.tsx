import BackgroundImage from "@/components/BackgroundImage";
import Card from "@/components/Card";
import ContentContainer from "@/components/ContentContainer";
import { MdPhone } from "react-icons/md";

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
              <button className="flex justify-center gap-4 rounded-sm bg-gray-600 w-fit px-6 py-4">
                <MdPhone size={18} /> TODO: Definir a CTA
              </button>
            </div>
            <div className="fixed md:relative flex flex-1 justify-center bg-slate-500/50 -ml-3 md:-ml-8 lg:-ml-13 -z-10">
              <p>TODO: Trocar o backckgroud para um sem foguete e adicionar só o foguete no lugar desse paragrafo</p>
            </div>
          </ContentContainer>
        </section>

        <section className="h-screen relative w-full" id="aboutSection">
          <BackgroundImage src="/bgImageHomePageAboutSection.jpg" withOverlay opacityScale={0.25} />
          <ContentContainer className="flex flex-col space-y-4 py-8">
            <h2 className="text-4xl text-center">Conheça a GalileoSoft</h2>
            <div className="block lg:flex gap-6">
              <Card>
                <h3 className="text-2xl font-bold text-black text-center mb-2">São mais de 7 anos de história</h3>
                <p className="text-gray-600 leading-normal">
                  A GalileoSoft surgiu em 2016 com foco em posicionamento digital associado a softwares personalizados. Desde então, utilizamos nossa expertise em gestão e tecnologia para oferecer soluções personalizadas e inovadoras para atender às necessidades específicas de cada cliente.
                </p>
              </Card>

              <Card>
                <h3 className="text-2xl font-bold text-black text-center mb-2">A inovação é nossa essência</h3>
                <p className="text-gray-600 leading-normal">
                  Desde nossa entrada no mercado, evoluímos constantemente para oferecer soluções modernas e eficazes. Muitas empresas não têm acesso às ferramentas de gestão avançadas, comprometendo sua competitividade. Estamos aqui para oferecer soluções personalizadas e avançadas que permitem que nossos clientes se destaquem.
                </p>
              </Card>

              <Card>
                <h3 className="text-2xl font-bold text-black text-center mb-2">O nosso diferencial</h3>
                <p className="text-gray-600 leading-normal">
                  Comprovamos em nossa experiência que a integração de ferramentas modernas de alta qualidade aos diferentes modelos de negócio é fundamental para o sucesso das empresas. O nosso diferencial está em conseguir conectar a realidade da operação às ferramentas de gestão com agilidade e eficiência, oferecendo uma solução personalizada e eficaz para cada cliente.
                </p>
              </Card>
            </div>

            <button className="flex justify-center gap-4 rounded-sm bg-gray-600 w-fit mx-auto px-6 py-4">
              <MdPhone size={18} /> TODO: Definir a CTA
            </button>
          </ContentContainer>
        </section>
      </main>
    </>
  )
}
