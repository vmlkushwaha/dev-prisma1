import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "vimal2@gmail.com",
      name: "Vimal2",
      posts: {
        create: [
          {
            title: "Vimal title1",
          },
          {
            title: "Vimal title2",
          },
        ],
      },
    },
  });
}

main();
