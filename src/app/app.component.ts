import {Component, OnInit, ViewChild} from '@angular/core';
import {sampleData} from "./dataSource";
import {MenuEventArgs} from '@syncfusion/ej2-navigations';
import {TreeGridComponent} from "@syncfusion/ej2-angular-treegrid";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public data: Object[] | undefined;
  public pager: Object | undefined;
  public editSettings: Object | undefined;
  public contextMenuItems: Object[] | undefined;
  public multiSort: boolean = false;
  public frozen: number = 0;

  @ViewChild('treeGrid')
  public treeGridObj: TreeGridComponent | undefined;

  ngOnInit(): void {
    this.data = sampleData;
    this.editSettings = {allowEditing: true, allowAdding: true, allowDeleting: true, mode: "Row"};
    this.updateMenu()
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
    }
    // if (args!.item.id === 'collapserow') {
    //   this.treeGridObj!.collapseRow(<HTMLTableRowElement>(this.treeGridObj!.getSelectedRows()[0]));
    // } else {
    //   this.treeGridObj!.expandRow(<HTMLTableRowElement>(this.treeGridObj!.getSelectedRows()[0]));
    // }
  }
}
