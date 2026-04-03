const projectData = {
    "drdo": {
        title: "Defense Equipment Failure Prediction using Machine Learning",
        role: "Machine Learning Intern – DRDO",
        tech: ["Python", "Pandas", "Scikit-Learn", "Random Forest"],
        description: `
            <p><strong>Introduction</strong><br>Modern equipment systems generate large amounts of operational and sensor-based telemetry data during usage. This data contains hidden patterns that can reveal early signs of degradation, overload, or abnormal behavior before a failure occurs. Traditional maintenance approaches are often inefficient and costly. Predictive maintenance offers a smarter alternative by using data to identify potential failures before breakdown happens. This project explores how machine learning can be used to analyze machine operating conditions, detect failure-related patterns, and classify whether a component is likely to fail.</p>

            <h4>Problem Statement & Objectives</h4>
            <p>The aim of this project was to build a machine learning model capable of predicting whether a defense equipment component would fail based on machine telemetry and operational parameters. Can sensor and operational machine data be used to accurately predict equipment failure and support predictive maintenance strategies?</p>
            <p>Objectives included preprocessing telemetry data, performing feature engineering, and building/comparing multiple classification models to identify the most effective model for equipment failure prediction.</p>

            <h4>Dataset & Features</h4>
            <p>The project used the predictive_maintenance.csv dataset, containing 10,000 machine records with features such as:</p>
            <ul>
                <li><strong>Air & Process Temperature [K]</strong></li>
                <li><strong>Rotational Speed [rpm] & Torque [Nm]</strong></li>
                <li><strong>Tool Wear [min]</strong></li>
            </ul>
            <p>The target variable was binary: 0 → No Failure, 1 → Failure. The dataset had no missing values and was cleaned and One-Hot Encoded for modeling.</p>

            <h4>Feature Engineering</h4>
            <p>To improve predictive performance and better capture real-world machine behavior, additional domain-inspired features were engineered:</p>
            <ul>
                <li><strong>Machine Stress:</strong> Torque × Rotational Speed. Represents mechanical load or stress experienced by the equipment.</li>
                <li><strong>Thermal Stress:</strong> Process Temperature − Air Temperature. Captures the relative temperature difference indicating potential overheating.</li>
            </ul>

            <h4>Machine Learning Models Used & Results</h4>
            <p>Multiple models were trained on an 80/20 train-test split. Since failure detection is the goal, <strong>Recall</strong> was an especially important metric because missing an actual failure is far more costly than generating a false alert.</p>
            <ul>
                <li><strong>Logistic Regression:</strong> Strong baseline (97.4% Accuracy) but struggled to detect actual failure cases effectively (Recall: 0.30).</li>
                <li><strong>Random Forest Classifier (Best Model):</strong> Delivered the best overall performance with <strong>98.25% Accuracy, 0.82 Precision, 0.54 Recall, and 0.65 F1-Score</strong> for failure prediction. Its ability to model non-linear interactions made it the strongest performer.</li>
                <li><strong>Gaussian Naive Bayes:</strong> Used as a lightweight probabilistic baseline.</li>
            </ul>

            <h4>Challenges & Real-World Relevance</h4>
            <p>A key challenge was <strong>class imbalance</strong> (failures are much rarer than normal operations), highlighting why Accuracy alone can be misleading in predictive maintenance problems.</p>
            <p>This project demonstrates how machine learning can support early warning systems, maintenance scheduling optimization, and improved operational readiness in defense, industrial, and manufacturing environments critical to reliability.</p>
        `
    },
    "flight-agent": {
        title: "AI-Powered Multi-Agent Flight Booking System",
        role: "AI Engineer",
        tech: ["CrewAI", "LLMs", "Python", "AI Agents"],
        description: `
            <p>Developed an AI-Powered Multi-Agent Flight Booking System using CrewAI to automate and enhance the travel booking experience through AI-driven collaboration. The project was designed around multiple specialized agents, each assigned a specific role such as Flight Search Agent, Price Comparison Agent, Itinerary Planner, and Customer Assistance Agent.</p>
            <p>The system works by taking a user’s travel query (source, destination, date, budget, preferences) and distributing tasks across agents. One agent retrieves available flight options, another compares pricing and schedules, while another recommends the most suitable itinerary based on user constraints such as cost, layovers, and timing. The assistant can also summarize travel options in a user-friendly way, helping users make faster and smarter booking decisions.</p>
            <p>The core focus of the project was to understand agentic AI workflows, including task delegation, inter-agent communication, prompt design, orchestration logic, and tool integration. This project gave practical exposure to building real-world LLM applications that mimic collaborative human workflows and solve practical automation problems in the travel domain.</p>
        `
    },
    "fisheries": {
        title: "AWS Data Engineering Capstone – Fisheries Analytics Pipeline",
        role: "Data Engineer",
        tech: ["Amazon S3", "AWS Cloud9", "AWS Glue", "Amazon Athena", "Pandas", "PyArrow", "Parquet", "SQL"],
        description: `
            <p>Designed and implemented a serverless data lake architecture on AWS to process and analyze global fisheries data (1950–2018) from the Sea Around Us research dataset.</p>
            <ul>
                <li>Built automated data ingestion and transformation workflows in <strong>AWS Cloud9</strong>, converting large raw CSV datasets into Parquet format using Pandas and PyArrow, significantly improving query performance.</li>
                <li>Created a <strong>multi-zone S3 data lake</strong> (raw & curated layers) following data engineering best practices for scalability, reliability, and schema evolution.</li>
                <li>Configured <strong>AWS Glue Crawlers and Glue Data Catalog</strong> to automatically infer schemas, manage metadata, and enable schema-on-read analytics.</li>
                <li>Queried and transformed datasets using <strong>Amazon Athena (SQL)</strong>, building analytical views such as country-wise catch trends, EEZ vs High Seas fishing patterns, and Fiji fish catch value over time.</li>
                <li>Performed multi-source data integration, cleaning, renaming, and standardizing columns to unify heterogeneous fisheries datasets across regions and fishing zones.</li>
                <li>Derived actionable insights including long-term catch weight trends, species-level analysis (e.g., mackerel), and country-level fishing contributions, demonstrating real-world analytical use cases.</li>
                <li>Optimized analytics cost and performance by leveraging columnar storage (Parquet), partitioned datasets, and serverless querying with Athena.</li>
            </ul>
        `
    },
    "rag-chatbot": {
        title: "RAG Chatbot",
        role: "AI Engineer",
        tech: ["Python", "ChromaDB", "Sentence Transformers", "LLMs"],
        description: `
            <p>Developed a Retrieval-Augmented Generation (RAG) based personalized chatbot for a specific website to deliver accurate, grounded, and domain-specific answers instead of generic LLM responses.</p>
            <ul>
                <li>Implemented an end-to-end pipeline that crawls website content, performs text chunking, and converts textual data into dense vector embeddings using <strong>sentence-transformer</strong> models for semantic understanding.</li>
                <li>Integrated <strong>ChromaDB</strong> as a vector database to store embeddings and enable fast similarity search for efficient context retrieval during question answering.</li>
                <li>Designed a semantic search–driven retrieval mechanism that fetches the most relevant content at query time, significantly reducing hallucinations in generated responses.</li>
                <li>Applied effective chunking strategies and embedding optimization to balance contextual richness and retrieval precision.</li>
                <li>Enabled dynamic knowledge updates by supporting re-crawling and re-indexing of website content without retraining the language model.</li>
                <li>Used conservative decoding and prompt-grounding techniques to ensure factual accuracy, response consistency, and controlled output generation.</li>
                <li>Focused on data privacy and consistency, ensuring the chatbot responds strictly based on authorized website content.</li>
            </ul>
        `
    },
    "food-delivery": {
        title: "Food Delivery Time Prediction",
        role: "Data Scientist",
        tech: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "CatBoost"],
        description: `
            <p>Designed and implemented a complete data science pipeline to predict food delivery time (in minutes), starting from business problem understanding to model deployment–ready insights using real-world operational data.</p>
            <ul>
                <li>Performed extensive data preprocessing and EDA on noisy real-world data, handling missing values, skewed distributions, and outliers; identified key patterns such as right-skewed delivery times and strong dependency on distance, traffic, and weather.</li>
                <li>Applied hypothesis testing (ANOVA, correlation analysis, peak vs non-peak tests) to statistically validate EDA insights, ensuring that observed patterns were data-driven and not random assumptions.</li>
                <li>Engineered high-impact features including geospatial distance (Haversine), peak-hour indicators, and interaction features, significantly improving model performance and capturing real-world delivery constraints.</li>
                <li>Built and evaluated multiple regression models (Random Forest, XGBoost, CatBoost) using MAE as the primary business metric, selecting <strong>CatBoost</strong> for its native categorical handling, reduced preprocessing complexity, stable residuals, and best generalization.</li>
                <li>Translated model outputs into business insights, showing how accurate ETA prediction can reduce customer complaints, improve delivery planning, and enable dynamic ETA adjustments during peak traffic or adverse weather.</li>
            </ul>
        `
    },
    "insurance-dashboard": {
        title: "Insurance Analytics Dashboard – Prism Insurance Pvt. Ltd",
        role: "Data Analyst",
        tech: ["Power BI", "DAX", "SQL", "Power Query"],
        images: ["images/powerbi-1.jpg", "images/powerbi-2.jpg", "images/powerbi-3.jpg"],
        description: `
            <p>Designed and developed an interactive Power BI dashboard to convert raw insurance data (policies, claims, and customer feedback) into actionable insights for business decision-making.</p>
            <ul>
                <li>Cleaned and transformed multi-source data using <strong>Power Query</strong>, handling missing values, duplicates, and inconsistent formats, and built a relational data model for seamless filtering across visuals.</li>
                <li>Created <strong>DAX measures and KPIs</strong> including total premium, total claims, total coverage, and active vs inactive policies to enable dynamic, real-time analysis.</li>
                <li>Built dedicated dashboard pages for business overview, claims analysis, and customer sentiment, allowing stakeholders to drill down by policy type, age group, and claim status.</li>
                <li>Applied text analytics and sentiment analysis using word clouds and sentiment scores to surface common customer issues and satisfaction trends.</li>
                <li>Identified key insights such as high revenue from travel insurance, high claim rejection rates, low policy retention (~40% active), and customer pain points around claim delays.</li>
            </ul>
        `
    },
    "aws-pipeline": {
        title: "Automated CSV-to-JSON Data Pipeline",
        role: "Cloud Data Engineer",
        tech: ["AWS S3", "AWS Lambda", "AWS Glue", "AWS IAM", "AWS CloudWatch"],
        description: `
            <p>Built an end-to-end, serverless data pipeline on AWS that automatically converts incoming CSV files into JSON format, enabling real-time data ingestion into a centralized cloud data lake.</p>
            <ul>
                <li>Implemented an event-driven architecture where Amazon S3 upload events trigger an <strong>AWS Lambda function</strong>, which orchestrates an AWS Glue ETL job for data transformation without any manual intervention.</li>
                <li>Designed the ETL process using <strong>AWS Glue</strong> to read CSV files, apply schema transformations, and write structured JSON output to a separate S3 bucket for downstream analytics.</li>
                <li>Configured AWS IAM roles and policies to securely manage permissions between S3, Lambda, and Glue, following least-privilege access principles.</li>
                <li>Integrated AWS CloudWatch for logging, monitoring, and troubleshooting Lambda executions and Glue job runs, ensuring observability and reliability.</li>
                <li>Architected the pipeline to be scalable, cost-efficient, and fault-tolerant, leveraging fully managed AWS services suitable for production-grade data workflows.</li>
            </ul>
        `
    }
};

function openModal(projectId) {
    const modal = document.getElementById('project-modal');
    const content = document.getElementById('modal-body-content');
    const data = projectData[projectId];

    if (data) {
        let imagesHtml = '';
        if (data.images && data.images.length > 0) {
            imagesHtml = `
                <div class="modal-gallery">
                    ${data.images.map(img => `<img src="${img}" alt="${data.title} Screenshot" class="modal-img">`).join('')}
                </div>
            `;
        }

        content.innerHTML = `
            <div class="modal-header-content">
                <h2>${data.title}</h2>
                <div class="modal-tags">
                    ${data.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            ${imagesHtml}
            <div class="modal-description">
                ${data.description}
            </div>
        `;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside content
document.getElementById('project-modal').addEventListener('click', (e) => {
    if (e.target.id === 'project-modal') {
        closeModal();
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
