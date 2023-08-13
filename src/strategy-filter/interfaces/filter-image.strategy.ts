export interface NewImage {
    width: string;
    height: string;
    name: string;
    color: string;
}

export interface FilterStrategy extends NewImage {
   
    createNewImage(width: string ,height: string ,name:string ,color:string): NewImage ;
}