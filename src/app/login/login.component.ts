import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public Loginform = {
    email: 'null',
    password: 'null',
  }

  div1:boolean = true;
  div2:boolean = false;

  constructor(
    private http:HttpClient,
    private Token: TokenService) { }

  ngOnInit() {
  }

  clickdiv1(){
    this.div1 = true;
    this.div2 = false;
  }
  clickdiv2(){
    this.div1 = false;
    this.div2 = true;
  }

  username:string = '';
  password:string = '';

  onSubmit(){
    this.Loginform.email = this.username;
    this.Loginform.password = this.password;
    return this.http.post('http://localhost:8000/api/login', this.Loginform).subscribe(
      data => this.handleResponse(data)
    )
  }
  handleResponse(data){
    this.Token.handle(data.access_token);
  }

}
