const corsConfig = {
    origin: "http://localhost:4000",
    allowedHeaders: [
        "Content-Type",
    ],
    credentials: true,
};

module.exports = { corsConfig };