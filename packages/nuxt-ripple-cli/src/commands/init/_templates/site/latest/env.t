---
to: .example.env
---
# Note: Place a copy of this file named .env - See https://nuxt.com/docs/guide/directory-structure/env
# The values in this file are FOR DEVELOPMENT ONLY - none of these values are read in the production build!
# If your site needs a new environment variable please log an issue with SDP support so it can be added via the config management database

# Tide Drupal CMS URL - change this to the project CMS as required
NUXT_PUBLIC_TIDE_BASE_URL=https://develop.content.reference.sdp.vic.gov.au
# Tide site taxonomy id - change this to the project site ID as required
NUXT_PUBLIC_TIDE_SITE=8888
# SDP common GTM container - this should be common to all SDP sites utilising WoVG analytics
NUXT_PUBLIC_TIDE_ANALYTICS_GTM=G-J386JGDPXW
# Production site URL (used for OAuth and logging) - this should be the production url eg: https://www.YOURPROJECT.vic.gov.au/
NUXT_PUBLIC_SITE_URL=

# The below values are to be provided in site provisioning - contact SDP ops team

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

# OAuth client ID for preview functionality
NUXT_TIDE_PREVIEW_CLIENT_ID=
# OAuth client secret for preview functionality
NUXT_TIDE_PREVIEW_COOKIE_SIGN_SECRET=
