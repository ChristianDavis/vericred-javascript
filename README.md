# vericredClient

vericredClient - JavaScript client for vericredClient
Vericred's API allows you to search for Health Plans that a specific doctor
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


This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 0.0.7
- Build date: 2016-08-24T12:39:44.848-04:00
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install vericredClient --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
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
var vericredClient = require('vericredClient');

var defaultClient = vericredClient.ApiClient.instance;

// Configure API key authorization: Vericred-Api-Key
var vericred_key = defaultClient.authentications['Vericred-Api-Key'];
vericred_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//vericred_key.apiKeyPrefix['Vericred-Api-Key'] = "Token"

var api = new vericredClient.DrugsApi()

var ndcPackageCode = "12345-4321-11"; // {String} NDC package code

var audience = "individual"; // {String} Two-character state code

var stateCode = "NY"; // {String} Two-character state code


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDrugCoverages(ndcPackageCode, audience, stateCode, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.vericred.com/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*vericredClient.DrugsApi* | [**getDrugCoverages**](docs/DrugsApi.md#getDrugCoverages) | **GET** /drug_packages/{ndc_package_code}/coverages | Search for DrugCoverages
*vericredClient.DrugsApi* | [**listDrugs**](docs/DrugsApi.md#listDrugs) | **GET** /drugs | Drug Search
*vericredClient.NetworksApi* | [**listNetworks**](docs/NetworksApi.md#listNetworks) | **GET** /networks | Networks
*vericredClient.PlansApi* | [**findPlans**](docs/PlansApi.md#findPlans) | **POST** /plans/search | Find Plans
*vericredClient.PlansApi* | [**showPlan**](docs/PlansApi.md#showPlan) | **GET** /plans/{id} | Show Plan
*vericredClient.ProvidersApi* | [**getProvider**](docs/ProvidersApi.md#getProvider) | **GET** /providers/{npi} | Find a Provider
*vericredClient.ProvidersApi* | [**getProviders**](docs/ProvidersApi.md#getProviders) | **POST** /providers/search | Find Providers
*vericredClient.ZipCountiesApi* | [**getZipCounties**](docs/ZipCountiesApi.md#getZipCounties) | **GET** /zip_counties | Search for Zip Counties


## Documentation for Models

 - [vericredClient.Applicant](docs/Applicant.md)
 - [vericredClient.Base](docs/Base.md)
 - [vericredClient.Carrier](docs/Carrier.md)
 - [vericredClient.CarrierSubsidiary](docs/CarrierSubsidiary.md)
 - [vericredClient.County](docs/County.md)
 - [vericredClient.CountyBulk](docs/CountyBulk.md)
 - [vericredClient.Drug](docs/Drug.md)
 - [vericredClient.DrugCoverage](docs/DrugCoverage.md)
 - [vericredClient.DrugCoverageResponse](docs/DrugCoverageResponse.md)
 - [vericredClient.DrugPackage](docs/DrugPackage.md)
 - [vericredClient.DrugSearchResponse](docs/DrugSearchResponse.md)
 - [vericredClient.Meta](docs/Meta.md)
 - [vericredClient.Network](docs/Network.md)
 - [vericredClient.NetworkSearchResponse](docs/NetworkSearchResponse.md)
 - [vericredClient.Plan](docs/Plan.md)
 - [vericredClient.PlanCounty](docs/PlanCounty.md)
 - [vericredClient.PlanCountyBulk](docs/PlanCountyBulk.md)
 - [vericredClient.PlanSearchResponse](docs/PlanSearchResponse.md)
 - [vericredClient.PlanSearchResult](docs/PlanSearchResult.md)
 - [vericredClient.PlanShowResponse](docs/PlanShowResponse.md)
 - [vericredClient.Pricing](docs/Pricing.md)
 - [vericredClient.Provider](docs/Provider.md)
 - [vericredClient.ProviderShowResponse](docs/ProviderShowResponse.md)
 - [vericredClient.ProvidersSearchResponse](docs/ProvidersSearchResponse.md)
 - [vericredClient.RatingArea](docs/RatingArea.md)
 - [vericredClient.RequestPlanFind](docs/RequestPlanFind.md)
 - [vericredClient.RequestPlanFindApplicant](docs/RequestPlanFindApplicant.md)
 - [vericredClient.RequestPlanFindDrugPackage](docs/RequestPlanFindDrugPackage.md)
 - [vericredClient.RequestPlanFindProvider](docs/RequestPlanFindProvider.md)
 - [vericredClient.RequestProvidersSearch](docs/RequestProvidersSearch.md)
 - [vericredClient.ServiceArea](docs/ServiceArea.md)
 - [vericredClient.ServiceAreaZipCounty](docs/ServiceAreaZipCounty.md)
 - [vericredClient.State](docs/State.md)
 - [vericredClient.ZipCode](docs/ZipCode.md)
 - [vericredClient.ZipCountiesResponse](docs/ZipCountiesResponse.md)
 - [vericredClient.ZipCounty](docs/ZipCounty.md)
 - [vericredClient.ZipCountyBulk](docs/ZipCountyBulk.md)
 - [vericredClient.ZipCountyResponse](docs/ZipCountyResponse.md)


## Documentation for Authorization


### Vericred-Api-Key

- **Type**: API key
- **API key parameter name**: Vericred-Api-Key
- **Location**: HTTP header

