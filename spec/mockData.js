(function () {
  angular
      .module('app.mockData', [])
      .value('mockData',
          {'title': 'TOPS STARTING AT $12',
            'backgroundImage': 'http://anf.scene7.com/is/image/anf/anf-20160527-app-m-shirts?$anf-ios-fullwidth-3x$',
            'content': [
              {
                'target': 'https://www.abercrombie.com/shop/us/mens-new-arrivals',
                'title': 'Shop Men'
              },
              {
                'target': 'https://www.abercrombie.com/shop/us/womens-new-arrivals',
                'title': 'Shop Women'
              }
            ],
            'promoMessage': 'USE CODE: 12345',
            'topDescription': 'A&F ESSENTIALS',
            'bottomDescription': '*In stores & online. <a href=\\\"http://www.abercrombie.com/anf/media/legalText/viewDetailsText20160602_Tier_Promo_US.html\\\">Exclusions apply. See Details</a>'
          },
          {
            'title': 'T-SHIRT DRESSES',
            'backgroundImage': 'http://anf.scene7.com/is/image/anf/anf-US-20160601-app-women-dresses?$anf-ios-fullwidth-3x$',
            'topDescription': 'THROW ON & GO',
            'content': [
              {
                'elementType': 'hyperlink',
                'target': 'https://www.abercrombie.com/shop/us/womens-dresses-and-rompers',
                'title': 'SHOP NOW'
              }
            ]
          }
      );
}());