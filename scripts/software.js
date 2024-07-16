const toggleContent = (buttonID, contentID, contentHTML) => {
    document.getElementById(buttonID).addEventListener('click', () => {
        const contentDiv = document.getElementById(contentID);
        contentDiv.innerHTML = contentDiv.innerHTML === '' ? contentHTML : '';
    });
};

const schedulingContent = `
    <div class="toggledContent">
        <p>My scheduling solutions ensure that all construction tasks are planned efficiently. Key features include:</p>
        <ul>
            <li><strong>Automated Task Assignment:</strong> Automatically assign tasks based on worker availability and skillset.</li>
            <li><strong>Real-Time Updates:</strong> Receive real-time updates and notifications for any changes in schedule.</li>
            <li><strong>Integration with Calendars:</strong> Sync schedules with popular calendar apps for easy access.</li>
            <li><strong>Customizable Views:</strong> View schedules by day, week, or month.</li>
        </ul>
    </div>
`;

const employeeInfoContent = `
    <div class="toggledContent">
        <p>My employee information systems allow for tailored management of employee data. Key features include:</p>
        <ul>
            <li><strong>Custom Data Fields:</strong> Add custom fields to track specific employee information.</li>
            <li><strong>Secure Data Storage:</strong> Ensure employee data is stored securely with encryption.</li>
            <li><strong>Access Control:</strong> Define access levels for different users to maintain data privacy.</li>
            <li><strong>Performance Tracking:</strong> Monitor and record employee performance metrics.</li>
        </ul>
    </div>
`;

const customSoftwareContent = `
    <div class="toggledContent">
        <p>I provide custom software solutions to meet the unique needs of construction companies. Key features include:</p>
        <ul>
            <li><strong>Custom Applications:</strong> Develop tailored applications to address specific business needs.</li>
            <li><strong>Integration with Existing Systems:</strong> Ensure seamless integration with current tools and software.</li>
            <li><strong>Cross-Platform Support:</strong> Provide solutions that work across different platforms and devices.</li>
            <li><strong>Continuous Support:</strong> Offer ongoing support and maintenance for all custom software.</li>
        </ul>
    </div>
`;

toggleContent('schedulingID', 'contentScheduling', schedulingContent);
toggleContent('employeeInfoID', 'contentEmployeeInfo', employeeInfoContent);
toggleContent('customSoftwareID', 'contentCustomSoftware', customSoftwareContent);
