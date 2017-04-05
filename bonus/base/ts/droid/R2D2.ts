import {IDroid} from "./IDroid"

export namespace DroidNS 
{

	export class R2D2 implements IDroid{
		
		name:string
		move():void
		{
			console.log("R2D2 roule jusqu'à sa cible...");
		}
	}

}