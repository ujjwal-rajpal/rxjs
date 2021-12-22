
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import { PromiseModule } from './promise/promise/promise.module';
const routes :Routes = [
    { path: '', 
    loadChildren: ()=> PromiseModule }
]
@NgModule({
    declarations: [],
    imports:[CommonModule,
    RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]

})

export class AppRoutingModule{}