import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DocumentEditorContainerModule, ToolbarService } from '@syncfusion/ej2-angular-documenteditor';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';


import { AppComponent } from './app.component';
import { SyncfusionEditorComponent } from './syncfusion-editor/syncfusion-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    SyncfusionEditorComponent
  ],
  imports: [
    BrowserModule,
    DocumentEditorContainerModule,
    ButtonModule
  ],
  providers: [ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
