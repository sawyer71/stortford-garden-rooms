import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
export const metadata: Metadata = {
  title: "Website Terms & Conditions",

  description:
    "Read the website terms and conditions for using the Stortford Garden Rooms website and Project Planner.",

  alternates: {
    canonical: "/terms",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main>
      {/* HERO */}

      <section className="bg-[#23352B] pb-16 pt-36 text-white md:pb-20 md:pt-44">
        <Container>
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#D8D2C7]">
              Legal
            </p>

            <h1 className="mt-4 text-5xl font-light leading-tight md:text-7xl">
              Terms & Conditions
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Terms governing your use of the Stortford Garden Rooms website.
            </p>
          </div>
        </Container>
      </section>

      {/* CONTENT */}

      <section className="bg-[#F7F5F2] py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-sm text-[#2A2A2A]/55">
              Last updated: August 2026
            </p>

            <div className="mt-10 space-y-12 text-base leading-8 text-[#2A2A2A]/70">
              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  1. About these terms
                </h2>

                <p className="mt-4">
                  These terms apply to your use of the Stortford Garden Rooms
                  website.
                </p>

                <p className="mt-4">
                  By using this website, you agree to use it lawfully and in
                  accordance with these terms.
                </p>

                <p className="mt-4">
                  These website terms do not replace the separate terms and
                  conditions that may apply if you ask us to design or build a
                  garden room for you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  2. About Stortford Garden Rooms
                </h2>

                <p className="mt-4">
                  Stortford Garden Rooms is a garden room design and build
                  business based in Stansted Mountfitchet, serving homeowners
                  across Essex, Hertfordshire and surrounding areas.
                </p>

                <p className="mt-4">
                  You can contact us at{" "}
                  <a
                    href="mailto:hello@stortfordgardenrooms.co.uk"
                    className="text-[#23352B] underline underline-offset-4"
                  >
                    hello@stortfordgardenrooms.co.uk
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  3. Website information
                </h2>

                <p className="mt-4">
                  We aim to keep the information on this website accurate,
                  useful and up to date. However, garden room projects are
                  bespoke and the information shown on the website is intended
                  as general guidance and inspiration.
                </p>

                <p className="mt-4">
                  Images, dimensions, layouts, materials, specifications,
                  features, timescales and other project information shown on
                  this website may vary from the final design or specification
                  agreed for an individual project.
                </p>

                <p className="mt-4">
                  Nothing on this website constitutes a binding quotation,
                  specification or contractual commitment unless we expressly
                  confirm it to you in writing as part of your project.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  4. Project Planner and enquiries
                </h2>

                <p className="mt-4">
                  Our Contact form and Project Planner allow you to provide
                  information about a potential garden room project.
                </p>

                <p className="mt-4">
                  Submitting an enquiry or completing the Project Planner does
                  not create a contract between you and Stortford Garden Rooms
                  and does not oblige either party to proceed with a project.
                </p>

                <p className="mt-4">
                  Any indication of size, budget, features or timescale entered
                  into the Project Planner is for initial discussion only.
                  Project pricing and specification will depend on the design,
                  site conditions, materials, access and other relevant
                  requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  5. Planning and regulatory requirements
                </h2>

                <p className="mt-4">
                  Information on this website about planning permission,
                  permitted development, building regulations or other legal
                  requirements is general information only.
                </p>

                <p className="mt-4">
                  The requirements applying to a garden room can depend on the
                  property, location, size, height, position and intended use
                  of the building. These matters should be considered for each
                  individual project before work begins.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  6. Intellectual property
                </h2>

                <p className="mt-4">
                  Unless stated otherwise, the content of this website,
                  including text, branding, graphics, layouts and original
                  imagery, belongs to Stortford Garden Rooms or is used with
                  appropriate permission.
                </p>

                <p className="mt-4">
                  You may view and use the website for your own personal,
                  non-commercial purposes. You must not copy, reproduce,
                  republish or commercially exploit website content without
                  permission where such permission is required.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  7. Acceptable use
                </h2>

                <p className="mt-4">
                  You must not misuse this website, attempt to gain
                  unauthorised access to it, interfere with its operation,
                  introduce malicious software or use the website for unlawful
                  or fraudulent purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  8. Third-party websites
                </h2>

                <p className="mt-4">
                  This website may contain links to third-party websites or
                  services. These links are provided for convenience and do not
                  mean that we control or endorse the content of those
                  websites.
                </p>

                <p className="mt-4">
                  Third-party websites operate under their own terms and
                  privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  9. Website availability
                </h2>

                <p className="mt-4">
                  We aim to keep the website available and functioning
                  properly, but we cannot guarantee that it will always be
                  uninterrupted, error-free or available at all times.
                </p>

                <p className="mt-4">
                  We may update, suspend or change parts of the website where
                  reasonably necessary.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  10. Our responsibility
                </h2>

                <p className="mt-4">
                  Nothing in these terms is intended to exclude or restrict any
                  liability that cannot lawfully be excluded or restricted, or
                  to affect your statutory rights as a consumer.
                </p>

                <p className="mt-4">
                  We are not responsible for losses caused solely by reliance
                  on general website information where project-specific advice
                  or agreement would reasonably be required.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  11. Changes to these terms
                </h2>

                <p className="mt-4">
                  We may update these website terms from time to time. The
                  latest version will be published on this page together with
                  the date of the most recent update.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  12. Governing law
                </h2>

                <p className="mt-4">
                  These website terms are governed by the laws of England and
                  Wales.
                </p>

                <p className="mt-4">
                  Nothing in this section limits any rights a consumer may have
                  regarding where legal proceedings may be brought.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  13. Privacy and cookies
                </h2>

                <p className="mt-4">
                  Information about how we use personal information and cookies
                  is available in our{" "}
                  <Link
                    href="/privacy"
                    className="text-[#23352B] underline underline-offset-4"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/cookies"
                    className="text-[#23352B] underline underline-offset-4"
                  >
                    Cookie Policy
                  </Link>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  14. Contact us
                </h2>

                <p className="mt-4">
                  If you have any questions about these website terms, please
                  contact:
                </p>

                <div className="mt-4">
                  <p className="font-medium text-[#23352B]">
                    Stortford Garden Rooms
                  </p>

                  <p>Stansted Mountfitchet, Essex</p>

                  <a
                    href="mailto:hello@stortfordgardenrooms.co.uk"
                    className="text-[#23352B] underline underline-offset-4"
                  >
                    hello@stortfordgardenrooms.co.uk
                  </a>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}