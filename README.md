# Student Management System (ระบบจัดการข้อมูลนักศึกษา)

ระบบจัดการข้อมูลนักศึกษา (CRUD) พร้อมระบบยืนยันตัวตน (Authentication) พัฒนาด้วย Next.js (App Router), Prisma, SQLite และ NextAuth.js

## 🌟 ฟีเจอร์หลัก (Features)
- **การจัดการข้อมูลนักศึกษา (Student CRUD):**
  - **Create:** เพิ่มข้อมูลนักศึกษาใหม่พร้อม Validation
  - **Read:** แสดงรายชื่อนักศึกษาในรูปแบบตาราง responsive
  - **Update:** ดึงข้อมูลเดิมมาแก้ไขและบันทึกอัปเดต
  - **Delete:** ลบข้อมูลนักศึกษาพร้อมระบบแจ้งเตือนยืนยัน (Confirmation Dialog)
- **ระบบยืนยันตัวตน (Authentication):**
  - สมัครสมาชิกใหม่ (Register) พร้อมการเข้ารหัส Password ด้วย `bcryptjs`
  - เข้าสู่ระบบ (Login) และจัดการ Session ด้วย `NextAuth.js`
- **การตกแต่ง UI:** ตกแต่งสไตล์ที่สวยงามและอ่านง่ายด้วย `Tailwind CSS`

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)
- **Framework:** Next.js (App Router)
- **Database:** SQLite
- **ORM:** Prisma v7
- **Authentication:** NextAuth.js v5 (Beta) & Bcryptjs
- **Styling:** Tailwind CSS v4

## 🚀 การติดตั้งและการใช้งาน (Installation & Setup)

1. **Clone Repository นี้ลงเครื่อง:**
   ```bash
   git clone https://github.com/palm90150/Student-Management.git
