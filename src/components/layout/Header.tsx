import Image from "next/image";
import Link from "next/link";

import { ExternalLinkIcon } from "@core/shared/icons";

export const Header = () => (
  <header className="px-4">
    <div className="relative mx-auto max-w-screen-2xl flex items-center justify-between py-6">
      <Image src="/img/logo.svg" alt="" width={104} height={25} />

      <nav className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ul className="flex items-center gap-7 text-sm">
          <li>
            <Link
              href=""
              className="flex items-center gap-1 transition focus:text-slate-100 hover:text-slate-100"
            >
              Calculadoras
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="flex items-center gap-1 transition focus:text-slate-100 hover:text-slate-100"
            >
              Ferramentas
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="flex items-center gap-1 transition focus:text-slate-100 hover:text-slate-100"
            >
              Motivação
            </Link>
          </li>
        </ul>
      </nav>

      <Link
        href=""
        className="text-sm flex items-center justify-center gap-2 hover:underline"
      >
        Github
        <ExternalLinkIcon className="h-5 w-5" />
      </Link>
    </div>
  </header>
);
