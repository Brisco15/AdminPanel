import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObject: any = {
    userName: '',
    password: ''
  };
  router = inject(Router)

  onLogin(){
    if(this.loginObject.userName === 'admin' && this.loginObject.password === 'admin'){
      alert('Login successful');
      this.router.navigate(['/dashboard']);
    }else{
      alert('Login failed wrong credentials');
    }
  }
}
