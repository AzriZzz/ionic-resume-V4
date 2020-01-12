import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-occupation",
  templateUrl: "./occupation.page.html",
  styleUrls: ["./occupation.page.scss"]
})
export class OccupationPage implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    if (this.route.snapshot.data["object"]) {
      this.data = this.route.snapshot.data["object"];
    }
  }
}
