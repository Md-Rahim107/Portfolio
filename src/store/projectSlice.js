import { createSlice } from '@reduxjs/toolkit'

const projectsData = [
  {
    id: 1,
    icon: '🧠',
    title: 'Customer Support RAG System',
    desc: 'Automated support ecosystem with sentiment analysis, Gmail monitoring, Qdrant vector search, and Telegram escalation alerts.',
    tags: ['n8n', 'RAG', 'Qdrant', 'Google Gemini'],
    full: 'Two powerful n8n workflows create an intelligent customer support system. Documents are ingested into Qdrant via Google Gemini embeddings. The support bot monitors Gmail, classifies tickets, retrieves context from the vector store, generates professional replies, and tracks sentiment in real-time — with escalation and Telegram alerts built in.',
    stack: ['n8n', 'Qdrant', 'Google Gemini', 'Google Drive', 'Gmail', 'Google Sheets', 'Telegram'],
    live: '#',
    github: '#',
  },
  {
    id: 2,
    icon: '📅',
    title: 'Intelligent Personal Assistant (MCP)',
    desc: 'Telegram-based AI assistant with Google Calendar and Sheets MCP Servers for conflict-aware scheduling and event logging.',
    tags: ['n8n', 'MCP', 'Telegram', 'Google Calendar'],
    full: 'Turns Telegram into a smart personal assistant using two dedicated MCP Servers: Google Calendar MCP (create, delete, get, recurring events with conflict detection) and Google Sheets MCP (event logging). Powered by Groq/Gemini with conversation memory, it handles scheduling, recurring meetings, and real-time replies — all in Bangladesh time.',
    stack: ['n8n', 'MCP Servers', 'Telegram', 'Google Calendar', 'Google Sheets', 'Groq', 'Google Gemini'],
    live: '#',
    github: '#',
  },
  {
    id: 3,
    icon: '🍽️',
    title: 'Restaurant Lead Generation System',
    desc: 'AI-powered n8n workflow that auto-collects restaurant data from any location and appends structured leads to Google Sheets.',
    tags: ['n8n', 'Serper API', 'Groq', 'Google Sheets'],
    full: 'Users message a location and the AI Agent searches via Google Serper API, extracting restaurant name, ratings, address, hours, website, and phone. Prioritizes 4.0+ rated results, validates output, and appends to Google Sheets. An Error Workflow logs failures and notifies via Gmail automatically.',
    stack: ['n8n', 'Google Serper API', 'Groq', 'Google Gemini', 'Google Sheets', 'Gmail'],
    live: '#',
    github: '#',
  },
  {
    id: 4,
    icon: '🧹',
    title: 'Smart Contact List Cleaner',
    desc: 'Automated contact hygiene workflow that deduplicates, verifies emails via Emailable API, and sends personalized outreach via Gmail.',
    tags: ['n8n', 'Emailable API', 'Gmail', 'Google Sheets'],
    full: 'Pulls contacts from Google Sheets, removes duplicates, and verifies each email using the Emailable API in a controlled loop. Only deliverable addresses are kept. The sheet is cleared and repopulated with clean data. Personalized confirmation emails are then sent to all verified contacts via Gmail — fully automated from start to finish.',
    stack: ['n8n', 'Emailable API', 'Google Sheets', 'Gmail'],
    live: '#',
    github: '#',
  },
  {
    id: 5,
    icon: '🤖',
    title: 'AI-Powered Restaurant Chatbot',
    desc: 'Conversational reservation and support bot that checks availability in Google Sheets and sends booking confirmations via Gmail.',
    tags: ['n8n', 'Groq', 'Google Gemini', 'Google Sheets'],
    full: 'A public chat AI Agent powered by Groq and Gemini with conversation memory. Guides users through menu info, restaurant details, or step-by-step table reservations. Checks Google Sheets for existing bookings by email, appends new ones, and sends polished confirmation emails via Gmail when the user opts in.',
    stack: ['n8n', 'Groq', 'Google Gemini', 'Google Sheets', 'Gmail'],
    live: '#',
    github: '#',
  },
  {
    id: 6,
    icon: '🔮',
    title: 'Company RAG Knowledge Base',
    desc: 'Two-workflow n8n RAG system for ingesting company docs into Qdrant and serving accurate, hallucination-free answers via chat.',
    tags: ['n8n', 'RAG', 'Qdrant', 'Google Gemini'],
    full: 'A complete RAG implementation in n8n. The ingestion workflow chunks uploaded files (Google Drive → Recursive Text Splitter → Gemini Embeddings → Qdrant). The chat workflow uses Groq/Gemini + memory and always retrieves from Qdrant first before generating a response. Strict prompting ensures no hallucinations — if data is absent, it says so.',
    stack: ['n8n', 'Qdrant', 'Google Gemini Embeddings', 'Google Drive', 'Groq', 'Recursive Text Splitter'],
    live: '#',
    github: '#',
  },
  {
    id: 7,
    icon: '🛒',
    title: 'GadgetGrid — Automated E-Commerce Backend',
    desc: 'Capstone: fully automated order management, RAG support chatbot, Telegram delivery manager, and error-logging system for an online gadget store.',
    tags: ['n8n', 'RAG', 'Telegram', 'Webhooks'],
    full: 'GadgetGrid eliminates every manual step in running an online store. Orders flow via webhook into Google Sheets instantly. A RAG chatbot (Qdrant + Gemini) handles customer queries; when humans are needed, it collects contacts and pings the team on Telegram. A Telegram AI agent manages delivery status with plain-language commands. A dedicated error workflow logs failures with full stack traces for silent monitoring.',
    stack: ['n8n', 'Webhooks', 'Qdrant', 'Google Gemini', 'Telegram', 'Google Sheets', 'Error Workflows'],
    live: '#',
    github: '#',
  },
]

const projectSlice = createSlice({
  name: 'project',
  initialState: {
    list:     projectsData,
    selected: null,
  },
  reducers: {
    selectProject(state, action) {
      state.selected = state.list.find((p) => p.id === action.payload) || null
    },
    clearProject(state) {
      state.selected = null
    },
  },
})

export const { selectProject, clearProject } = projectSlice.actions
export default projectSlice.reducer
