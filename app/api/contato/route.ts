import { SMTPClient } from "emailjs"
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { messageBody } = await req.json();
  
  const client = new SMTPClient ({
    user: process.env.SMTP_EMAIL,
    password: process.env.SMTP_PASSWORD,
    host: process.env.SMTP_HOST,
    port: 587
  })

  try {
    const mailSent = await client.sendAsync({
      text: messageBody,
      from: "Site GalileoSoft <gustavo@galileosoft.com.br>",
      to: "contato@galileosoft.com.br",
      subject: "Novo contato no site - galileosoft.com.br"
    })
    
    return NextResponse.json({message: "Mail sent!", maildData: mailSent}, {status: 200}) 
  } catch (error) {
    console.log(error);
    return new Response(null, { status: 500, statusText: `Mail not sent. Unexpected error: ${error}` })
  }
}
