export class ProjectService {
    projectsScope = '5';

    projects = [
        {
            id: 1,
            name: 'Tattoo Artists Website and Portfolio',
            slug: 'chase-fiedler-tattoo',
            description: 'Website Redesign & Development',
            typeOfWork: 'Type',
            bodyText: "<p>Chase Fiedler is a tattoo artist based out of Southern California. He specializes in Realism, Illustrative Realism, Blackwork, Floral, Minimalism, and Micro Detail tattoos.</p><p>When Chase came to us, he had no website and no online presence aside from an Instagram page he personally managed. His biggest problem was that Instagram was not a reliable way to communicate with clients and book appointments.</p><p>His biggest goal was to allow clients to book appointments through his website. In doing so, his appointments would become more organized and easy to manage.</p><p>Chase is very passionate about the custom artwork that he creates. He doesn’t just tattoo, he creates the artwork from the rough draft of the drawing, to the final placement of the tattoo.</p><p>Chase is an artist, so we incorporated his artistic style into the bones of the website. His art is featured throughout his website, and even his hand drawn geometric patterns line the background of the website.</p><p>Aside from aesthetic, we incorporated the exact functionality that Chase needed with a website. Including a hard to miss “BOOK APPOINTMENT” button to make it real easy for him to schedule with his future clients.</p><p>Chase was ecstatic about his website. No longer having to depend on Instagram DMs to manage boat loads of clients.</p>",
            imageUrl: 'https://steezysite.com/wp-content/uploads/2020/01/ChaseFiedler-_-v3.jpg'
        },
        {
            id: 2,
            name: 'The Barn 808',
            slug: 'the-barn-808',
            description: 'A platform to share products found across the world',
            typeOfWork: 'Website Redesign & Development',
            bodyText: "<p>The Barn 808 is a funky, eclectic boutique nestled in the heart of Hanalei.</p><p>Petra and Donavon Frankenreiter, the team behind The Barn 808, are an incredibly creative team, and we were excited to partner up with them.</p><p>They needed us to update their website aesthetically, and, under the hood.</p><p>We first started with the foundation of the website. Updating the WordPress core they ran, plus all the software they ran. Once that was done, we squashed out all the bugs that come from an overdue update.</p><p>Then we started with the aesthetics. We started by making the website responsive so that it ran perfect on any device, mobile or desktop. We upgraded their styling, fonts, removed unnecessary elements, and slimmed down the website considerably.</p><p>We also added a landing page for a musical record that Donavon was a promoting.</p><p>With their website not sparkling and shining, we backed up the website.</p><p>The Barn 808 is looking cleaner than ever!</p>",
            imageUrl: 'assets/images/portfolio-images/TheBarn808.jpg'
        },
        {
            id: 3,
            name: 'InfiniteILA',
            slug: 'infiniteila',
            description: 'A community of positive, driven, like-minded individuals',
            typeOfWork: 'Website Redesign & Development',
            bodyText: '<p>InfiniteILA believes that you should have access to as much support and as many resources as possible to create the life you desire. They believe that you get it from a support system of positive, driven, like-minded individuals. So, they provide a space where your infinite growth potential is nurtured by individuals who want to see you succeed just as much as they want to succeed themselves.</p><p>InfiniteILA truly wants to help the underdogs, the start ups, and the positive driven people out there. We were so excited to work on their website!</p><p>They wanted a website that their users could interact with, learn essential business skills from, and purchase their clothing line. They also wanted certain parts of the website sectioned off for premium members.</p><p>We listened to them, brainstormed ideas, and came up with the best solution for all of their needs.</p><p>We set them up with all the features they asked for, including a user profile management system with private messaging hooked up to it.</p><p>InfiniteILA website is packed with features and tools, and still manages to look clean and tidy.</p>',
            imageUrl: 'assets/images/portfolio-images/InfiniteILA.jpg'
        },
        {
            id: 4,
            name: 'Chicago Swim School',
            slug: 'chicago-swim-school',
            description: 'Helping kids in and out of the pool',
            typeOfWork: 'Website Redesign',
            bodyText: 'Chicago Swim School teaches kids how to be safe around all types of water.</p><p>Their website was very old school when we got it. A basic theme was used to design it that had since gone out of date.</p><p>They wanted us to modernize it, make it responsive, and take out the glitches they were experiencing on mobile devices. They also needed the website to appeal to a younger audience as their swim school was aimed towards kids.</p><p>The school was coming up on the beginning of season, so we had to get the job done in a time crunch.</p><p>We started with the foundation of the website, updating the software core, all the plugins, and all the files that come with it. Then we started on the theme, removing the old one and designing from the bottom up, a completely custom look for Chicago Swim School. The new design we put in is so fun! Blue and water everywhere. Photos of children splashing and playing in the fun water.</p><p>We turned their website over so quick, they could hardly believe it. With perfect time for their marketing campaign for the new season.</p><p>They were very thankful at our quick and beautiful work.',
            imageUrl: 'assets/images/portfolio-images/ChicagoSwimSchool.jpg'
        },
        {
            id: 5,
            name: 'Sagi Kalev',
            slug: 'sage-kalev',
            description: 'Sagi is two-times Mr. Israel, an IFBB Pro and a fitness hall of famer',
            typeOfWork: 'Website Development & Maintenance',
            bodyText: '<p>Kalev is a former two-time “Mr. Israel,” he is one of the world’s leading fitness models, and bodybuilding title-holders. He has appeared in numerous fitness and bodybuilding photo shoots for Muscle & Fitness, Iron Man, Reps, Men’s Workout and other Hardcore Muscle magazines. He is a Certified Pro Personal Trainer with PROPTA, the world’s leading personal training and nutrition agency. Kalev is also a Clinical Nutritionist and functional medicine expert. Kalev is the creator of Body Beast, Beachbody’s popular in-home training fitness program for both men and women. He resides with his wife Barbie Kalev in Dallas, Texas.</p><p>We helped Sagis team redesign and modernize his website. We also the site 60% faster than before we got there.</p>',
            imageUrl: 'assets/images/portfolio-images/SagiKalev.jpg'
        },
        {
            id: 6,
            name: 'Medical Fitness Network',
            slug: 'medical-fitness-network',
            description: 'Merging Fitness with Medical',
            typeOfWork: 'Website Development',
            bodyText: '<p>The Medical Fitness Network is both a professional membership organization for fitness and allied healthcare professionals, gyms, studios & integrative wellness centers, and students and a free online resource directory for the community to locate fitness and allied healthcare professionals with a background in prevention, treatment, and rehabilitation in working with those with chronic disease or medical conditions.</p><p>When they came to us, their website was unprofessional, broken in parts, and very slow. We listened to their requests and transformed the entire look of the site, redesigning it from scratch and building a beautiful and sleek interface.</p>',
            imageUrl: 'assets/images/portfolio-images/MedicalFitnessNetwork.jpg'
        },
        {
            id: 7,
            name: '3Bepb',
            slug: '3bepb-clothing',
            description: 'Clothing and Lifestyle Brand Page',
            typeOfWork: 'Website Design & Development',
            bodyText: '<p>3Bepb (phonetically “ZVER”) is a lifestyle and clothing brand. 3Bepb means Beast in Russian. When we started the project, there was no website. We built it from the ground up with a complete custom look.</p>',
            imageUrl: 'assets/images/portfolio-images/3Bepb.jpg'
        },
        {
            id: 8,
            name: 'Quality Swimming',
            slug: 'quality-swimming',
            description: 'Teaching water safety and love for water',
            typeOfWork: 'Website Design & Development',
            bodyText: '<p>Quality Swimming focuses on teaching kids how to be comfortable in the water and swim the different strokes.</p><p>Our goal with Quality Swimming was speeding up their laggy website. We were about to make it run 95% fasted and get it from a F GTMetrix rating to an A. We did this using advanced caching methods, compressions on images and CSS files as well as tuning the back end infrastructure.</p>',
            imageUrl: 'assets/images/portfolio-images/QualitySwimming.jpg'
        },
        {
            id: 9,
            name: 'Lenscrafters',
            slug: 'lenscrafters',
            description: 'Eyeglasses',
            typeOfWork: 'Website Maintenance',
            bodyText: '<p>LensCrafters is an international retailer of prescription eyewear and prescription sunglasses.</p><p>We helped Lenscrafters Germany clean up there website from old content that was bogging down their system. We maintained the website weekly, and kept regular updates going as to not lose their precious content.</p>',
            imageUrl: 'assets/images/portfolio-images/Lenscrafters.jpg'
        }
    ];

    getProject(slug: string) {
        const project = this.projects.find(
            (p) => {
                return p.slug === slug;
            }
        );
        return project;
    }
}