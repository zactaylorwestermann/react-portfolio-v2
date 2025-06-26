const ExperienceCard = ({ date, role, desc, technologies }) => {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-p2/25 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-p3 sm:col-span-2">
          {date}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-p5">
            <div className="inline-flex items-baseline font-medium leading-tight text-p5 hover:text-s3 focus-visible:text-s3 group/link text-base">
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-y-4 lg:block"></span>
              <span className="inline-block">{role}</span>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal">{desc}</p>
          <ul className="mt-2 flex flex-wrap" aria-label="technologies used">
            {technologies.map((item) => (
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-s2/20 px-3 py-1 text-xs font-medium leading-5 text-s3">
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default ExperienceCard;
