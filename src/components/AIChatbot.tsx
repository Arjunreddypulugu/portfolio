import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRobot, FaPaperPlane, FaTimes, FaMinus, FaExpand, FaUser } from 'react-icons/fa';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! I\'m your AI assistant. I can answer questions about my portfolio, skills, projects, and experience. What would you like to know?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Sample responses based on keywords
  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Skills related
    if (lowerMessage.includes('skill') || lowerMessage.includes('what can you do')) {
      return 'I have expertise in Python, Machine Learning, Data Analysis, SQL, Data Visualization, and more. Check out my Skill Tree section to see all my skills!';
    }
    
    // Experience related
    if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
      return 'I have worked as a Data Scientist at Tech Company and have a Master\'s in Data Science. You can find more details in my Experience section.';
    }
    
    // Projects related
    if (lowerMessage.includes('project') || lowerMessage.includes('work on')) {
      return 'I have worked on various data science projects including machine learning models, data analysis, and visualization. Check out my Projects section for details!';
    }
    
    // Education related
    if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('study')) {
      return 'I have a Master\'s degree in Data Science from University Name. I specialized in machine learning and statistical analysis.';
    }
    
    // Contact related
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email')) {
      return 'You can reach me through the Contact section. I\'m always open to new opportunities and collaborations!';
    }
    
    // Default responses
    const defaultResponses = [
      'That\'s an interesting question! Could you tell me more about what you\'re looking for?',
      'I\'d be happy to help with that. What specific information are you interested in?',
      'I can provide more details about my skills, projects, and experience. What would you like to know?',
      'Feel free to explore my portfolio to learn more about my work. Is there anything specific you\'d like to know?',
      'I\'m here to help! What would you like to know about my portfolio?'
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Get bot response after a delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
        onClick={toggleChat}
      >
        <FaRobot className="text-2xl" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-gray-800 rounded-lg shadow-2xl overflow-hidden"
            style={{ height: isMinimized ? '60px' : '500px' }}
          >
            {/* Chat Header */}
            <div className="bg-purple-600 p-4 flex justify-between items-center">
              <div className="flex items-center">
                <FaRobot className="text-white mr-2" />
                <h3 className="text-white font-medium">Portfolio Assistant</h3>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={toggleMinimize}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  {isMinimized ? <FaExpand /> : <FaMinus />}
                </button>
                <button
                  onClick={toggleChat}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            {!isMinimized && (
              <>
                <div className="p-4 h-80 overflow-y-auto">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.sender === 'user'
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-700 text-white'
                        }`}
                      >
                        <div className="flex items-center mb-1">
                          {message.sender === 'user' ? (
                            <FaUser className="mr-2 text-xs" />
                          ) : (
                            <FaRobot className="mr-2 text-xs" />
                          )}
                          <span className="text-xs opacity-70">
                            {message.sender === 'user' ? 'You' : 'Assistant'}
                          </span>
                        </div>
                        <p>{message.text}</p>
                        <div className="text-xs opacity-50 mt-1 text-right">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mb-4 flex justify-start"
                    >
                      <div className="bg-gray-700 text-white p-3 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Chat Input */}
                <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                      type="submit"
                      className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <FaPaperPlane />
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot; 