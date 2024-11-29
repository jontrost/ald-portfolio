import { Component, type OnInit, inject, signal } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { PROJECTS } from "../../constants/project.constants";
import type { Project } from "../../models/project.model";
import { IconComponent } from "../../components/icon/icon.component";
import { NgOptimizedImage } from "@angular/common";

@Component({
	selector: "ald-project-details",
	imports: [IconComponent, NgOptimizedImage, RouterModule],
	templateUrl: "./project-details.component.html",
	styleUrl: "./project-details.component.scss"
})
export class ProjectDetailsComponent implements OnInit {
	readonly route = inject(ActivatedRoute);
	readonly router = inject(Router);
	currentImageIndex = signal<number>(0);
	project: Project;

	ngOnInit() {
		const { projectName } = this.route.snapshot.params;
		// biome-ignore lint/style/noNonNullAssertion: Route guard ensures this will always be found
		this.project = PROJECTS.find((project) => project.route === projectName)!;
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
