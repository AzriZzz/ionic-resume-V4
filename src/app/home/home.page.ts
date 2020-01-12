import { Component , OnInit} from '@angular/core';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  personalInfo: any

  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    this.personalInfo = {
      NAME: 'Muhammad Azri',
      OCCUPATION: 'Software Engineer',
      COMPANY: 'Accenture Newspage',
      EXPERIENCE: '3 Years'
    }
    console.log(this.personalInfo);
  }

  experience(){
    this.navCtrl.navigateForward("/experience");
  }

}
