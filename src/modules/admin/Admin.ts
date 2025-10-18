import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const Admin = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL!;
    const adminPassword = process.env.ADMIN_PASSWORD!;
    const saltRounds = Number(process.env.BCRYPT_SALT_ROUND || 10);

    const existingAdmin = await prisma.admin.findUnique({
      where: { email: adminEmail },
    });

    if (existingAdmin) {
      console.log("✅ Super Admin already exists:", existingAdmin.email);
      return;
    }

    console.log("🚀 Creating Super Admin...");

    const hashedPassword = await bcrypt.hash(adminPassword, saltRounds);

    const admin = await prisma.admin.create({
      data: {
        name: "Super Admin",
        email: adminEmail,
        image: "https://i.ibb.co.com/VpxzR1MR/shakhawat-1.png",
        password: hashedPassword,
        role: Role.ADMIN,
        isActive: true,
      },
    });

    console.log("✅ Super Admin created successfully!");
    console.log(admin);
  } catch (error) {
    console.error("❌ Error creating admin:", error);
  } finally {
    await prisma.$disconnect();
  }
};
