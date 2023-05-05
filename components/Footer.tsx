import Image from "next/image";
import FlexContainer from "./FlexContainer";
import { MdFacebook, MdLinkedCamera, MdWhatsapp } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#FBF2FF] w-full space-y-6">
      <FlexContainer>
        <div className="text-black flex-1 space-y-3">
          <Image 
            src="/logoGalileoSoftPreto.svg" 
            alt="GalileoSoft Logo" 
            height={35}
            width={210}
          />
          <p>
            Focada em soluções empresariais e atendimento personalisado, levando os clientes a resultados surpreendentes
          </p>
        </div>

        <div className="text-black flex-1 space-y-3">
          <p className="text-center">Mapa do Site</p>
          <div className="mx-auto w-fit">
            <p>Home</p>
            <p>Produtos</p>
            <p>FAQ</p>
            <p>Contato</p>
          </div>
        </div>

        <div className="text-black flex-1 space-y-3">
          <p className="text-center">Redes Sociais</p>
          <div className="w-fit mx-auto flex gap-6">
            <div className="rounded-full p-4 bg-[#8004B8]">
              <MdWhatsapp size={20} className="text-white" />
            </div>
            <div className="rounded-full p-4 bg-[#8004B8]">
              <MdFacebook size={20} className="text-white" />
            </div>
            <div className="rounded-full p-4 bg-[#8004B8]">
              <MdFacebook size={20} className="text-white" />
            </div>
            <div className="rounded-full p-4 bg-[#8004B8]">
              <MdLinkedCamera size={20} className="text-white" />
            </div>
          </div>
        </div>
      </FlexContainer>
      <hr/>
      <p className="text-center pb-6">Copyright © 2023 by thealmeida.</p>
    </footer>
  )
}
