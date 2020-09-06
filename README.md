# Summary

A basic version of a file transfer website such as WeTransfer or Firefox Send.

# User stories

## MVP

- [x] As a sending user I want to be able to upload one or more files and obtain a URL link which I
can share with other people so they can access those files.
- [x] As a receiving user I want to be able to visit a link I have received from a sending user so I
can download the files.

## Nice to have

- [x] The generated links make use of a pseudo-random token to prevent guessing
- [x] The sending user can specify a password which the receiving user must enter before being able to download them
- [ ] The sending user can upload multiple files
- [ ] The sending user can specify for how long the generated link should be considered valid
- [ ] The sending user can drag-and-drop the files they wish to upload
- [ ] The sending user sees a progress bar is displayed during file upload

# Installing dependencies and serving

1. Download the source
2. Install dependencies: `pip install -r requirements.txt`
3. Run migrations: `python manage.py migrate`
4. Start the server: `python manage.py runserver`
5. Open `http://127.0.0.1:8000/` in your browser

# Cypress tests

Install cypress:
 - short installation steps: `npm install cypress --save-dev`
 - detailed instructions can be found [here](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)

Open Cypress runner UI: `npm run cypress:open`

Expected test data: tests rely on the following two uploads being present:
- `test_protected.txt` with password `123`
- `test_unprotected.txt` without password

To run tests:
 - serve the project `python manage.py runserver`
 - in Cypress UI click on `upload.spec.js` link
