import { Article } from "./article.interface";

export interface Articles {
    status?: string;
    totalResults?: number;
    articles: Article[]
} 