"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/userStore";

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  const user = useUserStore((state) => state.user);
  const hydrated = useUserStore((state) => state.hydrated);

  useEffect(() => {
    if (!hydrated) return;

    if (!user) {
      router.replace("/login");
    }
  }, [hydrated, user, router]);

  // 🔥 جلوگیری از flicker
  if (!hydrated) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  // اگر auth نیست
  if (!user) return null;

  return children;
}