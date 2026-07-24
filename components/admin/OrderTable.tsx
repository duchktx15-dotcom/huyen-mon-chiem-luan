"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
interface Order {
  id: number;
  customerName: string;
  gender: string;
  calendar: string;
  birthDate: string;
  birthTime: string;
  amount: number;
  status: "pending" | "paid";
  createdAt: string;
}

export default function OrderTable() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("orders");

    if (data) {
      setOrders(JSON.parse(data));
    }
  }, []);

  return (
    <div className="rounded-2xl border border-yellow-500/20 bg-white/5 backdrop-blur-xl overflow-hidden">

      <div className="border-b border-yellow-500/20 p-6">
        <h2 className="text-xl font-bold text-yellow-400">
          Đơn chờ xử lý
        </h2>
      </div>

      <table className="w-full">

        <thead>

          <tr className="border-b border-yellow-500/10 text-left">

            <th className="p-5">Khách hàng</th>

            <th>Ngày lập</th>

            <th>Số tiền</th>

            <th>Trạng thái</th>

            <th></th>

          </tr>

        </thead>

        <tbody>

          {orders.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="p-6 text-center text-gray-400"
              >
                Chưa có đơn hàng nào
              </td>
            </tr>
          ) : (
            orders
              .slice()
              .reverse()
              .map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >
                  <td className="p-5 font-medium">
                    {order.customerName}
                  </td>

                  <td>{order.createdAt}</td>

                  <td>
                    {order.amount.toLocaleString("vi-VN")}đ
                  </td>

                  <td>
                    <span
                      className={`rounded-full px-3 py-1 text-sm ${
                        order.status === "paid"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-300"
                      }`}
                    >
                      {order.status === "paid"
                        ? "Đã duyệt"
                        : "Chờ duyệt"}
                    </span>
                  </td>

                  <td>
                    <Link
  href={`/admin/orders/${order.id}`}
  className="rounded-lg bg-yellow-500 px-4 py-2 text-black font-semibold hover:bg-yellow-400 inline-block"
>
  Xem
</Link>
                  </td>
                </tr>
              ))
          )}

        </tbody>

      </table>

    </div>
  );
}