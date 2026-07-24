"use client";

import { useState } from "react";
import Image from "next/image";

export default function PaymentPage() {
  const [paid, setPaid] = useState(false);

  const message = `Xin chào.

Tôi đã chuyển khoản gói luận giải AI.

Họ tên:

Ngày sinh:

Giờ sinh:

Giới tính:

(Tôi gửi kèm ảnh chuyển khoản.)`;

  const copyMessage = async () => {
    await navigator.clipboard.writeText(message);
    alert("Đã sao chép.");
  };

  return (
    <main className="min-h-screen bg-[#111] text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl rounded-3xl border border-yellow-500 bg-[#181818] p-8">

        <h1 className="text-center text-3xl font-bold text-yellow-400">
          🔒 MỞ KHÓA LUẬN GIẢI AI
        </h1>

        <p className="mt-4 text-center">
          <span className="text-2xl font-bold text-yellow-400">
            399.000đ
          </span>
        </p>

        <div className="mt-8 flex justify-center">
          <Image
            src="/qr-vib.jpg"
            alt="QR"
            width={320}
            height={320}
            priority
            className="rounded-xl bg-white p-2"
          />
        </div>

        <div className="mt-8 space-y-2 rounded-xl bg-neutral-900 p-5">

          <div className="flex justify-between">
            <span>Ngân hàng</span>
            <span>VIB</span>
          </div>

          <div className="flex justify-between">
            <span>Chủ tài khoản</span>
            <span>Nguyễn Hoàng Đức</span>
          </div>

          <div className="flex justify-between">
            <span>Số tài khoản</span>
            <span className="font-bold text-yellow-400">
              787090762
            </span>
          </div>

        </div>

        {!paid ? (
          <button
            onClick={() => setPaid(true)}
            className="mt-8 w-full rounded-xl bg-yellow-500 py-4 font-bold text-black"
          >
            Tôi đã chuyển khoản
          </button>
        ) : (
          <div className="mt-8 rounded-xl border border-green-600 bg-green-900/20 p-6">

            <h2 className="text-xl font-bold text-green-400">
              ✅ Cảm ơn bạn!
            </h2>

            <p className="mt-4">
              Vui lòng gửi Zalo:
            </p>

            <ul className="mt-4 space-y-2">
              <li>✔ Ảnh chuyển khoản</li>
              <li>✔ Họ tên</li>
              <li>✔ Ngày sinh</li>
              <li>✔ Giờ sinh</li>
              <li>✔ Giới tính</li>
            </ul>

            <button
              onClick={copyMessage}
              className="mt-6 w-full rounded-xl bg-neutral-700 py-3"
            >
              📋 Sao chép nội dung
            </button>

            <a
              href="https://zalo.me/0818108088"
              target="_blank"
              rel="noreferrer"
              className="mt-4 block rounded-xl bg-blue-600 py-4 text-center font-bold"
            >
              💬 Liên hệ Zalo
            </a>

          </div>
        )}

      </div>
    </main>
  );
}