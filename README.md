## Bisk UTM Engine

Front-end (java)script which does the following:

* Reads and processes UTM parameters from the URL
* Stores the UTM parameters into local storage
* Compares the URL UTM parameters with the ones stored in local storage and updates them accordingly, if they dont' exist, it adds them
* Checks for existence of a Marketo form on any given page and dynamically injects hidden fields to it with the latest UTM parameter values

Always include in the footer of a page: https://cihusss.github.io/bisk-utm-engine/dist/utm-bundle.js
