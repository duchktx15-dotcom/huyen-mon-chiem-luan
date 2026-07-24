"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface Order {
  id: number;
  customerName: string;
  gender: string;
  calendar: string;
  birthDate: string;
  birthTime: string;

  laso: unknown;

  amount: number;
  status: "pending" | "paid";
  createdAt: string;
}

export default function OrderDetail() {
  const { id } = useParams();
  const router = useRouter();

  const [order, setOrder] = useState<Order | null>(null);

  const [analysis, setAnalysis] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("orders");

    if (!data) return;

    const orders: Order[] = JSON.parse(data);

    const found = orders.find(
      (o) => String(o.id) === String(id)
    );

    if (found) {
      setOrder(found);
    }
  }, [id]);

  function approveOrder() {
    if (!order) return;

    const data = localStorage.getItem("orders");

    if (!data) return;

    const orders: Order[] = JSON.parse(data);

    const updated = orders.map((o) =>
      o.id === order.id
        ? {
            ...o,
            status: "paid" as const,
          }
        : o
    );

    localStorage.setItem(
      "orders",
      JSON.stringify(updated)
    );

    setOrder({
      ...order,
      status: "paid",
    });

    alert("✅ Đã duyệt đơn thành công!");
  }

  async function generateAnalysis() {
    if (!order) return;

    try {
      setLoadingAI(true);

      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          laso: order.laso,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message || "Không thể luận giải"
        );
      }

      setAnalysis(data.result);

      const local = localStorage.getItem("orders");

      if (local) {
        const orders: any[] = JSON.parse(local);

        const updated = orders.map((o) =>
          o.id === order.id
            ? {
                ...o,
                analysis: data.result,
              }
            : o
        );

        localStorage.setItem(
          "orders",
          JSON.stringify(updated)
        );
      }
    } catch (err) {
      console.error(err);
      alert("Không thể tạo luận giải AI.");
    } finally {
      setLoadingAI(false);
    }
  }

  useEffect(() => {
    if (!order) return;

    const local = localStorage.getItem("orders");

    if (!local) return;

    const orders = JSON.parse(local);

    const found = orders.find(
      (o: any) => o.id === order.id
    );

    if (found?.analysis) {
      setAnalysis(found.analysis);
    }
  }, [order]);

  if (!order) {
    return (
      <div className="p-8 text-white">
        Không tìm thấy đơn hàng.
      </div>
    );
  }

  return (
        <div className="space-y-8 p-8 text-white">

      <div>
        <h1 className="text-3xl font-bold text-yellow-400">
          Chi tiết đơn hàng
        </h1>

        <p className="mt-2 text-gray-400">
          Thông tin khách hàng và trạng thái đơn.
        </p>
      </div>

      <div className="rounded-2xl border border-yellow-500/20 bg-white/5 p-8 space-y-5">

        <div className="grid grid-cols-2 gap-6">

          <div>
            <p className="text-gray-400">Họ tên</p>
            <p className="text-lg font-semibold">
              {order.customerName}
            </p>
          </div>

          <div>
            <p className="text-gray-400">Giới tính</p>
            <p className="text-lg font-semibold">
              {order.gender}
            </p>
          </div>

          <div>
            <p className="text-gray-400">Loại lịch</p>
            <p className="text-lg font-semibold">
              {order.calendar === "solar"
                ? "Dương lịch"
                : "Âm lịch"}
            </p>
          </div>

          <div>
            <p className="text-gray-400">Ngày sinh</p>
            <p className="text-lg font-semibold">
              {order.birthDate}
            </p>
          </div>

          <div>
            <p className="text-gray-400">Giờ sinh</p>
            <p className="text-lg font-semibold">
              {order.birthTime}
            </p>
          </div>

          <div>
            <p className="text-gray-400">Số tiền</p>
            <p className="text-lg font-semibold text-yellow-400">
              {order.amount.toLocaleString("vi-VN")}đ
            </p>
          </div>

          <div>
            <p className="text-gray-400">Ngày tạo</p>
            <p className="text-lg font-semibold">
              {order.createdAt}
            </p>
          </div>

          <div>
            <p className="text-gray-400">Trạng thái</p>

            <span
              className={`inline-block rounded-full px-4 py-2 font-semibold ${
                order.status === "paid"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-yellow-500/20 text-yellow-300"
              }`}
            >
              {order.status === "paid"
                ? "Đã duyệt"
                : "Chờ duyệt"}
            </span>

          </div>

        </div>

        <div className="flex flex-wrap gap-4 pt-8">

          {order.status === "pending" && (
            <button
              onClick={approveOrder}
              className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              ✅ Duyệt đơn
            </button>
          )}

          <button
            onClick={generateAnalysis}
            disabled={loadingAI}
            className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700 disabled:opacity-60"
          >
            {loadingAI
              ? "🤖 Đang luận giải..."
              : "🤖 Tạo luận giải AI"}
          </button>

          <button
            onClick={() => router.push("/admin")}
            className="rounded-lg bg-gray-700 px-6 py-3 font-semibold text-white transition hover:bg-gray-600"
          >
            ← Quay lại Dashboard
          </button>

        </div>

      </div>

      {analysis && (
        <div className="rounded-2xl border border-purple-500/30 bg-white/5 p-8">

          <h2 className="mb-6 text-2xl font-bold text-purple-300">
            🤖 Luận giải AI
          </h2>

          <div className="whitespace-pre-wrap leading-8 text-gray-200">
            {analysis}
          </div>

        </div>
      )}

    </div>
  );
}