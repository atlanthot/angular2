import {Warrior} from "./warrior";

export const ALL_WARRIORS: Warrior[] = [

	{
		id: 1,
		job:"Sith Lord", 
		name:"Dark Vador", 
		age:40, 
		isLight: false, 
		inventory: {
			items: [
				{
					name: "Light Saber",
					price: 100000
				}
			]
		}
	},
	{
		id: 2,
		job:"Jedi Knight", 
		name:"Luke Skywalker", 
		age:20, 
		isLight: true, 
		inventory: {
			items: [
				{
					name: "Light Saber",
					price: 4000
				}
			]
		}
	},
	{
		id: 3,
		job:"Jedi Knight", 
		name:"Obiwan Kenobi", 
		age:60, 
		isLight: true, 
		inventory: {
			items: [
				{
					name: "Light Saber",
					price: 300
				}
			]
		}
	}


]