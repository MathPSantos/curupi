import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Sora } from "@next/font/google";
import { SSRProvider } from "react-aria";

import { queryClient } from "@core/libs/query";

import "@styles/main.scss";

const soraFont = Sora({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <QueryClientProvider client={queryClient}>
        <style jsx global>{`
          :root {
            --sora-font: ${soraFont.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </QueryClientProvider>
    </SSRProvider>
  );
}
