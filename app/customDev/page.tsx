import Image from "next/image";
import ButtonGreen from "@/components/ButtonGreen";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import ContentContainer from "@/components/ContentContainer";
import ContactForm from "@/components/ContactForm"
import Particles from "@/components/Particles";
import ButtonPurple from "@/components/ButtonPurple";

export default function DesenvolvimentoPersonalizado() {

  const cardsLightSection = [
    <Card key={'diagnostico'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/devPersonalizado/iconDiagnostico.png"
          alt="Ícone diagnóstico completo da empresa"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Fazemos um diagnóstico completo da sua empresa para traçar um plano de crescimento conjunto.
      </h3>
    </Card>,
    <Card key={'desenvolvemos'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/devPersonalizado/iconDesenvolvemos.png"
          alt="Ícone desenvolvimento de soluçoes flexiveis"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Desenvolvemos soluções escaláveis e flexíveis, integradas com os seus softwares de gestão.
      </h3>
    </Card>,
    <Card key={'integrado'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/devPersonalizado/iconIntegracoes.png"
          alt="Ícone desenvolvimento com integração de ponta a ponta"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Somamos ao serviço entregue pelos softwares que vendemos, um trabalho de desenvolvimento personalizado.
      </h3>
    </Card>,
    <Card key={'personalizado'} bgColor="bg-white">
      <div className="relative h-28 w-28 mx-auto mb-6">
        <Image
          src="/devPersonalizado/iconPersonalizado.png"
          alt="Ícone resolução de problemas complexos"
          className="object-contain absolute"
          fill
          sizes="112px"
        />
      </div>
      <h3 className="text-black text-2xl font-medium text-center mb-2">
        Transformamos demandas complexas e específicas em produtos personalizados para o seu negócio
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
            src="/devPersonalizado/telescopio.png"
            alt="Logo GalileoSoft"
            className="object-contain absolute"
            fill
            sizes="35vw"
          />
        </div>
        <section className="py-10 md:py-3 h-[95vh] relative w-full" id="devPersonalizado-heroSection">
          <ContentContainer className="flex flex-row text-center relative z-10 pt-16 md:text-left">
            <div className="flex flex-col justify-center gap-5 text-white px-3 md:px-6 lg:px-8 md:w-2/3">
              <div className="mx-auto block md:hidden">
                <Image
                  src="/devPersonalizado/telescopio.png"
                  alt="Logo GalileoSoft"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                Nossa <span className="text-galileoGreen-300"> equipe de desenvolvimento </span> a sua disposição
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                Um time de desenvolvedores, prontos para solucionar qualquer desafio e impulsionar o crescimento do seu negócio!
              </p>
              <ButtonGreen target="_blank" href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o" className="mr-auto" >
                Agendar reunião
              </ButtonGreen>
            </div>
          </ContentContainer>
        </section>

        <section className="relative flex w-full md:min-h-[75vh] pt-[5vh] bg-galileoPurple-100" id="devPersonalizado-demoSection">
          <ContentContainer className="flex flex-row text-center md:text-left relative z-10 py-3 my-auto">
            <div className="flex flex-col justify-center gap-5 text-black px-3 md:px-6 md:w-2/3 lg:px-8 ">
              <div className="mx-auto block md:hidden">
                <Image
                  src="/devPersonalizado/demoMultiDevice.svg"
                  alt="Demonstração devPersonalizado multidevice"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                Somos especialistas em <span className="text-galileoPurple-500"> atender suas necessidades </span> com tecnologia de ponta
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                Compreendemos suas demandas específicas e desenvolvemos soluções totalmente integradas com a sua infraestrutura.
              </p>
              <ButtonPurple
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o"
                className="mr-auto font-bold"
              >
                Saiba mais!
              </ButtonPurple>
            </div>
            <div className="mx-auto my-auto hidden md:block">
              <Image
                src="/devPersonalizado/demoMultiDevice.svg"
                alt="Demonstração devPersonalizado multidevice"
                width={600}
                height={600}
              />
            </div>
          </ContentContainer>
        </section>

        <section className="w-full flex bg-galileoPurple-100 relative min-h-[75vh] overflow-x-scroll no-scrollbar" id="devPersonalizado-exclusiveBonuses-light">
          <ContentContainer className="flex flex-col my-auto py-6 z-10">
            <h1 className="text-black text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-center">
              Otimize o tempo da sua equipe
              <br />
              <span className="text-galileoPurple-500 text-xl md:text-2xl lg:text-4xl xl:text-5xl font-medium mb-6">
                com Soluções Personalizadas
              </span>
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
        </section>

        <section className="w-full flex bg-galileoPurple-400 relative pt-5 overflow-x-scroll no-scrollbar" id="devPersonalizado-exclusiveBonuses-dark">
          <ContentContainer className="flex flex-col my-auto py-6 z-10">
            <h1 className="text-galileoGreen-300 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-center md:px-4">
              Garantimos a fluidez e integração completa
              <span className="text-white"> com todas as ferramentas de gestão da sua empresa! </span>
            </h1>

            <div className="flex flex-row space-x-[-50px] justify-center my-10">
              <div id="stepCardMarketing" className="flex flex-row">
                <div
                  className="bg-white"
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "100px solid transparent",
                    borderBottom: "100px solid transparent",
                    borderLeft: "60px solid #372157",
                  }}
                />
                <div className="bg-white p-3">
                  <div className="relative h-20 w-20 mx-auto mb-6">
                    <Image
                      src="/devPersonalizado/iconMarketing.png"
                      alt="Ícone primeiro passo: Marketing"
                      className="object-contain absolute"
                      fill
                      sizes="112px"
                    />
                  </div>
                  <h3 className="text-black text-2xl font-bold text-center mt-10">
                    MARKETING
                  </h3>
                </div>
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "100px solid transparent",
                    borderBottom: "100px solid transparent",
                    borderLeft: "60px solid #fff",
                    zIndex: 1000
                  }}
                />
              </div>
              <div id="stepCardCRM" className="flex flex-row">
                <div
                  className="bg-white"
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "100px solid transparent",
                    borderBottom: "100px solid transparent",
                    borderLeft: "60px solid #372157",
                  }}
                />
                <div className="bg-white p-3">
                  <div className="relative h-20 w-20 mx-auto mb-6">
                    <Image
                      src="/devPersonalizado/iconCRM.png"
                      alt="Ícone segundo passo: CRM"
                      className="object-contain absolute"
                      fill
                      sizes="112px"
                    />
                  </div>
                  <h3 className="text-black text-2xl font-bold text-center mt-10">
                    CRM
                  </h3>
                </div>
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "100px solid transparent",
                    borderBottom: "100px solid transparent",
                    borderLeft: "60px solid #fff",
                    zIndex: 1000
                  }}
                />
              </div>
              <div id="stepCardERP" className="flex flex-row">
                <div
                  className="bg-white"
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "100px solid transparent",
                    borderBottom: "100px solid transparent",
                    borderLeft: "60px solid #372157",
                  }}
                />
                <div className="bg-white p-3">
                  <div className="relative h-20 w-20 mx-auto mb-6">
                    <Image
                      src="/devPersonalizado/iconERP.png"
                      alt="Ícone terceiro passo: ERP"
                      className="object-contain absolute"
                      fill
                      sizes="112px"
                    />
                  </div>
                  <h3 className="text-black text-2xl font-bold text-center mt-10">
                    ERP
                  </h3>
                </div>
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "100px solid transparent",
                    borderBottom: "100px solid transparent",
                    borderLeft: "60px solid #fff",
                    zIndex: 1000
                  }}
                />
              </div>
              <div id="stepCardOutrosSoftwares" className="flex flex-row">
                <div
                  className="bg-white"
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "100px solid transparent",
                    borderBottom: "100px solid transparent",
                    borderLeft: "60px solid #372157",
                  }}
                />
                <div className="bg-white p-3">
                  <div className="relative h-20 w-20 mx-auto mb-6">
                    <Image
                      src="/devPersonalizado/iconOutrosSoftwares.png"
                      alt="Ícone primeiro passo: Outros Softwares"
                      className="object-contain absolute"
                      fill
                      sizes="112px"
                    />
                  </div>
                  <h3 className="text-black text-2xl font-bold text-center">
                    OUTROS <br /> SOFTWARES
                  </h3>
                </div>
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "100px solid transparent",
                    borderBottom: "100px solid transparent",
                    borderLeft: "60px solid #fff",
                    zIndex: 1000
                  }}
                />
              </div>
            </div>

            <ButtonGreen
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o"
              className="mx-auto font-bold"
            >
              Quero saber mais
            </ButtonGreen>
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
