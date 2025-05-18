import {RefObject} from "react";
import {FieldSet, Records} from "airtable";

export interface ScrollRefProps {
    refs: {
        aboutRef: RefObject<HTMLDivElement | null>;
        servicesRef: RefObject<HTMLDivElement | null>;
        careersRef: RefObject<HTMLDivElement | null>;
        partnersRef: RefObject<HTMLDivElement | null>;
        studiesRef: RefObject<HTMLDivElement | null>;
    };
}


export interface BaseJobPosting {
    title: string;
    summary: string;
    slug: string;
    locations: string;
    id: string;
}

export interface JobPostingListItem extends BaseJobPosting {
}

export interface JobFields extends FieldSet {
    "Tiêu đề": string;
    "Mô tả công việc": string;
    "Khu vực": string[];
    Slug: string;
}

export interface LocationFields extends FieldSet {
    Name: string;
}

export interface FilterFields extends FieldSet {
    Name: string;
}

export type GetRecordsResponse<T extends FieldSet> = {
    records: Records<T>;
    offset: string;
};

export interface JobPostingListItemResponse extends FieldSet {
}

export type GetJobPostingsListResponse = { offset: string; records: JobPostingListItemResponse[] };
