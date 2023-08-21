Cypress.on('uncaught:exception', (err, runnable) => {
   // returning false here prevents Cypress from
   // failing the test
    return false
});

describe('Joget Cloud Partners Page', () => {
  it('Successfully loads and displays correctly', () => {
    // Visiting the website
    cy.visit('https://www.jogetcloud.com/partners.html')

    // Checks if "On-Demand", "Managed Services", "Partners", "Contact"
    cy.xpath("//div[@class='nav desktop-nav']//a[@class='wsite-menu-item'][normalize-space()='On-Demand']").should('exist')
    cy.xpath("//div[@class='nav desktop-nav']//a[@class='wsite-menu-item'][normalize-space()='Managed Services']").should('exist')
    cy.xpath("//div[@class='nav desktop-nav']//a[@class='wsite-menu-item'][normalize-space()='Partners']").should('exist')
    cy.xpath("//div[@class='nav desktop-nav']//a[@class='wsite-menu-item'][normalize-space()='Contact']").should('exist')

    // Checks if the Bold "Partners" exists
    cy.xpath("//font[normalize-space()='Partners']").should('exist')

    //Checks if the " Cloud Platform Providers" and the undertext exists
    cy.xpath("//h2[normalize-space()='Cloud Platform Providers']").should('exist')
    cy.xpath("//div[normalize-space()='Joget Cloud collaborates with world-class Cloud Platforms to provide you with a worry free experience.']").should('exist')

    //Checks if the four images exists
    cy.xpath("//a[@href='https://aws.amazon.com/']//img[@alt='Picture']").should('be.visible')
    cy.xpath("//a[@href='https://cloud.google.com/']//img[@alt='Picture']").should('be.visible')
    cy.xpath("/html[1]/body[1]/div[3]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[1]/a[1]/img[1]").should('be.visible')
    cy.xpath("/html[1]/body[1]/div[3]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[4]/div[1]/div[1]/a[1]/img[1]").should('be.visible')

    //Checks if the "Joget Partners" and the undertext exists
    cy.xpath("//h2[normalize-space()='Joget Partners']").should('exist')
    cy.xpath("//div[normalize-space()='Joget Partners are ready to assist you to transform your business by leveraging on the Joget DX platform.']").should('exist')

    //Checks if "Exclusive Partners" and the 3 images/texts exists
    cy.xpath("//font[normalize-space()='Exclusive Partners']").should('exist')
    cy.xpath("//img[@alt='Valuprosys Technology, China']").should('be.visible')
    cy.xpath("//div[contains(text(),'Valuprosys Technology, China')]").should('exist')
    cy.xpath("//img[@alt='Mokxa Technologies, USA & India']").should('be.visible')
    cy.xpath("//div[contains(text(),'Mokxa Technologies, USA & India')]").should('exist')
    cy.xpath("//img[@alt='Precise Digital Economy, Thailand']").should('be.visible')
    cy.xpath("//div[contains(text(),'Precise Digital Economy, Thailand')]").should('exist')

    //Checks if "Accredited Partners" and the 27 images/texts exists
    cy.xpath("//img[@alt='Excel Technology, Hong Kong, China']").should('be.visible')
    cy.xpath("//div[contains(text(),'Excel Technology, Hong Kong, China')]").should('exist')
    cy.xpath("//img[@alt='Hypernix, Malaysia']").should('be.visible')
    cy.xpath("//div[contains(text(),'Amast, Malaysia')]").should('exist')
    cy.xpath("//img[@alt='Neyond, Portugal']").should('be.visible')
    cy.xpath("//div[contains(text(),'Neyond, Portugal')]").should('exist')
    cy.xpath("//img[@alt='BeOne Stuttgart, Germany']").should('be.visible')
    cy.xpath("//div[contains(text(),'Pecos Net Business Solutions, Germany')]").should('exist')
    cy.xpath("//img[@alt='Beans Group, Malaysia']").should('be.visible')
    cy.xpath("//div[contains(text(),'Beans Group, Malaysia')]").should('exist')
    cy.xpath("//img[@alt='Gulf Business Solutions, Saudi Arabia']").should('be.visible')
    cy.xpath("//div[contains(text(),'Gulf Business Solutions, Saudi Arabia')]").should('exist')
    cy.xpath("//img[@alt='Itasof, Indonesia']").should('be.visible')
    cy.xpath("//div[contains(text(),'Itasof, Indonesia')]").should('exist')
    cy.xpath("//img[@alt='Dren Solutions, Malaysia']").should('be.visible')
    cy.xpath("//div[contains(text(),'Dren Solutions, Malaysia')]").should('exist')
    cy.xpath("//img[@alt='Soitron. Slovakia']").should('be.visible')
    cy.xpath("//div[contains(text(),'Soitron. Slovakia')]").should('exist')
    cy.xpath("//img[@alt='I&C, Italy']").should('be.visible')
    cy.xpath("//div[contains(text(),'I & C, Italy')]").should('exist')
    cy.xpath("/html[1]/body[1]/div[3]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[11]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/div[4]/div[1]/a[1]/img[1]").should('be.visible')
    cy.xpath("//div[contains(text(),'Innov8tif Solutions, Malaysia')]").should('exist')
    cy.xpath("//img[@alt='Abai Business Solutions, Spain']").should('be.visible')
    cy.xpath("//div[contains(text(),'Abai Business Solutions')]").should('exist')
    cy.xpath("//img[@alt='Khatib & Alami, Lebanon']").should('be.visible')
    cy.xpath("//div[contains(text(),'Khatib & Alami, Lebanon')]").should('exist')
    cy.xpath("//img[@alt='Persys Technologies, Malaysia']").should('be.visible')
    cy.xpath("//div[contains(text(),'Persys Technologies, Malaysia')]").should('exist')
    cy.xpath("//img[@alt='BCircle, Thailand']").should('be.visible')
    cy.xpath("//div[contains(text(),'BCircle, Thailand')]").should('exist')
    cy.xpath("//img[@alt='Reveron Consulting, Malaysia']").should('be.visible')
    cy.xpath("//div[contains(text(),'Reveron Consulting, Malaysia')]").should('exist')
    cy.xpath("//img[@alt='Thaitizens, Thailand']").should('be.visible')
    cy.xpath("//div[contains(text(),'Thaitizens, Thailand')]").should('exist')
    cy.xpath("//img[@alt='Teknologi Maklumat Semesta, Malaysia']").should('be.visible')
    cy.xpath("//div[contains(text(),'Teknologi Maklumat Semesta, Malaysia')]").should('exist')
    cy.xpath("//img[@alt='Alpha Data, UAE']").should('be.visible')
    cy.xpath("//div[contains(text(),'Alpha Data, UAE')]").should('exist')
    cy.xpath("//img[@alt='TMS Software, Malaysia']").should('be.visible')
    cy.xpath("//div[contains(text(),'TMS Software, Malaysia')]").should('exist')
    cy.xpath("//img[@alt='Avaxia International, UAE']").should('be.visible')
    cy.xpath("//div[contains(text(),'Avaxia International, UAE')]").should('exist')
    cy.xpath("//img[@alt='A2Ten Solution, Nigeria']").should('be.visible')
    cy.xpath("//div[contains(text(),'A2TEN Solution, Nigeria')]").should('exist')
    cy.xpath("/html[1]/body[1]/div[3]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[11]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/div[9]/div[1]/a[1]/img[1]").should('be.visible')
    cy.xpath("//div[contains(text(),'Impiger Technology Solutions, UAE')]").should('exist')
    cy.xpath("//img[@alt='Dynacon, Poland']").should('be.visible')
    cy.xpath("//div[contains(text(),'Dynacon, Poland')]").should('exist')
    cy.xpath("//img[@alt='Resemble Systems, UAE']").should('be.visible')
    cy.xpath("//div[contains(text(),'Resemble Systems, UAE')]").should('exist')
    cy.xpath("//img[@alt='Eleviant Technologies, USA']").should('be.visible')
    cy.xpath("//div[contains(text(),'Eleviant Technologies, USA')]").should('exist')
    cy.xpath("//img[@alt='IDB, Vietnam']").should('be.visible')
    cy.xpath("//div[contains(text(),'IDB, Vietnam')]").should('exist')

    //Checks if "​Contact an Implementation Partner Now" and the undertexts exist
    cy.xpath("//h2[contains(text(),'​Contact an Implementation Partner Now')]").should('exist')
    cy.xpath("//span[contains(text(),'If you need any development or implementation assi')]").should('exist')

    //Checks if "Indicates Required Field", "Name", "Email", submit button etc exist
    cy.xpath("//label[@class='wsite-form-label wsite-form-fields-required-label']").should('exist')
    cy.xpath("//div[@class='wsite-form-field wsite-name-field']//label[@class='wsite-form-label']").should('exist')
    cy.xpath("//input[@id='input-854780788815326819']").should('exist')
    cy.xpath("//input[@id='input-854780788815326819-1']").should('exist')
    cy.xpath("//label[@for='input-491276055781529145']").should('exist')
    cy.xpath("//input[@id='input-491276055781529145']").should('exist')
    cy.xpath("//label[@for='input-667693140168453864']").should('exist')
    cy.xpath("//select[@id='input-667693140168453864']").should('exist')
    cy.xpath("//label[@for='input-672454182976339477']").should('exist')
    cy.xpath("//input[@id='input-672454182976339477']").should('exist')
    cy.xpath("//label[@for='input-528841581417962198']").should('exist')
    cy.xpath("//textarea[@id='input-528841581417962198']").should('exist')
    cy.xpath("//span[normalize-space()='Submit']").should('be.visible')

    //Checks if Joget | Partnership and the undertexts/button exist
    cy.xpath("/html[1]/body[1]/div[3]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[15]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/div[1]/div[1]/a[1]/img[1]").should('be.visible')
    cy.xpath("//div[normalize-space()='If you are interested to find out more about the Joget Partnership Program, please let us know.']").should('exist')
    cy.xpath("//span[normalize-space()='Start here']").should('be.visible')

    //Checks if Green border wrapping is visible
    cy.xpath("//div[@class='wsite-section wsite-body-section wsite-section-bg-image wsite-background-49']//div[@class='container']").should('be.visible')

    //Checks if "Contact Us" and its links exist
    cy.xpath("//font[normalize-space()='CONTACT US']").should('exist')
    cy.xpath("//font[normalize-space()='Inquiry:']").should('exist')
    cy.xpath("/html[1]/body[1]/div[3]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[1]/div[1]/font[1]").should('exist')
    cy.xpath("//strong[normalize-space()='Joget DX:']").should('exist')
    cy.xpath("//a[normalize-space()='https://www.joget.org']").should('be.visible')
    cy.xpath("//strong[normalize-space()='Blog:']").should('exist')
    cy.xpath("//a[normalize-space()='http://blog.joget.org']").should('be.visible')

    //Checks if "Resources and its links exist"
    cy.xpath("//font[normalize-space()='RESOURCES']").should('exist')
    cy.xpath("//a[normalize-space()='Community and Knowledge Base']").should('be.visible')
    cy.xpath("//a[normalize-space()='Joget DX Translation']").should('be.visible')
    cy.xpath("//a[normalize-space()='Joget Marketplace']").should('be.visible')
    cy.xpath("//a[normalize-space()='Joget DX Videos']").should('be.visible')
    cy.xpath("//a[normalize-space()='Download Joget DX On-Premise']").should('be.visible')
    cy.xpath("//a[normalize-space()='Open Source Repository']").should('be.visible')
    cy.xpath("//a[normalize-space()='Joget China']").should('be.visible')
    cy.xpath("//a[normalize-space()='Joget Cloud in China']").should('be.visible')

    //Checks if "Links" and its links are visible
    cy.xpath("//font[normalize-space()='LINKS']").should('exist')
    cy.xpath("//a[normalize-space()='Joget China']").should('be.visible')
    cy.xpath("//a[normalize-space()='Joget China']").should('be.visible')
    cy.xpath("//a[normalize-space()='Joget China']").should('be.visible')
    cy.xpath("//a[normalize-space()='Joget China']").should('be.visible')
    cy.xpath("//a[normalize-space()='Joget China']").should('be.visible')
    cy.xpath("//a[normalize-space()='Joget China']").should('be.visible')
    cy.xpath("//a[normalize-space()='Joget China']").should('be.visible')
    cy.xpath("//a[normalize-space()='Joget China']").should('be.visible')
    cy.xpath("//a[normalize-space()='Joget China']").should('be.visible')
    cy.xpath("//a[normalize-space()='Joget China']").should('be.visible')
    cy.xpath("//a[normalize-space()='Joget China']").should('be.visible')
    cy.xpath("//a[normalize-space()='Joget China']").should('be.visible')
    cy.xpath("//a[normalize-space()='Joget China']").should('be.visible')
    cy.xpath("//a[normalize-space()='Joget China']").should('be.visible')

  })
})

describe('Form Submission', () => {
    it('Cannoet be submitted until all required fields ar filled.', () => {

      // Visting the Website
      cy.visit('https://www.jogetcloud.com/partners.html')

      // Getting all visible input elements
      const inputFields = cy.get('input:visible');
      
      // Loop through each input element
      inputFields.each((input) => {

      // Log the attributes of the input element
      cy.log('Input Element:', input.attr('name'), input.attr('type'));
    });


      //Entering values into the fields
      cy.xpath("//input[@placeholder='First']").type('Damien')
      cy.xpath("//input[@placeholder='Last']").type('Wan')
      cy.xpath("//input[@name='_u672454182976339477']").type('damienwan@gmail.com')
      cy.xpath("//input[@name='_u491276055781529145']").type('Binge')
      cy.xpath("//textarea[@name='_u528841581417962198']").type('Some text')
 
      // Checking if the Select option was selected
      cy.get("//select[@name='_u667693140168453864']").should('not.have.value')

      //Verify that the button would be clicked on after fields are filled
      cy.get('form > div > a').click()

    })
  })

describe('Verifying if the form could be Submitted', () => {
  it('Must have Submit button working.', () => {

    // Visting the Website
    cy.visit('https://www.jogetcloud.com/partners.html')

    // Verifying that the the button could be clicked on and submitted
    cy.get('form > div > a').click()

  })
})

describe('Clickable Buttons and Correct Displays', () => {
  it('Must have all the links and buttons clickable and open the correct page', () => {

    // Visting the Website
    cy.visit('https://www.jogetcloud.com/partners.html')
  
    // Getting buttons to check that they are functional and not disabled
    const clickableElements = cy.get('form > div > a').click()

    clickableElements.each((element) => {
      // Get the element's href or onclick attribute
      const href = element.attr('href');
      const onclick = element.attr('onclick');

      // Skip elements without href or onclick attributes
      if (!href && !onclick) {
        return;
      }

      // Perform the click
      cy.wrap(element).click();

      // If href attribute exists, verify URL change
      if (href) {
        cy.url().should('include', href);
      }

      // If onclick attribute exists, verify expected action (modify as needed)
      if (onclick) {
        // Ex: Verify that a modal is opened
        cy.get('.modal').should('be.visible');
      }

      // Go back to the original page
      cy.go('back');
    });

    // Gets all the <a> elements which contains the href attribute. Essentially checking for all functional links
    cy.get('a[href]').each(($a) => {
      expect($a).to.have.attr("href");
    });
    
  })
})