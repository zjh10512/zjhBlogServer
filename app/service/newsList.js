'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
	
  async findComments(req) {
	
// 	const mongoNewsInformation = await this.ctx.model.User.aggregate([
// 		{
// 			$lookup:
// 				{
// 					from:"Newss",
// 					localField:"nickName",
// 					foreignField:"owner_user_id",
// 					as:"items"
// 				}
// 		},
// 		{
// 			$match:{"nickName":"管理员"}
// 		}
// 	],function(err,docs){
// 		if(err) {
// 			console.log(err);
// 			return;
// 		}
// 		console.log(JSON.stringify(docs));
// 	});
	let data = {
	"parent_id":req.parentId,
	};
	let zjhcomments = await this.ctx.model.Comment.find(data,function(err){
		 if(err){
		 console.log(err);
		 }else{
		 console.log('评论数据查询成功');
		 }
		
	}).sort({"_id":-1}).limit(10);

	//console.log(zjhcomments);
	return zjhcomments;
  }
  async updateComment(req) {
	let data = {
	"content":req.text,
	"created_time":req.time,
	"parent_id":req.postId,
	"nickName":req.name
	};
	let zjhcomment = await this.ctx.model.Comment.create(data,function(err){
		 if(err){
		 console.log(err);
		 }else{
		 console.log('评论数据写入成功');
		 }
		
	});
  }

}
console.log(`serverNews加载了`);
module.exports = NewsService;