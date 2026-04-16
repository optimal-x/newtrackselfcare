import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export type ContentBoxesProps = {
	icon: string;
	title: string;
	content: string;
};

export const SETTINGS = {
	fontFamily: {
		work: ['"Work Sans"', "sans-serif"],
		playfair: ['"Playfair"', "serif"],
	},
	colors: {
		// yellows
		bananaMania: "247 238 177",
		arylideYellow: "233 208 107",
		sunglow: "248 208 40",
		spanishBistre: "140 116 44",

		// reds
		almond: "237 224 20",
		lightSalmon: "248 153 12",
		congoPink: "243 136 12",
		middleRedPurple: "159 79 6",

		// greens
		lightSilver: "213 224 211",
		laurelGreen: "167 191 164",
		ebony: "83 100 64",
		pineTree: "42 56 30",

		// neutrals
		black: "0 0 0",
		darkLava: "72 54 52",
		khaki: "202 180 158",
		cultured: "245 244 241",
	},
};

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const rgba = (color: string, alpha: number): string =>
	`rgb(${color} / ${alpha})`;

	import { useEffect, useState } from "react";





	
export function useIsVisible(ref: any) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting)
      } 
      );
      
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
  }
