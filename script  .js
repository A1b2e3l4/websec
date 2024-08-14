document.addEventListener('DOMContentLoaded', function () {
    const webinarList = document.getElementById('webinar-list');
    const webinarForm = document.getElementById('webinar-form');

    // Fetch webinars from the server
    fetch('/api/webinars')
        .then(response => response.json())
        .then(webinars => {
            webinars.forEach(webinar => {
                const li = document.createElement('li');
                li.innerHTML = `${webinar.title} - ${webinar.date} at ${webinar.time} <a href="${webinar.link}" target="_blank">Join Webinar</a>`;
                webinarList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching webinars:', error);
        });

    // Handle form submission to add a new webinar
    webinarForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = {
            title: document.getElementById('title').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            link: document.getElementById('link').value
        };

        fetch('/api/webinars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(newWebinar => {
            const li = document.createElement('li');
            li.innerHTML = `${newWebinar.title} - ${newWebinar.date} at ${newWebinar.time} <a href="${newWebinar.link}" target="_blank">Join Webinar</a>`;
            webinarList.appendChild(li);
        })
        .catch(error => {
            console.error('Error adding webinar:', error);
        });

        webinarForm.reset();
    });
});
