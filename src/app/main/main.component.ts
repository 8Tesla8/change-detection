import { Component, DoCheck } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements DoCheck {
  public user = new User();

  constructor() {}

  ngDoCheck(): void {
    console.log(" MainComponent");
  }

  public changeName(): void {
    this.user.name += "+";

    console.log("");
    console.log("name: " + this.user.name);
  }

  public changeSurname(): void {
    this.user.surname += "=";

    console.log("");
    console.log("surname: " + this.user.surname);
  }


  public createNewUserAndChangeName(): void {
    this.user = {
      name: this.user.name += "+",
      surname: this.user.surname
    };

    console.log(""); 
    console.log("name: " + this.user.name);
  }

  public createNewUserAndChangeSurname(): void {
    this.user = {
      name: this.user.name,
      surname: this.user.surname += "="
    };

    console.log("");
    console.log("surname: " + this.user.surname);
  }
}

export class User {
  name = "";
  surname = "";
}
