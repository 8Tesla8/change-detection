import { Component, DoCheck,
  ChangeDetectionStrategy,
  ChangeDetectorRef
 } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements DoCheck {
  public user = new User();

  constructor(private cd: ChangeDetectorRef) {
  }

  ngDoCheck(): void {
    console.log(" MainComponent");
  }


  public changeNameBySetTimeout(): void {
    setTimeout( () => {
      console.log("setTimeout name: " + (this.user.name += "+"));
    }, 1000 );
  }

  public changeNameBySetTimeoutWithChangeDetectorRef(): void {
    setTimeout( () => {
      console.log("setTimeout name with ChangeDetectorRef: " + 
        (this.user.name += "+"));
      this.cd.markForCheck();
    }, 1000 );
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
    console.log("new object with name: " + this.user.name);
  }

  public createNewUserAndChangeSurname(): void {
    this.user = {
      name: this.user.name,
      surname: this.user.surname += "="
    };

    console.log("");
    console.log("new object with  surname: " + this.user.surname);
  }
}

export class User {
  name = "";
  surname = "";
}
