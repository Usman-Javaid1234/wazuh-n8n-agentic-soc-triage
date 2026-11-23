const item = $json;

// Convert to IRIS-friendly format: YYYY-MM-DD HH:MM:SS
const dt = new Date(item.timestamp);
const formatted = dt.toISOString().slice(0, 19).replace('T', ' ');

return {
  json: {
    ...item,
    alert_source_event_time: formatted
  }
};