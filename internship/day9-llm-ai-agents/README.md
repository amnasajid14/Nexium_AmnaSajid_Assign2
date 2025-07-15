# Day 9 – LLM Flows & AI Agents in n8n

This project demonstrates how to build an AI-powered summarization flow in **n8n** using webhooks and simulated large language model (LLM) integration. Due to OpenAI quota limitations, the summarization logic is mocked using a `Set` node. However, the workflow structure reflects a real-world LLM setup.

## 🧠 What This Workflow Does

- Accepts a **POST request** via Webhook
- Receives a block of input text in JSON format
- Simulates a call to an LLM (e.g., GPT-3.5 or Hugging Face model)
- Returns a **summary** of the input text using a Respond to Webhook node

## 🛠️ Workflow Structure

[Webhook]
↓
[Set (Mock Summary)]
↓
[Respond to Webhook]

## 🚀 How to Test

1. Run the workflow in **n8n** using the **"Execute Workflow"** button
2. Use [Postman](https://www.postman.com/)
