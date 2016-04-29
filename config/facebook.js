/**
 * Facebook Configuration (sails.config.facebook)
 * 
 */
module.exports.facebook = {

	FACEBOOK_CLIENT_ID : "1687043991545499",
	FACEBOOK_CLIENT_SECRET : "314e07885da2e74d25399774cf8ee869",
	FACEBOOK_AUTH_SCOPE : "email, user_about_me, user_birthday, user_location, publish_actions,user_posts,user_friends",
	FACEBOOK_AUTH_CALLBACK_URL : "http://localhost:1337/auth/facebook" /* "http://YOUR-IP:PORT/auth/facebook/callback" */
};
