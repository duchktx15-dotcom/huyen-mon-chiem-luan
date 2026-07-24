"use client";

import { useEffect, useState } from "react";

export default function LaSoLoading() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-overlayFade">

      <div className="flex flex-col items-center">

        <img
          src="/bagua.png"
          alt="Bát Quái"
          className="h-32 w-32 animate-bagua"
        />

        <p className="mt-8 text-xl tracking-[0.25em] text-yellow-300">
          Đang an lá số{dots}
        </p>

      </div>

    </div>
  );
}