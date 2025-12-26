const { PrismaClient } = require('../generated/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding overdue asset...');

  // 1. Get or Create Asset
  const assetCode = 'OVERDUE-001';
  let asset = await prisma.asset.findUnique({ where: { code: assetCode } });

  if (!asset) {
    asset = await prisma.asset.create({
      data: {
        code: assetCode,
        name: 'Test Overdue Asset',
        type: {
          connectOrCreate: {
            where: { name: 'Electronics' },
            create: { name: 'Electronics' }
          }
        },
        status: 'AVAILABLE'
      }
    });
  }

  // 2. Get User
  const user = await prisma.user.findFirst();
  if (!user) throw new Error('No user found');

  // 3. Create Overdue Transaction
  // Set return date to Yesterday
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  await prisma.transaction.create({
    data: {
      action: 'CHECK_OUT',
      assetId: asset.id,
      userId: user.id,
      date: new Date(), // Checked out today (backdated logic allows this in DB even if UI blocks)
    }
  });

  // Update Asset Status and Return Date
  await prisma.asset.update({
    where: { id: asset.id },
    data: {
      status: 'IN_USE',
      returnDate: yesterday
    }
  });

  console.log('Overdue asset created.');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
