module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const PostSchema = new Schema({
	"author":String,
	"title":String,
	"content":String,
	"created_time":String,
	"image":String
  });
  return mongoose.model('Post', PostSchema);
}
