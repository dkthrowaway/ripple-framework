Feature: Search bar queries

  Background:
    Given the site endpoint returns fixture "/site/reference" with status 200
    And I am using a "macbook-16" device

  @mockserver
  Example: The search term query can be extended
    Given the page endpoint for path "/" returns fixture "/search-listing/search-bar/page" with status 200
    And the search network request is stubbed with fixture "/search-listing/search-bar/response" and status 200

    When I visit the page "/"
    And the search network request should be called with the "/search-listing/search-bar/request-initial" fixture
    Then the search listing page should have 2 results

    When I type "Demo" into the search input
    And I click the search button
    Then the URL should reflect that the current active filters are as follows:
      | id | value |
      | q  | Demo  |
    And the search network request should be called with the "/search-listing/search-bar/request-title-content" fixture

    When I click the search listing dropdown field labelled "Select a search type"
    Then the selected dropdown field should have the items:
      | Title and content |
      | Title             |
      | Content           |
    Then I click the option labelled "Content" in the selected dropdown
    And I click the search button

    Then the URL should reflect that the current active filters are as follows:
      | id                | value   |
      | q                 | Demo    |
      | search[queryType] | content |
    And the search network request should be called with the "/search-listing/search-bar/request-content" fixture

    When I toggle the search listing filters section
    And I clear the search filters
    And the search network request should be called with the "/search-listing/search-bar/request-initial" fixture
