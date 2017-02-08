Milestones = new Mongo.Collection('milestones'); 

var data = Milestones.find().fetch().length;
console.log(data);
console.log(data.length);

if (data<1){
	// Milestones.insert({title: 'blah'})
	"added one"
}else{
	"We have enough"
}
