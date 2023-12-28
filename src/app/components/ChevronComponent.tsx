import { ReactNode } from "react";

export default function ChevronComponent({
  children,
  rotation,
  onClick,
}: {
  children: ReactNode;
  rotation?: string | undefined;
  next?: boolean;
  onClick?: () => void;
}) {
  return (
    <button className={`h-12 w-12 text-white ${rotation}`} onClick={onClick}>
      {children}
    </button>
  );
}
