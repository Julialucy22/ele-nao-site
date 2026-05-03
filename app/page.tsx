'use client';

import { MessageCircle, Users, Target, Send } from 'lucide-react';
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

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                href="/facaparte"
                className="inline-flex justify-center bg-purple-700 px-6 py-3 rounded-xl font-black items-center gap-2 hover:bg-purple-600 transition-all uppercase"
              >
                <Send size={18} />
                Faça parte
              </Link>

              <Link
                href="/videos"
                className="inline-flex justify-center bg-purple-700 px-6 py-3 rounded-xl font-black items-center gap-2 hover:bg-purple-600 transition-all uppercase min-w-[160px]"
              >
                Mais vídeos
              </Link>
            </div>
          </div>

          {/* VIDEO DO YOUTUBE */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden border border-purple-800 bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/IDmB5eJUX24?rel=0&modestbranding=1"
              title="Vídeo do movimento"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section id="quem-somos" className="py-16 px-6 text-center bg-black">
        <div className="max-w-4xl mx-auto">
          <Users className="mx-auto text-purple-400" size={42} />

          <h2 className="text-4xl font-black mt-4 uppercase tracking-widest text-white">
            Quem somos?
          </h2>

          <div className="mt-1 mx-auto w-16 h-1 bg-purple-600 rounded-full" />

          <p
            className="mt-7 text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ textAlign: 'justify' }}
          >
            Somos cidadãos inconformados com o crescimento da pauta da ideologia de gênero no
            Brasil e com a implantação da agenda progressista, que acarreta na perda de espaços
            de segurança e de poder para as mulheres e meninas brasileiras.
          </p>

          <p
            className="mt-4 text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ textAlign: 'justify' }}
          >
            Tudo começou quando nos mobilizamos – inicialmente em nossas redes sociais – para
            impedir que uma travesti – que não se aceita como tal e que inveja e odeia mulheres –
            assumisse a vaga de Presidente da Comissão de Defesa dos Direitos das Mulheres da
            Câmara dos Deputados.
          </p>

          <Link
            href="/quem-somos"
            className="mt-8 inline-flex bg-purple-700 px-6 py-3 rounded-xl font-black items-center gap-3 hover:bg-purple-600 transition-all uppercase"
          >
            <Users size={18} />
            Ler quem somos
          </Link>
        </div>
      </section>

      {/* OBJETIVOS */}
      <section id="objetivos" className="py-16 px-6 bg-[#12001f]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <Target className="mx-auto text-purple-400" size={42} />
            <h2 className="text-4xl font-black mt-4 uppercase tracking-widest text-white">
              Objetivos
            </h2>
            <div className="mt-1 mx-auto w-16 h-1 bg-purple-600 rounded-full" />
          </div>

          <p className="text-slate-300 text-lg leading-relaxed mb-8" style={{ textAlign: 'justify' }}>
            O estado de coisas é extremamente grave e já podemos observar consequências
            nas seguintes áreas:
          </p>

          {/* CARDS DAS ÁREAS */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="bg-purple-950/50 border border-purple-800 rounded-xl p-5">
              <p className="text-purple-300 font-black text-sm uppercase tracking-widest mb-3">Segurança</p>
              <ul className="text-slate-300 text-sm leading-relaxed space-y-2">
                <li className="flex gap-2"><span className="text-purple-400 mt-1">▸</span>Travestis estão autorizados a utilizarem banheiros femininos.</li>
                <li className="flex gap-2"><span className="text-purple-400 mt-1">▸</span>Travestis estão autorizados a optarem por serem encaminhados a presídios femininos.</li>
              </ul>
            </div>

            <div className="bg-purple-950/50 border border-purple-800 rounded-xl p-5">
              <p className="text-purple-300 font-black text-sm uppercase tracking-widest mb-3">Esportes</p>
              <ul className="text-slate-300 text-sm leading-relaxed space-y-2">
                <li className="flex gap-2"><span className="text-purple-400 mt-1">▸</span>Travestis estão autorizados a disputarem com mulheres em competições desportivas.</li>
              </ul>
            </div>

            <div className="bg-purple-950/50 border border-purple-800 rounded-xl p-5">
              <p className="text-purple-300 font-black text-sm uppercase tracking-widest mb-3">Política</p>
              <ul className="text-slate-300 text-sm leading-relaxed space-y-2">
                <li className="flex gap-2"><span className="text-purple-400 mt-1">▸</span>Travestis são classificados como mulheres e preenchem as cotas femininas e também recebem recursos do fundo eleitoral como se fossem mulheres.</li>
              </ul>
            </div>
          </div>

          {/* O QUE QUEREMOS */}
          <div className="border-t border-purple-900 pt-8 space-y-5">
            <p className="text-white font-black text-2xl text-center uppercase tracking-wide">
              O que queremos?
            </p>

            <p className="text-slate-300 text-lg leading-relaxed" style={{ textAlign: 'justify' }}>
              Lutamos para que todos esses pontos sejam revogados e os diversos espaços
              reservados às mulheres brasileiras seja ocupados tão somente por elas, sem
              qualquer tipo de confusão, constrangimento ou medo.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed" style={{ textAlign: 'justify' }}>
              Estamos determinados a quebrar a espiral do silêncio que foi imposta à
              sociedade brasileira pelo governo petista com apoio do Poder Judiciário.
            </p>

            <p className="text-white font-semibold text-xl text-center italic border border-purple-800 rounded-xl px-6 py-4 bg-purple-950/30">
              Nosso compromisso é com a realidade dos fatos e temos coragem para desafiar
              o sistema que tanto insiste em redefinir a grama como azul e o céu como verde.
            </p>
          </div>
        </div>
      </section>

      {/* PREMISSAS */}
      <section id="premissas" className="py-16 px-6 bg-gradient-to-b from-black to-purple-950/20 text-center border-y border-purple-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-widest text-purple-400">
            Nossa premissa
          </h2>
          <div className="mt-1 mx-auto w-16 h-1 bg-purple-600 rounded-full" />

          <p className="mt-8 text-3xl font-black text-white uppercase">
            A verdade é uma só: NINGUÉM PODE SE TRANSFORMAR EM MULHER.
          </p>

          <div
            className="mt-8 text-slate-300 text-lg leading-relaxed space-y-5"
            style={{ textAlign: 'justify' }}
          >
            <p>
              Por mais que homens se submetam a terapias hormonais e a cirurgias mutiladoras,
              eles <span className="text-white font-bold">NUNCA SERÃO MULHERES.</span>
            </p>

            <p>
              Por essa razão é que o termo "mulher trans" deve ser IMEDIATAMENTE abandonado
              e substituído por "TRAVESTI".
            </p>

            <p>
              Pelo mesmo motivo, também deve ser abandonada a expressão "mulher biológica"
              na medida que TODAS AS MULHERES SÃO BIOLOGICAMENTE MULHERES. A definição da
              palavra mulher se dá, tão somente, pelo sexo de nascimento do indivíduo.
              Por óbvio, isso também se aplica aos homens.
            </p>

            <p className="text-slate-400 italic border-l-4 border-purple-700 pl-4">
              Portanto, usar o substantivo "biológica" ao lado de "mulher" para distinguir
              de um travesti é, além de redundante, sinônimo de submissão à agenda progressista
              e seu novo dicionário.
            </p>
          </div>
        </div>
      </section>

      {/* FAÇA PARTE */}
      <section id="faca-parte" className="py-16 px-6 text-center bg-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-widest">
            Por que fazer parte?
          </h2>
          <div className="mt-1 mx-auto w-16 h-1 bg-purple-600 rounded-full" />

          <p
            className="mt-8 text-slate-300 text-lg leading-relaxed"
            style={{ textAlign: 'justify' }}
          >
            Pelo resgate da verdade e do respeito às mulheres brasileiras, faça parte do
            movimento: "Ele nunca será mulher" e lute conosco!
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