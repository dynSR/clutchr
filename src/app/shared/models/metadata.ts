interface MetadataProps {
  createdAt: Date;
  updatedAt: Date;
}

export class Metadata implements MetadataProps {
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(props: MetadataProps) {
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
