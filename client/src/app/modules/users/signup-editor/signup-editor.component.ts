import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/users/user.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { isNullOrUndefined } from "util";
import { environment } from "src/environments/environment";
import * as CryptoJS from "crypto-js";

@Component({
  selector: "app-signup-editor",
  templateUrl: "./signup-editor.component.html",
  styleUrls: ["./signup-editor.component.css"]
})
export class SignupEditorComponent implements OnInit {
  constructor(private user: UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.SignUPForm = this.CreatorForm();
    this.size = document.querySelector(".fo").clientWidth;
  }

  ngDoCheck() {
    let divcaptcha = document.querySelector("#recaptcha");
    if (isNullOrUndefined(divcaptcha)) {
      divcaptcha = document.querySelector("#g-recaptcha");
    }

    let sizeA = document.querySelector(".fo").clientWidth;
    if (sizeA < this.size) {
      divcaptcha.id = "g-recaptcha";
    } else {
      divcaptcha.id = "recaptcha";
    }
  }

  size = 0;
  key = environment.captchakey;
  captcha = false;

  SignUPForm: FormGroup;

  CreatorForm(): FormGroup;

  CreatorForm(): FormGroup {
    return this.formBuilder.group({
      name: ["", Validators.required],
      secondname: [""],
      lastname: ["", Validators.required],
      secondlastname: [""],
      country: ["", Validators.required],
      phone: [null, Validators.required],
      afiliation: ["", Validators.required],
      formation: ["", Validators.required],
      password: ["", Validators.required],
      re_pass: ["", Validators.required],
      email: ["", Validators.required],
      recaptcha: ["", Validators.required]
    });
  }

  public get name() {
    return this.SignUPForm.get("name");
  }

  public get secondname() {
    return this.SignUPForm.get("secondname");
  }

  public get lastname() {
    return this.SignUPForm.get("lastname");
  }

  public get secondlastname() {
    return this.SignUPForm.get("secondlastname");
  }

  public get country() {
    return this.SignUPForm.get("country");
  }

  public get phone() {
    return this.SignUPForm.get("phone");
  }

  public get afiliation() {
    return this.SignUPForm.get("afiliation");
  }

  public get formation() {
    return this.SignUPForm.get("formation");
  }

  public get password() {
    return this.SignUPForm.get("password");
  }

  public get re_pass() {
    return this.SignUPForm.get("re_pass");
  }

  public get email() {
    return this.SignUPForm.get("email");
  }

  Ofus(data) {
    var hashed = CryptoJS.SHA256(data);
    var result = hashed.toString(CryptoJS.enc.Base64);
    return result;
  }

  SetFormation(Formation) {
    console.log(Formation);
    this.SignUPForm.patchValue({ formation: Formation });
  }

  SignUp() {
    let password = this.Ofus(this.password.value);
    this.user
      .Register(
        this.name.value,
        this.secondname.value,
        this.lastname.value,
        this.secondlastname.value,
        this.country.value,
        this.phone.value,
        this.afiliation.value,
        this.formation.value,
        this.email.value,
        password,
        3,
        false
      )
      .subscribe(user => {
        alert(`The user ${user.name} ${user.lastname} has been registered!`);
      });
  }

  ReCaptcha() {
    this.captcha = !this.captcha;
  }

  NoCaptcha() {
    this.captcha = !this.captcha;
  }

  Evaluate() {
    return (
      this.name.valid &&
      this.secondname.valid &&
      this.lastname.valid &&
      this.secondlastname.valid &&
      this.country.valid &&
      this.phone.valid &&
      this.afiliation.valid &&
      this.formation.valid &&
      this.email.valid &&
      this.password.valid &&
      this.re_pass.valid &&
      this.password.value == this.re_pass.value
    );
  }
}
