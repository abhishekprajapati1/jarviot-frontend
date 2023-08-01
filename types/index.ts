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

export type FileTypes = {
    createdBy: string;
    id: string;
    mimeType: string;
    name: string;
    owners: {displayName?: string; emailAddress?:string; kind?: string; me?: boolean; permissionId?: string; photoLink?: string }[];
    sharedWith: string[];
    webViewLink: string;
}