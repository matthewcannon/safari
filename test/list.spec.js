import List from "../src/list";

describe("List", () => {
    test("Calls the iteratee for each item", () => {
        const fake = jest.fn();

        render(List({ iteratee: fake, items: [{}, {}] }));

        expect(fake.mock.calls.length).toBe(2);
    });
});
