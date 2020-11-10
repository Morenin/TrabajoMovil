import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {}
  OnSubmitLogin() {
    this.authService
      .login(this.email, this.password)
      .then((res) => {
        this.router.navigate(["/home"]);
      })
      .catch((err) => alert("Los datos son incorrectos o no existen"));
  }
}
