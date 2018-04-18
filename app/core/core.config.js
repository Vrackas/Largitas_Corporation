;(function () {
    angular
        .module('app')
        .config(mainConfig)
    // .config(['$mdIconProvider', function ($mdIconProvider) {
    //     $mdIconProvider
    //         .iconSet('social', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content-symbol.svg', 24)
    //         .defaultIconSet('bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content-symbol.svg', 24);
    // }]);

    mainConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function mainConfig($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'templates/homepage/homepage.html',
                controller: 'HomepageController',
                controllerAs: 'vm',
            })
            .state('trader_room', {
                url: '/trader_room',
                templateUrl: 'templates/trader_room/trader_room.html',
                controller: 'TraderRoomController',
                controllerAs: 'vm',
            })
            .state('crm_system', {
                url: '/crm_system',
                templateUrl: 'templates/crm_system/crm_system.html',
                controller: 'CRMSystemController',
                controllerAs: 'vm',
            })
            .state('multi_ibs', {
                url: '/multi_ibs',
                templateUrl: 'templates/multi_ibs/multi_ibs.html',
                controller: 'MultiIBsController',
                controllerAs: 'vm',
            })
            .state('pamm_support', {
                url: '/pamm_support',
                templateUrl: 'templates/pamm_support/pamm_support.html',
                controller: 'PammSupportController',
                controllerAs: 'vm',
            })
            .state('mobile_solutions', {
                url: '/mobile_solutions',
                templateUrl: 'templates/mobile_solutions/mobile_solutions.html',
                controller: 'MobileSolutionsController',
                controllerAs: 'vm',
            })
            .state('merchant_accounts', {
                url: '/merchant_accounts',
                templateUrl: 'templates/merchant_accounts/merchant_accounts.html',
                controller: 'MerchantAccountsController',
                controllerAs: 'vm',
            })
            .state('mt4_mac', {
                url: '/mt4_mac',
                templateUrl: 'templates/mt4_mac/mt4_mac.html',
                controller: 'MT4MacController',
                controllerAs: 'vm',
            })
            .state('forex_web', {
                url: '/forex_web',
                templateUrl: 'templates/forex_web/forex_web.html',
                controller: 'ForexWebController',
                controllerAs: 'vm',
            })
            .state('bitcoin', {
                url: '/bitcoin',
                templateUrl: 'templates/bitcoin/bitcoin.html',
                controller: 'BitcoinController',
                controllerAs: 'vm',
            })
            .state('live_webinars', {
                url: '/live_webinars',
                templateUrl: 'templates/live_webinars/live_webinars.html',
                controller: 'LiveWebinarsController',
                controllerAs: 'vm',
            })
            .state('other_solutions', {
                url: '/other_solutions',
                templateUrl: 'templates/other_solutions/other_solutions.html',
                controller: 'OtherSolutionsController',
                controllerAs: 'vm',
            })



    }


})();

