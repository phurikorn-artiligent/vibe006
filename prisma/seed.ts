const bcrypt = require('bcryptjs')
const { PrismaClient } = require('../generated/client')

const prisma = new PrismaClient()

async function main() {
  const passwordHash = await bcrypt.hash('password123', 10)

  // 1. Create Admin
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: { role: 'ADMIN', password: passwordHash },
    create: {
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@example.com',
      password: passwordHash,
      role: 'ADMIN',
      department: 'IT',
    },
  })
  console.log(`Created admin: ${admin.email}`)

  // 2. Create Employees
  const employees = [
    { firstName: 'Potter', lastName: 'Harry', email: 'harry.potter@hogwarts.edu', department: 'Gryffindor' },
    { firstName: 'Granger', lastName: 'Hermione', email: 'hermione.granger@hogwarts.edu', department: 'Gryffindor' },
    { firstName: 'Weasley', lastName: 'Ron', email: 'ron.weasley@hogwarts.edu', department: 'Gryffindor' },
    { firstName: 'Malfoy', lastName: 'Draco', email: 'draco.malfoy@hogwarts.edu', department: 'Slytherin' },
    { firstName: 'Snow', lastName: 'Jon', email: 'jon.snow@winterfell.net', department: 'Nights Watch' },
  ]

  console.log(`Start seeding employees...`)
  for (const emp of employees) {
    const user = await prisma.user.upsert({
      where: { email: emp.email },
      update: { role: 'EMPLOYEE', password: passwordHash },
      create: {
        ...emp,
        password: passwordHash,
        role: 'EMPLOYEE',
      },
    })
    console.log(`Created employee: ${user.firstName} ${user.lastName}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
