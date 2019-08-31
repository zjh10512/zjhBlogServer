module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
	"userId":String,
	"userName":String,
	"userPwd":String,
	"nickName":String
  });
  return mongoose.model('User', UserSchema);
}

