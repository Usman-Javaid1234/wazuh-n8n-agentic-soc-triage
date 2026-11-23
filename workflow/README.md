# n8n Workflow Export

Place your exported workflow here as `wazuh-agentic-triage.json`.

To export it from n8n:
1. Open the workflow ("Task 8 - Wazuh Agentic AI Triage" or whatever you named it).
2. Click the workflow menu (the "..." in the top right) → **Download**.
3. Save the file as `wazuh-agentic-triage.json` in this folder.
4. Before committing, open the JSON and strip or blank out any real credentials, API keys, or internal hostnames/IPs that got baked into node parameters (n8n usually keeps credentials referenced by ID rather than inline, but double-check HTTP Request node URLs for your real IRIS host IP).
