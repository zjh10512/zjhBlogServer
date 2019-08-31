module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const CommentSchema = new Schema({
	"content":String,
	"created_time":String,
	"parent_id":String,
	"nickName":String
  });
  return mongoose.model('Comment', CommentSchema);
}
