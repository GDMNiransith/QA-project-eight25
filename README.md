
QA Engineer Assessment – Automation & AI

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Section 3 :

Create a new test project


  Open the automation tool (Testim, Mabl, or Katalon).
  
  
  Create a new test case and name it Homepage to Contact Form Flow.


Record the navigation steps


  Start the recorder within the tool.
  
  
  Open the website homepage.
  
  
  Click on the “Work” link or button to move to the Work page.
  
  
  From the Work page, click on the “Contact” option to open the contact form.


Add validations after navigation


  Verify that the Work page has loaded correctly (e.g., check for a heading or URL containing /work).
  
  
  Verify that the Contact form is displayed (form fields such as Name, Email, and Message are visible).


Fill out the Contact form


  Enter sample test data into the form fields, such as:
  
  
    Name: Test User
    
    
    Email: test@example.com
    
    
    Message: This is a test message


Submit the form


  Record the click on the Submit button.
  
  
  Add a validation step to confirm that a success message (e.g., “Thank you for contacting us”) appears, or that the form submission response is successful.


Stabilize the test flow


  Review the automatically recorded locators and replace weak selectors with stable attributes (like IDs or data-test attributes).
  
  
  Add smart waits so the tool waits until elements are visible or clickable, reducing flakiness.


Save and execute the test


  Save the test case.
  
  
  Run it within the tool to confirm the complete flow works correctly.


Optional enhancements


  Make the form data parameterized (use different names and emails for multiple runs).

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Section 4:

I believe AI-based test automation will make testing faster and more reliable over the next few years. Right now, a lot of time goes into creating and maintaining test scripts, but AI tools can learn from changes in the application and adjust tests automatically. This will reduce flakiness and save teams from constantly fixing broken tests. I also think AI will help identify better test coverage by analyzing user behavior and spotting gaps that humans might miss. Overall, it will allow testers to focus more on quality and user experience instead of repetitive manual work. In my view, AI will not replace testers but will act as a strong assistant that makes the whole process more efficient.





Add the test to a test suite so it can run automatically as part of regression or CI/CD pipelines.
