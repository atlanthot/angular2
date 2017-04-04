import { NgModule }      		from '@angular/core';
import { FormsModule }   		from '@angular/forms';
import { BrowserModule } 		from '@angular/platform-browser';

import { AppComponent }  		from './app.component';
import { InventoryComponent }  	from './inventory.component';
import { WarriorService }  		from './warrior.service';

@NgModule({
  providers: 	[ WarriorService ],
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, InventoryComponent  ],
  bootstrap:    [ AppComponent 	]
})

export class AppModule { }
