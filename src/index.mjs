/**
 * Returns a string timestamp
 * @returns {string}
 */
export function createTimestamp() {
  return new Date().toISOString().replace(/[:.\s-]/g, "_"); 
}
/**
 * Console logs an arrow then
 * Returns a string timestamp
 * @returns {string}
 */
export function createTimestampArrow() {
  for (let i = 0; i < 5; i += 1) {
    console.log("* * * *");
  }
  for (let i = 8; i > 0; i -= 1) {
    console.log(...Array(i).fill("*"));
  }
  return new Date().toISOString().replace(/[:.\s-]/g, "_"); 
}
