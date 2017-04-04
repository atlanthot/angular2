import { Component } 	from '@angular/core';
import { Warrior } 		from "./warrior";
import { ALL_WARRIORS } from "./mocks";
import {WarriorService} from "./warrior.service";
import {OnInit}			from "@angular/core";

@Component({
	selector: 'my-app',
	templateUrl: "./view/app.component.html",
})


export class AppComponent implements OnInit { 
	
	public characters:Warrior[];
	private _service:WarriorService;
	
	constructor( p_service:WarriorService )
	{
		this._service = p_service;
	}
	
	//onData( p_data:Warrior[] ):void
	//{
		//this.characters = p_data;
	//}
	
	ngOnInit():void
	{
		//this._service.getWarriors().then( this.onData.bind(this) );
		this._service.getWarriors().then( 
		
			( p_data:Warrior[] ) => (
			
				this.characters = p_data;
				
			) 
		
		);
	}
	
}
