'use strict';

const Service = require('egg').Service;

class PostsService extends Service {
	//博客首页访问时获取文章列表
	async findPosts(query) {
		//接收过来的query时字符串类型，需要格式化
		let num = Number(query.value)*4;
		const postsList = await this.ctx.model.Post.find().skip(num).sort({"created_time":-1}).limit(4);
		// console.log(postsList);
		return postsList;
	}
	//博客首页的某篇文章被详细访问时，获取单个文章
    async findPostsOne(query) {	
  	const postsListOne = await this.ctx.model.Post.find({_id:query.id},function(err,docs){
  		if(err){
  			console.log(err)
  		}else{
  			console.log(docs)
  		}
  	});
  	// console.log(postsListOne);
  	return postsListOne;
  }
  //隐藏页面Input文章写入服务器数据库中
  async updatePosts(query) {
	let data = {
		"author":query.name,
		"title":query.title,
		"content":query.text,
		"created_time":query.time,
		"image":''
	};
	let zjhPosts = await this.ctx.model.Post.create(data,function(err){
		 if(err){
		 console.log(err);
		 }else{
		 console.log('评论数据写入成功');
		 }
	});
  }
}
console.log(`serverPosts加载了`);
module.exports = PostsService;