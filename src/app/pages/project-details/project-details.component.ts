import { NgOptimizedImage } from "@angular/common";
import { Component, type ElementRef, type OnInit, ViewChild, inject, signal } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { IconComponent } from "../../components/icon/icon.component";
import { PROJECTS } from "../../constants/project.constants";
import type { Project } from "../../models/project.model";

@Component({
	selector: "ald-project-details",
	imports: [IconComponent, NgOptimizedImage, RouterModule],
	templateUrl: "./project-details.component.html",
	styleUrl: "./project-details.component.scss"
})
export class ProjectDetailsComponent implements OnInit {
	@ViewChild("projectImages") projectImages: ElementRef<HTMLImageElement>;
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
			currentIndex - 1 === -1 ? this.project.detailsImages.length - 1 : currentIndex - 1
		);
	}

	selectNextImage() {
		this.currentImageIndex.update((currentIndex) =>
			currentIndex + 1 === this.project.detailsImages.length ? 0 : currentIndex + 1
		);
	}

	renderImageFullscreen() {
		this.projectImages.nativeElement.requestFullscreen();
	}
}
