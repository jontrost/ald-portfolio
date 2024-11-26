import type { Project } from "../models/project.model";

// Compress the images before releasing
export const PROJECTS: Project[] = [
	{
		name: "Icon Library",
		description: `
            This icon library is designed for visual communications, including social media graphics, printed
            materials, presentations, and websites. It effectively presents a variety of concepts through clean
            and simple illustrations. The designs incorporate lines and round shapes, with elegantly curved
            corners on both the icons and their containers, creating a soft and cohesive look.
        `,
		previewImageSrc: "/assets/projects/icon-library/preview.png",
		detailsImagesSrcs: [
			"/assets/projects/icon-library/preview.png",
			"/assets/projects/icon-library/icon-library-1.png",
			"/assets/projects/icon-library/icon-library-2.jpg"
		],
		route: "icon-library"
	},
	{
		name: "Ethereal Dance",
		description: `
            Through research and personal experimentation, I sought ways to mimic or depict dance through graphics,
            considering questions such as what design elements can convey movement while referencing the human body
            and which portrayals of dance most effectively represent the movements of the human form. I discovered
            that graphic shapes and lines could take on an abstract form, effectively representing the angles and
            alignments of the body captured during movement and dance. The branding and marketing of Ethereal Dance
            Company showcase how design can be integrated with dance in the real world.
        `,
		previewImageSrc: "/assets/projects/ethereal-dance/preview.jpg",
		detailsImagesSrcs: [
			"/assets/projects/ethereal-dance/ethereal-dance-1.gif",
			"/assets/projects/ethereal-dance/ethereal-dance-2.png",
			"/assets/projects/ethereal-dance/ethereal-dance-3.png",
			"/assets/projects/ethereal-dance/ethereal-dance-4.png",
			"/assets/projects/ethereal-dance/ethereal-dance-5.png",
			"/assets/projects/ethereal-dance/ethereal-dance-6.png"
		],
		route: "ethereal-dance"
	},
	{
		name: "Characters of Carnival",
		description: `
            This project was done for the exhibit "Carnival as Resistance," which depicted the ritual and artifacts
            alongside the modern-day practices of Carnival in Antigua and Barbuda. I illustrated the four most
            important characters of Carnival along with line drawings in the style of fashion sketches. Participants
            in the parade dress up as these four characters during the annual celebration. The layout of the mural
            was made in collaboration with Hannah Caulkins.
        `,
		previewImageSrc: "/assets/projects/characters-of-carnival/preview.jpg",
		detailsImagesSrcs: [
			"/assets/projects/characters-of-carnival/characters-of-carnival-1.jpg",
			"/assets/projects/characters-of-carnival/characters-of-carnival-2.jpg",
			"/assets/projects/characters-of-carnival/characters-of-carnival-3.jpg",
			"/assets/projects/characters-of-carnival/characters-of-carnival-4.jpg",
			"/assets/projects/characters-of-carnival/characters-of-carnival-5.jpg",
			"/assets/projects/characters-of-carnival/characters-of-carnival-6.jpg",
			"/assets/projects/characters-of-carnival/characters-of-carnival-7.jpg",
			"/assets/projects/characters-of-carnival/characters-of-carnival-8.jpg",
			"/assets/projects/characters-of-carnival/characters-of-carnival-9.jpg"
		],
		route: "characters-of-carnival"
	},
	{
		name: "Sprint Block Party",
		description: `
            I designed this identifier for an event on the Sprint Headquarters Campus. The purpose of the event
            was to celebrate the grand opening of a newly renovated building and to recognize the Network team
            for the launch of 5G. I wanted the identifier to signify a fun summer event while keeping the design
            Sprint branded. The color palette and use of the light brush helped make the event recognizable as a
            Sprint event. The identifier was used on flyers to promote the event, and there were rotating
            announcements on TV screens throughout campus. It was also included in the photo booth printed
            pictures you could get at the event.
        `,
		previewImageSrc: "/assets/projects/sprint-block-party/preview.png",
		detailsImagesSrcs: ["/assets/projects/sprint-block-party/preview.png"],
		route: "sprint-block-party"
	},
	{
		name: "Pumped Up Kicks Lyric Book",
		description: `
            This publication is centered around the song "Pumped Up Kicks" by Foster the People. The design concept
            is inspired by the song's reference to mental illness in adolescents and school shootings. The
            interruption and repetition in the imagery/typography represent the visualization of potential thoughts
            behind the lyrics in the song. The use of grayscale and brighter complementary colors evoke mixed
            emotions contrasted by dullness.        
        `,
		previewImageSrc: "/assets/projects/pumped-up-kicks-lyric-book/preview.png",
		detailsImagesSrcs: [
			"/assets/projects/pumped-up-kicks-lyric-book/preview.png",
			"/assets/projects/pumped-up-kicks-lyric-book/pumped-up-kicks-lyric-book-1.jpg",
			"/assets/projects/pumped-up-kicks-lyric-book/pumped-up-kicks-lyric-book-2.jpg",
			"/assets/projects/pumped-up-kicks-lyric-book/pumped-up-kicks-lyric-book-3.jpg",
			"/assets/projects/pumped-up-kicks-lyric-book/pumped-up-kicks-lyric-book-4.jpg"
		],
		route: "pumped-up-kicks-lyric-book"
	},
	{
		name: "Alpha Delta Pi Graphics",
		description: `
            During my time as the Public Relations Chair for Alpha Delta Pi, I designed several graphics and
            banners to promote university events and messaging. One of my key projects was creating a graphic
            identifier for "LemonADPi," an annual promotional event. This design was shared on social media and
            printed as stickers distributed at the event. To create the promotional banners, I utilized both
            composition design techniques and my technical painting skills.
        `,
		// Switch this with the transparent version
		previewImageSrc: "/assets/projects/alpha-delta-pi-graphics/preview.jpg",
		detailsImagesSrcs: [
			// Switch this with the transparent version
			"/assets/projects/alpha-delta-pi-graphics/preview.jpg",
			"/assets/projects/alpha-delta-pi-graphics/alpha-delta-pi-graphics-1.jpg",
			"/assets/projects/alpha-delta-pi-graphics/alpha-delta-pi-graphics-2.jpg",
			"/assets/projects/alpha-delta-pi-graphics/alpha-delta-pi-graphics-3.png"
		],
		route: "alpha-delta-pi-graphics"
	},
	{
		name: "Painting",
		description: `
            I wanted to commemorate my time living in the beautiful city of Saint Paul, Minnesota. This is my
            first painted work of realism in architecture, inspired by a photo taken by Josh Hild.
        `,
		mediumDescription: "Downtown, oil on loose canvas",
		previewImageSrc: "/assets/projects/painting/preview.jpg",
		detailsImagesSrcs: ["/assets/projects/painting/preview.jpg"],
		route: "painting"
	}
];
