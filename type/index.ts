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