# Bharat Jeevan AI 🇮🇳

**AI for a Smarter India** — a student-developed citizen and family intelligence prototype for the Viksit Bharat 2047 vision.

## What is included
- Citizen & family profile dashboard
- Income, expenses, savings, debt and transaction tracking
- Education, skills and scholarship signals
- Agriculture and livelihood intelligence
- Documents and application tracking
- Alerts, prioritized actions and a non-official progress score
- Bharat AI Copilot with `/api/ai`
- Separate **Resource Repository** for schemes and citizen services
- Prototype eligibility-rule data that can be replaced with verified rules
- JSON profile export/import
- Responsive UI and print-ready report view

## Repository structure
```text
bharat-jeevan-ai/
├── index.html
├── server.js
├── package.json
├── vercel.json
├── .env.example
├── .gitignore
├── README.md
├── data/
│   └── demo-profile.json
├── resources/
│   ├── README.md
│   ├── schemes.json
│   ├── services.json
│   └── eligibility-rules.json
└── docs/
    └── ARCHITECTURE.md
```

## Run locally
```bash
npm install
cp .env.example .env
# put your real API key in .env; never commit .env
npm start
```
Then open `http://localhost:8787`.

The dashboard also has an offline/local analysis mode, so the UI can be demonstrated without the AI backend.

## GitHub
Create a repository named `bharat-jeevan-ai`, extract this ZIP, and upload the contents. Do **not** upload `.env` or any real API key.

## AI integration
The current backend uses the OpenAI SDK and keeps the key server-side. If your own Bharat Jeevan AI model is already running, the `/api/ai` endpoint is the integration point to replace or adapt.

## Eligibility disclaimer
Resource matching in this prototype is **not official eligibility determination**. Government scheme conditions can change. Always verify the final criteria, dates, documents and application route on the linked official portal.
