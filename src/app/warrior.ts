import {Inventory} from "./inventory";


export class Warrior{




	constructor(
		p_id:number = 0, 
		p_name:string = "Luke Skywalker", 
		p_job:string = "Jedi Knight",
		p_age:number = 20,
		p_isLight:boolean = true
	)
	{
		this.id 		= p_id;
		this.job 		= p_job;
		this.name 		= p_name;
		this.age 		= p_age;
		this.isLight 	= p_isLight;
		this.inventory	= null;
	};
	
	public job:string;
	public name:string;
	public age:number;
	public id:number;
	public isLight:boolean;
	public inventory:Inventory;
	
}