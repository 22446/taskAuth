import { Component } from '@angular/core';
import { Iuser } from '../../core/interfacs/iuser';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

data!:Iuser
st!:string
ngOnInit(): void {
this.data=JSON.parse(localStorage.getItem('userinfo')!)
this.st=JSON.parse(localStorage.getItem('userToken')!)
console.log(this.st);
console.log(this.data)
  
}
}
