/*globals module */
/*
    Module to define all the Configurations required
*/
let Config = function () {
	return {
		       // mongodb://username:password@localhost/database
		dbPath : "mongodb://dplyr:dplyr2020@localhost/dplyr-test?authSource=admin", 
	};
};

module.exports = new Config();
