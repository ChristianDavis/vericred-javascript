# vericred-client

vericred-client - JavaScript client for vericred-client
Vericred's API allows you to search for Health Plans that a specific doctor
accepts.

## Getting Started

Visit our [Developer Portal](https://vericred.3scale.net/access_code?access_code=vericred&cms_token=3545ca52af07bde85b7c0c3aa9d1985e) to
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

Most endpoints are not paginated.  It will be noted in the documentation if/when
an endpoint is paginated.

When pagination is present, a `meta` stanza will be present in the response
with the total number of records

```
{
  things: [{ id: 1 }, { id: 2 }],
  meta: { total: 500 }
}
```

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


This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 
- Package version: 0.0.1
- Build date: 2016-04-29T19:05:41.014-04:00
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install vericred-client --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/YOUR_GIT_REPO_ID
then install it via:

```shell
npm install YOUR_USERNAME/YOUR_GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var vericred-client = require('vericred-client');

var api = new vericred-client.DrugCoverageApi()

var ndc = "ndc_example"; // {String} NDC for a drug


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.drugsNdcCoveragesGet(ndc, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.vericred.com/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*vericred-client.DrugCoverageApi* | [**drugsNdcCoveragesGet**](docs/DrugCoverageApi.md#drugsNdcCoveragesGet) | **GET** /drugs/{ndc}/coverages | Find Drug Coverages for a given NDC
*vericred-client.PlansApi* | [**plansFindPost**](docs/PlansApi.md#plansFindPost) | **POST** /plans/find | Find a set of plans for a Zip Code and County
*vericred-client.ProvidersApi* | [**providersGet**](docs/ProvidersApi.md#providersGet) | **GET** /providers | Find providers by term and zip code
*vericred-client.ProvidersApi* | [**providersNpiGet**](docs/ProvidersApi.md#providersNpiGet) | **GET** /providers/{npi} | Find a specific Provider
*vericred-client.ZipCountiesApi* | [**zipCountiesGet**](docs/ZipCountiesApi.md#zipCountiesGet) | **GET** /zip_counties | Find Zip Counties by Zip Code


## Documentation for Models

 - [vericred-client.Applicant](docs/Applicant.md)
 - [vericred-client.Carrier](docs/Carrier.md)
 - [vericred-client.CarrierSubsidiary](docs/CarrierSubsidiary.md)
 - [vericred-client.County](docs/County.md)
 - [vericred-client.Drug](docs/Drug.md)
 - [vericred-client.DrugCoverage](docs/DrugCoverage.md)
 - [vericred-client.InlineResponse200](docs/InlineResponse200.md)
 - [vericred-client.InlineResponse2001](docs/InlineResponse2001.md)
 - [vericred-client.InlineResponse2002](docs/InlineResponse2002.md)
 - [vericred-client.Plan](docs/Plan.md)
 - [vericred-client.PlanCounty](docs/PlanCounty.md)
 - [vericred-client.PlanSearchResult](docs/PlanSearchResult.md)
 - [vericred-client.Pricing](docs/Pricing.md)
 - [vericred-client.Provider](docs/Provider.md)
 - [vericred-client.Query](docs/Query.md)
 - [vericred-client.RatingArea](docs/RatingArea.md)
 - [vericred-client.State](docs/State.md)
 - [vericred-client.ZipCode](docs/ZipCode.md)
 - [vericred-client.ZipCounty](docs/ZipCounty.md)


## Documentation for Authorization

 All endpoints do not require authorization.

