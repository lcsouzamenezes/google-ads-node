// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(customerId, dimensions, queryText) {
  // [START googleads_v12_generated_AudienceInsightsService_ListAudienceInsightsAttributes_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The ID of the customer.
   */
  // const customerId = 'abc123'
  /**
   *  Required. The types of attributes to be returned.
   */
  // const dimensions = 1234
  /**
   *  Required. A free text query.  Attributes matching or related to this string will be
   *  returned.
   */
  // const queryText = 'abc123'
  /**
   *  The name of the customer being planned for.  This is a user-defined value.
   */
  // const customerInsightsGroup = 'abc123'
  /**
   *  If SUB_COUNTRY_LOCATION attributes are one of the requested dimensions and
   *  this field is present, then the SUB_COUNTRY_LOCATION attributes returned
   *  will be located in these countries. If this field is absent, then location
   *  attributes are not filtered by country. Setting this field when
   *  SUB_COUNTRY_LOCATION attributes are not requested will return an error.
   */
  // const locationCountryFilters = 1234

  // Imports the Googleads library
  const {AudienceInsightsServiceClient} = require('google-ads').v12;

  // Instantiates a client
  const googleadsClient = new AudienceInsightsServiceClient();

  async function callListAudienceInsightsAttributes() {
    // Construct request
    const request = {
      customerId,
      dimensions,
      queryText,
    };

    // Run request
    const response = await googleadsClient.listAudienceInsightsAttributes(request);
    console.log(response);
  }

  callListAudienceInsightsAttributes();
  // [END googleads_v12_generated_AudienceInsightsService_ListAudienceInsightsAttributes_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));