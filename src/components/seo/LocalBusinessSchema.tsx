import { siteConfig } from "@/lib/seo";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",

    "@type": [
      "LocalBusiness",
      "HomeAndConstructionBusiness",
    ],

    "@id": `${siteConfig.url}/#business`,

    name: siteConfig.name,

    url: siteConfig.url,

    description: siteConfig.description,

    email: "hello@stortfordgardenrooms.co.uk",

    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Essex",
      },
      {
        "@type": "AdministrativeArea",
        name: "Hertfordshire",
      },
      {
        "@type": "City",
        name: "Stansted Mountfitchet",
      },
      {
        "@type": "City",
        name: "Bishop's Stortford",
      },
      {
        "@type": "City",
        name: "Saffron Walden",
      },
      {
        "@type": "City",
        name: "Great Dunmow",
      },
      {
        "@type": "City",
        name: "Sawbridgeworth",
      },
      {
        "@type": "City",
        name: "Harlow",
      },
      {
        "@type": "City",
        name: "Takeley",
      },
    ],

    knowsAbout: [
      "Bespoke garden rooms",
      "Garden offices",
      "Garden gyms",
      "Garden bars",
      "Entertainment rooms",
      "Timber-frame garden rooms",
      "Cedar cladding",
      "Composite cladding",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}