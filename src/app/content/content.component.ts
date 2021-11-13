import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  date=new Date(Date.now()).toLocaleString();
  variable="Bonjour , nous sommes le ";
  
  constructor() { }

  ngOnInit(): void {
  }

}
