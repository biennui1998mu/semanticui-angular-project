export class Maps{
    id: number;
    title: string;
    intro: string[];
    spawn: string[];
    bombsites: string[];
    img?: string[];
};
export class teams{
    id: number;
    name: string;
    country: string;
    world_score: number;
    // rank:
    discription: string[];
};
export class players{
    id:number;
    name: string;
    realname: string;
    age: number;
    currentteam: string;
    img?: string[];
};
export class updates{
    id:number;
    title: string;
    content: string[];
    updated_at: string;
    img?:string;
};
export class matches{
    id: number;
    team1: number;
    team2: number;
    time: Date;
    status: number;
}
