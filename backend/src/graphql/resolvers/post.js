export default {
  Query: {
    getPost: (parent, args, { models }) => {
      return models.Post.findAll({
        include: [
          {
            model: models.Tag,
            as: "tags"
          }
        ]
      });
    }
  },

  Mutation: {
    createPost: (parent, { input }, { models }) =>
      models.Post.create(
        { ...input },
        {
          include: [
            {
              model: models.Tag,
              as: "tags"
            }
          ]
        }
      )
  }
};
