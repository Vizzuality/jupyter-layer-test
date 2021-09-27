#Test for Layer Manager layers on jupyter

To test run  ```yarn && yarn start '<JSON_INPUT>'```

or ```yarn start-file input/input.json```

e.g.

```
yarn start '{
    "id": "protected-areas",
    "name": "Protected areas",
    "source": "Protected areas",
    "type": "geojson",
    "config": {
      "type": "vector",
      "source": {
        "type": "vector",
        "promoteId": "cartodb_id",
        "provider": {
          "type": "carto",
          "account": "wri-01",
          "layers": [
            {
              "options": {
                "cartocss": "#wdpa_protected_areas {  polygon-opacity: 1.0; polygon-fill: #704489 }",
                "cartocss_version": "2.3.0",
                "sql": "SELECT * FROM wdpa_protected_areas"
              },
              "type": "mapnik"
            }
          ]
        }
      },
      "render": {
        "layers": [
          {
            "type": "fill",
            "source-layer": "layer0",
            "featureState": {},
            "paint": {
              "fill-color": [
                "case",
                [
                  "boolean",
                  [
                    "feature-state",
                    "hover"
                  ],
                  false
                ],
                "#000",
                "#5ca2d1"
              ],
              "fill-color-transition": {
                "duration": 300,
                "delay": 0
              },
              "fill-opacity": 1
            }
          },
          {
            "type": "line",
            "source-layer": "layer0",
            "paint": {
              "line-color": "#000000",
              "line-opacity": 0.1
            }
          }
        ]
      }
    },
    "paramsConfig": [],
    "legendConfig": {
      "type": "basic",
      "items": [
        {
          "name": "Protected areas",
          "color": "#5ca2d1"
        }
      ]
    },
    "interactionConfig": {
      "enabled": true,
      "type": "hover"
    }
  }'
```

The input layer is on ```input/input.json```

##TODO:

- Test Mapbox styles with
- Currently this script tests the Layer Manager types on one file. It could be improved to test different files
- The layer manager types are static now. We could import them from the package
