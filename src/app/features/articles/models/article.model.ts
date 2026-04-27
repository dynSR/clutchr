import {ArticleId} from '../../../shared/types/branded-types';
import {CarouselItemProps} from '../../../shared/interfaces/carousel-item-props';
import {PropertiesOnly} from '../../../shared/types/properties-only';
import {BaseModel, ModelProps} from '../../../shared/utils/base-model';
import {ArticleType} from '../enums/article-type.enum';

type ArticleProps = ModelProps<ArticleId> & {
  type: ArticleType;
  title: string;
  subtitle?: string;
  fullTitle: string;
  content: string;
  summary: string;
  illustrationSrc: string;
  publishedOn: Date;
}

export type ArticleJsonProps = Omit<
  PropertiesOnly<ArticleProps>,
  'fullTitle' | 'linkToDetails' | 'slug'
>;

export class Article extends BaseModel<ArticleId> implements ArticleProps, CarouselItemProps {
  readonly type: ArticleType;
  readonly title: string;
  readonly subtitle?: string;
  readonly content: string;
  readonly summary: string;
  readonly illustrationSrc: string;
  readonly publishedOn: Date;

  constructor(props: ArticleJsonProps) {
    super(props);
    this.type = props.type;
    this.title = props.title;
    this.subtitle = props.subtitle;
    this.content = props.content;
    this.summary = props.summary;
    this.illustrationSrc = props.illustrationSrc;
    this.publishedOn = props.publishedOn;
  }

  override get linkToDetails(): string {
    return `articles/${this.id}/${this.slug}`;
  }

  override get slug(): string {
    return (this.type + String.WhiteSpace + this.title).toKebabLowerCase();
  }

  get fullTitle(): string {
    return this.title + (this.subtitle !== undefined ? ' — ' + this.subtitle : String.Empty);
  }
}
