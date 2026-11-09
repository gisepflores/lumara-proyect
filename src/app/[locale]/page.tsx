import { notFound } from "next/navigation";
import LumaraHome from "../../components/lumara-home";

export function generateStaticParams() {
  return [{ locale: "es" }];
}

export default async function LocalizedHomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "es") {
    notFound();
  }

  return <LumaraHome locale="es" />;
}
