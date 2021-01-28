describe('Login form and presentation', () => {
    it('Logga in och gå till presentationen', () => {
        cy.get("form");
        cy.get('input[name="username"]').type("CoolUser").should("have.value", "CoolUser");
        cy.get('input[name="password"]').type("123123123").should("have.value", "123123123");
        cy.get("form").submit();
        cy.contains("Välkommen CoolUser");
        cy.visit("/presentation.html");
        cy.contains("Välkommen till min sida!");
    });
})