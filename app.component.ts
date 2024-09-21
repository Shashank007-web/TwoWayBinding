import { Component, ViewChild } from '@angular/core';
import {
    MonacoEditorComponent,
    MonacoEditorConstructionOptions,
    MonacoEditorLoaderService,
    MonacoStandaloneCodeEditor
} from '@materia-ui/ngx-monaco-editor';

@Component({
    selector: 'app-text-editor',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    name: string = '';
    age: number | null = null;
    favoriteColor: string = '';

    // Function to reset form values
    resetForm() {
        this.name = '';
        this.age = null;
        this.favoriteColor = '';
    }
}
