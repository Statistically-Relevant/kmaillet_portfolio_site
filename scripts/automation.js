// scripts/automation.js

const toggleContent = (buttonID, contentID, contentHTML) => {
    document.getElementById(buttonID).addEventListener('click', () => {
        const contentDiv = document.getElementById(contentID);
        contentDiv.innerHTML = contentDiv.innerHTML === '' ? contentHTML : '';
    });
};

const financialContent = `
    <div class="toggledContent">
        <p>Using Python, automate financial record keeping, cost-estimation, and budget tracking. Leverage libraries like Pandas, NumPy, and Matplotlib for data manipulation and visualization.</p>
    </div>
`;

const recordKeepingContent = `
    <div class="toggledContent">
        <p>Utilize Python for automating record keeping. Create databases and manage them with libraries like SQLite and SQLAlchemy.</p>
    </div>
`;

const blueprintingContent = `
    <div class="toggledContent">
        <p>Employ Godot Engine's powerful UI system to automate blueprinting tasks, ensuring accuracy and efficiency.</p>
    </div>
`;

const materialsListingContent = `
    <div class="toggledContent">
        <p>Develop Python scripts to automate materials listing, ensuring precise inventory management and order tracking.</p>
    </div>
`;

const printingContent = `
    <div class="toggledContent">
        <p>Integrate Python and Godot Engine to automate printing tasks, reducing manual effort and increasing productivity.</p>
    </div>
`;

const fileSystemOrganizingContent = `
    <div class="toggledContent">
        <p>Automate file system organization with Python scripts, creating an efficient workflow for project management.</p>
    </div>
`;

const additionalContent = `
    <div class="toggledContent">
        <p>Explore additional automation opportunities using Python's vast libraries and Godot Engine's robust capabilities.</p>
    </div>
`;

toggleContent('financial-automationID', 'contentFinancial', financialContent);
toggleContent('record-keeping-automationID', 'contentRecordKeeping', recordKeepingContent);
toggleContent('blueprinting-automationID', 'contentBlueprinting', blueprintingContent);
toggleContent('materials-listing-automationID', 'contentMaterialsListing', materialsListingContent);
toggleContent('printing-automationID', 'contentPrinting', printingContent);
toggleContent('file-system-organizing-automationID', 'contentFileSystemOrganizing', fileSystemOrganizingContent);
toggleContent('additional-automationID', 'contentAdditional', additionalContent);
