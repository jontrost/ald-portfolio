import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "ald-root",
    imports: [RouterOutlet],
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    title = "Amanda Lee Design";
}
