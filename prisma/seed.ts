import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const employees = [
    { firstName: 'Potter', lastName: 'Harry', email: 'harry.potter@hogwarts.edu', department: 'Gryffindor' },
    { firstName: 'Granger', lastName: 'Hermione', email: 'hermione.granger@hogwarts.edu', department: 'Gryffindor' },
    { firstName: 'Weasley', lastName: 'Ron', email: 'ron.weasley@hogwarts.edu', department: 'Gryffindor' },
    { firstName: 'Malfoy', lastName: 'Draco', email: 'draco.malfoy@hogwarts.edu', department: 'Slytherin' },
    { firstName: 'Snow', lastName: 'Jon', email: 'jon.snow@winterfell.net', department: 'Nights Watch' },
  ]

  console.log(`Start seeding ...`)
  for (const emp of employees) {
    const user = await prisma.employee.upsert({
      where: { email: emp.email },
      update: {},
      create: emp,
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
