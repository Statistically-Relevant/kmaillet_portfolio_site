const toggleContent = (buttonID, contentID, contentHTML) => {
    document.getElementById(buttonID).addEventListener('click', () => {
        const contentDiv = document.getElementById(contentID);
        contentDiv.innerHTML = contentDiv.innerHTML === '' ? contentHTML : '';
    });
};

const geometryContent = `
    <div class="toggledContent">
        <p>My expertise in geometry helps solve various practical problems with precision and accuracy. My skills include:</p>
        <ul>
            <li><strong>Measurement and Scaling:</strong> I ensure accurate measurement and scaling for various projects.</li>
            <li><strong>Angles:</strong> I understand and calculate angles for precise design and analysis.</li>
            <li><strong>Shapes:</strong> I use geometric shapes and their properties to inform design decisions.</li>
            <li><strong>Volume and Area:</strong> I calculate volume and area for material estimation and space planning.</li>
            <li><strong>Spatial Reasoning:</strong> I employ spatial reasoning for effective layout planning.</li>
            <li><strong>3D Modeling:</strong> I create 3D models for visualization and design validation.</li>
            <li><strong>Trigonometry:</strong> I apply trigonometry for complex calculations involving angles and distances.</li>
            <li><strong>Coordinate Geometry:</strong> I use coordinate geometry for precise positioning and mapping.</li>
            <li><strong>Pythagorean Theorem:</strong> I apply the Pythagorean theorem to ensure accuracy in various calculations.</li>
            <li><strong>Symmetry and Asymmetry:</strong> I consider symmetry and asymmetry in design for aesthetic and functional balance.</li>
        </ul>
    </div>
`;

const linearContent = `
    <div class="toggledContent">
        <p>My proficiency in linear algebra enables me to handle transformations and representations in various dimensions. My skills include:</p>
        <ul>
            <li><strong>Translation:</strong> I manage dynamic translation of objects while maintaining their properties.</li>
            <li><strong>Rotation:</strong> I perform rotations to view objects from different angles without losing detail.</li>
            <li><strong>Shear:</strong> I use shearing techniques to adjust designs for unexpected slopes or offsets.</li>
        </ul>
    </div>
`;

const arithmeticContent = `
    <div class="toggledContent">
        <p>My strong foundation in arithmetic ensures precise calculations and estimates. My skills include:</p>
        <ul>
            <li><strong>Basic Operations:</strong> I apply addition, subtraction, multiplication, and division in various contexts.</li>
            <li><strong>Fractions and Decimals:</strong> I use fractions and decimals for accurate measurements.</li>
            <li><strong>Percentages:</strong> I calculate percentages for material estimation and cost analysis.</li>
            <li><strong>Ratios and Proportions:</strong> I maintain correct ratios and proportions for balanced designs.</li>
            <li><strong>Estimations:</strong> I make quick and accurate estimations for on-the-spot decision making.</li>
            <li><strong>Units and Conversions:</strong> I convert between units of measurement for precise planning and execution.</li>
        </ul>
    </div>
`;

toggleContent('geometryID', 'contentGeometry', geometryContent);
toggleContent('linearID', 'contentLinear', linearContent);
toggleContent('arithmeticID', 'contentArithmetic', arithmeticContent);
