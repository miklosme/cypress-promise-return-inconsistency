/// <reference types="Cypress" />

const renderTable = ({ delay = 0 } = {}) => {
    console.log('renderTable');
    cy.window().then(window => {
        console.log('window', window);
        window.location = 'about:blank';

        setTimeout(() => {
            window.document.write(`
            <div class="app">
                <table class="main-table">
                    <tr>
                        <th>Foo</th>
                        <th>Bar</th>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>aaa</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>bbb</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>ccc</td>
                    </tr>
                </table>
            </div>
        `);
        }, delay);
    });
};

describe('Inconsistency', () => {
    beforeEach(() => {
        cy.reload();
    });
    it('wrapper', () => {
        renderTable({ delay: 2000 });
        cy.grab('table', { returnsCypressWrapper: true })
            .should('exist')
            .and('have.class', 'main-table');
    });
    it('promise', () => {
        renderTable({ delay: 2000 });
        cy.grab('table', { returnsCypressWrapper: false })
            .should('exist')
            .and('have.class', 'main-table');
    });
    it('wrapper: not exist', () => {
        renderTable({ delay: 2000 });
        cy.grab('.foobarbaz', { returnsCypressWrapper: true })
            .should('not.exist')
    });
    it('promise: not exist', () => {
        renderTable({ delay: 2000 });
        cy.grab('.foobarbaz', { returnsCypressWrapper: false })
            .should('not.exist')
    });
});
