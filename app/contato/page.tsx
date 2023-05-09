import ContentContainer from "@/components/ContentContainer"
import Card from "@/components/Card"
import BackgroundImage from "@/components/BackgroundImage"
import { FaAccessibleIcon, FaInstagram } from "react-icons/fa"
import Link from "next/link"
import { MdFacebook, MdPhone, MdWhatsapp } from "react-icons/md"

export default function Contato() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16 bg-purple-950">
      <section className="relative w-full">
        <BackgroundImage src="/bgImageWaves.svg" className="-mt-20 opacity-75" />
        <ContentContainer className="w-full grid grid-cols-2 gap-x-20 gap-y-2 justify-between items-start relative z-10 my-20">
          <div>
            <span className="text-2xl font-semibold text-green-500">ENTRE EM CONTATO</span>
            <h1 className="text-6xl font-semibold pt-3 pb-8">Pronto para modernizar sua empresa?</h1>
            <p className="text-2xl text-gray-200 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil neque autem itaque soluta. Unde, corrupti? Aliquid, molestias officiis?
            </p>
          </div>
          <Card>
            <h1 className="text-purple-950 text-3xl text-left font-semibold mb-4">Seja um case de sucesso</h1>
            <form className="flex flex-col text-black">
              <input
                type="text"
                placeholder="Nome completo (obrigatório)"
                className="text-md bg-gray-600/10 rounded-md p-3 my-2"
                required
              />
              <input
                type="email"
                placeholder="Email profissional (obrigatório)"
                className="text-md bg-gray-600/10 rounded-md p-3 my-2"
                required
              />
              <input
                type="text"
                placeholder="Celular/Whatsapp (obrigatório)"
                className="text-md bg-gray-600/10 rounded-md p-3 my-2"
                pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
                required
              />
              <input
                type="text"
                placeholder="Nome da empresa"
                className="text-md bg-gray-600/10 rounded-md p-3 my-2"
              />

              <button type="submit" className="text-white text-center text-lg font-bold rounded-lg mt-2 px-6 py-3 bg-gradient-to-br from-cyan-500 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                Enviar
              </button>
            </form>
          </Card>
          <div className="col-start-2">
            <p className="text-center text-md font-semibold opacity-80 px-5">Ao enviar esse formulário, você concorda em receber contatos da GalileoSoft.</p>
          </div>
          <div className="text-black flex-1 space-y-3 col-span-2 py-3">
            <h2 className="text-white text-center text-4xl font-medium mb-6">Outros canais de contato:</h2>
            <div className="w-fit mx-auto grid gap-4 grid-cols-2 lg:grid-cols-4">
              <Link
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5544998850900&text=Ol%C3%A1%20GalileoSoft,%20"
                className="cursor-pointer mx-3 md:mx-6 h-fit hover:scale-110 hover:underline hover:underline-offset-4 transform transition duration-500"
              >
                <Card>
                  <div className="flex flex-col w-fit mx-auto">
                    <MdWhatsapp size={40} className="mx-auto" />
                    <p className="text-base my-2 text-center">Whatsapp</p>
                  </div>
                </Card>
              </Link>
              <Link
                target="_blank"
                href="tel:+5544998850900"
                className="cursor-pointer mx-3 md:mx-6 h-fit hover:scale-110 hover:underline hover:underline-offset-4 transform transition duration-500"
              >
                <Card>
                  <div className="flex flex-col w-fit mx-auto">
                    <MdPhone size={40} className="mx-auto" />
                    <p className="my-2 text-center">Ligação</p>
                  </div>
                </Card>
              </Link>
              <Link
                target="_blank"
                href="https://www.facebook.com/galileosoft/"
                className="cursor-pointer mx-3 md:mx-6 h-fit hover:scale-110 hover:underline hover:underline-offset-4 transform transition duration-500"
              >
                <Card>
                  <div className="flex flex-col w-fit mx-auto">
                    <MdFacebook size={40} className="mx-auto" />
                    <p className="my-2 text-center">Facebook</p>
                  </div>
                </Card>
              </Link>
              <Link
                target="_blank"
                href="https://www.facebook.com/galileosoft/"
                className="cursor-pointer mx-3 md:mx-6 h-fit hover:scale-110 hover:underline hover:underline-offset-4 transform transition duration-500"
                >
                <Card>
                  <div className="flex flex-col w-fit mx-auto">
                    <FaInstagram size={40} className="mx-auto" />
                    <p className="my-2 text-center">Instagram</p>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </ContentContainer>
      </section>
    </main>
  )
}
