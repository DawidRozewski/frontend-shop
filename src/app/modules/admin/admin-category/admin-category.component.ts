import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { AdminConfirmDialogService } from '../common/service/admin-confirm-dialog.service';
import { AdminConfirmDialogComponent } from '../common/component/admin-confirm-dialog/admin-confirm-dialog.component';
import { AdminCategoryNameDTO } from '../common/dto/adminCategoryNameDTO';
import { AdminCategoryService } from './admin-category.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit {
 
  displayedColumns: string[] = ["id", "name", "actions"];
  data: Array<AdminCategoryNameDTO> = [];

  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(
    private adminCategoryService: AdminCategoryService,
    private dialogService: AdminConfirmDialogService
    ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.adminCategoryService.getCategories()
    .subscribe(categories => this.data = categories);
  }

  confirmDelete(element: AdminCategoryNameDTO) {
    this.dialogService.openConfirmDialog("Czy na pewno chcesz usunąć kategorię?")
    .afterClosed()
    .subscribe(result => {
      if(result) {
        this.adminCategoryService.delete(element.id)
        .subscribe(() => {
          this.data.forEach((value, index) => {
            if(element == value) {
              this.data.splice(index, 1);
              this.table.renderRows();
            }
          })
        });
      }
    });
  }
  
}
