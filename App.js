// Array to store job details
const jobsArray = [];

function showAddJobForm() {
    document.getElementById('addJobForm').style.display = 'block';
}

function hideAddJobForm() {
    document.getElementById('addJobForm').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('jobForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form data
        const formData = new FormData(event.target);
        const companyName = formData.get('companyName');
        const jobName = formData.get('jobName');
        const jobDescription = formData.get('job-description');
        const salary = formData.get('salary');
        const jobLevel = formData.get('jobLevel');
        const employmentType = formData.get('employmentType');
        const location = formData.get('location');
        // For now, let's assume company logo will be stored as a file in formData.

        // Push job details to the array
        jobsArray.push({
            companyName: companyName,
            jobName: jobName,
            jobDescription: jobDescription,
            salary: salary,
            jobLevel: jobLevel,
            employmentType: employmentType,
            location: location
            // Add more properties as needed, such as company logo
        });

        // Create job card element
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        jobCard.innerHTML = `
            <div class="company-logo">
                <!-- Add company logo here -->
            </div>
            <div class="job-details">
                <h2 class="company-name">${companyName}</h2>
                <h3 class="job-name">${jobName}</h3>
                <p class="job-description">${jobDescription}</p>
            </div>
            <div class="job-time">
                <p>Added: Just now</p>
            </div>
        `;

        // Append job card to the container
        document.getElementById('jobCardContainer').appendChild(jobCard);

        // Clear form fields
        event.target.reset();
    });
});
