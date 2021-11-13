import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //imported manually
import { Observable } from 'rxjs';
import { Friend } from './Friend';
@Injectable({
  providedIn: 'root'
})
export class FriendService {  constructor(private myHttp: HttpClient) { }  

getAllFriendsFromSpring() : Observable<Friend[]>{
console.log('getting all the friends from spring');
//the below line is talking to spring's layer 5(controller) -> FriendController
return this.myHttp.get<Friend[]>("http://localhost:8080/friend/getAllFromDB");  }

addFriendToSpring(newFriend: Friend) : Observable<Friend>{
  console.log('adding friend to spring');
//the below line is talking to spring's layer 5(controller) -> FriendController
return this.myHttp.post<Friend>("http://localhost:8080/friend/addFriend", newFriend);}

updateFriendToSpring(newFriend: Friend) : Observable<Friend>{
  console.log('updating friend to spring');
//the below line is talking to spring's layer 5(controller) -> FriendController
return this.myHttp.put<Friend>("http://localhost:8080/friend/updateFriend", newFriend);}

deleteFriendToSpring(newFriend: Friend) : Observable<Friend>{
  console.log('deleting friend to spring');
//the below line is talking to spring's layer 5(controller) -> FriendController
return this.myHttp.delete<Friend>("http://localhost:8080/friend/deleteFriend/" + newFriend.friendId);}}