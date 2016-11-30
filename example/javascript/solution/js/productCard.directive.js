function productDisplayApp() {
  return {
    restrict: 'E',
    controller: 'ProductCardController as prodCard',
    template: `
    
      <div class="container wrapper">
			 <div id="columns">
				<div class="col-md-20">
		
        <ul class="">
          <li ng-repeat="item in prodCard.list">
            
            <div class="inner-content col-lg-6 pin">
              <img class="img-responsive" ng-src="{{ item.backgroundImage }}" />
              <div class="col-xs-12">
                    <p class="text-center" ng-style="{{ item.topDescription_myStyle }}">{{ item.topDescription | filter:uppercase }}</p>
                    <h2 class="text-center">{{ item.title | filter:uppercase }}</h2>
                    <h3 class="text-center">{{ item.promoMessage | filter:uppercase }}</h3>
                    
                    <div class="text-center">
                        <a class="text-center" ng-bind-html="item.bottomDescription"></a>
                    </div>  
              </div>
              
              <ul>
                <li ng-repeat="content in item.content">
                
                <a ng-class="col-md-6" ng-href="{{ content.target }}">
                    <button class="btn btn-default btn-lg btn-block">
                        {{ content.title }}
                    </button>
                </a>    
                
                </li>
              </ul>
            </div>
            
          </li>
        </ul>
       </div>
       </div>
      </div>  
      
    `,
    link: function(scope, elem, attrs) {
      console.log(scope);
      console.log(elem);
      console.log(attrs);
    }
  };
}

angular
  .module('app')
  .directive('productDisplayApp', productDisplayApp);
