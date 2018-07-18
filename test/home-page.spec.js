import "babel-polyfill";
import * as Chai from "chai";
import * as Page from "./lib/page.js";
import * as HomePage from "./lib/home-page.js";

Chai.should();

describe("Home page", () => {
    it("Should be present", done => {
        (async () => Page.Open(HomePage))()
            .then(page => HomePage.Is(page))
            .then(match => {
                match.should.be.true;
                done();
            })
            .catch(err => {
                done(err);
            });
    });

    describe("Content", () => {
        xit("Should be present", done => {
            done();
        });
    });

    describe("Options", () => {
        xit("Should be present", done => {
            done();
        });
    });
});
