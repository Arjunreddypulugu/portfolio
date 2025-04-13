'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaLink } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiJupyter, SiPython, SiR, SiTableau } from 'react-icons/si';
import Image from 'next/image';
import { getImagePath } from './ImageWithBasePath';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects = [
    {
      title: 'Deep Protein Structure Modeling',
      description: 'Neural network model that predicts the tertiary (3D) structure of proteins from amino acid sequences using deep learning techniques.',
      longDescription: 'Built a deep learning model to predict protein 3D structures from amino acid sequences, utilizing the ProteinNet dataset and implementing advanced neural network architectures. The model processes primary protein structures to predict their complex tertiary formations, essential for understanding protein functions in biological systems.',
      tags: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Matplotlib', 'Protein Structure', 'Deep Learning'],
      category: 'ml',
      github: 'https://github.com/Arjunreddypulugu/deep-protein-structure-prediction',
      icon: <SiTensorflow className="text-orange-500" />,
      color: 'from-blue-500 to-indigo-600',
      image: '/images/projects/protein.jpg',
      highlights: [
        'Implemented neural networks for protein structure prediction using TensorFlow/Keras',
        'Utilized ProteinNet dataset for standardized training and evaluation',
        'Developed models to predict 3D coordinates of major protein atoms',
        'Integrated visualization tools for 3D protein structure representation'
      ]
    },
    {
      title: 'Explainable-AI-Healthcare',
      description: 'Improving accuracy of an explainable AI model\'s prediction of patient outcomes by adding stacked generalization.',
      longDescription: 'Developed an interpretable machine learning system for healthcare predictions, combining the power of ensemble methods with the transparency needed in healthcare applications. The project analyzes patient data from a hospital intensive care unit (ICU) to predict patient mortality while maintaining explainability through stacked generalization techniques.',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter Notebook', 'Healthcare', 'XAI'],
      category: 'ml',
      github: 'https://github.com/Arjunreddypulugu/Explainable-AI-Healthcare',
      icon: <SiScikitlearn className="text-orange-500" />,
      color: 'from-green-500 to-teal-600',
      image: '/images/projects/XAI.png',
      highlights: [
        'Implemented stacked generalization with explainable boosting machine (EBM) as base learner',
        'Used feature importance scores from EBM to train a meta learner for improved accuracy',
        'Analyzed ICU patient data to predict mortality with both high accuracy and interpretability',
        'Created a pipeline that provides both explainable results and higher accuracy for healthcare professionals'
      ]
    },
    {
      title: 'Intrusion Detection System',
      description: 'Exploring the NSL-KDD Dataset: A Comprehensive Analysis About Intrusion Detection System.',
      longDescription: 'This project explores the NSL-KDD dataset, a benchmark for evaluating machine learning models in network intrusion detection. The analysis includes data cleaning, exploratory data analysis, preprocessing, feature engineering, and model building with XGBoost and Logistic Regression to fortify defenses against cyber threats.',
      tags: ['Python', 'XGBoost', 'Logistic Regression', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Cybersecurity'],
      category: 'ml',
      github: 'https://github.com/Arjunreddypulugu/intrusion-detection-system',
      icon: <SiPython className="text-blue-500" />,
      color: 'from-purple-500 to-pink-600',
      image: '/images/projects/intrusion.jpeg',
      highlights: [
        'Conducted comprehensive analysis of the NSL-KDD dataset for network intrusion detection',
        'Implemented data cleaning, preprocessing, and feature engineering techniques',
        'Built and evaluated XGBoost and Logistic Regression models for intrusion detection',
        'Analyzed feature importance to identify key factors contributing to network intrusions'
      ]
    },
    {
      title: 'Text2SQL LLM',
      description: 'LLM Chatbot developed with Langchain and LlamaIndex for natural language to SQL processing, leveraging OpenAI\'s GPT-3.5 Turbo LLM engine.',
      longDescription: 'This project contains code for Langchain and LlamaIndex chatbots that utilize natural language to SQL processing. The data source for these chatbots is IPEDS (Integrated Postsecondary Education Data System), a comprehensive database maintained by the National Center for Education Statistics (NCES) covering various aspects of postsecondary education in the United States.',
      tags: ['Python', 'LangChain', 'LlamaIndex', 'OpenAI', 'Streamlit', 'SQL', 'Education Data'],
      category: 'ml',
      github: 'https://github.com/Arjunreddypulugu/ipedsllm',
      icon: <SiPython className="text-blue-500" />,
      color: 'from-red-500 to-orange-600',
      image: '/images/projects/text.jpeg',
      highlights: [
        'Developed chatbots using Langchain and LlamaIndex for natural language to SQL processing',
        'Integrated OpenAI GPT-3.5 Turbo LLM engine for advanced language understanding',
        'Utilized IPEDS (Integrated Postsecondary Education Data System) as the data source',
        'Created a user-friendly interface with Streamlit for easy interaction with the chatbots'
      ]
    },
    {
      title: 'AI-Driven Marketing',
      description: 'AI-driven Marketing Campaign focusing on personalized engagement and customer retention.',
      longDescription: 'This project implements AI-driven marketing strategies across three key areas: basic automation for engagement (personalized emails for special occasions), personalized marketing campaigns based on customer preferences, and customer segmentation with churn prediction to enhance retention strategies.',
      tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Jupyter Notebook', 'Marketing Analytics', 'Customer Segmentation'],
      category: 'ml',
      github: 'https://github.com/Arjunreddypulugu/marketing-with-AI',
      icon: <SiScikitlearn className="text-orange-500" />,
      color: 'from-yellow-500 to-amber-600',
      image: '/images/projects/marketing.webp',
      highlights: [
        'Implemented automation for sending personalized emails on special occasions',
        'Developed personalized marketing campaigns based on customer preferences and behavior',
        'Created customer segmentation models to predict churn and improve retention',
        'Utilized prompt engineering techniques to generate appropriate marketing content'
      ]
    },
    {
      title: 'Risk Analysis of Tech Stocks',
      description: 'Comprehensive risk analysis of major tech stocks including Apple, Google, Microsoft, and Amazon from 2012 to 2023.',
      longDescription: 'This project performs a detailed risk analysis of prominent technology stocks using Python and financial libraries. The analysis covers stock performance, volatility, and correlation between different tech companies, providing valuable insights for investment decisions.',
      tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'yfinance', 'Financial Analysis', 'Data Visualization'],
      category: 'data',
      github: 'https://github.com/Arjunreddypulugu/Risk-Analysis-of-tech-stocks',
      demo: '',
      icon: <SiPandas className="text-blue-500" />,
      color: 'from-cyan-500 to-blue-600',
      image: '/images/projects/tech.avif',
      highlights: [
        'Analyzed stock performance of major tech companies (Apple, Google, Microsoft, Amazon) from 2012-2023',
        'Calculated daily returns, volatility, and correlation between different tech stocks',
        'Created risk-return scatter plots and cumulative returns visualizations',
        'Implemented Value at Risk (VaR) calculations for each stock'
      ]
    },
    {
      title: 'YOLO Object Detection',
      description: 'Implementation of YOLO (You Only Look Once) algorithm for real-time object detection in images.',
      longDescription: 'This project applies the YOLO algorithm, a state-of-the-art real-time object detection system, to detect objects in images. The implementation uses Darknet and saves detections in predictions.png, providing confidence scores and detection times for each identified object.',
      tags: ['Python', 'Jupyter Notebook', 'Computer Vision', 'Deep Learning', 'YOLO', 'Object Detection', 'Darknet'],
      category: 'ml',
      github: 'https://github.com/Arjunreddypulugu/ObjectDetection-YOLO',
      demo: '',
      icon: <SiPython className="text-blue-500" />,
      color: 'from-indigo-500 to-purple-600',
      image: '/images/projects/objdetection.webp',
      highlights: [
        'Implemented YOLO algorithm for real-time object detection in images',
        'Utilized Darknet framework for object detection processing',
        'Generated confidence scores and detection times for identified objects',
        'Saved detection results in predictions.png for easy visualization'
      ]
    },
    {
      title: 'Spark-Kafka Real-Time Data Processing',
      description: 'Real-time IoT data processing and analytics using Apache Spark and Kafka for nationwide temperature sensor data.',
      longDescription: 'This project implements a real-time data processing system for IoT temperature sensors deployed across the U.S. Using Apache Spark Streaming and Kafka, it processes and analyzes temperature data from multiple sensors, providing insights such as average temperature by state, total messages processed, number of sensors by state, and total sensor count.',
      tags: ['Python', 'Apache Spark', 'Apache Kafka', 'PySpark', 'IoT', 'Real-time Analytics', 'Data Streaming'],
      category: 'data',
      github: 'https://github.com/Arjunreddypulugu/Spark-Kafka-real-time-data-processing',
      demo: '',
      icon: <SiPython className="text-blue-500" />,
      color: 'from-red-500 to-orange-600',
      image: '/images/projects/kafka.webp',
      highlights: [
        'Implemented real-time processing of IoT temperature sensor data using Spark Streaming and Kafka',
        'Analyzed nationwide temperature data from sensors deployed across all U.S. states',
        'Developed analytics for average temperature by state, sensor counts, and message processing metrics',
        'Created a scalable data pipeline for processing 10,000+ JSON data points in real-time'
      ]
    },
    {
      title: 'A/B Testing',
      description: 'Marketing campaign A/B testing analysis to determine the most effective promotional strategies for a fashion retail company.',
      longDescription: 'This project conducts A/B testing on three different marketing campaigns for a fashion retail company launching new products. Using Python and statistical analysis, it evaluates the impact of each campaign on product sales across 137 store locations over a 4-week period, helping the company identify the most effective promotional strategy.',
      tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Scipy', 'Statistical Analysis', 'Marketing Analytics', 'A/B Testing'],
      category: 'data',
      github: 'https://github.com/Arjunreddypulugu/AB-testing',
      demo: '',
      icon: <SiPython className="text-blue-500" />,
      color: 'from-green-500 to-emerald-600',
      image: '/images/projects/ab.jpg',
      highlights: [
        'Analyzed sales data from 137 retail locations testing three different marketing campaigns',
        'Evaluated campaign effectiveness over a 4-week period for new product launches',
        'Applied statistical methods to determine which promotional strategy had the most substantial impact on sales',
        'Provided data-driven recommendations for marketing strategy optimization'
      ]
    },
    {
      title: 'Online Course Drop-outs',
      description: 'Analysis of a large dataset with over a million records to identify patterns in online course dropout rates.',
      longDescription: 'This project analyzes a comprehensive dataset of online course interactions to identify key factors contributing to student dropout. Using LightGBM (Light Gradient Boosting Machine) algorithm, the analysis reveals that consistent engagement (measured by unique days of interaction) and video content interaction are the primary indicators of student retention in online learning environments.',
      tags: ['Python', 'LightGBM', 'Pandas', 'Matplotlib', 'Seaborn', 'Statistical Analysis', 'Education Analytics', 'Predictive Modeling'],
      category: 'data',
      github: 'https://github.com/Arjunreddypulugu/Online-Course-Drop-outs',
      demo: '',
      icon: <SiPython className="text-blue-500" />,
      color: 'from-purple-500 to-indigo-600',
      image: '/images/projects/course.jpg',
      highlights: [
        'Analyzed a dataset of over a million records to identify patterns in online course dropout rates',
        'Implemented LightGBM algorithm to predict student dropout with high accuracy',
        'Identified that consistent engagement (unique days) and video content interaction are the most significant factors in student retention',
        'Provided actionable insights for educational institutions to improve online course completion rates'
      ]
    },
    {
      title: 'Insurance Fraud Detection',
      description: 'Machine learning models to predict and identify fraudulent insurance claims, helping companies reduce financial losses.',
      longDescription: 'This project develops and evaluates multiple machine learning models (KNN, SVM, Logistic Regression, Random Forests, and Naive Bayes) to predict fraudulent insurance claims. The analysis addresses class imbalance issues in the target variable and provides a holistic evaluation of model performance using metrics like recall and AUC to identify the most effective approach for fraud detection.',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook', 'Fraud Detection', 'Machine Learning'],
      category: 'ml',
      github: 'https://github.com/Arjunreddypulugu/Insurance-fraud',
      demo: '',
      icon: <SiScikitlearn className="text-orange-500" />,
      color: 'from-red-500 to-pink-600',
      image: '/images/projects/insurance.png',
      highlights: [
        'Implemented multiple machine learning models (KNN, SVM, Logistic Regression, Random Forests, Naive Bayes) for fraud detection',
        'Addressed class imbalance issues in the target variable using appropriate techniques',
        'Evaluated model performance using multiple metrics including recall and AUC for a holistic assessment',
        'Identified key factors that contribute to fraudulent insurance claims to help companies reduce financial losses'
      ]
    },
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.85,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: [0.19, 1, 0.22, 1], // Custom easing function for smooth animation
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.85,
      rotateY: direction < 0 ? 45 : -45,
      transition: {
        duration: 0.6,
        ease: [0.19, 1, 0.22, 1],
      }
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = projects.length - 1;
      if (nextIndex >= projects.length) nextIndex = 0;
      return nextIndex;
    });
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <p className="text-gray-400 mb-8">Exploring the intersection of Data Science, Engineering, and Analytics</p>
        </motion.div>

        {/* Project Carousel */}
        <div className="relative h-[650px] w-full max-w-5xl mx-auto perspective">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 250, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                rotateY: { duration: 0.6 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full transform-gpu"
              style={{ perspective: '1000px' }}
            >
              <div className="bg-gray-800/90 backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl border border-gray-700/50">
                {/* Project Header */}
                <div className={`relative h-72 overflow-hidden bg-gradient-to-br ${projects[currentIndex].color}`}>
                  {projects[currentIndex].image && (
                    <Image
                      src={getImagePath(projects[currentIndex].image)}
                      alt={projects[currentIndex].title}
                      fill
                      className="object-cover opacity-50"
                    />
                  )}
                  <motion.div
                    initial={{ scale: 1.2, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/30"
                  />
                  <div className="absolute top-4 right-4 z-20 flex space-x-3">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={projects[currentIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors group"
                    >
                      <FaGithub className="text-white w-5 h-5 group-hover:text-blue-400 transition-colors" />
                    </motion.a>
                    {projects[currentIndex].demo && projects[currentIndex].title !== 'Explainable-AI-Healthcare' && projects[currentIndex].title !== 'Text2SQL LLM' && projects[currentIndex].title !== 'Intrusion Detection System' && projects[currentIndex].title !== 'AI-Driven Marketing' && projects[currentIndex].title !== 'Risk Analysis of Tech Stocks' && projects[currentIndex].title !== 'YOLO Object Detection' && projects[currentIndex].title !== 'Spark-Kafka Real-Time Data Processing' && projects[currentIndex].title !== 'A/B Testing' && projects[currentIndex].title !== 'Online Course Drop-outs' && projects[currentIndex].title !== 'Insurance Fraud Detection' && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={projects[currentIndex].demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors group"
                      >
                        <FaLink className="text-white w-5 h-5 group-hover:text-blue-400 transition-colors" />
                      </motion.a>
                    )}
                  </div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute bottom-6 left-6 z-20"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg">
                          {projects[currentIndex].icon}
                        </div>
                        <h3 className="text-3xl font-bold text-white">{projects[currentIndex].title}</h3>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-8 space-y-6">
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-300 text-lg leading-relaxed"
                  >
                    {projects[currentIndex].description}
                  </motion.p>
                  
                  {/* Project Highlights */}
                  {projects[currentIndex].highlights && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                        <span className="w-1 h-6 bg-blue-500 rounded-full" />
                        <span>Key Highlights</span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {projects[currentIndex].highlights.map((highlight, i) => (
                          <motion.div
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="flex items-start space-x-2 text-sm text-gray-400"
                          >
                            <span className="w-2 h-2 mt-1.5 bg-blue-500 rounded-full" />
                            <span>{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Tags */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-2 pt-4"
                  >
                    {projects[currentIndex].tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                        className="px-4 py-1.5 text-sm font-medium bg-gray-700/50 backdrop-blur-sm text-gray-300 rounded-full border border-gray-600/50 hover:border-blue-500/50 transition-colors"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none px-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="pointer-events-auto p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors transform -translate-x-4 hover:text-blue-400"
              onClick={() => paginate(-1)}
            >
              <FaChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="pointer-events-auto p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors transform translate-x-4 hover:text-blue-400"
              onClick={() => paginate(1)}
            >
              <FaChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Project Counter */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 