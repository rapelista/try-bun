import { PrismaClient } from "@prisma/client";
import { Container } from "winston";

const prisma = new PrismaClient();

const contact = await prisma.contact.create({
    data: {
        name: "Akmal",
        email: "farihakmal@student.ub.ac.id",
        phone: "081234567890",
    },
});

console.info(contact);
