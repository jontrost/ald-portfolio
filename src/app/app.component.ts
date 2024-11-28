import { CommonModule } from "@angular/common";
import { Component, type OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "ald-root",
	imports: [CommonModule, RouterOutlet],
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	title = "Amanda Lee Design";

	// It's just the grid that doesn't load right away, the rest of the CSS does. Can we get rid of grid and just use flex?
	ngOnInit() {
		/*
            Investigate why this "fixes" the page jump issue on initial load and find a less hacky alternative
		    Should this be done on any route change? Is this even necessary once image sizes are smaller?
		    Refer to: https://angular.dev/guide/animations/route-animations
        */
		setTimeout(() => {
			//dont access doc like this
			document.documentElement.style.visibility = "visible";
		}, 1);
		//  Remove this and the index.html styling hack after debugging
	}
}
