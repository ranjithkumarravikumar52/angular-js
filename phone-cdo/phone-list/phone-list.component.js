angular.module('phoneCatApp')
.component('phoneList', {
    template  :
        '<ul>' +
            '<li ng-repeat = "phone in $ctrl.phones">' +
                '<p>{{phone.name}}: {{phone.price}}</p>' +
            '</li>'+
        '</ul>',
    controller : function phoneListController(){
        this.phones = [
            {
                name : 'iphone 5',
                price : 500
            },
            {
                name : 'nexus',
                price : 150
            }
        ];
}
});