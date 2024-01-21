import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'customers',
  timestamps: false,
})
export default class CustomerModel extends Model {
  @Column({ primaryKey: true })
  declare id: string;

  @Column({ allowNull: false })
  declare name: string;

  @Column({ allowNull: false })
  declare street: string;

  @Column({ allowNull: false })
  declare number: number;

  @Column({ allowNull: false })
  declare zipcode: string;

  @Column({ allowNull: false })
  declare city: string;

  @Column({ allowNull: false })
  declare active: boolean;

  @Column({ allowNull: false })
  declare rewardPoints: number;
}
