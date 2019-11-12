import { User } from './user.model';

export class Post{
  id: number;
  postText: string;
  created: Date;
  createdBy: User;
}
