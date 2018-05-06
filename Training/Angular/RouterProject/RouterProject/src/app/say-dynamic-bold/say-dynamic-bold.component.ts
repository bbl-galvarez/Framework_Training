import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-say-dynamic-bold',
  templateUrl: './say-dynamic-bold.component.html',
  styleUrls: ['./say-dynamic-bold.component.css']
})
export class SayDynamicBoldComponent implements OnInit {

  public paramvalue = "";

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(dataparams =>{this.paramvalue = dataparams.params});
  }

}
