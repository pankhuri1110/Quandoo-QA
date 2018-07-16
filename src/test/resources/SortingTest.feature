Feature: Test sorting action
  Scenario Outline: User sorts in ascending order with Last name column
	Given User is on sorting test page
	When User sorts with column "<column>" and sorting type is "<sortingType>"
	Then "<sortingType>" Sorting should be successful on "<columnNumber>"
    
    Examples:
    |  column    |  sortingType       | columnNumber   | 
	|  Last Name |    ASC             |  1             | 
	|  Last Name |    DSC             |  1             | 
 