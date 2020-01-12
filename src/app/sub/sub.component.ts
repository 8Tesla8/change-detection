import {
  Component,
  Input,
  DoCheck,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";
import { User } from "../main/main.component";

@Component({
  selector: "app-sub",
  templateUrl: "./sub.component.html",
  styleUrls: ["./sub.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubComponent implements DoCheck {
  @Input()
  public user: User;

  private _previousName: string;

  constructor(private cd: ChangeDetectorRef) {}

  ngDoCheck(): void {
    console.log("  SubComponent");

    if (this._previousName !== this.user.name) {
      this._previousName = this.user.name;
      this.cd.markForCheck();    
    }
  }
}
