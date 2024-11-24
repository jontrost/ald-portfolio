import type { Routes } from "@angular/router";
import { LandingComponent } from "./pages/landing/landing.component";
import { ProjectDetailsComponent } from "./pages/project-details/project-details.component";

export const routes: Routes = [
	{ path: "project/:projectName", component: ProjectDetailsComponent },
	{ path: "**", component: LandingComponent }
];
