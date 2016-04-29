

module.exports.routes = {

	/***************************************************************************
	 * * Make the view located at `views/homepage.ejs` 
	 **************************************************************************/

	'/' : {
		controller : 'HomeController',
		action : "default"
	},

	/***************************************************************************
	 * * Custom routes here... 
	 **************************************************************************/
	'get /auth/facebook' : {
		controller : 'AuthController',
		action : "fbLogin"
	},
	/*'get /auth/facebook/callback' : {
		controller : 'HomeController',
	    action : "myProfile"
	},*/
	'get /auth/failed' : {
		controller : 'AuthController',
		action : "fbLoginFailed"
	},
	'get /secured/home' : {
		controller : 'HomeController',
		action : "home"
	},
	'get /auth/logout' : {
		controller : 'AuthController',
		action : "logout"
	},
	'get /login' : {
		view: 'login',
	    locals: {
	      layout: null
	    }
	},
/*	'get /login' : {
		controller : 'auth',
		action : "login"
	},
*/	'get /secured/myprofile' : {
		controller : 'HomeController',
		action : "myProfile"
	},
	'get /secured/myfriends' : {
		controller : 'FbGraphController',
		action : "myFriends"
	},
	'get /secured/postToWall' : {
		controller : 'FbGraphController',
		action : "showPostToWall"
	},
	'post /secured/postToWall' : {
		controller : 'FbGraphController',
		action : "postToWall"
	},
	'get /secured/showMyPosts' : {
		controller : 'FbGraphController',
		action : "showMyPosts"
	},
	'get /secured/showPostDetail' : {
		controller : 'FbGraphController',
		action : "showPostDetail"
	},
	'post /secured/likePost' : {
		controller : 'FbGraphController',
		action : "likePost"
	},
	'post /secured/addComment' : {
		controller : 'FbGraphController',
		action : "addNewComment"
	},

};
