import { Component, OnInit } from "@angular/core";
import { NavigationExtras } from "@angular/router";
import { Router } from "@angular/router";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.page.html",
  styleUrls: ["./experience.page.scss"]
})
export class ExperiencePage implements OnInit {
  experience = [];

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.experience = [
      {
        ID: 1,
        Company: "Accenture",
        Image:
          "https://cdn.techinasia.com/data/images/MkYtZebRBJWIBXeXobBm6kXnjtOsVUHd6SmoXy7r.png",
        Position: "Software Engineer",
        JobDescription: "Handled project for Replatform",
        Year: "2019-Present"
      },
      {
        ID: 2,
        Company: "Lion & Lion Digital Agency",
        Image:
          "https://sortlist.gumlet.com/sortlist-core-api/9oF4LbZeP54q5mtaEp23iP9B",
        Position: "Frontend Developer",
        JobDescription: "Working as artisan for creating website",
        Year: "2018-2019"
      },
      {
        ID: 3,
        Company: "Fiction Labs Sdn Bhd",
        Image:
          "https://s3-ap-southeast-1.amazonaws.com/wobb-app/uploads/company-logo/company_logo_image/9c875261-d23f-4153-8f59-48e3cb4dc397/fiction-labs-1557727472.png",
        Position: "Application Developer",
        JobDescription: "Developing a smart dashboard for client",
        Year: "2017-2018"
      }
    ];

    console.log(this.experience);
  }

  goExperience(event) {
    console.log(event);
    this.dataService.setData(event.ID, event);
    this.router.navigateByUrl(`/occupation/${event.ID}`);
  }
}
