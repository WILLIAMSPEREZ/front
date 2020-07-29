import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-captura',
  templateUrl: './captura.component.html',
  styleUrls: ['./captura.component.css']
})
export class CapturaComponent implements OnInit {
  https: any;

  constructor() { }
  ngOnInit(){}

  leerArchivo(){
  this.https.get('./captura/state').subscribe(data => {
    console.log(data.text());
   });

  }
}
