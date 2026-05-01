import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const reels = [
  'https://www.instagram.com/p/DXoq7xaEYrU/',
  'https://www.instagram.com/p/DXnRxr1ka-T/',
  'https://www.instagram.com/p/DWpQK3eESie/',
  'https://www.instagram.com/p/DWWH6dxkYnn/',
  'https://www.instagram.com/p/DWHQclqERhn/',
  'https://www.instagram.com/p/DWCdw1OEaPB/',
  'https://www.instagram.com/p/DV_Ze7sjqiY/',
  'https://www.instagram.com/p/DV6g6cAkTl_/',
  'https://www.instagram.com/p/DV4Yhl5kXoZ/',
  'https://www.instagram.com/p/DV4VHPoEUzr/',
  'https://www.instagram.com/p/DV4HWW3D_Lu/',
  'https://www.instagram.com/p/DV11ILEETCw/',
  'https://www.instagram.com/p/DVylJZtkYU9/',
  'https://www.instagram.com/p/DVwUCD-kRA3/',
  'https://www.instagram.com/p/DV0vscdkTfX/',
];

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <header className="border-b border-purple-800 bg-black/95">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="font-black text-lg uppercase">
            Ele Nunca Será Mulher
          </div>

          <Link
            href="/"
            className="bg-purple-700 px-5 py-3 rounded-xl font-black uppercase text-xs flex items-center gap-2 hover:bg-purple-600 transition-all"
          >
            <ArrowLeft size={16} />
            Voltar
          </Link>
        </div>
      </header>

      <section className="px-6 py-12 text-center bg-gradient-to-b from-purple-950 via-black to-black">
        <h1 className="text-4xl md:text-6xl font-black uppercase">
          Vídeos do <span className="text-purple-400">movimento</span>
        </h1>

        <p className="mt-4 text-slate-300">
          Assista aos principais vídeos e reels do movimento.
        </p>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {reels.map((url, index) => (
            <div
              key={url}
              className="bg-[#12001f] border border-purple-800 rounded-3xl p-4 shadow-xl"
            >
              <iframe
                src={`${url}embed`}
                className="w-full rounded-2xl bg-black"
                height="620"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                title={`Vídeo do movimento ${index + 1}`}
              />

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block bg-purple-700 py-3 rounded-xl text-center font-black uppercase text-sm hover:bg-purple-600 transition-all"
              >
                Abrir no Instagram
              </a>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}