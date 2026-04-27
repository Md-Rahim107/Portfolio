import { createSlice } from '@reduxjs/toolkit'

const blogsData = [
  {
    id: 1,
    emoji: '🧠',
    title: 'Building a Smart Customer Support RAG System with n8n',
    date: 'Mar 2025',
    read: '6 min',
    excerpt: 'Two powerful n8n workflows create an intelligent, automated customer support ecosystem with sentiment analysis and real-time escalation.',
    content: [
      'Two powerful n8n workflows create an intelligent, automated customer support ecosystem. The first workflow automatically ingests company documents and employee leave policies into a Qdrant vector database. Files uploaded via a form are saved to Google Drive, chunked, embedded using Google Gemini, and stored for semantic search.',
      'The second workflow powers a full Customer Support Bot with Sentiment Analysis. It monitors Gmail, categorizes tickets, analyzes conversation history, retrieves relevant knowledge from the vector store, generates professional replies, handles escalation, logs everything to Google Sheets, and sends Telegram alerts — all while tracking customer sentiment in real-time.',
      'Together, they deliver fast, accurate, and emotionally aware support powered by RAG.',
    ],
  },
  {
    id: 2,
    emoji: '📅',
    title: 'Intelligent Personal Assistant with n8n MCP Servers',
    date: 'Mar 2025',
    read: '5 min',
    excerpt: 'This powerful n8n setup turns Telegram into a smart personal assistant with Google Calendar and Sheets integration via MCP Servers.',
    content: [
      'This powerful n8n setup turns Telegram into a smart personal assistant named Troy (or Captain Levi). Two dedicated MCP Servers expose tools: Google Calendar MCP handles create, delete, get, and recurring events (with conflict detection), while Google Sheets MCP logs all events (title, frequency, start/end, attendees, description).',
      'The main Personal Assistant workflow uses a Telegram trigger, memory, Groq/Gemini models, and MCP Client tools. It checks scheduling conflicts, manages recurring meetings, enriches descriptions with Context7 docs (for LangChain/Node.js queries), logs everything, and replies instantly — all in Bangladesh time.',
      'Seamless AI-powered calendar & productivity automation!',
    ],
  },
  {
    id: 3,
    emoji: '🍽️',
    title: 'Robust Restaurant Lead Generation System with n8n',
    date: 'Feb 2025',
    read: '4 min',
    excerpt: 'This smart n8n workflow automates restaurant data collection. Just message a location and get structured, verified leads appended to Google Sheets.',
    content: [
      'This smart n8n workflow automates restaurant data collection for lead generation. Users simply message a location (e.g., "Dhaka") via chat trigger. The AI Agent intelligently searches restaurants using Google Serper API, extracts key details — name, ratings, address, opening hours, website, and phone number — prioritizing high-rated ones (4.0+).',
      'Data is automatically appended to Google Sheets with structured output validation. Powered by Groq and Gemini models with memory support, the system ensures reliable, clean data storage.',
      'An integrated Error Workflow catches failures, logs details to another Google Sheet, and instantly notifies via Gmail for quick troubleshooting. Efficient, automated, and production-ready lead gen!',
    ],
  },
  {
    id: 4,
    emoji: '🧹',
    title: 'Smart Contact List Cleaner with n8n',
    date: 'Feb 2025',
    read: '4 min',
    excerpt: 'This efficient n8n workflow transforms messy contact lists into clean, verified leads using the Emailable API and automated Gmail outreach.',
    content: [
      'This efficient n8n workflow transforms messy contact lists into clean, verified leads. It starts by pulling data from Google Sheets, removes duplicate emails, then verifies each email address one-by-one using the Emailable API in a controlled loop. Verified results are cleaned, duplicates eliminated, and only deliverable emails are kept.',
      'The sheet is cleared and repopulated with validated contacts (Name, Email, Deliverable status). Finally, personalized confirmation emails are sent to all deliverable contacts via Gmail.',
      'Perfect for maintaining high-quality email lists with automated verification and outreach. Reliable, scalable, and production-ready contact hygiene automation!',
    ],
  },
  {
    id: 5,
    emoji: '🤖',
    title: 'AI-Powered Restaurant Chatbot with n8n',
    date: 'Jan 2025',
    read: '4 min',
    excerpt: 'An intelligent n8n workflow delivering seamless restaurant support and table reservations via public chat, powered by Groq and Google Gemini.',
    content: [
      'This intelligent n8n workflow delivers a seamless restaurant customer support and reservation system via public chat. The AI Agent, powered by Groq and Google Gemini models with conversation memory, greets users and guides them through options: menu info, restaurant details, or table reservations.',
      'It collects name, email, date, and time step-by-step, then checks Google Sheets for existing bookings using the same email. New reservations are automatically appended to the sheet.',
      'Users can opt for email confirmation — if approved, a polished confirmation email is sent via Gmail with all details. Smart, conversational, and fully automated dining experience!',
    ],
  },
  {
    id: 6,
    emoji: '🔮',
    title: 'RAG in n8n: Building a Smart Company Knowledge Base',
    date: 'Jan 2025',
    read: '7 min',
    excerpt: 'Two seamless n8n workflows create a complete Company RAG System — from document ingestion to AI-powered chat grounded in your own knowledge base.',
    content: [
      'Retrieval-Augmented Generation (RAG) enhances LLMs by combining generative capabilities with external knowledge retrieval. Instead of relying solely on pre-trained data, RAG fetches relevant information from a custom knowledge base in real-time, grounding responses in accurate, context-specific facts.',
      'In this n8n-powered implementation, the Document Ingestion Workflow saves uploaded files to Google Drive, splits text into overlapping chunks, generates embeddings with Google Gemini, and stores vectors in Qdrant. The Query & Chat Workflow uses a public chat trigger, Groq/Gemini models, conversation memory, and always queries Qdrant first before generating a response.',
      'Key benefits: answers are always based on the latest documents, strict instructions eliminate hallucinations, and employees can query policies and leave rules instantly through a simple chat interface.',
    ],
  },
  {
    id: 7,
    emoji: '🛒',
    title: 'Building GadgetGrid: A Fully Automated E-Commerce Backend with n8n and AI',
    date: 'Apr 2026',
    read: '5 min',
    excerpt: 'A capstone project: GadgetGrid — fully automated order management and customer support built on n8n, AI agents, and smart integrations.',
    content: [
      'What does it take to run an online gadget store without a single manual step? GadgetGrid is the answer: a fully automated order management and customer support system built on n8n, AI agents, and a stack of smart integrations. When a customer submits an order, a webhook fires instantly, routing all data straight into a Google Sheet — name, email, phone, address, product, price, and timestamp in one clean automated pass.',
      'GadgetGrid also includes a Company RAG chatbot connected to a Qdrant vector database, with Google Gemini powering the embeddings. The bot handles customer queries strictly from the company\'s knowledge base — no hallucination. If a customer wants a real person, the bot collects their contact number and sends an alert to the team via Telegram. Delivery management runs entirely through a Telegram bot; team members send plain-language messages like "Pending orders" or "Delivered: [phone]" and the AI agent reads or updates the sheet intelligently.',
      'A dedicated error-handling workflow ties everything together: whenever any part of the system fails, the error trigger logs the message, stack trace, workflow name, and execution URL into a separate sheet — so bugs are captured, traceable, and fixable without 24/7 monitoring.',
    ],
  },
]

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    list:     blogsData,
    selected: null,
  },
  reducers: {
    selectBlog(state, action) {
      state.selected = state.list.find((b) => b.id === action.payload) || null
    },
    clearBlog(state) {
      state.selected = null
    },
  },
})

export const { selectBlog, clearBlog } = blogSlice.actions
export default blogSlice.reducer
