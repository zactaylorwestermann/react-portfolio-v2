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
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-p2/25 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-p5 hover:text-s3 focus-visible:text-s3 group/link text-base"
                    href=""
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="project name"
                  >
                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span className="inline-block">
                      Project Name
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
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Some text describing the project here
                </p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="technologies used"
                >
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-s2/20 px-3 py-1 text-xs font-medium leading-5 text-s3">
                      Excel
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-s2/20 px-3 py-1 text-xs font-medium leading-5 text-s3">
                      Tech
                    </div>
                  </li>
                </ul>
              </div>
              <img
                alt="Project Name"
                width="200"
                height="48"
                className="aspect-video object-cover rounded border-2 border-p5/10 transition group-hover:border-p5/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                src="/assets/dystop1a.JPG"
              />
            </div>
          </li>
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
