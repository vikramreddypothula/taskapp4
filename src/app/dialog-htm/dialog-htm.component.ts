import { Component, Inject,OnInit} from '@angular/core';

import{MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog-htm',
  templateUrl: './dialog-htm.component.html',
  styleUrls: ['./dialog-htm.component.css']
})
export class DialogHtmComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder ,public dialogRef:MatDialogRef<DialogHtmComponent>, @Inject(MAT_DIALOG_DATA) public data :any ) {

   }

   ngOnInit() {

    this.registerForm = this.formBuilder.group({
userid:['',Validators.required],
username:['',Validators.required],
title:['',Validators.required]

    });

   }
   get f() { return this.registerForm.controls; }

 

   userid;
   username;
   title;
  obj;

  dataobj = [

    {
       'userid': '1234',
      'username': 'abcd',
      'title': 'aaa'
    }

  ]

  onSubmit() {

    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
  }
         // user details
         this.obj = {
          userid: this.userid,
          username: this.username,
           title: this.title,
          
         }
       
        
       console.log('before updating the data', this.dataobj)
        // this.updateData(this.obj)
       this.dataobj.push(this.obj)
      // this.dialogRef.close(this.dataobj.push(this.obj));
       console.log('after updating the data', this.dataobj)
      }

}
