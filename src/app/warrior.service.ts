import {Injectable} 	from "@angular/core";
import {ALL_WARRIORS} 	from "./mocks";


@Injectable()
export class WarriorService{
	

	getWarriors():Promise<Warrior[]> 
	{
		return Promise.resolve( ALL_WARRIORS );
	}
	
}