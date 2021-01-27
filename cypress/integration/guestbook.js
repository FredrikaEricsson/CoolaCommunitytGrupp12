describe("guestbook", () => {
  it("add/remove entry", () => {
    cy.visit("/guestbook.html");
    cy.get("form textarea").type("Hej här är ett inlägg");
    cy.get("form").submit();
    cy.get("#entries p a").click().end();
  });

  //it("add new entry", () => {});

  //it("add new entry", () => {});

  //it("add new entry", () => {});
});
