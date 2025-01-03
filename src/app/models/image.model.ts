import type { FineArtMetadata } from "./fine-art-metadata.model";

export interface Image {
	src: string;
	width: number;
	height: number;
	description: string;
	fineArtMetadata?: FineArtMetadata;
}
