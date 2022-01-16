import fetch from "node-fetch";
import xml2js from "xml2js";

// Call url
const RSS_URL = `https://www.ozbargain.com.au/cat/gaming/feed/`;

const response = await fetch(RSS_URL);
const body = await response.text();

// console.log(body);

var parseString = xml2js.parseString;
var xml = body;
console.log(xml);
parseString(xml, function (err, result) {
	console.dir(result);
});
