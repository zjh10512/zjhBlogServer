'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async updateCommentList() {
    const { ctx } = this;
	let req = await this.ctx.request.body;
	//console.log("===updateComment.req===");
	//console.log(req);
	let res = await this.service.newsList.updateComment(req);	
    ctx.body = "updateComment";
  }
  async commentsList() {
    const { ctx } = this;
	let req = await this.ctx.request.query;
	//console.log("===commentsList===");
	//console.log(req);
	let res = await this.service.newsList.findComments(req);	
	
    ctx.body = res;
  }	
	
}

module.exports = NewsController;