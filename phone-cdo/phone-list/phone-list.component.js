angular.module('phoneList')
.component('phoneList', {
    templateUrl  : 'phone-list/phone-list.template.html',
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