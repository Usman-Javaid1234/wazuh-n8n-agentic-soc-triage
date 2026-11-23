const response = $json;

// Groq wraps response in choices[0].message.content
const raw = response.choices[0].message.content;

// Strip markdown fences just in case
const cleaned = raw.replace(/```json|```/g, "").trim();

let report;
try {
  report = JSON.parse(cleaned);
} catch (e) {
  report = {
    alert_summary: "AI response could not be parsed",
    classification: "Unknown",
    confidence_score: 0,
    ioc_analysis: {},
    mitre_attack: {},
    immediate_actions: [],
    security_recommendations: [],
    raw_error: raw
  };
}

// Pull the original normalized alert back in (reference your normalize node by its actual name)
const originalAlert = $('Normalize the alert').item.json;

return {
  json: {
    ...originalAlert,
    ai_report: report
  }
};