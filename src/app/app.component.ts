import { Component } from '@angular/core';	
import {dataApi} from './dataApi.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  weather:any=[];
  everyDayTemp: any = [];
  date: Date;
  days: any = [];
  constructor(private apicall:dataApi){}

  ngOnInit(){
	  this.showData();
	  setInterval(()=>{this.showData();},200000)
  }

  sort(){
	let len = this.weather.list.length;
	let previousDay = "";
	let days = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
	let d = new Date();
	let daycount=d.getDay();
	  for (let i=1; i<len; i++){
		if (previousDay != this.weather.list[i].dt_txt.split(" ")[0]){
			this.everyDayTemp.push(this.weather.list[i]);
			previousDay = this.weather.list[i].dt_txt.split(" ")[0];
			this.days.push(days[daycount]);
			if (daycount == 6){
				daycount=0;
			}
			else{
				daycount++;
			}
		}
	  }
  }

  showData(){
	this.apicall.showit().subscribe((data)=>{
		this.weather=data;
		this.date= this.weather.list[0].dt_txt;
		this.sort();
		console.log(this.everyDayTemp);

	},(err)=>{
		console.log(err);
	});
  }

			}