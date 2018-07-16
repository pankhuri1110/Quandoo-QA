Feature: Test hover action
  Scenario Outline: User hovers on avatars
	Given User is on hover test page
	When User hover on "<avatar>"
	Then "<username>" should display
    
    Examples:
    |  avatar    | username | 
	|  1         |  name: user1       |
	|  2         |  name: user2       | 
	|  3         |  name: user3       | 
