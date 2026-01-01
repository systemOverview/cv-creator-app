import dataClasses from "./cv-data-classes.js";
import {getRandomInt} from "../components/helper.js";
let experienceData = dataClasses.experienceData;
let educationData = dataClasses.educationData;
let skillsData = dataClasses.skillsData;
let personalData= dataClasses.personalData;
export const achievementsList = [
    "Increased sales by 25% within the first year by implementing a new customer acquisition strategy.",
    "Led a team of 5 to complete a project 2 weeks ahead of schedule, exceeding client expectations.",
    "Streamlined company operations, reducing overhead costs by 15% through process automation.",
    "Achieved a 98% customer satisfaction rate by resolving client issues promptly and effectively.",
    "Developed and launched a new marketing campaign that boosted social media engagement by 30%.",
    "Introduced a new employee training program that improved productivity by 20%.",
    "Successfully negotiated a partnership deal that resulted in a 50% increase in revenue.",
    "Improved website traffic by 40% through SEO optimization and targeted digital advertising.",
    "Managed a budget of $500,000, delivering projects on time and under budget.",
    "Created a company-wide newsletter that improved internal communication and team collaboration."
];



export const titleExamples= [
    "Cloud Solutions Architect",
    "Cybersecurity Analyst",
    "Full Stack Developer",
    "AI/ML Engineer",
    "IT Support Specialist",
    "Network Security Administrator",
    "Data Scientist",
    "DevOps Engineer",
    "Software Development Manager",
    "Systems Integration Consultant"
];
// personal data example
export const firstPersonalDataExample = new personalData("John Doe", titleExamples[getRandomInt(0,titleExamples.length)], null, "John.doe@gmail.com", "0123456789", "Marktplatz 15")
// experience examples
let firstExperienceExample = new experienceData(
    "Junior Business Analyst",
    "Amsterdam",
    "Retail Solutions Ltd.",
    "08/2022",
    "03/2024",
    [
        "Analyzed sales and customer data to identify trends that supported strategic planning decisions.",
        "Built and maintained reports and dashboards to track key performance indicators.",
        "Collaborated with cross-functional teams to evaluate and improve internal business processes.",
        "Presented insights and recommendations to senior analysts and managers."
    ]
);

let secondExperienceExample = new experienceData(
    "Business Analyst",
    "Global Consulting Group",
    "Paris",
    "04/2024",
    "12/2025",
    [
        "Led end-to-end analysis for client projects, translating business requirements into actionable insights.",
        "Conducted market and competitor analyses to support international expansion strategies.",
        "Improved reporting workflows, reducing analysis turnaround time through better data organization.",
        "Mentored junior analysts and reviewed their work for accuracy and clarity."
    ]
);



export const experienceExamples = [
    firstExperienceExample,
    secondExperienceExample,
]

// education examples

let firstEducationExample = new educationData(
    "University of Barcelona",
    "Bachelor of Economics",
    "09/2016",
    "06/2020",
    [
        "Graduated in the top 20% of the cohort with strong performance in microeconomics and econometrics.",
        "Completed a capstone project analyzing market behavior using real-world economic data.",
        "Worked in team-based assignments to model economic scenarios and present findings clearly.",
        "Developed strong analytical and quantitative reasoning skills through applied coursework."
    ]
);

let secondEducationExample = new educationData(
    "University of Amsterdam",
    "Master of International Business",
    "09/2020",
    "07/2022",
    [
        "Specialized in global strategy and cross-cultural management through advanced seminars.",
        "Led a research project on international market entry strategies for emerging economies.",
        "Applied statistical and qualitative analysis methods to business case studies.",
        "Graduated with distinction based on thesis quality and academic performance."
    ]
);


function generateNewExperienceHolder(){
    return (new experienceData("", "", "","","",[]))
}

function generateNewEducationHolder() {
    return (new educationData("", "", "","",[]))
}

export let newDataHolders = {
    newEducationGenerator : generateNewEducationHolder,
    newExperienceGenerator : generateNewExperienceHolder
}




export const educationExamples = [
    firstEducationExample,
    secondEducationExample
]
// skills Examples

let firstSkillExample = new skillsData("Data Analysis")
let secondSkillExample = new skillsData("Market Research")
let thirdSkillExample = new skillsData("Reporting")

export let skillsExamples = [
    firstSkillExample,
    secondSkillExample,
    thirdSkillExample
]

let emptyPersonalData = new personalData();
let emptyEducationData = new educationData();
let emptyExperienceData = new experienceData();
let emptySkillsData = new skillsData();

export let emptyData = {
    emptyPersonalData : emptyPersonalData,
}