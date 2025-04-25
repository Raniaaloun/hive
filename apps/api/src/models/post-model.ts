import { Model, DataTypes, Sequelize } from 'sequelize';

export class Post extends Model {
  public id!: string;
  public title!: string;
  public content!: string;
  public userId!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

export const initPostModel = (sequelize: Sequelize) => {
  Post.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'Post',
      timestamps: true,
      tableName: 'posts'
    }
  );
};
