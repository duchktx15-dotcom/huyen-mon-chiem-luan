"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: "🏠",
  },
  {
    name: "Thanh toán",
    href: "/admin/orders",
    icon: "💰",
  },
  {
    name: "Khách hàng",
    href: "/admin/customers",
    icon: "👤",
  },
  {
    name: "Doanh thu",
    href: "/admin/reports",
    icon: "📈",
  },
  {
    name: "Cài đặt",
    href: "/admin/settings",
    icon: "⚙️",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 border-r border-yellow-500/20 bg-black/40 backdrop-blur-xl">

      <div className="p-8 border-b border-yellow-500/20">

        <h1 className="text-2xl font-bold text-yellow-400">
          HUYỀN MÔN
        </h1>

        <p className="text-sm text-gray-400 mt-1">
          Admin Dashboard
        </p>

      </div>

      <nav className="mt-6 px-4">

        {menus.map((item) => {

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-4 mb-2 transition-all duration-300

              ${
                active
                  ? "bg-yellow-500 text-black font-semibold"
                  : "text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-300"
              }`}
            >
              <span className="text-xl">
                {item.icon}
              </span>

              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-0 w-full p-5 border-t border-yellow-500/20">

        <button
          className="w-full rounded-xl bg-red-600 py-3 font-semibold hover:bg-red-500 transition"
        >
          Đăng xuất
        </button>

      </div>

    </aside>
  );
}