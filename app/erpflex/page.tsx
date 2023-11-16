import Image from "next/image";
import ButtonGreen from "@/components/ButtonGreen";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import ContentContainer from "@/components/ContentContainer";
import ContactForm from "@/components/ContactForm"
import Particles from "@/components/Particles";
import ButtonPurple from "@/components/ButtonPurple";

export default function Erpflex() {

  const cardsLightSection = [
    <Card key={'rotinasSimplificadas'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/erpflex/iconRotinasSimplificadas.png"
          alt="Ícone rotinas simplificadas"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Rotinas simplificadas com gestão integrada, otimizando os ganhos da empresa.
      </h3>
    </Card>,
    <Card key={'metas'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/erpflex/iconMetas.png"
          alt="Ícone indicadores e metas personalizados"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Marcação de indicadores e metas personalizadas para o seu negócio.
      </h3>
    </Card>,
    <Card key={'nuvem'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/erpflex/iconNuvem.png"
          alt="Ícone informações salvas na nuvem"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Informações salvas na nuvem. Acompanhe de qualquer lugar através do seu navegador.
      </h3>
    </Card>,
    <Card key={'tempoOtimizado'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/erpflex/iconTempoOtimizado.png"
          alt="Ícone otimize seu tempo"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Otimize seu tempo com uma gestão simples, eficiente e com um valor justo.
      </h3>
    </Card>
  ];

  const cardsDarkSection = [
    <Card key={'consusltas'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/erpflex/iconConsultasPersonalizadas.png"
          alt="Ícone consultas personalizadas"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Consultas personalizadas:
      </h3>
      <h3 className="text-black text-2xl font-normal text-center mb-2">
        Busque qualquer informação acessando os dados do sistema de acordo com cada necessidade.
      </h3>
    </Card>,
    <Card key={'planilhas'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/erpflex/iconPlanilhasDirecionadas.png"
          alt="Ícone planilhas direcionadas"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Planilhas direcionadas:
      </h3>
      <h3 className="text-black text-2xl font-normal text-center mb-2">
        O Flexcel permite criar, planilhas customizadas com informações específicas da sua empresa.
      </h3>
    </Card>,
    <Card key={'formularios'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/erpflex/iconPersonalizeFormularios.png"
          alt="Ícone personalize seus formulários"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Personalize seus formulários:
      </h3>
      <h3 className="text-black text-2xl font-normal text-center mb-2">
        FlexDB: Adicione campos em telas já existentes, personalizando ainda mais ao seu negócio.
      </h3>
    </Card>,
    <Card key={'relatorios'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/erpflex/iconRelatoriosCustomizados.png"
          alt="Ícone personalize seus relatórios"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Relatórios customizados:
      </h3>
      <h3 className="text-black text-2xl font-normal text-center mb-2">
        Personalize documentos como Orçamentos, Ordens de serviço, etc. Conforme a sua necessidade.
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
            src="/erpflex/logoErpflex.svg"
            alt="Logo erpflex"
            className="object-contain absolute"
            fill
            sizes="35vw"
          />
        </div>
        <section className="py-10 md:py-3 h-[100vh] relative w-full" id="erpflex-heroSection">
          <ContentContainer className="flex flex-row text-center relative z-10 pt-16 md:text-left">
            <div className="flex flex-col justify-center gap-5 text-white px-3 md:px-6 lg:px-8 md:w-2/3">
              <div className="mx-auto block md:hidden">
                <Image
                  src="/erpflex/logoErpflex.svg"
                  alt="Logo erpflex"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                <span className="text-galileoGreen-300">O ERP Completo e Flexível </span>
                para Elevar Seus Resultados!
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                A 1ª solução na nuvem com backoffice e e-commerce nativos na mesma plataforma com funcionalidades integradas.
              </p>
              <ButtonGreen target="_blank" href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o" className="mr-auto" >
                Agendar reunião
              </ButtonGreen>
            </div>
          </ContentContainer>
        </section>

        <section className="relative flex w-full md:min-h-[75vh] pt-[5vh] bg-galileoPurple-100" id="erpflex-demoSection">
          <ContentContainer className="flex flex-row text-center md:text-left relative z-10 py-3 my-auto">
            <div className="flex flex-col justify-center gap-5 text-black px-3 md:px-6 md:w-2/3 lg:px-8 ">
              <div className="mx-auto block md:hidden">
                <Image
                  src="/erpflex/demoMultiDevice.png"
                  alt="Demonstração erpflex multidevice"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                O <span className="text-galileoPurple-500">Sistema de Gestão Empresarial</span> que você precisa para
                <span className="text-galileoPurple-500">Alavancar Seu Negócio.</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                Tenha em mãos todas as ferramentas necessárias para o crescimento da sua empresa.
              </p>
              <ButtonPurple
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o"
                className="mr-auto font-bold"
              >
                Agendar Demonstração!
              </ButtonPurple>
            </div>
            <div className="mx-auto my-auto hidden md:block">
              <Image
                src="/erpflex/demoMultiDevice.png"
                alt="Demonstração erpflex multidevice"
                width={600}
                height={600}
              />
            </div>
          </ContentContainer>
        </section>

        <section className="w-full flex bg-galileoPurple-100 relative min-h-[75vh] overflow-x-scroll no-scrollbar" id="erpflex-exclusiveBonuses-light">
          <ContentContainer className="flex flex-col my-auto py-6 z-10">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-black text-center">
              Veja os benefícios
              <br />
              <span className="text-galileoPurple-500 text-xl md:text-2xl lg:text-4xl xl:text-5xl font-medium mb-6"> que o ERPFlex te oferece!</span>
            </h1>
            <div className="hidden lg:flex gap-6 mt-10 text-white">
              {cardsLightSection}
            </div>
            <div className="lg:hidden mt-10 text-white">
              <Carousel>
                {cardsLightSection}
              </Carousel>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-black text-center my-2">
              São mais de 2.000 rotinas empresariais
              <span className="text-galileoPurple-500 text-xl md:text-2xl lg:text-4xl xl:text-5xl font-medium mb-6"> trasnformadas com ERPFlex.</span>
            </h1>
          </ContentContainer>
        </section>

        <section className="w-full flex bg-galileoPurple-400 relative min-h-[75vh] overflow-x-scroll no-scrollbar" id="erpflex-exclusiveBonuses-dark">
          <ContentContainer className="flex flex-col my-auto py-6 z-10">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
              Conheça as principais tecnologias
              <span className="text-galileoGreen-300"> embutidas no ERPFlex</span>
            </h1>
            <div className="hidden lg:flex gap-6 mt-10 text-white">
              {cardsDarkSection}
            </div>
            <div className="lg:hidden mt-10 text-white">
              <Carousel>
                {cardsDarkSection}
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
                <ContactForm />
              </Card>
            </div>
          </ContentContainer>
        </section>
      </main>
    </>
  )
}
