import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }
  form = new FormGroup({
     'name': new FormControl('',[
      
         Validators.required,
         Validators.minLength(3)
    
      ]),
     'email': new FormControl('',[
       
      Validators.required,
      Validators.pattern("^[_a-z0-9-]+(.[a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$")
    ]),
     'message': new FormControl('',[
    
          Validators.required,
          Validators.maxLength(150)

      ])
  });

  get name(){ return this.form.get('name'); }
  get email(){ return this.form.get('email');}
  get message(){ return this.form.get('message');}

  ngOnInit() {
  }
  //Validacija da li su sva polja popunjena ispravno
  validateAllFormFields(formGroup: FormGroup) {         
  Object.keys(formGroup.controls).forEach(field => { 
    const control = formGroup.get(field);             
    if (control instanceof FormControl) {           
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {       
      this.validateAllFormFields(control);           
    }
  });
}
//Prilikom submita se proverava da li su popunjena polja ako nisu baca gresku
  onSubmit(){
    if(this.form.valid){
      console.log('Form submited');
      this.form.reset();
      
    } else{
      this.validateAllFormFields(this.form);
    }
  }

}
