import { Component, OnInit } from '@angular/core';
import { GetDataService } from './get-data.service';
declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bloomberg-front-end-test';
  newData:any;

  constructor(private apiService:GetDataService){
  }

  ngOnInit() {
    var convert = require('xml-js');
    this.apiService.getData().subscribe(res => {
      this.newData=res;
      var parsedXML = convert.xml2json(res, {compact: true, spaces: 4});
      this.newData=JSON.parse(parsedXML);
      console.log("data NUEVA", parsedXML);
    });
  }
}
