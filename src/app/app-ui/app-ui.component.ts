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

  onSubmit(){
    console.log(this.listOne+' :: '+this.listTwo+" :: "+this.hashSetType);
    this.findIntersectionService.getResult(this.listOne,this.listTwo,this.hashSetType).subscribe((response) => {
      this.data = response;
      console.warn('Response', this.data);
    });
  }
}
