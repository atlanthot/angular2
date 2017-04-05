import { Injectable } from "@angular/core";
import { ALL_WARRIORS } from "./mocks";
import { Warrior } from "./warrior";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class WarriorService {

	private _service: Http;

	constructor(p_service: Http) {
		this._service = p_service;
	}

	getWarriors(): Promise<Warrior[]> {

		return this._service.get('/data/warriors.json').toPromise().then(
			(response) => response.json() as Warrior[]
		);
	}

	getNextWarrior(p_id: number): Promise<Warrior> {

		return this.getWarriors().then(
			(warriors: Warrior[]) => {

				let current: Warrior;
				let i: number = 0;
				let max: number = warriors.length;

				for (i = 0; i < max; i++) {
					current = warriors[i];

					if (current.id == p_id) {
						if (i + 1 < max) {
							return Promise.resolve(warriors[i + 1]);
						}
						else {
							return Promise.resolve(warriors[0]);
						}
					}
				}

				return Promise.resolve(null);
			}
		);


	}

	getWarriorById(p_id: number): Promise<Warrior> {


		return this.getWarriors().then(
			(warriors: Warrior[]) => {

				let current: Warrior;
				let i: number = 0;
				let max: number = warriors.length;

				for (i = 0; i < max; i++) {
					current = warriors[i];
					if (current.id == p_id)
						return Promise.resolve(current);
				}

				return Promise.resolve(null);
			}
		);
	}

}