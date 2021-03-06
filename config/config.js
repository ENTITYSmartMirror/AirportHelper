﻿/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1","172.16.99.254", "::ffff:172.16.99.254", "::1","192.168.200.156", "::ffff:192.168.200.156", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",
	
	getStyles: function () {
		return ["font-awesome.css", "CategoryHairstyle.css"];
	},
	
	modules: [
		{
			module: "clock",
			position: "top_left",
			config : {
				display:"none", 
			}
		},
		{
			module: "CategoryHairstyle",  //1
			position: "middle_center", // This can be any of the regions.
			header: "이용노선을 선택하세요.", // Optional
			classes: "default everyone", // Optional
			config: {
				// See "Configuration options" for more information.
			}
		},
		{
			module: "CategoryManhair",   //2
			position: "middle_center", // This can be any of the regions.
			header: "목적 도시를 선택하세요.", // Optional
			classes: "default everyone", // Optional
			config: {
				hidden : "true",
				// See "Configuration options" for more information.
			}
		},
		{
			module: "CategoryChoiceContinent",   //3
			position: "middle_center", // This can be any of the regions.
			header: "목적 대륙을 선택하세요.", // Optional
			classes: "default everyone", // Optional
			config: {
				hidden : "true",
				// See "Configuration options" for more information.
			}
		},
		{	
			module: "CategoryChoiceAsia", //4
			position: "middle_center", // This can be any of the regions.
			header: "목적 아시아 국가를 선택하세요.", // Optional
			classes: "default everyone", // Optional
			config: {
		
				// See "Configuration options" for more information.
			}
		},
		{	
			module: "CategoryChoiceEurope", //5
			position: "middle_center", // This can be any of the regions.
			header: "목적 유럽 국가를 선택하세요.", // Optional
			classes: "default everyone", // Optional
			config: {
		
				// See "Configuration options" for more information.
			}
		},
		{	
			module: "CategoryChoiceAmerica", //6
			position: "middle_center", // This can be any of the regions.
			header: "목적 아메리카대륙 국가를 선택하세요.", // Optional
			classes: "default everyone", // Optional
			config: {
		
				// See "Configuration options" for more information.
			}
		},
		{	
			module: "CategoryChoiceAfrica", //7
			position: "middle_center", // This can be any of the regions.
			header: "목적 아프리카 국가를 선택하세요.", // Optional
			classes: "default everyone", // Optional
			config: {
		
				// See "Configuration options" for more information.
			}
		},
		{
			module: "jeju-1", //8, 제주10대
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/jeju10.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1180", // height of iframe
					frameWidth: "1120", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "jeju-2", //9, 제주20대
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/jeju20.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1180", // height of iframe
					frameWidth: "1120", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "Asia-China", //10, 중국
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/china_2.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1180", // height of iframe
					frameWidth: "1120", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "ManCutPomade", //11
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자컷포마드.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "ManPermPart", //12
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자펌가르마.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "ManPermRegent", //13
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자펌리젠트.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "ManPermIron", //14
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자펌아이롱.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "WomanCutLayered", //15
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자컷레이어드.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "WomanCutBob", //16
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자컷보브.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "WomanCutShort", //17
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자컷숏.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "WomanCutHime", //18
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자컷히메.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "WomanPermGlam", //19
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자펌글램.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "WomanPermBody", //20
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자펌바디.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "WomanPermHippie", //21
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자펌히피.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "Man10s", //22
			position: "bottom_left",	// This can be any of the regions.
			visible : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자10대.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "Man20s", //23
			position: "bottom_left",	// This can be any of the regions.
			visible : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자20대.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "Man30s", //24
			position: "bottom_left",	// This can be any of the regions.
			visible : "false",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자30대.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "Man40s", //25
			position: "bottom_left",	// This can be any of the regions.
			visible : "false",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자40대.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "Man50s", //26
			position: "bottom_left",	// This can be any of the regions.
			visible : "false",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자50대.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "Woman10s", //27
			position: "bottom_left",	// This can be any of the regions.
			visible : "false",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자10대.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
					hidden : "true",
			}
		},
		{
			module: "MMM-EmbedYoutube1",  //28
			position: "top_right",	
			config: {
				video_id: "X13sr1Rv-CM",
				searchlist1: "베이징",
				loop: true
			}
		},
		{
			module: "MMM-EmbedYoutube2",  //29
			position: "top_right",	
			config: {
				video_id: "-rxVy7NpZAk",
				searchlist1: "제주도 여행",
				loop: true
			}
		},
		{ 
			module: "CategorySelectMain", //30
			position: "top_left", // This can be any of the regions.
			
			classes: "default everyone", // Optional
			config: {
		
				// See "Configuration options" for more information.
			}
		},
		


		{
			module: "updatenotification", //31
			position: "top_bar"
		},
		{
			module: "MMM-Testpython", //32
			position: "bottom_center",
			config:{
			}
			
		},
		{
			module: "MMM-Dynamic-Modules", //33
		},
		{
			module: "MMM-Remote-Control", //34
			position: "center",
			
			config: {
				customCommand: {},  // Optional, See "Using Custom Commands" below
				customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
				showModuleApiMenu: true, // Optional, Enable the  Controls menu
				apiKey: "",         // Optional, See API/README.md for details
			}
		},
		{
			module: "MMM-darksky-hourly", //35
			position: "top_left",  // This can be any of the regions.
			config: {
				// See "Configuration options" for more information.
				apiKey: "8d7f5d22ed1974d6b4869c9304b39f50", // Dark Sky API key.
				latitude:   37.37988109409138,
				longitude: 126.9287487782795,
				language: "ko",
			}
		},
		{
			module: "MMM-Carousel", //36
			position: "bottom_bar", // Required only for navigation controls
			config: {
				ignoreModules: ["alert"],
				mode: "slides",
				showPageIndicators: true,
				showPageControls: true,
				slides: {
					main: ["mm-hide-all","WhatAge","MMM-Dynamic-Modules","clock","MMM-Testpython","camera","MMM-DeleteImage"],
					"Slide 2": ["mm-hide-all","clock","CategoryHairstyle","CategorySelectMain"],
					//main: ["clock","currentweather","weatherforecast","MMM-Globe","newsfeed","mm-hide-all","clock","MMM-Avinor"],
					"Slide 3": ["MMM-AirTest"],
					"Slide 4": ["SecondAirport-1F","SecondAirport-2F","SecondAirport-3F","FirstAirport-3F","FirstAirport-2F","CategoryChoiceAirport","FirstAirport-1F","mm-hide-all","The1Airport","The2Airport"],
					"Slide 5": ["MMM-Remote-Control","ShowRemoteControl","mm-hide-all"],
				},
				keyBindings: { 
					enabled: true,
					map: {
						NextSlide: "ArrowRight", 
						PrevSlide: "ArrowLeft", 
						Slide0:    "Home"
					},
					mode: "DEFAULT"
				}
			}
			
		},
		{
			module: "CategoryChoiceAirport", //37
			position: "top_bar", 
			header:"공항 지도",
			classes: "default everyone",
			config: {
			}
		}, 
		{
			module: "FirstAirport-1F", //38
			position: "lower_third",
			header:"  1여객 1층 ",
			config: {
				imagePaths: ["modules/FirstAirport-1F/before"]
			}
		}, 
		{
			module: "FirstAirport-2F", //39
			position: "lower_third",
			header:"  1여객 2층 ",
			config: {
				imagePaths: ["modules/FirstAirport-2F/before"]
			}
		},//37
		{
			module: "FirstAirport-3F", //40
			position: "lower_third",
			header:"  1여객 3층 ",
			config: {
				imagePaths: ["modules/FirstAirport-3F/before"]
			}
		},//38
		{
			module: "SecondAirport-1F", //41
			position: "lower_third",
			header:"  2여객 1층 ",
			config: {
				imagePaths: ["modules/SecondAirport-1F/before"]
			}
		}, //39
		{
			module: "SecondAirport-2F", //42
			position: "lower_third",
			header:"  2여객 2층 ",
			config: {
				imagePaths: ["modules/SecondAirport-2F/before"]
			}
		},//40
		{
			module: "SecondAirport-3F", //43
			position: "lower_third",
			header:"  2여객 3층 ",
			config: {
				imagePaths: ["modules/SecondAirport-3F/before"]
			}
		},//41
		{
			module: "The1Airport",  //44
			position: "top_bar",
			classes: "default everyone", 
			config: {
			}
		},//42
		{
			module: "The2Airport",  //45
			position: "top_bar",
			classes: "default everyone", 
			config: {
			}
		},//43
		
		{	
			module: "currentweather",
			position: "top_right",
			header: "    오늘의 날씨",
			config: {
				location: "Seoul",
				locationID: "1835847",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "f167f10ed5044b1a287054c8ccfb6730",                            
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "날씨",
			config: {
				location: "Anyang",
				locationID: "1835847",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "f167f10ed5044b1a287054c8ccfb6730"
			}
		},            
		{
			module: "MMM-Globe",                 // photo
			position: "middle_center",
			config: {
				style: "geoColor",
				imageSize: 300,
				ownImagePath:"http://rammb.cira.colostate.edu/ramsdis/online/images/thumb/himawari-8/full_disk_ahi_natural_color.jpg",
				updateInterval: 10*60*1000
			}
		},    
		{
			module: "alert",
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "newsfeed",
			position: "bottom_center",
			config: {
			feeds: 
				[{
				title: "사회 , 경제  ",
				url: "http://media.daum.net/rss/part/primary/entertain/rss2.xml" 
				},
				{
				title: "스포츠  ",
				url: "http://media.daum.net/rss/today/primary/sports/rss2.xml" 
				},
				{
				title: "연예  ",
				url: "http://api.sbs.co.kr/xml/news/rss.jsp?pmDiv=entertainment" 
				},
				{
				title: "IT , 과학  ",
				url: "http://media.daum.net/rss/part/primary/digital/rss2.xml" 
				},
				],
				showSourceTitle: true,
				showPublishDate: false
			}
		},
		{
			module: "mm-hide-all",
			position: "bottom_right"
		},
		{
			module: "MMM-DeleteImage",
			position: "bottom_right"
		},
		{
			module: "MMM-Avinor",
			position: "middle_center", //top_bar, top_left, top_center, top_right, upper_third, middle_center, lower_third, bottom_left, bottom_center, bottom_right, bottom_bar, fullscreen_above, and fullscreen_below
			config: {
				refreshInterval: 5 * 60 * 1000, // every 5 minutes
				httpRequestURL: "https://flydata.avinor.no/XmlFeed.asp?TimeFrom=1&TimeTo=12&airport=OSL&lastUpdate=",
				tableLength: 5,
				minTimeDiff: 2,
				timeZone: 1,
				layout:2,
			}
		},
		{
			module: 'camera',
			position: 'lower_third',
			config: {
				selfieInterval: 3,  // Time interval in seconds before the photo will be taken.
				emailConfig: {
					service: 'Hotmail', // Email provider to use to send email with a photo.
					auth: {
						user: '<emrhssla@gmail.com>', // Your email account
						pass: '<em89138913@#>'        // Your password for email account
						}
					}
				}
		},
		{
			module: "WhatAge",
			position: "upper_third",
			header:"내가 가는 나라의 핫플레이스는?",
			config: {
				imagePaths: ["modules/WhatAge/Button"]
			}
		},
		{
			module: 'MMM-ImageSlideshow', 
			position: 'bottom_left',
			config: {
				imagePaths: ['modules/CategoryChoiceAfrica']
			}
		},
		{
			module: 'MMM-ImageSlideshow1',
			position: 'bottom_left',
			config: {
				imagePaths: ['modules/CategoryChoiceAsia']
			}
		},
		{
			module: 'MMM-ImageSlideshow2',
			position: 'bottom_right',
			config: {
				imagePaths: ['modules/CategoryChoiceAmerica']
			}
		},
		{
			module: "MMM-AirTest",
			position: "bottom_right",
			config:{
			}
			
		},
		{
			module: "ShowRemoteControl", //24
			position: "bottom_center",	// This can be any of the regions.
			config: {
				// See "Configuration options" for more information.
					url: ["http://127.0.0.1:9000/remote.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "600", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe
				}
		},
		{
			module:"CHANGE_CLOCK"
		},
		{
			module:"CHANGE_WEATHER"
		},
		{
			module:"CHANGE_NEWSFEED"
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
