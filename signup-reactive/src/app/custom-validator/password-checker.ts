import { FormGroup } from '@angular/forms';

export function PasswordChecker(
  controlName: string, 
  compareControlName: string
  ) {
    return (formGroup: FormGroup) => {
      const password = formGroup.controls[controlName];
      const confirmPassword = formGroup.controls[compareControlName];

      if (password.value !== confirmPassword.value) {
        return confirmPassword.setErrors({ mustMatch: true })
      } else {
        return confirmPassword.setErrors(null);
      }
    } 
}