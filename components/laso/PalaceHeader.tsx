interface PalaceHeaderProps {
  palace: any;
}

export default function PalaceHeader({ palace }: PalaceHeaderProps) {
  return (
    <div className="relative border-b border-yellow-700/70 pb-[2px]">

      {/* Tên cung */}
      <div
        className="
          text-center

          font-bold

          uppercase

          text-[8px]
          sm:text-[9px]
          md:text-[10px]
          lg:text-[13px]
          xl:text-[15px]

          tracking-[0.08em]
          lg:tracking-[0.12em]

          leading-none

          text-yellow-300

          select-none
        "
      >
        {palace.Name}
      </div>

      {/* THÂN */}
      {palace.Than === 1 && (
        <div
          className="
            absolute

            right-0.5
            top-0.5

            border
            border-red-500

            bg-red-900/30

            px-[2px]
            py-0

            text-[5px]
            sm:text-[6px]
            md:text-[7px]
            lg:text-[8px]

            font-bold

            leading-none

            text-red-300
          "
        >
          THÂN
        </div>
      )}

    </div>
  );
}