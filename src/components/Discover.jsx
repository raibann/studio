"use client";

import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";
import { useTranslations } from "next-intl";

const Discover = () => {
  const t = useTranslations("discover");

  return (
    <Section title={t("title")} image={{ src: imageWhiteboard, shape: 1 }}>
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
      <TagList className="mt-4">
        <TagListItem>{t("items.questionnaires")}</TagListItem>
        <TagListItem>{t("items.feasibility")}</TagListItem>
        <TagListItem>{t("items.bloodSamples")}</TagListItem>
        <TagListItem>{t("items.employeeSurveys")}</TagListItem>
        <TagListItem>{t("items.proofsOfConcept")}</TagListItem>
        <TagListItem>{t("items.forensicAudit")}</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
