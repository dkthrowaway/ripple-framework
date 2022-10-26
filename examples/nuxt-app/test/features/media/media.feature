Feature: Media page

  Example of mocked page

  Example: On load
    Given the mock server has started
    And the endpoint "/api/tide/page" with query "?path=/media/36&site=8888" returns fixture "/media/36" with status 200
    And the endpoint "/api/tide/site" with query "?id=8888" returns fixture "/site/reference" with status 200
    Given I visit the page "/media/36"
    Then the title should be "Demo: Wodonga Local Aboriginal Network - Bringing People Together"

  Example: Media
    Then the media item should display content which includes "Transcript content"
    And the media item should have the timestamp of "2022-10-26T01:06:33+00:00"
