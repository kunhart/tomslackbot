// Description:
// A bot to return basic population data based on user input
//
// Commands:
//  hubot What is the population of [country] - returns the population of user's requested country
//  What is the country with the highest population - returns country with highest population
//
// Author:
// Tom Lehmann
// @tomwlehmann
// 

let countryData = '{"country": {"China":"1,379,302,771","India":"1,281,935,911","United States":"326,625,791","Indonesia":"260,580,739","Brazil":"207,353,391","Pakistan":"204,924,861","Nigeria":"190,632,261","Bangladesh":"157,826,578","Russia":"142,257,519","Japan":"126,451,398","Mexico":"124,574,795","Ethiopia":"105,350,020","Philippines":"104,256,076","Egypt":"97,041,072","Vietnam":"96,160,163","Congo (Kinshasa)":"83,301,151","Iran":"82,021,564","Turkey":"80,845,215","Germany":"80,594,017","Thailand":"68,414,135","France":"67,106,161","United Kingdom":"64,769,452","Italy":"62,137,802","Burma":"55,123,814","South Africa":"54,841,552","Tanzania":"53,950,935","Korea, South":"51,181,299","Spain":"48,958,159","Colombia":"47,698,524","Kenya":"47,615,739","Argentina":"44,293,293","Ukraine":"44,033,874","Algeria":"40,969,443","Uganda":"39,570,125","Iraq":"39,192,111","Poland":"38,476,269","Sudan":"37,345,935","Canada":"35,623,680","Afghanistan":"34,124,811","Morocco":"33,986,655","Malaysia":"31,381,992","Venezuela":"31,304,016","Peru":"31,036,656","Uzbekistan":"29,748,859","Nepal":"29,384,297","Angola":"29,310,273","Saudi Arabia":"28,571,770","Yemen":"28,036,829","Ghana":"27,499,924","Mozambique":"26,573,706","Korea, North":"25,248,140","Madagascar":"25,054,161","Cameroon":"24,994,885","Cote dIvoire":"24,184,810","Taiwan":"23,508,428","Australia":"23,232,413","Sri Lanka":"22,409,381","Romania":"21,529,967","Burkina Faso":"20,107,509","Niger":"19,245,344","Malawi":"19,196,246","Kazakhstan":"18,556,698","Syria":"18,028,549","Mali":"17,885,245","Chile":"17,789,267","Netherlands":"17,084,719","Ecuador":"16,290,913","Cambodia":"16,204,486","Zambia":"15,972,000","Guatemala":"15,460,732","Senegal":"14,668,522","Zimbabwe":"13,805,084","South Sudan":"13,026,129","Guinea":"12,413,867","Chad":"12,075,985","Rwanda":"11,901,484","Belgium":"11,491,346","Burundi":"11,466,756","Tunisia":"11,403,800","Cuba":"11,147,407","Bolivia":"11,138,234","Benin":"11,038,805","Somalia":"11,031,386","Portugal":"10,839,514","Greece":"10,768,477","Dominican Republic":"10,734,247","Czechia":"10,674,723","Haiti":"10,646,714","Jordan":"10,248,069","Azerbaijan":"9,961,396","Sweden":"9,960,487","Hungary":"9,850,845","Belarus":"9,549,747","Honduras":"9,038,741","Austria":"8,754,413","Tajikistan":"8,468,555","Israel":"8,299,706","Switzerland":"8,236,303","Togo":"7,965,055","Hong Kong":"7,191,503","Laos":"7,126,706","Serbia":"7,111,024","Bulgaria":"7,101,510","Paraguay":"6,943,739","Papua New Guinea":"6,909,701","Libya":"6,653,210","Lebanon":"6,229,794","El Salvador":"6,172,011","Sierra Leone":"6,163,195","United Arab Emirates":"6,072,475","Nicaragua":"6,025,951","Eritrea":"5,918,919","Singapore":"5,888,926","Kyrgyzstan":"5,789,122","Central African Republic":"5,625,118","Denmark":"5,605,948","Finland":"5,518,371","Slovakia":"5,445,829","Turkmenistan":"5,351,277","Norway":"5,320,045","Ireland":"5,011,102","Congo (Brazzaville)":"4,954,674","Costa Rica":"4,930,258","Georgia":"4,926,330","Liberia":"4,689,021","New Zealand":"4,510,327","Croatia":"4,292,095","Bosnia and Herzegovina":"3,856,181","Mauritania":"3,758,571","Panama":"3,753,142","Moldova":"3,474,121","Oman":"3,424,386","Uruguay":"3,360,148","Puerto Rico":"3,351,827","Mongolia":"3,068,243","Albania":"3,047,987","Armenia":"3,045,191","Jamaica":"2,990,561","Kuwait":"2,875,422","Lithuania":"2,823,859","West Bank":"2,747,943","Namibia":"2,484,780","Qatar":"2,314,307","Botswana":"2,214,858","Macedonia":"2,103,721","Gambia, The":"2,051,363","Slovenia":"1,972,126","Lesotho":"1,958,042","Latvia":"1,944,643","Kosovo":"1,895,250","Gaza Strip":"1,795,183","Guinea-Bissau":"1,792,338","Gabon":"1,772,255","Swaziland":"1,467,152","Bahrain":"1,410,942","Mauritius":"1,356,388","Timor-Leste":"1,291,358","Estonia":"1,251,581","Cyprus":"1,221,549","Trinidad and Tobago":"1,218,208","Fiji":"920,938","Djibouti":"865,267","Comoros":"808,080","Equatorial Guinea":"778,358","Bhutan":"758,288","Guyana":"737,718","Solomon Islands":"647,581","Montenegro":"642,550","Western Sahara":"603,253","Macau":"601,969","Luxembourg":"594,130","Suriname":"591,919","Cabo Verde":"560,899","Brunei":"443,593","Malta":"416,338","Maldives":"392,709","Belize":"360,346","Iceland":"339,747","Bahamas, The":"329,988","Barbados":"292,336","French Polynesia":"287,881","Vanuatu":"282,814","New Caledonia":"279,070","Sao Tome and Principe":"201,025","Samoa":"200,108","Guam":"167,358","Saint Lucia":"164,994","Curacao":"149,648","Aruba":"115,120","Grenada":"111,724","Kiribati":"108,145","Virgin Islands, U.S.":"107,268","Tonga":"106,479","Micronesia, Federated States of":"104,196","Saint Vincent and the Grenadines":"102,089","Jersey":"98,840","Antigua and Barbuda":"94,731","Seychelles":"93,920","Isle of Man":"88,815","Andorra":"85,702","Marshall Islands":"74,539","Dominica":"73,897","Bermuda":"70,864","Guernsey":"66,502","Cayman Islands":"58,441","Greenland":"57,713","Saint Kitts and Nevis":"52,715","Turks and Caicos Islands":"52,570","Northern Mariana Islands":"52,263","American Samoa":"51,504","Faroe Islands":"50,730","Sint Maarten":"42,083","Liechtenstein":"38,244","Virgin Islands, British":"35,015","San Marino":"33,537","Saint Martin":"32,125","Monaco":"30,645","Gibraltar":"29,396","Palau":"21,431","Anguilla":"17,087","Wallis and Futuna":"15,714","Tuvalu":"11,052","Nauru":"9,642","Cook Islands":"9,290","Saint Helena, Ascension, and Tristan da Cunha":"7,828","Saint Barthelemy":"7,184","Saint Pierre and Miquelon":"5,533","Montserrat":"5,292"}}'

let countryJSON = JSON.parse(countryData);

module.exports = function(robot) {

	robot.respond(/What can you do/, function(msg) {
   	 return msg.send("You can ask me: \n" + 
   	 	"What is the population of (country)\n" + 
   	 	"@Me Which country has the highest population\n" + 
   	 	"@Me Give me a random country population\n" + 
   	 	"Have fun!");
   	});

   //Respond with the population of a specific country
   robot.hear(/What is the population of (.*)/, function(msg) {
   	 let userCountry = msg.match[1];
   	 let population = countryJSON.country[userCountry];
   	 if (!population) {
   	 	return msg.send("Can't find that country.  :(");
   	 }
   	 return msg.send("Population of " + userCountry + " is: " + population);
   	});	

   robot.respond(/Which country has the highest population/, function(msg) {
   	 let population = countryJSON.country['China'];
   	 return msg.send("China has the largest population, which is: " + population);
   	});

}