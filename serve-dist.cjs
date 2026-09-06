const http = require("http");
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "dist");
const port = 4321;
const types = { ".html":"text/html; charset=utf-8", ".css":"text/css", ".js":"text/javascript", ".svg":"image/svg+xml", ".png":"image/png", ".ico":"image/x-icon", ".woff2":"font/woff2" };
const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
  if (urlPath.endsWith("/")) urlPath += "index.html";
  let file = path.normalize(path.join(root, urlPath));
  if (!file.startsWith(root)) { res.writeHead(403); return res.end("forbidden"); }
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    const idx = path.join(file, "index.html");
    if (fs.existsSync(idx)) file = idx;
    else {
      const notFound = path.join(root, "404.html");
      res.writeHead(404, {"Content-Type":"text/html; charset=utf-8"});
      return res.end(fs.existsSync(notFound) ? fs.readFileSync(notFound) : "404");
    }
  }
  const ext = path.extname(file).toLowerCase();
  res.writeHead(200, {"Content-Type": types[ext] || "application/octet-stream"});
  fs.createReadStream(file).pipe(res);
});
server.listen(port, "127.0.0.1", () => console.log("MATCH_PREVIEW http://127.0.0.1:" + port + "/"));
