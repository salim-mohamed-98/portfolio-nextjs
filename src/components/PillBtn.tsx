"use client";

import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  href: string | null;
};

const PillBtn = (props: Props) => {
  return (
    <Link
      aria-disabled={props.disabled}
      href={props.href ?? ""}
      target="_blank"
      onClick={(e) => {
        if (props.disabled) e.preventDefault();
      }}
      className={clsx(
        "group w-full rounded-full border px-3 py-1 text-center text-sm font-semibold  md:py-2 md:text-base",
        {
          "pointer-events-none border-gray-500 bg-gray-300 text-gray-500 ":
            props.disabled,
          "border-gray-800 text-black hover:bg-gray-800 hover:text-white":
            !props.disabled,
        }
      )}
    >
      {props.children}
    </Link>
  );
};

export default PillBtn;
