import {personalData} from "./cv-data-classes.js";
import {experienceData} from "./cv-data-classes.js";
import {educationData} from "./cv-data-classes.js";
import {skillsData} from "./cv-data-classes.js";
import {getRandomInt} from "../components/helper.js";
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
let firstExperienceExample = new experienceData("Google", "Munich", "12/2022", "07/2025", [
    "Increased sales by 25% within the first year by implementing a new customer acquisition strategy.",
    "Led a team of 5 to complete a project 2 weeks ahead of schedule, exceeding client expectations.",
    "Streamlined company operations, reducing overhead costs by 15% through process automation.",
])

let secondExperienceExample = new experienceData("Facebook", "California", "12/2022", "07/2025", [
    "Increased sales by 25% within the first year by implementing a new customer acquisition strategy.",
    "Led a team of 5 to complete a project 2 weeks ahead of schedule, exceeding client expectations.",
    "Streamlined company operations, reducing overhead costs by 15% through process automation.",
])

export const experienceExamples = [
    firstExperienceExample,
    secondExperienceExample
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