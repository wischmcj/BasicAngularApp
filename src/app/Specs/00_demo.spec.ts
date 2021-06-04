describe("calculator", () => {

    describe("addition", () => {
        it("can add two numbers", () => {
            const a = 10;
            const b = 20;

            const answer = a + b;

            expect(answer).toBe(30);
        });
    });
});