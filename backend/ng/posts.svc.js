/**
 * Created by Godfrey on 5/17/2016.
 */
angular.module('app').service('PostsSvc',function($http){
    this.fetch=function(){
        return $http.get('/api/posts');
    }
    this.create = function(post){
        return $http.post('/api/posts',post);
    }
})