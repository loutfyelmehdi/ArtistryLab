'use client';
import { usePathname } from 'next/navigation';
export default function Path() {
    return usePathname();
}