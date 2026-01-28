import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GoogleLogin } from '../google-login/google-login';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FbLogin } from '../facebook-login/fb-login';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'welcome',
  imports: [RouterLink,GoogleLogin,FbLogin, FontAwesomeModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Welcome {
loggedGoogle(resp: google.accounts.id.CredentialResponse) {
    // Envia esto tu API
    console.log(resp.credential);
  }
  iconFacebook = faFacebook;
  //...
  loggedFacebook(resp: fb.StatusResponse) {
    // Envía esto a tu API
    console.log(resp.authResponse.accessToken);
  }

  showError(error: any) {
    console.error(error);
  }
}
