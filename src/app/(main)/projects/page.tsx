import ProjectViewItem from "@/components/ProjectViewItem";
import projects from "@/lib/data/projects.json";

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
