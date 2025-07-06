/**
 * Returns a string timestamp
 * @returns {string}
 */
export function getTimestamp() {
  return new Date().toISOString().replace(/[:.\s-]/g, "_");
}

/**
 * Console logs an optional message and a timestamp
 * @param {string | undefined} message
 * @returns {undefined}
 */
export function logTimestamp(message) {
  const timestamp = getTimestamp();
  if (message) {
    console.log(message, timestamp);
  } else {
    console.log(timestamp);
  }
}

/**
 * Console logs an arrow then
 * Console logs an optional message and a timestamp
 * @param {string | undefined} message
 * @returns {undefined}
 */
export function logTimestampArrow(message) {
  for (let i = 0; i < 4; i += 1) {
    console.log("* * * *");
  }
  for (let i = 8; i > 0; i -= 1) {
    console.log(...Array(i).fill("*"));
  }
  const timestamp = getTimestamp();
  if (message) {
    console.log(message, timestamp);
  } else {
    console.log(timestamp);
  }
}
