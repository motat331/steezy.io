export class Project {
    constructor(
        public id: number,
        public slug: string,
        public title: string,
        public content: string,
        public better_featured_image: string,
        public acf: Acf
    ) {}
}

export class Acf {
    constructor(
        public projectDescription: string,
        public projectTypeOfWork: string,
        public sliderLinks: any = null
    ) {}
}
