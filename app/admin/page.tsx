"use client";

import { useEffect, useState } from "react";
import StatCard from "@/components/admin/StatCard";
import OrderTable from "@/components/admin/OrderTable";

interface Order {
  id: number;
  customerName: string;
  amount: number;
  status: "pending" | "paid";
  createdAt: string;
}

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("orders");

    if (data) {
      setOrders(JSON.parse(data));
    }
  }, []);

  const today = new Date().toLocaleDateString("vi-VN");

  const todayOrders = orders.filter((o) =>
    o.createdAt.includes(today)
  ).length;

  const pendingOrders = orders.filter(
    (o) => o.status === "pending"
  ).length;

  const paidOrders = orders.filter(
    (o) => o.status === "paid"
  ).length;

  const revenue = orders
    .filter((o) => o.status === "paid")
    .reduce((sum, o) => sum + o.amount, 0);

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold text-yellow-400">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-400">
          Chào mừng đến với HUYỀN MÔN CHIÊM LUẬN Admin.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Đơn hôm nay"
          value={String(todayOrders)}
          icon="📄"
        />

        <StatCard
          title="Chờ duyệt"
          value={String(pendingOrders)}
          icon="⏳"
        />

        <StatCard
          title="Đã duyệt"
          value={String(paidOrders)}
          icon="✅"
        />

        <StatCard
          title="Doanh thu"
          value={revenue.toLocaleString("vi-VN") + "đ"}
          icon="💰"
        />

      </div>

      <OrderTable />

    </div>
  );
}