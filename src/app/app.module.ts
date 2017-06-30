import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CovalentLayoutModule, CovalentStepsModule, CovalentDataTableModule, CovalentMessageModule } from '@covalent/core';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentDataTableModule,
    CovalentMessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
