export interface Project {
	name: string;
	description: string;
	paintingName?: string;
	paintingMedium?: string;
	previewImageSrc: string;
	detailsImagesSrcs: string[];
	route: string;
}
