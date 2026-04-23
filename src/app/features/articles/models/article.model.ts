import { ArticleId } from '../../../shared/types/branded-types';
import { Metadata } from '../../../shared/models/metadata';
import { DefaultProps } from '../../../shared/interfaces/default-props';
import { CarouselItem } from '../../../shared/components/carousel/CarouselItem';
import { PropertiesOnly } from '../../../shared/types/properties-only';

export enum ArticleType {
  /**
   * Used for all website updates.
   */
  Update = 'update',

  /**
   * Used for all website updates.
   */
  RosterUpdate = 'roster update',

  /**
   * Used for incoming matches or events/tournaments to promote.
   */
  Schedule = 'schedule',

  /**
   * Used for any match results to promote.
   */
  Results = 'results',
}

interface ArticleProps extends DefaultProps<ArticleId> {
  type: ArticleType;
  title: string;
  subtitle?: string;
  content: string;
  summary: string;
  illustrationSrc: string;
  author: string;
  publishedOn: Date;
}

export class Article implements ArticleProps, CarouselItem {
  readonly id: ArticleId;
  readonly type: ArticleType;
  readonly title: string;
  readonly subtitle?: string;
  readonly content: string;
  readonly summary: string;
  readonly illustrationSrc: string;
  readonly author: string;
  readonly publishedOn: Date;
  readonly metadata: Metadata;

  constructor(props: Omit<PropertiesOnly<ArticleProps>, 'linkToDetails' | 'slug'>) {
    this.id = props.id;
    this.type = props.type;
    this.title = props.title;
    this.subtitle = props.subtitle;
    this.content = props.content;
    this.summary = props.summary;
    this.illustrationSrc = props.illustrationSrc;
    this.author = props.author;
    this.publishedOn = props.publishedOn;
    this.metadata = props.metadata;
  }

  get slug(): string {
    return (this.type + String.WhiteSpace + this.title + ' by ' + this.author).toKebabLowerCase();
  }

  get linkToDetails(): string {
    return `${this.getClassName()}/${this.id}/${this.slug}`;
  }

  getClassName(): string {
    return Article.name.withoutFirstChar().toLowerCase() + 's';
  }

  getFullTitle(): string {
    return this.title + (this.subtitle !== undefined ? ' — ' + this.subtitle : String.Empty);
  }
}
