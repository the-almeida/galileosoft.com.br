"use client"

import axios from "axios"
import { useFormik } from "formik"
import * as Yup from "yup"

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  companyName: string;
}


export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
    } as ContactFormValues,
    validationSchema: Yup.object({
      name: Yup.string().required("Campo Obrigatório"),
      email: Yup.string().required("Campo Obrigatório"),
      phone: Yup.string().required("Campo Obrigatório"),
      companyName: Yup.string()
    }),
    validateOnBlur: true,
    onSubmit: (values) => sendEmail(values)
  })
  const sendEmail = (values: ContactFormValues) => {

    axios.post("/api/contato", { messageBody: `Nome: ${values.name} \nEmail: ${values.email} \nPhone: ${values.phone} \nEmpresa: ${values.companyName}` })
      .then(() => alert("Email enviado com sucesso. Um de nossos consultores entrará em contato em breve para entender como a GalileoSoft pode te ajudar."))
      .catch(() => alert("Sentimos muito mas ocorreu um erro no envio dos seus dados. Por favor utilize um dos canais de contato alternativos abaixo e daremos prioridade para o seu atendimento."))
  }

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col text-black">
      <input
        placeholder="Nome completo (obrigatório)"
        name="name"
        type="text"
        value={formik.values.name}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        className="text-md placeholder-gray-600 bg-gray-600/10 rounded-md p-3 my-2"
        required
      />
      <input
        placeholder="Email profissional (obrigatório)"
        name="email"
        type="email"
        value={formik.values.email}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        className="text-md placeholder-gray-600 bg-gray-600/10 rounded-md p-3 my-2"
        required
      />
      <input
        placeholder="Celular/Whatsapp (obrigatório)"
        name="phone"
        type="text"
        value={formik.values.phone}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        className="text-md placeholder-gray-600 bg-gray-600/10 rounded-md p-3 my-2"
        pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
        required
      />
      <input
        placeholder="Nome da empresa"
        name="companyName"
        type="text"
        value={formik.values.companyName}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        className="text-md placeholder-gray-600 bg-gray-600/10 rounded-md p-3 my-2"
      />

      <button type="submit" className="text-white text-center text-lg font-bold rounded-lg mt-2 px-6 py-3 bg-gradient-to-br from-cyan-500 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
        Enviar
      </button>
    </form>
  )
}
