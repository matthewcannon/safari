import "@babel/polyfill";
import * as Chai from "chai";
import * as Page from "./lib/page";
import * as HomePage from "./lib/home-page";

Chai.should();

describe("Home page", () => {
    let currentPage;

    beforeEach(done => {
        (async () => {
            currentPage = await Page.Open(HomePage);
            done();
        })().catch(err => {
            done(err);
        });
    });

    afterEach(done => {
        (async () => {
            await currentPage.close();
            done();
        })().catch(err => {
            done(err);
        });
    });

    it("Should be available", done => {
        (async () => {
            const homePageIsCurrentPage = await HomePage.Is(currentPage);
            homePageIsCurrentPage.should.be.true;
            done();
        })().catch(err => {
            done(err);
        });
    });

    describe("Content", () => {
        it("Should be present", done => {
            (async () => {
                const pageHasContent = await HomePage.HasContent(currentPage);
                pageHasContent.should.be.true;
                done();
            })().catch(err => {
                done(err);
            });
        });
    });
});
