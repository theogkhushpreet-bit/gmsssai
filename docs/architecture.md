Bharat Jeevan AI Architecture
```text
Citizen / Family Profile
        |
        v
  Local Dashboard  ---> Finance / Education / Agriculture / Documents / Alerts
        |
        +-----------> Resource Repository (JSON)
        |
        v
 Eligibility / Opportunity Matcher
        |
        v
   Bharat AI Copilot (/api/ai)
        |
        v
  AI model + optional web search
```
Design principle
`Profile -> Analyze -> Match -> Track -> Alert -> Act`
The frontend keeps demo profile data in browser localStorage. The optional backend sends the structured profile and user question to the configured AI provider. API keys remain server-side.
