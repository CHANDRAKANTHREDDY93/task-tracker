import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { taskService } from '../taskTracker';

@Component
({
	selector    : 'position',
	templateUrl : './position.html',
	styleUrls : ['./position.css']
})
export class positionComponent implements OnInit
{
	employeeData :any[] =[];
	@Input()  id;
	hideTable = false;
	showTable = false;
	backgroundColor : string = '#345465';
	hexColor: string;
	hexColor1: string;
	hexColor2: string;
	selectedRow : Number;
    setClickedRow : Function;
	ngOnInit() : void
	{}
	constructor(private getService : taskService, public router: Router) 
	{
		this.getService.fetchData().subscribe(lists =>
		{
			this.employeeData = lists;
			console.log(this.employeeData);
		});
	}
	show()
	{
		this.hideTable = !this.hideTable;
		if(this.hexColor === '#dddddd') { 
        this.hexColor = '#000000';
        this.hexColor1 = '#dddddd';
        this.hexColor2 = '#dddddd';
      } else {
        this.hexColor = '#FF0000'
      }
	}
	show1()
	{
		this.hideTable = !this.hideTable;
		if(this.hexColor1 === '#dddddd') { 
        this.hexColor1 = '#ffffff';
        this.hexColor = '#dddddd';
        this.hexColor2 = '#dddddd';
      } else {
        this.hexColor1 = '#FF0000'
      }
	}
	show2()
	{
		this.showTable = !this.showTable;
		if(this.hexColor2 === '#dddddd') { 
        this.hexColor2 = '#ffffff'
        this.hexColor = '#dddddd'
        this.hexColor1 = '#dddddd'
      } else {
        this.hexColor2 = '#FF0000'
      }
	}
	start()
	{
		/*this.router.navigateByUrl('/task');*/
		window.open('/task');
	}
	
	}