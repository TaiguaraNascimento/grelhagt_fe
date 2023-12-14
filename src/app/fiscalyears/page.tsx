import Botao from "../componentes/ui/tabelas/botao/Botao";
import TabelaCRUD from "../componentes/ui/tabelas/tabelacrud/TabelaCRUD";
import Titulo from "../componentes/ui/titulos/Titulos";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function FiscalYears() {
  const fiscalYears = await prisma.fiscalYears.findMany();

  return (
    <>
      <Titulo>Fiscal Years</Titulo>
      <TabelaCRUD>
        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>ID</td>
              <td>Fiscal Year</td>
              <td>Data Inicial</td>
              <td>Data Final</td>
              <td colSpan={4}>Opções</td>
            </tr>
          </thead>
          <tbody>
            {fiscalYears.map((fys) => (
              <tr key={fys.id}>
                <td>x</td>
                <td>{fys.id}</td>
                <td>{fys.fiscalYear}</td>
                <td>{fys.dataInicial.toString()}</td>
                <td>{fys.dataFinal.toString()}</td>

                <td>6</td>
                <td>
                  <Botao label={"Btn1"} />
                </td>
                <td>
                  <Botao label={"Btn2"} />
                </td>
                <td>
                  <Botao label={"Btn3"} />
                </td>
                <td>
                  <Botao label={"Btn4"} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TabelaCRUD>
    </>
  );
}
