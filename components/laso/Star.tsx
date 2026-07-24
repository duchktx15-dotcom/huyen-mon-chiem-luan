"use client";

import { useState } from "react";
import { StarDatabase } from "@/data/stars";
import StarModal from "./StarModal";

interface StarProps {
  name: string;
  type: "major" | "good" | "bad";
  status?: string;
}

export default function Star({
  name,
  type,
  status,
}: StarProps) {
  const [open, setOpen] = useState(false);

  const star =
    StarDatabase[name as keyof typeof StarDatabase];

  let color = "";

  switch (type) {
    case "major":
      color = "text-yellow-300 font-semibold";
      break;

    case "good":
      color = "text-emerald-300";
      break;

    case "bad":
      color = "text-red-300";
      break;
  }

  return (
    <>
      <div
        onClick={() => {
          if (star) {
            setOpen(true);
          } else {
            alert(`Chưa có dữ liệu của sao "${name}"`);
          }
        }}
        className="
          flex
          items-center
          justify-between

          cursor-pointer

          border-b
          border-yellow-900/20

          py-[1px]

          leading-tight

          transition-all
          duration-200

          hover:bg-yellow-500/10
        "
      >
        {/* Tên sao */}
        <span
          className={`
            ${color}
            truncate
            whitespace-nowrap

            text-[7px]
            sm:text-[8px]
            md:text-[9px]
            lg:text-[11px]
            xl:text-[12px]
          `}
        >
          {name}
        </span>

        {/* Trạng thái */}
        {status && (
          <span
            className="
              ml-1
              flex-shrink-0

              text-yellow-500

              text-[5px]
              sm:text-[6px]
              md:text-[7px]
              lg:text-[9px]
            "
          >
            ({status})
          </span>
        )}
      </div>

      <StarModal
        open={open}
        onClose={() => setOpen(false)}
        star={star}
      />
    </>
  );
}