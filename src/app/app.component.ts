import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Service } from './service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

export class LoginComponent implements OnInit {
  constructor( private service : Service ) { }

ngOnInit(){
  this.getData()
}
getData() {
  this.service.getJSON().subscribe(data => {
    console.log(data);
});
}
}