import Link from 'next/link';

export default function QuemSomos() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <Link href="/" className="inline-block mb-10 text-purple-400 font-bold">
          ← Voltar
        </Link>

        <div
          className="mt-10 text-slate-300 space-y-6 leading-relaxed text-lg"
          style={{ textAlign: 'justify' }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-white text-center uppercase mb-10">
            Quem somos?
          </h1>

          <p>
            Somos cidadãos inconformados com o crescimento da pauta da ideologia de gênero no Brasil e com a implantação da agenda progressita, que acarreta na perda de espaços de segurança e de poder para as mulheres e meninas brasileiras.
          </p>

          <p>
            Tudo começou quando nos mobilizamos – inicialmente em nossas redes sociais – para impedir que uma travesti – que não se aceita como tal e que inveja e odeia mulheres – assumisse a vaga de Presidente da Comissão de Defesa dos Direitos das Mulheres da Câmara dos Deputados.
          </p>

          <p>
            Para além da inadequação de a vaga ser ocupada por um homem, a personagem impôs, com veemência, a concepção de que homens podem ser mulheres, bastando que haja o autorreconhecimento e autodeclaração para isso.
          </p>

          <p>
            Esse indivíduo chegou a afirmar que a referida comissão “não trataria de questões de biologia porque o local adequado para isso seriam as universidades”. Nessa mesma esteira, propugnou pela substituição da palavra “mãe” por “pessoa que gesta”. Também exigiu que não se usasse mais a palavra “mulher” para se referir às “pessoas que menstruam”.
          </p>

          <p>
            Em alguns países, essas pessoas já são tratadas como portadoras de distúrbio mental que lhes acarreta a incapacidade de lidar com a realidade imutável do gênero como resultado do sexo de nascimento.
          </p>

          <p>
            Distúrbio semelhante se observa naqueles que se identificam como animais e plantas.
          </p>

          <p>
            A raiz teórica para a ideologia do gênero vem, principalmente, da autora progressista Simone de Beauvoir que insistia na tese de que “ninguém nasce mulher, mas torna-se mulher”. O livro “O Segundo Sexo” foi publicado em 1949 e, desde então, subsidia a sustentação da ideia de que homens podem se transformar em mulheres, bastando o simples desejo para tal.
          </p>

          <p>
            No Brasil, graças às reiteradas eleições do PT, agenda progressista ganhou força. Paulatinamente, os espaços originalmente reservados às mulheres com vistas a trazer mais segurança e mais condições de ascensão profissional (como as cotas para ingresso na vida política) passaram a ser ocupados também por travestis.
          </p>

        </div>
      </div>
    </main>
  );
}