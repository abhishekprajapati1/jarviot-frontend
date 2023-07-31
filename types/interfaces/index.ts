import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import IWrapper from "./WrapperInterface";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>, IWrapper {
    onClick?: MouseEventHandler<HTMLButtonElement>;
}