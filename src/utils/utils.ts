import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Fungsi sakti untuk menggabungkan class Tailwind secara dinamis
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}