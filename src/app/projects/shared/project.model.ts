// export class Project {
//     constructor(
//         public id: number,
//         public slug: string,
//         public title: Title,
//         public content: string,
//         public better_featured_image: string,
//         public acf: Acf
//     ) {}
// }
// export class Title {
//     constructor(public rendered: string) {}
// }
// export class Acf {
//     constructor(
//         public projectDescription: string,
//         public projectTypeOfWork: string,
//         public sliderLinks: any = null,
//         public featured: any,
//         public col_1_text: any,
//         public col_1_image: any
//     ) {}
// }

export interface Project {
    id: number;
    slug: string;
    title: string;
    content: string;
    better_featured_image: string;
    projectDescription: string;
    projectTypeOfWork: string;
    sliderLinks: any;
    featured: any;
    col_1_title: any;
    col_1_text: any;
    col_1_image: any;
    col_2_title: any;
    col_2_text: any;
    col_2_image: any;
    col_3_title: any;
    col_3_text: any;
    col_3_image: any;
}
