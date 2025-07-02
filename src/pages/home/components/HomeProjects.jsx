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
            desc="A responsive and interactive website showcasing the use of front-end design elements and animations. Built using React."
            tags={["React", "JavaScript"]}
            img="/src/assets/responsivewebsite.JPG"
          />
          <ProjectCard
            name="Spotify Clone"
            link="https://musicstreaming-ndsv.onrender.com/"
            desc="A web app with a functional music player system. Users can view playlists, add new songs, message, play music, pause music and skip to the next or previous track. Built using React, TypeScript and Node js."
            tags={["React", "TypeScript", "Node.js", "Express", "MongoDB"]}
            img="/src/assets/musicstreamingsite.JPG"
          />
          <ProjectCard
            name="Social Media Clone"
            link="https://nextjs-socialmedia-prototype.vercel.app/"
            desc="Working social media web application allowing for posting text/images and interacting with other users. Includes sign-up and authentication systems and uses PostgreSQL to store data."
            tags={[
              "React",
              "TypeScript",
              "Next.js",
              "Clerk",
              "PostgreSQL",
              "Neon",
              "Prisma",
            ]}
            img="/src/assets/socialmediasite.JPG"
          />
          <ProjectCard
            name="Portfolio Website (OLD)"
            link="https://zactaylorwestermann.netlify.app/"
            desc="Old portfolio website created using HTML, CSS and JavaScript."
            tags={["HTML", "CSS", "JavaScript"]}
            img="/src/assets/oldportfolio.JPG"
          />
        </ul>
        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-p5/75 hover:text-s3 focus-visible:text-s3 group text-base"
            href="/projects"
            aria-label="view all projects (opens in new tab)"
          >
            <span class="inline-block">
              View All Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
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
