const corsConfig = {
    origin: "http://localhost:4000",
    allowedHeaders: [
        "Content-Type",
    ],
    credentials: true,
};

const keys = {
    backend_api_key: process.env.BACKEND_API_KEY
};

module.exports = { corsConfig, keys };