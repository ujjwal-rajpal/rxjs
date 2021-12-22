import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'; 
@NgModule({
    imports : [ MatToolbarModule, MatButtonModule, MatIconModule, MatListModule ],
    exports : [ MatToolbarModule, MatButtonModule, MatIconModule, MatListModule ]
})

export class MyMaterialModule{}