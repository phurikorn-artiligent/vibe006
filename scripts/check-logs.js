const { PrismaClient } = require('../generated/client');
const prisma = new PrismaClient();

async function main() {
  const logs = await prisma.notificationLog.findMany({
    include: { asset: true, user: true },
    orderBy: { sentAt: 'desc' }
  });
  console.log('Notification Logs:', JSON.stringify(logs, null, 2));
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
