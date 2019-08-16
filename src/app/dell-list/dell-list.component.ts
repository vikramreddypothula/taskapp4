import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {MatDialog} from '@angular/material';
import { DialogHtmComponent } from '../dialog-htm/dialog-htm.component';

@Component({
  selector: 'app-dell-list',
  templateUrl: './dell-list.component.html',
  styleUrls: ['./dell-list.component.css']
})
export class DellListComponent  {

  

  constructor(public dialog:MatDialog){}

  openDialog():void{
   let dialogRef= this.dialog.open(DialogHtmComponent,{
  
    height: '350px',
    width: '350px',
   });
  
   dialogRef.afterClosed().subscribe(result=>{
     console.log("The Dialog was closed ")
     console.log(result);
  
   })
  
  
  }
  
  
  
  
  
    // main json data
    data = [
      {
        'userid': '963',
        'username': 'vikram',
        'title': 'Dev'
      }
  
    ]

}
