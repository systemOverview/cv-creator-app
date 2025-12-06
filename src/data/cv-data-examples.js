import {experienceData} from "./cv-data-classes.js";
import {educationData} from "./cv-data-classes.js";
import {skillsData} from "./cv-data-classes.js";

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
// experience examples

let firstExperienceExample = new experienceData("Google", "Munich", "12/22", "07/25", [
    "Increased sales by 25% within the first year by implementing a new customer acquisition strategy.",
    "Led a team of 5 to complete a project 2 weeks ahead of schedule, exceeding client expectations.",
    "Streamlined company operations, reducing overhead costs by 15% through process automation.",
])

let secondExperienceExample = new experienceData("Facebook", "California", "12/22", "07/25", [
    "Increased sales by 25% within the first year by implementing a new customer acquisition strategy.",
    "Led a team of 5 to complete a project 2 weeks ahead of schedule, exceeding client expectations.",
    "Streamlined company operations, reducing overhead costs by 15% through process automation.",
])

export const experienceExamples = [
    firstExperienceExample,
    secondExperienceExample
]

// education examples

let firstEducationExample = new educationData("Hochschule Darmstadt", "12/22", "07/25", [
    "Increased sales by 25% within the first year by implementing a new customer acquisition strategy.",
    "Led a team of 5 to complete a project 2 weeks ahead of schedule, exceeding client expectations.",
    "Streamlined company operations, reducing overhead costs by 15% through process automation.",
])

let secondEducationExample = new educationData("TU Munich", "07/25", [
    "Increased sales by 25% within the first year by implementing a new customer acquisition strategy.",
    "Led a team of 5 to complete a project 2 weeks ahead of schedule, exceeding client expectations.",
    "Streamlined company operations, reducing overhead costs by 15% through process automation.",
])

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