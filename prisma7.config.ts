import "dotenv/config";
import { defineConfig, env } from "@prisma/config"; 

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: { // <-- เปลี่ยนจากคำว่า migrate: กลับมาเป็น datasource: ครับ
    url: env("DATABASE_URL"),
  },
});