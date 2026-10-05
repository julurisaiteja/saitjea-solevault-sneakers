"use client";
import { useEffect, useState } from "react";

export function DropCountdown() {
  const [left, setLeft] = useState({ h: 11, m: 42, s: 8 });
  useEffect(() => {
    const t = setInterval(() => {
      setLeft((prev) => {
        let { h, m, s } = prev;
        s -= 1;
        if (s < 0) {
          s = 59;
          m -= 1;
        }
        if (m < 0) {
          m = 59;
          h -= 1;
        }
        if (h < 0) {
          h = 23;
          m = 59;
          s = 59;
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="flex gap-3 font-mono text-sm md:text-base">
      <span className="animate-tick border-2 border-vault-fg bg-white px-3 py-2">{pad(left.h)}H</span>
      <span className="animate-tick border-2 border-vault-fg bg-white px-3 py-2">{pad(left.m)}M</span>
      <span className="animate-tick border-2 border-vault-pink bg-vault-pink px-3 py-2 text-white">{pad(left.s)}S</span>
    </div>
  );
}
