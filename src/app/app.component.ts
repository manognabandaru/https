import { Component } from '@angular/core';
import { FriendsService } from './friends.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name;
  company;
  some: any;
  someone: any;
  dateArray;
  holidays;
  holidaysarray;
  friends = [
    {
      name: 'Mano',
      company: 'walgreens'
    },
    {
      name: 'Ravi',
      company: 'walgreens'
    },
    {
      name: 'Gayatri',
      company: 'walgreens'
    }
  ];
  year;
  month;
  constructor(private friendsService: FriendsService) { }
  onSave() {
    // console.log(this.some);

    this.friends.push({
      name: this.name,
      company: this.company,
    });

    this.friendsService.sendFriends(this.friends).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );

  }

  yearChangeHandler (event: any) {
    //update the ui
    this.year = event.target.value;
    console.log(this.year);
  }

  monthChangeHandler (event: any) {
    //update the ui
    this.month = event.target.value;
    console.log(this.month);
  }

  getHolidays() {
    console.log(this.month,this.year);
    this.friendsService.getholidays(this.year,this.month)
    .subscribe(
      (response: Response) => {
          this.some = response.json().holidays      
          console.log(this.some)
      }   

    )
    // // this.dateArray = Object.keys(this.some);
    // console.log(this.dateArray)
  
  };
}
