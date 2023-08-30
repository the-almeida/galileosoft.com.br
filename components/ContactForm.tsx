"use client"

import { useState } from "react"
import axios from "axios"

import Input from "./Input"

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  message: string;
}


export default function ContactForm() {

  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    message: ""
  })

  const inputs = [
    {
      id: "1",
      name: "name",
      type: "text",
      placeholder: "Ex: Gustavo Almeida",
      label: "Nome completo (obrigatório)",
      errorMessage: "O nome deve ter entre 3-16 caracteres e não deve incluir caracteres especiais.",
      pattern: "^[A-Za-z ]{3,16}$",
      required: true
    },
    {
      id: "2",
      name: "email",
      type: "email",
      placeholder: "Ex: nome.sobrenome@thealmeida.online",
      label: "Email profissional (obrigatório)",
      errorMessage: "Deve ser um email válido.",
      required: true
    },
    {
      id: "3",
      name: "phone",
      type: "text",
      placeholder: "Ex: (44) 91234-5678",
      label: "Celular/Whatsapp (obrigatório)",
      errorMessage: "O telefone deve ter entre 10-21 caracteres. Lembre-se de adicionar o DDD, ex: 44 9 9977-6655",
      pattern: "^[0-9\-\+() ]{10,25}$",
      required: true
    },
    {
      id: "4",
      name: "companyName",
      type: "text",
      placeholder: "Ex: GalileoSoft",
      label: "Nome da empresa",
      errorMessage: "O nome da empresa deve ter entre 3-16 caracteres."
    },
    {
      id: "5",
      name: "message",
      type: "text",
      placeholder: "Ex: Gostaria de saber mais sobre como vocês trabalham",
      label: "Mensagem"
    },
  ]

  const sendEmail = (values: ContactFormValues) => {
    axios.post("/api/contato", { messageBody: `Nome: ${values.name} \nEmail: ${values.email} \nPhone: ${values.phone} \nEmpresa: ${values.companyName} \nMensagem: ${values.message}` })
      .then(() => alert("Email enviado com sucesso. Um de nossos consultores entrará em contato em breve para entender como a GalileoSoft pode te ajudar."))
      .catch(() => alert("Sentimos muito mas ocorreu um erro no envio dos seus dados. Por favor utilize um dos canais de contato alternativos abaixo e daremos prioridade para o seu atendimento."))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    sendEmail(formValues)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col text-black">
      {
        inputs.map((input) => (
          <Input 
            key={input.id}
            {...input}
            value={formValues[input.name as keyof ContactFormValues]}
            onChange={onChange}
          />
        ))
      }

      <button type="submit" className="text-white text-center text-lg font-bold rounded-lg mt-2 px-6 py-3 bg-gradient-to-br from-galileoGreen-500 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
        Enviar
      </button>
    </form>
  )
}
