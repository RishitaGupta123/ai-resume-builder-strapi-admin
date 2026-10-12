module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: [
        "https://airesumebuilderfrontedproject-1439gbr8s.vercel.app",
        "https://airesumebuilderfrontendproject.vercel.app",
        "https://airesumebuilderfrontedproject-k7k16reg2.vercel.app",
        "http://localhost:5173",
      ],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      keepHeaderOnError: true,
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
