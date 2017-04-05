import {IDroid} from "./IDroid"

export class C3PO implements IDroid{
	
	name:string
	move():void
	{
		console.log("C3PO se dandine jusqu'à sa cible...");
	}
}