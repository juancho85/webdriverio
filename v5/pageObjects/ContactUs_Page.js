class ContactUs_Page {
  // TODO: methods returning actual elements should not be exposed. Use the page Object as an API
  // TODO: Log navigation
  get firstName() { return $("[name='first_name']");}
  get lastName() { return $("[name='last_name']");}
  get emailAddress() { return $("[name='email']");}
  get comments() { return $("[name='message']");}
  get submitButton() { return $("[type='submit']");}
  get successfulSubmissionHeader() { return $("#contact_reply h1");}
  get unsuccessfulSubmissionHeader() { return $("body");}
  get successfulSumbissionHeaderText() {
    return this.successfulSubmissionHeader.getText(); //Thank You for your Message!
  }

  get unsuccessfulSumbissionHeaderText() {
    return this.unsuccessfulSubmissionHeader.getText(); // Error: all fields are required
  }

  setFirstName(firstName) {
    return this.firstName.setValue(firstName);
  }

  setLastName(lastName) {
    return this.lastName.setValue(lastName);
  }

  setEmailAddress(emailAddress) {
    return this.emailAddress.setValue(emailAddress);
  }

  setComments(comments) {
    return this.comments.setValue(comments);
  }

  clickSubmitButton() {
    return this.submitButton.click();
  }

  submitFormWithData(firstName, lastName, emailAddress, comments) {
    if(firstName) {
      this.firstName.setValue(firstName);
    }
    if(lastName) {
      this.lastName.setValue(lastName);
    }
    if(emailAddress) {
      this.emailAddress.setValue(emailAddress);
    }
    if(comments) {
      this.comments.setValue(comments);
    }
    this.submitButton.click();
  }
}

module.exports = new ContactUs_Page();