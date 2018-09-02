import { comment } from "./classexport";

export class News{
    id:number;
    title: string;
    news_content: news_contents[];
    comment: comment[];
    created_at: string;
    updated_at: string;
    img?:string[];
};
export class news_contents{
    id: number;
    idNews: number;
    content: string;
    img?: string;
    created_at: string;
    updated_at: string;
}