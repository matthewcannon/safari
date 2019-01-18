import List from "../src/list";

describe("list", () => {
    test("calls the iteratee for each item", () => {
        const fakeIteratee = jest.fn();

        render(List({ iteratee: fakeIteratee, items: [{}, {}] }));

        expect(fakeIteratee.mock.calls.length).toBe(2);
    });
});
