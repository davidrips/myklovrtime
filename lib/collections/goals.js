Goals = new Mongo.Collection('goals');

var data = Goals.find().fetch().length;
console.log(data);
console.log(data.length);

if (data<1){
	// Goals.insert({title: 'blah'})
	"added one"
}else{
	"We have enough"
}
