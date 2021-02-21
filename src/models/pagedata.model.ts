import {Show} from "@/models/show.model";

export interface Pagedata {
    page: number;
    pages: number;
    total: string;
    tv_shows: Show[];
}
