import { Component } from '@angular/core';
import { NewsCarousel } from './components/news-carousel/news-carousel';
import { NewsRow } from './components/news-row/news-row';

@Component({
  selector: 'news',
  imports: [NewsCarousel, NewsRow],
  templateUrl: './news.html',
  styleUrl: './news.scss',
})
export class News {}
