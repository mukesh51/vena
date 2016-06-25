export interface IProfile {
    $key?: string;    
    title: string;
    location: string;    
}

export class Profile implements IProfile {    
    title: string;
    location: string;

    constructor(title: string, location: string) {
        this.title = title;
        this.location = location;        
    }    
}