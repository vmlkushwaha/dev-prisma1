import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.post.create({
    data: {
      title: "Dummy post 1",
      author: {
        connect: {
          id: 1,
        },
      },
    },
  });
}

main();
