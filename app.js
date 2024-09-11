const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use((_, res, next) => {
  res.setHeader(
    "Accept-CH",
    "sec-ch-ua,ua,sec-ch-ua-platformua-platform,sec-ch-ua-mobile,ua-mobile,sec-ch-ua-full-version,ua-full-version,sec-ch-ua-full-version-list,sec-ch-ua-platform-version,ua-platform-version,sec-ch-ua-arch,ua-arch,sec-ch-ua-bitness,ua-bitness,sec-ch-ua-wow64,sec-ch-ua-model,ua-model,sec-ch-lang,lang,sec-ch-save-data,save-data,sec-ch-width,width,sec-ch-viewport-width,viewport-width,sec-ch-viewport-height,viewport-height,sec-ch-dpr,dpr,sec-ch-device-memory,device-memory,sec-ch-rtt,rtt,sec-ch-downlink,downlink,sec-ch-ect,ect,sec-ch-prefers-color-scheme,sec-ch-prefers-reduced-motion,sec-ch-prefers-reduced-transparency,sec-ch-prefers-contrast,sec-ch-forced-colors,sec-ch-ua-form-factor"
  );
  next();
});

app.use(express.static("public"));

app.get("/ping", (req, res) => {
  console.log(req.headers);
  res.json(req.headers);
});

app.listen(3000);
