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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          asperiores sunt porro reprehenderit. Eius aperiam sed expedita
          delectus debitis? Architecto, excepturi voluptate expedita cupiditate
          amet ad? Ea dolore deleniti adipisci.
        </p>
        <p className="mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
          doloremque odio ut. Ipsam perspiciatis tenetur dicta officia quod
          debitis sequi fugit consequuntur, numquam minus deserunt, voluptatum
          nesciunt optio nemo aspernatur?
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quae,
          id libero sit eos quos nobis suscipit deserunt nostrum et qui cumque
          harum neque hic quibusdam dolor, quas beatae aliquam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa
          veniam assumenda voluptatem! Quaerat doloremque, provident omnis
          voluptates porro, quas vel consequuntur iusto assumenda vitae ipsam
          quo? Velit, totam quas.
        </p>
      </div>
    </section>
  );
};

export default HomeAbout;
