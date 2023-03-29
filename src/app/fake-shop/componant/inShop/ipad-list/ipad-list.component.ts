import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products, SearchData } from '../../../model';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
@Component({
  selector: 'fake-shop-ipad-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ipad-list.component.html',
  styleUrls: ['./ipad-list.component.scss'],
})
export class IpadListComponent implements OnInit {
  @Input() data!: Products[];
  @Input() search?: SearchData;

  @Output() itemSelected = new EventEmitter<Products>();
  @Output() searchChange = new EventEmitter<SearchData>();

  protected myForm!: FormGroup<{
    search: FormControl<string>;
  }>;

  private fb: NonNullableFormBuilder;

  constructor(fb: FormBuilder) {
    this.fb = fb.nonNullable;
  }

  ngOnInit(): void {
    if (!this.data) {
      throw new Error('data is required');
    }
    console.log(this.data);

    this.data = this.data.filter((item) => item.category == 'iPad');
    this.myForm = this.fb.group({
      search: this.search?.search ?? '',
    });
  }

  protected select(item: Products): void {
    this.itemSelected.emit(item);
  }

  doSearch(): void {
    this.searchChange.emit(this.myForm.value);
  }
}
