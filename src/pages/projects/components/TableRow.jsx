const TableRow = ({ year, project, tags, github, link }) => {
  return (
    <tr className="border-b border-p4/10 last:border-none">
      <td className="py-4 pr-4 align-top text-sm">
        <div className="translate-y-px">{year}</div>
      </td>
      <td className="py-4 pr-4 align-top font-semibold leading-snug text-p5">
        <div>
          <div className="block sm:hidden">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-p5 hover:text-s3 focus-visible:text-s3 sm:hidden group/link text-base"
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={project}
            >
              <span>
                <span className="inline-block">
                  {project}
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
              </span>
            </a>
          </div>
          <div className="hidden sm:block">{project}</div>
        </div>
      </td>
      <td className="hidden py-4 pr-4 align-top lg:table-cell">
        <ul className="flex -translate-y-1.5 flex-wrap">
          {tags.map((item) => (
            <li className="my-1 mr-1.5">
              <div className="flex items-center rounded-full bg-s2/20 px-3 py-1 text-xs font-medium leading-5 text-s3">
                {item}
              </div>
            </li>
          ))}
        </ul>
      </td>
      <td className="hidden py-4 pr-4 align-top lg:table-cell">
        <ul className="translate-y-1">
          <li className="mb-1 flex items-center">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-p4 hover:text-s3 focus-visible:text-s3 text-sm group/link"
              href={github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${github} (opens in new tab)`}
            >
              <span>
                <span className="inline-block">
                  View on Github
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </a>
          </li>
        </ul>
      </td>
      <td className="hidden py-4 align-top sm:table-cell">
        <ul className="translate-y-1">
          <li className="mb-1 flex items-center">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-p4 hover:text-s3 focus-visible:text-s3 text-sm group/link"
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${link} (opens in new tab)`}
            >
              <span>
                <span className="inline-block">
                  {link}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </a>
          </li>
        </ul>
      </td>
    </tr>
  );
};

export default TableRow;
