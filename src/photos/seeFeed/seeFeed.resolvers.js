import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeFeed: protectedResolver((_, { offset, limit }, { loggedInUser }) =>
      client.photo.findMany({
        take: limit,
        skip: offset,
        where: {
          OR: [
            {
              user: {
                followers: {
                  some: {
                    id: loggedInUser.id,
                  },
                },
              },
            },
            {
              userId: loggedInUser.id,
            },
          ],
        },
        orderBy: {
          createdAt: "desc",
        },
      })
    ),
  },
};
