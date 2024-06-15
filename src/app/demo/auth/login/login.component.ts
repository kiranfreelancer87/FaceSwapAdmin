import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  loader: boolean = false
  

  constructor(private fb: FormBuilder, private router: Router, 
    private toastr: ToastrService) {
    
  }

  onSubmit() {
  
    this.loader = true;
      this.router.navigate(['/', 'dashboard', 'analytics']);
      this.loader = false
  }
}
