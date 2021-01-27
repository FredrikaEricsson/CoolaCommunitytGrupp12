describe('Startpage and logout', () => {
    it('Tryck på "Tillbaka" och logga ut', () => {
        cy.visit("/start.html");
        cy.contains("Välkommen CoolUser");
        cy.visit("/");
    });
})