
import {DroidNS} from "./R2D2";
import {C3PO} from "./C3PO";
import {IDroid} from "./IDroid";


export class DroidFactory{
	

	
	public getRandomDroid():IDroid
	{
		let rand:number = Math.random();
		
		if( rand > 0.5 )
		{
			return new C3PO();
		}
		else
		{
			return new DroidNS.R2D2();
		}
	}
	
}