describe('Login, presentation, logout', () => {
    it('Misslyckas med inloggning', () => {
        cy.visit("/");
        cy.get("form");
        cy.get('input[name="username"]').type("CoolUser").should("have.value", "CoolUser");
        cy.get('input[name="password"]').type("CoolPassword").should("have.value", "CoolPassword");
        cy.get("form").submit();
        cy.contains("Fel användarnamn eller lösenord!");
    });
    
    it('Logga in och gå till presentationen', () => {
        cy.get("form");
        cy.get('input[name="username"]').type("CoolUser").should("have.value", "CoolUser");
        cy.get('input[name="password"]').type("123123123").should("have.value", "123123123");
        cy.get("form").submit();
        cy.contains("Välkommen CoolUser");
        cy.visit("/presentation.html");
        cy.contains("Välkommen till min sida!");
    });
    
    it('Tryck på "Tillbaka" och logga ut', () => {
        cy.visit("/start.html");
        cy.contains("Välkommen CoolUser");
        cy.visit("/");
    });
})
