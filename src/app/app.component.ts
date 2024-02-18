import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ngOnInit() {}

  title = 'myapp';

  states = [
 {
   "state": "Alabama",
   "stateAbbr": "AL",
   "capital": "Montgomery",
   "largestCity": "Huntsville",
   "admissionDate": "Dec 14, 1819",
   "population": "5,024,279",
   "totalAreaMiles": "52,420",
   "totalAreaKm": "135,767",
   "landAreaMiles": "50,645",
   "landAreaKm": "131,171",
   "waterAreaMiles": "1,775",
   "waterAreaKm": "4,597",
   "numberOfReps": 7,
   "maxLossPerBattle": "581,987",
   "maxReqToLoseGeneral": "717,754"
 },
 {
   "state": "Alaska",
   "stateAbbr": "AK",
   "capital": "Juneau",
   "largestCity": "Anchorage",
   "admissionDate": "Jan 3, 1959",
   "population": "733,391",
   "totalAreaMiles": "665,384",
   "totalAreaKm": "1,723,337",
   "landAreaMiles": "570,641",
   "landAreaKm": "1,477,953",
   "waterAreaMiles": "94,743",
   "waterAreaKm": "245,384",
   "numberOfReps": 1,
   "maxLossPerBattle": "158,945",
   "maxReqToLoseGeneral": "733,391"
 },
 {
   "state": "Arizona",
   "stateAbbr": "AZ",
   "capital": "Phoenix",
   "largestCity": "Phoenix",
   "admissionDate": "Feb 14, 1912",
   "population": "7,151,502",
   "totalAreaMiles": "113,990",
   "totalAreaKm": "295,234",
   "landAreaMiles": "113,594",
   "landAreaKm": "294,207",
   "waterAreaMiles": "396",
   "waterAreaKm": "1,026",
   "numberOfReps": 9,
   "maxLossPerBattle": "696,200",
   "maxReqToLoseGeneral": "794,611"
 },
 {
   "state": "Arkansas",
   "stateAbbr": "AR",
   "capital": "Little Rock",
   "largestCity": "Little Rock",
   "admissionDate": "Jun 15, 1836",
   "population": "3,011,524",
   "totalAreaMiles": "53,179",
   "totalAreaKm": "137,732",
   "landAreaMiles": "52,035",
   "landAreaKm": "134,771",
   "waterAreaMiles": "1,143",
   "waterAreaKm": "2,961",
   "numberOfReps": 4,
   "maxLossPerBattle": "706,970",
   "maxReqToLoseGeneral": "752,881"
 },
 {
   "state": "California",
   "stateAbbr": "CA",
   "capital": "Sacramento",
   "largestCity": "Los Angeles",
   "admissionDate": "Sep 9, 1850",
   "population": "39,538,223",
   "totalAreaMiles": "163,695",
   "totalAreaKm": "423,967",
   "landAreaMiles": "155,779",
   "landAreaKm": "403,466",
   "waterAreaMiles": "7,916",
   "waterAreaKm": "20,501",
   "numberOfReps": 53,
   "maxLossPerBattle": "604,682",
   "maxReqToLoseGeneral": "746,004"
 },
 {
   "state": "Colorado",
   "stateAbbr": "CO",
   "capital": "Denver",
   "largestCity": "Denver",
   "admissionDate": "Aug 1, 1876",
   "population": "5,773,714",
   "totalAreaMiles": "104,094",
   "totalAreaKm": "269,601",
   "landAreaMiles": "103,642",
   "landAreaKm": "268,431",
   "waterAreaMiles": "452",
   "waterAreaKm": "1,170",
   "numberOfReps": 7,
   "maxLossPerBattle": "734,949",
   "maxReqToLoseGeneral": "824,816"
 },
 {
   "state": "Connecticut",
   "stateAbbr": "CT",
   "capital": "Hartford",
   "largestCity": "Bridgeport",
   "admissionDate": "Jan 9, 1788",
   "population": "3,605,944",
   "totalAreaMiles": "5,543",
   "totalAreaKm": "14,357",
   "landAreaMiles": "4,842",
   "landAreaKm": "12,542",
   "waterAreaMiles": "701",
   "waterAreaKm": "1,816",
   "numberOfReps": 5,
   "maxLossPerBattle": "716,403",
   "maxReqToLoseGeneral": "721,189"
 },
 {
   "state": "Delaware",
   "stateAbbr": "DE",
   "capital": "Dover",
   "largestCity": "Wilmington",
   "admissionDate": "Dec 7, 1787",
   "population": "989,948",
   "totalAreaMiles": "2,489",
   "totalAreaKm": "6,446",
   "landAreaMiles": "1,949",
   "landAreaKm": "5,047",
   "waterAreaMiles": "540",
   "waterAreaKm": "1,399",
   "numberOfReps": 1,
   "maxLossPerBattle": "987,799",
   "maxReqToLoseGeneral": "989,948"
 },
 {
   "state": "Florida",
   "stateAbbr": "FL",
   "capital": "Tallahassee",
   "largestCity": "Jacksonville",
   "admissionDate": "Mar 3, 1845",
   "population": "21,538,187",
   "totalAreaMiles": "65,758",
   "totalAreaKm": "170,312",
   "landAreaMiles": "53,625",
   "landAreaKm": "138,887",
   "waterAreaMiles": "12,133",
   "waterAreaKm": "31,424",
   "numberOfReps": 27,
   "maxLossPerBattle": "740,940",
   "maxReqToLoseGeneral": "797,711"
 },
 {
   "state": "Georgia",
   "stateAbbr": "GA",
   "capital": "Atlanta",
   "largestCity": "Atlanta",
   "admissionDate": "Jan 2, 1788",
   "population": "10,711,908",
   "totalAreaMiles": "59,425",
   "totalAreaKm": "153,910",
   "landAreaMiles": "57,513",
   "landAreaKm": "148,959",
   "waterAreaMiles": "1,912",
   "waterAreaKm": "4,951",
   "numberOfReps": 14,
   "maxLossPerBattle": "713,833",
   "maxReqToLoseGeneral": "765,136"
 },
 {
   "state": "Hawaii",
   "stateAbbr": "HI",
   "capital": "Honolulu",
   "largestCity": "Honolulu",
   "admissionDate": "Aug 21, 1959",
   "population": "1,455,271",
   "totalAreaMiles": "10,932",
   "totalAreaKm": "28,313",
   "landAreaMiles": "6,423",
   "landAreaKm": "16,635",
   "waterAreaMiles": "4,509",
   "waterAreaKm": "11,678",
   "numberOfReps": 2,
   "maxLossPerBattle": "718,198",
   "maxReqToLoseGeneral": "727,636"
 },
 {
   "state": "Idaho",
   "stateAbbr": "ID",
   "capital": "Boise",
   "largestCity": "Boise",
   "admissionDate": "Jul 3, 1890",
   "population": "1,839,106",
   "totalAreaMiles": "83,569",
   "totalAreaKm": "216,443",
   "landAreaMiles": "82,643",
   "landAreaKm": "214,045",
   "waterAreaMiles": "926",
   "waterAreaKm": "2,398",
   "numberOfReps": 2,
   "maxLossPerBattle": "847,405",
   "maxReqToLoseGeneral": "919,553"
 },
 {
   "state": "Illinois",
   "stateAbbr": "IL",
   "capital": "Springfield",
   "largestCity": "Chicago",
   "admissionDate": "Dec 3, 1818",
   "population": "12,812,508",
   "totalAreaMiles": "57,914",
   "totalAreaKm": "149,995",
   "landAreaMiles": "55,519",
   "landAreaKm": "143,793",
   "waterAreaMiles": "2,395",
   "waterAreaKm": "6,202",
   "numberOfReps": 18,
   "maxLossPerBattle": "661,808",
   "maxReqToLoseGeneral": "711,806"
 },
 {
   "state": "Indiana",
   "stateAbbr": "IN",
   "capital": "Indianapolis",
   "largestCity": "Indianapolis",
   "admissionDate": "Dec 11, 1816",
   "population": "6,785,528",
   "totalAreaMiles": "36,420",
   "totalAreaKm": "94,326",
   "landAreaMiles": "35,826",
   "landAreaKm": "92,789",
   "waterAreaMiles": "593",
   "waterAreaKm": "1,537",
   "numberOfReps": 9,
   "maxLossPerBattle": "722,506",
   "maxReqToLoseGeneral": "753,948"
 },
 {
   "state": "Iowa",
   "stateAbbr": "IA",
   "capital": "Des Moines",
   "largestCity": "Des Moines",
   "admissionDate": "Dec 28, 1846",
   "population": "3,190,369",
   "totalAreaMiles": "56,273",
   "totalAreaKm": "145,746",
   "landAreaMiles": "55,857",
   "landAreaKm": "144,669",
   "waterAreaMiles": "416",
   "waterAreaKm": "1,077",
   "numberOfReps": 4,
   "maxLossPerBattle": "749,010",
   "maxReqToLoseGeneral": "797,592"
 },
 {
   "state": "Kansas",
   "stateAbbr": "KS",
   "capital": "Topeka",
   "largestCity": "Wichita",
   "admissionDate": "Jan 29, 1861",
   "population": "2,937,880",
   "totalAreaMiles": "82,278",
   "totalAreaKm": "213,100",
   "landAreaMiles": "81,759",
   "landAreaKm": "211,754",
   "waterAreaMiles": "520",
   "waterAreaKm": "1,346",
   "numberOfReps": 4,
   "maxLossPerBattle": "663,437",
   "maxReqToLoseGeneral": "734,470"
 },
 {
   "state": "Kentucky",
   "stateAbbr": "KY",
   "capital": "Frankfort",
   "largestCity": "Louisville",
   "admissionDate": "Jun 1, 1792",
   "population": "4,505,836",
   "totalAreaMiles": "40,408",
   "totalAreaKm": "104,656",
   "landAreaMiles": "39,486",
   "landAreaKm": "102,269",
   "waterAreaMiles": "921",
   "waterAreaKm": "2,387",
   "numberOfReps": 6,
   "maxLossPerBattle": "716,087",
   "maxReqToLoseGeneral": "750,973"
 },
 {
   "state": "Louisiana",
   "stateAbbr": "LA",
   "capital": "Baton Rouge",
   "largestCity": "New Orleans",
   "admissionDate": "Apr 30, 1812",
   "population": "4,657,757",
   "totalAreaMiles": "52,378",
   "totalAreaKm": "135,659",
   "landAreaMiles": "43,204",
   "landAreaKm": "111,898",
   "waterAreaMiles": "9,174",
   "waterAreaKm": "23,761",
   "numberOfReps": 6,
   "maxLossPerBattle": "731,073",
   "maxReqToLoseGeneral": "776,293"
 },
 {
   "state": "Maine",
   "stateAbbr": "ME",
   "capital": "Augusta",
   "largestCity": "Portland",
   "admissionDate": "Mar 15, 1820",
   "population": "1,362,359",
   "totalAreaMiles": "35,380",
   "totalAreaKm": "91,633",
   "landAreaMiles": "30,843",
   "landAreaKm": "79,883",
   "waterAreaMiles": "4,537",
   "waterAreaKm": "11,750",
   "numberOfReps": 2,
   "maxLossPerBattle": "650,635",
   "maxReqToLoseGeneral": "681,180"
 },
 {
   "state": "Maryland",
   "stateAbbr": "MD",
   "capital": "Annapolis",
   "largestCity": "Baltimore",
   "admissionDate": "Apr 28, 1788",
   "population": "6,177,224",
   "totalAreaMiles": "12,406",
   "totalAreaKm": "32,131",
   "landAreaMiles": "9,707",
   "landAreaKm": "25,142",
   "waterAreaMiles": "2,699",
   "waterAreaKm": "6,990",
   "numberOfReps": 8,
   "maxLossPerBattle": "761,443",
   "maxReqToLoseGeneral": "772,153"
 },
 {
   "state": "Massachusetts",
   "stateAbbr": "MA",
   "capital": "Boston",
   "largestCity": "Boston",
   "admissionDate": "Feb 6, 1788",
   "population": "7,029,917",
   "totalAreaMiles": "10,554",
   "totalAreaKm": "27,336",
   "landAreaMiles": "7,800",
   "landAreaKm": "20,202",
   "waterAreaMiles": "2,754",
   "waterAreaKm": "7,134",
   "numberOfReps": 9,
   "maxLossPerBattle": "771,990",
   "maxReqToLoseGeneral": "781,102"
 },
 {
   "state": "Michigan",
   "stateAbbr": "MI",
   "capital": "Lansing",
   "largestCity": "Detroit",
   "admissionDate": "Jan 26, 1837",
   "population": "10,077,331",
   "totalAreaMiles": "96,714",
   "totalAreaKm": "250,487",
   "landAreaMiles": "56,539",
   "landAreaKm": "146,435",
   "waterAreaMiles": "40,175",
   "waterAreaKm": "104,052",
   "numberOfReps": 14,
   "maxLossPerBattle": "636,314",
   "maxReqToLoseGeneral": "719,809"
 },
 {
   "state": "Minnesota",
   "stateAbbr": "MN",
   "capital": "St. Paul",
   "largestCity": "Minneapolis",
   "admissionDate": "May 11, 1858",
   "population": "5,706,494",
   "totalAreaMiles": "86,936",
   "totalAreaKm": "225,163",
   "landAreaMiles": "79,627",
   "landAreaKm": "206,232",
   "waterAreaMiles": "7,309",
   "waterAreaKm": "18,930",
   "numberOfReps": 8,
   "maxLossPerBattle": "638,257",
   "maxReqToLoseGeneral": "713,312"
 },
 {
   "state": "Mississippi",
   "stateAbbr": "MS",
   "capital": "Jackson",
   "largestCity": "Jackson",
   "admissionDate": "Dec 10, 1817",
   "population": "2,961,279",
   "totalAreaMiles": "48,432",
   "totalAreaKm": "125,438",
   "landAreaMiles": "46,923",
   "landAreaKm": "121,531",
   "waterAreaMiles": "1,508",
   "waterAreaKm": "3,907",
   "numberOfReps": 4,
   "maxLossPerBattle": "698,507",
   "maxReqToLoseGeneral": "740,320"
 },
 {
   "state": "Missouri",
   "stateAbbr": "MO",
   "capital": "Jefferson City",
   "largestCity": "Kansas City",
   "admissionDate": "Aug 10, 1821",
   "population": "6,154,913",
   "totalAreaMiles": "69,707",
   "totalAreaKm": "180,540",
   "landAreaMiles": "68,742",
   "landAreaKm": "178,040",
   "waterAreaMiles": "965",
   "waterAreaKm": "2,501",
   "numberOfReps": 8,
   "maxLossPerBattle": "709,184",
   "maxReqToLoseGeneral": "769,364"
 },
 {
   "state": "Montana",
   "stateAbbr": "MT",
   "capital": "Helena",
   "largestCity": "Billings",
   "admissionDate": "Nov 8, 1889",
   "population": "1,084,225",
   "totalAreaMiles": "147,040",
   "totalAreaKm": "380,831",
   "landAreaMiles": "145,546",
   "landAreaKm": "376,962",
   "waterAreaMiles": "1,494",
   "waterAreaKm": "3,869",
   "numberOfReps": 1,
   "maxLossPerBattle": "957,281",
   "maxReqToLoseGeneral": "1,084,225"
 },
 {
   "state": "Nebraska",
   "stateAbbr": "NE",
   "capital": "Lincoln",
   "largestCity": "Omaha",
   "admissionDate": "Mar 1, 1867",
   "population": "1,961,504",
   "totalAreaMiles": "77,348",
   "totalAreaKm": "200,330",
   "landAreaMiles": "76,824",
   "landAreaKm": "198,974",
   "waterAreaMiles": "524",
   "waterAreaKm": "1,356",
   "numberOfReps": 3,
   "maxLossPerBattle": "587,058",
   "maxReqToLoseGeneral": "653,835"
 },
 {
   "state": "Nevada",
   "stateAbbr": "NV",
   "capital": "Carson City",
   "largestCity": "Las Vegas",
   "admissionDate": "Oct 31, 1864",
   "population": "3,104,614",
   "totalAreaMiles": "110,572",
   "totalAreaKm": "286,380",
   "landAreaMiles": "109,781",
   "landAreaKm": "284,332",
   "waterAreaMiles": "791",
   "waterAreaKm": "2,048",
   "numberOfReps": 4,
   "maxLossPerBattle": "680,694",
   "maxReqToLoseGeneral": "776,154"
 },
 {
   "state": "New Hampshire",
   "stateAbbr": "NH",
   "capital": "Concord",
   "largestCity": "Manchester",
   "admissionDate": "Jun 21, 1788",
   "population": "1,377,529",
   "totalAreaMiles": "9,349",
   "totalAreaKm": "24,214",
   "landAreaMiles": "8,953",
   "landAreaKm": "23,187",
   "waterAreaMiles": "397",
   "waterAreaKm": "1,027",
   "numberOfReps": 2,
   "maxLossPerBattle": "680,693",
   "maxReqToLoseGeneral": "688,765"
 },
 {
   "state": "New Jersey",
   "stateAbbr": "NJ",
   "capital": "Trenton",
   "largestCity": "Newark",
   "admissionDate": "Dec 18, 1787",
   "population": "9,288,994",
   "totalAreaMiles": "8,723",
   "totalAreaKm": "22,591",
   "landAreaMiles": "7,354",
   "landAreaKm": "19,047",
   "waterAreaMiles": "1,368",
   "waterAreaKm": "3,544",
   "numberOfReps": 12,
   "maxLossPerBattle": "766,553",
   "maxReqToLoseGeneral": "774,083"
 },
 {
   "state": "New Mexico",
   "stateAbbr": "NM",
   "capital": "Santa Fe",
   "largestCity": "Albuquerque",
   "admissionDate": "Jan 6, 1912",
   "population": "2,117,522",
   "totalAreaMiles": "121,590",
   "totalAreaKm": "314,917",
   "landAreaMiles": "121,298",
   "landAreaKm": "314,161",
   "waterAreaMiles": "292",
   "waterAreaKm": "757",
   "numberOfReps": 3,
   "maxLossPerBattle": "600,868",
   "maxReqToLoseGeneral": "705,841"
 },
 {
   "state": "New York",
   "stateAbbr": "NY",
   "capital": "Albany",
   "largestCity": "New York City",
   "admissionDate": "Jul 26, 1788",
   "population": "20,201,249",
   "totalAreaMiles": "54,555",
   "totalAreaKm": "141,297",
   "landAreaMiles": "47,126",
   "landAreaKm": "122,057",
   "waterAreaMiles": "7,429",
   "waterAreaKm": "19,240",
   "numberOfReps": 27,
   "maxLossPerBattle": "701,095",
   "maxReqToLoseGeneral": "748,194"
 },
 {
   "state": "North Carolina",
   "stateAbbr": "NC",
   "capital": "Raleigh",
   "largestCity": "Charlotte",
   "admissionDate": "Nov 21, 1789",
   "population": "10,439,388",
   "totalAreaMiles": "53,819",
   "totalAreaKm": "139,391",
   "landAreaMiles": "48,618",
   "landAreaKm": "125,920",
   "waterAreaMiles": "5,201",
   "waterAreaKm": "13,471",
   "numberOfReps": 13,
   "maxLossPerBattle": "756,566",
   "maxReqToLoseGeneral": "803,030"
 },
 {
   "state": "North Dakota",
   "stateAbbr": "ND",
   "capital": "Bismarck",
   "largestCity": "Fargo",
   "admissionDate": "Nov 2, 1889",
   "population": "779,094",
   "totalAreaMiles": "70,698",
   "totalAreaKm": "183,108",
   "landAreaMiles": "69,001",
   "landAreaKm": "178,711",
   "waterAreaMiles": "1,698",
   "waterAreaKm": "4,397",
   "numberOfReps": 1,
   "maxLossPerBattle": "718,058",
   "maxReqToLoseGeneral": "779,094"
 },
 {
   "state": "Ohio",
   "stateAbbr": "OH",
   "capital": "Columbus",
   "largestCity": "Columbus",
   "admissionDate": "Mar 1, 1803",
   "population": "11,799,448",
   "totalAreaMiles": "44,826",
   "totalAreaKm": "116,098",
   "landAreaMiles": "40,861",
   "landAreaKm": "105,829",
   "waterAreaMiles": "3,965",
   "waterAreaKm": "10,269",
   "numberOfReps": 16,
   "maxLossPerBattle": "698,766",
   "maxReqToLoseGeneral": "737,466"
 },
 {
   "state": "Oklahoma",
   "stateAbbr": "OK",
   "capital": "Oklahoma City",
   "largestCity": "Oklahoma City",
   "admissionDate": "Nov 16, 1907",
   "population": "3,959,353",
   "totalAreaMiles": "69,899",
   "totalAreaKm": "181,037",
   "landAreaMiles": "68,595",
   "landAreaKm": "177,660",
   "waterAreaMiles": "1,304",
   "waterAreaKm": "3,377",
   "numberOfReps": 5,
   "maxLossPerBattle": "731,525",
   "maxReqToLoseGeneral": "791,871"
 },
 {
   "state": "Oregon",
   "stateAbbr": "OR",
   "capital": "Salem",
   "largestCity": "Portland",
   "admissionDate": "Feb 14, 1859",
   "population": "4,237,256",
   "totalAreaMiles": "98,379",
   "totalAreaKm": "254,799",
   "landAreaMiles": "95,988",
   "landAreaKm": "248,608",
   "waterAreaMiles": "2,391",
   "waterAreaKm": "6,191",
   "numberOfReps": 5,
   "maxLossPerBattle": "762,518",
   "maxReqToLoseGeneral": "847,451"
 },
 {
   "state": "Pennsylvania",
   "stateAbbr": "PA",
   "capital": "Harrisburg",
   "largestCity": "Philadelphia",
   "admissionDate": "Dec 12, 1787",
   "population": "13,002,700",
   "totalAreaMiles": "46,054",
   "totalAreaKm": "119,280",
   "landAreaMiles": "44,743",
   "landAreaKm": "115,883",
   "waterAreaMiles": "1,312",
   "waterAreaKm": "3,397",
   "numberOfReps": 18,
   "maxLossPerBattle": "682,612",
   "maxReqToLoseGeneral": "722,372"
 },
 {
   "state": "Rhode Island",
   "stateAbbr": "RI",
   "capital": "Providence",
   "largestCity": "Providence",
   "admissionDate": "May 29, 1790",
   "population": "1,097,379",
   "totalAreaMiles": "1,545",
   "totalAreaKm": "4,001",
   "landAreaMiles": "1,034",
   "landAreaKm": "2,678",
   "waterAreaMiles": "511",
   "waterAreaKm": "1,324",
   "numberOfReps": 2,
   "maxLossPerBattle": "547,356",
   "maxReqToLoseGeneral": "548,690"
 },
 {
   "state": "South Carolina",
   "stateAbbr": "SC",
   "capital": "Columbia",
   "largestCity": "Charleston",
   "admissionDate": "May 23, 1788",
   "population": "5,118,425",
   "totalAreaMiles": "32,020",
   "totalAreaKm": "82,933",
   "landAreaMiles": "30,061",
   "landAreaKm": "77,857",
   "waterAreaMiles": "1,960",
   "waterAreaKm": "5,076",
   "numberOfReps": 7,
   "maxLossPerBattle": "703,559",
   "maxReqToLoseGeneral": "731,204"
 },
 {
   "state": "South Dakota",
   "stateAbbr": "SD",
   "capital": "Pierre",
   "largestCity": "Sioux Falls",
   "admissionDate": "Nov 2, 1889",
   "population": "886,667",
   "totalAreaMiles": "77,116",
   "totalAreaKm": "199,729",
   "landAreaMiles": "75,811",
   "landAreaKm": "196,350",
   "waterAreaMiles": "1,305",
   "waterAreaKm": "3,379",
   "numberOfReps": 1,
   "maxLossPerBattle": "820,091",
   "maxReqToLoseGeneral": "886,667"
 },
 {
   "state": "Tennessee",
   "stateAbbr": "TN",
   "capital": "Nashville",
   "largestCity": "Nashville",
   "admissionDate": "Jun 1, 1796",
   "population": "6,910,840",
   "totalAreaMiles": "42,144",
   "totalAreaKm": "109,153",
   "landAreaMiles": "41,235",
   "landAreaKm": "106,798",
   "waterAreaMiles": "909",
   "waterAreaKm": "2,355",
   "numberOfReps": 9,
   "maxLossPerBattle": "731,487",
   "maxReqToLoseGeneral": "767,871"
 },
 {
   "state": "Texas",
   "stateAbbr": "TX",
   "capital": "Austin",
   "largestCity": "Houston",
   "admissionDate": "Dec 29, 1845",
   "population": "29,145,505",
   "totalAreaMiles": "268,596",
   "totalAreaKm": "695,662",
   "landAreaMiles": "261,232",
   "landAreaKm": "676,587",
   "waterAreaMiles": "7,365",
   "waterAreaKm": "19,075",
   "numberOfReps": 36,
   "maxLossPerBattle": "577,710",
   "maxReqToLoseGeneral": "809,597"
 },
 {
   "state": "Utah",
   "stateAbbr": "UT",
   "capital": "Salt Lake City",
   "largestCity": "Salt Lake City",
   "admissionDate": "Jan 4, 1896",
   "population": "3,271,616",
   "totalAreaMiles": "84,897",
   "totalAreaKm": "219,882",
   "landAreaMiles": "82,170",
   "landAreaKm": "212,818",
   "waterAreaMiles": "2,727",
   "waterAreaKm": "7,064",
   "numberOfReps": 4,
   "maxLossPerBattle": "744,610",
   "maxReqToLoseGeneral": "817,904"
 },
 {
   "state": "Vermont",
   "stateAbbr": "VT",
   "capital": "Montpelier",
   "largestCity": "Burlington",
   "admissionDate": "Mar 4, 1791",
   "population": "643,077",
   "totalAreaMiles": "9,616",
   "totalAreaKm": "24,906",
   "landAreaMiles": "9,217",
   "landAreaKm": "23,871",
   "waterAreaMiles": "400",
   "waterAreaKm": "1,035",
   "numberOfReps": 1,
   "maxLossPerBattle": "634,775",
   "maxReqToLoseGeneral": "643,077"
 },
 {
   "state": "Virginia",
   "stateAbbr": "VA",
   "capital": "Richmond",
   "largestCity": "Virginia Beach",
   "admissionDate": "Jun 25, 1788",
   "population": "8,631,393",
   "totalAreaMiles": "42,775",
   "totalAreaKm": "110,787",
   "landAreaMiles": "39,490",
   "landAreaKm": "102,279",
   "waterAreaMiles": "3,285",
   "waterAreaKm": "8,508",
   "numberOfReps": 11,
   "maxLossPerBattle": "747,743",
   "maxReqToLoseGeneral": "784,672"
 },
 {
   "state": "Washington",
   "stateAbbr": "WA",
   "capital": "Olympia",
   "largestCity": "Seattle",
   "admissionDate": "Nov 11, 1889",
   "population": "7,705,281",
   "totalAreaMiles": "71,298",
   "totalAreaKm": "184,661",
   "landAreaMiles": "66,456",
   "landAreaKm": "172,119",
   "waterAreaMiles": "4,842",
   "waterAreaKm": "12,542",
   "numberOfReps": 10,
   "maxLossPerBattle": "708,974",
   "maxReqToLoseGeneral": "770,528"
 },
 {
   "state": "West Virginia",
   "stateAbbr": "WV",
   "capital": "Charleston",
   "largestCity": "Charleston",
   "admissionDate": "Jun 20, 1863",
   "population": "1,793,716",
   "totalAreaMiles": "24,230",
   "totalAreaKm": "62,756",
   "landAreaMiles": "24,038",
   "landAreaKm": "62,259",
   "waterAreaMiles": "192",
   "waterAreaKm": "497",
   "numberOfReps": 3,
   "maxLossPerBattle": "576,987",
   "maxReqToLoseGeneral": "597,905"
 },
 {
   "state": "Wisconsin",
   "stateAbbr": "WI",
   "capital": "Madison",
   "largestCity": "Milwaukee",
   "admissionDate": "May 29, 1848",
   "population": "5,893,718",
   "totalAreaMiles": "65,496",
   "totalAreaKm": "169,635",
   "landAreaMiles": "54,158",
   "landAreaKm": "140,268",
   "waterAreaMiles": "11,339",
   "waterAreaKm": "29,367",
   "numberOfReps": 8,
   "maxLossPerBattle": "680,170",
   "maxReqToLoseGeneral": "736,715"
 },
 {
   "state": "Wyoming",
   "stateAbbr": "WY",
   "capital": "Cheyenne",
   "largestCity": "Cheyenne",
   "admissionDate": "Jul 10, 1890",
   "population": "576,851",
   "totalAreaMiles": "97,813",
   "totalAreaKm": "253,335",
   "landAreaMiles": "97,093",
   "landAreaKm": "251,470",
   "waterAreaMiles": "720",
   "waterAreaKm": "1,864",
   "numberOfReps": 1,
   "maxLossPerBattle": "492,406",
   "maxReqToLoseGeneral": "576,851"
 }
]
}
