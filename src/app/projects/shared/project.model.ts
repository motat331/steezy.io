export class Project {
    constructor(
        public id: number, 
        public slug: string, 
        public name: string, 
        public description: string, 
        public typeOfWork: string,
        public bodyText: string, 
        public imageUrl: string 
    ) {
        
    }
}