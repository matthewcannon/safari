const Puppeteer = require("puppeteer");

export default async function() {
    return await Puppeteer.launch({ headless: true });
}
