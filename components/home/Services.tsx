import {
  Stars,
  Compass,
  CalendarClock,
  Landmark,
  Sparkles,
  ScrollText,
} from "lucide-react";

export default function Services() {
  const items = [
    {
      title: "Luận Tử Vi",
      icon: <Stars size={34} />,
    },
    {
      title: "Mai Hoa Dịch Số",
      icon: <Sparkles size={34} />,
    },
    {
      title: "Kỳ Môn Độn Giáp",
      icon: <Compass size={34} />,
    },
    {
      title: "Bát Tự",
      icon: <ScrollText size={34} />,
    },
    {
      title: "Phong Thủy",
      icon: <Landmark size={34} />,
    },
    {
      title: "Ngày Giờ Cát Hung",
      icon: <CalendarClock size={34} />,
    },
  ];

  return (
    <section className="relative overflow-hidden py-28">

      {/* Background kính mờ */}
      <div className="absolute inset-0 bg-black/25 backdrop-blur-xl"></div>

      {/* Glow */}
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[120px]"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">

          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm font-semibold tracking-widest text-yellow-400">
            DỊCH VỤ
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Khám phá các bộ môn
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Hệ thống luận giải huyền học được xây dựng hiện đại,
            trực quan và chuyên sâu.
          </p>

        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {items.map((item) => (

            <div
              key={item.title}
              className="
              group
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-white/5
              p-10
              backdrop-blur-2xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-yellow-400/40
              hover:bg-white/10
              hover:shadow-[0_15px_60px_rgba(212,175,55,.18)]
              "
            >

              {/* ánh sáng góc */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl transition duration-500 group-hover:bg-yellow-500/20"></div>

              {/* Icon */}
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 transition group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-8 text-gray-400">
                Luận giải chuyên sâu, phân tích đầy đủ và đưa ra định
                hướng phù hợp dựa trên thông tin cá nhân.
              </p>

              {/* Button */}
              <button
                className="
                mt-8
                rounded-xl
                border
                border-yellow-500/20
                bg-yellow-500/10
                px-6
                py-3
                font-semibold
                text-yellow-400
                transition
                hover:bg-yellow-500
                hover:text-black
                "
              >
                Xem chi tiết →
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}