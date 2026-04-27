import {Article, ArticleJsonProps} from './models/article.model';
import {Mapper} from '../../shared/interfaces/mapper';

export const ArticleMapper: Mapper<Article, ArticleJsonProps> = {
  fromJSON: (props: ArticleJsonProps): Article => new Article(props),
  toJSON: (article: Article): ArticleJsonProps => ({
    id: article.id,
    type: article.type,
    title: article.title,
    subtitle: article.subtitle,
    content: article.content,
    summary: article.summary,
    illustrationSrc: article.illustrationSrc,
    publishedOn: article.publishedOn,
    metadata: article.metadata
  }),
};
