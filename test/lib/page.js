import Browser from "./browser";

const scheme = "http";
const host = "localhost";
const port = "8080";
const baseUrl = `${scheme}://${host}:${port}`;

export async function Open(page) {
    const browser = await Browser();
    const newPage = await browser.newPage();
    await newPage.goto(`${baseUrl}${page.Url}`);
    return newPage;
}
