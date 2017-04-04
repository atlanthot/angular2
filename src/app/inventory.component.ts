import { Component } from '@angular/core';
import { Inventory } from "./inventory";
import {Input} from '@angular/core';

@Component({
  selector: 'my-inventory',
  templateUrl: "./view/inventory.component.html",
})


export class InventoryComponent  { 
	
	@Input() public inventory: Inventory;
}