Feature: District Selection 
Background: User is logged in.
    Given I am on the Home page
    Then load the login state

# Scenario: User selects a district from the dropdown
#     When I click on the district dropdown
# Scenario:User Searches for a event.
     
#     Given load the login state
#     When I am on the search page
#      When i search for the event "<term>"
#      Then I should see search results related to it
#      Examples:
#   | term            |
#   | Music Concert   |
#   | Social Meetup   |
#   | Tech Conference |

        
Scenario: User is able to select location from District homepage.
     
    Given I am on the search page
     When i select for the event "<term1>":"<term2>"
     Then I should see i am on that location page
        Examples:
    | term1            | term2   |
    | Goa   | Goa, Goa   |