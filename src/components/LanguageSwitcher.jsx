"use client";

import { useLocale } from "next-intl";
import clsx from "clsx";

const locales = [
  { code: 'km', label: 'KH' },
  { code: 'en', label: 'EN' },
];

export default function LanguageSwitcher({ changeLocaleAction, invert = false }) {
  const locale = useLocale();

  return (
    <div className="flex items-center gap-2">
      {locales.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => changeLocaleAction(code)}
          disabled={code === locale}
          className={clsx(
            "rounded-full px-3 py-1 text-sm font-medium transition",
            code === locale
              ? invert
                ? "bg-white text-neutral-950"
                : "bg-neutral-950 text-white"
              : invert
                ? "text-white hover:bg-white/10"
                : "text-neutral-950 hover:bg-neutral-950/10",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
