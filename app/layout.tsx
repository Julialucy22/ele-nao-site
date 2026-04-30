import "./globals.css";

export const metadata = {
  title: "Ele Nunca Será Mulher",
  description: "Um movimento para reunir pessoas e fortalecer ideias.",
  openGraph: {
    title: "Ele Nunca Será Mulher",
    description: "Um movimento para reunir pessoas e fortalecer ideias.",
    url: "https://elenuncaseramulher.com.br",
    siteName: "Ele Nunca Será Mulher",
    images: [
      {
        url: "https://elenuncaseramulher.com.br/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}