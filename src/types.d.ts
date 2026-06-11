export interface PageData {
    title: string;
    content: string;
}

export interface PagesList {
    [id: string]: PageData;
}