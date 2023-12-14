import Image from "next/image";
import logotipo from "../../../../../public/imagens/logotipo.png";

export default function Logotipo() {
  const x = 148;
  const y = 40;

  return (
    <>
      <Image
        src={logotipo}
        height={y}
        width={x}
        alt={"Grant Thornton Brasil"}
      />
    </>
  );
}
