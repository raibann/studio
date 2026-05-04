import RootLayout from "@/components/RootLayout";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Kantumruy_Pro, Inter } from "next/font/google";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const kantumruyPro = Kantumruy_Pro({
  weight: ["100", "300", "400", "500", "600", "700"],
  subsets: ["khmer"],
  variable: "--font-khmer",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Midvortex",
    default: "Midvortex",
  },
  icons: {
    icon: "/midvortex-3.png",
  },
};

export default async function Layout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();

  async function changeLocaleAction(newLocale) {
    "use server";
    const cookieStore = await cookies();
    cookieStore.set("locale", newLocale);
  }

  return (
    <html
      lang={locale}
      className={`${kantumruyPro.variable} ${inter.variable} h-full bg-neutral-950 text-base antialiased text-neutral-100`}
      suppressHydrationWarning
    >
      <body
        className="flex min-h-full flex-col"
        style={{
          fontFamily:
            locale === "km"
              ? "var(--font-khmer), sans-serif"
              : "var(--font-inter), sans-serif",
        }}
      >
        <NextIntlClientProvider messages={messages}>
          <RootLayout changeLocaleAction={changeLocaleAction}>
            {children}
          </RootLayout>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
