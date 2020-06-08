import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DocumentEditorComponent } from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-syncfusion-editor',
  templateUrl: `./syncfusion-editor.component.html`,
  encapsulation: ViewEncapsulation.None
})
export class SyncfusionEditorComponent implements OnInit {
  @ViewChild('document_editor')
 public documentEditor: DocumentEditorComponent

  height: number = window.innerHeight;

  public onFileOpenClick() :void {
    document.getElementById('open_sfdt').click();
}

public onFileChange(e: any) :void {
    if (e.target.files[0]) {
            let file = e.target.files[0];
            if (file.name.substr(file.name.lastIndexOf('.')) === '.sfdt') {
                let fileReader: FileReader = new FileReader();
                fileReader.onload = (e: any) => {
                    let contents: string = e.target.result;
                    this.documentEditor.open(contents);
                };
                fileReader.readAsText(file);
                 this.documentEditor.documentName = file.name.substr(0, file.name.lastIndexOf('.'));
            }
    }
}
  ngOnInit(): void {
  }
}