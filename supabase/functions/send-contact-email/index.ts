import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SendEmailRequest {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Método não permitido" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const { nome, email, telefone, mensagem }: SendEmailRequest = await req.json();

    console.log("Recebendo solicitação de envio de email:", { nome, email, telefone });

    if (!nome || !email || !mensagem) {
      console.error("Campos obrigatórios faltando");
      return new Response(
        JSON.stringify({ error: "Todos os campos são obrigatórios." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const emailUser = Deno.env.get("EMAIL_USER");
    const emailPass = Deno.env.get("EMAIL_PASS");

    if (!emailUser || !emailPass) {
      console.error("Credenciais de email não configuradas");
      return new Response(
        JSON.stringify({ error: "Credenciais de email não configuradas." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Configurando cliente SMTP...");

    const smtpClient = new SMTPClient({
      connection: {
        hostname: "smtp.hostinger.com",
        port: 465,
        tls: true,
        auth: {
          username: emailUser,
          password: emailPass,
        },
      },
    });

    const destinatario = "victor.matias@zipline.com.br";

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #0F4C3A; border-bottom: 2px solid #F5A623; padding-bottom: 10px;">
          📩 Novo contato pelo site G-MASS
        </h1>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Nome:</strong> ${nome}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>Telefone:</strong> ${telefone || "Não informado"}</p>
        </div>
        <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h3 style="color: #0F4C3A; margin-top: 0;">Mensagem:</h3>
          <p style="line-height: 1.6;">${(mensagem || "").replace(/\n/g, "<br>")}</p>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px; text-align: center;">
          Este email foi enviado através do formulário de contato do site G-MASS.
        </p>
      </div>
    `;

    try {
      console.log("Enviando email para:", destinatario);
      
      await smtpClient.send({
        from: `Formulário G-MASS <${emailUser}>`,
        to: destinatario,
        subject: `Novo contato de ${nome} pelo site G-MASS`,
        html,
        replyTo: email,
      });

      await smtpClient.close();

      console.log("Email enviado com sucesso via SMTP Hostinger");

      return new Response(JSON.stringify({ message: "Email enviado com sucesso!" }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    } catch (smtpError: any) {
      console.error("Erro ao enviar e-mail (SMTP):", smtpError);
      return new Response(
        JSON.stringify({ error: "Falha ao enviar o e-mail. Tente novamente mais tarde." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }
  } catch (err: any) {
    console.error("Erro na função send-contact-email:", err);
    return new Response(
      JSON.stringify({ error: "Erro interno ao processar a solicitação." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
