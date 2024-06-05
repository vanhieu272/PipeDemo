import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DatePipe, UpperCasePipe} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  // providers: [DatePipe]
})
export class AppComponent {

  title = 'Demo Pipes';
  birthday = new Date(1988, 3, 15, 7 ,30);
  formattedBirthday: string | null;

  constructor(private datePipe : DatePipe) {
    this.formattedBirthday = this.datePipe.transform(this.birthday, 'MM/dd/yy HH:mm', 'GMT-7');
  }

}
