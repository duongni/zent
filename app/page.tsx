"use client";

import ExtraHeader from "@/components/ExtraHeader";
import LandPage from "@/components/LandPage";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="">{session?.user ? <ExtraHeader /> : <LandPage />}</div>
  );
}
