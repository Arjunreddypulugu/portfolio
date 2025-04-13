import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPlay, FaRedo, FaCode, FaTerminal, FaLightbulb } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeSnippet {
  id: string;
  title: string;
  description: string;
  code: string;
  output: string;
  language: string;
  hint?: string;
}

const CodeEditor = () => {
  const [activeSnippet, setActiveSnippet] = useState<CodeSnippet | null>(null);
  const [userCode, setUserCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const editorRef = useRef<HTMLTextAreaElement>(null);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const codeSnippets: CodeSnippet[] = [
    {
      id: 'pandas',
      title: 'Data Analysis with Pandas',
      description: 'Write code to analyze a dataset using pandas',
      code: `# Import pandas
import pandas as pd

# Create a sample DataFrame
data = {
    'Name': ['John', 'Anna', 'Peter'],
    'Age': [28, 22, 35],
    'City': ['New York', 'Paris', 'London']
}
df = pd.DataFrame(data)

# Your code here
# Calculate the average age
`,
      output: 'Average age: 28.33',
      language: 'python',
      hint: 'Use df["Age"].mean() to calculate the average age'
    },
    {
      id: 'matplotlib',
      title: 'Data Visualization with Matplotlib',
      description: 'Create a simple bar chart using matplotlib',
      code: `# Import matplotlib
import matplotlib.pyplot as plt

# Sample data
categories = ['A', 'B', 'C', 'D']
values = [4, 3, 6, 2]

# Your code here
# Create a bar chart
`,
      output: 'Bar chart created successfully!',
      language: 'python',
      hint: 'Use plt.bar(categories, values) followed by plt.show()'
    },
    {
      id: 'numpy',
      title: 'Numerical Computing with NumPy',
      description: 'Perform basic array operations with NumPy',
      code: `# Import numpy
import numpy as np

# Create an array
arr = np.array([1, 2, 3, 4, 5])

# Your code here
# Calculate the sum of the array
`,
      output: 'Sum of array: 15',
      language: 'python',
      hint: 'Use np.sum(arr) or arr.sum() to calculate the sum'
    }
  ];

  useEffect(() => {
    if (activeSnippet) {
      setUserCode(activeSnippet.code);
      setOutput('');
      setIsCorrect(null);
      setShowHint(false);
    }
  }, [activeSnippet]);

  const handleRunCode = () => {
    if (!activeSnippet) return;
    
    setIsRunning(true);
    setOutput('Running...');
    
    // Simulate code execution
    setTimeout(() => {
      // Check if the code contains the expected solution
      const expectedOutput = activeSnippet.output;
      const userOutput = userCode.includes('mean()') || 
                         userCode.includes('sum()') || 
                         userCode.includes('bar(') && userCode.includes('show()');
      
      setIsCorrect(userOutput);
      setOutput(userOutput ? expectedOutput : 'Error: Incorrect solution. Try again!');
      setIsRunning(false);
    }, 1000);
  };

  const handleResetCode = () => {
    if (activeSnippet) {
      setUserCode(activeSnippet.code);
      setOutput('');
      setIsCorrect(null);
      setShowHint(false);
    }
  };

  const handleShowHint = () => {
    setShowHint(true);
  };

  return (
    <section id="code-editor" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Interactive Code Editor</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            {/* Snippet Selection */}
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Code Challenges</h3>
              {codeSnippets.map((snippet) => (
                <motion.div
                  key={snippet.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    activeSnippet?.id === snippet.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  onClick={() => setActiveSnippet(snippet)}
                >
                  <div className="flex items-center">
                    <FaCode className="mr-3" />
                    <div>
                      <h4 className="font-medium">{snippet.title}</h4>
                      <p className="text-sm opacity-80">{snippet.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Code Editor */}
            <div className="lg:col-span-2">
              {activeSnippet ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white">{activeSnippet.title}</h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={handleRunCode}
                        disabled={isRunning}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
                      >
                        <FaPlay className="mr-2" />
                        Run
                      </button>
                      <button
                        onClick={handleResetCode}
                        className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center"
                      >
                        <FaRedo className="mr-2" />
                        Reset
                      </button>
                      <button
                        onClick={handleShowHint}
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center"
                      >
                        <FaLightbulb className="mr-2" />
                        Hint
                      </button>
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      ref={editorRef}
                      value={userCode}
                      onChange={(e) => setUserCode(e.target.value)}
                      className="w-full h-64 bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                      spellCheck="false"
                    />
                    <div className="absolute top-0 right-0 p-2 text-xs text-gray-500">
                      {activeSnippet.language}
                    </div>
                  </div>

                  {showHint && activeSnippet.hint && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-purple-900 bg-opacity-30 rounded-lg"
                    >
                      <p className="text-purple-300">
                        <FaLightbulb className="inline mr-2" />
                        Hint: {activeSnippet.hint}
                      </p>
                    </motion.div>
                  )}

                  <div className="p-4 bg-gray-900 rounded-lg">
                    <div className="flex items-center mb-2">
                      <FaTerminal className="mr-2 text-green-500" />
                      <h4 className="font-medium text-white">Output</h4>
                    </div>
                    <div className={`font-mono text-sm ${isCorrect === true ? 'text-green-400' : isCorrect === false ? 'text-red-400' : 'text-gray-400'}`}>
                      {output || 'Run your code to see the output'}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <FaCode className="text-4xl mb-4 mx-auto" />
                    <p>Select a code challenge to begin</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeEditor; 