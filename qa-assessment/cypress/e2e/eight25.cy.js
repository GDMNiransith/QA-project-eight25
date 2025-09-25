describe('eight25media smoke tests', () => {

  it('Homepage — title contains "eight25"', () => {
    cy.visit('/')
    cy.title().should('include', 'eight25')
  })

  it('Navigation — click Work and verify page loaded', () => {
    cy.visit('/')
    // click the Work link in the header nav
    cy.get('nav').contains('Work').click()

    // ensure we navigated to a "work" page
    cy.location('pathname', { timeout: 10000 }).should('match', /work/i)

    // assert page contains either the expected phrase or the current heading
    // this makes the test resilient if site wording changes slightly
    cy.contains(/Our Work|Not all work is created equal|Success stories|Let’s work together/i, { timeout: 10000 })
      .should('be.visible')
  })

  it('Form Interaction — navigate to Contact and fill fields', () => {
    // direct visit to contact page
    cy.visit('/lets-talk')

    // robust selectors: try common attribute combos so test works if markup uses id, name or placeholder
    cy.get('input[name="name"], input#name, input[placeholder*="Name"]').first()
      .type('Test User')
      .should('have.value', 'Test User')

    cy.get('input[name="email"], input#email, input[placeholder*="Email"]').first()
      .type('testuser@example.com')
      .should('have.value', 'testuser@example.com')

    // message textarea
    cy.get('textarea[name="message"], textarea#message, textarea[placeholder*="Message"]').first()
      .type('This is a test message')
      .should('have.value', 'This is a test message')

    // submission is not performed, as requested
  })

  it('Responsive Check (mobile 375x667) — verify mobile menu visible', () => {
    cy.viewport(375, 667)
    cy.visit('/')

    // list of common hamburger/menu selectors
    const menuSelectors = [
      'button[aria-label*="menu"]',
      'button[aria-label*="Menu"]',
      'button[class*="menu"]',
      '.hamburger',
      '.menu-toggle',
      '.nav-toggle'
    ]

    // check if any of those selectors exist in DOM and are visible
    cy.get('body').then($body => {
      let found = false
      for (const sel of menuSelectors) {
        if ($body.find(sel).length) {
          cy.get(sel).should('be.visible')
          found = true
          break
        }
      }
      expect(found, 'found a visible mobile menu selector').to.be.true
    })

    // optional additional check: main nav links should be hidden on mobile
    cy.get('nav').find('a').should('not.be.visible')
  })
})
