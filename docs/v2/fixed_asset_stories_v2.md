# User Stories & Backlog V2 (Login & Role System)
## โปรเจกต์: ระบบบริหารจัดการสินทรัพย์ถาวรแบบง่าย (Simple Fixed Asset Management System)

---

## Epic 4: การยืนยันตัวตนและสิทธิ์ (Authentication & Authorization)

### Story 4.1: เข้าสู่ระบบ (Login)
**สถานะ:** ร่าง (Draft)

**Story:**
**ในฐานะ** ผู้ใช้งาน (User),
**ฉันต้องการ** เข้าสู่ระบบด้วย Email และ Password,
**เพื่อให้** ฉันสามารถเข้าถึงฟังก์ชันการทำงานตามสิทธิ์ที่ได้รับ

**เกณฑ์การยอมรับ (Acceptance Criteria):**
1.  มีหน้า Login ที่รองรับการกรอก Email และ Password
2.  ตรวจสอบความถูกต้องของ Email/Password กับฐานข้อมูล
3.  หาก Login สำเร็จ ให้ Redirect ไปยังหน้าแรกที่เหมาะสมกับ Role (เช่น Admin -> Dashboard, Employee -> Asset List)
4.  หาก Login ไม่สำเร็จ ให้แสดงข้อความแจ้งเตือนที่ชัดเจน
5.  Session ควรมีอายุการใช้งานที่เหมาะสม (เช่น 1 วัน) และมี Secure Cookie

**งานย่อย (Tasks / Subtasks):**
- [ ] ติดตั้งและตั้งค่า NextAuth.js
- [ ] เพิ่มตาราง `User` ใน Prisma Schema (รองรับ Password Hash)
- [ ] สร้างหน้า Login UI (`app/(auth)/login/page.tsx`)
- [ ] สร้าง API Route สำหรับ NextAuth (`app/api/auth/[...nextauth]/route.ts`)
- [ ] Implement Credentials Provider พร้อม Logic ตรวจสอบ Password (bcrypt)

---

### Story 4.2: รีเซ็ตรหัสผ่าน (Reset Password)
**สถานะ:** ร่าง (Draft)

**Story:**
**ในฐานะ** ผู้ใช้งานที่ลืมรหัสผ่าน,
**ฉันต้องการ** ขอรีเซ็ตรหัสผ่านผ่านทาง Email,
**เพื่อให้** ฉันสามารถกู้คืนการเข้าถึงบัญชีของฉันได้

**เกณฑ์การยอมรับ (Acceptance Criteria):**
1.  มีหน้า "ลืมรหัสผ่าน" ที่ให้กรอก Email
2.  ระบบตรวจสอบว่า Email มีอยู่ในระบบจริงหรือไม่
3.  หากมี Email จริง ให้ส่งลิงก์สำหรับ Reset Password ไปยัง Email นั้น (ใน Dev mode อาจจะ Log Link ออกมา Console หรือใช้ Mock Mailer)
4.  ลิงก์ Reset Password ต้องมี Token ที่มีอายุจำกัด (เช่น 15 นาที)
5.  เมื่อคลิกลิงก์ จะนำไปสู่หน้า "ตั้งรหัสผ่านใหม่"
6.  User สามารถตั้งรหัสผ่านใหม่ได้ และ Login ได้ทันทีด้วยรหัสใหม่

**งานย่อย (Tasks / Subtasks):**
- [ ] เพิ่มตาราง `VerificationToken` หรือ field ใน User สำหรับเก็บ reset token
- [ ] สร้าง Server Action `requestPasswordReset(email)`
- [ ] สร้าง Mock Email Service (หรือใช้ Nodemailer Ethereal)
- [ ] สร้างหน้า `forgot-password` และ `reset-password/[token]`
- [ ] สร้าง Server Action `resetPassword(token, newPassword)`

---

### Story 4.3: ออกจากระบบ (Sign Out)
**สถานะ:** ร่าง (Draft)

**Story:**
**ในฐานะ** ผู้ใช้งาน (User),
**ฉันต้องการ** ออกจากระบบ (Sign Out),
**เพื่อให้** ฉันมั่นใจว่าบัญชีของฉันปลอดภัยเมื่อเลิกใช้งาน

**เกณฑ์การยอมรับ (Acceptance Criteria):**
1.  มีปุ่มหรือเมนู "Sign Out" ที่เข้าถึงได้ง่าย (เช่น บน Sidebar หรือ Navbar)
2.  เมื่อกด Log out ระบบต้องทำลาย Session ทิ้งทันที
3.  Redirect กลับไปยังหน้า Login
4.  User ไม่สามารถกดปุ่ม Back เพื่อกลับไปหน้า Dashboard ได้หลังจาก Logout แล้ว

**งานย่อย (Tasks / Subtasks):**
- [ ] เพิ่มปุ่ม Sign Out ใน Sidebar (`components/layout/sidebar.tsx`)
- [ ] เรียกใช้ `signOut()` ของ NextAuth
- [ ] Redirect ไปยังหน้า Login

---

## Epic 5: ระบบจัดการสิทธิ์ (Role-Based Features)

### Story 5.1: สิทธิ์ของผู้ดูแลระบบ (Admin Roles)
**สถานะ:** ร่าง (Draft)

**Story:**
**ในฐานะ** ผู้ดูแลระบบ (Admin),
**ฉันต้องการ** มีสิทธิ์จัดการข้อมูลทุกอย่างในระบบ,
**เพื่อให้** สามารถบริหารจัดการคลังสินทรัพย์ได้เบ็ดเสร็จ

**เกณฑ์การยอมรับ (Acceptance Criteria):**
1.  **CRUD AssetType & Asset:** Admin เท่านั้นที่สามารถ เพิ่ม/ลบ/แก้ไข Asset และ AssetType ได้ (เมนูเหล่านี้ต้องไม่เห็นในมุม Employee)
2.  **Dashboard:** Admin เท่านั้นที่สามารถเข้าถึงหน้า Dashboard ภาพรวมได้
3.  **Operations:** Admin ยังสามารถทำรายการแทน User อื่นได้ (ตาม Epic 2 เดิม)

**งานย่อย (Tasks / Subtasks):**
- [ ] เพิ่ม Middleware หรือ HOC เพื่อตรวจสอบ Role = 'ADMIN' ก่อนเข้าถึง Route `/dashboard/**` หรือ API ที่เกี่ยวข้อง
- [ ] ซ่อนเมนู Settings และ Actions ปุ่ม Create/Edit/Delete สำหรับ User ที่ไม่ใช่ Admin

---

### Story 5.2: สิทธิ์ของพนักงาน (Employee Roles)
**สถานะ:** ร่าง (Draft)

**Story:**
**ในฐานะ** พนักงาน (Employee),
**ฉันต้องการ** ดูรายการสินทรัพย์และทำรายการเบิกจ่ายด้วยตนเอง,
**เพื่อให้** ฉันสามารถใช้งานสินทรัพย์ของบริษัทได้สะดวก

**เกณฑ์การยอมรับ (Acceptance Criteria):**
1.  **View Assets:** Employee สามารถดูรายการสินทรัพย์ทั้งหมดได้ (Read-only)
2.  **Operations:** Employee สามารถทำรายการ Check-In (คืนของ) และ Check-Out (เบิกของ) ได้
    *   *Clarification:* การ Check-Out ของ Employee คือการเบิก "ให้ตัวเอง" โดยอัตโนมัติ
    *   *Clarification:* การ Check-In คือการคืนของที่ "ตัวเองถือครองอยู่" หรือของอื่นๆ (ขึ้นอยู่กับ Policy, เบื้องต้นอนุญาตให้ Check-in ของที่อยู่ในครอบครอง)
3.  **Restricted Access:** Employee ต้อง **เข้าไม่ได้** ในส่วนของ Dashboard, การแก้ไขข้อมูล Master Data (Asset/AssetType)

**งานย่อย (Tasks / Subtasks):**
- [ ] ปรับปรุงหน้า `AssetList` ให้ซ่อนปุ่ม Edit/Delete สำหรับ Employee
- [ ] ปรับปรุง Logic `Check-Out`: หากเป็น Employee ทำรายการ Auto-assign ให้ตัวเอง (อาจใช้ `currentUser.id`)
- [ ] ปรับปรุง Logic `Check-In`: แสดงรายการ Assets ที่ตัวเองถือครองเพื่อให้กดคืนได้ง่าย

---

## Epic 6: ระบบแจ้งเตือนและวันคืนครุภัณฑ์ (Notification & Return System)

### Story 6.1: กำหนดวันคืน (Set Return Date)
**สถานะ:** ร่าง (Draft)

**Story:**
**ในฐานะ** พนักงาน (Employee) หรือ ผู้ดูแลระบบ (Admin) ที่ทำการเบิกจ่าย,
**ฉันต้องการ** ระบุวันและเวลาที่จะคืนสินทรัพย์,
**เพื่อให้** มีเป้าหมายในการคืนที่ชัดเจนและระบบสามารถตรวจสอบได้

**เกณฑ์การยอมรับ (Acceptance Criteria):**
1.  **Check-Out Form:** เพิ่มช่องระบุ "วันและเวลาที่คืน (Return Date)" ในฟอร์ม Check-out (เป็น Mandatory field)
2.  **Asset Detail:** ผู้ดูแลระบบสามารถดูวันคืนของสินทรัพย์แต่ละชิ้นในหน้ารายละเอียดได้
3.  **Validation:** วันที่คืนต้องไม่ต่ำกว่าวันที่ยืมปัจจุบัน (Today or Future)

**งานย่อย (Tasks / Subtasks):**
- [ ] Update Schema: เพิ่ม `returnDate` ในตาราง `Asset`
- [ ] Update Check-out Form: เพิ่ม DatePicker field
- [ ] Update Server Action: บันทึก `returnDate`

---

### Story 6.2: แจ้งเตือนเมื่อเกินกำหนด (Overdue Notifications)
**สถานะ:** ร่าง (Draft)

**Story:**
**ในฐานะ** ระบบ (System),
**ฉันต้องการ** แจ้งเตือนผู้ถือครองสินทรัพย์เมื่อเกินกำหนดเวลาคืน,
**เพื่อให้** ผู้ถือครองรับทราบและนำสินทรัพย์มาคืน

**เกณฑ์การยอมรับ (Acceptance Criteria):**
1.  **Detection:** ระบบตรวจสอบทุกวันว่ามีสินทรัพย์ใดที่ `returnDate` < `now` และ `status` ยังเป็น `IN_USE`
2.  **Email Alert:** ส่งอีเมลแจ้งเตือนไปยังผู้ถือครอง (Employee)
3.  **Web Push:** ส่งแจ้งเตือนผ่าน Firebase Web Push ไปยัง Browser ของผู้ถือครอง
4.  **Frequency:** แจ้งเตือนซ้ำทุกวันจนกว่าจะมีการคืน (Check-in)
    *   *System Logic:* หาก User ไม่คืนภายในวันที่แจ้งเตือน, วันถัดไปต้องแจ้งเตือนซ้ำ

**งานย่อย (Tasks / Subtasks):**
- [ ] เลือกใช้ Cron Job Library (`node-cron` / Vercel Cron)
- [ ] Implement Email Sending Logic (ใช้ Nodemailer)
- [ ] Setup Firebase Web Push (FCM)
- [ ] Create Notification Worker

---

### Story 6.3: ติดตามสถานะการแจ้งเตือน (Notifications Tracking)
**สถานะ:** ร่าง (Draft)

**Story:**
**ในฐานะ** ผู้ดูแลระบบ (Admin),
**ฉันต้องการ** ดูประวัติการแจ้งเตือนและการติดตามทวงคืน,
**เพื่อให้** ทราบว่าใครค้างส่งคืนมานานเท่าไหร่และระบบได้แจ้งเตือนไปอย่างถูกต้องหรือไม่

**เกณฑ์การยอมรับ (Acceptance Criteria):**
1.  **Notification Log:** บันทึกสถานะการส่ง (Success/Failed)
2.  **Retry:** หากส่งไม่สำเร็จ ต้องมีกลไกส่งซ้ำ
3.  **Admin View:** หน้าจอแสดงรายการสินทรัพย์ที่เกินกำหนด พร้อมประวัติ:
    *   เช่น "นาย AA Check-out Asset Book, กำหนดคืน 2025-12-25 18:00, ผ่านมา 2 วัน, ได้รับแจ้งเตือน 2 ครั้ง"

**งานย่อย (Tasks / Subtasks):**
- [ ] Create Schema: `NotificationLog` (userId, assetId, type, status, sentAt, error, retryCount)
- [ ] Create Admin Page: `Overdue Reports`
- [ ] Implement Logging & Retry Logic

