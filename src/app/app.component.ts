import { Component } from '@angular/core';
import { faEnvelope, faLock, faCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faEnvelope = faEnvelope;
  faLock = faLock;
  faCheck = faCheck
}
