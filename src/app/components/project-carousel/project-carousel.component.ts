import { Component } from "@angular/core";
import { PROJECT_PREVIEWS } from "../../constants/project-previews.constants";
import type { ProjectPreview } from "../../models/project-preview.model";

@Component({
	selector: "ald-project-carousel",
	standalone: true,
	imports: [],
	templateUrl: "./project-carousel.component.html",
	styleUrl: "./project-carousel.component.scss",
})
export class ProjectCarouselComponent {
	projectPreviews: ProjectPreview[] = PROJECT_PREVIEWS;
}
