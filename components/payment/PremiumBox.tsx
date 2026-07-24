"use client";

import { useRouter } from "next/navigation";

export default function PremiumBox() {
  const router = useRouter();

  return (
    <section className="mt-10 rounded-2xl border border-yellow-600 bg-gradient-to-b from-[#1d1a10] to-black p-8 text-center shadow-2xl">

      <h2 className="text-3xl font-bold text-yellow-400">
        🔒 MỞ KHÓA LUẬN GIẢI CHUYÊN SÂU
      </h2>

      <p className="mt-5 text-gray-300 leading-8">
        Lá số miễn phí chỉ hiển thị bố cục.
        <br />
        Mở khóa để xem toàn bộ luận giải AI chuyên sâu về:
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 text-left text-gray-200 md:grid-cols-3">

        <div>✔ Công danh</div>
        <div>✔ Tài lộc</div>
        <div>✔ Hôn nhân</div>

        <div>✔ Sức khỏe</div>
        <div>✔ Đại vận</div>
        <div>✔ Lưu niên</div>

      </div>

      <div className="mt-8 text-5xl font-extrabold text-yellow-400">
        399.000đ
      </div>

      <button
        onClick={() => router.push("/payment")}
        className="mt-8 rounded-xl bg-yellow-500 px-10 py-4 text-lg font-bold text-black transition hover:bg-yellow-400"
      >
        NHẬN LUẬN GIẢI CHI TIẾT
      </button>

      <div className="my-6 text-gray-500">
        ───── HOẶC ─────
      </div>

      <a
        href="https://zalo.me/0818108088"
        target="_blank"
        className="inline-block rounded-xl bg-green-600 px-10 py-4 text-lg font-bold transition hover:bg-green-500"
      >
        ĐẶT LỊCH TƯ VẤN TRỰC TIẾP
      </a>

    </section>
  );
}