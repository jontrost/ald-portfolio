import type { Image } from "../models/image.model";
import type { Project } from "../models/project.model";

const ICON_LIBRARY_PREVIEW_IMAGE: Image = {
	src: "/assets/projects/icon-library/preview.png",
	width: 2001,
	height: 1696,
	description: "A collection of icons for an icon library"
};

const SPRINT_BLOCK_PARTY_PREVIEW_IMAGE: Image = {
	src: "/assets/projects/sprint-block-party/preview.png",
	width: 1700,
	height: 1700,
	description: "A graphic for the Sprint Block Party corporate event"
};

const PUMPED_UP_KICKS_LYRIC_BOOK_PREVIEW_IMAGE: Image = {
	src: "/assets/projects/pumped-up-kicks-lyric-book/preview.png",
	width: 2041,
	height: 1953,
	description: "A collage of graphics for the Pumped Up Kicks lyric book"
};

const ALPHA_DELTA_PI_GRAPHICS_PREVIEW_IMAGE: Image = {
	src: "/assets/projects/alpha-delta-pi-graphics/preview.png",
	width: 500,
	height: 500,
	description: "A graphic of a lemon for the LemonADPi promotional event"
};

const PAINTING_PREVIEW_IMAGE: Image = {
	src: "/assets/projects/painting/preview.jpg",
	width: 1876,
	height: 2475,
	description: "An oil painting of the downtown Saint Paul skyline"
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
				width: 2000,
				height: 1500,
				description: "A detailed subset of icons from an icon library"
			},
			{
				src: "/assets/projects/icon-library/icon-library-2.jpg",
				width: 2000,
				height: 1500,
				description: "An example of icons being used in a print publication"
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
			height: 900,
			description: "A collage of printed graphics for the Ethereal Dance brand"
		},
		detailsImages: [
			{
				src: "/assets/projects/ethereal-dance/ethereal-dance-1.gif",
				width: 1160,
				height: 751,
				description: "An animation of dancers that simulates the movement of dance"
			},
			{
				src: "/assets/projects/ethereal-dance/ethereal-dance-2.png",
				width: 1781,
				height: 1200,
				description: "A graphic detailing the brand guidelines for the Ethereal Dance brand"
			},
			{
				src: "/assets/projects/ethereal-dance/ethereal-dance-3.png",
				width: 2000,
				height: 934,
				description: "A graphic showcasing the colors and typography of the Ethereal Dance brand"
			},
			{
				src: "/assets/projects/ethereal-dance/ethereal-dance-4.png",
				width: 2000,
				height: 1467,
				description: "An example of a poster for the Ethereal Dance brand"
			},
			{
				src: "/assets/projects/ethereal-dance/ethereal-dance-5.png",
				width: 1886,
				height: 1200,
				description: "An example of an open trifold brochure for the Ethereal Dance brand"
			},
			{
				src: "/assets/projects/ethereal-dance/ethereal-dance-6.png",
				width: 1800,
				height: 1500,
				description: "An example of a closed trifold brochure for the Ethereal Dance brand"
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
			width: 1200,
			height: 900,
			description: "A photograph of the Characters of Carnival art exhibit"
		},
		detailsImages: [
			{
				src: "/assets/projects/characters-of-carnival/characters-of-carnival-1.jpg",
				width: 1400,
				height: 788,
				description: "A photograph of the Characters of Carnival art exhibit"
			},
			{
				src: "/assets/projects/characters-of-carnival/characters-of-carnival-2.jpg",
				width: 1400,
				height: 933,
				description: "A photograph of the Characters of Carnival art exhibit taken from an angle"
			},
			{
				src: "/assets/projects/characters-of-carnival/characters-of-carnival-3.jpg",
				width: 1200,
				height: 1800,
				description: "A photograph zoomed in on the Highlander character of the Characters of Carnival art exhibit"
			},
			{
				src: "/assets/projects/characters-of-carnival/characters-of-carnival-4.jpg",
				width: 1200,
				height: 1800,
				description: "A photograph zoomed in on the John Bull character of the Characters of Carnival art exhibit"
			},
			{
				src: "/assets/projects/characters-of-carnival/characters-of-carnival-5.jpg",
				width: 1200,
				height: 1800,
				description: "A photograph zoomed in on the Skellihopper character of the Characters of Carnival art exhibit"
			},
			{
				src: "/assets/projects/characters-of-carnival/characters-of-carnival-6.jpg",
				width: 1200,
				height: 1800,
				description: "A photograph zoomed in on the Moko Jumbie character of the Characters of Carnival art exhibit"
			},
			{
				src: "/assets/projects/characters-of-carnival/characters-of-carnival-7.jpg",
				width: 1200,
				height: 1800,
				description: "A photograph zoomed in on the overview of the Characters of Carnival art exhibit"
			},
			{
				src: "/assets/projects/characters-of-carnival/characters-of-carnival-9.jpg",
				width: 1400,
				height: 788,
				description: "A wide angle photograph of the Characters of Carnival art exhibit"
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
				width: 1614,
				height: 712,
				description: "The cover page of the Pumped Up Kicks lyric book"
			},
			{
				src: "/assets/projects/pumped-up-kicks-lyric-book/pumped-up-kicks-lyric-book-2.jpg",
				width: 1142,
				height: 718,
				description: "The first page of the Pumped Up Kicks lyric book, showcasing typography"
			},
			{
				src: "/assets/projects/pumped-up-kicks-lyric-book/pumped-up-kicks-lyric-book-3.jpg",
				width: 1142,
				height: 712,
				description: "The second page of the Pumped Up Kicks lyric book, showcasing blurred imagery and typography"
			},
			{
				src: "/assets/projects/pumped-up-kicks-lyric-book/pumped-up-kicks-lyric-book-4.jpg",
				width: 1106,
				height: 720,
				description: "A graphic of the Pumped Up Kicks lyric book that showcases chopped imagery and typography"
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
				width: 1570,
				height: 1349,
				description: "A photograph of LemonADPi stickers"
			},
			{
				src: "/assets/projects/alpha-delta-pi-graphics/alpha-delta-pi-graphics-2.jpg",
				width: 710,
				height: 889,
				description: "A photograph of a banner painted for an Alpha Delta Pi event"
			},
			{
				src: "/assets/projects/alpha-delta-pi-graphics/alpha-delta-pi-graphics-3.png",
				width: 1400,
				height: 1805,
				description: "A campfire graphic for an Alpha Delta Pi event"
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
