/// <reference types="cypress" />

import * as common from "../support/common";

context('Upload file', () => {

  it('file without password is accessible', () => {
    common.gotoLandingPage()
    common.openUploadDetail("1.jpg")
    common.assertUploadDetailWithoutPassword("1.jpg")
  })

  it('password-protected link revealed on correct password ', () => {
    common.gotoLandingPage()
    common.openUploadDetail("3.jpg")
    common.assertUploadDetailWithPassword("3.jpg")
  })


})
