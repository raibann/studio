import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

const Team = ({
  teams,
  title = "Our Team",
  subtitle = "Meet the people behind the magic",
}) => {
  return (
    <Container className={clsx("mt-24 sm:mt-32 lg:mt-40")}>
      <FadeIn>
        <h1>
          <span className="block text-base font-semibold text-neutral-950">
            {title}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              "mt-6 block max-w-5xl text-5xl font-medium tracking-tight text-neutral-950 text-balance sm:text-6xl",
            )}
          >
            {subtitle}
          </span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full mt-6">
          {teams.map((team, index) => (
            <div key={index} className="space-y-2 sm:space-y-3">
              <div className="relative aspect-3/4 w-full">
                <Image
                  src={team.image}
                  alt={team.name}
                  unoptimized
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-black text-base sm:text-lg font-semibold truncate">
                    {team.name}
                  </h3>
                  {team.social && (
                    <div className="flex gap-2">
                      {team.social.map((social, index) => (
                        <Link
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-500 hover:text-black transition-colors"
                        >
                          <social.icon className="w-5 h-5" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <p className="text-neutral-500 text-sm truncate">
                  ⎯ {team.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Container>
  );
};

export default Team;
