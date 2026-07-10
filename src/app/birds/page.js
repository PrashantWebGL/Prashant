"use client";

import dynamic from "next/dynamic";

const BirdsCanvas = dynamic(() => import("../components/birds-canvas"), {
  ssr: false,
});

export default function BirdsPage() {
  return <BirdsCanvas />;
}
