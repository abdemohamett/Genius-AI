"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("2e22ccc7-70f5-462b-8d9b-7eea1896312b");
  }, []);

  return null;
};