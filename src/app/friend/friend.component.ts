import { Component, OnInit } from '@angular/core';
import { Friend } from '../Friend';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  constructor(private fs: FriendService) {}  theFriend: Friend = new Friend();  allFriends: Friend[] | undefined;  ngOnInit(): void {}
  showAllFriends() {
    //invoked on button
    console.log('showing all the friends on button click');
    this.fs.getAllFriendsFromSpring().subscribe(
      (
        data: Friend[] //srping data is pushed into this data variable
      ) => {
        this.allFriends = data; //assign data to allFriends so that html can fetch it in tr td tags
        console.log(this.allFriends);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  //localhost:4200  

  addFriend()
  {
    console.log('Adding a friend');
   this.fs. addFriendToSpring(this.theFriend).subscribe(
                      //friend : Friend = new Friend();
    (data: Friend)=>//spring data is pused into data variable
    {
      this.theFriend = data; //assign data to allFriends so that html can fetch in [tr td] tags
      console.log(this.theFriend);
    },
    (error) => {
      console.log(error)
    }
  );
    }
    
    
updateFriend(){
  console.log('Updating friend');
  this.fs. updateFriendToSpring(this.theFriend).subscribe(//friend : Friend = new Friend();
(data: Friend)=>//spring data is pused into data variable
{
this.theFriend = data; //assign data to allFriends so that html can fetch in [tr td] tags
console.log(this.theFriend);
},
(error) => {
console.log(error)
}
      );
}

deleteFriend(){
  console.log('Deleting friend');
  this.fs.deleteFriendToSpring(this.theFriend).subscribe(
(data: Friend)=>//spring data is pused into data variable
{
this.theFriend = data; //assign data to allFriends so that html can fetch in [tr td] tags
console.log(this.theFriend);
},
(error)=>{
console.log(error)
}
  );
}
  }


