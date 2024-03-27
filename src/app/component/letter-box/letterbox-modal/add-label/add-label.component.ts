import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-label',
  templateUrl: './add-label.component.html',
  styleUrls: ['./add-label.component.scss']
})
export class AddLabelComponent {


  public loginForm: FormGroup;

  constructor(public activeModal: NgbActiveModal) { }

  public myGroup = new FormGroup({
    email: new FormControl(),
    color: new FormControl()

  });

}
