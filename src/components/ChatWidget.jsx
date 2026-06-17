"use client";

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';

const SUGGESTIONS = [
  "How can I donate?",
  "What is a PIP?",
  "Tell me about AMANI"
];

const SIMULATED_RESPONSES = {
  "donate": "Thank you for your interest! You can support specific communities using unique reference codes to directly fund local development initiatives. Visit our [Donate Page](/donate) to make an impact today.",
  "pip": "A **Project Implementation Partner (PIP)** can be NGOs, Associations, Institutions, Artisans, Professionals, Social workers, or Individuals. They are allocated projects once resources are mobilized. You can register on the How We Work page!",
  "about": "AMANI Africa is a Ghanaian NGO dedicated to empowering people and strengthening communities through strategic partnerships and resource mobilization.",
  "default": "I'm your AMANI AI assistant. I'm still learning, but I can answer questions about donations, PIPs, and what we do. How can I help?"
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: '1', text: "Hello! I'm the AMANI AI Assistant. How can I help you transform your community today?", sender: 'bot', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSend = (text = inputValue) => {
    if (!text.trim()) return;

    // Add user message
    const newMsg = { id: Date.now().toString(), text, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, newMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking and responding
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let responseText = SIMULATED_RESPONSES["default"];
      
      if (lowerText.includes("donate") || lowerText.includes("fund")) {
        responseText = SIMULATED_RESPONSES["donate"];
      } else if (lowerText.includes("pip") || lowerText.includes("partner")) {
        responseText = SIMULATED_RESPONSES["pip"];
      } else if (lowerText.includes("about") || lowerText.includes("who")) {
        responseText = SIMULATED_RESPONSES["about"];
      }

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // Random delay between 1.5s to 2.5s
  };

  // Simple markdown-to-html parser for bold and links
  const renderMessage = (text) => {
    let formattedText = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="chat-link" target="_blank" rel="noopener noreferrer">$1</a>');
    
    return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        className={`chat-fab ${isOpen ? 'hidden' : 'visible'} animate-float-slow`}
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Chat"
      >
        <div className="fab-glow"></div>
        <MessageCircle size={28} />
        <span className="fab-badge">1</span>
      </button>

      {/* Chat Window */}
      <div className={`chat-window ${isOpen ? 'open' : 'closed'} glass-panel-dark`}>
        {/* Header */}
        <div className="chat-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="avatar-bot">
              <Sparkles size={18} style={{ color: '#fff' }} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                AMANI AI <span className="status-dot"></span>
              </h3>
              <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.8, color: '#fff' }}>Ask me anything</p>
            </div>
          </div>
          <button className="chat-close" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="chat-body custom-scrollbar">
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-message-wrapper ${msg.sender}`}>
              {msg.sender === 'bot' && <div className="message-avatar bot"><Bot size={16} /></div>}
              <div className={`chat-message ${msg.sender} fade-up-fast visible`}>
                {renderMessage(msg.text)}
              </div>
              {msg.sender === 'user' && <div className="message-avatar user"><User size={16} /></div>}
            </div>
          ))}

          {isTyping && (
            <div className="chat-message-wrapper bot fade-up-fast visible">
              <div className="message-avatar bot"><Bot size={16} /></div>
              <div className="chat-message bot typing-indicator">
                <span></span><span></span><span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {messages.length === 1 && !isTyping && (
          <div className="chat-suggestions">
            {SUGGESTIONS.map((suggestion, index) => (
              <button 
                key={index} 
                className="suggestion-chip"
                onClick={() => handleSend(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        {/* Input Area */}
        <div className="chat-input-area">
          <input 
            type="text" 
            placeholder="Type your message..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            disabled={isTyping}
          />
          <button 
            className="send-button"
            onClick={() => handleSend()}
            disabled={!inputValue.trim() || isTyping}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </>
  );
}
