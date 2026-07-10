export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function mailtoHref({
  name,
  email,
  company,
  message,
}: {
  name: string;
  email: string;
  company?: string;
  message: string;
}) {
  const subject = encodeURIComponent(`Miramar RFQ enquiry from ${company || name}`);
  const body = encodeURIComponent(
    [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      "",
      "Scope / message:",
      message,
    ]
      .filter(Boolean)
      .join("\n")
  );

  return `mailto:info@miramartr.com?subject=${subject}&body=${body}`;
}
