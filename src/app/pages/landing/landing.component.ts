import { NgOptimizedImage } from "@angular/common";
import { Component, inject, type OnInit, signal } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { PROJECTS } from "../../constants/project.constants";
import type { Project } from "../../models/project.model";

@Component({
    selector: "ald-landing",
    imports: [NgOptimizedImage, RouterModule],
    templateUrl: "./landing.component.html",
    styleUrl: "./landing.component.scss"
})
export class LandingComponent implements OnInit {
    private readonly router = inject(Router);
    readonly projects: Project[] = PROJECTS;
    selectedProjectPreviewIndex = signal<number>(0);

    selectProjectPreview(index: number) {
        this.selectedProjectPreviewIndex.set(index);
    }

    ngOnInit() {
        const previousProjectIndex = this.projects.findIndex(
            (project) => project.route === this.router.lastSuccessfulNavigation()?.extras.state?.previousProject
        );
        this.selectProjectPreview(previousProjectIndex === -1 ? 0 : previousProjectIndex);
    }
}
