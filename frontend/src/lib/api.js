import axios from 'axios';

const API_BASE = `${process.env.REACT_APP_BACKEND_URL}/api`;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function wakeBackend() {
  try {
    await axios.get(`${API_BASE}/`, { timeout: 15000 });
  } catch (error) {
    // Ignore warm-up failures here and let the real request retries decide the outcome.
  }
}

export async function getWithRetry(path, config = {}, options = {}) {
  const {
    retries = 3,
    retryDelayMs = 2500,
    warmup = true,
  } = options;

  if (warmup) {
    await wakeBackend();
  }

  let lastError;

  for (let attempt = 0; attempt < retries; attempt += 1) {
    try {
      return await axios.get(`${API_BASE}${path}`, {
        timeout: 15000,
        ...config,
      });
    } catch (error) {
      lastError = error;

      if (attempt < retries - 1) {
        await delay(retryDelayMs);
      }
    }
  }

  throw lastError;
}

export { API_BASE };
