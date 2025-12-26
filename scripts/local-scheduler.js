// Using global fetch (Node 18+)


async function triggerCron() {
  const url = 'http://localhost:3000/api/cron/overdue';
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(`[${new Date().toLocaleTimeString()}] Cron Run: Status ${response.status}`, data);
  } catch (error) {
    if (error.cause && error.cause.code === 'ECONNREFUSED') {
      console.error(`[${new Date().toLocaleTimeString()}] Failed: Server not running at ${url}`);
    } else {
      console.error(`[${new Date().toLocaleTimeString()}] Error:`, error.message);
    }
  }
}

console.log('--- Local Cron Scheduler Started ---');
console.log('Triggering "Overdue Check" every 10 seconds...');
console.log('Press Ctrl+C to stop.');

// Run immediately
triggerCron();

// Run every 60 seconds
setInterval(triggerCron, 10 * 1000);
