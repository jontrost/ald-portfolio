import type { Image } from "./image.model";

export interface Project {
	name: string;
	route: string;
	description?: string;
	previewImage: Image;
	detailsImages: Image[];
}
