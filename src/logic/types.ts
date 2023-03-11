export interface Connection {
    name: string;
    latitude: number;
    longitude: number;
}

export interface User {
    username: string;
    firstName?: string;
    emailAddress?: string;
}
