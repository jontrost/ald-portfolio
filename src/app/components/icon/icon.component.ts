import { Component, Input, type OnInit } from "@angular/core";
import type { Icon } from "../../types/icon.type";

@Component({
    selector: "ald-icon",
    imports: [],
    templateUrl: "./icon.component.html",
    styleUrl: "./icon.component.scss"
})
export class IconComponent implements OnInit {
    @Input({ required: true }) icon: Icon;
    link: string;

    ngOnInit(): void {
        this.link = `assets/icons/${this.icon}.svg#${this.icon}`;
    }
}
