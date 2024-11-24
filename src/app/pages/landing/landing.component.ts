import { Component, signal } from "@angular/core";
import { PROJECT_PREVIEWS } from "../../constants/project-previews.constants";
import type { ProjectPreview } from "../../models/project-preview.model";

@Component({
	selector: "ald-landing",
	templateUrl: "./landing.component.html",
	styleUrl: "./landing.component.scss",
})
export class LandingComponent {
	readonly projectPreviews: ProjectPreview[] = PROJECT_PREVIEWS;
	selectedProjectPreviewIndex = signal<number>(0);

	selectProjectPreview(index: number) {
		this.selectedProjectPreviewIndex.set(index);
	}
}
