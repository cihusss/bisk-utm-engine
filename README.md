## Bisk UTM Engine

Front-end (java)script which does the following:

* Reads and processes UTM parameters from the URL
* Stores the UTM parameters into local storage if they don't already exist
* If they do exist, it compares the URL UTM parameters with the ones previously stored in local storage and if there are differences updates them accordingly
* Checks for existence of a Marketo form on any given page and dynamically injects hidden fields with the latest UTM parameter values

Always include in the footer of a page: https://cihusss.github.io/bisk-utm-engine/dist/utm-bundle.js
