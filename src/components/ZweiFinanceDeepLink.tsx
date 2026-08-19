"use client";

import { useEffect, useMemo, useState } from "react";

export type ZweiFinanceAppPath = "auth/confirmed" | "reset-password";

interface ZweiFinanceDeepLinkProps {
  appPath: ZweiFinanceAppPath;
}

export function ZweiFinanceDeepLink({ appPath }: ZweiFinanceDeepLinkProps) {
  const [deepLink, setDeepLink] = useState(`zwei-finance://${appPath}`);

  const href = useMemo(() => deepLink, [deepLink]);

  useEffect(() => {
    const search = window.location.search || "";
    const hash = window.location.hash || "";
    const link = `zwei-finance://${appPath}${search}${hash}`;
    setDeepLink(link);
    window.location.replace(link);
  }, [appPath]);

  return (
    <div
      data-app-path={appPath}
      className="flex min-h-screen items-center justify-center bg-slate-900 px-6 py-6 text-center text-slate-200"
    >
      <main>
        <h1 className="text-2xl font-semibold text-slate-100">
          Abrindo o Zwei Finance…
        </h1>
        <p className="mt-3 max-w-md text-slate-400">
          Se o app não abrir sozinho, toque no botão abaixo. Precisa ter o app
          instalado.
        </p>
        <a
          id="open-app"
          href={href}
          className="mt-4 inline-block rounded-lg bg-sky-400 px-5 py-3 font-bold text-slate-900 no-underline"
        >
          Abrir o Zwei Finance
        </a>
      </main>
    </div>
  );
}
