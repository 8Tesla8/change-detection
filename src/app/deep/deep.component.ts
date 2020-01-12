import { Component, DoCheck, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { User } from '../main/main.component';

@Component({
  selector: 'app-deep',
  templateUrl: './deep.component.html',
  styleUrls: ['./deep.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeepComponent implements DoCheck {

  @Input()
  public user: User;
  
  private _previousSurname: string;

  constructor(private cd: ChangeDetectorRef) { }

  ngDoCheck(): void {
    console.log("   DeepComponent");

    if (this._previousSurname !== this.user.surname) {
      this._previousSurname = this.user.surname;
      this.cd.markForCheck();
    }
  }
}
