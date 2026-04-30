'use client';

import { MessageCircle, Users, Target, Send } from 'lucide-react';
import Link from 'next/link';

const whatsappLink = 'https://wa.me/556181530423';
const videoUrl = 'https://www.youtube.com/embed/iL2H7AewL8M?start=42';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* MENU */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 border-b border-purple-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <div className="font-black text-xl uppercase">
            Ele Nunca Será Mulher
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-bold uppercase">
            <a href="#quem-somos">Quem somos</a>
            <a href="#objetivos">Objetivos</a>
            <a href="#faca-parte">Faça parte</a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-700 px-5 py-3 rounded-xl font-black text-sm flex items-center gap-2"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-purple-950 via-black to-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h1 className="text-5xl md:text-7xl font-black uppercase">
              #EleNunca <span className="text-purple-400">SeráMulher</span>
            </h1>

            <p className="mt-6 text-slate-300">
              Um movimento para reunir pessoas e fortalecer ideias.
            </p>

            {/* BOTÃO CORRIGIDO */}
            <Link
              href="/facaparte"
              className="mt-6 inline-flex bg-purple-700 px-8 py-4 rounded-xl font-black items-center gap-3"
            >
              <Send size={20} />
              Faça parte
            </Link>
          </div>

          <div className="rounded-2xl overflow-hidden border border-purple-800">
            <iframe
              className="w-full aspect-video"
              src={videoUrl}
              title="Vídeo do movimento"
              allowFullScreen
            />
          </div>

        </div>
      </section>

      {/* QUEM SOMOS */}
      <section id="quem-somos" className="py-20 px-6 text-center">
        <Users className="mx-auto text-purple-400" size={40} />
        <h2 className="text-4xl font-black mt-4">Quem somos</h2>
        <p className="mt-4 text-slate-300 max-w-xl mx-auto">
          Um movimento de pessoas que querem participar e transformar a realidade.
        </p>
      </section>

      {/* OBJETIVOS */}
      <section id="objetivos" className="py-20 px-6 bg-[#12001f] text-center">
        <Target className="mx-auto text-purple-400" size={40} />
        <h2 className="text-4xl font-black mt-4">Objetivos</h2>

        <div className="mt-6 space-y-3 text-slate-300">
          <p>• Conectar pessoas</p>
          <p>• Fortalecer ideias</p>
          <p>• Gerar impacto real</p>
        </div>
      </section>

      {/* FAÇA PARTE */}
      <section id="faca-parte" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-black">Faça parte</h2>

        <p className="mt-4 text-slate-300 max-w-xl mx-auto">
          Clique abaixo para se cadastrar e entrar no movimento.
        </p>

        <Link
          href="/facaparte"
          className="mt-6 inline-flex bg-purple-700 px-8 py-4 rounded-xl font-black items-center gap-2"
        >
          <Send size={20} />
          Ir para cadastro
        </Link>
      </section>

    </main>
  );
}