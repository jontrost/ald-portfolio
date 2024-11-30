import type { Image } from "../models/image.model";
import type { Project } from "../models/project.model";

// Compress the images before releasing
const ICON_LIBRARY_PREVIEW_IMAGE: Image = {
	src: "/assets/projects/icon-library/preview.png",
	width: 2050,
	height: 1727
};

const SPRINT_BLOCK_PARTY_PREVIEW_IMAGE: Image = {
	src: "/assets/projects/sprint-block-party/preview.png",
	width: 2251,
	height: 2251
};

const PUMPED_UP_KICKS_LYRIC_BOOK_PREVIEW_IMAGE: Image = {
	src: "/assets/projects/pumped-up-kicks-lyric-book/preview.png",
	width: 2041,
	height: 1953
};

const ALPHA_DELTA_PI_GRAPHICS_PREVIEW_IMAGE: Image = {
	src: "/assets/projects/alpha-delta-pi-graphics/preview.png",
	width: 500,
	height: 500
};

const PAINTING_PREVIEW_IMAGE: Image = {
	src: "/assets/projects/painting/preview.jpg",
	width: 1876,
	height: 2475
};

export const PROJECTS: Project[] = [
	{
		name: "Icon Library",
		route: "icon-library",
		description: `
            This icon library is designed for visual communications, including social media graphics, printed
            materials, presentations, and websites. It effectively presents a variety of concepts through clean
            and simple illustrations. The designs incorporate lines and round shapes, with elegantly curved
            corners on both the icons and their containers, creating a soft and cohesive look.
        `,
		previewImage: ICON_LIBRARY_PREVIEW_IMAGE,
		detailsImages: [
			ICON_LIBRARY_PREVIEW_IMAGE,
			{
				src: "/assets/projects/icon-library/icon-library-1.png",
				width: 5000,
				height: 3750
			},
			{
				src: "/assets/projects/icon-library/icon-library-2.jpg",
				width: 5000,
				height: 3750
			}
		]
	},
	{
		name: "Ethereal Dance",
		route: "ethereal-dance",
		description: `
            Through research and personal experimentation, I sought ways to mimic or depict dance through graphics,
            considering questions such as what design elements can convey movement while referencing the human body
            and which portrayals of dance most effectively represent the movements of the human form. I discovered
            that graphic shapes and lines could take on an abstract form, effectively representing the angles and
            alignments of the body captured during movement and dance. The branding and marketing of Ethereal Dance
            Company showcase how design can be integrated with dance in the real world.
        `,
		previewImage: {
			src: "/assets/projects/ethereal-dance/preview.jpg",
			width: 1200,
			height: 900
		},
		detailsImages: [
			{
				src: "/assets/projects/ethereal-dance/ethereal-dance-1.gif",
				width: 0,
				height: 0
			},
			{
				src: "/assets/projects/ethereal-dance/ethereal-dance-2.png",
				width: 0,
				height: 0
			},
			{
				src: "/assets/projects/ethereal-dance/ethereal-dance-3.png",
				width: 0,
				height: 0
			},
			{
				src: "/assets/projects/ethereal-dance/ethereal-dance-4.png",
				width: 0,
				height: 0
			},
			{
				src: "/assets/projects/ethereal-dance/ethereal-dance-5.png",
				width: 0,
				height: 0
			},
			{
				src: "/assets/projects/ethereal-dance/ethereal-dance-6.png",
				width: 0,
				height: 0
			}
		]
	},
	{
		name: "Characters of Carnival",
		route: "characters-of-carnival",
		description: `
            This project was done for the exhibit "Carnival as Resistance," which depicted the ritual and artifacts
            alongside the modern-day practices of Carnival in Antigua and Barbuda. I illustrated the four most
            important characters of Carnival along with line drawings in the style of fashion sketches. Participants
            in the parade dress up as these four characters during the annual celebration. The layout of the mural
            was made in collaboration with Hannah Caulkins.
        `,
		previewImage: {
			src: "/assets/projects/characters-of-carnival/preview.jpg",
			width: 0,
			height: 0
		},
		detailsImages: [
			{
				src: "/assets/projects/characters-of-carnival/characters-of-carnival-1.jpg",
				width: 0,
				height: 0
			},
			{
				src: "/assets/projects/characters-of-carnival/characters-of-carnival-2.jpg",
				width: 0,
				height: 0
			},
			{
				src: "/assets/projects/characters-of-carnival/characters-of-carnival-3.jpg",
				width: 0,
				height: 0
			},
			{
				src: "/assets/projects/characters-of-carnival/characters-of-carnival-4.jpg",
				width: 0,
				height: 0
			},
			{
				src: "/assets/projects/characters-of-carnival/characters-of-carnival-5.jpg",
				width: 0,
				height: 0
			},
			{
				src: "/assets/projects/characters-of-carnival/characters-of-carnival-6.jpg",
				width: 0,
				height: 0
			},
			{
				src: "/assets/projects/characters-of-carnival/characters-of-carnival-7.jpg",
				width: 0,
				height: 0
			},
			{
				src: "/assets/projects/characters-of-carnival/characters-of-carnival-8.jpg",
				width: 0,
				height: 0
			},
			{
				src: "/assets/projects/characters-of-carnival/characters-of-carnival-9.jpg",
				width: 0,
				height: 0
			}
		]
	},
	{
		name: "Sprint Block Party",
		route: "sprint-block-party",
		description: `
            I designed this identifier for an event on the Sprint Headquarters Campus. The purpose of the event
            was to celebrate the grand opening of a newly renovated building and to recognize the Network team
            for the launch of 5G. I wanted the identifier to signify a fun summer event while keeping the design
            Sprint branded. The color palette and use of the light brush helped make the event recognizable as a
            Sprint event. The identifier was used on flyers to promote the event, and there were rotating
            announcements on TV screens throughout campus. It was also included in the photo booth printed
            pictures you could get at the event.
        `,
		previewImage: SPRINT_BLOCK_PARTY_PREVIEW_IMAGE,
		detailsImages: [SPRINT_BLOCK_PARTY_PREVIEW_IMAGE]
	},
	{
		name: "Pumped Up Kicks Lyric Book",
		route: "pumped-up-kicks-lyric-book",
		description: `
            This publication is centered around the song "Pumped Up Kicks" by Foster the People. The design concept
            is inspired by the song's reference to mental illness in adolescents and school shootings. The
            interruption and repetition in the imagery/typography represent the visualization of potential thoughts
            behind the lyrics in the song. The use of grayscale and brighter complementary colors evoke mixed
            emotions contrasted by dullness.        
        `,
		previewImage: PUMPED_UP_KICKS_LYRIC_BOOK_PREVIEW_IMAGE,
		detailsImages: [
			PUMPED_UP_KICKS_LYRIC_BOOK_PREVIEW_IMAGE,
			{
				src: "/assets/projects/pumped-up-kicks-lyric-book/pumped-up-kicks-lyric-book-1.jpg",
				width: 0,
				height: 0
			},
			{
				src: "/assets/projects/pumped-up-kicks-lyric-book/pumped-up-kicks-lyric-book-2.jpg",
				width: 0,
				height: 0
			},
			{
				src: "/assets/projects/pumped-up-kicks-lyric-book/pumped-up-kicks-lyric-book-3.jpg",
				width: 0,
				height: 0
			},
			{
				src: "/assets/projects/pumped-up-kicks-lyric-book/pumped-up-kicks-lyric-book-4.jpg",
				width: 0,
				height: 0
			}
		]
	},
	{
		name: "Alpha Delta Pi Graphics",
		route: "alpha-delta-pi-graphics",
		description: `
            During my time as the Public Relations Chair for Alpha Delta Pi, I designed several graphics and
            banners to promote university events and messaging. One of my key projects was creating a graphic
            identifier for "LemonADPi," an annual promotional event. This design was shared on social media and
            printed as stickers distributed at the event. To create the promotional banners, I utilized both
            composition design techniques and my technical painting skills.
        `,
		previewImage: ALPHA_DELTA_PI_GRAPHICS_PREVIEW_IMAGE,
		detailsImages: [
			ALPHA_DELTA_PI_GRAPHICS_PREVIEW_IMAGE,
			{
				src: "/assets/projects/alpha-delta-pi-graphics/alpha-delta-pi-graphics-1.jpg",
				width: 0,
				height: 0
			},
			{
				src: "/assets/projects/alpha-delta-pi-graphics/alpha-delta-pi-graphics-2.jpg",
				width: 0,
				height: 0
			},
			{
				src: "/assets/projects/alpha-delta-pi-graphics/alpha-delta-pi-graphics-3.png",
				width: 0,
				height: 0
			}
		]
	},
	{
		name: "Painting",
		route: "painting",
		description: `
            I wanted to commemorate my time living in the beautiful city of Saint Paul, Minnesota. This is my
            first painted work of realism in architecture, inspired by a photo taken by Josh Hild.
        `,
		paintingName: "Downtown",
		paintingMedium: "oil on loose canvas",
		previewImage: PAINTING_PREVIEW_IMAGE,
		detailsImages: [PAINTING_PREVIEW_IMAGE]
	}
];
