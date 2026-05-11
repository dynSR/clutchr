import { inject, Injectable } from '@angular/core';
import { Article, ArticleJsonProps } from './models/article.model';
import { BaseService } from '../../shared/utils/base-service';
import { AssetFileExtension, assets } from '../../shared/utils/assets-finder';
import { HttpClient } from '@angular/common/http';
import { ArticleMapper } from './article.mapper';

@Injectable({ providedIn: 'root' })
export class ArticleService extends BaseService<Article, ArticleJsonProps> {
  protected override dataFilePath: string = assets('data/articles', AssetFileExtension.JSON);

  constructor() {
    super(inject(HttpClient), ArticleMapper);
  }
}
