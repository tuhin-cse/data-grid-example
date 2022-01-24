import {Component, OnInit, ViewChild} from '@angular/core';
import {sampleData} from "./dataSource";
import {MenuEventArgs} from '@syncfusion/ej2-navigations';
import {TreeGridComponent} from "@syncfusion/ej2-angular-treegrid";
import axios from "axios";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public apiUrl: string = 'http://localhost:4500/api'
  public data: Object[] | undefined;
  public pager: Object | undefined;
  public editSettings: Object | undefined;
  public contextMenuItems: Object[] | undefined;
  public multiSort: boolean = false;
  public frozen: number = 0;
  public show: boolean = false;

  @ViewChild('treeGrid')
  public treeGridObj: TreeGridComponent | undefined;

  public validateForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.data = sampleData;
    this.editSettings = {allowEditing: true, allowAdding: true, allowDeleting: true, mode: "Row"};
    this.getData()
    this.updateMenu()
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  getData(): void {
    axios.get(`${(this.apiUrl)}/data`).then((response) => {
      console.log(response)
    })
  }

  updateMenu(): void {
    this.contextMenuItems = [
      {text: 'Edit Column', target: '.col-full-menu.e-headercell', id: 'edit-column', iconCss: "col-menu-right-icon"},
      {text: 'New Column', target: '.e-headercell', id: 'new-column', iconCss: "col-menu-right-icon"},
      {text: 'Delete Column', target: '.col-full-menu.e-headercell', id: 'del-column', iconCss: "col-menu-right-icon"},
      {text: 'Freeze Column', target: '.e-headercell', id: 'freeze-column', iconCss: 'far fa-check-square col-menu-right-icon'},
      {text: 'Filter Column', target: '.e-headercell', id: 'filter-column', iconCss: "far fa-check-square col-menu-right-icon"},
      {text: 'Multi Sort', target: '.e-headercell', id: 'multi-sort', iconCss: `${this.multiSort ? 'far fa-check-square' : 'far fa-square'} col-menu-right-icon`},
      {text: 'Collapse the Row', target: '.e-content', id: 'collapserow', iconCss: "col-menu-right-icon"},
    ]
  }

  contextMenuClick(args?: MenuEventArgs): void {
    console.log(args)
    if (args!.item.id === 'multi-sort') {
      this.multiSort = !this.multiSort
      this.updateMenu()
    } else if (args!.item.id === 'freeze-column') {
      // @ts-ignore
      this.frozen = args!.column.index
    } else {
      this.show = true;
    }
    // if (args!.item.id === 'collapserow') {
    //   this.treeGridObj!.collapseRow(<HTMLTableRowElement>(this.treeGridObj!.getSelectedRows()[0]));
    // } else {
    //   this.treeGridObj!.expandRow(<HTMLTableRowElement>(this.treeGridObj!.getSelectedRows()[0]));
    // }
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  // Sample level code to hide the Dialog when click the Dialog overlay
}
