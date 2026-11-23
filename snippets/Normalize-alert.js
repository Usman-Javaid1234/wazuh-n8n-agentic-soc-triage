// Handle both array-wrapped and direct object payloads
const input = $input.item.json;
const raw = Array.isArray(input) ? input[0] : input;
const alert = raw._source || raw.body || raw;

return {
  json: {
    timestamp: alert.timestamp || new Date().toISOString(),
    rule_id: alert.rule?.id || "unknown",
    rule_level: alert.rule?.level || 0,
    rule_description: alert.rule?.description || "No description provided",
    mitre_id: alert.rule?.mitre?.id?.join(", ") || "N/A",
    mitre_tactic: alert.rule?.mitre?.tactic?.join(", ") || "N/A",
    mitre_technique: alert.rule?.mitre?.technique?.join(", ") || "N/A",
    agent_name: alert.agent?.name || "unknown",
    agent_id: alert.agent?.id || "unknown",
    agent_ip: alert.agent?.ip || "N/A",
    src_ip: alert.data?.srcip || alert.data?.src_ip || alert.agent?.ip || "N/A",
    dst_ip: alert.data?.dstip || alert.data?.dst_ip || "N/A",
    dst_user: alert.data?.osquery?.decorations?.username || alert.data?.dstuser || "N/A",
    url: alert.data?.osquery?.columns?.url || "N/A",
    full_log: alert.full_log || "N/A"
  }
};