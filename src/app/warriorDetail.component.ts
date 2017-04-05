import { Component } from '@angular/core';
import { Warrior } from "./warrior";
import { WarriorService } from "./warrior.service";
import { OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {Router}  from  '@angular/router';

@Component({
	selector: 'my-warrior',
	templateUrl: "./view/warriorDetail.component.html",
})


export class WarriorDetailComponent implements OnInit {

	public character: Warrior;
	private _service: WarriorService;
	private _route: ActivatedRoute;
	private _location: Location;
	private _router:Router;

	constructor(
		p_service: WarriorService,
		p_route: ActivatedRoute,
		p_location: Location,
		p_router: Router
	) {
		this._service = p_service;
		this._route = p_route;
		this._location = p_location;
		this._router = p_router;
	}


	goToNextWarrior():void
	{
		this._service.getNextWarrior(this.character.id).then( 
			(p_warrior:Warrior) => {
				this._router.navigate(['detail/', p_warrior.id]);
			}
		)
	}


	goBack():void
	{
		this._location.back();
	}

	ngOnInit(): void {

		let obsWarrior:Observable<Warrior> = this._route.params.switchMap(
				(params: Params) => this._service.getWarriorById(params['id'])
		);


		obsWarrior.subscribe(

			(p_warrior:Warrior) => {this.character = p_warrior;} 

		);
	}

}
