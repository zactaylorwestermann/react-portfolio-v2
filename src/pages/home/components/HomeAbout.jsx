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
          Some stuff about me blah blah blah blah blah blah blah blah blah blah
          blah blah
        </p>
        <p>
          More stuff about me blah blah blah blah blah blah blah blah blah blah
          blah blah
        </p>
      </div>
    </section>
  );
};

export default HomeAbout;
