import { Element } from "react-scroll";

const HomeAbout = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="about me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-p1/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-p5 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          I'm a software engineer interested in designing and developing
          websites that are thoughtful, usable and creative. I love everything
          about designing for usability and wish to create memorable
          experiences.
        </p>
        <p className="mb-4">
          I have recently graduated from the University of Technology Sydney
          with a bachelor's degree in IT. I would love to find an opportunity to
          allow me to develop and showcase my expertise in software design.
        </p>
        <p className="mb-4">
          I am experienced in JavaScript, C# and Python, and am familiar with
          frameworks such as React and Next JS. I have worked on many personal
          and professional projects in order to build my skills in popular areas
          such as API and AI usage.
        </p>
        <p>
          During my downtime I love to express my creativity and learn new
          things through hobbies such as reading and writing, baking sweets or
          having a movie night.
        </p>
      </div>
    </section>
  );
};

export default HomeAbout;
