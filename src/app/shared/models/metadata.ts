import { BaseModel } from '../utils/base-model';
import { IWith } from '../utils/base-builder';

interface MetaDataProps {
  createdAt: Date;
  updatedAt: Date;
}

export class Metadata extends BaseModel<Metadata> implements MetaDataProps {
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(props: MetaDataProps) {
    super();
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  protected override initBuilder(builder: IWith<Metadata, {}>): Metadata {
    let b = builder.with('createdAt', this.createdAt).with('updatedAt', this.updatedAt);
    return new Metadata(b.build());
  }
}
