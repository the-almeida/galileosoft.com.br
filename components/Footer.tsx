import Image from "next/image";
import ContentContainer from "./ContentContainer";
import { MdFacebook, MdLinkedCamera, MdPhone, MdWhatsapp } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  return (
    <footer x-componentname="Footer" className="bg-purple-200 space-y-6 py-6">
      <Image
        src="/logoGalileoSoftPreto.svg"
        alt="GalileoSoft Logo"
        height={35}
        width={200}
        className="mx-auto"
      />
      <p className="border-l-4 border-gray-500 italic lg:text-lg sm:w-4/5 md:w-3/5 lg:w-1/2 max-w-4xl mx-3 sm:mx-auto pl-4">
        Nosso objetivo é fornecer soluções empresariais de ponta com atendimento personalisado para levar nossos clientes e parceiros a resultados surpreendentes.
        <strong className="block text-right pr-6 mt-0 not-italic">
          Newton Gama - CEO
        </strong>
      </p>

      <hr className="md:hidden border-t-2 border-purple-500 w-1/2 lg:w-3/5 xl:w-2/5 mx-auto" />

      <ContentContainer className="flex flex-col md:flex-row text-center md:text-left">
        <div className="text-black flex-1 space-y-3">
          <h3 className="text-center text-xl font-medium mb-3">Onde nos encontrar:</h3>
          <p className="text-center text-base">
            <strong>Endereço:</strong> Rua Pioneira Vergínia Maria Fecchio, 880 - Maringá, PR
          </p>
          <p className="text-center text-base">
            <strong>Telefone:</strong> (44) 9 9985-0900
          </p>
        </div>

        <hr className="md:hidden border-t-2 border-purple-500 w-1/2 lg:w-3/5 xl:w-2/5 mx-auto my-4" />

        <div className="text-black flex-1 space-y-3">
          <h3 className="text-center text-xl font-medium mb-3">Mapa do Site:</h3>
          <div className="flex flex-col">
            <Link
              target="_blank"
              href="/"
              className="cursor-pointer underline underline-offset-4 text-center hover:text-lg"
            >
              Home
            </Link>
            <Link
              target="_blank"
              href="/produtos"
              className="cursor-pointer underline underline-offset-4 text-center hover:text-lg"
            >
              Produtos
            </Link>
            <Link
              target="_blank"
              href="/faq"
              className="cursor-pointer underline underline-offset-4 text-center hover:text-lg"
            >
              FAQ
            </Link>
            <Link
              target="_blank"
              href="/contato"
              className="cursor-pointer underline underline-offset-4 text-center hover:text-lg"
            >
              Contato
            </Link>
          </div>
        </div>

        <hr className="md:hidden border-t-2 border-purple-500 w-1/2 lg:w-3/5 xl:w-2/5 mx-auto my-4" />

        <div className="text-black flex-1 space-y-3">
          <h3 className="text-center text-lg font-medium mb-3">Canais de Contato:</h3>
          <div className="w-fit mx-auto flex gap-6">
            <Link 
              href="https://api.whatsapp.com/send?phone=5544998850900&text=Ol%C3%A1%20GalileoSoft,%20"
              className="cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="rounded-full p-4 bg-purple-800 w-fit mx-auto hover:bg-purple-600">
                  <MdWhatsapp size={20} className="text-white" />
                </span>
                <p>Whatsapp</p>
              </div>
            </Link>
            <Link 
              href="tel:+5544998850900"
              className="cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="rounded-full p-4 bg-purple-800 w-fit mx-auto hover:bg-purple-600">
                  <MdPhone size={20} className="text-white" />
                </span>
                <p>Ligação</p>
              </div>
            </Link>
            <Link 
              href="https://www.facebook.com/galileosoft/"
              className="cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="rounded-full p-4 bg-purple-800 w-fit mx-auto hover:bg-purple-600">
                  <MdFacebook size={20} className="text-white" />
                </span>
                <p>Facebook</p>
              </div>
            </Link>
            <Link 
              href="https://www.facebook.com/galileosoft/"
              className="cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="rounded-full p-4 bg-purple-800 w-fit mx-auto hover:bg-purple-600">
                  <MdLinkedCamera size={20} className="text-white" />
                </span>
                <p>Instagram</p>
              </div>
            </Link>
          </div>
        </div>
      </ContentContainer>
      <hr className="border-t-2 border-purple-500 w-1/2 lg:w-3/5 xl:w-2/5 mx-auto my-4" />
      <Link
        target="_blank"
        href="https://thealmeida.online"
        className="cursor-pointer underline underline-offset-4 hover:text-lg transition-transform"
      >
        <p className="text-center mt-6">Copyright © 2023 by Gustavo Almeida.</p>
      </Link>
    </footer>
  )
}
