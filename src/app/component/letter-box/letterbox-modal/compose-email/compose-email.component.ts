import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-compose-email',
  templateUrl: './compose-email.component.html',
  styleUrls: ['./compose-email.component.scss']
})
export class ComposeEmailComponent {

  public isShow : boolean = false;
  public isShow1 : boolean = false;

  public htmlContent = '';
  
  public loginForm: FormGroup;

  constructor(public activeModal: NgbActiveModal) { }


  myGroup = new FormGroup({
    email: new FormControl()
 });

}
