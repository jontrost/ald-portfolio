import { Component } from "@angular/core";
import { ProjectCarouselComponent } from "../../components/project-carousel/project-carousel.component";

@Component({
	selector: "ald-landing",
	standalone: true,
	imports: [ProjectCarouselComponent],
	templateUrl: "./landing.component.html",
	styleUrl: "./landing.component.scss",
})
export class LandingComponent {}
