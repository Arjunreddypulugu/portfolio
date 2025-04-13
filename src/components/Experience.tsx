'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const experiences = [
  {
    title: 'Data Engineer Intern',
    company: 'Van Dyk Recycling Solutions',
    location: 'Norwalk, CT',
    period: 'Jan 2025 – Jul 2025',
    logo: '/images/profile/vandyk.webp',
    achievements: [
      'Automated data analysis using Python, reducing processing time by 25% to support ML model training',
      'Troubleshot networking issues (TCP/IP, DNS, OSI) during upgrades, ensuring 99.9% system uptime',
      'Optimized cloud infrastructure resource allocation by 20% through SQL analysis of 1M+ records',
      'Configured routing and firewalls, enhancing network security by 30% in collaboration with cross-functional teams',
      'Performed gap analysis on cloud systems, reducing latency by 15% through optimized memory and CPU usage',
      'Used Jupyter notebooks for reproducible data analysis, improving ML model performance insights',
      'Built predictive models in R with 90% accuracy to forecast system downtime and improve reliability',
      'Deployed and managed AWS EC2 instances and S3 storage solutions, improving system scalability by 25%',
      'Optimized cloud performance using AWS DynamoDB, enabling efficient handling of high-volume transactional data',
      'Resolved system errors using traceroute, dig, and cURL, achieving a 20% improvement in resolution time',
      'Integrated TensorFlow ML pipelines, boosting cloud task execution speed by 20% through optimization'
    ],
    technologies: ['Python', 'AWS', 'SQL', 'R', 'TensorFlow', 'Networking', 'Cloud Infrastructure']
  },
  {
    title: 'Graduate Teaching Assistant',
    company: 'Northeastern University',
    location: 'Boston, MA',
    period: 'Jan 2023 – Dec 2023',
    logo: '/images/profile/nuLogo.jpeg',
    achievements: [
      'Taught Python, PySpark, and Hadoop to 150+ students, emphasizing debugging, data modeling, and cloud concepts',
      'Led workshops on ML and AI, improving student skills in frameworks like TensorFlow and PyTorch',
      'Developed Jupyter notebook projects, enabling reproducible data analysis and efficient ML model evaluation',
      'Resolved lab technical issues, ensuring 100% operational continuity and seamless learning experiences',
      'Designed assignments on OS concepts, including memory, storage, and CPU usage, enhancing student understanding'
    ],
    technologies: ['Python', 'PySpark', 'Hadoop', 'TensorFlow', 'PyTorch', 'ML/AI', 'Operating Systems']
  },
  {
    title: "Systems Analyst",
    company: "Infosys",
    location: "Hyderabad, India",
    period: "Dec 2021 – Jul 2023",
    logo: '/images/profile/infLogo.jpg',
    achievements: [
      "Built ETL pipelines for Prometheus time series data using Python/SQL, accelerating ad-hoc analysis 30%",
      "Engineered Python anomaly detection scripts with statistical models (ARIMA), reducing system downtime 40%",
      "Designed scalable KPI frameworks using time series analysis and Apache Spark, cutting operational costs 15%",
      "Automated Tableau dashboard generation via Python/API integrations, boosting cross-team collaboration 35%",
      "Developed data models for executive dashboards using star schema design, improving strategic planning accuracy 30%",
      "Optimized time series databases (Prometheus/InfluxDB), reducing query latency 20% through indexing and partitioning",
      "Deployed Kafka for real-time metric streaming, enabling 95% faster anomaly detection across distributed systems",
      "Created automated alerting systems with Python, preventing 100+ monthly downtime hours via proactive monitoring"
    ],
    technologies: ["Python", "SQL", "Prometheus", "Kafka", "Apache Spark", "Tableau", "Time Series Analysis", "ETL", "ARIMA", "InfluxDB"],
    icon: "database"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-gray-400">Building innovative solutions in data science and engineering</p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-gray-700"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-4">
                    {exp.logo && (
                      <div className="w-12 h-12 relative flex-shrink-0 bg-gray-700/50 rounded-lg flex items-center justify-center">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          fill
                          className="object-contain p-2"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-gray-400 mt-1">
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="text-gray-400">{exp.period}</span>
                  </div>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="pl-2">{achievement}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-sm bg-gray-700/50 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 