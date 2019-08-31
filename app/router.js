'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
	// router.get('/news', controller.news.list);
	router.post('/updateInput', controller.home.updateInput);
	router.get('/postsList', controller.home.postsList);
	router.get('/postsListOne', controller.home.postsListOne);
	router.post('/updateComment', controller.news.updateCommentList);
	router.get('/commentsList', controller.news.commentsList);
	
};
console.log(`appControllerRouter加载了`);