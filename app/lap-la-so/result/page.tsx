"use client";

import PremiumBox from "@/components/payment/PremiumBox";
import { useEffect, useState } from "react";
import { createLaSo } from "@/lib/engine";
import LaSoGrid from "@/components/laso/LaSoGrid";

export default function ResultPage() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const data = sessionStorage.getItem("laso");

    if (!data) {
      setLoading(false);
      return;
    }

    try {
      const profile = JSON.parse(data);
      const laso = createLaSo(profile);

      console.log(laso);

      setResult(laso);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center text-white">
        Đang lập lá số...
      </main>
    );
  }

  if (!result) {
    return (
      <main className="flex min-h-screen items-center justify-center text-red-500">
        Không tạo được lá số.
      </main>
    );
  }

  return (
    <main className="min-h-screen p-6 text-white">

      <div className="mx-auto max-w-7xl">

        {/* ================= THÔNG TIN LÁ SỐ ================= */}

        <div
          className="
            mb-8

            rounded-2xl

            border
            border-yellow-500/30

            bg-black/25

            backdrop-blur-xl

            shadow-[0_10px_40px_rgba(0,0,0,.25)]

            p-6

            transition-all
            duration-300
          "
        >
          <h1
            className="
              mb-6

              text-4xl

              font-bold

              tracking-wide

              text-yellow-400
            "
          >
            LÁ SỐ TỬ VI
          </h1>

          <div className="grid grid-cols-2 gap-y-5 text-sm md:grid-cols-3">

            <div>
              <span className="font-semibold text-yellow-400">
                Âm Dương:
              </span>{" "}
              {result.Info.AmDuong}
            </div>

            <div>
              <span className="font-semibold text-yellow-400">
                Năm:
              </span>{" "}
              {result.Info.Nam}
            </div>

            <div>
              <span className="font-semibold text-yellow-400">
                Cục:
              </span>{" "}
              {result.Info.Cuc}
            </div>

            <div>
              <span className="font-semibold text-yellow-400">
                Chủ Mệnh:
              </span>{" "}
              {result.Info.ChuMenh}
            </div>

            <div>
              <span className="font-semibold text-yellow-400">
                Chủ Thân:
              </span>{" "}
              {result.Info.ChuThan}
            </div>

            <div>
              <span className="font-semibold text-yellow-400">
                Thân cư:
              </span>{" "}
              {result.Info.ThanCu}
            </div>

          </div>
        </div>

        {/* ================= LÁ SỐ ================= */}

        <LaSoGrid data={result} />

        {/* ================= PREMIUM ================= */}

        <div className="mt-8">
          <PremiumBox />
        </div>

      </div>

    </main>
  );
}