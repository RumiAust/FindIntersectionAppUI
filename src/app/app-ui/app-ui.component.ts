import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-app-ui',
  templateUrl: './app-ui.component.html',
  styleUrls: ['./app-ui.component.css']
})
export class AppUiComponent {
  listOne:any;
  listTwo:any;
  hashSetType:string='listOne';
  onSubmit(){
    alert(this.listOne+' ::  '+this.listTwo+" ::  ---"+this.hashSetType);
  }
}
