Feature: Automated Login Tests
Description: The purpose of this feature is to test login scenarios.
   Scenario Outline: Customer tries to login with valid credentials.
      Given User is on Login Page
      When User tries to login with "<username>" and "<password>"
      Then User should be successfully looged in
      
      Examples:
      |  username        | password                | 
      |  tomsmith        |  SuperSecretPassword!   |
      
   Scenario Outline: Customer tries to login with invalid username.
      Given User is on Login Page
      When User tries to login with "<username>" and "<password>"
      Then User should see invalid username error message
      
      Examples:
      |  username        | password                | 
      |  pankhuri        |  SuperSecretPassword!   |
      
   Scenario Outline: Customer tries to login with invalid password.
      Given User is on Login Page
      When User tries to login with "<username>" and "<password>"
      Then User should see invalid password error message
      
      Examples:
      |  username        | password               | 
      |  tomsmith        |  SecretPassword        |