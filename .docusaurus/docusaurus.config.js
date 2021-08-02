export default {
  "title": "Inviso Alteryx Documetation",
  "tagline": "Alteryx rules the world!",
  "url": "https://carleneoestergaard.github.io",
  "baseUrl": "/build/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "carleneoestergaard",
  "projectName": "carleneoestergaard.github.io",
  "themeConfig": {
    "algolia": {
      "apiKey": "YOUR_API_KEY",
      "indexName": "YOUR_INDEX_NAME",
      "contextualSearch": true,
      "appId": "YOUR_APP_ID",
      "searchParameters": {}
    },
    "navbar": {
      "title": "Portal",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/Inviso_Logo.png"
      },
      "items": [
        {
          "to": "/reference",
          "label": "Reference",
          "position": "left",
          "activeBaseRegex": "/reference/"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/carleneoestergaard/inviso-alteryx",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Designer",
              "to": "/docs/intro"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/facebook/docusaurus"
            }
          ]
        }
      ]
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "reference",
          "path": "reference",
          "sidebarPath": "/Users/carlenejones/GitHub/carleneoestergaard.github.io/reference/sidebars.js",
          "lastVersion": "current",
          "onlyIncludeVersions": [
            "current"
          ],
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/Users/carlenejones/GitHub/carleneoestergaard.github.io/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};