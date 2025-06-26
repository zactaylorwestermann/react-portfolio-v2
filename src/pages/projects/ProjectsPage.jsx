import TableRow from "./components/TableRow";

const ProjectsPage = () => {
  return (
    <div className="lg:py-24">
      <a
        className="group mb-2 inline-flex items-center font-semibold leading-tight text-s3"
        href="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-1 size-4 rotate-180 transition-transform group-hover:-translate-x-2"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Zac Taylor-Westermann
      </a>
      <h1 className="text-4xl font-bold tracking-tight text-p5 sm:text-5xl">
        All Projects
      </h1>
      <table id="content" className="mt-12 w-full border-collapse text-left">
        <thead className="sticky top-0 z-10 border-b border-p4/10 bg-p1/75 px-6 backdrop-blur">
          <tr>
            <th className="py-4 pr-8 text-sm font-semibold text-p5">Year</th>
            <th className="py-4 pr-8 text-sm font-semibold text-p5">Project</th>
            <th className="hidden lg:table-cell py-4 pr-8 text-sm font-semibold text-p5">
              Tools
            </th>
            <th className="hidden lg:table-cell py-4 pr-8 text-sm font-semibold text-p5">
              Github
            </th>
            <th className="hidden sm:table-cell py-4 pr-8 text-sm font-semibold text-p5">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            year="2025"
            project="Interactive Website"
            tags={["React", "JavaScript"]}
            github="https://github.com/zactaylorwestermann/reactjs-frontend-dystopian-design"
            link="https://enter-dystopia.netlify.app/"
          />
          <TableRow
            year="2025"
            project="Spotify Clone"
            tags={["React", "TypeScript", "Node.js", "Express", "MongoDB"]}
            github="https://github.com/zactaylorwestermann/portfolio-reactjs-music-streaming-site"
            link="https://musicstreaming-ndsv.onrender.com/"
          />
          <TableRow
            year="2025"
            project="Social Media Clone"
            tags={[
              "React",
              "TypeScript",
              "Next.js",
              "Clerk",
              "PostgreSQL",
              "Neon",
              "Prisma",
            ]}
            github="https://github.com/zactaylorwestermann/nextjs-socialmedia-prototype"
            link="https://nextjs-socialmedia-prototype.vercel.app/"
          />
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsPage;
