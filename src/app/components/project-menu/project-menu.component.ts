import { Component } from "@angular/core";
import { PROJECT_PREVIEWS } from "../../constants/project-previews.constants";
import type { ProjectPreview } from "../../models/project-preview.model";

@Component({
	selector: "ald-project-menu",
	imports: [],
	templateUrl: "./project-menu.component.html",
	styleUrl: "./project-menu.component.scss",
})
export class ProjectMenuComponent {
	projectPreviews: ProjectPreview[] = PROJECT_PREVIEWS;
}
