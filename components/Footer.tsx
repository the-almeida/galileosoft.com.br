import Image from "next/image";
import ContentContainer from "./ContentContainer";
import { MdFacebook, MdPhone, MdWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
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
          Newton Gama Jr - CEO
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
            <strong>Telefone:</strong> (44) 9 9753-0950
          </p>
        </div>

        <hr className="md:hidden border-t-2 border-purple-500 w-1/2 lg:w-3/5 xl:w-2/5 mx-auto my-4" />

        <div className="text-black flex-1 space-y-3">
          <h3 className="text-center text-xl font-medium mb-3">Mapa do Site:</h3>
          <div className="flex flex-col space-y-2">
            <Link
              target="_blank"
              href="/"
              className="cursor-pointer underline underline-offset-4 text-center hover:scale-110 transform transition duration-500"
            >
              Home
            </Link>
            {/* <Link
              target="_blank"
              href="/produtos"
              className="cursor-pointer underline underline-offset-4 text-center hover:scale-110 transform transition duration-500"
            >
              Produtos
            </Link>
            <Link
              target="_blank"
              href="/faq"
              className="cursor-pointer underline underline-offset-4 text-center hover:scale-110 transform transition duration-500"
            >
              FAQ
            </Link> */}
            <Link
              target="_blank"
              href="/contato"
              className="cursor-pointer underline underline-offset-4 text-center hover:scale-110 transform transition duration-500"
            >
              Contato
            </Link>
          </div>
        </div>

        <hr className="md:hidden border-t-2 border-purple-500 w-1/2 lg:w-3/5 xl:w-2/5 mx-auto my-4" />

        <div className="text-black flex-1 space-y-3">
          <h3 className="text-center text-lg font-medium mb-3">Canais de Contato:</h3>
          <div className="w-fit mx-auto grid grid-cols-2 lg:grid-cols-4">
            <Link 
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5544997530950&text=Ol%C3%A1%20GalileoSoft,%20"
              className="cursor-pointer mx-3 md:mx-6 hover:scale-110 transform transition duration-500"
            >
              <div className="flex flex-col w-fit mx-auto hover:underline hover:underline-offset-4">
                <span className="rounded-full p-4 bg-purple-800 w-fit mx-auto hover:bg-purple-600">
                  <MdWhatsapp size={20} className="text-white" />
                </span>
                <p className="my-2 text-center">Whatsapp</p>
              </div>
            </Link>
            <Link 
              target="_blank"
              href="tel:+5544997530950"
              className="cursor-pointer mx-3 md:mx-6 hover:scale-110 transform transition duration-500"
            >
              <div className="flex flex-col w-fit mx-auto hover:underline hover:underline-offset-4">
                <span className="rounded-full p-4 bg-purple-800 w-fit mx-auto hover:bg-purple-600">
                  <MdPhone size={20} className="text-white" />
                </span>
                <p className="my-2 text-center">Ligação</p>
              </div>
            </Link>
            <Link 
              target="_blank"
              href="https://www.facebook.com/galileosoft/"
              className="cursor-pointer mx-3 md:mx-6 hover:scale-110 transform transition duration-500"
            >
              <div className="flex flex-col w-fit mx-auto hover:underline hover:underline-offset-4">
                <span className="rounded-full p-4 bg-purple-800 w-fit mx-auto hover:bg-purple-600">
                  <MdFacebook size={20} className="text-white" />
                </span>
                <p className="my-2 text-center">Facebook</p>
              </div>
            </Link>
            <Link 
              target="_blank"
              href="https://www.instagram.com/galileosoft/"
              className="cursor-pointer mx-3 md:mx-6 hover:scale-110 transform transition duration-500"
            >
              <div className="flex flex-col w-fit mx-auto hover:underline hover:underline-offset-4">
                <span className="rounded-full p-4 bg-purple-800 w-fit mx-auto hover:bg-purple-600">
                  <FaInstagram size={20} className="text-white" />
                </span>
                <p className="my-2 text-center">Instagram</p>
              </div>
            </Link>
          </div>
        </div>
      </ContentContainer>
      <hr className="border-t-2 border-purple-500 w-1/2 lg:w-3/5 xl:w-2/5 mx-auto my-4" />
      <Link
        target="_blank"
        href="https://thealmeida.online"
        className="cursor-pointer underline underline-offset-4"
      >
        <p className="text-center mt-6 hover:scale-110 transform transition duration-500 w-1/2 mx-auto">Copyright © 2023 by Gustavo Almeida.</p>
      </Link>
    </footer>
  )
}
