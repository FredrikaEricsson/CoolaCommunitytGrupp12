describe('Login form', () => {
    it('Misslyckas med inloggning', () => {
        cy.visit("/");
        cy.get("form");
        cy.get('input[name="username"]').type("CoolUser").should("have.value", "CoolUser");
        cy.get('input[name="password"]').type("CoolPassword").should("have.value", "CoolPassword");
        cy.get("form").submit();
        cy.contains("Fel användarnamn eller lösenord!");
    });
})