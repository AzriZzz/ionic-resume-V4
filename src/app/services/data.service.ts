import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private data = [];

  constructor() {}

  setData(id, data) {
    this.data[id] = data;
    console.log("Inside service :", this.data);
  }

  getData(id) {
    return this.data[id];
  }
}
