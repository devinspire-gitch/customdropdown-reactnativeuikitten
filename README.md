# Custom Dropdown in React-Native-UI-kitten

### customize metro.config.js file 

 const MetroConfig = require('@ui-kitten/metro-config');

 const evaConfig = {
   evaPackage: '@eva-design/eva',
   customMappingPath: './mapping.json',
 };
 
 module.exports = MetroConfig.create(evaConfig, {
     // previous config
 });

 ### added mapping.json file

 {
    "components": {
      "Select": {
        "meta": {
          "parameters": { 
            "borderBottomWidth": {
                "type": "number"
            },
            "borderTopWidth": {
                "type": "number"
            },
            "borderRightWidth": {
                "type": "number"
            },
            "borderLeftWidth": {
                "type": "number"
            },
            "borderBottomColor": {
                "type": "number"
            },
            "outline": {
                "type": "number"
            },
            "borderRadius": {
              "type": "number"
            },
            "backgroundColor": {
              "type": "number"
            }
          },
          "variantGroups": {},
          "states": {},
          "appearances": {
            "filled": {
              "default": true
            }
          }
        },
        "appearances": {
          "filled": {
            "mapping": { 
              "borderTopWidth": 0, 
              "borderRightWidth": 0,
              "borderLeftWidth": 0,
              "borderBottomWidth": 3,
              "borderBottomColor": "blue",
              "borderRadius": 32,
              "backgroundColor": "color-primary-default"
            }
          } 
        }
      }
    }
  }