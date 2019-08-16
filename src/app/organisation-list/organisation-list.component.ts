import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {MatDialog} from '@angular/material';
import { DialogHtmComponent } from '../dialog-htm/dialog-htm.component';
// import { Org } from '../../assets/org.json';

@Component({
  selector: 'app-organisation-list',
  templateUrl: './organisation-list.component.html',
  styleUrls: ['./organisation-list.component.css']
})
export class OrganisationListComponent {

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
      'userid': '1234',
      'username': 'abcd',
      'title': 'aaa'
    }

  ]

  // userid;
  // username;
  // title;
  // obj;

  // constructor(private httpService: HttpClient) { }
  // arrOrg: string[];
  // isOrgExist: boolean = false;
  // User: Users
  // User = new Users('ID','Name','Title');

  // ngOnInit() {
  //   this.httpService.get('./assets/org.json').subscribe(
  //     data => {
  //       this.arrOrg = data as string[];	 // FILL THE ARRAY WITH DATA.
  //       console.log(this.arrOrg[0]);
  //       if (this.arrOrg.length > 0) {
  //         console.log("aaa");
  //         this.isOrgExist = true;
  //       }
  //     },
  //     (err: HttpErrorResponse) => {
  //       console.log(err.message);
  //     }
  //   );
  // }

//   SaveUser() {
//     // user details
//     this.obj = {
//       userid: this.userid,
//       username: this.username,
//       title: this.title
//     }
//     console.log('before updating the data', this.data)
//     // this.updateData(this.obj)
//     this.data.push(this.obj)
//     console.log('after updating the data', this.data)
//   }
//   // updateData(datas) {
//   //   console.log('after updating the data', this.data)
//   //   this.data.unshift(datas)
//   // }
 }
