/// <reference types="cypress" />

import * as common from "../support/common";

context('Upload file', () => {

  it('file without password is accessible', () => {
    const fileName = "test_unprotected.txt"
    common.gotoLandingPage()
    common.openUploadDetail(fileName)
    common.assertUploadDetailWithoutPassword("test_unprotected.txt")
  })

  it('password-protected link revealed on correct password ', () => {
    const fileName = "test_protected.txt"

    common.gotoLandingPage()
    common.openUploadDetail(fileName)
    common.assertUploadDetailWithPassword(fileName)

    common.enterPasswordAndAssertContent("123", fileName)
  })
})
