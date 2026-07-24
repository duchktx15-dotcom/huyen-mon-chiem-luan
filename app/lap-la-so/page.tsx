"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LaSoLoading from "@/components/loading/LaSoLoading";
import { createLaSo } from "@/lib/engine";

export default function LaSoPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    gender: "nam" as "nam" | "nu",
    calendar: "solar" as "solar" | "lunar",
    birthDate: "",
    birthTime: "",
  });

  const handleSubmit = async () => {
    if (!form.fullName.trim()) {
      alert("Vui lòng nhập họ và tên");
      return;
    }

    if (!form.birthDate) {
      alert("Vui lòng chọn ngày sinh");
      return;
    }

    if (!form.birthTime) {
      alert("Vui lòng chọn giờ sinh");
      return;
    }

    setLoading(true);

    // Lưu form
    sessionStorage.setItem("laso", JSON.stringify(form));
    localStorage.setItem("laso", JSON.stringify(form));

    // Tạo lá số bằng tuvi-neo
    const laso = createLaSo(form);

    // Lưu đơn hàng
    const orders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    orders.push({
      id: Date.now(),

      customerName: form.fullName,
      gender: form.gender,
      calendar: form.calendar,
      birthDate: form.birthDate,
      birthTime: form.birthTime,

      // Lưu toàn bộ lá số
      laso,

      amount: 399000,
      status: "pending",
      createdAt: new Date().toLocaleString("vi-VN"),
    });

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

    // Loading
    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    router.push("/lap-la-so/result");
  };

  return (
    <>
      <main className="min-h-screen flex items-center justify-center px-6 py-16 text-white">
        <div className="w-full max-w-2xl rounded-2xl border border-yellow-600/40 bg-black/50 p-8 shadow-2xl backdrop-blur-md">

          <h1 className="mb-2 text-center text-4xl font-bold text-yellow-400">
            LẬP LÁ SỐ TỬ VI
          </h1>

          <p className="mb-10 text-center text-gray-400">
            Vui lòng nhập chính xác thông tin để lập lá số.
          </p>

          <div className="space-y-6">

            <div>
              <label className="mb-2 block">
                Họ và tên
              </label>

              <input
                type="text"
                value={form.fullName}
                onChange={(e) =>
                  setForm({
                    ...form,
                    fullName: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-neutral-700 bg-neutral-900 p-3 outline-none focus:border-yellow-500"
              />
            </div>

            <div>
              <label className="mb-2 block">
                Giới tính
              </label>

              <div className="flex gap-6">

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={form.gender === "nam"}
                    onChange={() =>
                      setForm({
                        ...form,
                        gender: "nam",
                      })
                    }
                  />
                  Nam
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={form.gender === "nu"}
                    onChange={() =>
                      setForm({
                        ...form,
                        gender: "nu",
                      })
                    }
                  />
                  Nữ
                </label>

              </div>
            </div>

            <div>
              <label className="mb-2 block">
                Loại lịch
              </label>

              <div className="flex gap-6">

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={form.calendar === "solar"}
                    onChange={() =>
                      setForm({
                        ...form,
                        calendar: "solar",
                      })
                    }
                  />
                  Dương lịch
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={form.calendar === "lunar"}
                    onChange={() =>
                      setForm({
                        ...form,
                        calendar: "lunar",
                      })
                    }
                  />
                  Âm lịch
                </label>

              </div>
            </div>

            <div>
              <label className="mb-2 block">
                Ngày sinh
              </label>

              <input
                type="date"
                value={form.birthDate}
                onChange={(e) =>
                  setForm({
                    ...form,
                    birthDate: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-neutral-700 bg-neutral-900 p-3 outline-none focus:border-yellow-500"
              />
            </div>

            <div>
              <label className="mb-2 block">
                Giờ sinh
              </label>

              <select
                value={form.birthTime}
                onChange={(e) =>
                  setForm({
                    ...form,
                    birthTime: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-neutral-700 bg-neutral-900 p-3 outline-none focus:border-yellow-500"
              >
                <option value="">
                  -- Chọn giờ sinh --
                </option>

                {Array.from(
                  { length: 24 },
                  (_, i) => {
                    const hour = String(i).padStart(
                      2,
                      "0"
                    );

                    return (
                      <option
                        key={hour}
                        value={`${hour}:00`}
                      >
                        {hour}:00
                      </option>
                    );
                  }
                )}
              </select>

              <p className="mt-2 text-sm text-gray-400">
                Chọn theo giờ 24h
                (Ví dụ: 08:00, 15:00,
                21:00...)
              </p>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-6 w-full rounded-xl bg-yellow-500 py-4 font-bold text-black transition hover:bg-yellow-400 disabled:opacity-60"
            >
              {loading
                ? "ĐANG AN LÁ SỐ..."
                : "LẬP LÁ SỐ"}
            </button>

          </div>
        </div>
      </main>

      {loading && <LaSoLoading />}
    </>
  );
}