import "./globals.css";

export const metadata = {
  title: "Ele Nunca Será Mulher",
  description: "Um movimento para reunir pessoas e fortalecer ideias.",
  metadataBase: new URL("https://elenuncaseramulher.com.br"),
  openGraph: {
    title: "Ele Nunca Será Mulher",
    description: "Um movimento para reunir pessoas e fortalecer ideias.",
    url: "https://elenuncaseramulher.com.br",
    siteName: "Ele Nunca Será Mulher",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ele Nunca Será Mulher",
    description: "Um movimento para reunir pessoas e fortalecer ideias.",
    images: ["/og-image.png"],
  },
  icons: {
     icon: "/favicon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}