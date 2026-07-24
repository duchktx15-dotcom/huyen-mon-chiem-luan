import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="relative py-24">

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/25 backdrop-blur-xl"></div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6">

        {/* Banner */}
        <div className="group overflow-hidden rounded-3xl shadow-2xl ring-1 ring-yellow-500/20">

          <Image
            src="/banner.png"
            alt="Vận hạn 2026"
            width={1920}
            height={700}
            priority
            className="w-full transition duration-700 group-hover:scale-105"
          />

        </div>

        {/* Nội dung */}
        <div className="mx-auto mt-16 max-w-4xl text-center">

          <span className="inline-block rounded-full bg-yellow-500/15 px-5 py-2 font-semibold text-yellow-400">
            DỊCH VỤ NỔI BẬT
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-white">
            Vận hạn & Chuyển hóa năm 2026
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-300">
            Phân tích chi tiết vận trình từng tháng, nhận diện thời cơ,
            hóa giải vận hạn và định hướng phát triển theo lá số cá nhân.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              href="/services"
              className="rounded-xl bg-yellow-500 px-10 py-4 text-lg font-bold text-black transition hover:bg-yellow-400"
            >
              Xem chi tiết dịch vụ
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border-2 border-yellow-500 px-10 py-4 text-lg font-bold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
            >
              Đăng ký ngay
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}