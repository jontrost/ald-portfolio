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

const PUMPED_UP_KICKS_PREVIEW_IMAGE: Image = {
	src: "/assets/projects/pumped-up-kicks/preview.png",
	width: 2041,
	height: 1953,
	description: "A collage of graphics for the Pumped Up Kicks lyric book"
};

const ALPHA_DELTA_PI_PREVIEW_IMAGE: Image = {
	src: "/assets/projects/alpha-delta-pi/preview.png",
	width: 500,
	height: 500,
	description: "A graphic of a lemon for the LemonADPi promotional event"
};

const ONE_SWORD_SAGA_PREVIEW_IMAGE: Image = {
	src: "/assets/projects/one-sword-saga/preview.png",
	width: 2500,
	height: 2500,
	description: "An collage of graphics for the One Sword Saga book series"
};

const THE_214_MAGAZINE_PREVIEW_IMAGE: Image = {
	src: "/assets/projects/the-214-magazine/preview.svg",
	width: 320,
	height: 320,
	description: "A logo for The 214 Magazine"
};

const PAINTING_PREVIEW_IMAGE: Image = {
	src: "/assets/projects/painting/preview.jpg",
	width: 1876,
	height: 2475,
	description: "An oil painting of the downtown Saint Paul skyline",
	fineArtMetadata: {
		name: "Downtown",
		medium: "oil on loose canvas",
		description: "My first painted work of realism in architecture, inspired by a photo taken by Josh Hild"
	}
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
		name: "Pumped Up Kicks",
		route: "pumped-up-kicks",
		description: `
            This publication is centered around the song "Pumped Up Kicks" by Foster the People. The design concept
            is inspired by the song's reference to mental illness in adolescents and school shootings. The
            interruption and repetition in the imagery/typography represent the visualization of potential thoughts
            behind the lyrics in the song. The use of grayscale and brighter complementary colors evoke mixed
            emotions contrasted by dullness.        
        `,
		previewImage: PUMPED_UP_KICKS_PREVIEW_IMAGE,
		detailsImages: [
			PUMPED_UP_KICKS_PREVIEW_IMAGE,
			{
				src: "/assets/projects/pumped-up-kicks/pumped-up-kicks-1.jpg",
				width: 1614,
				height: 712,
				description: "The cover page of the Pumped Up Kicks lyric book"
			},
			{
				src: "/assets/projects/pumped-up-kicks/pumped-up-kicks-2.jpg",
				width: 1142,
				height: 718,
				description: "The first page of the Pumped Up Kicks lyric book, showcasing typography"
			},
			{
				src: "/assets/projects/pumped-up-kicks/pumped-up-kicks-3.jpg",
				width: 1142,
				height: 712,
				description: "The second page of the Pumped Up Kicks lyric book, showcasing blurred imagery and typography"
			},
			{
				src: "/assets/projects/pumped-up-kicks/pumped-up-kicks-4.jpg",
				width: 1106,
				height: 720,
				description: "A graphic of the Pumped Up Kicks lyric book that showcases chopped imagery and typography"
			}
		]
	},
	{
		name: "Alpha Delta Pi",
		route: "alpha-delta-pi",
		description: `
            During my time as the Public Relations Chair for Alpha Delta Pi, I designed several graphics and
            banners to promote university events and messaging. One of my key projects was creating a graphic
            identifier for "LemonADPi," an annual promotional event. This design was shared on social media and
            printed as stickers distributed at the event. To create the promotional banners, I utilized both
            composition design techniques and my technical painting skills.
        `,
		previewImage: ALPHA_DELTA_PI_PREVIEW_IMAGE,
		detailsImages: [
			ALPHA_DELTA_PI_PREVIEW_IMAGE,
			{
				src: "/assets/projects/alpha-delta-pi/alpha-delta-pi-1.jpg",
				width: 1570,
				height: 1349,
				description: "A photograph of LemonADPi stickers"
			},
			{
				src: "/assets/projects/alpha-delta-pi/alpha-delta-pi-2.jpg",
				width: 710,
				height: 889,
				description: "A photograph of a banner painted for an Alpha Delta Pi event"
			},
			{
				src: "/assets/projects/alpha-delta-pi/alpha-delta-pi-3.png",
				width: 1400,
				height: 1805,
				description: "A campfire graphic for an Alpha Delta Pi event"
			}
		]
	},
	{
		name: "One Sword Saga",
		route: "one-sword-saga",
		description: `
            For author Miriam Wade's One Sword Saga, I created dynamic character illustrations and a skyline
            graphic illustration to promote the series on the author's social media and produce merchandise
            for her promotional events. Additionally, I collaborated with the author to design an intricately
            detailed map of the saga's universe, helping bring her vision to life and providing readers with
            a visual guide to the characters' epic journey.
        `,
		previewImage: ONE_SWORD_SAGA_PREVIEW_IMAGE,
		detailsImages: [
			ONE_SWORD_SAGA_PREVIEW_IMAGE,
			{
				src: "/assets/projects/one-sword-saga/one-sword-saga-1.svg",
				width: 1920,
				height: 1080,
				description: "An illustration of a city skyline for the One Sword Saga book series"
			},
			{
				src: "/assets/projects/one-sword-saga/one-sword-saga-2.svg",
				width: 216,
				height: 288,
				description: "An illustration of Guenivere, a character from the One Sword Saga book series"
			},
			{
				src: "/assets/projects/one-sword-saga/one-sword-saga-3.svg",
				width: 216,
				height: 288,
				description: "An illustration of Arthur, a character from the One Sword Saga book series"
			},
			{
				src: "/assets/projects/one-sword-saga/one-sword-saga-4.svg",
				width: 216,
				height: 288,
				description: "An illustration of the Excalibur sword from the One Sword Saga book series"
			},
			{
				src: "/assets/projects/one-sword-saga/one-sword-saga-5.svg",
				width: 216,
				height: 288,
				description: "An illustration of Mordred, a character from the One Sword Saga book series"
			},
			{
				src: "/assets/projects/one-sword-saga/one-sword-saga-6.svg",
				width: 216,
				height: 288,
				description: "An illustration of a dinosaur from the One Sword Saga book series"
			},
			{
				src: "/assets/projects/one-sword-saga/one-sword-saga-7.svg",
				width: 288,
				height: 216,
				description: "An illustration of an airship from the One Sword Saga book series"
			},
			{
				src: "/assets/projects/one-sword-saga/one-sword-saga-8.jpg",
				width: 2000,
				height: 2500,
				description: "An photograph of stickers featuring illustrations from the One Sword Saga book series"
			},
			{
				src: "/assets/projects/one-sword-saga/one-sword-saga-9.jpg",
				width: 1742,
				height: 2500,
				description: "A map of Avalon, the setting of the One Sword Saga book series"
			},
			{
				src: "/assets/projects/one-sword-saga/one-sword-saga-10.jpg",
				width: 2253,
				height: 1267,
				description:
					"A photograph of a poster featuring a city skyline illustration from the One Sword Saga book series"
			}
		]
	},
	{
		name: "The 214 Magazine",
		route: "the-214-magazine",
		description: `
            I designed a versatile logo for The 214 Magazine, a digital magazine created by Kirsten Cucurella,
            embodying multifaceted and inclusive identity. It reflects the brand's focus on community, critical
            thinking, and creative expression, tailored for a young and diverse Dallas audience. The logo is used
            seamlessly with a color palette I created, combining earth tones and bold accents like crimson and dark
            cyan, aligning with the magazine's dynamic and aesthetic-forward approach.
        `,
		previewImage: THE_214_MAGAZINE_PREVIEW_IMAGE,
		detailsImages: [
			THE_214_MAGAZINE_PREVIEW_IMAGE,
			{
				src: "/assets/projects/the-214-magazine/the-214-magazine-1.jpg",
				width: 1296,
				height: 1561,
				description: "The brand guide for The 214 Magazine"
			},
			{
				src: "/assets/projects/the-214-magazine/the-214-magazine-2.jpg",
				width: 1501,
				height: 1500,
				description: "A photograph of a purse with the logo for The 214 Magazine overlayed on it"
			},
			{
				src: "/assets/projects/the-214-magazine/the-214-magazine-3.jpg",
				width: 1501,
				height: 1501,
				description: "A photograph of a night life scene with the logo for The 214 Magazine overlayed on it"
			}
		]
	},
	{
		name: "Fine Art",
		route: "fine-art",
		description: `
            REPLACE
        `,
		previewImage: PAINTING_PREVIEW_IMAGE,
		detailsImages: [
			PAINTING_PREVIEW_IMAGE,
			{
				src: "/assets/projects/painting/painting-1.jpg",
				width: 2603,
				height: 2603,
				description: "A photograph of a series of fantasy landscape paintings",
				fineArtMetadata: {
					name: "Fantasy Series",
					medium: "acrylic on pre-primed canvas",
					description: "A series of four fantasy themed landscapes, inspired by images found on pinterest"
				}
			},
			{
				src: "/assets/projects/painting/painting-2.jpg",
				width: 2500,
				height: 1186,
				description: "A photograph of a painting of several plants",
				fineArtMetadata: {
					name: "Growth",
					medium: "acrylic on stretched canvas",
					description: "Inspired by scientific drawings of plant species and the growth around me"
				}
			},
			{
				src: "/assets/projects/painting/painting-3.jpg",
				width: 2000,
				height: 2500,
				description: "A close-up photograph of a painting of several plants",
				fineArtMetadata: {
					name: "Growth",
					medium: "acrylic on stretched canvas",
					description: "Inspired by scientific drawings of plant species and the growth around me"
				}
			},
			{
				src: "/assets/projects/painting/painting-4.jpg",
				width: 2500,
				height: 2000,
				description: "A photograph of a painting of a cup of coffee and a painting of an old woman",
				fineArtMetadata: {
					name: "Caffè e Donna",
					medium: "oil on stretched canvas",
					description: "Two photographs taken in Rome, painted as a diptych"
				}
			},
			{
				src: "/assets/projects/painting/painting-5.jpg",
				width: 1581,
				height: 1700,
				description: "A photograph of a charcoal sketch of a ballerina",
				fineArtMetadata: {
					name: "Dancer Mastercopy",
					medium: "charcoal on newsprint",
					description: "Based on the original drawing by Edgar Degas"
				}
			},
			{
				src: "/assets/projects/painting/painting-6.jpg",
				width: 1795,
				height: 2081,
				description: "A photograph of a colorless still-life painting",
				fineArtMetadata: {
					name: "Grayscale Still Life",
					medium: "oil on stretched canvas"
				}
			},
			{
				src: "/assets/projects/painting/painting-7.jpg",
				width: 1943,
				height: 2206,
				description: "A photograph of a colorful still-life painting",
				fineArtMetadata: {
					name: "Color Still Life",
					medium: "oil on stretched canvas"
				}
			}
		]
	}
];
