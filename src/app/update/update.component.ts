import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiPharmaziService } from '../services/api-pharmazi.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
//   file:any;

//   @ViewChild('UploadFileInput', { static: false }) uploadFileInput?: ElementRef;
//   fileUploadForm: FormGroup;
//   fileInputLabel?: string;

//   constructor(private http: HttpClient, private apiPharmaziService:ApiPharmaziService,private router:Router, private formBuilder: FormBuilder) { }
//   // handleUpload(event:any){
//   //   console.log(event.target.files)
//   //   this.file = event.target.files;
//   // }
//   ngOnInit(): void {
//     this.fileUploadForm = this.formBuilder.group({
//       myfile: ['']
//     });
//   }
//   onFileSelect(event:any) {
    
//     let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
//     if (event.target.files.length > 0) {
//       const file = event.target.files[0];
//       // console.log(file);

//       if (!_.includes(af, file.type)) {
//         alert('Only EXCEL Docs Allowed!');
//       } else {
//         this.fileInputLabel = file.name;
//         if(this.fileUploadForm){this.fileUploadForm!.get('myfile').setValue(file);}
          
        
        
//       }
//     }
//   }

//   onFormSubmit() {

//     if (!this.fileUploadForm!.get('myfile').value) {
//       alert('Please fill valid details!');
//       return false;
//     }

//     const formData = new FormData();
//     formData.append('formFile', this.fileUploadForm!.get('myfile').value);
//     formData.append('agentId', '007');

//     this.http
//     .post<any>('http://localhost:3000/api/pharmazi/uploadfile', formData).subscribe(response => {
//       console.log(response);
//       if (response.statusCode === 200) {
//         // Reset the file input
//         this.uploadFileInput!.nativeElement.value = "";
//         this.fileInputLabel = undefined;
//       }
//     }, error => {
//       console.log(error);
//     });
// }

/*------------------------------------------
  --------------------------------------------
  Declare Form
  --------------------------------------------
  --------------------------------------------*/
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
   
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.'+Error);
  }
   
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.myForm.controls;
  }
   
  /**
   * Write code on Method
   *
   * @return response()
   */
  onFileChange(event:any) {
   
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  } 
   
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    const formData = new FormData();
    formData.append('uploadfile', this.myForm.get('fileSource')?.value);
      
    this.http.post('http://localhost:3000/api/pharmazi/uploadfile', formData ,{responseType: 'text'})
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }
}
