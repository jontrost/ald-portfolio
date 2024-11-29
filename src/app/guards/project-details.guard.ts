import { inject } from "@angular/core";
import { type CanActivateFn, Router } from "@angular/router";
import { PROJECTS } from "../constants/project.constants";

export const projectDetailsGuard: CanActivateFn = (route, _state) => {
	const { projectName } = route.params;
	const project = PROJECTS.find((project) => project.route === projectName);
	return project != null ? true : inject(Router).createUrlTree(["/"]);
};
