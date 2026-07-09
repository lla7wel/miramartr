"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useLanguage } from "@/components/LanguageProvider";
import { pages } from "@/content/site";
import { mailtoHref } from "@/lib/utils";

const enquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  message: z.string().min(12, "Please include the project scope"),
});

type Enquiry = z.infer<typeof enquirySchema>;

export function ContactForm() {
  const { lang } = useLanguage();
  const copy = pages.contact[lang];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Enquiry>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  const onSubmit = (values: Enquiry) => {
    window.open(mailtoHref(values), "_self");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Field label={copy.name} error={errors.name?.message}>
        <input {...register("name")} id="name" autoComplete="name" className="field" />
      </Field>
      <Field label={copy.email} error={errors.email?.message}>
        <input
          {...register("email")}
          id="email"
          type="email"
          autoComplete="email"
          className="field"
        />
      </Field>
      <Field label={copy.company} error={errors.company?.message}>
        <input
          {...register("company")}
          id="company"
          autoComplete="organization"
          className="field"
        />
      </Field>
      <Field label={copy.message} error={errors.message?.message}>
        <textarea
          {...register("message")}
          id="message"
          rows={6}
          placeholder={copy.messagePlaceholder}
          className="field resize-y"
        />
      </Field>
      <p className="text-xs leading-5 text-steel-400">{copy.response}</p>
      <button
        type="submit"
        className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-brand-red px-4 py-2.5 text-sm font-bold text-white transition hover:bg-brand-red-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
      >
        {copy.submit}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={labelToId(label)} className="text-sm font-semibold text-steel-100">
        {label}
      </label>
      <div className="mt-1">{children}</div>
      {error ? <p className="mt-1 text-sm text-brand-amber">{error}</p> : null}
    </div>
  );
}

function labelToId(label: string) {
  if (label.toLowerCase().includes("mail") || label.toLowerCase().includes("posta")) return "email";
  if (label.toLowerCase().includes("company") || label.toLowerCase().includes("sirket"))
    return "company";
  if (label.toLowerCase().includes("message") || label.toLowerCase().includes("mesaj"))
    return "message";
  return "name";
}
