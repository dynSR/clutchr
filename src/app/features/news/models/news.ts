import { BaseModel } from '../../../shared/utils/base-model';
import { NewsId } from '../../../shared/types/branded-types';
import { IWith } from '../../../shared/utils/base-builder';
import { Metadata } from '../../../shared/models/metadata';
import '../../../shared/extensions/string.extensions';

export enum NewsType {
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

interface NewsProps {
  id: NewsId;
  type: NewsType;
  title: string;
  subtitle?: string;
  content: string;
  summary: string;
  illustrationSrc: string;
  publisher: string;
  publishedOn: Date;
  metadata: Metadata;
}

export class News extends BaseModel<News> implements NewsProps {
  readonly id: NewsId;
  readonly type: NewsType;
  readonly title: string;
  readonly subtitle?: string;
  readonly content: string;
  readonly summary: string;
  readonly illustrationSrc: string;
  readonly publisher: string;
  readonly publishedOn: Date;
  readonly metadata: Metadata;

  constructor(props: NewsProps) {
    super();
    this.id = props.id;
    this.type = props.type;
    this.title = props.title;
    this.subtitle = props.subtitle;
    this.content = props.content;
    this.summary = props.summary;
    this.illustrationSrc = props.illustrationSrc;
    this.publisher = props.publisher;
    this.publishedOn = props.publishedOn;
    this.metadata = props.metadata;
  }

  getFullTitle(): string {
    return this.title + (this.subtitle !== undefined ? ' — ' + this.subtitle : String.Empty);
  }

  protected initBuilder(builder: IWith<News>): News {
    let b = builder
      .with('id', this.id)
      .with('type', this.type)
      .with('title', this.title)
      .with('content', this.content)
      .with('summary', this.summary)
      .with('illustrationSrc', this.illustrationSrc)
      .with('publisher', this.publisher)
      .with('publishedOn', this.publishedOn)
      .with('metadata', this.metadata);

    if (this.subtitle) {
      b = b.with('subtitle', this.subtitle);
    }

    return new News(b.build());
  }
}
