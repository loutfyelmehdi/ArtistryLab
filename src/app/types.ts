import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface IItem {
  title: string;
  para?: string;
  bulletPts?: string[];
}

export interface IPosters {
  path: string | StaticImport;
  description: string;
  behance: string;
}
