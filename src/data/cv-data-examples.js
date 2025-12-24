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
let firstExperienceExample = new experienceData("Google", "Munich", "Junior Fullstack developer", "12/2022", "07/2025", [
    "Increased sales by 25% within the first year by implementing a new customer acquisition strategy.",
    "Led a team of 5 to complete a project 2 weeks ahead of schedule, exceeding client expectations.",
    "Streamlined company operations, reducing overhead costs by 15% through process automation.",
])

let secondExperienceExample = new experienceData("Facebook", "California", "Product Manager", "12/2022", "07/2025", [
    "Increased sales by 25% within the first year by implementing a new customer acquisition strategy.",
    "Led a team of 5 to complete a project 2 weeks ahead of schedule, exceeding client expectations.",
    "Streamlined company operations, reducing overhead costs by 15% through process automation.",
])

let thirdExperienceExample = new experienceData(
    "TechSolutions",
    "Berlin",
    "Senior Software Engineer",
    "01/2021",
    "12/2025",
    [
        "Led the development of a scalable cloud platform that increased user engagement by 30%.",
        "Optimized backend processes, reducing server response time by 50%.",
        "Introduced automated testing procedures, cutting bug rates by 40% in production.",
        "Mentored 6 junior developers, all of whom advanced to senior roles within 18 months.",
        "Implemented a real-time analytics feature, increasing customer satisfaction by 20%.",
        "Collaborated with the marketing team to integrate machine learning models, boosting ad targeting efficiency by 25%.",
        "Designed and implemented a secure API, reducing unauthorized access attempts by 90%.",
        "Created a comprehensive documentation system that decreased onboarding time for new hires by 35%.",
        "Negotiated vendor contracts that saved the company over $100,000 annually in software licensing.",
        "Developed a cross-platform mobile app that gained over 1 million downloads in the first 6 months."
    ]
);


export const experienceExamples = [
    firstExperienceExample,
    secondExperienceExample,
    thirdExperienceExample
]

// education examples

let firstEducationExample = new educationData("Hochschule Darmstadt", "Bachelor in Computer science", "12/2022", "07/2025", [
    "Increased sales by 25% within the first year by implementing a new customer acquisition strategy.",
    "Led a team of 5 to complete a project 2 weeks ahead of schedule, exceeding client expectations.Increased sales by 25% within the first year by implementing a new customer acquisition strategy.Increased sales by 25% within the first year by implementing a new customer acquisition strategy.",
    "Streamlined company operations, reducing overhead costs by 15% through process automation.",
])

let secondEducationExample = new educationData("TU Munich", "Masters in Computer science", "12/2022", "07/2025", [
    "Increased sales by 25% within the first year by implementing a new customer acquisition strategy.",
    "Led a team of 5 to complete a project 2 weeks ahead of schedule, exceeding client expectations.",
    "Streamlined company operations, reducing overhead costs by 15% through process automation.",
])

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


/*
let thirdEducationExample = new educationData("TU Munich", "Masters in Computer science", "12/2022", "07/2025", null)
*/

export const educationExamples = [
    firstEducationExample,
    secondEducationExample
]
// skills Examples

let firstSkillExample = new skillsData("C++")
let secondSkillExample = new skillsData("React")
let thirdSkillExample = new skillsData("Python")

export let skillsExamples = [
    firstSkillExample,
    secondSkillExample,
    thirdSkillExample
]