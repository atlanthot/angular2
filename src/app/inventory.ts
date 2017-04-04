export class Inventory{
	
	public items:Item[];
	
}

export class Item
{
	
	constructor(p_name:string, p_price:number)
	{
		this.name = p_name;
		this.price = p_price;
	};
	
	public name:string;
	public price:number;
}