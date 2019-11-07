import { Component, OnInit } from '@angular/core';
import { User } from '../_model/user.model';
import { UserService } from '../_services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class UserModel {
  currentUser: User;

  constructor() { this.currentUser = new User(null); }
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  public model: UserModel;
  public form: FormGroup;

  ngOnInit() {
    this.model = new UserModel();
    this.userService.updateCurrentUser(this.model);
    this.form = this.formBuilder.group({
      email: [null, [Validators.email]]
    });
  }

  submitUserChanges(){
    if (this.form.valid){
      this.userService.submitUserChanges(this.model);
    } else {
      console.log('Nicht gut');
    }
  }

}
