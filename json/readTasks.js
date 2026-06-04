const fs = require('fs');

try {
    const data = fs.readFileSync('tasks.json', 'utf8');
    const tasks = JSON.parse(data);

    process.stdout.write(JSON.stringify(tasks, null, 2) + '\n');
} catch (error) {
    console.error('Error:', error.message);
}