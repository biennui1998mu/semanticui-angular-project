export class Maps{
    id: number;
    title: string;
    intro: string[];
    spawn: string[];
    bombsites: string[];
    img?: string[];
};
export class teams{
    id:number;
    name: string;
    
    // rank:
};
export class players{
    id:number;
    name: string;
    realname: string;
    age: number;
    currentteam: string;
};
export class updates{
    id:number;
    title: string;
    content: string[];
    updated_at: string;
    img?:string;
}