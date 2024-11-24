import type { Project } from "../models/project.model";

export const PROJECTS: Project[] = [
	{
		name: "Ethereal Dance",
		description: `
            The following question was the thesis of exploration that resulted in the Ethereal Dance Company Brand: Dance choreography can be thought of as designing movement for the body, but how does that compare to
            designing visual motion? Through research and personal experimentation, I explored possible ways to mimic
            or depict dance using graphics. I considered questions such as: what design elements can display movement
            while referencing the human body; and what portrayals of dance are the most successful at representing
            the movements of the human body? Through my illustrative process, I discovered how graphic shapes and
            lines can take on an abstract form to represent the angles of the body alignment captured through
            movement and dance. The creation, branding, and marketing of Ethereal Dance Company displays how design
            is integrated with dance in the real world.
        `,
		imageSrc: "/assets/projects/ethereal-dance/preview.jpg",
		route: "ethereal-dance",
	},
	{
		name: "Sprint Block Party",
		description: `
            I designed this identifier for an event on the Sprint Headquarters Campus. The purpose of the event
            was to celebrate the grand opening of all of a newly renovated building as well as recognize the
            Network team for the launch of 5G. I wanted the identifier to signify a fun summer event while
            keeping the design Sprint branded. The color palate and use of the light brush helped make the
            event recognizable as a Sprint event. The identifier was used on flyers to promote the event as
            well as rotating announcements on TV screens throughout campus. It was also included on the photo
            booth printed pictures you could get at the event.
        `,
		imageSrc: "/assets/projects/sprint-block-party/preview.jpg",
		route: "sprint-block-party",
	},
	{
		name: "Characters of Carnival",
		description: `
            This project was made for the exhibit "Carnival as Resistance" which depicted the ritual and artifacts
            alongside the modern day practices of Carnival in Antigua and Barbuda. I illustrated the four most
            important characters of carnival along with the line drawings in the style of fashion sketches.
            Participants in the parade dress up as these four characters during the annual celebration.
            The layout of the mural was made in collaboration with Hannah Caulkins.
        `,
		imageSrc: "/assets/projects/characters-of-carnival/preview.jpg",
		route: "characters-of-carnival",
	},
	{
		name: "Project 4",
		description: "Brief project summary text. (4)",
		imageSrc: "/assets/placeholder-image-alternate.jpg",
		route: "project-4",
	},
	{
		name: "Project 5",
		description: "Brief project summary text. (5)",
		imageSrc: "/assets/placeholder-image.jpg",
		route: "project-5",
	},
	{
		name: "Project 6",
		description: "Brief project summary text. (6)",
		imageSrc: "/assets/placeholder-image-alternate.jpg",
		route: "project-6",
	},
];
