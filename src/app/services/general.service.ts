import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {



  constructor(private snackBar: MatSnackBar) { }

  messageError(err: string) {
    switch (err) {
      case "Wrong type":
        return "Review request fields";
      case "Missing fields":
        return "Validate fields";
      case "Inexistent role":
        return "Role not registered";
      case "Nothing found":
        return "No data found";
      case "Password mismatch":
        return "Credentials mismatch";
      case "User disabled":
        return "User disabled";
      case "User not found or not enable":
        return "User not found or not enable"
      case "Gender already exist":
        return "Gender already exist";
      case "Movie already exist":
        return "Movie already exist";
      case "Invalid name":
        return 'Invalid name';
      case "Invalid email":
        return "Invalid email";
      case "Email already in use":
        return "Email already in use";
      default:
        return "Review request";
    }
  }

  showConfirmAlert(message: string, confirmMessage: string = 'Si, cambiar') {
    return Swal.fire({
      title: '¿Estás seguro?',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      showLoaderOnConfirm: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmMessage,
      cancelButtonText: 'Cancelar',
    });
  }

  showError(err: string) {
    Swal.fire({
      title: 'Error',
      text: this.messageError(err),
      icon: 'error',
      confirmButtonText: 'Ok',
    });
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }

  showLoading(message: string = 'Cargando...') {
    Swal.fire({
      title: message,
      text: 'Por favor espere...',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading(Swal.getDenyButton());
      },
    });
  }

}
