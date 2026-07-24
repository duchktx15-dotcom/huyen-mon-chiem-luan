import PalaceHeader from "./PalaceHeader";
import PalaceBody from "./PalaceBody";
import PalaceFooter from "./PalaceFooter";

interface PalaceProps {
  palace: any;
}

export default function Palace({ palace }: PalaceProps) {
  return (
    <div
      className="
        flex
        flex-col
        overflow-hidden

        bg-[#0d0d0d]

        border
        border-yellow-700

        h-[145px]
        sm:h-[170px]
        md:h-[195px]
        lg:h-[225px]
        xl:h-[245px]

        transition-all
        duration-300
      "
    >
      {/* Header */}
      <div
        className="
          border-b
          border-yellow-700

          px-1
          py-[2px]

          sm:px-1.5
          sm:py-1

          lg:px-2
          lg:py-1
        "
      >
        <PalaceHeader palace={palace} />
      </div>

      {/* Body */}
      <div
  className="
    flex-1
    overflow-hidden

    px-[2px]
    py-[1px]

    text-[7px]
    sm:text-[9px]
    md:text-[11px]
    lg:text-[13px]

    lg:px-2
    lg:py-2
  "
>
        <PalaceBody palace={palace} />
      </div>

      {/* Footer */}
      <div
        className="
          border-t
          border-yellow-700

          px-1
          py-[2px]

          sm:px-1.5
          sm:py-1

          lg:px-2
          lg:py-1
        "
      >
        <PalaceFooter palace={palace} />
      </div>
    </div>
  );
}