import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { WarriorsComponent } from './warriors.component';
import { WarriorDetailComponent } from './warriorDetail.component';
import { InventoryComponent } from './inventory.component';
import { WarriorService } from './warrior.service';

@NgModule({
  providers: [WarriorService],
  imports: [BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        {
          path: 'warriors',
          component: WarriorsComponent
        },
        {
          path: 'detail/:id',
          component: WarriorDetailComponent
        }
      ]
    )
  ],
  declarations: [AppComponent, InventoryComponent, WarriorsComponent, WarriorDetailComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
