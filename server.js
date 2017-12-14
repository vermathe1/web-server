var port = process.env.PORT || 3006;
var express = require('express');
var hbs = require('hbs');
var app = express();

hbs.registerPartials('./views/partials'); //for reusability of template html
hbs.registerHelper('makeUpperCase',(text)=>{ //reusability of function
	return text.toUpperCase();
})

app.set("view engine" , "hbs"); //while rendering chekcs in views folder
app.use((req,res,next)=>{
	res.render('maintainance.hbs')
	next();

})
app.use(express.static('./public')); // here we are able to render entire html page twiking a little bit express to work in our way


app.get('/',(req,res)=>{
	res.render("home.hbs",{
		welcomeMessage :"Welcome to home page",
		time : new Date().getFullYear()
	})
});
app.get('/about',(req,res)=>{
	res.render('about.hbs',{
		about: 'This is about page',
		time : new Date().getFullYear()
	});
});
app.get('/bad',(req,res)=>{
	res.send({
		error : "Bad request Send",
		errorType : ["400 , 404"]
	})
});

app.listen(port,()=>{
	console.log("app is running at port "+port);
});