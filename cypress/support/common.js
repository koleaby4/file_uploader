const selectors = {
  navbar_uploads : "a[test-data=nav-uploads]",
  navbar_new_upload : "a[test-data=nav-new-upload]",
  link_to_upload_detail : "a[test-data=link-to-upload-detail]",
  uploaded_file_name : "[test-data=uploaded-file-name]",
  password_input : "[test-data=password-input]",
  download_link : "[test-data=download-link]",
}


export const gotoLandingPage = (authenticated = false) => {
  cy.visit("/")
  assertNavbarContent()
}


const assertNavbarContent = () => {
  cy.get(selectors.navbar_uploads).should("be.visible")
  cy.get(selectors.navbar_new_upload).should("be.visible")
}

export const openUploadDetail = linkText =>
  cy.contains(linkText).first().click()


export const assertUploadDetailWithoutPassword = fileName => {
  cy.contains(fileName).should("be.visible")
  cy.get(selectors.uploaded_file_name).should("be.visible")
  cy.get(selectors.download_link).should("be.visible")
}

export const assertUploadDetailWithPassword = fileName => {
  cy.contains(fileName).should("be.visible")
  cy.get(selectors.uploaded_file_name).should("be.visible")
  cy.get(selectors.password_input).should("be.visible")

  cy.get(selectors.download_link).should("not.be.visible")
}

export const enterPasswordAndAssertContent = (password, fileName) => {
  cy.get(selectors.password_input).type(password)
  assertUploadDetailWithoutPassword(fileName)
}
