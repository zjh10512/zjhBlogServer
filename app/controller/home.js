'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
	
	const csrftoken = this.ctx.csrf;
	//console.log("===csrftoken===");
	//console.log(csrftoken);
    ctx.body = csrftoken;
  }
	async updateInput() {
    const { ctx } = this;
	let query = await this.ctx.request.body;
	//console.log("===req===");
	//console.log(query);
	
   	
    let res = await this.service.posts.updatePosts(query);	
    ctx.body = '写入数据成功';  
  }
  	async postsList() {
    const { ctx } = this;  	
 		//获取get传参中query的信息
 	 	let query = await this.ctx.request.query;  
			//console.log("===postsList===");
			//console.log(query);
    let res = await this.service.posts.findPosts(query);	
    ctx.body = res;  
  }
    async postsListOne() {
    const { ctx } = this;
	//获取get传参中query的信息
   	let query = await this.ctx.request.query;
	//console.log("===postsListOne===");
	//console.log(query);
    let res = await this.service.posts.findPostsOne(query);	
    ctx.body = res;  
  }
}

module.exports = HomeController;
