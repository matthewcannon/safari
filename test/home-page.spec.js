import "@babel/polyfill";
import * as Chai from "chai";
import * as Page from "./lib/page.js";
import * as HomePage from "./lib/home-page.js";

Chai.should();

describe("Home page", () => {
    let page;

    beforeEach(done => {
        (async () => {
            page = await Page.Open(HomePage);
            done();
        })().catch(err => {
            done(err);
        });
    });

    afterEach(done => {
        (async () => {
            await page.close();
            done();
        })().catch(err => {
            done(err);
        });
    });

    it("Should be available", done => {
        (async () => {
            const pageIsHomePage = await HomePage.Is(page);
            pageIsHomePage.should.be.true;
            done();
        })().catch(err => {
            done(err);
        });
    });

    describe("Content", () => {
        it("Should be present", done => {
            (async () => {
                const pageHasContent = await HomePage.HasContent(page);
                pageHasContent.should.be.true;
                done();
            })().catch(err => {
                done(err);
            });
        });
    });
});
