"use client";

import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";
import { useTranslations } from "next-intl";

const Deliver = () => {
  const t = useTranslations("deliver");

  return (
    <Section title={t("title")} image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          {t.rich("description1", {
            strong: (chunks) => (
              <strong className="font-semibold text-neutral-950">
                {chunks}
              </strong>
            ),
          })}
        </p>
        <p>
          {t.rich("description2", {
            strong: (chunks) => (
              <strong className="font-semibold text-neutral-950">
                {chunks}
              </strong>
            ),
          })}
        </p>
        <p>
          {t.rich("description3", {
            strong: (chunks) => (
              <strong className="font-semibold text-neutral-950">
                {chunks}
              </strong>
            ),
          })}
        </p>
      </div>
      <h3 className="mt-12 text-base font-semibold text-neutral-950">
        {t("includedInPhase")}
      </h3>
      <List>
        <ListItem title={t("testing.title")}>
          {t("testing.description")}
        </ListItem>
        <ListItem title={t("infrastructure.title")}>
          {t("infrastructure.description")}
        </ListItem>
        <ListItem title={t("support.title")}>
          {t("support.description")}
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
