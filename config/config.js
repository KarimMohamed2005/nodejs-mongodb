/*globals module */
/*
    Module to define all the Configurations required
*/
let Config = function () {
	return {
		       // mongodb://username:password@localhost/database
		dbPath : "mongodb://dplyrtest:dplyr2020@localhost/dplyrtest?authSource=admin", 
	};
};

module.exports = new Config();
