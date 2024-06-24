let baseUrl;

switch (process.env.NEXT_PUBLIC_ENV) {
  case "staging":
    baseUrl = "https://v2-mjv-staging-xxj7aq26ia-uc.a.run.app";
    break;
  case "production":
    baseUrl = "https://v2-mjv-xxj7aq26ia-uc.a.run.app";
    break;
  default:
    baseUrl = "http://localhost:3000";
}

export const baseURL = baseUrl;
