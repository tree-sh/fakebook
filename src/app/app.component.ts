import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fakebook';

  constructor(
    private http: HttpClient
  ){

  }

  ngOnInit(){
    this.http.get('https://lnuczb89d1.execute-api.us-east-1.amazonaws.com/default/SampleNodeFunction').subscribe((res) => {
      console.log(res);
    })
  }
}
