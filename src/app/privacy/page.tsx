import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
export const metadata: Metadata = {
  title: "Privacy Policy",

  description:
    "Read the Stortford Garden Rooms Privacy Policy and learn how we collect, use and protect personal information.",

  alternates: {
    canonical: "/privacy",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main>
      {/* HERO */}

      <section className="bg-[#23352B] pt-36 pb-16 text-white md:pt-44 md:pb-20">
        <Container>
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#D8D2C7]">
              Legal
            </p>

            <h1 className="mt-4 text-5xl font-light leading-tight md:text-7xl">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              How Stortford Garden Rooms collects, uses and protects your
              personal information.
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
                  1. Who we are
                </h2>

                <p className="mt-4">
                  Stortford Garden Rooms is a garden room design and build
                  business based in Stansted Mountfitchet, serving homeowners
                  across Essex, Hertfordshire and surrounding areas.
                </p>

                <p className="mt-4">
                  For the purposes of UK data protection law, Stortford Garden
                  Rooms is responsible for the personal information collected
                  through this website and through enquiries made to us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  2. Information we collect
                </h2>

                <p className="mt-4">
                  We may collect personal information when you contact us,
                  complete our Project Planner, request information or otherwise
                  communicate with us.
                </p>

                <p className="mt-4">
                  This may include your name, email address, telephone number,
                  postcode, project requirements, preferred garden room use,
                  approximate size, features, budget, timescale and any other
                  information you choose to provide.
                </p>

                <p className="mt-4">
                  We may also collect limited technical information about how
                  visitors use our website where this is necessary for security,
                  performance or website analytics.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  3. How we use your information
                </h2>

                <p className="mt-4">
                  We use personal information to respond to enquiries, discuss
                  potential garden room projects, prepare quotations or project
                  proposals, arrange site visits, provide our services and
                  communicate with customers throughout a project.
                </p>

                <p className="mt-4">
                  We may also use information where reasonably necessary to
                  operate, maintain and protect our website and business, comply
                  with legal obligations and keep appropriate business records.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  4. Our lawful basis for using your information
                </h2>

                <p className="mt-4">
                  Where you contact us about a potential project, we generally
                  process your information because it is necessary to take steps
                  at your request before entering into a contract, or because it
                  is necessary for our legitimate interests in responding to
                  enquiries and operating our business.
                </p>

                <p className="mt-4">
                  Where you become a customer, we may also process information
                  where necessary to perform our contract with you or to comply
                  with legal obligations.
                </p>

                <p className="mt-4">
                  Where we rely on consent for a particular activity, you may
                  withdraw that consent at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  5. Who we share information with
                </h2>

                <p className="mt-4">
                  We do not sell your personal information.
                </p>

                <p className="mt-4">
                  We may share information with trusted service providers where
                  necessary to operate our website, manage communications or
                  deliver our services. For example, website enquiries are sent
                  using Resend, our email delivery provider.
                </p>

                <p className="mt-4">
                  We may also share information with professional advisers,
                  contractors or suppliers where this is reasonably necessary
                  for your project, or where disclosure is required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  6. How long we keep your information
                </h2>

                <p className="mt-4">
                  We keep personal information only for as long as reasonably
                  necessary for the purpose for which it was collected,
                  including responding to enquiries, managing projects,
                  maintaining business records and meeting legal, accounting or
                  tax requirements.
                </p>

                <p className="mt-4">
                  Enquiries that do not lead to a project will not be retained
                  indefinitely and will be reviewed and deleted when they are no
                  longer reasonably required.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  7. Keeping your information secure
                </h2>

                <p className="mt-4">
                  We take reasonable technical and organisational measures to
                  protect personal information against unauthorised access,
                  loss, misuse or disclosure.
                </p>

                <p className="mt-4">
                  However, no method of transmitting or storing information
                  online can be guaranteed to be completely secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  8. Your data protection rights
                </h2>

                <p className="mt-4">
                  Depending on the circumstances, you may have rights over your
                  personal information, including the right to request access
                  to it, ask us to correct inaccurate information, request
                  deletion, restrict or object to certain uses of your
                  information, and request transfer of information where
                  applicable.
                </p>

                <p className="mt-4">
                  You can contact us if you wish to exercise any of these
                  rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  9. Cookies
                </h2>

                <p className="mt-4">
                  Our website may use cookies and similar technologies. More
                  information about the cookies we use and how you can control
                  them is available in our{" "}
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
                  10. Contacting us
                </h2>

                <p className="mt-4">
                  If you have a question about this Privacy Policy or how we use
                  your personal information, please contact:
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

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  11. Complaints
                </h2>

                <p className="mt-4">
                  If you have concerns about how we use your personal
                  information, please contact us first so we can try to resolve
                  the issue.
                </p>

                <p className="mt-4">
                  You also have the right to raise a complaint with the
                  Information Commissioner&apos;s Office, the UK regulator for
                  data protection.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-[#23352B]">
                  12. Changes to this policy
                </h2>

                <p className="mt-4">
                  We may update this Privacy Policy from time to time to reflect
                  changes to our website, services or legal requirements. The
                  latest version will always be published on this page.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}