import { ReactNode } from "react";

export type SpinnerType = {
    width: number;
    height: number;
    color?: string;
}

export type CardType = {
    icon: ReactNode;
    value: number;
    heading: string;
    para: string;
    color: string;
}