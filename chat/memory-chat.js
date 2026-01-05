/**
 * 🧠 Memory Chat Example
 * Conversation with memory using LangChain and Ollama
 */

import { configDotenv } from "dotenv";
import { ChatOllama } from "@langchain/ollama";
import { HumanMessage, AIMessage, SystemMessage } from "@langchain/core/messages";
import readline from "readline";

// 🔐 Load environment variables
configDotenv();

// 🤖 Initialize Ollama model
const model = new ChatOllama({
  model: "kimi-k2:1t",
  baseUrl: "https://ollama.com",
  headers: {
    Authorization: "Bearer " + process.env.OLLAMA_API_KEY,
  },
});

// 🧠 Initialize message history (simple array)
const messageHistory = [];

// 📝 Add system message for context
const systemMessage = new SystemMessage(
  "You are a helpful AI assistant. Be concise and friendly."
);

/**
 * 💬 Send a message and get a response with memory
 */
async function chat(userInput) {
  // Add user message to history
  messageHistory.push(new HumanMessage(userInput));

  // Invoke model with system message + history
  const response = await model.invoke([systemMessage, ...messageHistory]);

  // Add AI response to history
  messageHistory.push(new AIMessage(response.content));

  return response.content;
}

/**
 * 🔄 Interactive chat loop
 */
async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("🧠 Memory Chat - Type 'exit' to quit, 'clear' to reset memory\n");

  const askQuestion = () => {
    rl.question("You: ", async (input) => {
      const trimmedInput = input.trim();

      if (!trimmedInput) {
        askQuestion();
        return;
      }

      try {
        const response = await chat(trimmedInput);
        console.log(`\n🤖 AI: ${response}\n`);
      } catch (error) {
        console.error("❌ Error:", error.message);
      }

      askQuestion();
    });
  };

  askQuestion();
}

// 🚀 Run the chat
main();
