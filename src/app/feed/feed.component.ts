import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
declare var require: any;

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit{
  title = 'bloomberg-feed';
  newData:any;

  constructor(private apiService:GetDataService){}

  ngOnInit() {
    var convert = require('xml-js');
    this.apiService.getData().subscribe(res => {
      this.newData=res;
      var parsedXML = convert.xml2json(res, {compact: true, spaces: 4});
      this.newData=JSON.parse(parsedXML);
    });
  }
}
