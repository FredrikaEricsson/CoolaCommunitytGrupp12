describe('User walkthrough website', ()=>{

    it('Can sign in', ()=>{
        cy.visit("/");
        cy.get('form');
        cy.get('input[name="username"]').type("CoolUser").should('have.value', 'CoolUser')
        cy.get('input[name="password"]').type('123123123').should('have.value', '123123123' )
        cy.get('form').submit(); // kör formuläret
        cy.url().should('include', 'start'); // kolla att url:en innehåller start
        cy.contains('Välkommen CoolUser') // kolla att hemsidan innehåller följande string
        cy.get('ul>li').eq(2).click();
        cy.get('a').click();
        cy.get('form');
        cy.get('input[name="username"]').type('newuserlogin').should('have.value', 'newuserlogin');
        cy.get('input[name="email"]').type('newuser123123123@hotmail.com').should('have.value', 'newuser123123123@hotmail.com');
        cy.get('input[name="password"]').type('newuserpassword').should('have.value', 'newuserpassword');
        cy.get('input[name="passwordConfirm"]').type('newuserpassword').should('have.value', 'newuserpassword');
        cy.get('form').submit();
        cy.contains("Anvädaren registrerad!");
        cy.get('a').click();
        cy.get('form');
        cy.get('input[name="username"]').type("CoolUser").should('have.value', 'CoolUser')
        cy.get('input[name="password"]').type('123123123').should('have.value', '123123123' )
        cy.get('form').submit();
        cy.get('ul>li').eq(0).click();
        cy.contains('Gästbok!');
        cy.get('form');
        cy.get('textarea').type("Detta är mitt första inlägg, spännande! :)");
        cy.get('form').submit();
        cy.get('a[href*="start.html"]').click()
        cy.wait(1000);
        cy.get('ul>li').eq(0).click();
        cy.contains("Detta är mitt första inlägg, spännande! :)");
        cy.wait(1000);
        cy.get('a[style="color:red;"]').click();
        cy.get('a[href*="start.html"]').click();
        cy.get('ul>li').eq(0).click();
        cy.wait(1000);
        cy.get('a').click(); // Ifall det inte finns några inlägg så är "Tillbaka" den ända a taggen = inlägget är borttaget!
        cy.get('ul>li').eq(1).click();
        cy.contains('Prentation!');
        cy.get('a').click();
        
    });
});

