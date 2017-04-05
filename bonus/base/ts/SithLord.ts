import {ForceWarrior} from "./ForceWarrior";
import {ForceSide} from "./app.enum";

export class SithLord extends ForceWarrior{

	
	constructor(p_name:string, p_power:number, p_side:ForceSide)
	{
		super(p_name, p_power, p_side);
	}	
	
}