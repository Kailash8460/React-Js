import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import User from './components/User/User'
import styles from './App.module.css'

const App = () => {
    const user = [
        {
            name: "Kailash",
            age: 22,
            city: "Mumbai"
        },
        {
            name: "Ravi",
            age: 22,
            city: "Mumbai"
        },
        {
            name: "Rahul",
            age: 22,
            city: "Mumbai"
        },
        {
            name: "Rakesh",
            age: 22,
            city: "Mumbai"
        }
    ];

    const jobOpenings = [
        {
            "companyLogo": "https://logo.clearbit.com/google.com",
            "companyName": "Google",
            "datePosted": "5 days ago",
            "position": "Frontend Engineer",
            "tags": [
                { "tagName": "Full Time", "tagBgColor": "#E0F7FA" },
                { "tagName": "React JS", "tagBgColor": "#FFF3E0" },
                { "tagName": "Senior Level", "tagBgColor": "#F3E5F5" }
            ],
            "payroll": "$60/hr",
            "location": "Mumbai, India"
        },
        {
            "companyLogo": "https://logo.clearbit.com/microsoft.com",
            "companyName": "Microsoft",
            "datePosted": "3 weeks ago",
            "position": "Cloud Architect",
            "tags": [
                { "tagName": "Full Time", "tagBgColor": "#E8F5E9" },
                { "tagName": "Azure", "tagBgColor": "#E1F5FE" },
                { "tagName": "Senior Level", "tagBgColor": "#FCE4EC" }
            ],
            "payroll": "$95/hr",
            "location": "Seattle, USA"
        },
        {
            "companyLogo": "https://logo.clearbit.com/amazon.com",
            "companyName": "Amazon",
            "datePosted": "2 months ago",
            "position": "Backend Developer",
            "tags": [
                { "tagName": "Java", "tagBgColor": "#FFF8E1" },
                { "tagName": "Full Time", "tagBgColor": "#E3F2FD" }
            ],
            "payroll": "$45/hr",
            "location": "Berlin, Germany"
        },
        {
            "companyLogo": "https://logo.clearbit.com/netflix.com",
            "companyName": "Netflix",
            "datePosted": "5 days ago",
            "position": "DevOps Engineer",
            "tags": [
                { "tagName": "AWS", "tagBgColor": "#E0F2F1" },
                { "tagName": "Senior Level", "tagBgColor": "#F1F8E9" }
            ],
            "payroll": "$72/hr",
            "location": "Los Gatos, USA"
        },
        {
            "companyLogo": "https://logo.clearbit.com/spotify.com",
            "companyName": "Spotify",
            "datePosted": "3 weeks ago",
            "position": "Mobile App Developer",
            "tags": [
                { "tagName": "Kotlin", "tagBgColor": "#F3E5F5" },
                { "tagName": "Full Time", "tagBgColor": "#E8EAF6" }
            ],
            "payroll": "$75/hr",
            "location": "Stockholm, Sweden"
        },
        {
            "companyLogo": "https://logo.clearbit.com/tesla.com",
            "companyName": "Tesla",
            "datePosted": "2 months ago",
            "position": "Machine Learning Engineer",
            "tags": [
                { "tagName": "Python", "tagBgColor": "#E1F5FE" },
                { "tagName": "Senior Level", "tagBgColor": "#FFFDE7" }
            ],
            "payroll": "$68/hr",
            "location": "Austin, USA"
        },
        {
            "companyLogo": "https://logo.svgcdn.com/logos/adobe.png",
            "companyName": "Adobe",
            "datePosted": "5 days ago",
            "position": "UI/UX Designer",
            "tags": [
                { "tagName": "Figma", "tagBgColor": "#E0F7FA" },
                { "tagName": "Part Time", "tagBgColor": "#FCE4EC" }
            ],
            "payroll": "$40/hr",
            "location": "Bengaluru, India"
        },
        {
            "companyLogo": "https://logo.clearbit.com/airbnb.com",
            "companyName": "Airbnb",
            "datePosted": "3 weeks ago",
            "position": "Full Stack Developer",
            "tags": [
                { "tagName": "Node JS", "tagBgColor": "#F1F8E9" },
                { "tagName": "React JS", "tagBgColor": "#E3F2FD" },
                { "tagName": "Full Time", "tagBgColor": "#FFF3E0" }
            ],
            "payroll": "$80/hr",
            "location": "San Francisco, USA"
        },
        {
            "companyLogo": "https://logo.clearbit.com/zomato.com",
            "companyName": "Zomato",
            "datePosted": "2 months ago",
            "position": "Data Analyst",
            "tags": [
                { "tagName": "SQL", "tagBgColor": "#E8EAF6" },
                { "tagName": "Junior Level", "tagBgColor": "#E0F2F1" }
            ],
            "payroll": "$25/hr",
            "location": "Gurugram, India"
        },
        {
            "companyLogo": "https://logo.clearbit.com/uber.com",
            "companyName": "Uber",
            "datePosted": "5 days ago",
            "position": "SRE Engineer",
            "tags": [
                { "tagName": "DevOps", "tagBgColor": "#FFF8E1" },
                { "tagName": "Full Time", "tagBgColor": "#E1F5FE" }
            ],
            "payroll": "$85/hr",
            "location": "Toronto, Canada"
        },
        {
            "companyLogo": "https://logo.clearbit.com/meta.com",
            "companyName": "Meta",
            "datePosted": "3 weeks ago",
            "position": "AR/VR Developer",
            "tags": [
                { "tagName": "Unity", "tagBgColor": "#FCE4EC" },
                { "tagName": "Full Time", "tagBgColor": "#E8F5E9" }
            ],
            "payroll": "$78/hr",
            "location": "Menlo Park, USA"
        },
        {
            "companyLogo": "https://logo.clearbit.com/intel.com",
            "companyName": "Intel",
            "datePosted": "2 months ago",
            "position": "Embedded Systems Engineer",
            "tags": [
                { "tagName": "C++", "tagBgColor": "#E1F5FE" },
                { "tagName": "Senior Level", "tagBgColor": "#E0F7FA" }
            ],
            "payroll": "$95/hr",
            "location": "Dublin, Ireland"
        },
        {
            "companyLogo": "https://logo.clearbit.com/slack.com",
            "companyName": "Slack",
            "datePosted": "5 days ago",
            "position": "Backend API Developer",
            "tags": [
                { "tagName": "Node JS", "tagBgColor": "#F3E5F5" },
                { "tagName": "Full Time", "tagBgColor": "#E1F5FE" }
            ],
            "payroll": "$68/hr",
            "location": "Vancouver, Canada"
        },
        {
            "companyLogo": "https://logo.clearbit.com/tiktok.com",
            "companyName": "TikTok",
            "datePosted": "3 weeks ago",
            "position": "Data Scientist",
            "tags": [
                { "tagName": "Python", "tagBgColor": "#FFF3E0" },
                { "tagName": "Machine Learning", "tagBgColor": "#E0F7FA" }
            ],
            "payroll": "$70/hr",
            "location": "Singapore, Singapore"
        },
        {
            "companyLogo": "https://logo.clearbit.com/wipro.com",
            "companyName": "Wipro",
            "datePosted": "2 months ago",
            "position": "Java Developer",
            "tags": [
                { "tagName": "Java", "tagBgColor": "#E8EAF6" },
                { "tagName": "Junior Level", "tagBgColor": "#E0F2F1" }
            ],
            "payroll": "$22/hr",
            "location": "Pune, India"
        },
        {
            "companyLogo": "https://logo.clearbit.com/infosys.com",
            "companyName": "Infosys",
            "datePosted": "5 days ago",
            "position": "QA Tester",
            "tags": [
                { "tagName": "Automation", "tagBgColor": "#FFFDE7" },
                { "tagName": "Full Time", "tagBgColor": "#E3F2FD" }
            ],
            "payroll": "$18/hr",
            "location": "Hyderabad, India"
        },
        {
            "companyLogo": "https://logo.clearbit.com/salesforce.com",
            "companyName": "Salesforce",
            "datePosted": "3 weeks ago",
            "position": "CRM Specialist",
            "tags": [
                { "tagName": "Salesforce", "tagBgColor": "#E0F7FA" },
                { "tagName": "Full Time", "tagBgColor": "#F1F8E9" }
            ],
            "payroll": "$55/hr",
            "location": "London, UK"
        },
        {
            "companyLogo": "https://logo.clearbit.com/oracle.com",
            "companyName": "Oracle",
            "datePosted": "2 months ago",
            "position": "Database Administrator",
            "tags": [
                { "tagName": "SQL", "tagBgColor": "#E8F5E9" },
                { "tagName": "Senior Level", "tagBgColor": "#FFF3E0" }
            ],
            "payroll": "$80/hr",
            "location": "Tokyo, Japan"
        },
        {
            "companyLogo": "https://logo.clearbit.com/linkedin.com",
            "companyName": "LinkedIn",
            "datePosted": "5 days ago",
            "position": "Product Manager",
            "tags": [
                { "tagName": "Full Time", "tagBgColor": "#E8EAF6" },
                { "tagName": "Tech", "tagBgColor": "#E0F2F1" }
            ],
            "payroll": "$90/hr",
            "location": "Dublin, Ireland"
        }
    ];

    return (
        <div className={styles.page}>
            <Navbar />
            {/* <div className="parent">
                <Card />
                <Card />
                <Card />
                <Card />
            </div> */}
            <h2>Users by passing name directly</h2>
            <div className={styles.parent}>
                <User name="Kailash" />
                <User name="Ravi" />
                <User name="Rahul" />
                <User name="Rakesh" />
            </div>
            <h2>Users by passing name through array</h2>
            <div className={styles.parent}>
                <User name={user[0].name} />
                <User name={user[1].name} />
                <User name={user[2].name} />
                <User name={user[3].name} />
            </div>
            <h2>Users by passing name through array using maps</h2>
            <div className={styles.parent}>
                {user.map((user) => (
                    <User name={user.name} />
                ))}
            </div>
            <h2>Job Cards by passing values through array using maps</h2>
            <div className={styles.parent}>
                {jobOpenings.map(function (jobs) {
                    return <Card
                        companyLogo={jobs.companyLogo}
                        companyName={jobs.companyName}
                        datePosted={jobs.datePosted}
                        position={jobs.position}
                        tags={jobs.tags}
                        payroll={jobs.payroll}
                        location={jobs.location}
                    />;
                })}
            </div>
        </div>
    )
}

export default App
