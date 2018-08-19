var friendData = require('../data/friends.js');
var coastToCoast = [
  {
    "name":"Space Ghost",
    "photo":"http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/spaceghost_0.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  }
]

module.exports = function(app) {
	//get api data
	app.get('/api/friends',function(req,res) {
		//console.log(res.json(friendData));
		return res.json(coastToCoast);
	});
}