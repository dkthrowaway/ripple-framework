# Ripple Tide Search

> Ripple search UI and services for connecting to Tide search.

## Installation

To use this package in your Nuxt project first install it with `npm`

```bash
npm install @dpc-sdp/ripple-tide-search
```

## Usage

Add the installed package in your sites `nuxt.config.js` file under the extends property, this includes the package as a [Nuxt Layer](https://nuxt.com/docs/getting-started/layers).

```js
export default defineNuxtConfig({
  extends: [
    '@dpc-sdp/ripple-tide-search'
  ]
})
```

## Configuration

The [Runtime variables](https://nuxt.com/docs/guide/going-further/runtime-config) used for connecting to app search and elastic search can be set in your sites `nuxt.config.js` file under the `tide` property. These values are provided during site provisioning (contact SDP ops team).

```js
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      tide: {
        appSearch: {
          searchKey: '',
          endpointBase: '',
          engineName: ''
        },
        elasticsearch: {
          host: '',
          index: ''
        }
      }
    }
  }
})

```

They can also be set as uppercase environment variables starting with `NUXT_` and using `_` to separate keys and case changes.

```
# App search API key
NUXT_PUBLIC_TIDE_APP_SEARCH_SEARCH_KEY=
# App search endpoint
NUXT_PUBLIC_TIDE_APP_SEARCH_ENDPOINT_BASE=
# App search engine
NUXT_PUBLIC_TIDE_APP_SEARCH_ENGINE_NAME=
# Elasticsearch host
NUXT_PUBLIC_TIDE_ELASTICSEARCH_HOST=
# Elasticsearch index
NUXT_PUBLIC_TIDE_ELASTICSEARCH_INDEX=
```

There's also a feature flag for setting the content collection search engine to either `appSearch` or `elasticsearch`. This can be set in your sites `app.config.js` file under the `ripple` property.

```js
export default defineAppConfig({
  ripple: {
    featureFlags: {
      contentCollectionSearchConnector: 'elasticsearch'
    }
  }
})
```
