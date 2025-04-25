import { Model, DataTypes, Sequelize } from 'sequelize'; // Import Sequelize and DataTypes from sequelize

export default (sequelize: Sequelize) => {
  class Post extends Model {
    public id!: string;
    public title!: string;
    public content!: string;
    public userId!: string;
    public created!: Date;
    public updated!: Date;
  }

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
      created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'Post',
      timestamps: true,
    }
  );

  return Post;
};
