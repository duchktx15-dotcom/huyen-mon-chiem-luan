export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center pt-24 pb-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

          {/* Logo */}
          <div className="mb-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10 text-4xl shadow-[0_0_40px_rgba(212,175,55,.2)] md:h-24 md:w-24 md:text-5xl">
              ☯
            </div>
          </div>

          {/* Tiêu đề */}
          <h1 className="space-y-2 font-black leading-none">
            <span className="block text-5xl tracking-wide text-yellow-400 md:text-7xl lg:text-8xl">
              HUYỀN MÔN
            </span>

            <span className="block text-5xl tracking-wide text-white md:text-7xl lg:text-8xl">
              CHIÊM LUẬN
            </span>
          </h1>

          {/* Mô tả */}
          <p className="mt-10 max-w-3xl text-lg leading-9 text-gray-300">
            Nền tảng lập lá số Tử Vi, Bát Tự, Kỳ Môn Độn Giáp và các bộ môn
            huyền học theo phong cách hiện đại, trực quan và dễ sử dụng.
          </p>

          {/* Button */}
          <div className="mt-14 mb-20 flex flex-col gap-5 sm:flex-row">

            <a
              href="/lap-la-so"
              className="btn-primary px-10 py-4 text-lg"
            >
              Lập lá số ngay
            </a>

            <a
              href="/about"
              className="btn-outline px-10 py-4 text-lg"
            >
              Tìm hiểu thêm
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}