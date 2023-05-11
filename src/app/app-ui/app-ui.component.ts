import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FindIntersectService } from '../service/find-intersect.service';

@Component({
  selector: 'app-app-ui',
  templateUrl: './app-ui.component.html',
  styleUrls: ['./app-ui.component.css']
})
export class AppUiComponent {

  constructor(private findIntersectionService: FindIntersectService) {
  }

  
   
  listOne:any;
  listTwo:any;
  hashSetType:string='listOne';
  data: any[] | undefined;
  timeInMillSec:any;
  intersectionResult:any;
  showResult:boolean=false;

  onSubmit(){
      this.findIntersectionService.getResult(this.listOne,this.listTwo,this.hashSetType).subscribe((response) => {
      this.data = response;
      this.intersectionResult=response.intersectionList;
      this,this.timeInMillSec=response.timeInMillSec;
      this.showResult=true;

    });
  }
  reset():void{
    this.listOne='';
    this.listTwo='';
    this.hashSetType='listOne';
    this.showResult=false;
  }
}
