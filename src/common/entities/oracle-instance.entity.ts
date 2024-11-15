import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class OracleInstanceEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  chainId: number;

  @Column()
  address: string;

  @Column({ type: 'bigint', default: 0, nullable: true })
  height: string;
}
