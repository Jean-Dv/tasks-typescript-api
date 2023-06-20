Feature: Create a new task
  In order to have tasks in the platform
  As a user with admin permissions
  I want to create a new task

  Scenario: A valid non existing task
    Given I send a PUT request to "/tasks/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
    """
    {
      "id": "ef8ac118-8d7f-49cc-abec-78e0d05af80a",
      "title": "Task 1",
      "description": "Description 1",
      "status": "open"
    }
    """
    Then the response status code should be 201
    And the response should be empty

  Scenario: An invalid non existing task
    Given I send a PUT request to "/tasks/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
    """
    {
      "id": "ef8ac118-8d7f-49cc-abec-78e0d05af80a",
      "title": 1,
      "description": "Description 1",
      "status": "invalid"
    }
    """
    Then the response status code should be 422
