import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-demo-sku-form',
  templateUrl: './demo-sku-form.component.html',
  styleUrls: ['./demo-sku-form.component.css']
})
export class DemoSkuFormComponent implements OnInit {

  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'sku': ['',Validators.required]
    });

    this.sku = this.myForm.controls['sku'];
  }

  ngOnInit() {
  }

  onSubmit(form: any){
    console.log("Submitted form is: ",form);
  }

}
