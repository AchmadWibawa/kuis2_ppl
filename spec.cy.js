Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('empty spec', () => {
  it('passes (form email salah kurang @)', () => {
    // Tambah komentar salah email
    cy.visit('https://localhost/project_uas')
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get(':nth-child(2) > .thumbnail > :nth-child(1) > img').click()
    // form komentar
    cy.get(':nth-child(3) > .form-control').type('wibi')
    cy.get(':nth-child(4) > .form-control').type('wibiemail.com')
    cy.get(':nth-child(5) > .form-control').type('test')
    cy.get('.btn').click()
  })

  it('passes (form benar semua)', () => {
    // Tambah komentar
    cy.visit('https://localhost/project_uas')
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get(':nth-child(2) > .thumbnail > :nth-child(1) > img').click()
    // Form Komentar
    cy.get(':nth-child(3) > .form-control').type('wibi')
    cy.get(':nth-child(4) > .form-control').type('wibi@email.com')
    cy.get(':nth-child(5) > .form-control').type('artikel ini memberikan informasi yang menarik bagi saya pencinta motor custom')
    cy.get('.btn').click()
  })

  it('pases (cek komentar dan validasi di dashboard admin)', () => {
    // cek Komentar serta validasi admin  
    cy.visit('https://localhost/project_uas/index.php?halaman=login')
    cy.get(':nth-child(1) > .form-control').type('wibi')
    cy.get(':nth-child(2) > .form-control').type('12345')
    cy.get('.btn').click()
    cy.get('[href="index.php?halaman=komentar"]').click()
    cy.get(':nth-child(1) > :nth-child(7) > .btn-edit').click()
    // publish komentar
    cy.get(':nth-child(2) > .form-check-label').click()
    cy.get('form > .btn').click()
    // cek komentar di artikel ter publish atau tidak
    cy.get('.navbar-brand').click()
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get(':nth-child(2) > .thumbnail > :nth-child(1) > img').click()
    cy.scrollTo('center')
  })
})