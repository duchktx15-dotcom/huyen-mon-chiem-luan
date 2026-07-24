import Palace from "./Palace";

interface Props {
  data: any;
}

export default function LaSoGrid({ data }: Props) {
  const p = data.Cac_cung;

  return (
   <div
  className="
    mx-auto
    w-full

    max-w-[620px]
    sm:max-w-[760px]
    md:max-w-[900px]
    lg:max-w-[980px]
    xl:max-w-[1050px]
    2xl:max-w-[1120px]

    px-[2px]
    sm:px-4
    lg:px-6

    pb-6
  "
>

      <div className="grid grid-cols-4 gap-[1px] border border-yellow-700 bg-yellow-700">

        {/* Hàng 1 */}
        <Palace palace={p[0]} />
        <Palace palace={p[1]} />
        <Palace palace={p[2]} />
        <Palace palace={p[3]} />

        {/* Hàng 2 */}
        <Palace palace={p[11]} />

        {/* Trung tâm */}
        <div
          className="
            row-span-2
            col-span-2
            flex
            flex-col
            justify-between
            bg-[#111111]
            px-2
            py-2
            sm:px-3
            sm:py-3
            lg:px-5
            lg:py-4
          "
        >
          {/* Tiêu đề */}
          <div>

            <h2
              className="
                text-center
                text-sm
                sm:text-base
                md:text-xl
                lg:text-3xl
                font-bold
                tracking-[0.15em]
                text-yellow-400
              "
            >
              LÁ SỐ TỬ VI
            </h2>

            <p
              className="
                mt-1
                text-center
                text-[9px]
                sm:text-[10px]
                md:text-xs
                lg:text-sm
                text-gray-400
              "
            >
              Huyền Môn Chiêm Luận
            </p>

          </div>

          {/* Thông tin */}
          <div
            className="
              grid
              grid-cols-2
              gap-y-1
              sm:gap-y-2
              text-[9px]
              sm:text-[10px]
              md:text-xs
              lg:text-base
            "
          >
            <span className="text-gray-400">Năm</span>
            <span className="text-right text-white">
              {data.Info?.Nam}
            </span>

            <span className="text-gray-400">Âm Dương</span>
            <span className="text-right text-white">
              {data.Info?.AmDuong}
            </span>

            <span className="text-gray-400">Cục</span>
            <span className="text-right text-yellow-400">
              {data.Info?.Cuc}
            </span>

            <span className="text-gray-400">Chủ Mệnh</span>
            <span className="text-right text-white">
              {data.Info?.ChuMenh}
            </span>

            <span className="text-gray-400">Chủ Thân</span>
            <span className="text-right text-white">
              {data.Info?.ChuThan}
            </span>
          </div>

          {/* Footer */}
          <div
            className="
              border-t
              border-yellow-700
              pt-1
              text-center
              text-[8px]
              sm:text-[9px]
              lg:text-xs
              text-gray-500
            "
          >
            © HUYỀN MÔN CHIÊM LUẬN
          </div>
        </div>

        <Palace palace={p[4]} />

        {/* Hàng 3 */}
        <Palace palace={p[10]} />
        <Palace palace={p[5]} />

        {/* Hàng 4 */}
        <Palace palace={p[9]} />
        <Palace palace={p[8]} />
        <Palace palace={p[7]} />
        <Palace palace={p[6]} />

      </div>

    </div>
  );
}