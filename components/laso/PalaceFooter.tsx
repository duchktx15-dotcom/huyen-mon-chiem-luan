interface PalaceFooterProps {
  palace: any;
}

export default function PalaceFooter({
  palace,
}: PalaceFooterProps) {
  return (
    <div
      className="
        flex
        items-center
        justify-between

        leading-none

        text-[5px]
        sm:text-[6px]
        md:text-[7px]
        lg:text-[9px]
        xl:text-[10px]
      "
    >
      {/* Tràng sinh */}
      <span
        className="
          truncate
          text-gray-400
        "
      >
        {palace.TrangSinh}
      </span>

      {/* Tiểu hạn / Can Chi */}
      <span
        className="
          truncate
          font-semibold
          text-cyan-300
        "
      >
        {palace.TieuHan}
      </span>
    </div>
  );
}