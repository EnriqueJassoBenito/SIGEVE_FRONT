import { Component } from '@angular/core';
import {UserSigning} from "../../types/user";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {LoginStateService} from "../../../../services/login-state.service";
import {GeneralService} from "../../../../services/general.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: UserSigning = {
    name: '',
    email: '',
    password: '',
  };

  hide = true;

  constructor(private authService:AuthService, private generalService: GeneralService) {
  }
  SingingForm(){
    this.generalService.showConfirmAlert('¿Está seguro de registrarse?', 'Registrarse')
      .then((result) => {
        if (result.isConfirmed) {
          this.generalService.showLoading();
          this.authService
            .register(this.user).subscribe((response) => {
              Swal.close();
              if (response.error) {
                this.generalService.showError(
                  response.error.message
                );
                return;
              }
              Swal.close();
              this.generalService.showSnackBar(
                'Se registró exitosamente, por favor para iniciar sesión confirme su correo electronico'
              );
            })

        }
      })
  }
}
