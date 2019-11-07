import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../_model/user.model';
import { UserModel } from '../user/user.component';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  updateCurrentUser(model: UserModel) {
    this.http.get<any>('http://localhost/yeasm-be/public/api/current_user').subscribe(
      data  => {
        model.currentUser = new User(data.user);
        }
    );
  }

  submitUserChanges(model: UserModel){
    const objectToUpdate = Object.assign({}, model.currentUser);
    delete objectToUpdate.id;
    delete objectToUpdate.jointDate;
    const data = {id: model.currentUser.id, attributes: objectToUpdate};
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const self = this;
    this.http.post('http://localhost/yeasm-be/public/api/user', data, config).subscribe(
      responseData  => {

        }
    );
  }
}
