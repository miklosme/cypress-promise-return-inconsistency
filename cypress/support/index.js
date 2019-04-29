Cypress.Commands.add('grab', (selector, options = {}) => {
    const { returnsCypressWrapper = false } = options;

    const getValue = () => {
        console.log('getValue', selector);
        return Cypress.$(selector);
    };
    const resolveValue = () => {
        return Cypress.Promise.try(getValue).then(value => {
            return cy.verifyUpcomingAssertions(value, options, {
                onRetry: resolveValue,
            });
        });
    };

    const resultPromise = resolveValue().then(matches => {
        Cypress.log(matches);
        return Cypress.$(matches);
    });

    console.log('grab returnsCypressWrapper', returnsCypressWrapper)

    return returnsCypressWrapper ? cy.wrap(resultPromise) : resultPromise;
});
