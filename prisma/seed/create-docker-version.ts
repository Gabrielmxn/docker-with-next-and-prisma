import { prisma } from "@/app/lib/prisma"

async function main() {
  await prisma.dockerVersion.upsert({
    where: {
      id: "881efac6-8e89-4e50-a020-b0f7686607da"
    },
    update: {
      updated_at: new Date(),
    },
    create: {
      version: 'v0.1',
      updated_at: new Date(),
    }
  })
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