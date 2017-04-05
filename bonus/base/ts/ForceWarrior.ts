import {ForceSide} from "./app.enum";

export abstract class ForceWarrior{
	
	
	public name:string;
	public power:number;
	public side: ForceSide;
	
	constructor( p_name:string, p_power:number, p_side:ForceSide)
	{
		this.name = p_name;
		this.power = p_power;
		this.side = p_side;
	}
	
	public isOnTheLightSide():boolean
	{
		return ( this.side == ForceSide.Light );
	}
	
	public isOnTheDarkSide():boolean
	{
		return ( this.side == ForceSide.Dark );
	}
	
	
}