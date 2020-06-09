import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DocumentEditorContainerModule, ToolbarService } from '@syncfusion/ej2-angular-documenteditor';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';


import { AppComponent } from './app.component';
import { SyncfusionEditorComponent } from './syncfusion-editor/syncfusion-editor.component';
import { AccordionModule, ToolbarModule, ContextMenuModule, TabModule, TreeViewModule, SidebarModule, MenuModule } from '@syncfusion/ej2-angular-navigations';
import { DropDownButtonModule, SplitButtonModule, ProgressButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

@NgModule({
  declarations: [
    AppComponent,
    SyncfusionEditorComponent
  ],
  imports: [
    BrowserModule,
    DocumentEditorContainerModule,
    ButtonModule,
    AccordionModule, ToolbarModule, ContextMenuModule, TabModule, TreeViewModule, SidebarModule, MenuModule, DropDownButtonModule, SplitButtonModule, ProgressButtonModule
  ],
  providers: [ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
