import { Component } from '@angular/core';
import { Inventory } from "./inventory";
import {Input} from '@angular/core';

@Component({
  selector: 'my-inventory',
  templateUrl: "./view/inventory.component.html",
})


export class InventoryComponent  { 
	
	@Input() public inventory: Inventory;
	
	
	onItemClicked(p_item:Item):void
	{
		console.log(p_item.name);
	}
}
