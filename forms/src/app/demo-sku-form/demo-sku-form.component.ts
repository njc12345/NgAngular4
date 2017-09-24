import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo-sku-form',
  templateUrl: './demo-sku-form.component.html',
  styleUrls: ['./demo-sku-form.component.css']
})
export class DemoSkuFormComponent implements OnInit {

  myForm: FormGroup;
  sku: AbstractControl;
  productName: string;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'sku': ['',Validators.compose([Validators.required, skuValidator])],
      'productName': ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe((value: string) => {
      console.log('sku changed to: ', value);
    });

    this.myForm.valueChanges.subscribe((form: any)=>{
      console.log('form changed to: ',form);
    });
  }

  ngOnInit() {
  }

  onSubmit(form: any){
    console.log("Submitted form is: ",form);
  }
}

function skuValidator(control: FormControl): {[s: string]: boolean}{
  if(!control.value.match(/^123/)){
    return {invalidSku: true};
  }
}
