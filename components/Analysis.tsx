"use client";

import { useEffect } from "react";
import { initUcoderInsight } from "ucoder-insight";

export default function Analytics() {
  useEffect(() => {
    initUcoderInsight("pCFMs2HG6F");
  }, []);

  return null;
}
