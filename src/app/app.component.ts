import { Component } from "@angular/core";
import { RawgService } from "./rawg.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private rawgService: RawgService) {
    console.log("this.rawgService: ", this.rawgService);
  }
}
