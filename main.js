const codeVer="230814 0.1.3";console.log(codeVer),$("div.codever").text(codeVer),$(".nav-link").on("mouseenter",function(){$(this).siblings(".nav-link").addClass("nothover")}),$(".nav-link").on("mouseleave",function(){$(this).siblings(".nav-link").removeClass("nothover")});let url=window.location.href;function timestamper(){let n=new Date,t=new Intl.DateTimeFormat("en",{year:"2-digit"}).format(n),a=new Intl.DateTimeFormat("en",{month:"short"}).format(n),i=new Intl.DateTimeFormat("en",{weekday:"short"}).format(n),u=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(n),e=new Intl.DateTimeFormat("en",{hour:"2-digit",minute:"2-digit",hour12:!1}).format(n);var r=`${e} ${i} ${a} ${u} ${t}`;$("input[timestamper]").val(r)}function locator(){navigator.geolocation?fetch("https://ipapi.co/json").then(n=>n.json()).then(n=>{$("input[name='countryISO']").val(n.country_code_iso3),$("input[name='countryName']").val(n.country_name),$("input[name='ip']").val(n.ip.replace(/\./g,"").replace(/:/g,""))}):$("input[name='countryISO']").val("error")}function spamChecker(){let n=[179167103,7584518,"2607fb9079bfda25a56d7e70ccb44a38"].find(n=>n==$("input[name='ip']").val());void 0!=n&&$("input[name='email']").val("")}if($(".m-button").on("click",function(){$(this).is(".active")?($(this).removeClass("active"),$(".nav-container").removeClass("active"),$(".body").removeClass("no-scroll")):($(this).addClass("active"),$(".nav-container").addClass("active"),$(".body").addClass("no-scroll"))}),$("[sect-1-hover]").on("mouseenter mouseleave",function(){$(this).find(".sect-1-card-1, .sect-1-card-2").toggleClass("swaphover")}),$("[contact-pop]").on("click",function(){$(".connect-pop").addClass("active"),$(".body").addClass("no-scroll")}),$("[closepop]").on("click",function(){$(this).closest(".connect-pop").removeClass("active"),$(".body").removeClass("no-scroll")}),$(".connect-section").find("input[name='formIDER']").val("section"),$(".connect-pop").find("input[name='formIDER']").val("popup"),$("[form-trigger]").on("click",function(){timestamper(),locator(),spamChecker(),setTimeout(()=>{$(this).siblings(".button-contact").trigger("click")},1000)}),url.includes("#contact-form")&&($(".connect-pop").addClass("active"),$(".body").addClass("no-scroll")),$("form").not('[data-name="customer-registration"]').on("click touchstart",function(){"AFG"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("1"):"ALB"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("2"):"DZA"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("3"):"ASM"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("4"):"AND"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("5"):"AGO"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("6"):"AIA"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("7"):"ATG"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("8"):"ARG"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("9"):"ARM"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("10"):"ABW"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("11"):"AUS"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("12"):"AUT"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("13"):"AZE"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("14"):"BHS"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("15"):"BHR"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("16"):"BGD"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("17"):"BRB"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("18"):"BLR"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("19"):"BEL"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("20"):"BLZ"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("21"):"BEN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("22"):"BMU"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("23"):"BTN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("24"):"BOL"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("25"):"BIH"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("26"):"BWA"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("27"):"BRA"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("28"):"BRN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("29"):"BGR"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("30"):"BFA"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("31"):"BDI"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("32"):"KHM"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("33"):"CMR"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("34"):"CAN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("35"):"CPV"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("36"):"CYM"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("37"):"CAF"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("38"):"TCD"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("39"):"CHL"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("40"):"CHN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("41"):"COL"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("42"):"COM"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("43"):"COD"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("44"):"COK"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("46"):"CRI"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("47"):"CIV"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("48"):"HRV"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("49"):"CUB"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("50"):"CYP"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("51"):"CZE"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("52"):"DNK"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("53"):"DJI"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("54"):"DMA"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("55"):"DOM"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("56"):"ECU"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("57"):"EGY"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("58"):"SLV"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("59"):"GNQ"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("60"):"ERI"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("61"):"EST"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("62"):"ETH"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("63"):"FLK"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("64"):"FRO"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("65"):"FJI"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("66"):"FIN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("67"):"FRA"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("68"):"GUF"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("69"):"PYF"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("70"):"GAB"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("71"):"GMB"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("72"):"GEO"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("73"):"DEU"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("74"):"GHA"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("75"):"GIB"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("76"):"GRC"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("77"):"GRL"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("78"):"GRD"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("79"):"GLP"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("80"):"GUM"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("81"):"GTM"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("82"):"GIN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("83"):"GNB"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("84"):"GUY"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("85"):"HTI"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("86"):"VAT"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("87"):"HND"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("88"):"HKG"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("89"):"HUN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("90"):"ISL"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("91"):"IND"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("92"):"IDN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("93"):"IRN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("94"):"GAB"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("95"):"IRL"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("96"):"ISR"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("97"):"ITA"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("98"):"JAM"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("99"):"JPN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("100"):"JOR"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("101"):"KAZ"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("102"):"KEN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("103"):"KIR"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("104"):"KOR"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("105"):"PRK"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("106"):"KWT"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("107"):"KGZ"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("108"):"LAO"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("109"):"LVA"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("110"):"LBN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("111"):"LSO"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("112"):"LBR"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("113"):"LBY"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("114"):"LIE"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("115"):"LTU"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("116"):"LUX"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("117"):"MAC"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("118"):"MKD"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("119"):"MDG"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("120"):"MWI"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("121"):"MYS"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("122"):"MDV"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("123"):"MLI"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("124"):"MLT"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("125"):"MHL"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("126"):"MTQ"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("127"):"MRT"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("128"):"MUS"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("129"):"MEX"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("130"):"FSM"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("131"):"MDA"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("132"):"MCO"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("133"):"MNG"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("134"):"MSR"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("135"):"MAR"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("136"):"MOZ"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("137"):"MMR"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("138"):"NAM"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("139"):"NRU"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("140"):"NPL"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("141"):"NLD"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("142"):"ANT"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("143"):"NCL"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("144"):"NZL"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("145"):"NIC"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("146"):"NER"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("147"):"NGA"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("148"):"NIU"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("149"):"NFK"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("150"):"MNP"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("151"):"NOR"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("152"):"OMN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("153"):"PAK"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("154"):"PLW"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("155"):"PAN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("156"):"PNG"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("157"):"PRY"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("158"):"PER"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("159"):"PHL"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("160"):"PCN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("161"):"POL"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("162"):"PRT"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("163"):"PRI"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("164"):"QAT"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("165"):"REU"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("166"):"ROU"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("167"):"RUS"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("168"):"RWA"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("169"):"SHN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("170"):"KNA"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("171"):"LCA"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("172"):"SPM"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("173"):"VCT"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("174"):"WSM"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("175"):"SMR"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("176"):"STP"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("177"):"SAU"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("178"):"SEN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("179"):"SYC"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("180"):"SLE"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("181"):"SGP"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("182"):"SVK"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("183"):"SVN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("184"):"SLB"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("185"):"SOM"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("186"):"ZAF"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("187"):"ESP"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("188"):"LKA"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("189"):"SDN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("190"):"SUR"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("191"):"SJM"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("192"):"SWZ"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("193"):"SWE"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("194"):"SYR"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("195"):"MEX"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("196"):"TWN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("197"):"TJK"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("198"):"TZA"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("199"):"THA"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("200"):"TGO"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("201"):"TKL"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("202"):"TON"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("203"):"TTO"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("204"):"TUN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("205"):"TUR"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("206"):"TKM"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("207"):"TCA"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("208"):"TUV"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("209"):"UGA"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("210"):"UKR"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("211"):"ARE"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("212"):"GBR"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("213"):"USA"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("214"):"URY"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("215"):"UZB"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("216"):"VUT"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("217"):"VEN"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("218"):"VNM"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("219"):"VGB"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("220"):"VIR"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("221"):"WLF"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("222"):"ESH"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("223"):"YEM"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("224"):"ZMB"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("225"):"ZWE"===$("input[name='countryISO']").val()?$(this).find('input[name="countryID"]').val("226"):$(this).find('input[name="countryID"]').val("undefined")}),$("input[name='preference']").val("No Preference"),$("[preference]").on("click",function(){$(this).toggleClass("checked");let n=$("[preference]").filter(".checked").map((n,t)=>t.name).toArray().join(", ");5===$(".checked[preference]").length?$("input[name='preference']").val("No Preference"):$(".checked[preference]").length?$("input[name='preference']").val(n):$("input[name='preference']").val("No Preference")}),$("input[name='agent']").val("false"),$("input[name='ratingID']").val("43584"),$("[agent]").on("click",function(){$("label[agent] .w-checkbox-input").is(".w--redirected-checked")?($("input[name='agent']").val("false"),$("input[name='ratingID']").val("43584")):($("input[name='agent']").val("true"),$("input[name='ratingID']").val("43585"))}),url.includes("?sbroker")||url.includes("?First")||url.includes("?Last")||url.includes("?Email")||url.includes("?Phone")||url.includes("?country")||url.includes("?Message")||url.includes("?preference")||url.includes("?countryID")||url.includes("?lang")||url.includes("?agent")||url.includes("?ratingID")||url.includes("?timestamper")||url.includes("?form")||url.includes("?utm_url")||url.includes("?current_url")){function n(){Cookies.remove("source"),Cookies.remove("medium"),Cookies.remove("campaign"),Cookies.remove("term")}window.open("https://www.shomabay.com/","_top"),setInterval(n,5e3)}url.includes("/es")?$("input[name='lang']").val("ES"):url.includes("/pt")?$("input[name='lang']").val("PT"):$("input[name='lang']").val("EN"),url.includes("/residences")||url.includes("/residencias")?$("input[name='form-id']").val("Residences"):url.includes("/floorplans")||url.includes("/planos")||url.includes("/plantas")?$("input[name='form-id']").val("Floorplans"):url.includes("/amenities")||url.includes("/amenidades")||url.includes("/comodidades")?$("input[name='form-id']").val("Amenities"):url.includes("/location")||url.includes("/localizacion")||url.includes("/localizacao")?$("input[name='form-id']").val("location"):url.includes("/team")||url.includes("/equipo")||url.includes("/equipe")?$("input[name='form-id']").val("team"):url.includes("/blog")?$("input[name='form-id']").val("blog"):url.includes("/press")||url.includes("/prensa")?$("input[name='form-id']").val("press"):url.includes("/customer-registration")?$("input[name='form-id']").val("customer registration"):$("input[name='form-id']").val("Home"),$(".hidden-form-fields:not(.show) input").attr("type","hidden"),$(".hidden-form-fields input").attr("readonly","readonly"),$.urlParam=function(n){var t=RegExp("[?&]"+n+"=([^]*)").exec(window.location.href);return null==t?null:t[1]||0};let cleanUrl=url.replace("https://www.shomabay.com/?","").replace("https://shomabay.webflow.io/?","");var inTwoMins=new Date(new Date().getTime()+12e4);if(null==!$.urlParam("utm_source")||""==!$.urlParam("utm_source")){var t=$.urlParam("utm_source").split("&")[0].replace(/\+/g," ").replace(/%20/g," ");"Presentation"==t||"mls"==t?Cookies.set("source",t,{expires:inTwoMins}):Cookies.set("source",t,{expires:30}),Cookies.set("url",cleanUrl,{expires:30})}if(null==!$.urlParam("utm_medium")||""==!$.urlParam("utm_medium")){var a=$.urlParam("utm_medium").split("&")[0].replace(/\+/g," ").replace(/%20/g," ");Cookies.set("medium",a,{expires:30})}if(null==!$.urlParam("utm_campaign")||""==!$.urlParam("utm_campaign")){var i=$.urlParam("utm_campaign").split("&")[0].replace(/\+/g," ").replace(/%20/g," ");Cookies.set("campaign",i,{expires:30})}if(null==!$.urlParam("utm_term")||""==!$.urlParam("utm_term")){var u=$.urlParam("utm_term").split("&")[0].replace(/\+/g," ").replace(/%20/g," ");Cookies.set("term",u,{expires:30})}$("input[name='current_url']").val(url),$("input[name='utm_url']").val(Cookies.get("url")),null==!Cookies.get("source")||""==!Cookies.get("source")?$("input[name='utm_source']").val(Cookies.get("source")):$("input[name='utm_source']").val("Direct"),$("input[name='utm_medium']").val(Cookies.get("medium")),$("input[name='utm_campaign']").val(Cookies.get("campaign")),$("input[name='utm_term']").val(Cookies.get("term")),"google"==Cookies.get("source")?"paid"==Cookies.get("medium")?($("[phoneNum]").attr("href","tel:+17863860647"),$("[phoneTx]").text("786-386-0647")):($("[phoneNum]").attr("href","tel:+17868825350"),$("[phoneTx]").text("786-882-5350")):$("input[name='utm_source']").is("[value='facebook']")?$("input[name='utm_medium']").is("[value='socialmedia']")?($("[phoneNum]").attr("href","tel:+17868826213"),$("[phoneTx]").text("786-882-6213")):($("[phoneNum]").attr("href","tel:+17868768185"),$("[phoneTx]").text("786-876-8185")):$("input[name='utm_source']").is("[value='eblast']")?($("[phoneNum]").attr("href","tel:+17868861787"),$("[phoneTx]").text("786-886-1787")):$("input[name='utm_medium']").is("[value='socialmedia']")?($("[phoneNum]").attr("href","tel:+17868826213"),$("[phoneTx]").text("786-882-6213")):$("input[name='utm_source']").is("[value*='printed']")?($("[phoneNum]").attr("href","tel:+17868337421"),$("[phoneTx]").text("786-833-7421")):$("input[name='utm_source']").is("[value*='mailer']")?($("[phoneNum]").attr("href","tel:+17868337421"),$("[phoneTx]").text("786-833-7421")):($("[phoneNum]").attr("href","tel:+17868825887"),$("[phoneTx]").text("786-882-5887"));
