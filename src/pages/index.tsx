import Head from "next/head";
import Link from "next/link";

import { Beams, Header } from "@components/layout";

import { TOOLS_PAGES } from "@core/routes";

export default function Home() {
  return (
    <>
      <Head>
        <title>Soluções feitas para te auxiliar financeiramente | curupi</title>
      </Head>
      <main>
        <div className="relative pb-80 bg-[#18181B]">
          <Beams />

          <div className="relative">
            <Header />
            <div className="px-4">
              <div className="mx-auto max-w-screen-2xl flex items-center justify-between pt-36">
                <div className="w-full max-w-xl">
                  <h1 className="text-slate-100 text-[56px] leading-[71px] font-bold">
                    Soluções feitas para te ajudar{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-sky-200 to-sky-600">
                      financeiramente
                    </span>
                  </h1>
                  <p className="mt-4 leading-relaxed">
                    A curupi cria ferramentas gratuitas com o objetivo de te
                    auxiliar financeiramente, sempre de uma forma simples e
                    fácil.
                  </p>

                  <Link
                    href={TOOLS_PAGES.FINANCIAL_SUPPORT}
                    className="w-max mt-7 h-[44px] flex items-center justify-center font-semibold text-slate-100 rounded-md bg-sky-500 px-4"
                  >
                    Acessar Ferramenta de aportes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
