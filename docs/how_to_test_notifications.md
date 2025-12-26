# How to Test Overdue Notifications

## 1. Create an Overdue Asset
The UI blocks selecting past dates, so you must use the seed script to backdate an asset's return date to "yesterday".

```bash
node scripts/seed-overdue.js
```
*Output: "Overdue asset created."*

## 2. Trigger the Notification Job
You can trigger the cron job via the browser, CURL, or Postman.
This endpoint checks for overdue assets and sends alerts.

**Method:** `GET`
**URL:** `http://localhost:3000/api/cron/overdue`
*(Note: Use port 3001 if testing on the production build)*

```bash
curl http://localhost:3000/api/cron/overdue
```

### Option B: Local Scheduler (Simulate Daily Run)
Use this to simulate the automatic Vercel Cron locally.

1. **Start the Scheduler:**
   Open a separate terminal and run:
   ```bash
   npm run cron:local
   ```
   *This triggers the notification check immediately and then every 60 seconds.*

2. **Stop the Scheduler:**
   Press `Ctrl + C` in the terminal to stop the script.

3. **Change the Schedule:**
   To change how often it runs locally, edit `scripts/local-scheduler.js`:
   ```javascript
   // Change 60 * 1000 (60 seconds) to your desired interval in milliseconds
   setInterval(triggerCron, 60 * 1000);
   ```



## 3. Verify Results

### Option A: Admin UI (Recommended)
1. Log in as an **Admin** (`admin@example.com` / `password123` or your credentials).
2. Go to **Notifications** in the sidebar.
3. You should see a new entry with status `SUCCESS` or `FAILED`.

### Option B: Server Console (Mock Push)
Look at the terminal where your Next.js server is running.
```text
[MOCK PUSH] Title: Overdue Asset
[MOCK PUSH] Body: Asset [OVERDUE-001] ... is overdue.
[MOCK PUSH] Status: DELIVERED (Simulated)
```

### Option C: Database/Script
Run the log check script:
```bash
node scripts/check-logs.js
```
