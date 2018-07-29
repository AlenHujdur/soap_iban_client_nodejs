var soap = require('soap');
var url = 'http://www.ibanbic.be/IBANBIC.asmx?WSDL';

var args = {Value:'BE77363158886242'}

soap.createClient(url,function(err,client){
    client.BBANtoBANKNAME(args,function(err,result){
	console.log(result);
    });
    client.getBelgianBBAN(args,function(err,result){
	console.log(result);
    });
    client.BBANtoBIC(args,function(err,result){
	console.log(result);
    });
    client.BBANtoIBAN(args,function(err,result){
	console.log(result);
    });


});
