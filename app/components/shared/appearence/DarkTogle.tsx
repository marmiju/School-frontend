"use client";
import React, { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const getSystemtheme = () => {
  if (typeof window != "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return false;
};

export const DarkTogle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const systemdark = getSystemtheme();
    setIsDark(systemdark);
    if (systemdark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handletheme = () => {
    setIsDark((prev) => {
      const newthem = !prev;
      if (newthem) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newthem;
    });
  };

  return (
    <div className="text-2xl text-text">
      <button
        onClick={handletheme}
        className=" border border-secondary shadow p-1 rounded-full hover:cursor-pointer "
      >
        {isDark ? <BiSun /> : <BiMoon />}
      </button>
    </div>
  );
};
