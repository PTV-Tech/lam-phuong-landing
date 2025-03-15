import { RefObject } from "react";

export interface ScrollRefProps {
    refs: {
        aboutRef: RefObject<HTMLDivElement | null>;
        servicesRef: RefObject<HTMLDivElement | null>;
        careersRef: RefObject<HTMLDivElement | null>;
        partnersRef: RefObject<HTMLDivElement | null>;
        studiesRef: RefObject<HTMLDivElement | null>;
    };
}

export interface CareerListItem {
    title: string;
    summary: string;
    slug: string;
    location: string;
}