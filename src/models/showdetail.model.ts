export interface ShowDetail {
    id: number;
    name: string;
    description: string;
    start_date: string;
    end_date: string | null;
    country: string;
    status: string;
    runtime: number;
    network: string;
    image_path: string;
    image_thumbnail_path: string;
    rating: string;
    genres: string[];
    pictures: string[];
}
