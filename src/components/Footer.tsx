import Link from "next/link";
import Image from "next/image";
import links from "@/lib/data/nav_links.json";

export default function Footer() {
  return (
    <footer className="bg-slate-100 p-4 md:p-8 lg:p-10 ">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link href="/" className="-m-1.5 p-1.5 mx-auto inline-block">
          <span className="sr-only">Salim logo</span>
          <Image
            className="h-8 w-auto"
            src="/images/logo.svg"
            alt="logo image"
            width={0}
            height={0}
          />
        </Link>
        <p className="my-6 text-gray-500 ">
          Crafting code and conquering bugs, one coffee cup at a time. Developer
          journey ongoing since 2016.
        </p>
        <ul className="mb-6 flex flex-wrap items-center justify-center text-gray-900">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="mr-4 hover:underline md:mr-6 ">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <span className="text-sm text-gray-500 sm:text-center">
          © 2024{" "}
          <Link href="/" className="underline">
            salim.dev
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
