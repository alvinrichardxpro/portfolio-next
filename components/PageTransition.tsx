"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div
      className={`
        transition-all duration-700 ease-out
        ${
          visible
            ? "opacity-100 translate-y-0 scale-100 blur-0"
            : "opacity-0 translate-y-6 scale-[0.97] blur-sm"
        }
      `}
    >
      {children}
    </div>
  );
}