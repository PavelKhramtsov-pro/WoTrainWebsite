import { Component , OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  response: any;
  constructor(private http: HttpClient) {
  }
  ngOnInit(){
    this.http.get('http://localhost:8080/angular')
      .subscribe((response) => {
        this.response = response;
      });
  }

}
