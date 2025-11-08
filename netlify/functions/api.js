const path = require("path");
const express = require("express");
const fs = require("fs");
const serverless = require("serverless-http");
const fetch = require("node-fetch");
const dotenv = require("dotenv");
const querystring = require("querystring");

const app = express();
dotenv.config();


const htmlFile = fs.readFileSync(path.join(__dirname, '../../index.html'), 'utf-8');
const errorHtml = fs.readFileSync(path.join(__dirname, '../../error.html'), 'utf-8');

app.get("/", (req, res) => {
  res.send(htmlFile);
});

app.post("api/search", async (req, res) => {
    console.log("htgfjdk");
  let reqData = "";
  req.on("data", chunk => (reqData += chunk));
  req.on("end", async () => {
    try {
      const reqParams = JSON.parse(reqData);
      let url = "";

      if (reqParams.artist) {
        url = `https://musicbrainz.org/ws/2/recording?query=artist:${reqParams.artist}&fmt=json`;
      } else if (reqParams.genre) {
        url = `https://musicbrainz.org/ws/2/recording?query=tag:${reqParams.genre}&fmt=json`;
      }

      const response = await fetch(url, {
        headers: { "User-Agent": "MusicDiscoveryApp/1.0 (example@dal.ca)" },
      });
      const data = await response.json();

      if (!data.recordings || data.count === 0) {
        return res.send(errorHtml);
      }

      const results = data.recordings.map(r => ({
        title: r.title || "Unknown title",
        artist: r["artist-credit"]?.[0]?.name || "Unknown artist",
        album: r.releases?.[0]?.title || "Unknown album",
        year: r.releases?.[0]?.date || "Unknown year",
      }));

      res.json({ found: true, songs: results });
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal server error");
    }
  });
});

module.exports.handler = serverless(app);
