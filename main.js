window.onload = function() {

/*<![CDATA[*/

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'maisoncandide.myshopify.com',
      apiKey: '2981885acc05e4e1fc5783ec70ae2061',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: 13558054942,
        node: document.getElementById('collection-component-a8985363347'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "VIEW PRODUCT"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(50% - 40px)",
          "margin-left": "40px",
          "margin-bottom": "50px",
          "padding": "10px"
        }
      },
      "button": {
        "background-color": "#a30714",
        "font-family": "Raleway, sans-serif",

        ":hover": {
          "background-color": "#ff0c22"
        },
        ":focus": {
          "background-color": "#ff0c22"
        },
        "font-weight": "normal"
      },
      "variantTitle": {
        "font-family": "Raleway, sans-serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Raleway, sans-serif",
        "font-weight": "normal"
      },
      "description": {
        "font-family": "Raleway, sans-serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Raleway, sans-serif",
        "font-weight": "normal"
      },
      "compareAt": {
        "font-family": "Raleway, sans-serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Raleway",
      "Raleway",
      "Raleway",
      "Raleway",
      "Raleway",
      "Raleway"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#a30714",
        "font-family": "Raleway, sans-serif",
        ":hover": {
          "background-color": "#ff0c22"
        },
        ":focus": {
          "background-color": "#ff0c22"
        },
        "font-weight": "normal"
      },
      "footer": {
        "background-color": "#ffffff"
      }
    },
    "googleFonts": [
      "Raleway"
    ]
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#a30714",
        "font-family": "Raleway, sans-serif",
        ":hover": {
          "background-color": "#ff0c22"
        },
        ":focus": {
          "background-color": "#ff0c22"
        },
        "font-weight": "normal"
      },
      "variantTitle": {
        "font-family": "Raleway, sans-serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Raleway, sans-serif",
        "font-weight": "normal"
      },
      "description": {
        "font-family": "Raleway, sans-serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Raleway, sans-serif",
        "font-weight": "normal"
      },
      "compareAt": {
        "font-family": "Raleway, sans-serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Raleway",
      "Raleway",
      "Raleway",
      "Raleway",
      "Raleway",
      "Raleway"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Raleway, sans-serif",
        "background-color": "#a30714",
        ":hover": {
          "background-color": "#ff0c22"
        },
        ":focus": {
          "background-color": "#ff0c22"
        },
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Raleway"
    ]
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Raleway, sans-serif"
      },
      "select": {
        "font-family": "Raleway, sans-serif"
      }
    },
    "googleFonts": [
      "Raleway",
      "Raleway"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-40px"
        }
      }
    }
  }
}
      });
    });
  }
})();
/*]]>*/
}
