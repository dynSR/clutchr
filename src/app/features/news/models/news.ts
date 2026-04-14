import { BaseModel } from '../../../shared/utils/base-model';
import { NewsId } from '../../../shared/types/branded-types';
import { IWith } from '../../../shared/utils/base-builder';

export enum NewsType {
  /**
   * Used for all kind of updates: roster, cdl rules.
   */
  Update,

  /**
   * Used for incoming matches or events/tournaments to promote.
   */
  Schedule,

  /**
   * Used for any match results to promote.
   */
  Results,
}

interface INews {
  id: NewsId;
  type: NewsType;
  title: string;
  subtitle?: string;
  content: string;
  summary: string;
  illustrationSrc: string;
  publisher: string;
  publishedOn: Date;
}

export class News extends BaseModel<News> implements INews {
  readonly id: NewsId;
  readonly type: NewsType;
  readonly title: string;
  readonly subtitle?: string;
  readonly content: string;
  readonly summary: string;
  readonly illustrationSrc: string;
  readonly publisher: string;
  readonly publishedOn: Date;

  constructor(data: INews) {
    super();
    this.id = data.id;
    this.type = data.type;
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.content = data.content;
    this.summary = data.summary;
    this.illustrationSrc = data.illustrationSrc;
    this.publisher = data.publisher;
    this.publishedOn = data.publishedOn;
  }

  protected initBuilder(builder: IWith<News, {}>): News {
    let b = builder
      .with('id', this.id)
      .with('type', this.type)
      .with('title', this.title)
      .with('content', this.content)
      .with('summary', this.summary)
      .with('illustrationSrc', this.illustrationSrc)
      .with('publisher', this.publisher)
      .with('publishedOn', this.publishedOn);

    if (this.subtitle) {
      b = b.with('subtitle', this.subtitle);
    }

    return new News(b.build());
  }
}
