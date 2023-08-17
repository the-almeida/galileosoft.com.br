import Link from "next/link";
import Image from "next/image";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import ContactForm from "@/components/ContactForm";
import ContentContainer from "@/components/ContentContainer"
import LightButton from "@/components/GradientButton";

export default function Servicos() {

  const cardsForClients = [
    <Card key={'ploomes'} className="flex flex-col justify-between h-full" bgColor="bg-gradient-to-b from-galileoPurple-400 to-galileoPurple-900">
      <div className="relative h-28 w-28 mx-auto pb-6 mb-6">
        <Image
          src="/servicosPloomes.svg"
          alt="Ícone Ploomes"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">
        Ploomes
      </h3>
      <p className="leading-normal mb-4">
        Esta é a resposta para um relacionamento excepcional com seus clientes.
      </p>
      <Link
        target="_blank"
        href="/ploomes"
        className="block text-white text-center text-lg font-bold rounded-lg mt-2 px-6 py-3 bg-gradient-to-br from-cyan-500 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        Encante seus clientes!
      </Link>
    </Card>,
    <Card key={'saurus'} className="flex flex-col justify-between h-full" bgColor="bg-gradient-to-b from-galileoPurple-400 to-galileoPurple-900">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/servicosSaurus.svg"
          alt="Ícone Saurus"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">Saurus</h3>
      <p className="leading-normal mb-4">
        Transforme sua empresa em uma máquina de vendas!
      </p>
      <Link
        target="_blank"
        href="/saurus"
        className="block text-white text-center text-lg font-bold rounded-lg mt-auto px-6 py-3 bg-gradient-to-br from-cyan-500 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        Aumente suas vendas!
      </Link>
    </Card>,
    <Card key={'mobbiz'} className="flex flex-col justify-between h-full" bgColor="bg-gradient-to-b from-galileoPurple-400 to-galileoPurple-900">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/servicosMobbiz.svg"
          alt="Ícone Gestão Inteligente"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">Mobbiz</h3>
      <p className="leading-normal">
        Gerencie pedidos 24 horas por dia sem perder o sono.
      </p>
      <Link
        target="_blank"
        href="/mobbiz"
        className="block text-white text-center text-lg font-bold rounded-lg mt-auto px-6 py-3 bg-gradient-to-br from-cyan-500 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        Melhore suas entregas!
      </Link>
    </Card>
  ];

  const cardsForManagement = [
    <Card key={'erpFlex'} className="flex flex-col justify-between h-full" bgColor="bg-gradient-to-b from-galileoPurple-900 to-galileoPurple-400">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/servicosErpflex.svg"
          alt="Ícone ERPFlex"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">
        ERPFlex
      </h3>
      <p className="leading-normal">
        A flexibilidade que impulsiona o crescimento do seu negócio.
      </p>
      <Link
        target="_blank"
        href="/erpflex"
        className="block text-white text-center text-lg font-bold rounded-lg mt-2 px-6 py-3 bg-gradient-to-br from-cyan-500 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        Melhore sua gestão!
      </Link>
    </Card>,
    <Card key={'pipefy'} className="flex flex-col justify-between h-full" bgColor="bg-gradient-to-b from-galileoPurple-900 to-galileoPurple-400">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/servicosPipefy.svg"
          alt="Ícone Pipefy"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">Pipefy</h3>
      <p className="leading-normal">
        Automatize processos e aumente a produtividade da sua equipe.
      </p>
      <Link
        target="_blank"
        href="/ploomes"
        className="block text-white text-center text-lg font-bold rounded-lg mt-2 px-6 py-3 bg-gradient-to-br from-cyan-500 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        Estruture seus processos!
      </Link>
    </Card>,
    <Card key={'devPersonalizado'} className="flex flex-col justify-between h-full" bgColor="bg-gradient-to-b from-galileoPurple-900 to-galileoPurple-400">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/servicosDevPersonalizado.svg"
          alt="Ícone Desenvolvimento Personalizado"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">Desenvolvimento Personalizado</h3>
      <p className="leading-normal">
        Soluções sob medida para resolver problemas e otimizar sua dinâmica de trabalho.
      </p>
      <Link
        target="_blank"
        href="/ploomes"
        className="block text-white text-center text-lg font-bold rounded-lg mt-2 px-6 py-3 bg-gradient-to-br from-cyan-500 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        Construir uma solução perfeita
      </Link>
    </Card>
  ];


  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16 bg-galileoPurple-900">
      <section className="relative text-center h-screen flex flex-col justify-center w-full bg-gradient-to-b from-galileoPurple-900 to-galileoPurple-400" id="servicesHeroSection">
        <ContentContainer className="flex flex-row relative z-10 my-10">
          <div className="flex flex-col justify-center gap-5 text-white px-3 md:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
              Eleve-se a novos patamares tecnológicos e desbloqueie o crescimento da sua empresa!
            </h1>
            <div className="space-x-5">
              <LightButton target="_blank" href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o" className="mx-auto md:mr-auto" >
                Para seus clientes
              </LightButton>
              <LightButton target="_blank" href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o" className="mx-auto md:mr-auto" >
                Para sua gestão
              </LightButton>
            </div>
          </div>
        </ContentContainer>
      </section>

      <section className="w-full flex bg-gradient-to-b from-galileoPurple-400 to-galileoPurple-900 relative min-h-[75vh] overflow-x-scroll no-scrollbar" id="servicesToYourClients">
        <ContentContainer className="flex flex-col my-auto py-6 z-10">
          <h1 className="text-center text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold mb-4">
            Experiências incríveis geram clientes fiéis
          </h1>
          <p className="text-base text-center md:text-lg lg:text-xl xl:text-2xl">
            Conquiste a lealdade do seu público-alvo com soluções de excelência.
          </p>
          <div className="hidden lg:flex gap-6 mt-10 text-white">
            {cardsForClients}
          </div>
          <div className="lg:hidden mt-10 text-white">
            <Carousel>
              {cardsForClients}
            </Carousel>
          </div>
          <div className="flex flex-col gap-5 mt-10">
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

      <section className="w-full flex bg-gradient-to-b from-galileoPurple-900 to-galileoPurple-400 relative min-h-[75vh] overflow-x-scroll no-scrollbar" id="servicesToYourManagement">
        <ContentContainer className="flex flex-col my-auto py-6 z-10">
          <h1 className="text-center text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold mb-4">
            Tecnologia de ponta para Turbinar seu Crescimento
          </h1>
          <p className="text-base text-center md:text-lg lg:text-xl xl:text-2xl">
            Desenvolvimento customizado para maximizar seus resultados!
          </p>
          <div className="hidden lg:flex gap-6 mt-10 text-white">
            {cardsForManagement}
          </div>
          <div className="lg:hidden mt-10 text-white">
            <Carousel>
              {cardsForManagement}
            </Carousel>
          </div>
          <div className="flex flex-col gap-5 mt-10">
            <LightButton
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o"
              className="mx-auto"
            >
              Entre em contato
            </LightButton>
          </div>
        </ContentContainer>
      </section>

      <section className="relative w-full bg-gradient-to-b from-galileoPurple-400 to-galileoPurple-900" id="contactForm">
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
  )
}
