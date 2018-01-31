	
import { Component, OnInit } from '@angular/core';
import { taskService } from '../taskTracker';
import { Router} from '@angular/router';

@Component({
	templateUrl : "./home.html",
	styleUrls   : ['./home.css']
})
export class homeComponent {
	employeeData : any =[];
	data : any =[];
	isValid : boolean;
	constructor(public getService : taskService, public router: Router)
	{ }
	ngOnInit()
	{
		this.getService.fetchData().subscribe(lists =>
		{
			this.employeeData = lists;
		});
	}
	submit(id, pwd)
	{
	this.isValid = false;
		this.employeeData.forEach(element =>
		{
			if(element._id == id && element.phone== pwd)
			{
				this.isValid = true;
				//this.name.emit(element.name);
				this.router.navigateByUrl('/position');
			}
			else
			{
				this.isValid = true;
				console.log("Invalid");
			}
		});
	}
}