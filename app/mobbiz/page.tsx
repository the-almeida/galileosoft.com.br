import Image from "next/image";
import ButtonGreen from "@/components/ButtonGreen";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import ContentContainer from "@/components/ContentContainer";
import ContactForm from "@/components/ContactForm"
import Particles from "@/components/Particles";
import ButtonPurple from "@/components/ButtonPurple";

export default function Mobbiz() {

  const cardsLightSection = [
    <Card key={'24hrs'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/mobbiz/icon24hrs.png"
          alt="Ícone atendimento 24hrs"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Plataforma on-line 24 horas para os seus clientes realizarem pedidos.
      </h3>
    </Card>,
    <Card key={'metas'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/mobbiz/iconMetas.png"
          alt="Ícone Metas e cotas"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Inserção e verificação de metas e cotas de vendas, com configuração flexíveis.
      </h3>
    </Card>,
    <Card key={'historico'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/mobbiz/iconHistorico.png"
          alt="Ícone Histórico e status"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Visualização de histórico de compras e posicionamento de cada solicitação.
      </h3>
    </Card>,
    <Card key={'comissoes'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/mobbiz/iconComissoes.png"
          alt="Ícone gerenciamento de comissões"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Cálculo de comissões e acompanhamento de atividades dos vendedores.
      </h3>
    </Card>
  ];

  const cardsDarkSection = [
    <Card key={'produtividade'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/mobbiz/iconProdutividade.png"
          alt="Ícone aumente sua produtividade"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Mais produtividade e gestão do tempo da sua equipe.
      </h3>
    </Card>,
    <Card key={'promocoes'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/mobbiz/iconPromocoes.png"
          alt="Ícone divulque suas promoções"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Espaço para divulgação de promoções e campanhas.
      </h3>
    </Card>,
    <Card key={'agilidade'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/mobbiz/iconAgilidade.png"
          alt="Ícone agilidade nos pedidos"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Agilidade nos pedidos e fechamentos.
      </h3>
    </Card>,
    <Card key={'ofline'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/mobbiz/iconOfiline.png"
          alt="Ícone emissão de pedidos ofline"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Emissão de pedidos off-line.
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
            src="/mobbiz/logoMobbiz.svg"
            alt="Logo Mobbiz"
            className="object-contain absolute"
            fill
            sizes="35vw"
          />
        </div>
        <section className="py-10 md:py-3 h-[95vh] relative w-full" id="mobbiz-heroSection">
          <ContentContainer className="flex flex-row text-center relative z-10 pt-16 md:text-left">
            <div className="flex flex-col justify-center gap-5 text-white px-3 md:px-6 lg:px-8 md:w-2/3">
              <div className="mx-auto block md:hidden">
                <Image
                  src="/mobbiz/logoMobbiz.svg"
                  alt="Logo Mobbiz"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                <span className="text-galileoGreen-300">Mais vendas </span>para sua equipe,
                <span className="text-galileoGreen-300"> mais gestão </span> para sua empresa
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                Simplifique o processo de vendas e impulsione seu faturamento com uma experiência de compra eficiente para seus clientes.
              </p>
              <ButtonGreen target="_blank" href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o" className="mr-auto" >
                Agendar reunião
              </ButtonGreen>
            </div>
          </ContentContainer>
        </section>

        <section className="pt-10 pb-36 relative w-full" id="mobbiz-heroSection-pt2">
          <ContentContainer className="flex flex-row text-center relative z-10 pt-16 md:text-left">
            <div className="flex flex-col justify-center gap-5 text-white px-3 md:px-6 lg:px-8 md:w-2/3">
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                Veja como o <span className="text-galileoGreen-300"> Mobbiz </span> pode ajudar
                <span className="text-galileoGreen-300"> seu negócio a decolar  </span> para sua empresa
              </h1>
              <ul className="list-disc ml-3 md:ml-6 lg:ml-8 ">
                <li className="text-left text-base md:text-lg lg:text-xl xl:text-2xl">Gestão do seu e-commerce B2B</li>
                <li className="text-left text-base md:text-lg lg:text-xl xl:text-2xl">Automação e aumento nas vendas</li>
                <li className="text-left text-base md:text-lg lg:text-xl xl:text-2xl">Solução completa de trademarketing</li>
                <li className="text-left text-base md:text-lg lg:text-xl xl:text-2xl">Integração completa com o seu ERP</li>
              </ul>
              <ButtonPurple
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o"
                className="mr-auto mb-6 font-bold"
              >
                Agende uma Demonstração!
              </ButtonPurple>
            </div>
          </ContentContainer>
          <Image src="/mobbiz/sectionDivider.png" fill alt="Mobbiz: Faça seu negócio decolar" style={{ bottom: "-50px", top: "50px" }} />
        </section>

        <section className="relative flex w-full md:min-h-[75vh] pt-[5vh] bg-galileoPurple-100" id="mobbiz-demoSection">
          <ContentContainer className="flex flex-row text-center md:text-left relative z-10 py-3 my-auto">
            <div className="flex flex-col justify-center gap-5 text-black px-3 md:px-6 md:w-2/3 lg:px-8 ">
              <div className="mx-auto block md:hidden">
                <Image
                  src="/mobbiz/demoMultiDevice.png"
                  alt="Demonstração mobbiz multidevice"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                Junte-se aos <span className="text-galileoPurple-500"> mais de 1700 negócios </span> que usam Mobbiz
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                + de 300 mil transações mensais
              </p>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                + de 150.000 produtos cadastrados
              </p>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                + de 130.000 clientes registrados
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
                src="/mobbiz/demoMultiDevice.png"
                alt="Demonstração mobbiz multidevice"
                width={600}
                height={600}
              />
            </div>
          </ContentContainer>
        </section>

        <section className="w-full flex bg-galileoPurple-100 relative min-h-[75vh] overflow-x-scroll no-scrollbar" id="mobbiz-exclusiveBonuses-light">
          <ContentContainer className="flex flex-col my-auto py-6 z-10">
            <h1 className="text-black text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-center">
              Nós cuidamos de
              <br />
              <span className="text-galileoPurple-500 text-xl md:text-2xl lg:text-4xl xl:text-5xl font-medium mb-6"> tudo por você</span>
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

        <section className="w-full flex bg-galileoPurple-400 relative min-h-[75vh] overflow-x-scroll no-scrollbar" id="mobbiz-exclusiveBonuses-dark">
          <ContentContainer className="flex flex-col my-auto py-6 z-10">
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
