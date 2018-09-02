import { News } from "./news";

export class Maps{
    id: number;
    title: string;
    intro: string;
    maps_spawn: maps_spawns[];
    maps_bombsite: maps_bombsites[];
    created_at: string;
    updated_at: string;
};
export class maps_spawns{
    id: number;
    idMap: number;
    spawn: string;
    img?: string;
    created_at: string;
    updated_at: string;
};
export class maps_bombsites{
    id: number;
    idMap: number;
    bombsite: string;
    img?: string;
    created_at: string;
    updated_at: string;
};
export class comment{
    id: number;
    email: string;
    name: string;
    idNews: string;
    comment: string;
    created_at: string;
    updated_at: string;
};
export class teams{
    id: number;
    name: string;
    country: string;
    world_score: number;
    discription: string;
    player:players[];
};
export class players{
    id:number;
    idTeam: number;
    name: string;
    real_name: string; 
    age: number;
    img?: string[];
    teams:teams[];
};
export class matches{
    id: number;
    time: Date;
    status: number;
    match_team: match_teams[];
};
export class match_teams{
    id: number;
    idMatch: number;
    idTeam: number;
};
export class user{
    id: number;
    name:string;
    email: string;
    password:string;
    created_at: string;
    updated_at: string;
    remember_token: string;
    news: News[];
}

export class JSONResponse {
    boolean:boolean;
    message:string
}
