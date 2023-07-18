import { Component } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';

export enum PasswordStrength {
  NONE = 'none',
  VERY_WEAK = 'very weak',
  WEAK = 'weak',
  MEDIUM = 'medium',
  STRONG = 'strong'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  passwordValue: string = '';
  currentPasswordStrength: PasswordStrength = PasswordStrength.NONE;
  faLock = faLock;

  checkPasswordStrength(event: Event) {
    console.log(this.passwordValue);
    const weakPassword = new RegExp(/^(?:[a-zA-Z]+|\d+|[^a-zA-Z\d\s]+)$/);
    const mediumPassword = new RegExp(/^([a-zA-Z!@#$%^&*(),.?":{}|<>[\]\\/]+|[a-zA-Z0-9]+|[\d!@#$%^&*(),.?":{}|<>[\]\\/]+)$/);
    const strongPassword = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).*$/);

    switch (true) {
      case (this.passwordValue.length < 8) && this.passwordValue !== 'none':
        this.currentPasswordStrength = PasswordStrength.VERY_WEAK;
        break;
      case weakPassword.test(this.passwordValue):
        this.currentPasswordStrength = PasswordStrength.WEAK;
        break;
      case mediumPassword.test(this.passwordValue):
        this.currentPasswordStrength = PasswordStrength.MEDIUM;
        break;
      case strongPassword.test(this.passwordValue):
        this.currentPasswordStrength = PasswordStrength.STRONG;
        break;
      default:
        return;
    }
  }

  onSubmit() {
    this.passwordValue = '';
    this.currentPasswordStrength = PasswordStrength.NONE;
  }
}
