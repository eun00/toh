import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero';
import {HEROES} from '../mock-herose';

@Component({
  selector: 'app-herose',
  templateUrl: './herose.component.html',
  styleUrls: ['./herose.component.css']
})
export class HeroseComponent implements OnInit {
hero:Hero = {
  id:1,
  name:"Windstorm"
}
  isSpecial = true;
  herose  = HEROES;

  onSave(e:any){
    console.log(e);
    this.isSpecial = !this.isSpecial;
  }

  constructor() {
    //window['hero']  = this.hero;
  }

  ngOnInit() {
  }

}
