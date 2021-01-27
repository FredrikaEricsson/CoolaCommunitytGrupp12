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
    cy.get("form").submit().end();
  });

  //it("add new entry", () => {});

  //it("add new entry", () => {});
});
