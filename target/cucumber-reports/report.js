$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HoverTest.feature");
formatter.feature({
  "line": 1,
  "name": "Test hover action",
  "description": "",
  "id": "test-hover-action",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "User hovers on avatars",
  "description": "",
  "id": "test-hover-action;user-hovers-on-avatars",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is on hover test page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User hover on \"\u003cavatar\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "\"\u003cusername\u003e\" should display",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "test-hover-action;user-hovers-on-avatars;",
  "rows": [
    {
      "cells": [
        "avatar",
        "username"
      ],
      "line": 8,
      "id": "test-hover-action;user-hovers-on-avatars;;1"
    },
    {
      "cells": [
        "1",
        "name: user1"
      ],
      "line": 9,
      "id": "test-hover-action;user-hovers-on-avatars;;2"
    },
    {
      "cells": [
        "2",
        "name: user2"
      ],
      "line": 10,
      "id": "test-hover-action;user-hovers-on-avatars;;3"
    },
    {
      "cells": [
        "3",
        "name: user3"
      ],
      "line": 11,
      "id": "test-hover-action;user-hovers-on-avatars;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 256986,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User hovers on avatars",
  "description": "",
  "id": "test-hover-action;user-hovers-on-avatars;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is on hover test page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User hover on \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "\"name: user1\" should display",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_hover_test_page()"
});
formatter.result({
  "duration": 4458901529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    }
  ],
  "location": "Steps.user_hover_on(String)"
});
formatter.result({
  "duration": 185038207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name: user1",
      "offset": 1
    }
  ],
  "location": "Steps.username_should_display(String)"
});
formatter.result({
  "duration": 39592060,
  "status": "passed"
});
formatter.after({
  "duration": 604563645,
  "status": "passed"
});
formatter.before({
  "duration": 96856,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User hovers on avatars",
  "description": "",
  "id": "test-hover-action;user-hovers-on-avatars;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is on hover test page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User hover on \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "\"name: user2\" should display",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_hover_test_page()"
});
formatter.result({
  "duration": 3696016237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    }
  ],
  "location": "Steps.user_hover_on(String)"
});
formatter.result({
  "duration": 131296704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name: user2",
      "offset": 1
    }
  ],
  "location": "Steps.username_should_display(String)"
});
formatter.result({
  "duration": 32510817,
  "status": "passed"
});
formatter.after({
  "duration": 626240412,
  "status": "passed"
});
formatter.before({
  "duration": 90083,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User hovers on avatars",
  "description": "",
  "id": "test-hover-action;user-hovers-on-avatars;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is on hover test page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User hover on \"3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "\"name: user3\" should display",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_hover_test_page()"
});
formatter.result({
  "duration": 3985184193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "Steps.user_hover_on(String)"
});
formatter.result({
  "duration": 132873605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name: user3",
      "offset": 1
    }
  ],
  "location": "Steps.username_should_display(String)"
});
formatter.result({
  "duration": 39998825,
  "status": "passed"
});
formatter.after({
  "duration": 613322827,
  "status": "passed"
});
formatter.uri("LoginTest.feature");
formatter.feature({
  "line": 1,
  "name": "Automated Login Tests",
  "description": "Description: The purpose of this feature is to test login scenarios.",
  "id": "automated-login-tests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Customer tries to login with valid credentials.",
  "description": "",
  "id": "automated-login-tests;customer-tries-to-login-with-valid-credentials.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User tries to login with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be successfully looged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "automated-login-tests;customer-tries-to-login-with-valid-credentials.;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "automated-login-tests;customer-tries-to-login-with-valid-credentials.;;1"
    },
    {
      "cells": [
        "tomsmith",
        "SuperSecretPassword!"
      ],
      "line": 10,
      "id": "automated-login-tests;customer-tries-to-login-with-valid-credentials.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 66288,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Customer tries to login with valid credentials.",
  "description": "",
  "id": "automated-login-tests;customer-tries-to-login-with-valid-credentials.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User tries to login with \"tomsmith\" and \"SuperSecretPassword!\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be successfully looged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_login_Page()"
});
formatter.result({
  "duration": 3811734318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 26
    },
    {
      "val": "SuperSecretPassword!",
      "offset": 41
    }
  ],
  "location": "Steps.user_tries_to_login(String,String)"
});
formatter.result({
  "duration": 675787412,
  "status": "passed"
});
formatter.match({
  "location": "Steps.login_should_be_successful()"
});
formatter.result({
  "duration": 69740463,
  "status": "passed"
});
formatter.after({
  "duration": 602679846,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Customer tries to login with invalid username.",
  "description": "",
  "id": "automated-login-tests;customer-tries-to-login-with-invalid-username.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User tries to login with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User should see invalid username error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "automated-login-tests;customer-tries-to-login-with-invalid-username.;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 18,
      "id": "automated-login-tests;customer-tries-to-login-with-invalid-username.;;1"
    },
    {
      "cells": [
        "pankhuri",
        "SuperSecretPassword!"
      ],
      "line": 19,
      "id": "automated-login-tests;customer-tries-to-login-with-invalid-username.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 132663,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Customer tries to login with invalid username.",
  "description": "",
  "id": "automated-login-tests;customer-tries-to-login-with-invalid-username.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User tries to login with \"pankhuri\" and \"SuperSecretPassword!\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User should see invalid username error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_login_Page()"
});
formatter.result({
  "duration": 3881825229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pankhuri",
      "offset": 26
    },
    {
      "val": "SuperSecretPassword!",
      "offset": 41
    }
  ],
  "location": "Steps.user_tries_to_login(String,String)"
});
formatter.result({
  "duration": 660533503,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verify_invalid_username_error_message()"
});
formatter.result({
  "duration": 69193563,
  "status": "passed"
});
formatter.after({
  "duration": 618358810,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Customer tries to login with invalid password.",
  "description": "",
  "id": "automated-login-tests;customer-tries-to-login-with-invalid-password.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User tries to login with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User should see invalid password error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "automated-login-tests;customer-tries-to-login-with-invalid-password.;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 27,
      "id": "automated-login-tests;customer-tries-to-login-with-invalid-password.;;1"
    },
    {
      "cells": [
        "tomsmith",
        "SecretPassword"
      ],
      "line": 28,
      "id": "automated-login-tests;customer-tries-to-login-with-invalid-password.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 114558,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Customer tries to login with invalid password.",
  "description": "",
  "id": "automated-login-tests;customer-tries-to-login-with-invalid-password.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User tries to login with \"tomsmith\" and \"SecretPassword\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User should see invalid password error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_login_Page()"
});
formatter.result({
  "duration": 3942735930,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 26
    },
    {
      "val": "SecretPassword",
      "offset": 41
    }
  ],
  "location": "Steps.user_tries_to_login(String,String)"
});
formatter.result({
  "duration": 686889153,
  "status": "passed"
});
formatter.match({
  "location": "Steps.verify_invalid_password_error_message()"
});
formatter.result({
  "duration": 82068390,
  "status": "passed"
});
formatter.after({
  "duration": 593900504,
  "status": "passed"
});
formatter.uri("SortingTest.feature");
formatter.feature({
  "line": 1,
  "name": "Test sorting action",
  "description": "",
  "id": "test-sorting-action",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "User sorts in ascending order with Last name column",
  "description": "",
  "id": "test-sorting-action;user-sorts-in-ascending-order-with-last-name-column",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is on sorting test page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User sorts with column \"\u003ccolumn\u003e\" and sorting type is \"\u003csortingType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "\"\u003csortingType\u003e\" Sorting should be successful on \"\u003ccolumnNumber\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "test-sorting-action;user-sorts-in-ascending-order-with-last-name-column;",
  "rows": [
    {
      "cells": [
        "column",
        "sortingType",
        "columnNumber"
      ],
      "line": 8,
      "id": "test-sorting-action;user-sorts-in-ascending-order-with-last-name-column;;1"
    },
    {
      "cells": [
        "Last Name",
        "ASC",
        "1"
      ],
      "line": 9,
      "id": "test-sorting-action;user-sorts-in-ascending-order-with-last-name-column;;2"
    },
    {
      "cells": [
        "Last Name",
        "DSC",
        "1"
      ],
      "line": 10,
      "id": "test-sorting-action;user-sorts-in-ascending-order-with-last-name-column;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 62906,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User sorts in ascending order with Last name column",
  "description": "",
  "id": "test-sorting-action;user-sorts-in-ascending-order-with-last-name-column;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is on sorting test page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User sorts with column \"Last Name\" and sorting type is \"ASC\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "\"ASC\" Sorting should be successful on \"1\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_sorting_test_page()"
});
formatter.result({
  "duration": 3689275447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last Name",
      "offset": 24
    },
    {
      "val": "ASC",
      "offset": 56
    }
  ],
  "location": "Steps.user_sorts_with_column(String,String)"
});
formatter.result({
  "duration": 242628820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ASC",
      "offset": 1
    },
    {
      "val": "1",
      "offset": 39
    }
  ],
  "location": "Steps.ascending_sorting_shouold_be_successful(String,String)"
});
formatter.result({
  "duration": 42232789,
  "status": "passed"
});
formatter.after({
  "duration": 618707452,
  "status": "passed"
});
formatter.before({
  "duration": 69094,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User sorts in ascending order with Last name column",
  "description": "",
  "id": "test-sorting-action;user-sorts-in-ascending-order-with-last-name-column;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is on sorting test page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User sorts with column \"Last Name\" and sorting type is \"DSC\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "\"DSC\" Sorting should be successful on \"1\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_sorting_test_page()"
});
formatter.result({
  "duration": 3772555566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last Name",
      "offset": 24
    },
    {
      "val": "DSC",
      "offset": 56
    }
  ],
  "location": "Steps.user_sorts_with_column(String,String)"
});
formatter.result({
  "duration": 454219338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DSC",
      "offset": 1
    },
    {
      "val": "1",
      "offset": 39
    }
  ],
  "location": "Steps.ascending_sorting_shouold_be_successful(String,String)"
});
formatter.result({
  "duration": 83209784,
  "status": "passed"
});
formatter.after({
  "duration": 608446210,
  "status": "passed"
});
});