const toggleContent = (buttonID, contentID, contentHTML) => {
    document.getElementById(buttonID).addEventListener('click', () => {
        const contentDiv = document.getElementById(contentID);
        contentDiv.innerHTML = contentDiv.innerHTML === '' ? contentHTML : '';
    });
};

const schedulingContent = `
    <div class="toggledContent">
        <p>I specialize in creating efficient scheduling solutions for construction tasks. My features include:</p>
        <ul>
            <li><strong>Automated Task Assignment:</strong> I can automate task assignments based on worker availability and skillset.</li>
            <li><strong>Real-Time Updates:</strong> I provide real-time updates and notifications for any schedule changes.</li>
            <li><strong>Integration with Calendars:</strong> I can sync schedules with popular calendar apps for easy access.</li>
            <li><strong>Customizable Views:</strong> I offer customizable views to see schedules by day, week, or month.</li>
        </ul>
    </div>
`;

const employeeInfoContent = `
    <div class="toggledContent">
        <p>I offer tailored management systems for employee data. My features include:</p>
        <ul>
            <li><strong>Custom Data Fields:</strong> I allow you to add custom fields to track specific employee information.</li>
            <li><strong>Secure Data Storage:</strong> I ensure secure data storage with encryption.</li>
            <li><strong>Access Control:</strong> I provide access control to maintain data privacy by defining user levels.</li>
            <li><strong>Performance Tracking:</strong> I help you monitor and record employee performance metrics.</li>
        </ul>
    </div>
`;

const customSoftwareContent = `
    <div class="toggledContent">
        <p>I deliver custom software solutions to meet the unique needs of construction companies. My features include:</p>
        <ul>
            <li><strong>Custom Applications:</strong> I develop tailored applications to address specific business needs.</li>
            <li><strong>Integration with Existing Systems:</strong> I ensure seamless integration with your current tools and software.</li>
            <li><strong>Cross-Platform Support:</strong> I provide solutions that work across different platforms and devices.</li>
            <li><strong>Continuous Support:</strong> I offer ongoing support and maintenance for all custom software.</li>
        </ul>
    </div>
`;

toggleContent('schedulingID', 'contentScheduling', schedulingContent);
toggleContent('employeeInfoID', 'contentEmployeeInfo', employeeInfoContent);
toggleContent('customSoftwareID', 'contentCustomSoftware', customSoftwareContent);
