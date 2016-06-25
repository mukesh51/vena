export interface IUser {
    $key?: string;    
    firstName: string;
    lastName: string;
    joinedDate: string;
}

export class User implements IUser {    
    firstName: string;
    lastName: string;
    joinedDate: string;

    constructor(firstName: string, lastName: string, joinedDate: string) {
        this.firstName = firstName;
        this.lastName = lastName;        
        this.joinedDate = joinedDate;
    }    
}