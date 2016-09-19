export interface IUser {
    $key?: string;    
    firstName: string;
    lastName: string;
    joinedDate: string;
    imagePath?: string;
}

export class User implements IUser {    
    firstName: string;
    lastName: string;
    joinedDate: string;
    imagePath;

    constructor(firstName: string, lastName: string, joinedDate: string, imagePath?) {
        this.firstName = firstName;
        this.lastName = lastName;        
        this.joinedDate = joinedDate;
        this.imagePath = imagePath;
    }    
}