import ProjectCard from "./ProjectCard";

const HomeProjects = () => {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="selected projects"
    >
      <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-p1/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 class="text-sm font-bold uppercase tracking-widest text-p5 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          <ProjectCard
            name="Interactive Website"
            link="https://enter-dystopia.netlify.app/"
            desc="Description"
            tags={["React", "JavaScript"]}
            img="/assets/dystop1a.JPG"
          />
          <ProjectCard
            name="Interactive Website"
            link="https://enter-dystopia.netlify.app/"
            desc="Description"
            tags={["React", "JavaScript"]}
            img="/assets/dystop1a.JPG"
          />
          <ProjectCard
            name="Interactive Website"
            link="https://enter-dystopia.netlify.app/"
            desc="Description"
            tags={["React", "JavaScript"]}
            img="/assets/dystop1a.JPG"
          />
        </ul>
        <div className="mt-12">
          <a
            className="inline-flex items-baseline font-medium leading-tight text-p5/75 hover:text-s3 focus-visible:text-s3 group/link text-base"
            href="/projects"
            aria-label="view all projects (opens in new tab)"
          >
            <span class="inline-block">
              View All Projects
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

export default HomeProjects;
