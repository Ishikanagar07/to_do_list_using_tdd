describe('Creating to do list', () => {
    it('Adds new items in the to do list and displays them on screen', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('[data-testid="toDoItem"]')
        .type('New item');
  
      cy.get('[data-testid="addButton"]')
        .click();
  
      cy.get('[data-testid="toDoItem"]')
        .should('have.value', '');
  
      cy.contains('New item');
    });
  });