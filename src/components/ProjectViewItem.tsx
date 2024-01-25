import PillBtn from "@/components/PillBtn";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type Props = {
  data: {
    id: Number;
    name: string;
    description: string;
    img_src: string;
    github_link: string | null;
    demo_link: string | null;
    completed: boolean;
  };
};

export default function ProjectViewItem({ data }: Props) {
  return (
    <div className="relative flex h-full flex-col sm:flex-row">
      {!data.completed && (
        <div className=" absolute inset-0 flex items-center justify-center bg-black/70 text-3xl font-bold text-white">
          <h2>Upcoming</h2>
        </div>
      )}
      <>
        <div className="mx-auto flex h-auto basis-2/5 items-center justify-center overflow-hidden p-3">
          <Image
            className="h-auto w-auto object-contain object-top"
            src={
              data.img_src
                ? `/images/mockups/${data.img_src}`
                : "/images/mockups/mockup_default.png"
            }
            width={350}
            height={0}
            alt="mockup image"
          />
        </div>
        <div className="flex h-auto flex-1 flex-col bg-slate-100 p-1.5 text-center sm:p-3 sm:text-left">
          <div className="mb-2 flex-grow rounded-2xl p-1.5 sm:p-3">
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              {data.name}
            </h3>
            <p className="break-words ">{data.description}</p>
          </div>
          <div className="flex justify-stretch gap-3 py-3">
            <PillBtn disabled={!data.github_link} href={data.github_link}>
              Github{" "}
              <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4 align-[-1px] text-black group-hover:text-white" />
            </PillBtn>
            <PillBtn disabled={!data.demo_link} href={data.demo_link}>
              Live Demo{" "}
              <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4 align-[-1px] text-black group-hover:text-white" />
            </PillBtn>
          </div>
        </div>
      </>
    </div>
  );
}
