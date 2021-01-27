describe("guestbook", () => {
  it("Can add/remove entry", () => {
    cy.visit("/guestbook.html");
    cy.get("form textarea").type("Hej här är ett inlägg");
    cy.get("form").submit();
    cy.get("#entries p a").click().end();
  });

  it("Cant post if textarea is empty", () => {
    cy.visit("/guestbook.html");
    cy.get("form textarea").should("have.value", "");
    cy.get("form").submit();
    cy.get("form h3").contains("För kort meddelande!").end();
  });

  it("Cant post less than 3 characters", () => {
    cy.visit("/guestbook.html");
    cy.get("form textarea").type("H");
    cy.get("form").submit();
    cy.get("form h3").contains("För kort meddelande!");
    cy.get("form textarea").type("E");
    cy.get("form").submit();
    cy.get("form h3").contains("För kort meddelande!");
    cy.get("form textarea").type("J");
    cy.get("form").submit();
    cy.get("#entries p").contains("HEJ");
    cy.get("#entries p a").click().end();
  });
});
