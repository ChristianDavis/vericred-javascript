/**
 * Vericred API
 * Vericred's API allows you to search for Health Plans that a specific doctor
accepts.

## Getting Started

Visit our [Developer Portal](https://vericred.3scale.net) to
create an account.

Once you have created an account, you can create one Application for
Production and another for our Sandbox (select the appropriate Plan when
you create the Application).

## Authentication

To authenticate, pass the API Key you created in the Developer Portal as
a `Vericred-Api-Key` header.

`curl -H 'Vericred-Api-Key: YOUR_KEY' "https://api.vericred.com/providers?search_term=Foo&zip_code=11215"`

## Versioning

Vericred's API default to the latest version.  However, if you need a specific
version, you can request it with an `Accept-Version` header.

The current version is `v3`.  Previous versions are `v1` and `v2`.

`curl -H 'Vericred-Api-Key: YOUR_KEY' -H 'Accept-Version: v2' "https://api.vericred.com/providers?search_term=Foo&zip_code=11215"`

## Pagination

Endpoints that accept `page` and `per_page` parameters are paginated. They expose
four additional fields that contain data about your position in the response,
namely `Total`, `Per-Page`, `Link`, and `Page` as described in [RFC-5988](https://tools.ietf.org/html/rfc5988).

For example, to display 5 results per page and view the second page of a
`GET` to `/networks`, your final request would be `GET /networks?....page=2&per_page=5`.

## Sideloading

When we return multiple levels of an object graph (e.g. `Provider`s and their `State`s
we sideload the associated data.  In this example, we would provide an Array of
`State`s and a `state_id` for each provider.  This is done primarily to reduce the
payload size since many of the `Provider`s will share a `State`

```
{
  providers: [{ id: 1, state_id: 1}, { id: 2, state_id: 1 }],
  states: [{ id: 1, code: 'NY' }]
}
```

If you need the second level of the object graph, you can just match the
corresponding id.

## Selecting specific data

All endpoints allow you to specify which fields you would like to return.
This allows you to limit the response to contain only the data you need.

For example, let's take a request that returns the following JSON by default

```
{
  provider: {
    id: 1,
    name: 'John',
    phone: '1234567890',
    field_we_dont_care_about: 'value_we_dont_care_about'
  },
  states: [{
    id: 1,
    name: 'New York',
    code: 'NY',
    field_we_dont_care_about: 'value_we_dont_care_about'
  }]
}
```

To limit our results to only return the fields we care about, we specify the
`select` query string parameter for the corresponding fields in the JSON
document.

In this case, we want to select `name` and `phone` from the `provider` key,
so we would add the parameters `select=provider.name,provider.phone`.
We also want the `name` and `code` from the `states` key, so we would
add the parameters `select=states.name,staes.code`.  The id field of
each document is always returned whether or not it is requested.

Our final request would be `GET /providers/12345?select=provider.name,provider.phone,states.name,states.code`

The response would be

```
{
  provider: {
    id: 1,
    name: 'John',
    phone: '1234567890'
  },
  states: [{
    id: 1,
    name: 'New York',
    code: 'NY'
  }]
}
```


 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.vericredClient);
  }
}(this, function(expect, vericredClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new vericredClient.RequestPlanFind();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RequestPlanFind', function() {
    it('should create an instance of RequestPlanFind', function() {
      // uncomment below and update the code to test RequestPlanFind
      //var instane = new vericredClient.RequestPlanFind();
      //expect(instance).to.be.a(vericredClient.RequestPlanFind);
    });

    it('should have the property applicants (base name: "applicants")', function() {
      // uncomment below and update the code to test the property applicants
      //var instane = new vericredClient.RequestPlanFind();
      //expect(instance).to.be();
    });

    it('should have the property enrollmentDate (base name: "enrollment_date")', function() {
      // uncomment below and update the code to test the property enrollmentDate
      //var instane = new vericredClient.RequestPlanFind();
      //expect(instance).to.be();
    });

    it('should have the property drugPackages (base name: "drug_packages")', function() {
      // uncomment below and update the code to test the property drugPackages
      //var instane = new vericredClient.RequestPlanFind();
      //expect(instance).to.be();
    });

    it('should have the property fipsCode (base name: "fips_code")', function() {
      // uncomment below and update the code to test the property fipsCode
      //var instane = new vericredClient.RequestPlanFind();
      //expect(instance).to.be();
    });

    it('should have the property householdIncome (base name: "household_income")', function() {
      // uncomment below and update the code to test the property householdIncome
      //var instane = new vericredClient.RequestPlanFind();
      //expect(instance).to.be();
    });

    it('should have the property householdSize (base name: "household_size")', function() {
      // uncomment below and update the code to test the property householdSize
      //var instane = new vericredClient.RequestPlanFind();
      //expect(instance).to.be();
    });

    it('should have the property market (base name: "market")', function() {
      // uncomment below and update the code to test the property market
      //var instane = new vericredClient.RequestPlanFind();
      //expect(instance).to.be();
    });

    it('should have the property providers (base name: "providers")', function() {
      // uncomment below and update the code to test the property providers
      //var instane = new vericredClient.RequestPlanFind();
      //expect(instance).to.be();
    });

    it('should have the property page (base name: "page")', function() {
      // uncomment below and update the code to test the property page
      //var instane = new vericredClient.RequestPlanFind();
      //expect(instance).to.be();
    });

    it('should have the property perPage (base name: "per_page")', function() {
      // uncomment below and update the code to test the property perPage
      //var instane = new vericredClient.RequestPlanFind();
      //expect(instance).to.be();
    });

    it('should have the property sort (base name: "sort")', function() {
      // uncomment below and update the code to test the property sort
      //var instane = new vericredClient.RequestPlanFind();
      //expect(instance).to.be();
    });

    it('should have the property zipCode (base name: "zip_code")', function() {
      // uncomment below and update the code to test the property zipCode
      //var instane = new vericredClient.RequestPlanFind();
      //expect(instance).to.be();
    });

  });

}));