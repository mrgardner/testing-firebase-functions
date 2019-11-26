import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testing-firebase-functions';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://us-central1-personal-site-be426.cloudfunctions.net/helloWorld').subscribe(res => console.log(res));
  }
}
