import { NewsId } from '../../../shared/types/branded-types';
import { Metadata } from '../../../shared/models/metadata';
import { DefaultProps } from '../../../shared/interfaces/default-props';

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

interface NewsProps extends DefaultProps<NewsId> {
  type: NewsType;
  title: string;
  subtitle?: string;
  content: string;
  summary: string;
  illustrationSrc: string;
  publisher: string;
  publishedOn: Date;
}

export class News implements NewsProps {
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

  constructor(props: Omit<NewsProps, 'slug'>) {
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

  get slug(): string {
    return (this.type + this.title).toKebabLowerCase();
  }

  getFullTitle(): string {
    return this.title + (this.subtitle !== undefined ? ' — ' + this.subtitle : String.Empty);
  }
}
