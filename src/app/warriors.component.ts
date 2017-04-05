import { Component } 	from '@angular/core';
import { Warrior } 		from "./warrior";
import {WarriorService} from "./warrior.service";
import {OnInit}			from "@angular/core";




@Component({
	selector: 'my-warriors',
	templateUrl: "./view/warriors.component.html",
})


export class WarriorsComponent implements OnInit { 
	
	public characters:Warrior[];
	private _service:WarriorService;
	
	constructor( p_service:WarriorService )
	{
		this._service = p_service;
	}
	
	ngOnInit():void
	{

		this._service.getWarriors().then( 
		
			( p_data:Warrior[] ) => {
			
				this.characters = p_data;
				
			} 
		
		);
	}
	
}