import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'news-row',
  imports: [NgOptimizedImage],
  templateUrl: './news-row.html',
  styleUrl: './news-row.scss',
})
export class NewsRow {}
