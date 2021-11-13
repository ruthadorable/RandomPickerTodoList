import { variable } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { takeLast } from 'rxjs-compat/operator/takeLast';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'My Awesome Random Picker Application ';
  list: any[]=[];
  somresult:any='';

addTask(item:String)
  {
    this.list.push({id:this.list.length,name:item});
    item = "";
  }
  random()
  {
    
    let x =Math.floor(Math.random() * this.list.length);
    this.list=this.list.filter(item=>item.id==x) ;
    this.somresult=this.list;

  }
 
  clear(id:number)
  {
    this.list=this.list.filter(item=>item.id!==id);
  }
}
