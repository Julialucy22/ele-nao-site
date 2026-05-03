'use client';

import Link from 'next/link';
import { ChevronLeft, MessageCircle, QrCode, UserPlus, FileText } from 'lucide-react';

const whatsappLink = 'https://wa.me/556181530423';
const cadastroLink = 'https://forms.gle/ntThxuRuXJUvA4hH7';
const abaixoAssinadoLink = ' https://c.org/txkrXGY4gp'

export default function FacaPartePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-purple-800 bg-black/90">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="font-black uppercase text-xl">
            Ele Nunca Será Mulher
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-purple-700 px-4 py-2 rounded-xl font-black text-sm hover:bg-purple-950"
          >
            <ChevronLeft size={18} />
            Voltar
          </Link>
        </div>
      </header>

      <section className="px-6 py-20 bg-gradient-to-b from-purple-950 via-black to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-purple-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
              <UserPlus size={16} />
              Cadastro
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-black uppercase leading-tight">
              Faça parte do <span className="text-purple-400">movimento</span>
            </h1>

            <p className="mt-6 text-slate-300 text-lg leading-relaxed">
              Faça seu cadastro, assine o abaixo-assinado ou fale diretamente pelo WhatsApp.
              A equipe entrará em contato para orientar os próximos passos.
            </p>
          </div>

          <div className="mt-12 bg-[#12001f] border border-purple-800 rounded-[32px] p-8 md:p-10 shadow-2xl">
            <div className="grid lg:grid-cols-[340px_1fr] gap-10 items-center">
              <div className="text-center">
                <div className="inline-block bg-white p-5 rounded-3xl">
                  <img
                    src="/qrcode-whatsapp.png"
                    alt="QR Code WhatsApp"
                    className="w-72 h-72 object-contain"
                  />
                </div>

                <p className="mt-4 text-sm text-slate-400 flex items-center justify-center gap-2">
                  <QrCode size={16} />
                  Escaneie para falar pelo WhatsApp.
                </p>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-black uppercase">
                  Escolha como participar
                </h2>

                <p className="mt-4 text-slate-300 text-lg leading-relaxed">
                  Clique em uma das opções abaixo e avance para o próximo passo.
                </p>

                <div className="mt-8 space-y-5">
                  <a
                    href={cadastroLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-purple-700 hover:bg-purple-600 px-6 py-5 rounded-xl font-black uppercase flex items-center justify-center gap-3 transition"
                  >
                    <UserPlus size={22} />
                    Fazer cadastro
                  </a>

                  <a
                    href={abaixoAssinadoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border border-purple-500 hover:bg-purple-950 px-6 py-5 rounded-xl font-black uppercase flex items-center justify-center gap-3 transition"
                  >
                    <FileText size={22} />
                    Assinar abaixo-assinado
                  </a>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:brightness-110 px-6 py-5 rounded-xl font-black uppercase flex items-center justify-center gap-3 transition"
                  >
                    <MessageCircle size={22} />
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}