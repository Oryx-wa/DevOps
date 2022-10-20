describe("Academic Details", () => {

    it("Navigate to the url", () => {
        cy.visit(Cypress.env('login_url'));
        
        cy.wait(5);
    });

    it("logs in to the application", () => {
      cy.get("#Email")
          .type(Cypress.env('email'), { force: true })
        //   .should("have.value", "admin_demo@oryxhr.com");

      cy.get("#Password").type(Cypress.env('password'), { force: true });

      cy.get(".btn").click("");

      cy.wait(5);
  });


//   it("Navigate to the url", () => {
//       cy.visit("https://demo.oryxhr.com");

//       cy.wait(5);
//   });

//   it("logs in to the application", () => {
//       cy.get("#Email")
//           .type("admin_demo@oryxhr.com", { force: true })
//           .should("have.value", "admin_demo@oryxhr.com");

//       cy.get("#Password").type("Oryx@108demo", { force: true });

//       cy.get(".btn").click("");

//       cy.wait(5);
//   });

  it("navigates to academic details", () => {
      cy.get('.form-control').type("Egeni")
      cy.wait(5000)
      cy.contains("Egeni Emmanuel").click({force: true})
      cy.wait(5000)
      cy.contains("Employee Basic Information")
      cy.contains("Manager")
      cy.contains("Start Date")
      // academic details
      cy.get('#\\39 ').click()
  })

  it("tests professional certification", () => {

      // professional Certification
      cy.contains("Professional Certification")
      // three dot menu
      cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
      // edit
      cy.get('#edit > .menu-title').click()
      cy.wait(5000)
      cy.get('#input-certificateNo').type('4')
      // save
      cy.get(':nth-child(1) > :nth-child(3) > .mb-10 > .btn-success').click()
      // to go back to professional certificate and confirm that 4 is there
      cy.get('#\\31 23 > .menu-title').click()
      cy.contains(4)
      // to delete the 4 value
      cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
      cy.get('#edit > .menu-title').click()
      cy.get('#input-certificateNo').type('{backspace}')
      // save
      cy.get(':nth-child(1) > :nth-child(3) > .mb-10 > .btn-success').click()
      // confirm that the professional certificate page does not contain 4
      cy.get('#\\31 23 > .menu-title').click({force:true})
      cy.should('not.contain', '4')
  })

      // // education history
      // cy.get('#\\31 24 > .menu-title').click()
      // // three dot menu
      // cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
      // // edit qualification
      // cy.get('#edit > .menu-title').click()
      // cy.wait(5000)
      // cy.get(':nth-child(1) > :nth-child(2) > .col-lg-10 > [_ngcontent-nwp-c147=""] > :nth-child(3) > .col-lg-6 > :nth-child(1) > .row > .col-lg-8 > #ngSelect-qualification > .ng-select-container > .ng-arrow-wrapper').click()
      // cy.wait(5000)
      // cy.contains("Bachelor's Degree").click({force: true})
      // cy.wait(5000)
      // // save
      // cy.get(':nth-child(1) > :nth-child(3) > .mb-10 > .btn-success').click()
      // // go to the main education history page and ensure it contains the saved value (bachelor's degree)
      // cy.get('#\\31 24 > .menu-title').click()
      // cy.contains("Bachelor's Degree")
      // // then edit again to remove the bachelor's degree and test that it is not present on the page
      // // three dot menu
      // cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
      // cy.get('#edit > .menu-title').click()
      // // remove bachelor's degree
      // cy.get(':nth-child(1) > :nth-child(2) > .col-lg-10 > [_ngcontent-ekb-c147=""] > :nth-child(3) > .col-lg-6 > :nth-child(1) > .row > .col-lg-8 > #ngSelect-qualification > .ng-select-container > .ng-clear-wrapper').click()
      // // save
      // cy.get(':nth-child(1) > :nth-child(3) > .mb-10 > .btn-success').click()
      // // go to the main education history page and ensure it does not contains the removed value (bachelor's degree)
      // cy.get('#\\31 24 > .menu-title').click()
      // cy.should('not.contain', "Bachelor's Degree")

      it("tests trainings", () => {

      // Trainings
      cy.get('#\\31 25 > .menu-title').click()
      // three dot menu
      cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
      // edit qualification
      cy.get('#edit > .menu-title').click()
      cy.wait(5000)
      cy.contains("New Trainings")
      // edit course
      cy.get('#input-course').type("v")
      cy.get(':nth-child(1) > :nth-child(3) > .mb-10 > .btn-success').click()
      // check trainings if course is there
      cy.get('#\\31 25 > .menu-title').click()
      cy.contains("Course")
      // edit qualification and remove v  from being a course
      cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
      cy.get('#edit > .menu-title').click()
      cy.get('#input-course').type('{backspace}')
      cy.get(':nth-child(1) > :nth-child(3) > .mb-10 > .btn-success').click()
      // check trainings to ensure that course is not there
      cy.get('#\\31 25 > .menu-title').click()
      cy.should('not.contain', "Course")

  })

    it("tests basic info", () => {
        cy.get('.card-body > .nav > :nth-child(1)').click()
        cy.wait(5000)
        cy.contains("Employee Basic Information")
        cy.contains("Manager")
        cy.contains("Start Date")
        cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
        // document
        cy.get('#document > .menu-title').click()
        cy.contains("Basic Information Documents")
        // to close
        cy.get('.indigo').click()
        cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
        // edit
        cy.get('.card-toolbar > .dropdown > .menu > :nth-child(3) > .menu-link').click()
        cy.contains("New Employee")
        // input a new middle name
        cy.get('#input-middleName').type("v")
        // update
        cy.get('.btn-success').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Updated Successfully`)
        })

        cy.wait(5000)

        // clear the middle name input value
        cy.get('#input-middleName').type('{backspace}')
        cy.wait(5000)
        cy.get('.btn-success').click({force: true})

        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Updated Successfully`)
        })


    it("goes back to the basic info list", () => {
      cy.get('#\\36 ').click()
    })

    })

    it("tests job history", () => {
      cy.get('#\\37 ').click()
      cy.wait(5000)
      cy.contains("Employee Job History")
      // three dot menu
      cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
      // edit posting
      cy.get('#edit').click()
      cy.get('#input-posting').type("k")
      // save
      cy.get(':nth-child(1) > :nth-child(3) > .mb-10 > .btn-success').click()
      // checking the job history page back to see if posting was saved
      cy.get('#\\31 26 > .menu-title').click()
      cy.contains("Posting")
      // now remove the posting from the page
      cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
      cy.get('#edit').click()
      cy.get('#input-posting').type('{backspace}')
      cy.get(':nth-child(1) > :nth-child(3) > .mb-10 > .btn-success').click()
      // checking the job history page back to see if posting has been removed
      cy.get('#\\31 26 > .menu-title').click()
      cy.should('not.contain', "Posting")
  })

      // organization details
    it("tests leave history", () => {

      // leave history
      cy.get('#\\31 28 > .menu-title').click()
      cy.contains('Work Schedule')
      // // three dot menu
      // cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
      // // edit
      // cy.get('#edit').click()


  })

    it("tests medicals", () => {
        // medicals
        cy.get('#\\33 ').click()
        cy.contains("Hospital Requests")
    })

    it("tests payroll information", () => {
      // payroll data
      cy.get('#\\39 8').click()
      cy.wait(5000)
      // payroll information
      cy.contains("Employee Payroll Information")
      // three dot menu
      cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
      // testing pay(it is not working)
      // cy.get('#pay > .menu-title').click()
      // testing edit
      cy.get('#edit > .menu-title').click()
      cy.wait(5000)
      cy.get('#input-bankAccountNo').type("3")
      // save
      cy.get('.btn-success').click()
      cy.get('#\\37 8 > .menu-title').click()
      // testing insert
      cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
      cy.get('#insert > .menu-title').click()
      cy.wait(5000)
      cy.get('#ngSelect-eventReason > .ng-select-container > .ng-value-container > .ng-input > input').click()
      cy.contains("Data Change").click()
      cy.get('#input-gross').type("3")
      // save
      cy.get('.btn-success').click()
      // // going back to the payroll information page to test if the data is saved indeed
      // cy.get('#\\37 8 > .menu-title').click({force:true})
      // cy.contains("Gross")
      // cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
      // cy.get('#insert > .menu-title').click()
      // cy.wait(5000)
      // cy.get('#input-gross').type('{backspace}')
      // cy.wait(5000)
      // cy.get('.btn-success').click()
      // cy.wait(5000)
      // cy.get('#\\37 8 > .menu-title').click()
      // cy.should('not.contain', "Gross")


      // history
      cy.get('#\\37 8 > .menu-title').click()
      cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
      cy.get('#history > .menu-title').click()
      cy.contains("history")

  })

  it("tests direct pay item", () => {

      // direct payitem
      cy.get('#\\31  > .menu-title').click()
      cy.contains("Amount")
      cy.contains("Discontinue")
      cy.contains("Save")

      // click display all
      cy.get('.btn-success').click()
      cy.wait(5000)
      cy.contains("Show Current")
      // click show current
      cy.get('.btn-success').click()
      cy.wait(5000)
      cy.contains("Display All")
      // // test add new
      // cy.get('.mb-5 > .btn-primary').click()
      // cy.contains("Formula")
      // cy.contains("Gross Factor")
      // cy.get('#datePicker-effectiveDate').type("2022-02-02")
      // cy.wait(4000)
      // cy.get('#input-amount').type("4")
      // cy.wait(5000)
      // cy.get('#ngSelect-payCode > .ng-select-container > .ng-value-container > .ng-input > input').type("Housing")
      // cy.wait(5000)
      // cy.contains('Housing - Housing').click({force:true})
      // cy.wait(5000)
      // cy.get('#ngSelect-eventReason > .ng-select-container > .ng-value-container > .ng-input > input').type("Data Change")
      // cy.wait(5000)
      // cy.contains("Data Change").click()
      // // save
      // cy.get('.card-footer > .btn-success').click()
      // cy.wait(4000)
      // cy.contains("4.0")
  })

  it("tests tax", () => {

      // // tax id issue
      cy.get('#\\35 3 > .menu-title').click()
      cy.contains("Type")
      cy.contains("Amount")
      // // add new button not clicking maybe beacause of id
      // cy.get('.mb-5 > .btn').click()
      // // cy.get('#datePicker-effectiveDate').type("2022-02-02")
      // // cy.get('#ngSelect-eventReason > .ng-select-container > .ng-value-container > .ng-input > input').type("Data Change")
      // // cy.wait(5000)
      // // cy.contains("Data Change").click()
  })

  // it("tests pay group info", () => {

  // // pay group info
  //     cy.get('#\\32 00 > .menu-title').click()
  //     cy.contains("Employee Paygroup Information")
  //     cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
  //     // testing edit
  //     cy.get('#edit > .menu-title').click()
  //     cy.contains("Pay Step")
  //     cy.get('#\\32 00 > .menu-title').click()
  //     cy.contains("Employee Paygroup Information")
  //     // testing insert
  //     cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
  //     cy.get('#insert > .menu-title').click()
  //     cy.contains("Pay Group")
  // })

  it("tests loan and advance", () => {

      // Loan and advance
      cy.get('#\\31 15 > .menu-title').click()
      cy.contains("Loan and Advance")
      cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
      // test edit
      cy.get('#edit > .menu-title').click()
      cy.contains("Loan and Advance")
      cy.get('#\\31 15 > .menu-title').click()
      cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
      // test insert
      cy.get('#insert').click()
      cy.contains("Original Amount")
       })

  it("tests cost centre", () => {

      // cost centre
      cy.get('#\\38 0 > .menu-title').click()
      cy.contains("Employee Cost Centres")
      cy.contains("Add New")
      cy.contains("Save All")
  })

  it("tests project", () => {

      // project
      cy.get('#\\39 7 > .menu-title').click()
      cy.contains("Employee Project Assignment")
      cy.contains("Add New")
      cy.contains("Save All")
  })

  it("tests payslips", () => {

      // payslips
      cy.get('#\\31 76').click()
      cy.contains("Salary Pay Slip")
      // test download
      cy.get(':nth-child(1) > .flex-wrap > .svg-icon > svg').click()

  })


  it("tests personal details", () => {
    cy.get('#\\38 ').click()
    // personal details
    cy.contains("Personal Details")
    // check if the list of personal details is on the page
    cy.contains("Gender")
    cy.contains("Genotype")
    cy.contains("Blood Group")

    // three dots
    cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
    // edit
    cy.get('#edit > .menu-title').click()
    cy.contains('Edit - Personal Details')
    // input v in maiden name to test
    cy.get('#input-maidenName').type("v")
    // click update
    cy.get('.btn-success').click()
    // alert test
    cy.on('window:alert', (str) => {
        expect(str).to.equal(`Saved Successfully`)
    })
    cy.wait(5000)

    // removing the v maiden name and updating
    cy.get('#input-maidenName').type('{backspace}')
    cy.wait(5000)
    cy.get('.btn-success').click({force: true})

    cy.on('window:alert', (str) => {
        expect(str).to.equal(`Saved Successfully`)
    })

    // go out to be able to access the three dot menu and also test insert and history
    cy.get('#\\31 29 > .menu-title').click()
    // three dots
    cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
    // testing insert
    cy.get('#insert > .menu-title').click()
    cy.contains("Insert - Personal Details")
    // pick as of date
    cy.get('#datePicker-effectiveDate').type("2022-02-02")
    cy.wait(4000)

    // cy.get('#input-maidenName').type("v")

    // Event reason
    // cy.get('#ngSelect-eventReason > .ng-select-container > .ng-arrow-wrapper').select("Data Change")

    cy.get('.btn-success')
        .contains("Add")
        .click()

    cy.on('window:alert', (str) => {
        expect(str).to.equal(`Saved Successfully`)
    })

    // go out to be able to access the three dot menu of personal details
    cy.get('#\\31 29 > .menu-title').click()
    cy.get('.flaticon-more-1').click()
    cy.get('#history > .menu-title').click()
    cy.contains("Change History")
    // history icon is faulty
})

it("tests biographical data", () => {

    // testing biographical data under personal details
    cy.get('#\\31 30 > .menu-title').click()
    // the three dot menu
    cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
    // testing edit
    cy.get('#edit').click()
    // cancelling nationality
    cy.get('#ngSelect-nationality > .ng-select-container > .ng-clear-wrapper').click()
    // update button
    cy.get('.btn-success').click()
    // alert test
    cy.on('window:alert', (str) => {
        expect(str).to.equal(`BiographicalInfo saved successfully`)
    })
    // updating nationality back
    cy.wait(5000)
    cy.get('#ngSelect-nationality > .ng-select-container > .ng-value-container > .ng-input > input').type("Nigeria")
    cy.wait(5000)
    cy.contains("Nigeria").click({force: true})
    // update button
    cy.get('.btn-success').click()
    // alert test
    cy.on('window:alert', (str) => {
        expect(str).to.equal(`BiographicalInfo saved successfully`)
    })

  //   // go out to be able to access the three dot menu of biographical data to test insert
  //   cy.get('#\\31 30 > .menu-title').click({force:true})
  //   // the three dot menu
  //   cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
  //   // testing insert
  //   cy.get('#insert > .menu-title').click()
  //   // cancel region
  //   cy.get('#ngSelect-geoPoliticalZone > .ng-select-container > .ng-clear-wrapper').click()
  //   // save
  //   cy.get('.btn-success').click()
  //   // updating the region
  //   cy.wait(7000)
  //   cy.get('#ngSelect-geoPoliticalZone > .ng-select-container > .ng-value-container > .ng-input > input').type("South West")
  //   cy.wait(5000)
  //   cy.contains("South West").click({force: true})
  //   // update
  //   cy.get('.btn-success').click()
  //   // alert test
  //   cy.on('window:alert', (str) => {
  //       expect(str).to.equal(`BiographicalInfo saved successfully`)
  //   })
  })

  it("tests contact", () => {

    // to test the contact page
    cy.get('#\\31 31 > .menu-title').click({force:true})
    // three dot menu
    cy.get('.flaticon-more-1').click()
    // edit
    cy.get('#edit > .menu-title').click()
    // input email
    cy.get('#input-email').type('v')
    // save
    cy.get('.btn-success').click()
    cy.wait(5000)
    // delete the email address input
    cy.get('#input-email').type('{backspace}')
    cy.wait(5000)
    // save
    cy.get('.btn-success').click()

  //   // go back to the contact page so as to test insert
  //   cy.get('#\\31 31 > .menu-title').click({force:true})
  //   // three dot menu
  //   cy.get('.flaticon-more-1').click()
  //   // insert
  //   cy.get('#insert').click()
  //   cy.contains('New Contact')
  //   // input email
  //   cy.get('#input-email').type('v')
  //   // save
  //   cy.get('.btn-success').click()
  //   cy.wait(5000)
  //   // delete the email address input
  //   cy.get('#input-email').type('{backspace}')
  //   cy.wait(5000)
  //   // save
  //   cy.get('.btn-success').click()
  })


  it("tests address", () => {

    // navigate to address
    cy.get('#\\31 32 > .menu-title').click({force:true})
    // three dot menu
    cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
    // edit and delete
    cy.get('#edit > .menu-title').click()
    cy.wait(5000)
    // input city
    cy.get('#input-city').type("l")
    // save
    cy.get(':nth-child(1) > :nth-child(3) > .mb-10 > .btn-success').click()
    // go back to the address page and check if l is present
    cy.get('#\\31 32 > .menu-title').click()
    cy.contains("l")
    // cy.should('not.contain', 'city')
    // edit and remove l from being a city
    // three dot menu
    cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
    cy.get('#edit > .menu-title').click()
    cy.get('#input-city').type('{backspace}')
    // save
    cy.get(':nth-child(1) > :nth-child(3) > .mb-10 > .btn-success').click()
  })


  it("tests dependant", () => {

    // navigate to dependant
    cy.get('#\\31 33 > .menu-title').click()
    cy.contains("Female")
    // three dot menu
    cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
    // edit
    cy.get('#edit').click()
    cy.contains("New Dependant")
    // //editing name
    cy.get('#input-name').type("v")
    // save button
    cy.get(':nth-child(1) > :nth-child(3) > .mb-10 > .btn-success').click()
    // go back to the dependant page and check if v is present
    cy.get('#\\31 33 > .menu-title').click()
    cy.contains("v")
    // now edit again and remove v
    // three dot menu
    cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
    // edit
    cy.get('#edit > .menu-title').click()
    cy.get('#input-name').type('{backspace}')
    // then save
    cy.get(':nth-child(1) > :nth-child(3) > .mb-10 > .btn-success').click()
  })


  it("tests next of kin", () => {

    // next of kin
    cy.get('#\\31 34 > .menu-title').click()
    // three dot menu
    cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
    // edit
    cy.get('#edit > .menu-title').click()
    cy.contains("New Next of Kin")
    // editing name
    cy.get('#input-name').type("v")
    // save button
    cy.get(':nth-child(1) > :nth-child(3) > .mb-10 > .btn-success').click()
    // go back to the nect of kin page and check if v is present
    cy.get('#\\31 34 > .menu-title').click()
    cy.contains("v")
    // now edit again and remove v
    // three dot menu
    cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
    // edit
    cy.get('#edit > .menu-title').click()
    cy.get('#input-name').type('{backspace}')
    // then save
    cy.get(':nth-child(1) > :nth-child(3) > .mb-10 > .btn-success').click()
  })


  it("tests emergency contact", () => {

    // emergency contact
    cy.get('#\\31 35 > .menu-title').click()
    // three dot menu
    cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
    // edit
    cy.get('#edit > .menu-title').click()
    cy.contains("New Emergency Contact")
})

it("tests profile information", () => {
  // profile information
  cy.get('#\\35 9').click()
  // three dot menu
  cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
  // edit
  cy.get('#Profile\\ Information').click()
  // edit introduction
  cy.get(':nth-child(2) > .form-control').type("q")
  cy.wait(5000)
  cy.get('.input-group > .form-control').type("2022-02-02")
  // save
  cy.wait(5000)
  cy.get('.btn-success').click()
  // // go back to the page and check if q is present
  // cy.get('#\\35 9').click()
  // cy.contains('q')
  // // edit again and remove q
  // // three dot menu
  // cy.get('.card-toolbar > .dropdown > #dropdownMenuButton1').click()
  // // edit
  // cy.get('#Profile\\ Information').click()
  // // remove q in introduction
  // cy.get('.input-group > .form-control').type("2022-02-02")
  // cy.get(':nth-child(2) > .form-control').type('{backspace}')
  // // save
  // cy.get('.btn-success').click()
  // cy.get('#\\35 9').click()
  // cy.should('not.contain', "q")




})

})


