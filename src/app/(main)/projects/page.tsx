import ProjectViewItem from "@/components/ProjectViewItem";

const projects = [
  {
    id: 1,
    name: "My Portfolio website",
    description:
      "My portfolio website build by me, with remixjs, headlessui and tailwindcss. A place where i showcase my skills and journey in software engineering.",
    img_src: "mockup_portfolio.png",
    github_link: "https://github.com/salim-mohamed-98/portfolio-nextjs",
    demo_link: "https://salim-portfolio-kappa.vercel.app/",
    completed: true,
  },
  {
    id: 2,
    name: "SISAF Foundation website",
    description:
      "I developed this website for a client using WordPress, highlighting Swedish innovation in digital sustainability. The project, featuring new solutions and technologies, was completed in approximately 2 weeks.",
    img_src: "mockup_sisaf.png",
    github_link: null,
    demo_link: "https://sisaf.org/SISAF2/",
    completed: true,
  },
  {
    id: 3,
    name: "Login / register pages",
    description:
      "I created a set of login and registration pages to refine my web development skills, focusing on a fundamental aspect of most applications. This project allowed me to practice and enhance my abilities in creating essential user authentication interfaces, a common requirement in web development.",
    img_src: "mockup_login_register.png",
    github_link:
      "https://github.com/salim-mohamed-98/login-register-auth-remix",
    demo_link: "https://login-register-auth-remix.vercel.app/",
    completed: true,
  },
  {
    id: 4,
    name: "Monoweb startup company",
    description:
      "Attempted to start a company offering app development on a monthly subscription basis for businesses, aiming to provide an alternative to hefty upfront costs. Gained ton of experience in web development, task, and time management.",
    img_src: "mockup_monoweb.png",
    github_link: null,
    demo_link: "https://monoweb.se",
    completed: true,
  },
  {
    id: 5,
    name: "Booking System Saas",
    description:
      "Developing a Booking System as a Service tailored for local barbers and salons. The system allows customers to easily book appointments directly through the business websites, streamlining the scheduling process for both clients and service providers",
    img_src: "",
    github_link: null,
    demo_link: null,
    completed: false,
  },
  {
    id: 6,
    name: "Driving Crash Course",
    description:
      "This educational tool aims to offer intensive, comprehensive driving lessons through an interactive online format, targeting new drivers or those seeking a refresher course.",
    img_src: "",
    github_link: null,
    demo_link: null,
    completed: false,
  },
];

export default function Projects() {
  return (
    <div>
      <ul className="mx-auto w-full max-w-screen-lg space-y-10 py-12">
        {projects.map((item) => (
          <li
            key={item.id}
            className="mx-2 h-auto overflow-hidden rounded-lg bg-gradient-to-r from-slate-500 to-slate-300 text-black shadow-lg shadow-stone-300"
          >
            <ProjectViewItem data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
