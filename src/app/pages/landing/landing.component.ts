import { Component } from "@angular/core";
import { ProjectCarouselComponent } from "../../components/project-carousel/project-carousel.component";

@Component({
    selector: "ald-landing",
    imports: [ProjectCarouselComponent],
    templateUrl: "./landing.component.html",
    styleUrl: "./landing.component.scss"
})
export class LandingComponent {}
