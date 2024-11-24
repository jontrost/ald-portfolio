import { Component } from "@angular/core";
import { ProjectMenuComponent } from "../../components/project-menu/project-menu.component";
import { PROJECT_PREVIEWS } from "../../constants/project-previews.constants";
import type { ProjectPreview } from "../../models/project-preview.model";

@Component({
	selector: "ald-landing",
	imports: [ProjectMenuComponent],
	templateUrl: "./landing.component.html",
	styleUrl: "./landing.component.scss",
})
export class LandingComponent {
	// Restructure this so that these project previews are not duplicated between here and the project menu
	projectPreviews: ProjectPreview[] = PROJECT_PREVIEWS;
}
