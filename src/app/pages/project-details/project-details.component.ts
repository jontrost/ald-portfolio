import { Component, type OnInit, computed, inject, signal } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { PROJECTS } from "../../constants/project.constants";
import type { Project } from "../../models/project.model";
import { IconComponent } from "../../components/icon/icon.component";

@Component({
	selector: "ald-project-details",
	imports: [IconComponent, RouterModule],
	templateUrl: "./project-details.component.html",
	styleUrl: "./project-details.component.scss"
})
export class ProjectDetailsComponent implements OnInit {
	readonly route = inject(ActivatedRoute);
	readonly router = inject(Router);
	currentImageIndex = signal<number>(0);
	// currentImage = computed(() => this.project.images[this.currentImageIndex()]);
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

	selectPreviousImage() {
		this.currentImageIndex.update((currentIndex) =>
			currentIndex - 1 === -1 ? this.project.detailsImagesSrcs.length - 1 : currentIndex - 1
		);
	}

	selectNextImage() {
		this.currentImageIndex.update((currentIndex) =>
			currentIndex + 1 === this.project.detailsImagesSrcs.length ? 0 : currentIndex + 1
		);
	}
}
