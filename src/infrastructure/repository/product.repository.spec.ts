import { Sequelize } from 'sequelize-typescript';

describe('Infra Product repository unit tests', () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true },
    });
  });

  afterEach(async () => {
    await sequelize.close();
  });
});
