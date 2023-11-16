import Image from "next/image";
import ButtonGreen from "@/components/ButtonGreen";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import ContentContainer from "@/components/ContentContainer";
import ContactForm from "@/components/ContactForm"
import Particles from "@/components/Particles";
import ButtonPurple from "@/components/ButtonPurple";

export default function Pipefy() {

  const cardsLightSection = [
    <Card key={'noCode'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/pipefy/iconNoCode.png"
          alt="Ícone automação sem código"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Automatize sem precisar de código
      </h3>
    </Card>,
    <Card key={'centralizedInfos'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/pipefy/iconIntegration.png"
          alt="Ícone Integre Times e Workflows"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Integre times e workflows
      </h3>
    </Card>,
    <Card key={'easyToUse'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/pipefy/iconEasyToUse.png"
          alt="Ícone Criação de Propostas"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Fácil para equipes de negócio e seguro para TI
      </h3>
    </Card>,
    <Card key={'AIPowered'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/pipefy/iconAIPowered.png"
          alt="Ícone Criação de Propostas"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Inteligência artificial para aumentar sua eficiência
      </h3>
    </Card>
  ];

  return (
    <>
      <main className="relative flex flex-col items-center justify-between bg-galileoPurple-400">
        <Particles
          className="fixed animate-fade-in z-10"
          quantity={200}
        />
        <div className="absolute right-[5vw] w-[35vw] h-[95vh] hidden md:block">
          <Image
            src="/pipefy/logoPipefy.svg"
            alt="Logo Pipefy"
            className="object-contain absolute"
            fill
            sizes="35vw"
          />
        </div>
        <section className="py-10 md:py-3 h-[95vh] relative w-full" id="pipefy-heroSection">
          <ContentContainer className="flex flex-row text-center relative z-10 pt-16 md:text-left">
            <div className="flex flex-col justify-center gap-5 text-white px-3 md:px-6 lg:px-8 md:w-2/3">
              <div className="mx-auto block md:hidden">
                <Image
                  src="/pipefy/logoPipefy.svg"
                  alt="Logo Pipefy"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                Crie e automatize seus processos <span className="text-galileoGreen-300"> em minutos! </span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                Estruture do seu jeito os fluxos de trabalho, automatize seus processos e centralize as informações em uma plataforma completa.
              </p>
              <ButtonGreen target="_blank" href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o" className="mr-auto" >
                Agendar reunião
              </ButtonGreen>
            </div>
          </ContentContainer>
        </section>

        <section className="relative flex w-full md:min-h-[75vh] pt-[5vh] bg-galileoPurple-100" id="pipefy-demoSection">
          <ContentContainer className="flex flex-row text-center md:text-left relative z-10 py-3 my-auto">
            <div className="flex flex-col justify-center gap-5 text-black px-3 md:px-6 md:w-2/3 lg:px-8 ">
              <div className="mx-auto block md:hidden">
                <Image
                  src="/pipefy/demoMultiDevice.png"
                  alt="Demonstração pipefy multidevice"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-galileoPurple-500"> Mensure, otimize e analise </span> seus resultados!
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                Crie painéis personalizáveis e tenha uma visão clara da performance do seu time.
              </p>
              <ButtonPurple
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o"
                className="mr-auto font-bold"
              >
                Agende uma Demonstração!
              </ButtonPurple>
            </div>
            <div className="mx-auto my-auto hidden md:block">
              <Image
                src="/pipefy/demoMultiDevice.png"
                alt="Demonstração pipefy multidevice"
                width={600}
                height={600}
              />
            </div>
          </ContentContainer>
        </section>

        <section className="w-full flex bg-galileoPurple-100 relative min-h-[75vh] overflow-x-scroll no-scrollbar" id="pipefy-exclusiveBonuses-light">
          <ContentContainer className="flex flex-col my-auto py-6 z-10 mb-[337px] lg:mb-[550px] xl:mb-[674px]">
            <h1 className="text-black text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-center">
              Crie e automatize workflows em minutos
              <br />
              <span className="text-galileoPurple-500 text-xl md:text-2xl lg:text-4xl xl:text-5xl font-medium mb-6"> com a ajuda de inteligência artificial</span>
            </h1>
            <div className="hidden lg:flex gap-6 mt-10 text-white">
              {cardsLightSection}
            </div>
            <div className="lg:hidden mt-10 text-white">
              <Carousel>
                {cardsLightSection}
              </Carousel>
            </div>
            <ButtonPurple
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o"
              className="mx-auto mt-5 font-bold"
            >
              Quero saber mais
            </ButtonPurple>
          </ContentContainer>
          <Image
            src="/pipefy/bottonImage.webp"
            alt="Demonstração view desktop"
            width={1900}
            height={654}
            className="absolute bottom-0 max-h-[654px] max-w-[80vw] ml-[10vw] object-contain"
          />
        </section>

        <section className="w-full flex bg-galileoPurple-400 relative pt-5 overflow-x-scroll no-scrollbar" id="pipefy-exclusiveBonuses-dark">
          <ContentContainer className="flex flex-col my-auto py-6 z-10">
            <Card bgColor="bg-white mb-10">
              <h1 className="text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-center md:px-4">Junte-se <span className="text-galileoPurple-500"> às principais organizações </span> do mundo</h1>
              <div className="flex flex-row justify-evenly w-100 mb-4">
                <Image
                  src="/pipefy/iconClienteToyota.webp"
                  alt="Logo Toyota"
                  width={200}
                  height={200}
                  className="my-auto h-46"
                />
                <Image
                  src="/pipefy/iconClienteCNHI.webp"
                  alt="Logo CNHI"
                  width={200}
                  height={200}
                  className="my-auto h-46"
                />
                <Image
                  src="/pipefy/iconClienteVolvo.webp"
                  alt="Logo Volvo"
                  width={200}
                  height={200}
                  className="my-auto h-46"
                />
                <Image
                  src="/pipefy/iconClienteIBM.webp"
                  alt="Logo IBM"
                  width={200}
                  height={200}
                  className="my-auto h-46"
                />
              </div>
            </Card>

            <ButtonGreen
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o"
                className="mx-auto font-bold"
              >
                Seja o próximo
              </ButtonGreen>
          </ContentContainer>
        </section>

        <section className="relative w-full bg-galileoPurple-400" id="contactForm">
          <ContentContainer className="w-full grid grid-cols-1 gap-x-20 gap-y-2 justify-between items-start relative z-10 my-10">
            <div className="flex flex-col justify-between max-w-[900px] mx-auto">
              <Card>
                <ContactForm />
              </Card>
            </div>
          </ContentContainer>
        </section>
      </main>
    </>
  )
}
