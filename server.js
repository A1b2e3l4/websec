javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

// Store webinars in memory for this example
let webinars = [
    { id: 1, title: "Intro to Web Security", date: "August 20, 2024", time: "10:00 AM", link: "https://your-webinar-link-here" },
    { id: 2, title: "Understanding XSS Attacks", date: "August 27, 2024", time: "10:00 AM", link: "https://your-webinar-link-here" },
    { id: 3, title: "SQL Injection and Prevention", date: "September 3, 2024", time: "10:00 AM", link: "https://your-webinar-link-here" }
];

// API endpoint to get webinars
app.get('/api/webinars', (req, res) => {
    res.json(webinars);
});

// API endpoint to add a new webinar
app.post('/api/webinars', (req, res) => {
    const newWebinar = req.body;
    newWebinar.id = webinars.length + 1;
    webinars.push(newWebinar);
    res.status(201).json(newWebinar);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

