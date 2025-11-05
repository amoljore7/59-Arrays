// “This function takes a promise-returning fetcher and keeps retrying it up to maxTry times. Each attempt is awaited, and if it fails, we retry until it either succeeds or reaches the retry limit. I used a simple while loop instead of recursion to keep it easy to read and avoid deep stack calls.”

async function fetchWithAutoRetry(fetcher, maxTry = 5) {
  let attempt = 1;

  while (attempt <= maxTry) {
    try {
      // Try running the fetcher
      const result = await fetcher();
      return result; // Success → return the result
    } catch (error) {
      console.error(`Attempt ${attempt} failed`, error);

      // If we've reached the last attempt, throw error
      if (attempt === maxTry) {
        throw new Error("Max retry reached");
      }

      attempt++; // otherwise, try again
    }
  }
}

// Test functions
const p1 = () => Promise.resolve(1);

const p2 = () =>
  new Promise((res, rej) => (Math.random() < 0.3 ? res(2) : rej("Random failure")));
//Math.random : generates a number between 0 and 1. So, with < 0.3, there's a 30% chance of success.

// Run tests
fetchWithAutoRetry(p1, 5)
  .then((res) => console.log("Fetcher 1:", res))
  .catch((err) => console.error("Fetcher 1 Error:", err));

fetchWithAutoRetry(p2, 5)
  .then((res) => console.log("Fetcher 2:", res))
  .catch((err) => console.error("Fetcher 2 Error:", err));