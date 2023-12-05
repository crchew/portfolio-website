const puppeteer = require("puppeteer");

async function takeScreenshot(url, outputPath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: outputPath });
  await browser.close();
}

takeScreenshot("https://crchew.github.io/apple-malaysia-clone/", "github-apple-clone.png");

takeScreenshot("http://127.0.0.1:5500/index.html", "my-portfolio-site.png");

