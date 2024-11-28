import { Component, signal } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PROJECTS } from "../../constants/project.constants";
import type { Project } from "../../models/project.model";
import { NgOptimizedImage } from "@angular/common";

@Component({
	selector: "ald-landing",
	imports: [NgOptimizedImage, RouterModule],
	templateUrl: "./landing.component.html",
	styleUrl: "./landing.component.scss"
})
export class LandingComponent {
	readonly projects: Project[] = PROJECTS;
	selectedProjectPreviewIndex = signal<number>(0);

	selectProjectPreview(index: number) {
		this.selectedProjectPreviewIndex.set(index);
	}
}
