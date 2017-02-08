Steps = new Mongo.Collection('steps');

var data = Steps.find().fetch().length;
console.log(data);
console.log(data.length);

if (data<1){
	// Steps.insert({title: 'blah'})
	"added one"
}else{
	"We have enough"
}
