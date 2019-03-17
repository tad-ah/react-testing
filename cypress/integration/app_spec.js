describe("React testing playground", () => {
    it("Button should read 'Hello!Hello!", () => {
        cy.visit('http://localhost:3000');
        cy.get("button")
            .should("have.text", "Hello!Hello!");
    });

    it("Button should read 'PROCEED TO CHECKOUTPROCEED TO CHECKOUT", () => {
        cy.visit('http://localhost:3000');
        cy.get("button").click()

            .should("have.text", "PROCEED TO CHECKOUTPROCEED TO CHECKOUT");
    });
});