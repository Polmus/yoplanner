/**
 * DeployController
 *
 * @description :: Server-side logic for managing deploys
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var exec = require('child_process').exec;
module.exports = {
	webhook:function(req,res){
		setTimeout(function(){
			exec('git pull', function (error, stdout, stderr) {
			  console.log(">>>>> EXECUTING GIT PULL <<<<<")
			}); 
			
		},10000)
		res.send(200);
	}
};

