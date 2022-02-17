import { Component } from '@angular/core';

import{HttpClient}from'@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
   x:string=""
   ab:any
   constructor(private http:HttpClient){}
   /*send(y:string)
   {
     this.http.get('http://localhost:8080/Evaluate/calculator',{
       responseType:'text',
       params:{
         Expression:y
       },
      observe:'response'
     }).subscribe(response=>{
       this.ab=response.body
       console.log(this.ab);
     })
   }*/
   ///////////////////////////////////
   /*
   send(y:string)
   {
     this.http.get('http://localhost:8080/Evaluate/calculator',{
       responseType:'text',
       params:{
         Expression:y
       }
      })
   }*/
   ///////////////////////////////////
   
   url = 'https://jsonplaceholder.typicode.com/posts';
  data:any;
  items:any=[];
  //////////////////////////////////////////
 
   send2()
   {
    this.http.get(this.url,{
      responseType:'text',
      observe:'response'
    }).subscribe(response=>{
      this.data=response.body
      console.log(this.data);
      const obj=JSON.parse(this.data);
      for(let key in obj)
      {
        this.items.push(obj[key]);
      }
    })
   }
   /////////////////////////////////////

  display(y:string)
 {
 
   if(y=='CE'||y=='C')
   {
     this.x="";
   }
   else if(y=='DEL')
   {
     this.x=this.x.slice(0,-1);
   }
   else if(y=="1/x")
   {
     this.x="1/";
   }
   else if(y=='%')
   {
     this.x+="/100"
   }
   else if(y=='+')
   {
     this.x+='+';
   }
   else if(y=="-/+")
   {
     this.x+='-'
   }
   else{
  this.x=this.x+y;
   }
  
  }
  
  display2(y:string)
  {
    this.x=this.x+y;
    //this.send(this.x);
    this.send2();
  }

}
