function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,a){for(var t=0;t<a.length;t++){var i=a[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,a,t){return a&&_defineProperties(e.prototype,a),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{KY1H:function(e,a,t){"use strict";t.r(a);var i,o,n=t("ofXK"),b=t("tyNb"),r=t("fXoL"),c=t("++gc"),s=[{path:"",component:(i=function(){function e(a){_classCallCheck(this,e),this.commonService=a,this.imageList=[{url:"assets/images/Products/01.png",name:"Feeder"},{url:"assets/images/Products/02.png",name:"Moving Feeder"},{url:"assets/images/Products/08.png",name:"Feed Mixer"},{url:"assets/images/Products/03.png",name:"iFarm"},{url:"assets/images/Products/04.png",name:"Starter 2.0"},{url:"assets/images/Products/05.png",name:"Blower Changeover"},{url:"assets/images/Products/06.png",name:"PowerMon"},{url:"assets/images/Products/07.png",name:"APFC"}]}return _createClass(e,[{key:"ngOnInit",value:function(){$("html, body").animate({scrollTop:0},"slow"),this.updatecounter(),$(".header-inner").css({"background-color":"black"})}},{key:"isImageLoaded",value:function(e){}},{key:"updatecounter",value:function(){$("#exampleModal2").on("hidden.bs.modal",(function(e){$("#exampleModal2 iframe").attr("src",$("#exampleModal2 iframe").attr("src"))})),$(".counter").counterUp({time:2e3}),SVGInject(document.querySelectorAll("img.svgInject"),{makeIdsUnique:!0,afterInject:function(e,a){new Vivus(a,{duration:80})}}),$("[data-vivus-hover]").hover((function(){var e=$(this).find("svg")[0];new Vivus(e,{duration:50})})),$(".scene").each((function(){new Parallax($(this)[0])}))}},{key:"switchToPage",value:function(e){window.open("https://wa.me/+919866805070/?text=".concat(e))}},{key:"sendWhatsappMessage",value:function(){window.open("https://wa.me/+919866805070/?text=i am interested")}}]),e}(),i.\u0275fac=function(e){return new(e||i)(r.Jb(c.a))},i.\u0275cmp=r.Db({type:i,selectors:[["app-home"]],decls:232,vars:0,consts:[[1,"main-search-active"],[1,"sidebar-search-icon"],[1,"search-close"],[1,"pe-7s-close"],[1,"sidebar-search-input"],["action","#"],[1,"form-search"],["id","search","value","","placeholder","","type","search",1,"input-text"],[1,"fa","fa-search"],[1,"form-description"],[1,"section","section-padding-t90-b100",2,"padding-bottom","60px"],[1,"container"],[1,"row"],[1,"col-12"],[1,"video-popup-area"],["data-aos","fade-up",1,"skill-video","text-center"],["src","assets/images/video/Video.jpg","alt","video popup",1,"image",2,"max-width","95%"],["data-toggle","modal","data-target","#exampleModal2",1,"icon"],[1,"fas","fa-play"],[1,"section",2,"margin-top","30px"],[1,"col-lg-8","m-auto"],["data-aos","fade-up",1,"about-content-full","text-center","mb-lg-10","mb-0"],[1,"title"],[1,"section","mt-5","text-center"],[1,"section","section-padding-t90-b100",2,"padding-top","13px"],["src","assets/images/img/homeProduct.jpg","alt","video popup",1,"image",2,"max-width","60%"],[1,"section","section-padding-t100-b70","mt-4"],[2,"color","#989898"],[1,"mb-5"],[1,"container","text-center"],[1,"section","mt-5"],[1,"section-title-two","text-center","d-block","d-sm-none"],["data-aos","fade-up",1,"col-xl-7","col-sm-6","col-12"],[1,"about-image-area",2,"display","flex","place-content","center","align-items","center"],[1,"js-tilt"],["src","assets/images/aboutus/5.svg","alt","",2,"max-width","300px"],["data-aos","fade-up",1,"col-xl-5","col-sm-6","col-12"],[1,"about-content-area","allcenter","text-left","text-left-center"],[1,"section-title-two","d-none","d-sm-block"],["href","#",1,"mt-xl-12","mt-lg-8","mt-md-6","mt-4"],["routerLink","/Powermon",1,"btn-hover-secondary",2,"text-decoration","underline","color","#0d95fb"],["routerLink","/Starter",1,"btn-hover-secondary",2,"text-decoration","underline","color","#0d95fb"],[1,"btn-hover-secondary",2,"text-decoration","underline","color","#0d95fb",3,"click"],["data-aos","fade-up",1,"col-xl-5","col-sm-6","col-12","d-none","d-sm-block"],[1,"about-content-area","allcenter",2,"text-align","right"],[1,"section-title-two","starterCon"],["routerLink","/Feeder",1,"btn-hover-secondary",2,"text-decoration","underline","color","#0d95fb"],["src","assets/images/aboutus/6.svg","alt","",2,"max-width","300px"],["data-aos","fade-up",1,"col-xl-5","col-sm-6","d-block","d-sm-none"],[1,"about-content-area","allcenter",2,"text-align","center"],[1,"about-image-area","allcenter",2,"display","flex","place-content","center","align-items","center"],["src","assets/images/aboutus/7.svg","alt","",2,"max-width","300px"],[1,"section-title-two","text-left","text-left-center"],[1,"section-title-two","starterCon","d-none","d-sm-block"],["data-bg-color","#f8faff",1,"section","section-padding",2,"background-color","#f8faff"],[1,"col-lg-12","mx-auto"],["data-aos","fade-up",1,"col-12","col-sm-12","col-md-4","mb-6"],[1,"funfact",2,"border-right","1px solid #e2e2e2"],[1,"number"],[1,"counter"],[1,"text"],[1,"funfact"],["src","assets/images/img/ourservice.jpg"],["data-bg-color","#f8faff",1,"section","section-padding-t90-b100"],[1,"container","shape-animate"],["data-aos","fade-up",1,"section-title","text-center","mb-lg-12","mb-sm-8","mb-xs-8"],[1,"title",2,"font-size","36px"],[1,"sub-title"],[1,"row","row-cols-lg-3","row-cols-md-2","row-cols-sm-2","row-cols-1","mb-n6"],["data-aos","fade-up",1,"col","col-lg-6","mb-6"],["data-vivus-hover","",1,"contact-info",2,"flex-wrap","nowrap"],[1,"icon"],["src","assets/images/svg/linea/linea-basic-map.svg","alt","",1,"svgInject"],[1,"info"],[1,"info-text"],["data-aos","fade-up",1,"col","col-lg-6","mb-6",2,"cursor","pointer",3,"click"],["data-vivus-hover","",1,"contact-info"],["src","assets/images/svg/linea/linea-basic-message-txt.svg","alt","",1,"svgInject"],["src","assets/images/svg/linea/linea-basic-mail-open-text.svg","alt","",1,"svgInject"],["href","#"],[1,"shape","shape-1","scene"],["data-depth","4"],["src","assets/images/shape-animation/video-shape-1.png","alt","shape"],["id","exampleModal2","tabindex","-1","role","dialog","aria-labelledby","exampleModalLabel2","aria-hidden","true",1,"modal","fade",2,"background-color","#323232","z-index","99999"],["role","document",1,"modal-dialog","modal-dialog-centered","modal-dialog-zoom","modal-lg",2,"min-width","90%","min-height","90%"],[1,"modal-content",2,"border-radius","30px","background-color","black"],[1,"modal-body","p-0"],["id","youtubeVideo","src","https://www.youtube.com/embed/lIF8vkwU6LI","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",1,"youtubeVideo",2,"height","100%","padding","0px","border-radius","25px","border","none","width","100%","height","400px"]],template:function(e,a){1&e&&(r.Mb(0,"div",0),r.Mb(1,"div",1),r.Mb(2,"button",2),r.Kb(3,"i",3),r.Lb(),r.Lb(),r.Mb(4,"div",4),r.Mb(5,"form",5),r.Mb(6,"div",6),r.Kb(7,"input",7),r.Mb(8,"button"),r.Kb(9,"i",8),r.Lb(),r.Lb(),r.Lb(),r.Mb(10,"p",9),r.ac(11,"Hit enter to search or ESC to close"),r.Lb(),r.Lb(),r.Lb(),r.Mb(12,"div",10),r.Mb(13,"div",11),r.Mb(14,"div",12),r.Mb(15,"div",13),r.Mb(16,"div",14),r.Mb(17,"div",15),r.Kb(18,"img",16),r.Mb(19,"a",17),r.Kb(20,"i",18),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(21,"div",19),r.Mb(22,"div",11),r.Mb(23,"div",12),r.Mb(24,"div",20),r.Mb(25,"div",21),r.Mb(26,"h2",22),r.ac(27,"One platform for all your farm needs"),r.Lb(),r.Mb(28,"p"),r.ac(29,"Technology and Automation (IoT) platforms have potential to empower the aquaculture farmer and create new ways to manage the farm. One thing must happen first, the platform has to solve farmers real and recurring problems."),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(30,"div",23),r.Mb(31,"h2"),r.ac(32,"Our Products"),r.Lb(),r.Lb(),r.Mb(33,"div",24),r.Mb(34,"div",11),r.Mb(35,"div",12),r.Mb(36,"div",13),r.Mb(37,"div",14),r.Mb(38,"div",15),r.Kb(39,"img",25),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(40,"div",26),r.Mb(41,"div",11),r.Mb(42,"div",12),r.Mb(43,"div",20),r.Mb(44,"div",21),r.Mb(45,"h2",22),r.ac(46,"Who are we "),r.Lb(),r.Kb(47,"hr",27),r.Mb(48,"p"),r.ac(49," NextAqua, an Indian AgriTech Startup established in 2018 with Aquaculture in focus. We empower farmers with end to end solutions powered by IOT enabled custom built Farm equipments. Our diversified founders team bring in wealth of experience from Electronics, Software as well as Mechanical, that enabled us to architect and build technologies and manufacturing processes from ground up. All our products are designed and manufactured at our inhouse development center and agile manufacturing unit located in Hyderabad."),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(50,"section",28),r.Mb(51,"div",29),r.Mb(52,"h2"),r.ac(53,"What we are solving"),r.Lb(),r.Kb(54,"hr",27),r.Lb(),r.Lb(),r.Mb(55,"div",30),r.Mb(56,"div",11),r.Mb(57,"div",12),r.Mb(58,"div",31),r.Mb(59,"h3",22),r.ac(60,"Aerators Faults and Power Bills"),r.Lb(),r.Lb(),r.Mb(61,"div",32),r.Mb(62,"div",33),r.Mb(63,"div",34),r.Kb(64,"img",35),r.Lb(),r.Lb(),r.Lb(),r.Mb(65,"div",36),r.Mb(66,"div",37),r.Mb(67,"div",38),r.Mb(68,"h3",22),r.ac(69,"Aerators Faults and Power Bills"),r.Lb(),r.Lb(),r.Mb(70,"p"),r.ac(71,"Aerators are critical for maintaining DO in the nights. Power cost is about 8 to 17% of production cost."),r.Lb(),r.Mb(72,"a",39),r.Mb(73,"a",40),r.ac(74,"PowerMon V3.0"),r.Lb(),r.ac(75," | "),r.Mb(76,"a",41),r.ac(77,"Starter 2.0"),r.Lb(),r.ac(78," | "),r.Mb(79,"a",42),r.Tb("click",(function(){return a.switchToPage("Blower Changeover")})),r.ac(80,"Blower Changeover"),r.Lb(),r.ac(81," | "),r.Mb(82,"a",42),r.Tb("click",(function(){return a.switchToPage("APFC")})),r.ac(83,"APFC"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(84,"div",30),r.Mb(85,"div",11),r.Mb(86,"div",12),r.Mb(87,"div",31),r.Mb(88,"h3",22),r.ac(89,"Feeding And Applications"),r.Lb(),r.Lb(),r.Mb(90,"div",43),r.Mb(91,"div",44),r.Mb(92,"div",45),r.Mb(93,"h3",22),r.ac(94,"Feeding And Applications "),r.Lb(),r.Lb(),r.Mb(95,"p"),r.ac(96,"This is the right time to adopt Auto Feeders in India, specially post COVID era."),r.Lb(),r.Mb(97,"a",39),r.Mb(98,"a",46),r.ac(99,"Feeder 60kg, 100kg"),r.Lb(),r.ac(100," | "),r.Mb(101,"a",42),r.Tb("click",(function(){return a.switchToPage("Moving Feeder Feed")})),r.ac(102,"Moving Feeder Feed"),r.Lb(),r.ac(103," | "),r.Mb(104,"a",42),r.Tb("click",(function(){return a.switchToPage("Mixer")})),r.ac(105,"Mixer"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(106,"div",32),r.Mb(107,"div",33),r.Mb(108,"div",34),r.Kb(109,"img",47),r.Lb(),r.Lb(),r.Lb(),r.Mb(110,"div",48),r.Mb(111,"div",49),r.Mb(112,"div",38),r.Mb(113,"h3",22),r.ac(114,"Feeding And Applications"),r.Lb(),r.Lb(),r.Mb(115,"p"),r.ac(116,"This is the right time to adopt Auto Feeders in India, specially post COVID era."),r.Lb(),r.Mb(117,"a",39),r.Mb(118,"a",46),r.ac(119,"Feeder 60kg, 100kg"),r.Lb(),r.ac(120," | "),r.Mb(121,"a",42),r.Tb("click",(function(){return a.switchToPage("Moving Feeder Feed")})),r.ac(122,"Moving Feeder Feed"),r.Lb(),r.ac(123," | "),r.Mb(124,"a",42),r.Tb("click",(function(){return a.switchToPage("Mixer")})),r.ac(125,"Mixer"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(126,"div",30),r.Mb(127,"div",11),r.Mb(128,"div",12),r.Mb(129,"div",31),r.Mb(130,"h3",22),r.ac(131,"Custom Apps And Inventory"),r.Lb(),r.Lb(),r.Mb(132,"div",32),r.Mb(133,"div",50),r.Mb(134,"div",34),r.Kb(135,"img",51),r.Lb(),r.Lb(),r.Lb(),r.Mb(136,"div",36),r.Mb(137,"div",37),r.Mb(138,"div",52),r.Mb(139,"div",53),r.Mb(140,"h3",22),r.ac(141,"Custom Apps And Inventory"),r.Lb(),r.Lb(),r.Mb(142,"p"),r.ac(143,"When great farmers are supported by great software and mobile Apps, it leads to great outcomes..."),r.Lb(),r.Mb(144,"a",39),r.Mb(145,"a",42),r.Tb("click",(function(){return a.switchToPage("Custom Apps")})),r.ac(146,"Custom Apps"),r.Lb(),r.ac(147," | "),r.Mb(148,"a",42),r.Tb("click",(function(){return a.switchToPage("Inventory 1.0")})),r.ac(149,"Inventory 1.0"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(150,"div",54),r.Mb(151,"div",11),r.Mb(152,"div",12),r.Mb(153,"div",55),r.Mb(154,"div",12),r.Mb(155,"div",56),r.Mb(156,"div",57),r.Mb(157,"div",58),r.Mb(158,"span",59),r.ac(159,"1500"),r.Lb(),r.Lb(),r.Mb(160,"h6",60),r.ac(161,"Devices Deployed"),r.Lb(),r.Lb(),r.Lb(),r.Mb(162,"div",56),r.Mb(163,"div",57),r.Mb(164,"div",58),r.Mb(165,"span",59),r.ac(166,"150"),r.Lb(),r.Lb(),r.Mb(167,"h6",60),r.ac(168,"Sites"),r.Lb(),r.Lb(),r.Lb(),r.Mb(169,"div",56),r.Mb(170,"div",61),r.Mb(171,"div",58),r.Mb(172,"span",59),r.ac(173,"6000"),r.Lb(),r.Lb(),r.Mb(174,"h6",60),r.ac(175,"Acres Covered"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Kb(176,"img",62),r.Mb(177,"div",63),r.Mb(178,"div",64),r.Mb(179,"div",65),r.Mb(180,"h2",66),r.ac(181,"We don't just sell product and equipment to farmer"),r.Lb(),r.Mb(182,"p",67),r.ac(183,"We offer convenience and service to farmer to build a dependable & trusted brand in Agriculture space ..."),r.Lb(),r.Lb(),r.Mb(184,"div",68),r.Mb(185,"div",69),r.Mb(186,"div",70),r.Mb(187,"div",71),r.Kb(188,"img",72),r.Lb(),r.Mb(189,"div",73),r.Mb(190,"h4",22),r.ac(191,"Our Office"),r.Lb(),r.Mb(192,"span",74),r.ac(193," #202, Vision ultima, Jayabheri Enclave, Gachibowli, Hyderabad- 500032"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(194,"div",69),r.Mb(195,"div",70),r.Mb(196,"div",71),r.Kb(197,"img",72),r.Lb(),r.Mb(198,"div",73),r.Mb(199,"h4",22),r.ac(200,"Our Factory"),r.Lb(),r.Mb(201,"span",74),r.ac(202," #8-66/1, Subhash Nagar, IDA, Jeedimetla, Hyderabad- 500055"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(203,"div",75),r.Tb("click",(function(){return a.sendWhatsappMessage()})),r.Mb(204,"div",76),r.Mb(205,"div",71),r.Kb(206,"img",77),r.Lb(),r.Mb(207,"div",73),r.Mb(208,"h4",22),r.ac(209,"Whatsapp us"),r.Lb(),r.Mb(210,"span",74),r.ac(211," (+91) 9866805070 "),r.Kb(212,"br"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(213,"div",69),r.Mb(214,"div",76),r.Mb(215,"div",71),r.Kb(216,"img",78),r.Lb(),r.Mb(217,"div",73),r.Mb(218,"h4",22),r.ac(219," Help Desk"),r.Lb(),r.Mb(220,"span",74),r.Mb(221,"a",79),r.ac(222,"contact@nextaqua.in"),r.Lb(),r.Kb(223,"br"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(224,"div",80),r.Mb(225,"span",81),r.Kb(226,"img",82),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(227,"div",83),r.Mb(228,"div",84),r.Mb(229,"div",85),r.Mb(230,"div",86),r.Kb(231,"iframe",87),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb())},directives:[b.b],styles:[".modal.fade[_ngcontent-%COMP%]   .modal-dialog.modal-dialog-zoom[_ngcontent-%COMP%]{transform:translate(0)scale(.5)}.modal.show[_ngcontent-%COMP%]   .modal-dialog.modal-dialog-zoom[_ngcontent-%COMP%]{transform:translate(0)scale(1)}.allCenter[_ngcontent-%COMP%]{display:flex;place-content:center;align-items:center}@media only screen and (min-width:991px){.starterCon[_ngcontent-%COMP%]{margin-top:80px}}.text-left[_ngcontent-%COMP%]{text-align:left}@media only screen and (max-width:575px){.text-left-center[_ngcontent-%COMP%]{text-align:center}}"]}),i)}],d=((o=function e(){_classCallCheck(this,e)}).\u0275mod=r.Hb({type:o}),o.\u0275inj=r.Gb({factory:function(e){return new(e||o)},imports:[[b.c.forChild(s)],b.c]}),o);t.d(a,"HomeModule",(function(){return u}));var l,u=((l=function e(){_classCallCheck(this,e)}).\u0275mod=r.Hb({type:l}),l.\u0275inj=r.Gb({factory:function(e){return new(e||l)},imports:[[n.b,d]]}),l)}}]);