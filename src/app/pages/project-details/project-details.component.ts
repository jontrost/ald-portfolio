import { Component, type OnInit, inject } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { PROJECTS } from "../../constants/project.constants";
import type { Project } from "../../models/project.model";

@Component({
	selector: "ald-project-details",
	imports: [RouterModule],
	templateUrl: "./project-details.component.html",
	styleUrl: "./project-details.component.scss"
})
export class ProjectDetailsComponent implements OnInit {
	readonly route = inject(ActivatedRoute);
	readonly router = inject(Router);
	project: Project;

	// Fix flicker on load
	ngOnInit() {
		const { projectName } = this.route.snapshot.params;
		const project = PROJECTS.find((project) => project.route === projectName);

		if (project == null) {
			// Fix this so that the error is not thrown in the template since this is async
			this.router.navigate(["/"]);
		} else {
			this.project = project;
		}
	}
}
