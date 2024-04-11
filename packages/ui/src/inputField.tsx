"use client";

import React from "react";

interface InputProps {
  children: React.ReactNode;
  className?: string;
  type: string;
  value: string;
}

export const InputField = ({ children, className, type, value }: InputProps) => {
  return (
    <input className={className} type={type} value={value} placeholder="Type here" />
  );
};


