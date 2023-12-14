import type { Metadata } from "next";
import Footer from "./componentes/frame/footer/Footer";
import Header from "./componentes/frame/header/Header";
import LeftSide from "./componentes/stage/leftside/LeftSide";
import RightSide from "./componentes/stage/rightside/RightSide";
import Conteudo from "./componentes/stage/conteudo/Conteudo";
import Navbar from "./componentes/frame/navbar/Navbar";

export const metadata: Metadata = {
  title: "Grant Thornton Brasil - Grelha Admiinistrativa",
  description: "Grelha Admiinistrativa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Nunito"
        ></link>
      </head>
      <body>
        <Header />

        <Navbar />

        <LeftSide />

        <Conteudo>{children}</Conteudo>

        <RightSide />

        <Footer />
      </body>
    </html>
  );
}
