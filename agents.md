# AI Guidance File

##  Objective
The AI component is designed to provide resume improvement suggestions based on job descriptions.


## Prompt Design

The system uses a structured prompt:

"Analyze this job description and suggest resume improvements in concise bullet points focusing on skills, keywords, and formatting."


##  Rules

- Always return output in bullet points
- Keep suggestions short and clear
- Focus only on relevant skills and improvements
- Avoid unnecessary explanations


## Constraints

- Do not generate irrelevant technologies
- Do not hallucinate information
- Do not include sensitive or personal data
- Input must not be empty


##  Safety Measures

- Input validation ensures valid job descriptions
- Output is constrained to structured format
- AI responses are treated as suggestions, not facts


##  Coding Standards for AI Integration

- AI logic is separated from main application logic
- Functions are modular and reusable
- Error handling is implemented for API failures


##  Improvement Strategy

- Prompts can be refined for better accuracy
- AI module can be replaced without affecting backend
- Future upgrades include better context understanding
