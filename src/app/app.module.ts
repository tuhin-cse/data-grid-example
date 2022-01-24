import { NgModule,ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { PageService, FilterService,EditService,ToolbarService } from '@syncfusion/ej2-angular-treegrid';
import { SortService, ResizeService, ExcelExportService, PdfExportService, ContextMenuService } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent } from './app.component';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import {TextBoxModule} from '@syncfusion/ej2-angular-inputs';
import {NzModalModule} from "ng-zorro-antd/modal";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzInputModule} from "ng-zorro-antd/input";
import {ReactiveFormsModule} from "@angular/forms";
import {NzSelectModule} from "ng-zorro-antd/select";

/**
 * Module
 */
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TextBoxModule,
    TreeGridModule,
    ButtonModule,
    DropDownListAllModule,
    DialogModule,
    NzModalModule,
    NzButtonModule,
    NzFormModule,
    NzCheckboxModule,
    NzInputModule,
    ReactiveFormsModule,
    NzSelectModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [PageService,
    SortService,
    FilterService,
    EditService,
    SortService, ResizeService,
    ExcelExportService,
    PdfExportService, ContextMenuService,
    ToolbarService]
})
export class AppModule { }
