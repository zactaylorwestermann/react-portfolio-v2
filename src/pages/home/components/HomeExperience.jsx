import ExperienceCard from "./ExperienceCard";

const HomeExperience = () => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-p1/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-p5 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          <ExperienceCard
            date="Aug - Nov 2023"
            role="Innovation Partner - UTS"
            desc="Mapped existing UTS administration systems architecture, designed updated architecture and functionality, and conducted end-user testing of new design."
            technologies={["Figma", "JavaScript", "UX/UI"]}
          />
          <ExperienceCard
            date="Mar - Jun 2023"
            role="Innovation Consultant - UNICEF Global"
            desc="Designed structural methods and an interactive visualisation to promote the discoverability of new knowledge."
            technologies={["Excel", "Data Mapping"]}
          />
          <ExperienceCard
            date="Mar - Jun 2023"
            role="Innovation Consultant - Services NSW"
            desc=""
            technologies={["Excel", "Microsoft Suite"]}
          />
          <ExperienceCard
            date="Jan - Feb 2023"
            role="Account Management Intern - EarlyTrade"
            desc="Managed the integrity of 600+ customer accounts, conducted resaerch into potential account holders and validated organisational information and contact points."
            technologies={["Excel"]}
          />
          <ExperienceCard
            date="Jul - Oct 2022"
            role="IT Industry Partner - Revenue NSW"
            desc="Mapped customer data flows through Revenue NSW systems and redesigned the customer data model across Revenue NSW services."
            technologies={["Python", "Data Mapping"]}
          />
          <ExperienceCard
            date="2018"
            role="HSC Work Experience - Fairfax Media"
            desc="Designed graphics for web and print, visualised key data and statistics."
            technologies={["Python", "JavaScript", "Adobe Suite"]}
          />
        </ol>
        <div className="mt-12">
          <a
            className="inline-flex items-baseline font-medium leading-tight text-p5/75 hover:text-s3 focus-visible:text-s3 group/link text-base"
            href="/src/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="view full résumé (opens in new tab)"
          >
            <span class="inline-block">
              View Full Résumé
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeExperience;
