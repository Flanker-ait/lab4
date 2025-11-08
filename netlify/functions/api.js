const path = require("path");
const express = require("express");
const fs = require("fs");
const serverless = require("serverless-http");
const fetch = require("node-fetch");

const app = express();

// Preload static HTML
const htmlFile = fs.readFileSync(path.join(__dirname, "../../index.html"), "utf-8");
const errorHtml = fs.readFileSync(path.join(__dirname, "../../error.html"), "utf-8");

// Root route
app.get("/", (req, res) => {
  console.log("Root route hit");
  res.send(htmlFile);
});

// POST /api/search
app.post("/api/search", async (req, res) => {
  console.log("POST /api/search hit");

  let reqData = "";
  req.on("data", (chunk) => (reqData += chunk));
  req.on("end", async () => {
    try {
      const reqParams = JSON.parse(reqData || "{}");
      let url = "";

      if (reqParams.artist) {
        url = `https://musicbrainz.org/ws/2/recording?query=artist:${encodeURIComponent(reqParams.artist)}&fmt=json`;
      } else if (reqParams.genre) {
        url = `https://musicbrainz.org/ws/2/recording?query=tag:${encodeURIComponent(reqParams.genre)}&fmt=json`;
      } else {
        return res.status(400).send("Missing artist or genre");
      }

      console.log("Fetching:", url);
      const response = await fetch(url, {
        headers: { "User-Agent": "MusicDiscoveryApp/1.0 (mn390524@dal.ca)" },
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("MusicBrainz API error:", response.status, text.slice(0, 100));
        return res.status(500).send("MusicBrainz API error");
      }

      let data;
      try {
        data = await response.json();
      } catch (e) {
        console.error("JSON parse failed:", e);
        return res.status(500).send("Invalid response from MusicBrainz");
      }

      if (!data.recordings || data.count === 0) {
        console.warn("No results found");
        return res.send(errorHtml);
      }

      const results = data.recordings.map((r) => ({
        title: r.title || "Unknown title",
        artist: r["artist-credit"]?.[0]?.name || "Unknown artist",
        album: r.releases?.[0]?.title || "Unknown album",
        year: r.releases?.[0]?.date || "Unknown year",
      }));

      res.json({ found: true, songs: results });
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).send("Internal server error");
    }
  });
});

module.exports.handler = serverless(app);
