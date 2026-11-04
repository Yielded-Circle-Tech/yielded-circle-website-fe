import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import {
  graph,
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/structuredData";

const siteSchema = graph(
  organizationSchema(),
  localBusinessSchema(),
  websiteSchema(),
);

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={siteSchema} />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
