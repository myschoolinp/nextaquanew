function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var b=t[a];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{KY1H:function(e,t,a){"use strict";a.r(t);var b,i,o=a("ofXK"),n=a("tyNb"),r=a("fXoL"),s=a("++gc"),d=[{path:"",component:(b=function(){function e(t){_classCallCheck(this,e),this.commonService=t,this.imageList=[{url:"assets/images/Products/01.png",name:"Feeder"},{url:"assets/images/Products/02.png",name:"Moving Feeder"},{url:"assets/images/Products/08.png",name:"Feed Mixer"},{url:"assets/images/Products/03.png",name:"iFarm"},{url:"assets/images/Products/04.png",name:"Starter 2.0"},{url:"assets/images/Products/05.png",name:"Blower Changeover"},{url:"assets/images/Products/06.png",name:"PowerMon"},{url:"assets/images/Products/07.png",name:"APFC"}]}return _createClass(e,[{key:"ngOnInit",value:function(){this.updatecounter()}},{key:"isImageLoaded",value:function(e){}},{key:"updatecounter",value:function(){$("#exampleModal2").on("hidden.bs.modal",(function(e){$("#exampleModal2 iframe").attr("src",$("#exampleModal2 iframe").attr("src"))})),$(".header-inner").css({"background-color":"transparent"}),$(".counter").counterUp({time:2e3}),SVGInject(document.querySelectorAll("img.svgInject"),{makeIdsUnique:!0,afterInject:function(e,t){new Vivus(t,{duration:80})}}),$("[data-vivus-hover]").hover((function(){var e=$(this).find("svg")[0];new Vivus(e,{duration:50})})),$(".scene").each((function(){new Parallax($(this)[0])}))}},{key:"switchToPage",value:function(e){window.open("https://wa.me/+919866805070/?text=".concat(e))}}]),e}(),b.\u0275fac=function(e){return new(e||b)(r.Jb(s.a))},b.\u0275cmp=r.Db({type:b,selectors:[["app-home"]],decls:251,vars:0,consts:[[1,"main-search-active"],[1,"sidebar-search-icon"],[1,"search-close"],[1,"pe-7s-close"],[1,"sidebar-search-input"],["action","#"],[1,"form-search"],["id","search","value","","placeholder","","type","search",1,"input-text"],[1,"fa","fa-search"],[1,"form-description"],["data-overlay","0.5",1,"intro-section","section","backImageStyle",2,"background-image","url(assets/images/banner/Home.png)"],[1,"container"],[1,"row","row-cols-lg-1","row-cols-1"],[1,"col","align-self-center"],[1,"intro-content-two","headline-active","text-center","mt-xl-8","mt-lg-8","mt-md-8","mt-sm-8","mt-xs-8","textitem-1"],[1,"title","ah-headline",2,"font-size","36px"],[1,"ah-words-wrapper"],[1,"intro-content-two","headline-active","text-center","mt-xl-8","mt-lg-8","mt-md-8","mt-sm-8","mt-xs-8","textitem-2"],[1,"intro-content-two","headline-active","text-center","mt-xl-8","mt-lg-8","mt-md-8","mt-sm-8","mt-xs-8","textitem-3"],[1,"section","section-padding-t90-b100"],[1,"row"],[1,"col-lg-8","m-auto"],["data-aos","fade-up",1,"about-content-full","text-center","mb-lg-10","mb-0"],[1,"title"],[1,"col-12"],[1,"video-popup-area"],["data-aos","fade-up",1,"skill-video","text-center"],["src","assets/images/video/Video.jpg","alt","video popup",1,"image",2,"max-width","95%"],["data-toggle","modal","data-target","#exampleModal2",1,"icon"],[1,"fas","fa-play"],["data-bg-color","#f8faff",1,"section","section-padding",2,"background-color","#f8faff"],[1,"col-lg-12","mx-auto"],["data-aos","fade-up",1,"col-12","col-sm-12","col-md-4","mb-6"],[1,"funfact",2,"border-right","1px solid #e2e2e2"],[1,"number"],[1,"counter"],[1,"text"],[1,"funfact"],[1,"section","mt-5","text-center"],[1,"section","section-padding-t90-b100",2,"padding-top","13px"],["src","assets/images/img/homeProduct.jpg","alt","video popup",1,"image",2,"max-width","60%"],[1,"section","section-padding-t100-b70","mt-4"],[2,"color","#989898"],[1,"mb-5"],[1,"container","text-center"],[1,"section","mt-5"],[1,"section-title-two","text-center","d-block","d-sm-none"],["data-aos","fade-up",1,"col-xl-7","col-sm-6","col-12"],[1,"about-image-area",2,"display","flex","place-content","center","align-items","center"],[1,"js-tilt"],["src","assets/images/aboutus/5.svg","alt","",2,"max-width","300px"],["data-aos","fade-up",1,"col-xl-5","col-sm-6","col-12"],[1,"about-content-area","allcenter",2,"text-align","center"],[1,"section-title-two","d-none","d-sm-block"],["href","#",1,"mt-xl-12","mt-lg-8","mt-md-6","mt-4"],["routerLink","/Powermon",1,"btn-hover-secondary",2,"text-decoration","underline","color","#0d95fb"],["routerLink","/Starter",1,"btn-hover-secondary",2,"text-decoration","underline","color","#0d95fb"],[1,"btn-hover-secondary",2,"text-decoration","underline","color","#0d95fb",3,"click"],["data-aos","fade-up",1,"col-xl-5","col-sm-6","col-12","d-none","d-sm-block"],[1,"section-title-two","starterCon"],["routerLink","/Feeder",1,"btn-hover-secondary",2,"text-decoration","underline","color","#0d95fb"],["src","assets/images/aboutus/6.svg","alt","",2,"max-width","300px"],["data-aos","fade-up",1,"col-xl-5","col-sm-6","d-block","d-sm-none"],[1,"about-image-area","allcenter",2,"display","flex","place-content","center","align-items","center"],["src","assets/images/aboutus/7.svg","alt","",2,"max-width","300px"],[1,"section-title-two","text-center"],[1,"section-title-two","starterCon","d-none","d-sm-block"],["src","assets/images/img/ourservice.jpg"],["data-bg-color","#f8faff",1,"section","section-padding-t90-b100"],[1,"container","shape-animate"],["data-aos","fade-up",1,"section-title","text-center","mb-lg-12","mb-sm-8","mb-xs-8"],[1,"title",2,"font-size","36px"],[1,"sub-title"],[1,"row","row-cols-lg-3","row-cols-md-2","row-cols-sm-2","row-cols-1","mb-n6"],["data-aos","fade-up",1,"col","mb-6"],["data-vivus-hover","",1,"contact-info",2,"flex-wrap","nowrap"],[1,"icon"],["src","assets/images/svg/linea/linea-basic-map.svg","alt","",1,"svgInject"],[1,"info"],[1,"info-text"],["data-vivus-hover","",1,"contact-info"],["src","assets/images/svg/linea/linea-basic-message-txt.svg","alt","",1,"svgInject"],["src","assets/images/svg/linea/linea-basic-mail-open-text.svg","alt","",1,"svgInject"],["href","#"],[1,"shape","shape-1","scene"],["data-depth","4"],["src","assets/images/shape-animation/video-shape-1.png","alt","shape"],["id","exampleModal2","tabindex","-1","role","dialog","aria-labelledby","exampleModalLabel2","aria-hidden","true",1,"modal","fade",2,"background-color","#323232","z-index","99999"],["role","document",1,"modal-dialog","modal-dialog-centered","modal-dialog-zoom","modal-lg",2,"min-width","90%","min-height","90%"],[1,"modal-content",2,"border-radius","30px","background-color","black"],[1,"modal-body","p-0"],["id","youtubeVideo","src","https://www.youtube.com/embed/lIF8vkwU6LI","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",1,"youtubeVideo",2,"height","100%","padding","0px","border-radius","25px","border","none","width","100%","height","400px"]],template:function(e,t){1&e&&(r.Mb(0,"div",0),r.Mb(1,"div",1),r.Mb(2,"button",2),r.Kb(3,"i",3),r.Lb(),r.Lb(),r.Mb(4,"div",4),r.Mb(5,"form",5),r.Mb(6,"div",6),r.Kb(7,"input",7),r.Mb(8,"button"),r.Kb(9,"i",8),r.Lb(),r.Lb(),r.Lb(),r.Mb(10,"p",9),r.Zb(11,"Hit enter to search or ESC to close"),r.Lb(),r.Lb(),r.Lb(),r.Mb(12,"div",10),r.Mb(13,"div",11),r.Mb(14,"div",12),r.Mb(15,"div",13),r.Mb(16,"div",14),r.Mb(17,"h2",15),r.Zb(18,"WE EMPOWER FARMERES"),r.Kb(19,"span",16),r.Lb(),r.Mb(20,"h2",15),r.Zb(21," WITH TECHNOLOGY"),r.Lb(),r.Lb(),r.Mb(22,"div",17),r.Mb(23,"h2",15),r.Zb(24,"ONE PLATFORM FOR"),r.Kb(25,"span",16),r.Lb(),r.Mb(26,"h2",15),r.Zb(27," ALL YOUR FARM NEEDS"),r.Lb(),r.Lb(),r.Mb(28,"div",18),r.Mb(29,"h2",15),r.Zb(30,"WE EMPOWER FARMERES"),r.Kb(31,"span",16),r.Lb(),r.Mb(32,"h2",15),r.Zb(33," WITH TECHNOLOGY"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(34,"div",19),r.Mb(35,"div",11),r.Mb(36,"div",20),r.Mb(37,"div",21),r.Mb(38,"div",22),r.Mb(39,"h2",23),r.Zb(40,"One platform for all your farm needs"),r.Lb(),r.Mb(41,"p"),r.Zb(42,"Technology and Automation (IoT) platforms have potential to empower the aquaculture farmer and create new ways to manage the farm. One thing must happen first, the platform has to solve farmers real and recurring problems."),r.Lb(),r.Lb(),r.Lb(),r.Mb(43,"div",24),r.Mb(44,"div",25),r.Mb(45,"div",26),r.Kb(46,"img",27),r.Mb(47,"a",28),r.Kb(48,"i",29),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(49,"div",30),r.Mb(50,"div",11),r.Mb(51,"div",20),r.Mb(52,"div",31),r.Mb(53,"div",20),r.Mb(54,"div",32),r.Mb(55,"div",33),r.Mb(56,"div",34),r.Mb(57,"span",35),r.Zb(58,"1500"),r.Lb(),r.Lb(),r.Mb(59,"h6",36),r.Zb(60,"Devices Deployed"),r.Lb(),r.Lb(),r.Lb(),r.Mb(61,"div",32),r.Mb(62,"div",33),r.Mb(63,"div",34),r.Mb(64,"span",35),r.Zb(65,"150"),r.Lb(),r.Lb(),r.Mb(66,"h6",36),r.Zb(67,"Sites"),r.Lb(),r.Lb(),r.Lb(),r.Mb(68,"div",32),r.Mb(69,"div",37),r.Mb(70,"div",34),r.Mb(71,"span",35),r.Zb(72,"6000"),r.Lb(),r.Lb(),r.Mb(73,"h6",36),r.Zb(74,"Acres Covered"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(75,"div",38),r.Mb(76,"h2"),r.Zb(77,"Our Products"),r.Lb(),r.Lb(),r.Mb(78,"div",39),r.Mb(79,"div",11),r.Mb(80,"div",20),r.Mb(81,"div",24),r.Mb(82,"div",25),r.Mb(83,"div",26),r.Kb(84,"img",40),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(85,"div",41),r.Mb(86,"div",11),r.Mb(87,"div",20),r.Mb(88,"div",21),r.Mb(89,"div",22),r.Mb(90,"h2",23),r.Zb(91,"Who are we "),r.Lb(),r.Kb(92,"hr",42),r.Mb(93,"p"),r.Zb(94," NextAqua, an Indian AgriTech Startup established in 2018 with Aquaculture in focus. We empower farmers with end to end solutions powered by IOT enabled custom built Farm equipments. Our diversified founders team bring in wealth of experience from Electronics, Software as well as Mechanical, that enabled us to architect and build technologies and manufacturing processes from ground up. All our products are designed and manufactured at our inhouse development center and agile manufacturing unit located in Hyderabad."),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(95,"section",43),r.Mb(96,"div",44),r.Mb(97,"h2"),r.Zb(98,"What we are solving"),r.Lb(),r.Kb(99,"hr",42),r.Lb(),r.Lb(),r.Mb(100,"div",45),r.Mb(101,"div",11),r.Mb(102,"div",20),r.Mb(103,"div",46),r.Mb(104,"h3",23),r.Zb(105,"Aerators Faults and Power Bills"),r.Lb(),r.Lb(),r.Mb(106,"div",47),r.Mb(107,"div",48),r.Mb(108,"div",49),r.Kb(109,"img",50),r.Lb(),r.Lb(),r.Lb(),r.Mb(110,"div",51),r.Mb(111,"div",52),r.Mb(112,"div",53),r.Mb(113,"h3",23),r.Zb(114,"Aerators Faults and Power Bills"),r.Lb(),r.Lb(),r.Mb(115,"p"),r.Zb(116,"Aerators are critical for maintaining DO in the nights. Power cost is about 8 to 17% of production cost."),r.Lb(),r.Mb(117,"a",54),r.Mb(118,"a",55),r.Zb(119,"PowerMon V3.0"),r.Lb(),r.Zb(120," | "),r.Mb(121,"a",56),r.Zb(122,"Starter 2.0"),r.Lb(),r.Zb(123," | "),r.Mb(124,"a",57),r.Tb("click",(function(){return t.switchToPage("Blower Changeover")})),r.Zb(125,"Blower Changeover"),r.Lb(),r.Zb(126," | "),r.Mb(127,"a",57),r.Tb("click",(function(){return t.switchToPage("APFC")})),r.Zb(128,"APFC"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(129,"div",45),r.Mb(130,"div",11),r.Mb(131,"div",20),r.Mb(132,"div",46),r.Mb(133,"h3",23),r.Zb(134,"Feeding And Applications"),r.Lb(),r.Lb(),r.Mb(135,"div",58),r.Mb(136,"div",52),r.Mb(137,"div",59),r.Mb(138,"h3",23),r.Zb(139,"Feeding And Applications "),r.Lb(),r.Lb(),r.Mb(140,"p"),r.Zb(141,"This is the right time to adopt Auto Feeders in India, specially post COVID era."),r.Lb(),r.Mb(142,"a",54),r.Mb(143,"a",60),r.Zb(144,"Feeder 60kg, 100kg"),r.Lb(),r.Zb(145," | "),r.Mb(146,"a",57),r.Tb("click",(function(){return t.switchToPage("Moving Feeder Feed")})),r.Zb(147,"Moving Feeder Feed"),r.Lb(),r.Zb(148," | "),r.Mb(149,"a",57),r.Tb("click",(function(){return t.switchToPage("Mixer")})),r.Zb(150,"Mixer"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(151,"div",47),r.Mb(152,"div",48),r.Mb(153,"div",49),r.Kb(154,"img",61),r.Lb(),r.Lb(),r.Lb(),r.Mb(155,"div",62),r.Mb(156,"div",52),r.Mb(157,"div",53),r.Mb(158,"h3",23),r.Zb(159,"Feeding And Applications"),r.Lb(),r.Lb(),r.Mb(160,"p"),r.Zb(161,"This is the right time to adopt Auto Feeders in India, specially post COVID era."),r.Lb(),r.Mb(162,"a",54),r.Mb(163,"a",60),r.Zb(164,"Feeder 60kg, 100kg"),r.Lb(),r.Zb(165," | "),r.Mb(166,"a",57),r.Tb("click",(function(){return t.switchToPage("Moving Feeder Feed")})),r.Zb(167,"Moving Feeder Feed"),r.Lb(),r.Zb(168," | "),r.Mb(169,"a",57),r.Tb("click",(function(){return t.switchToPage("Mixer")})),r.Zb(170,"Mixer"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(171,"div",45),r.Mb(172,"div",11),r.Mb(173,"div",20),r.Mb(174,"div",46),r.Mb(175,"h3",23),r.Zb(176,"Custom Apps And Inventory"),r.Lb(),r.Lb(),r.Mb(177,"div",47),r.Mb(178,"div",63),r.Mb(179,"div",49),r.Kb(180,"img",64),r.Lb(),r.Lb(),r.Lb(),r.Mb(181,"div",51),r.Mb(182,"div",52),r.Mb(183,"div",65),r.Mb(184,"div",66),r.Mb(185,"h3",23),r.Zb(186,"Custom Apps And Inventory"),r.Lb(),r.Lb(),r.Mb(187,"p"),r.Zb(188,"When great farmers are supported by great software and mobile Apps, it leads to great outcomes..."),r.Lb(),r.Mb(189,"a",54),r.Mb(190,"a",57),r.Tb("click",(function(){return t.switchToPage("Custom Apps")})),r.Zb(191,"Custom Apps"),r.Lb(),r.Zb(192," | "),r.Mb(193,"a",57),r.Tb("click",(function(){return t.switchToPage("Inventory 1.0")})),r.Zb(194,"Inventory 1.0"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Kb(195,"img",67),r.Mb(196,"div",68),r.Mb(197,"div",69),r.Mb(198,"div",70),r.Mb(199,"h2",71),r.Zb(200,"We don't just sell product and equipment to farmer"),r.Lb(),r.Mb(201,"p",72),r.Zb(202,"We offer convenience and service to farmer to build a dependable & trusted brand in Agriculture space ..."),r.Lb(),r.Lb(),r.Mb(203,"div",73),r.Mb(204,"div",74),r.Mb(205,"div",75),r.Mb(206,"div",76),r.Kb(207,"img",77),r.Lb(),r.Mb(208,"div",78),r.Mb(209,"h4",23),r.Zb(210,"Our Office"),r.Lb(),r.Mb(211,"span",79),r.Zb(212," #202, Vision ultima, Jayabheri Enclave, Gachibowli, Hyderabad- 500032"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(213,"div",74),r.Mb(214,"div",75),r.Mb(215,"div",76),r.Kb(216,"img",77),r.Lb(),r.Mb(217,"div",78),r.Mb(218,"h4",23),r.Zb(219,"Our Factory"),r.Lb(),r.Mb(220,"span",79),r.Zb(221," #8-66/1, Subhash Nagar, IDA, Jeedimetla, Hyderabad- 500055"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(222,"div",74),r.Mb(223,"div",80),r.Mb(224,"div",76),r.Kb(225,"img",81),r.Lb(),r.Mb(226,"div",78),r.Mb(227,"h4",23),r.Zb(228,"Whatsapp us"),r.Lb(),r.Mb(229,"span",79),r.Zb(230," (+91) 9866805070 "),r.Kb(231,"br"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(232,"div",74),r.Mb(233,"div",80),r.Mb(234,"div",76),r.Kb(235,"img",82),r.Lb(),r.Mb(236,"div",78),r.Mb(237,"h4",23),r.Zb(238," Help Desk"),r.Lb(),r.Mb(239,"span",79),r.Mb(240,"a",83),r.Zb(241,"contact@nextaqua.in"),r.Lb(),r.Kb(242,"br"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(243,"div",84),r.Mb(244,"span",85),r.Kb(245,"img",86),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(246,"div",87),r.Mb(247,"div",88),r.Mb(248,"div",89),r.Mb(249,"div",90),r.Kb(250,"iframe",91),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb())},directives:[n.b],styles:[".modal.fade[_ngcontent-%COMP%]   .modal-dialog.modal-dialog-zoom[_ngcontent-%COMP%]{transform:translate(0)scale(.5)}.modal.show[_ngcontent-%COMP%]   .modal-dialog.modal-dialog-zoom[_ngcontent-%COMP%]{transform:translate(0)scale(1)}.allCenter[_ngcontent-%COMP%]{display:flex;place-content:center;align-items:center}@media only screen and (min-width:991px){.starterCon[_ngcontent-%COMP%]{margin-top:80px}}"]}),b)}],c=((i=function e(){_classCallCheck(this,e)}).\u0275mod=r.Hb({type:i}),i.\u0275inj=r.Gb({factory:function(e){return new(e||i)},imports:[[n.c.forChild(d)],n.c]}),i);a.d(t,"HomeModule",(function(){return m}));var l,m=((l=function e(){_classCallCheck(this,e)}).\u0275mod=r.Hb({type:l}),l.\u0275inj=r.Gb({factory:function(e){return new(e||l)},imports:[[o.b,c]]}),l)}}]);