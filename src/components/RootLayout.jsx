"use client";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import Container from "./Container";
import Link from "next/link";
import Logo from "./Logo";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import clsx from "clsx";
import Offices from "./Offices";
import SocialMedia from "./SocialMedia";
import Image from "next/image";
import { BsMailbox2 } from "react-icons/bs";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import Footer from "./Footer";

const Header = ({
  panelId,
  invert = false,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
  changeLocaleAction,
}) => {
  const t = useTranslations("navigation");
  return (
    <Container className="py-3 md:py-4">
      <div className="flex items-center justify-between gap-x-4 lg:gap-x-8">
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center gap-2 group"
        >
          <Image
            src={expanded ? "/midvortex-1.png" : "/midvortex-2.png"}
            alt="Midvortex"
            unoptimized
            width={40}
            height={40}
            className="transition-transform group-hover:scale-105"
          />
          <span
            className={clsx(
              "hidden sm:block text-lg font-semibold",
              invert ? "text-white" : "text-neutral-950",
            )}
          >
            Midvortex
          </span>
        </Link>

        <div className="flex items-center gap-x-3">
          <LanguageSwitcher
            changeLocaleAction={changeLocaleAction}
            invert={invert}
          />

          {/* Desktop Contact Button */}
          <Button
            href="/contact"
            invert={invert}
            className="hidden sm:inline-flex"
          >
            <span className="sr-only">{t("contactUs")}</span>
            <BsMailbox2 className="size-4" />
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded.toString()}
            aria-controls={panelId}
            className={clsx(
              "group relative p-2 rounded-full transition-all duration-200",
              invert
                ? "hover:bg-white/10 text-white"
                : "hover:bg-neutral-100 text-neutral-950",
            )}
            aria-label={expanded ? "Close navigation" : "Open navigation"}
          >
            <Icon
              className={clsx(
                "h-6 w-6 transition-colors",
                invert
                  ? "fill-white group-hover:fill-neutral-200"
                  : "fill-neutral-950 group-hover:fill-neutral-700",
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  );
};
const NavigationRow = ({ children }) => {
  return (
    <div className="even:mt-px sm:bg-neutral-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  );
};

const NavigationItem = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  );
};

const Navigation = () => {
  const t = useTranslations("navigation");
  return (
    <nav className="mt-px text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href="/work">{t("ourWork")}</NavigationItem>
        <NavigationItem href="/about">{t("aboutUs")}</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/process">{t("ourProcess")}</NavigationItem>
        <NavigationItem href="/blog">{t("blog")}</NavigationItem>
      </NavigationRow>
    </nav>
  );
};

const RootLayoutInner = ({ children, changeLocaleAction }) => {
  const t = useTranslations("layout");
  const panelId = useId();
  const [expanded, setExpanded] = useState(false);
  const openRef = useRef();
  const closeRef = useRef();
  const navRef = useRef();
  const shouldReduceMotion = useReducedMotion();
  useEffect(() => {
    function onClick(event) {
      if (event.target.closest("a")?.href === window.location.href) {
        setExpanded(false);
      }
    }
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);
  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        <div
          className="absolute left-0 right-0 top-2 z-40 pt-14"
          aria-hidden={expanded ? "true" : undefined}
          inert={expanded ? true : false}
        >
          {/* Header */}
          <Header
            panelId={panelId}
            icon={HiMenuAlt4}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded);
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true }),
              );
            }}
            changeLocaleAction={changeLocaleAction}
          />
        </div>
        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? "auto" : "0.5rem" }}
          className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
          aria-hidden={expanded ? undefined : "true"}
          inert={expanded ? false : true}
        >
          <motion.div layout className="bg-neutral-800">
            <div ref={navRef} className="bg-neutral-950 pb-16 pt-14">
              <Header
                invert
                panelId={panelId}
                icon={IoMdClose}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded);
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true }),
                  );
                }}
                changeLocaleAction={changeLocaleAction}
              />
            </div>
            {/* Navigation */}
            <Navigation />
            <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
              <Container>
                <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                  <div>
                    <h2 className="font-display text-base font-semibold text-white">
                      Our offices
                    </h2>
                    <Offices
                      invert
                      className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                    />
                  </div>
                  <div className="sm:border-l sm:border-transparent sm:pl-16">
                    <h2 className="font-display text-base font-semibold text-white">
                      Follow us
                    </h2>
                    <SocialMedia className="mt-6" invert />
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>
      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <main className="w-full flex-auto">{children}</main>
          {/* Footer */}
          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};

const RootLayout = ({ children, changeLocaleAction }) => {
  const pathName = usePathname();
  return (
    <RootLayoutInner key={pathName} changeLocaleAction={changeLocaleAction}>
      {children}
    </RootLayoutInner>
  );
};

export default RootLayout;
