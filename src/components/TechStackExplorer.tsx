'use client';

import { motion } from 'framer-motion';
import { 
  FaPython, 
  FaJava, 
  FaDatabase, 
  FaAws, 
  FaLinux, 
  FaWindows, 
  FaApple,
  FaMicrosoft,
  FaCloud
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiCplusplus, 
  SiScala, 
  SiApachespark, 
  SiMysql, 
  SiPostgresql, 
  SiMongodb, 
  SiOracle,
  SiTableau,
  SiGooglecloud,
  SiDatabricks,
  SiR
} from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';
import { BsDatabase } from 'react-icons/bs';

const skills = {
  languages: [
    { name: 'Python', icon: <FaPython className="w-6 h-6" />, level: 95 },
    { name: 'SQL', icon: <FaDatabase className="w-6 h-6" />, level: 90 },
    { name: 'R', icon: <SiR className="w-6 h-6" />, level: 85 },
    { name: 'Java', icon: <FaJava className="w-6 h-6" />, level: 80 },
    { name: 'JavaScript', icon: <SiJavascript className="w-6 h-6" />, level: 75 },
    { name: 'C', icon: <TbBrandCpp className="w-6 h-6" />, level: 70 },
    { name: 'C++', icon: <SiCplusplus className="w-6 h-6" />, level: 70 },
    { name: 'Scala', icon: <SiScala className="w-6 h-6" />, level: 75 },
    { name: 'Apache Spark', icon: <SiApachespark className="w-6 h-6" />, level: 85 }
  ],
  databases: [
    { name: 'MySQL', icon: <SiMysql className="w-6 h-6" />, level: 90 },
    { name: 'PostgreSQL', icon: <SiPostgresql className="w-6 h-6" />, level: 85 },
    { name: 'Aurora', icon: <BsDatabase className="w-6 h-6" />, level: 80 },
    { name: 'Redshift', icon: <FaAws className="w-6 h-6" />, level: 85 },
    { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6" />, level: 80 },
    { name: 'Hadoop', icon: <BsDatabase className="w-6 h-6" />, level: 75 },
    { name: 'Hive', icon: <SiApachespark className="w-6 h-6" />, level: 80 },
    { name: 'Oracle', icon: <SiOracle className="w-6 h-6" />, level: 75 },
    { name: 'MS SQL Server', icon: <BsDatabase className="w-6 h-6" />, level: 85 }
  ],
  machineLearning: [
    { name: 'KNN', icon: '🤖', level: 90 },
    { name: 'Random Forest', icon: '🌳', level: 90 },
    { name: 'Linear Regression', icon: '📈', level: 95 },
    { name: 'Multilinear Regression', icon: '📊', level: 95 },
    { name: 'Decision Tree', icon: '🌲', level: 90 },
    { name: 'Logistic Regression', icon: '📉', level: 95 },
    { name: 'CNN', icon: '🧠', level: 85 }
  ],
  cloud: [
    { name: 'AWS Lambda', icon: <FaAws className="w-6 h-6" />, level: 85 },
    { name: 'AWS VPC', icon: <FaAws className="w-6 h-6" />, level: 90 },
    { name: 'AWS EC2', icon: <FaAws className="w-6 h-6" />, level: 90 },
    { name: 'AWS S3', icon: <FaAws className="w-6 h-6" />, level: 95 },
    { name: 'AWS IAM', icon: <FaAws className="w-6 h-6" />, level: 90 },
    { name: 'AWS SageMaker', icon: <FaAws className="w-6 h-6" />, level: 85 },
    { name: 'AWS DynamoDB', icon: <FaAws className="w-6 h-6" />, level: 85 },
    { name: 'Google Cloud Platform', icon: <SiGooglecloud className="w-6 h-6" />, level: 80 },
    { name: 'Azure', icon: <FaCloud className="w-6 h-6" />, level: 75 },
    { name: 'Databricks', icon: <SiDatabricks className="w-6 h-6" />, level: 85 }
  ],
  operatingSystems: [
    { name: 'Windows', icon: <FaWindows className="w-6 h-6" />, level: 90 },
    { name: 'Linux', icon: <FaLinux className="w-6 h-6" />, level: 85 },
    { name: 'macOS', icon: <FaApple className="w-6 h-6" />, level: 90 }
  ],
  others: [
    { name: 'Tableau', icon: <SiTableau className="w-6 h-6" />, level: 90 },
    { name: 'PowerBI', icon: <FaMicrosoft className="w-6 h-6" />, level: 85 },
    { name: 'Excel', icon: <FaMicrosoft className="w-6 h-6" />, level: 90 },
    { name: 'SDLC', icon: '🔄', level: 85 },
    { name: 'Agile', icon: '🔄', level: 90 },
    { name: 'Waterfall', icon: '⬇️', level: 85 }
  ]
};

const TechStackExplorer = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-400">GPA: 3.91/4.0</p>
        </motion.div>

        {Object.entries(skills).map(([category, skillList], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold mb-6 capitalize bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillList.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-blue-400">{skill.icon}</div>
                    <h4 className="font-medium">{skill.name}</h4>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStackExplorer; 