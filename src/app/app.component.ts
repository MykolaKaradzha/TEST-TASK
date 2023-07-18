import { Component } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';

export enum PasswordStrength {
  NONE = 'none',
  VERY_WEAK = 'very weak',
  WEAK = 'weak',
  MEDIUM = 'medium',
  STRONG = 'strong'
}

const passwordRegexes = {
  WEAK: /^(?:[a-zA-Z]+|\d+|[^a-zA-Z\d\s]+)$/,
  MEDIUM: /^([a-zA-Z!@#$%^&*(),.?":{}|<>[\]\\/]+|[a-zA-Z0-9]+|[\d!@#$%^&*(),.?":{}|<>[\]\\/]+)$/,
  STRONG: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).*$/
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  passwordValue: string = '';
  currentPasswordStrength: PasswordStrength = PasswordStrength.NONE;
  isNotificationOpen: boolean = true
  faLock = faLock;

  closeNotification() {
    this.isNotificationOpen = false;
  }

  checkPasswordStrength() {
    if (this.passwordValue.length < 8) {
      this.currentPasswordStrength = PasswordStrength.VERY_WEAK;
      return;
    }

    for (const strength  in passwordRegexes) {
      if (passwordRegexes[strength as keyof typeof passwordRegexes].test(this.passwordValue)) {
        this.currentPasswordStrength = PasswordStrength[strength as keyof typeof PasswordStrength];
        return;
      }
    }
  }

  onSubmit() {
    this.passwordValue = '';
    this.currentPasswordStrength = PasswordStrength.NONE;
  }
}
