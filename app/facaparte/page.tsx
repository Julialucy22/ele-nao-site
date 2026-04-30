'use client';

import Link from 'next/link';
import { ChevronLeft, MessageCircle, Send, QrCode, UserPlus } from 'lucide-react';

const whatsappLink = 'https://wa.me/556181530423';

export default function FacaPartePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-purple-800 bg-black/90">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="font-black uppercase text-xl">
            Ele Nunca Será Mulher
          </div>

          <a
  href="/"
  className="inline-flex items-center gap-2 border border-purple-700 px-4 py-2 rounded-xl font-black text-sm hover:bg-purple-950"
>
  <ChevronLeft size={18} />
  Voltar
</a>
        </div>
      </header>

      <section className="px-6 py-20 bg-gradient-to-b from-purple-950 via-black to-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex items-center gap-2 bg-purple-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
              <UserPlus size={16} />
              Cadastro
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-black uppercase leading-tight">
              Faça parte do <span className="text-purple-400">movimento</span>
            </h1>

            <p className="mt-6 text-slate-300 text-lg leading-relaxed">
              Preencha seus dados ou fale diretamente pelo WhatsApp. A equipe entrará em contato
              para orientar os próximos passos.
            </p>

            <div className="mt-8 inline-block bg-white p-4 rounded-2xl">
              <img
                src="/qrcode-whatsapp.png"
                alt="QR Code WhatsApp"
                className="w-52 h-52 object-contain"
              />
            </div>

            <p className="mt-3 text-sm text-slate-400 flex items-center gap-2">
              <QrCode size={16} />
              Escaneie o QR Code para falar pelo WhatsApp.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 bg-[#25D366] px-8 py-4 rounded-xl font-black uppercase hover:scale-105 transition"
            >
              <MessageCircle size={22} />
              Falar no WhatsApp
            </a>
          </div>

          <form
            action="https://formsubmit.co/contato@julialucy.com.br"
            method="POST"
            className="bg-[#12001f] border border-purple-800 rounded-[32px] p-8 space-y-5 shadow-2xl"
          >
            <input type="hidden" name="_subject" value="Novo cadastro do movimento" />
            <input type="hidden" name="_captcha" value="false" />

            <h2 className="text-3xl font-black uppercase">
              Cadastro
            </h2>

            <input
              type="text"
              name="nome"
              placeholder="Nome completo"
              required
              className="w-full rounded-xl bg-black border border-purple-700 px-4 py-4 outline-none focus:border-purple-400"
            />

            <input
              type="text"
              name="whatsapp"
              placeholder="WhatsApp"
              required
              className="w-full rounded-xl bg-black border border-purple-700 px-4 py-4 outline-none focus:border-purple-400"
            />

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              required
              className="w-full rounded-xl bg-black border border-purple-700 px-4 py-4 outline-none focus:border-purple-400"
            />

            <input
              type="text"
              name="cidade"
              placeholder="Cidade / Estado"
              className="w-full rounded-xl bg-black border border-purple-700 px-4 py-4 outline-none focus:border-purple-400"
            />

            <textarea
              name="mensagem"
              placeholder="Como você quer ajudar?"
              className="w-full min-h-[140px] rounded-xl bg-black border border-purple-700 px-4 py-4 outline-none focus:border-purple-400"
            />

            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-600 px-6 py-4 rounded-xl font-black uppercase flex items-center justify-center gap-3"
            >
              <Send size={20} />
              Enviar cadastro
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}