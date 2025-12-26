# Fixed Asset Management System Architecture Document V2 (Auth & Roles)

## 1. Introduction
This V2 document extends the original architecture to include Authentication, Authorization (RBAC), and enhanced Security features.

### Scope of Changes
-   **Authentication:** Implement Login/Logout, Password Reset.
-   **Authorization:** Role-Based Access Control (Admin vs. Employee).
-   **Database:** Schema updates to support Users and Roles.

---

## 2. Authentication Architecture

### 2.1 Technology Choice
-   **Library:** NextAuth.js (v5 Beta / Auth.js)
-   **Provider:** Credentials Provider (Email/Password)
-   **Session Strategy:** JWT (JSON Web Token) strategy (stateless).
-   **Password Hashing:** `bcrypt` or `argon2`.

### 2.2 Auth Flow
1.  **Login:** User submits Email/Password -> Server Action -> Verify Hash -> Issue JWT (in HTTP-only cookie).
2.  **Session:** Middleware checks cookie on every protected request.
3.  **Logout:** Clear cookie.

### 2.3 Password Reset Flow
1.  User requests reset (Email).
2.  System generates `resetToken` (UUID) + `resetTokenExpiry` and saves to DB.
3.  System simulates sending email (Dev: Console Log / Mock).
4.  User clicks link with token.
5.  System verifies token validity (matches DB + not expired).
6.  User provides new password -> Hash -> Update DB -> Clear Token.

---

## 3. Authorization (RBAC) Architecture

### 3.1 Roles
We define two primary roles using an Enum:
-   `ADMIN`: Full access (Dashboard, Manage Assets, Manage Users).
-   `EMPLOYEE`: Limited access (View Assets, Self Check-in/out).

### 3.2 Permission Matrix

| Feature | Admin | Employee |
| :--- | :---: | :---: |
| **Dashboard** | ✅ | ❌ |
| **Asset List** | ✅ | ✅ |
| **Create/Edit/Delete Asset** | ✅ | ❌ |
| **Asset Details** | ✅ | ✅ |
| **Check-Out (Assign)** | ✅ (Any User) | ✅ (Self Only) |
| **Check-In (Return)** | ✅ (Any Asset) | ✅ (Self Held Only) |
| **Settings (Asset Types)** | ✅ | ❌ |

### 3.3 Implementation Strategy
-   **Middleware Guard:** `middleware.ts` intercepts requests to `/dashboard` and checks `token.role`.
-   **Component Guard:** Utility function `hasRole(role)` or `Protect` component to conditionally render UI elements (e.g., hiding the "Delete" button).
-   **Server Action Guard:** Every Server Action must valid session and role before execution.
    ```typescript
    const session = await auth();
    if (session.user.role !== 'ADMIN') throw new UnauthorizedError();
    ```

---

## 4. Schema Changes (Prisma)

### 4.1 Merging User & Employee
To keep the system simple, we will upgrade the existing `Employee` model to serve as the `User` model.

**New Field Requirements:**
-   `password`: String (Hashed)
-   `role`: Role (Enum: ADMIN, EMPLOYEE)
-   `image`: String? (Profile picture - optional)
-   `resetToken`: String?
-   `resetTokenExpiry`: DateTime?

### 4.2 Updated Schema Model

```prisma
enum Role {
  ADMIN
  EMPLOYEE
}

model User {
  id               Int           @id @default(autoincrement())
  firstName        String
  lastName         String
  email            String        @unique
  password         String        // [NEW] Hashed Password
  role             Role          @default(EMPLOYEE) // [NEW] Authorization Role
  department       String?
  image            String?       // [NEW] For Avatar
  
  // Reset Password Logic
  resetToken       String?       // [NEW]
  resetTokenExpiry DateTime?     // [NEW]

  transactions     Transaction[] // Relation to asset history

  // Map to "employees" table if we want to keep table name, 
  // OR rename table to "users" and migrate data.
  // Decision: Rename model 'Employee' to 'User' in code, map to 'users' table.
  @@map("users") 
}

// Update Transaction relation
model Transaction {
  // ...
  user   User @relation(fields: [userId], references: [id])
  userId Int  // Renamed from employeeId
}
```

*Note: Migration strategy involves renaming the `Employee` table and adding columns.*

---

## 5. Directory Structure Updates

```text
app/
├── (auth)/                 # [NEW] Public Auth Routes
│   ├── login/
│   │   └── page.tsx
│   ├── forgot-password/
│   │   └── page.tsx
│   └── reset-password/
│       └── [token]/
│           └── page.tsx
├── api/
│   └── auth/
│       └── [...nextauth]/  # [NEW] NextAuth Handler
```

---

## 6. Security Considerations
-   **CSRF:** NextAuth handles this by default.
-   **Role Escalation:** Ensure `updateUser` actions cannot allow a user to change their own role to Admin.
-   **Data Leakage:** API/Server Actions returning User objects must exclude `password` and `resetToken`.
