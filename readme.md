# AI Wrapped 🤖

A collection of examples demonstrating how to use LangChain with Ollama for AI-powered chat applications.

## Features

- 💬 **Basic Chat** - Simple one-shot conversations with Ollama
- 🔧 **Tool Calling** - Function calling with LangChain tools and Zod schemas

## Prerequisites

- Node.js (with ESM support)
- pnpm package manager
- Ollama API key

## Installation

```bash
pnpm install
```

## Configuration

Create a `.env` file in the root directory:

```env
OLLAMA_API_KEY=your_api_key_here
```

## Usage

### Basic Chat

Simple conversation example:

```bash
node app.js
# or
node chat/basic-chat.js
```

### Tool Calling

Function calling with temperature lookup tool:

```bash
node chat/langchain-tool.js
```

## Project Structure

```
├── app.js                  # Main entry point
├── chat/
│   ├── basic-chat.js       # Basic chat example
│   └── langchain-tool.js   # Tool calling example
├── package.json
└── readme.md
```

## Dependencies

| Package | Description |
|---------|-------------|
| `@langchain/ollama` | LangChain integration for Ollama |
| `langchain` | LangChain core library |
| `zod` | TypeScript-first schema validation |
| `dotenv` | Environment variable management |

## License

ISC
