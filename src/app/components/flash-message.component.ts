import {Component} from "@angular/core";
import {Router} from '@angular/router';

@Component({
    selector: 'flash-message',
    template:`
        <div class="ui grid">
        <div class='four wide column'></div>
        <div class='eight wide column'>          
          <div class="ui message red">
              <h2><i class="github icon"></i></h2>           
              <h3>Wow! you're seeing a sample disclaimer!!</h3>
              
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, dignissimos.
               Deleniti blanditiis quia perspiciatis, natus dolorum quisquam voluptates officiis 
               magni rem nesciunt enim vero amet eaque? Laudantium soluta, explicabo <voluptas class="lorem">
               </voluptas>
              </p>
          </div>

          <button class="ui primary button" (click)="forwardToProfile()" type="button">
            Continue to Profile
          </button>            
          
  </div>
  <div class='four wide column'></div>
</div>
    `
})
export class FlashMessage {

  constructor(private _router: Router) {}

  private forwardToProfile(): void {    
    this._router.navigate(['/profile']);
  }

}