import {PrismaClient} from "@prisma/client"

const PrismaGlobal = global as typeof global & {prisma?:PrismaClient}
export const Database = PrismaGlobal.prisma || new PrismaClient();
if(process.env.NODE_ENV !== "production") PrismaGlobal.prisma = Database