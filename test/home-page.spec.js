import "babel-polyfill";
import * as Chai from "chai";
import * as Page from "./lib/page.js";
import * as HomePage from "./lib/home-page.js";

Chai.should();

describe("Home page", () => {
    it("Should be present", done => {
        (async () => {
            const page = await Page.Open(HomePage);
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
                const page = await Page.Open(HomePage);
                const pageHasContent = await HomePage.HasContent(page);
                pageHasContent.should.be.true;
                done();
            })().catch(err => {
                done(err);
            });
        });
    });

    describe("Options", () => {
        xit("Should be present", done => {
            done();
        });
    });
});
