import * as firebaseFunctions from "firebase-functions";

import express from "express";
import path from "path";

const app = express();

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, "build")));

// Serve the index.html file for all routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

export const SPA = firebaseFunctions.https.onRequest(app);
// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = firebaseFunctions.https.onRequest(
  (request, response) => {
    firebaseFunctions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
  }
);
