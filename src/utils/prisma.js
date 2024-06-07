import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const globalWithPrisma = global;
globalWithPrisma.prismaGlobal = globalWithPrisma.prismaGlobal || prismaClientSingleton();

const prisma = globalWithPrisma.prismaGlobal;

export default prisma;

if (process.env.NODE_ENV !== 'production') globalWithPrisma.prismaGlobal = prisma;