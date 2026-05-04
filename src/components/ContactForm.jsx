"use client";

import { useActionState } from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";
import { submitContactForm } from "@/app/server/telegram/actions";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const t = useTranslations('contact');
  const [state, formAction, pending] = useActionState(submitContactForm, {
    success: false,
    error: null,
    message: null,
  });

  return (
    <FadeIn>
      <form action={formAction}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          {t('workInquiries')}
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label={t('name')} name="name" autoComplete="name" required />
          <TextInput
            label={t('email')}
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            label={t('company')}
            name="company"
            autoComplete="organization"
          />
          <TextInput label={t('phone')} type="tel" name="phone" autoComplete="tel" />
          <TextInput label={t('message')} name="message" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">{t('budget')}</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput label={t('budgetRange1')} name="budget" value="25" />
              <RadioInput label={t('budgetRange2')} name="budget" value="50" />
              <RadioInput label={t('budgetRange3')} name="budget" value="100" />
              <RadioInput label={t('budgetRange4')} name="budget" value="150" />
            </div>
          </div>
        </div>

        {state.error && (
          <p className="mt-4 text-sm text-red-600">{state.error}</p>
        )}
        {state.success && (
          <p className="mt-4 text-sm text-green-600">{state.message}</p>
        )}

        <Button type="submit" className="mt-10" disabled={pending}>
          {pending ? t('sending') : t('submit')}
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
