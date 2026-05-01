'use client';

import { MessageCircle, Users, Target, Send, PlayCircle } from 'lucide-react';
import Link from 'next/link';

const whatsappLink = 'https://wa.me/556181530423';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* MENU */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/95 border-b border-purple-800">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="font-black text-sm md:text-xl uppercase">
            Ele Nunca Será Mulher
          </div>

          <nav className="hidden md:flex gap-5 text-xs font-bold uppercase">
  <a href="#quem-somos">Quem somos</a>
  <a href="#objetivos">Objetivos</a>
  <a href="#premissas">Premissas</a>
  <Link href="/videos">Vídeos do movimento</Link>
  <a href="#faca-parte">Faça parte</a>
</nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-700 px-4 py-2 rounded-lg font-black text-xs flex items-center gap-2 hover:bg-purple-600 transition-all"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-24 pb-12 px-6 bg-gradient-to-b from-purple-950 via-black to-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight">
              #EleNunca <span className="text-purple-400">SeráMulher</span>
            </h1>

            <p className="mt-5 text-slate-300 text-lg">
              Pela verdade. Pela segurança. Pelas mulheres.
            </p>

            <Link
              href="/facaparte"
              className="mt-6 inline-flex bg-purple-700 px-6 py-3 rounded-xl font-black items-center gap-3 hover:bg-purple-600 transition-all uppercase"
            >
              <Send size={18} />
              Faça parte
            </Link>
          </div>

          {/* ESPAÇO PARA MP4 FUTURO */}
          <div className="w-full aspect-video bg-[#12001f] border border-purple-800 rounded-2xl flex items-center justify-center text-center px-6">
            <div>
              <PlayCircle className="mx-auto text-purple-400 mb-3" size={48} />
              <p className="text-purple-400 font-black uppercase">
                Vídeo do movimento
              </p>
              <p className="mt-2 text-slate-400 text-sm">
                Espaço reservado para o vídeo em MP4
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section id="quem-somos" className="py-12 px-6 text-center bg-black">
        <div className="max-w-4xl mx-auto">
          <Users className="mx-auto text-purple-400" size={42} />

          <h2 className="text-4xl font-black mt-4 uppercase">
            Quem somos?
          </h2>

          <p
            className="mt-5 text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ textAlign: 'justify' }}
          >
            Somos cidadãos inconformados com o avanço de pautas que, em nossa visão,
            colocam em risco a segurança, os direitos e os espaços destinados às
            mulheres e meninas no Brasil. O movimento nasceu a partir de uma
            mobilização nas redes sociais diante de decisões e debates públicos que
            passaram a redefinir conceitos fundamentais como identidade, linguagem e
            representação.
          </p>

          <Link
            href="/quem-somos"
            className="mt-6 inline-flex bg-purple-700 px-6 py-3 rounded-xl font-black items-center gap-3 hover:bg-purple-600 transition-all uppercase"
          >
            <Users size={18} />
            Ler quem somos
          </Link>
        </div>
      </section>

      {/* OBJETIVOS */}
      <section id="objetivos" className="py-12 px-6 bg-[#12001f] text-center">
        <Target className="mx-auto text-purple-400" size={42} />

        <h2 className="text-4xl font-black mt-4 uppercase">
          Objetivos
        </h2>

        <div
          className="mt-7 max-w-4xl mx-auto text-slate-300 text-lg leading-relaxed space-y-5"
          style={{ textAlign: 'justify' }}
        >
          <p>
            Lutamos para que todos esses pontos sejam revogados e os diversos espaços
            reservados às mulheres brasileiras sejam ocupados tão somente por elas, sem
            qualquer tipo de confusão, constrangimento ou medo.
          </p>

          <p>
            Estamos determinados a quebrar a espiral do silêncio que foi imposta à
            sociedade brasileira pelo governo petista com apoio do Poder Judiciário.
          </p>

          <p className="text-white font-semibold text-xl text-center">
            Nosso compromisso é com a realidade dos fatos e temos coragem para desafiar
            o sistema que tanto insiste em redefinir a grama como azul e o céu como verde.
          </p>
        </div>
      </section>

      {/* PREMISSAS */}
      <section id="premissas" className="py-12 px-6 bg-black text-center border-y border-purple-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black uppercase text-purple-400">
            Nossas premissas
          </h2>

          <div
            className="mt-7 text-slate-300 text-lg leading-relaxed space-y-5"
            style={{ textAlign: 'justify' }}
          >
            <p className="text-center text-2xl font-black text-white">
              A verdade é uma só.
            </p>

            <p>
              Defendemos que a definição de mulher está diretamente ligada ao sexo de
              nascimento, sendo este um critério objetivo para a organização de políticas
              públicas, espaços de proteção e direitos específicos.
            </p>

            <p>
              Entendemos que intervenções hormonais ou cirúrgicas não alteram essa
              realidade biológica, motivo pelo qual consideramos importante preservar
              critérios claros e consistentes na definição de termos e categorias.
            </p>

            <p>
              Nesse contexto, defendemos o uso de linguagem precisa, evitando expressões
              que possam gerar ambiguidade ou distorções conceituais na formulação de
              políticas públicas e no debate social.
            </p>

            <p>
              Nosso compromisso é com a clareza, a objetividade e a coerência na definição
              dos conceitos que impactam diretamente a vida das mulheres e da sociedade
              como um todo.
            </p>
          </div>
        </div>
      </section>

      {/* FAÇA PARTE */}
      <section id="faca-parte" className="py-12 px-6 text-center bg-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black uppercase">
            Por que fazer parte?
          </h2>

          <p
            className="mt-6 text-slate-300 text-lg leading-relaxed"
            style={{ textAlign: 'justify' }}
          >
            Pelo resgate da verdade e do respeito às mulheres brasileiras, faça parte do
            movimento: “Ele nunca será mulher” e lute conosco!
          </p>

          <Link
            href="/facaparte"
            className="mt-8 inline-flex bg-purple-700 px-8 py-4 rounded-xl font-black items-center gap-2 uppercase hover:bg-purple-600 transition-all"
          >
            <Send size={18} />
            Faça parte
          </Link>
        </div>
      </section>

    </main>
  );
}