import { readFile } from 'fs';

let tasks = []

readFile('./tasks.json', (err, data) => {
    if (err) return;
    tasks = JSON.parse(data);
    console.log(tasks);
});

