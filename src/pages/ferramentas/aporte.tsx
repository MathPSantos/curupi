import Head from "next/head";

import { Beams, Header } from "@components/layout";
import { NumberField, PriceField } from "@components/common";

export default function FinancialSupport() {
  return (
    <>
      <Head>
        <title>Ferramenta de aportes | curupi</title>
      </Head>
      <main>
        <div className="relative bg-[#18181B]">
          <Beams />

          <div className="relative">
            <Header />
            <div className="px-4">
              <div className="mx-auto max-w-screen-2xl flex items-center justify-between pt-32 pb-48">
                <div className="w-full max-w-2xl">
                  <h1 className="font-bold text-slate-100 text-[44px]">
                    Ferramenta de aportes
                  </h1>
                  <p className="mt-4 leading-relaxed">
                    Essa ferramenta irá ajudar te em seus aportes, de acordo com
                    a sua estratégia de investimentos. Adicione o valor do
                    aporte, a porcentagem por categoria e ativos, e por fim
                    saiba o quanto deve investir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="px-4 py-20">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-5">
              <div>
                <h2
                  id="__support-label"
                  className="font-semibold text-slate-600 text-2xl"
                >
                  Valor do aporte
                </h2>

                <PriceField
                  aria-labelledby="__support-label"
                  className="mt-5 h-[56px] w-full text-slate-800 text-[44px] font-bold outline-0 bg-transparent"
                  defaultValue={100}
                />
              </div>

              <div className="hidden lg:block">
                <h2 className="font-semibold text-slate-600 text-2xl">
                  Alocação
                </h2>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="font-semibold text-slate-600 text-2xl">
                Categorias
              </h2>

              <div className="mt-3">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl text-slate-800 font-semibold">
                      Renda fixa
                    </h3>

                    <div className="flex items-center gap-3"></div>
                  </div>
                  <div className="flex items-center">
                    <NumberField
                      label="Alocação"
                      minValue={1}
                      maxValue={0.01}
                      formatOptions={{ style: "percent", signDisplay: "never" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
