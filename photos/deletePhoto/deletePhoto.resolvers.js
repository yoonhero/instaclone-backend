import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    deletePhoto: protectedResolver(
      async (_, { id }, { photoId, loggedInUser }) => {
        const photo = await client.photo.findUnique({
          where: {
            id,
          },
          select: {
            userId: true,
          },
        });
        if (!photo) {
          return {
            ok: false,
            error: "Photo not found.",
          };
        } else if (photo.userId !== loggedInUser.id) {
          return {
            ok: false,
            error: "Not authorized",
          };
        } else {
          const deleteComment = await client.comment.deleteMany({
            where: {
              photoId,
            },
          });
          const likeDelete = await client.like.deleteMany({
            where: {
              photoId,
            },
          });
          await client.photo.delete({
            where: {
              id,
            },
          });
        }
        return {
          ok: true,
        };
      }
    ),
  },
};
