import { Component } from '@angular/core';
import { faFacebookF, faGithub, faGoogle, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  faFacebook = faFacebookF;
  faTwitter = faTwitter;
  faGoogle = faGoogle;
  faInstagram = faInstagram;
  faLinkedin = faLinkedinIn;
  faGithub = faGithub;
}