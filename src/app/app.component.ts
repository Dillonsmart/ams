import { Component } from '@angular/core';
import { TokenService } from './shared/services/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ams';

  constructor(private tokenService: TokenService, private router: Router) {}

  ngOnInit()
  {
    if(!this.tokenService.getToken()) {
      return this.router.navigateByUrl('login');
    }
  }

}
