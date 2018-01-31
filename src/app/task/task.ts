import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
@Component
({
	templateUrl : './task.html',
	styleUrls   : ['./task.css']
})
export class taskComponent{
    today = Date.now();
	  ticks = 0;  
    minutesDisplay: number = 0;
    hoursDisplay: number = 0;
    secondsDisplay: number = 0;

    sub: Subscription;
    constructor(private router: Router){}
    ngOnInit() {
        this.startTimer();
    }

    private startTimer() {

        let timer = Observable.timer(1, 1000);
        this.sub = timer.subscribe(
            t => {
                this.ticks = t;
                
                this.secondsDisplay = this.getSeconds(this.ticks);
                this.minutesDisplay = this.getMinutes(this.ticks);
                this.hoursDisplay = this.getHours(this.ticks);
            }
        );
    }

    private getSeconds(ticks: number) {
        return this.pad(ticks % 60);
    }

    private getMinutes(ticks: number) {
         return this.pad((Math.floor(ticks / 60)) % 60);
    }

    private getHours(ticks: number) {
        return this.pad(Math.floor((ticks / 60) / 60));
    }

    private pad(digit: any) { 
        return digit <= 9 ? '0' + digit : digit;
    }
    changeTask()
    {
      this.router.navigateByUrl('/position');
    }
    endTask()
    {
      this.router.navigateByUrl('/home');
    }
    cancel()
    {
      this.router.navigateByUrl('/task');
    }

}