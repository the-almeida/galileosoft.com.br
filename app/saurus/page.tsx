import Image from "next/image";
import ButtonGreen from "@/components/ButtonGreen";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import ContentContainer from "@/components/ContentContainer";
import ContactForm from "@/components/ContactForm"
import Particles from "@/components/Particles";
import ButtonPurple from "@/components/ButtonPurple";

export default function Saurus() {

  const cardsLightSection = [
    <Card key={'dashboard'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/saurus/iconDashboard.png"
          alt="Ícone Dashboard "
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Dashboard rápido para resumo das vendas com critérios variados.
      </h3>
    </Card>,
    <Card key={'userConfig'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/saurus/iconUserConfig.png"
          alt="Ícone Configurações de Usuários"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Configurações de regras de acesso e permissões por usuário.
      </h3>
    </Card>,
    <Card key={'customizableInterface'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/saurus/iconInterface.png"
          alt="Ícone Interface Customizada"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Interface personalizada para diversos segmentos do varejo.
      </h3>
    </Card>,
    <Card key={'fileGeneration'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/saurus/iconFileGeneration.png"
          alt="Ícone Geração de arquivos para balanças"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Geração de arquivos para balanças Toledo e Filizola.
      </h3>
    </Card>
  ];

  const cardsDarkSection = [
    <Card key={'timeControl'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/saurus/iconTimeControl.png"
          alt="Ícone controle por horário"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Controle de vendas por horário.
      </h3>
    </Card>,
    <Card key={'weight'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/saurus/iconWeightControl.png"
          alt="Ícone captura de peso em balança"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Captura peso em balança de caixa.
      </h3>
    </Card>,
    <Card key={'touchScreen'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/saurus/iconTouchScreen.png"
          alt="Ícone Gestão Inteligente"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Adaptado para tela touchscreen.
      </h3>
    </Card>,
    <Card key={'barCode'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/saurus/iconBarcode.png"
          alt="Ícone Gestão Inteligente"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Associação de diversos códigos ao mesmo item.
      </h3>
    </Card>
  ];

  const cardsDarkSection2 = [
    <Card key={'cashDesk'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/saurus/iconCashdesk.png"
          alt="Ícone Frente de caixa"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Frente de caixa com retaguarda local.
      </h3>
    </Card>,
    <Card key={'atacadoVarejo'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/saurus/iconAtacadoVarejo.png"
          alt="Ícone Controle vendas atacado e varejo"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Controle de vendas para atacado e varejo.
      </h3>
    </Card>,
    <Card key={'promocoes'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/saurus/iconPromocoes.png"
          alt="Ícone gerencie promoções"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Gestão de Promoções e desconto por produto.
      </h3>
    </Card>,
    <Card key={'promocoes'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/saurus/iconPrint.png"
          alt="Ícone imprima etiquetas"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Impressão de etiquetas de gôndolas e produtos.
      </h3>
    </Card>
  ];

  const cardsDarkCombined = [...cardsDarkSection, ...cardsDarkSection2];

  return (
    <>
      <main className="relative flex flex-col items-center justify-between bg-galileoPurple-400">
        <Particles
          className="fixed animate-fade-in z-10"
          quantity={200}
        />
        <div className="absolute right-[5vw] w-[35vw] h-[95vh] hidden md:block">
          <Image
            src="/saurus/logoSaurus.svg"
            alt="Logo Ploomes"
            className="object-contain absolute"
            fill
            sizes="35vw"
          />
        </div>
        <section className="py-10 md:py-3 h-[95vh] relative w-full" id="saurus-heroSection">
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
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                Transforme sua empresa em uma <span className="text-galileoGreen-300"> Máquina de Vendas</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
              A plataforma de frente de loja mais versátil do mercado, facilita suas vendas e te entrega informações estratégicas.
              </p>
              <ButtonGreen target="_blank" href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o" className="mr-auto" >
                Agendar reunião
              </ButtonGreen>
            </div>
          </ContentContainer>
        </section>

        <section className="relative flex w-full md:min-h-[75vh] pt-[5vh] bg-galileoPurple-100" id="saurus-demoSection">
          <ContentContainer className="flex flex-row text-center md:text-left relative z-10 py-3 my-auto">
            <div className="flex flex-col justify-center gap-5 text-black px-3 md:px-6 md:w-2/3 lg:px-8 ">
              <div className="mx-auto block md:hidden">
                <Image
                  src="/saurus/demoMultiDevice.png"
                  alt="Demonstração saurus multidevice"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                Mobilidade e praticidade nas vendas para <span className="text-galileoPurple-500">Impulsionar seu crescimento</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                Totalmente em nuvem, o Saurus facilita sua gestão, suas vendas e entrega informações vitais para tomadas de decisões.
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
                src="/saurus/demoMultiDevice.png"
                alt="Demonstração saurus multidevice"
                width={600}
                height={600}
              />
            </div>
          </ContentContainer>
        </section>

        <section className="w-full flex bg-galileoPurple-100 relative min-h-[75vh] overflow-x-scroll no-scrollbar" id="saurus-exclusiveBonuses-light">
          <ContentContainer className="flex flex-col my-auto py-6 z-10">
            <h1 className="text-black text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-center">
              Veja as vantagens de
              <br />
              <span className="text-galileoPurple-500 text-xl md:text-2xl lg:text-4xl xl:text-5xl font-medium mb-6"> ser um Cliente Saurus:</span>
            </h1>
            <div className="hidden lg:flex gap-6 mt-10 text-white">
              {cardsLightSection}
            </div>
            <div className="lg:hidden mt-10 text-white">
              <Carousel>
                {cardsLightSection}
              </Carousel>
            </div>
          </ContentContainer>
        </section>

        <section className="w-full flex bg-galileoPurple-400 relative overflow-x-scroll no-scrollbar" id="saurus-exclusiveBonuses-dark">
          <ContentContainer className="flex flex-col my-auto py-6 z-10">
            <div className="hidden lg:flex gap-6 mt-10 text-white">
              {cardsDarkSection}
            </div>
            <div className="hidden lg:flex gap-6 mt-20 text-white">
              {cardsDarkSection2}
            </div>
            <div className="lg:hidden mt-10 text-white">
              <Carousel>
                {cardsDarkCombined}
              </Carousel>
            </div>
            <div className="flex flex-col gap-5 my-10">
              <ButtonGreen
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o"
                className="mx-auto"
              >
                Quero saber mais!
              </ButtonGreen>
            </div>
          </ContentContainer>
        </section>

        <section className="relative w-full bg-galileoPurple-400" id="contactForm">
          <ContentContainer className="w-full grid grid-cols-1 gap-x-20 gap-y-2 justify-between items-start relative z-10 my-10">
            <div className="flex flex-col justify-between max-w-[900px] mx-auto">
              <Card>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-purple-950 text-center">
                  Acelere sua empresa com soluções tecnológicas!
                </h1>
                <p className="text-center text-md font-semibold opacity-80 px-5 mt-4 lg:mt-0 text-black mb-2">
                  Cadastre-se e descubra como a tecnologia pode revolucionar sua gestão.
                </p>
                <ContactForm />
              </Card>
            </div>
          </ContentContainer>
        </section>
      </main>
    </>
  )
}
