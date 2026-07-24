"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menu = [
    { name: "Trang chủ", href: "/" },
    { name: "Lập lá số", href: "/lap-la-so" },
    { name: "Dịch vụ", href: "/services" },
    { name: "Giới thiệu", href: "/about" },
    { name: "Liên hệ", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-yellow-600/20 bg-black/40 backdrop-blur-xl">
        <div className="flex h-20 w-full items-center justify-between px-4 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-[1fr_auto_1fr] lg:px-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline">
            <Image
              src="/logo.png"
              alt="Logo"
              width={46}
              height={46}
              priority
            />

            <div className="leading-tight">
              <h1 className="text-lg font-bold text-yellow-400">
                HUYỀN MÔN
              </h1>

              <p className="text-xs text-gray-300">
                Chiêm Luận
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center justify-center gap-4">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-2xl px-5 py-2 text-sm font-medium no-underline transition-all duration-300 ${
                  isActive(item.href)
                    ? "border border-yellow-400/30 bg-white/10 text-yellow-300 backdrop-blur-xl shadow-[0_0_25px_rgba(250,204,21,0.18)]"
                    : "border border-transparent text-white hover:border-yellow-500/20 hover:bg-white/5 hover:text-yellow-300"
                }`}
              >
                {item.name}

                {isActive(item.href) && (
                  <span className="absolute left-1/2 -bottom-2 h-[3px] w-8 -translate-x-1/2 rounded-full bg-yellow-400 shadow-[0_0_15px_#facc15]" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex justify-self-end gap-3">

            <Link
              href="/login"
              className="rounded-xl border border-yellow-500/30 px-5 py-2 text-white no-underline transition hover:border-yellow-400"
            >
              Đăng nhập
            </Link>

            <Link
              href="/lap-la-so"
              className="rounded-xl bg-yellow-500 px-5 py-2 font-semibold !text-black no-underline transition-all duration-300 hover:bg-yellow-400 visited:!text-black active:!text-black"
            >
              Lập lá số
            </Link>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Mở menu"
            className="flex h-12 w-12 items-center justify-center lg:hidden"
          >
            <Menu
              size={34}
              strokeWidth={2.5}
              className="text-yellow-400"
            />
          </button>

        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/60 transition ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[70] h-full w-72 border-l border-yellow-600/20 bg-[#111111] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex items-center justify-between border-b border-yellow-600/20 p-5">

          <h2 className="font-bold text-yellow-400">
            MENU
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-lg transition hover:bg-white/10"
          >
            <X
              size={28}
              className="text-white"
            />
          </button>

        </div>

        <nav className="flex flex-col px-3 py-3">

          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`mb-2 rounded-xl px-5 py-4 no-underline transition-all duration-300 ${
                isActive(item.href)
                  ? "border border-yellow-400/30 bg-yellow-500/10 text-yellow-300"
                  : "border border-transparent text-white hover:border-yellow-500/20 hover:bg-white/5 hover:text-yellow-300"
              }`}
            >
              {item.name}
            </Link>
          ))}

        </nav>

        <div className="space-y-3 p-5">

          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="block rounded-xl border border-yellow-500 py-3 text-center text-white no-underline transition hover:bg-yellow-500/10"
          >
            Đăng nhập
          </Link>

          <Link
            href="/lap-la-so"
            onClick={() => setOpen(false)}
            className="block rounded-xl bg-yellow-500 py-3 text-center font-semibold !text-black no-underline transition hover:bg-yellow-400 visited:!text-black"
          >
            Lập lá số
          </Link>

        </div>

      </aside>
    </>
  );
}