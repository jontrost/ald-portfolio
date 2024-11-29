import type { Routes } from "@angular/router";
import { projectDetailsGuard } from "./guards/project-details.guard";
import { LandingComponent } from "./pages/landing/landing.component";
import { ProjectDetailsComponent } from "./pages/project-details/project-details.component";

export const routes: Routes = [
	{
		path: "project/:projectName",
		canActivate: [projectDetailsGuard],
		component: ProjectDetailsComponent
	},
	{
		path: "**",
		component: LandingComponent
	}
];
