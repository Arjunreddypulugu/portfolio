'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPython, FaDatabase, FaChartLine, FaBrain, FaCloud, FaTools } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiJupyter } from 'react-icons/si';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95, icon: <FaPython className="text-blue-500" /> },
        { name: 'R', level: 85, icon: <span className="text-blue-500 font-bold">R</span> },
        { name: 'SQL', level: 90, icon: <FaDatabase className="text-blue-500" /> },
      ],
    },
    {
      title: 'Data Science & ML',
      skills: [
        { name: 'TensorFlow', level: 85, icon: <SiTensorflow className="text-orange-500" /> },
        { name: 'PyTorch', level: 80, icon: <SiPytorch className="text-red-500" /> },
        { name: 'Scikit-learn', level: 90, icon: <SiScikitlearn className="text-orange-500" /> },
        { name: 'Pandas', level: 95, icon: <SiPandas className="text-blue-500" /> },
        { name: 'NumPy', level: 90, icon: <SiNumpy className="text-blue-500" /> },
      ],
    },
    {
      title: 'Data Visualization',
      skills: [
        { name: 'Tableau', level: 85, icon: <FaChartLine className="text-blue-500" /> },
        { name: 'Matplotlib', level: 90, icon: <FaChartLine className="text-blue-500" /> },
        { name: 'Seaborn', level: 85, icon: <FaChartLine className="text-blue-500" /> },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Jupyter Notebooks', level: 95, icon: <SiJupyter className="text-orange-500" /> },
        { name: 'Git', level: 85, icon: <FaTools className="text-gray-500" /> },
        { name: 'Docker', level: 80, icon: <FaCloud className="text-blue-500" /> },
        { name: 'Azure', level: 75, icon: <FaCloud className="text-blue-500" /> },
      ],
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square w-full max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-6 opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform -rotate-6 opacity-25" />
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <Image
                src="/images/profile/arjun.jpeg"
                alt="Arjun Reddy Pulugu"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl font-bold"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300"
            >
              As a Data Analytics Engineering graduate student at Northeastern University (GPA: 3.91/4.0), I blend expertise in data engineering, machine learning, and systems analysis. My experience spans building ETL pipelines, developing ML models, and optimizing cloud infrastructure across AWS and Azure platforms.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-300"
            >
              From engineering real-time analytics systems at Infosys to optimizing cloud resources at Van Dyk Recycling Solutions, I've consistently delivered scalable solutions that drive efficiency. My strong foundation in Python, SQL, and time series analysis, combined with expertise in tools like Kafka, Spark, and TensorFlow, enables me to tackle complex data challenges across the entire data lifecycle.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <div className="bg-gray-800/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold text-blue-400">Focus Areas</h3>
                <p className="text-sm text-gray-300">ML/AI, Cloud Computing, Data Engineering</p>
              </div>
              <div className="bg-gray-800/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold text-purple-400">Education</h3>
                <p className="text-sm text-gray-300">MS in Data Analytics Engineering, GPA: 3.91</p>
              </div>
              <div className="bg-gray-800/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold text-pink-400">Key Skills</h3>
                <p className="text-sm text-gray-300">Python, Azure, AWS, ML, Data Analysis</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 