import Image from "next/image";
import BackgroundImage from "@/components/BackgroundImage"
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import ContentContainer from "@/components/ContentContainer";
import ContactForm from "@/components/ContactForm"
import LightButton from "@/components/GradientButton";
import Particles from "@/components/Particles";

export default function Home() {

  const cards = [
    <Card key={'smartManagement'} bgColor="bg-galileoGray-400">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/iconGestaoInteligente.png"
          alt="Ícone Gestão Inteligente"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">
        Tecnologia a favor da Gestão
      </h3>
      <p className="leading-normal">
        Diagnóstico e construção de soluções personalizadas para a sua gestão.
      </p>
    </Card>,
    <Card key={'contentInovation'} bgColor="bg-galileoGray-400">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/iconMaisDoQueSoftware.png"
          alt="Ícone Gestão Inteligente"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">Estratégia de Implementação</h3>
      <p className="leading-normal">
        Análise completa de cada caso para uma implementação assertiva.
      </p>
    </Card>,
    <Card key={'moreThanSoftware'} bgColor="bg-galileoGray-400">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/iconInovacaoConstante.png"
          alt="Ícone Gestão Inteligente"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">Assistência sob medida</h3>
      <p className="leading-normal">
        Foco em atender necessidades específicas e resolver problemas.
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
        <div className="absolute right-[10vw] w-[40vw] h-[95vh] hidden md:block">
          <Image
            src="/rocket.jpg"
            alt="Foguete decolando"
            className="object-contain absolute"
            fill
            sizes="50vw"
          />
        </div>
        <section className="py-10 md:py-3 h-[95vh] relative w-full" id="heroSection">
          <ContentContainer className="flex flex-row text-center relative z-10 pt-16 md:text-left">
            <div className="flex flex-col justify-center gap-5 text-white px-3 md:px-6 lg:px-8 md:w-2/3">
              <div className="mx-auto block md:hidden">
                <Image
                  src="/home-view2-luneta-colorida.png"
                  alt="Luneta: GalileoSoft visando novos horizontes"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                Explore um universo de possibilidades!
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                A sinergia perfeita entre tecnologia e gestão para alcançar resultados extraordinários.
              </p>
              <LightButton target="_blank" href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o" className="mx-auto md:mr-auto" >
                Agendar reunião
              </LightButton>
            </div>
            <div className="scroll-down hidden md:block" />
          </ContentContainer>
        </section>

        <section className="relative flex w-full md:min-h-[75vh] pt-[5vh]" id="whyGalileoSoft">
          <ContentContainer className="flex flex-row text-center md:text-left relative z-10 py-3 my-auto">
            <div className="flex flex-col justify-center gap-5 text-white px-3 md:px-6 md:w-2/3 lg:px-8 ">
              <div className="mx-auto block md:hidden">
                <Image
                  src="/rocket.jpg"
                  alt="Luneta: GalileoSoft visando novos horizontes"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                A tecnologia é o combustível que leva as empresas a desbravar novos horizontes.
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                Somos apaixonados por explorar o cosmos digital em busca de tecnologias para facilitar a sua gestão.
              </p>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                Conte com nossa equipe experiente e dedicada para transformar suas metas em realidade e simplificar a gestão do seu negócio.
                Juntos, vamos alcançar horizontes além da imaginação.
              </p>
            </div>
            <div className="mx-auto my-auto hidden md:block">
              <Image
                src="/home-view2-luneta-colorida.png"
                alt="Luneta: GalileoSoft visando novos horizontes"
                width={400}
                height={400}
              />
            </div>
          </ContentContainer>
        </section>

        <section className="w-full flex bg-gradient-to-b from-galileoPurple-400 to-galileoPurple-900 relative min-h-[75vh] overflow-x-scroll no-scrollbar" id="howWeWork">
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
                Revolucione sua gestão!
              </p>
              <LightButton
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o"
                className="mx-auto"
              >
                Fale conosco
              </LightButton>
            </div>
          </ContentContainer>
        </section>

        <section className="relative w-full bg-galileoPurple-900">
          <ContentContainer className="w-full grid lg:grid-cols-2 gap-x-20 gap-y-2 justify-between items-start relative z-10 my-10">
            <div className="lg:col-span-1">
              <h1 className="text-5xl font-semibold pt-3 pb-8">Acelere sua empresa com soluções tecnológicas!
              </h1>
              <p className="text-2xl text-gray-200 font-medium pb-3">
                Cadastre-se e descubra como a tecnologia pode revolucionar sua gestão.
              </p>
            </div>
            <div className="lg:col-span-1 flex flex-col justify-between">
              <Card>
                <h1 className="text-purple-950 text-3xl text-left font-semibold mb-4">Seja um case de sucesso</h1>
                <ContactForm />
              </Card>
              <p className="text-center text-md font-semibold opacity-80 px-5 mt-4 lg:mt-0">Ao enviar esse formulário, você concorda em receber contatos da GalileoSoft.</p>
            </div>
          </ContentContainer>
        </section>


      </main>
    </>
  )
}
