import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const skills = [
  {
    name: "remix.js",
    imgSrc: "remix-logo-icon.svg",
  },
  { name: "C#", imgSrc: "csharp-logo-icon.svg" },
  {
    name: "ASP.NET",
    imgSrc: "dotnet-logo-icon.svg",
  },
  {
    name: "react.js",
    imgSrc: "react-logo-icon.svg",
  },
  {
    name: "Tailwindcss",
    imgSrc: "tailwind-logo-icon.svg",
  },
  {
    name: "SQL",
    imgSrc: "sql-logo-icon.svg",
  },
  {
    name: "Supabase",
    imgSrc: "supabase-logo-icon.svg",
  },
  {
    name: "Wordpress",
    imgSrc: "wordpress-logo-icon.svg",
  },
];

export default function Home() {
  return (
    <main>
      <section>
        <div className="breaks-words mx-auto grid max-w-[980px] grid-cols-1 px-5 py-16 md:grid-cols-2">
          <div>
            <h1 className="text-xl capitalize sm:text-3xl sm:font-light">
              <Link href="https://github.com/salim-mohamed-98" target="_blank">
                salim mohamed{" "}
                <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4 align-[-1px]" />
              </Link>
            </h1>
            <p className="bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-2xl font-bold capitalize text-transparent sm:text-4xl">
              full-stack developer
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="max-w-[550px] text-lg text-slate-700 sm:text-2xl md:max-w-full md:p-5 md:leading-9">
              Hello, I'm Salim – a passionate web developer skilled in both
              front-end and back-end technologies . While my 80% of{" "}
              <span className="decoration-3 font-medium underline decoration-sky-500 decoration-wavy">
                expertise is self-taught
              </span>
              , driven by a love for bringing web projects to life. I seamlessly
              bridge the gap between{" "}
              <span className="decoration-3 font-medium underline decoration-red-500 decoration-wavy">
                design and functionality
              </span>
              .
            </p>
          </div>
        </div>
      </section>
      <section className=" bg-stone-100">
        <div className="mx-auto flex max-w-7xl flex-col px-5 py-16 md:flex-row">
          <div className="relative h-auto w-full">
            <div className="sticky top-10 w-full text-center md:text-left">
              <h2 className="mb-5 inline bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-5xl font-extrabold uppercase tracking-wider text-transparent sm:text-6xl">
                Skills
              </h2>
              <p className="mb-8  text-xl">
                Array of skills through{" "}
                <span className="decoration-3 font-medium underline decoration-sky-300 decoration-wavy underline-offset-4">
                  formal education
                </span>{" "}
                and{" "}
                <span className="decoration-3 font-medium underline decoration-indigo-300 decoration-wavy underline-offset-4">
                  self-directed learning
                </span>{" "}
                .
              </p>
              <ul className="flex flex-wrap justify-center gap-6  *:rounded-full *:bg-sky-100 *:p-1 *:pr-4 *:text-lg md:justify-start">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 ring ring-sky-200 ring-offset-2"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                      <Image
                        className="h-auto w-7"
                        src={`images/frameworks/${skill.imgSrc}`}
                        width={0}
                        height={0}
                        alt={`${skill.name} logo icon`}
                      />
                    </div>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="capitilize h-auto w-full space-y-20 py-10 sm:px-2">
            <div className="w-full space-y-5 text-center sm:p-4 sm:text-left">
              <Image
                className="mx-auto"
                src="/images/scribbles-2.svg"
                width={200}
                height={200}
                alt="scribble iage"
              />
              <h3 className="text-2xl font-bold">Problem-solving ability.</h3>
              <p className="text-xl leading-7 text-slate-700">
                For me, it's not about the tools or technologies I use, but how
                I use them to solve problems. My focus is always on finding the
                right solution for each challenge. I really enjoy the process of
                tackling and solving tough problems.
              </p>
            </div>
            <div className="w-full space-y-5 p-4 text-center sm:text-left">
              <Image
                className="mx-auto"
                src="/images/scribbles-1.svg"
                width={200}
                height={200}
                alt="scribble iage"
              />
              <h3 className="text-2xl font-bold">
                Adaptability and Flexibility.
              </h3>
              <p className="text-xl leading-7 text-slate-700">
                I see change as a chance for growth. Whether it's diving into
                new technologies or tweaking strategies, I'm all about stepping
                out of my comfort zone. This approach helps me think creatively
                and find unique solutions.
              </p>
            </div>
            <div className="w-full space-y-5 p-4 text-center sm:text-left">
              <Image
                className="mx-auto"
                src="/images/scribbles-3.svg"
                width={200}
                height={200}
                alt="scribble image"
              />
              <h3 className="text-2xl font-bold">Future learning goals.</h3>
              <p className="text-xl leading-7 text-slate-700">
                As someone with a business-oriented mindset, my ambition is to
                develop solutions that benefit millions. Currently, I'm steering
                my path towards mastering mobile app development and digital
                marketing tools, aiming to broaden my impact in these fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:py-16">
        <div className="mx-auto max-w-screen-lg *:w-full md:flex md:gap-6">
          {/* image md:block */}
          <div className="hidden md:block">
            <img
              className="h-full w-auto object-cover object-center"
              src="https://assets.website-files.com/64126a8958e3cf3650b6ad18/641270d055d4753bae06002c_Rectangle%206124-min-p-800.jpg"
              alt="portfolio showcase project"
            />
          </div>

          {/* content */}
          <div className="text-lg xs:text-xl sm:text-2xl">
            <h2 className="mb-6 break-words text-3xl font-bold xs:text-5xl sm:text-6xl">
              Behind the Scenes of Building My Portfolio
            </h2>
            <p>
              In creating this portfolio not only exhibit my work but also
              stands as a testament to my skills in web development and
              designing.
            </p>

            {/* image md:hidden */}
            <div className="my-4 md:hidden">
              <img
                src="https://assets.website-files.com/64126a8958e3cf3650b6ad18/641270d055d4753bae06002c_Rectangle%206124-min-p-800.jpg"
                alt="portfolio showcase project"
              />
            </div>

            <p>
              I have used remix.js, headlessui and tailwindcss to demonstrate my
              skills in real-world context.
            </p>

            {/* button */}
            <Link
              href="/projects"
              className="relative isolate mx-auto my-8 hidden w-fit *:px-6 *:py-4 *:text-xl *:font-medium *:text-white md:block"
            >
              <div className=" bg-slate-800">View All Projects</div>
              <div className="absolute inset-0 -z-10 h-full w-full translate-x-3 translate-y-3 bg-sky-500 bg-gradient-to-r from-sky-500 to-teal-500"></div>
            </Link>
          </div>
        </div>

        {/* button md:hidden */}
        <Link
          href="/projects"
          className="relative isolate mx-auto my-8 block w-fit *:px-6 *:py-4 *:text-xl *:font-medium *:text-white md:hidden"
        >
          <div className=" bg-slate-800">View All Projects</div>
          <div className="absolute inset-0 -z-10 h-full w-full translate-x-3 translate-y-3 bg-sky-500 bg-gradient-to-r from-sky-500 to-teal-500"></div>
        </Link>
      </section>
    </main>
  );
}
