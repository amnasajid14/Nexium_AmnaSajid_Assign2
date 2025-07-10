const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Amna Sajid',
      email: 'amna@example.com',
    },
  });

  console.log('User Created:', user);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
