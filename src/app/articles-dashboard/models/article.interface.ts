export interface Article {
    source: {
        id: string;
        name: string;
    }
    author: string;
    title: string;
    description: Date;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}