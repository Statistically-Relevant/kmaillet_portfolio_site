const toggleContent = (buttonID, contentID, contentHTML) => {
    document.getElementById(buttonID).addEventListener('click', () => {
        const contentDiv = document.getElementById(contentID);
        contentDiv.innerHTML = contentDiv.innerHTML === '' ? contentHTML : '';
    });
};

const geometryContent = `
    <div class="toggledContent">
        <p>Geometry is essential for various practical applications in construction and design. Understanding geometric principles helps in accurate measurements and calculations.</p>
        <ul>
            <li><strong>Measurement and Scaling:</strong> Accurate measurement and scaling of blueprints are crucial for construction.</li>
            <li><strong>Angles:</strong> Understanding and calculating angles are important for construction and design.</li>
            <li><strong>Shapes:</strong> Geometric shapes and their properties are fundamental in design.</li>
            <li><strong>Volume and Area:</strong> Calculating volume and area is necessary for materials estimation.</li>
            <li><strong>Spatial Reasoning:</strong> Spatial reasoning aids in effective layout planning.</li>
            <li><strong>3D Modeling:</strong> 3D modeling is used for structural design.</li>
            <li><strong>Trigonometry:</strong> Trigonometry is essential for calculating roof pitch and elevations.</li>
            <li><strong>Coordinate Geometry:</strong> Coordinate geometry is used in land surveying.</li>
            <li><strong>Pythagorean Theorem:</strong> Application of the Pythagorean theorem in construction ensures accuracy.</li>
            <li><strong>Symmetry and Asymmetry:</strong> Symmetry and asymmetry are important in architectural design.</li>
        </ul>
    </div>
`;

const linearContent = `
    <div class="toggledContent">
        <p>My understanding of linear algebra allows me to accurately represent shapes, their rotation, translation, and transformation in 1, 2, 3, and more dimensional space.</p>
        <ul>
            <li><strong>Translation:</strong> Projects must be dynamic and able to adapt to change. Linear translation allows movement from one area to another without losing any information.</li>
            <li><strong>Rotation:</strong> To remain dynamic and adaptable one must be able to view and rotate objects in any direction without losing details or information about the object.</li>
            <li><strong>Shear:</strong> When encountering unexpected slopes, angles, or offsets it is important to understand how to offset the design using linear shearing to distort the design into the required shape.</li>
        </ul>
    </div>
`;

const arithmeticContent = `
    <div class="toggledContent">
        <p>Arithmetic is the foundation of all calculations in construction. Precise arithmetic skills are vital for ensuring accuracy in measurements and estimates.</p>
        <ul>
            <li><strong>Basic Operations:</strong> Addition, subtraction, multiplication, and division are used in every aspect of construction.</li>
            <li><strong>Fractions and Decimals:</strong> Understanding fractions and decimals is crucial for precise measurements.</li>
            <li><strong>Percentages:</strong> Calculating percentages is necessary for material estimation and cost calculations.</li>
            <li><strong>Ratios and Proportions:</strong> Ratios and proportions are used to maintain the correct scale and relationships between different elements.</li>
            <li><strong>Estimations:</strong> Estimation skills help in making quick, yet reasonably accurate calculations on-site.</li>
            <li><strong>Units and Conversions:</strong> Converting between different units of measurement is essential for accurate planning and execution.</li>
        </ul>
    </div>
`;

toggleContent('geometryID', 'contentGeometry', geometryContent);
toggleContent('linearID', 'contentLinear', linearContent);
toggleContent('arithmaticID', 'contentArithmatic', arithmeticContent);
