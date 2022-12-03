var leftar =[195,455,715,975,1235,1495];
var topar =[435,775,1115,1455];
var skintemplate =`<div class="skin-bot">
									<div class="skin-view skin-view-font" onclick="popup(1,'inspecturl','searchwear','searchindex','searchid')">View</div>
									<div class="skin-price skin-name-font">skinprice¥ (skineuro€) </div>
									<!--  <div class="skin-price-change skim-green">€1.500</div> -->
									<div class="skin-float">
										<div class="skin-float-rank skin-float-font">skinwear</div>
										<div class="skin-float-num skin-float-font">skinfloat</div>
									</div>
									<div class="rarity"></div>
									<!--  <img class="skin-arrow-up"  src="./itemsort_files/arrow-up.svg"/> -->
								</div>
								<div class="skin-top"></div>
								<div class="skin-name skin-name-font">skinname</div>
								<img class="skin-image" src="skinimage?fop=imageView/2/w/320/h/300" />
								<img class="skin-sticker1" src="stickerpos1" onerror="this.style.display='none'"/>
								<img class="skin-sticker2" src="stickerpos2" onerror="this.style.display='none'"/>
								<img class="skin-sticker3" src="stickerpos3" onerror="this.style.display='none'"/>
								<img class="skin-sticker4" src="stickerpos4" onerror="this.style.display='none'"/>
								<div class="skin-sale">
									<div class="skin-sale-border"></div>
									<p class="skin-sale-text valign-text-middle opensans-bold-white-12px">
										<span>
											<span class="skin-status-font">Sold</span><span class="skin-date-font">&nbsp;</span><span class="skin-date-font">skintime</span>
										</span>
									</p>
								</div>`
var sel =[];
var ssel =[];
var sortbyid =[]
var items_saved = []
var last = 1;
var pages = 1;
var pmax = 0;
var loadpage ="sold"



function popup(m,url,wear,index,id) {
	
	if (m==0)document.getElementById('popup').style.visibility ="hidden"
	if (m==1){
	
	document.getElementById('popup').style.visibility ="visible"
	if (loadpage == "sold")var data =`<div class="popup-top-x  skin-view-font" onclick="popup(0,'')">✕</div>
		<iframe src="${url}" height="794" width="614" style="border:none;border-radius: 10px 0px 10px 10px;top:20px;position:absolute;"></iframe>`
	if (loadpage == "listed")var data = `<div class="popup-top">
											<a href="https://buff.163.com/goods/skinid?from=market#tab=selling&min_paintwear=skinwarlow&max_paintwear=skinwarhigh&page_num=1&paintseed=skinindex" target="_blank" rel="noopener noreferrer">
												<div class="popup-text-mid skin-view-font">Buy</div>
											</a>
											
										</div>
										<div class="popup-top-x  skin-view-font" onclick="popup(0,'')">✕</div>
										<iframe src="${url}" height="794" width="614" style="border:none;border-radius: 10px 0px 10px 10px;top:20px;position:absolute;"></iframe>`.replace("skinindex",index).replace("skinid",id).replace("skinwarlow",wear).replace("skinwarhigh",(wear+1));
	document.getElementById('popup').innerHTML = data
}}

function gunset(target) {
	
	document.getElementById(target).classList.toggle('ellipse');
	document.getElementById(target).classList.toggle('ellipsef');
    if (document.getElementById(target).classList=='ellipsef')sel.unshift(target);
    if (document.getElementById(target).classList=='ellipse')sel = sel.filter(function(item) {return item !== target})
	last = 1;
	window.history.replaceState('', '', updateURLParameter(window.location.href, "g", sel));
	loaditems(items_saved);
}
    
function selectsale(target) {
	if (target == 0){
		document.getElementById('selectsales').style.backgroundColor  =" #ea146f";
		document.getElementById('selectlisted').style.backgroundColor  ="transparent";
		window.history.replaceState('', '', updateURLParameter(window.location.href, "sa", "s"));
		loadpage = "sold";
		document.getElementById('sortchange1').innerHTML ='<spam id="sor5"  class="ellipse"></spam>Sold : Recently'
		document.getElementById('sortchange2').innerHTML ='<spam id="sor6"  class="ellipse"></spam>Sold : Long ago'
		fetch(`https://raw.githubusercontent.com/marnov999/Katocraft/main/${loadpage}/latest.json`)
		.then((response) => response.json())
		.then((json) =>loaditems(json))
	}
	if (target == 1){
		document.getElementById('selectlisted').style.backgroundColor  =" #ea146f";
		document.getElementById('selectsales').style.backgroundColor  ="transparent";
		window.history.replaceState('', '', updateURLParameter(window.location.href, "sa", "l"));
		loadpage = "listed"
		document.getElementById('sortchange1').innerHTML ='<spam id="sor5"  class="ellipse"></spam>Listed : Recently'
		document.getElementById('sortchange2').innerHTML ='<spam id="sor6"  class="ellipse"></spam>Listed : Long ago'
		fetch(`https://raw.githubusercontent.com/marnov999/Katocraft/main/${loadpage}/latest.json`)
		.then((response) => response.json())
		.then((json) =>loaditems(json))
	}
	
}

function stickerset(target) {
  document.getElementById(target).classList.toggle('sticker-frame');
  document.getElementById(target).classList.toggle('sticker-frame-selected');
  if (document.getElementById(target).classList=='sticker-frame-selected')ssel.unshift(target);
    if (document.getElementById(target).classList=='sticker-frame')ssel = ssel.filter(function(item) {return item !== target})
	last = 1;
	window.history.replaceState('', '', updateURLParameter(window.location.href, "si", ssel));
	loaditems(items_saved);
} 

function sortby(target) {
  document.getElementById(target).classList.toggle('ellipse');
  document.getElementById(target).classList.toggle('ellipsef');
  if (document.getElementById(target).classList=='ellipsef')sortbyid.unshift(target);
    if (document.getElementById(target).classList=='ellipse')sortbyid = sortbyid.filter(function(item) {return item !== target})
	
for (var i = 0; i < sortbyid.length; i++){
		if (sortbyid[i] != target){
		document.getElementById(sortbyid[i]).classList.toggle('ellipse');
		document.getElementById(sortbyid[i]).classList.toggle('ellipsef');
		sortbyid = sortbyid.filter(function(item) {return item !== sortbyid[i]})

		}
	}
	window.history.replaceState('', '', updateURLParameter(window.location.href, "s", sortbyid));
	loaditems(items_saved)
}

function pageset(id) {
	if(id == -1) id=last-1
	if(id == -2) id=last+1
	if(id>=1 && id<=pmax) last=id
	loaditems(items_saved);
}


function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = date + ' ' + month + ' ' + year + ' '  ;
  return time;
}

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

function updateURLParameter(url, param, paramVal){
    var newAdditionalURL = "";
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";
    if (additionalURL) {
        tempArray = additionalURL.split("&");
        for (var i=0; i<tempArray.length; i++){
            if(tempArray[i].split('=')[0] != param){
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }
    }

    var rows_txt = temp + "" + param + "=" + paramVal;
    return baseURL + "?" + newAdditionalURL + rows_txt;
}

window.addEventListener('load', function () {
	
	var urlString = document.URL;
    urlParams = parseURLParams(urlString);
	if(urlParams){
	console.log(urlParams)
	if(urlParams.hasOwnProperty('sa'))if(urlParams['sa']=="s")selectsale(0);
	if(urlParams.hasOwnProperty('sa'))if(urlParams['sa']=="l")selectsale(1);
	if(urlParams.hasOwnProperty('se'))if(urlParams['se'][0]) document.getElementById('search').value = urlParams['se'][0];
	if(urlParams.hasOwnProperty('s'))if(urlParams['s'][0])  sortby(urlParams['s'][0]);
	if(urlParams.hasOwnProperty('g'))if(urlParams['g'][0]) for(var x =  urlParams['g'][0].split(',').length-1; 0<=x;x--)gunset(urlParams['g'][0].split(',')[x])
	if(urlParams.hasOwnProperty('si'))if(urlParams['si'][0]) for(var x =  urlParams['si'][0].split(',').length-1; 0<=x;x--)stickerset(urlParams['si'][0].split(',')[x])
	}
	for (var i = 1; i <= 24; i++) {
		var pos = i ;
		document.getElementById(`pos${pos}`).style.visibility ="hidden"
		document.getElementById(`pos${pos}`).style.left=`${leftar[((pos-1)-Math.floor((pos-1)/6)*6)]}px`
		document.getElementById(`pos${pos}`).style.top=`${topar[Math.ceil(pos/6)-1]}px`;
		}
		
		fetch(`https://raw.githubusercontent.com/marnov999/Katocraft/main/${loadpage}/latest.json`)
		.then((response) => response.json())
		.then((json) =>loaditems(json))
		
}
)


function loaditems(items,n) {
	console.log(items)
	items_saved = items


	/* var bb = []
	for(var b in items)
		for(var a in items[b])
			bb.push(items[b][a])
	items = bb */
	
	
	
	if (n) last = 1

		var itemsshow = []
		var buf = []
		
		if (ssel.length){
			
			for (var i = 0; i < ssel.length; i++) {
				for(var key in items)
					for (var x = 0; x < items[key].length; x++) {   /* for every item in data */
						var add =[];
						for (var i = 0; i < ssel.length; i++) {
							
							for (var y = 0; y < items[key][x]['stickers'].length; y++ ){  /* for every sticker pos*/
								if (items[key][x]['stickers'][y]['name'] == (ssel[i])) /* if sticker equals actual selected sticker name */
									if (! add.includes(ssel[i]) )add.push(ssel[i]);
							}
						}
					
						if (JSON.stringify(add) == JSON.stringify(ssel)){

								add = [];
								if(! buf.includes(items[key][x]))
									buf.push(items[key][x])
							}
					}
			}
		}else{
			for(var key in items)
				for (var it in items[key])
					buf.push(items[key][it])
		}
		
		
		if (sel.length){
			for (var i = 0; i < sel.length; i++) {
				for (var y = 0; y < buf.length; y++) {
					if(buf[y]['name'].split(' | ')[0]==sel[i])
					itemsshow.push(buf[y])
				}
			}
		}else{
			itemsshow = buf
		}
		
		if (document.getElementById('search').value){
			window.history.replaceState('', '', updateURLParameter(window.location.href, "se", document.getElementById('search').value));
			buf = itemsshow
			itemsshow = []
			for (var y = 0; y < buf.length; y++) {
				if((buf[y]['name']).toLowerCase().includes((document.getElementById('search').value).toLowerCase()))
					itemsshow.push(buf[y])
			
			}
		}
		document.getElementById('itemsnum').innerHTML = itemsshow.length

	 	if(sortbyid.includes('sor1'))itemsshow.sort(function(a,b){ return b['price']-a['price'] });
		if(sortbyid.includes('sor2'))itemsshow.sort(function(a,b){ return a['price']-b['price'] });	
		if(sortbyid.includes('sor3'))itemsshow.sort(function(a,b){ return b['float']-a['float'] });
		if(sortbyid.includes('sor4'))itemsshow.sort(function(a,b){ return a['float']-b['float'] });
		if (loadpage == "sold"){
			if(sortbyid.includes('sor5'))itemsshow.sort(function(a,b){ return b['sold']-a['sold'] });
			if(sortbyid.includes('sor6'))itemsshow.sort(function(a,b){ return a['sold']-b['sold'] });		
		}else{
			if(sortbyid.includes('sor5'))itemsshow.sort(function(a,b){ return b['listed']-a['listed'] });
			if(sortbyid.includes('sor6'))itemsshow.sort(function(a,b){ return a['listed']-b['listed'] });
		}
		pmax = Math.ceil(itemsshow.length/24)
		if(itemsshow.length- ((last-1)*24)<24){
			var len = itemsshow.length
		}else{
			var len = ((last)*24)
		}
		
		for (var i = ((last-1)*24)+1; i <= ((last)*24); i++) {
			var pos = i - ((last-1)*24);
			document.getElementById(`pos${pos}`).style.visibility ="visible"

			if(pos<=len-(((last-1)*24))){
				
				if (loadpage == "sold"){
					var ht = skintemplate.replace('inspecturl',itemsshow[i-1]['url']).replace('skinfloat',Number(itemsshow[i-1]['float']).toFixed(4)).replace('skinname',itemsshow[i-1]['name']).replace('skintime',timeConverter(itemsshow[i-1]['sold'])).replace('skinprice',itemsshow[i-1]['price']).replace('skineuro',Number(itemsshow[i-1]['price']*0.1360).toFixed(1)).replace('skinwear',itemsshow[i-1]['wear'].replace('-',' ').split(' ')[0].slice(0,1)+itemsshow[i-1]['wear'].replace('-',' ').split(' ')[1].slice(0,1)).replace('rarity',itemsshow[i-1]['quality']).replace('skinimage',itemsshow[i-1]['img']);
				}else{
					var ht = skintemplate.replace('inspecturl',itemsshow[i-1]['url']).replace('Sold','Listed').replace('skinfloat',Number(itemsshow[i-1]['float']).toFixed(4)).replace('skinname',itemsshow[i-1]['name']).replace('skintime',timeConverter(itemsshow[i-1]['listed'])).replace('skinprice',itemsshow[i-1]['price']).replace('skineuro',Number(itemsshow[i-1]['price']*0.1360).toFixed(1)).replace('skinwear',itemsshow[i-1]['wear'].replace('-',' ').split(' ')[0].slice(0,1)+itemsshow[i-1]['wear'].replace('-',' ').split(' ')[1].slice(0,1)).replace('rarity',itemsshow[i-1]['quality']).replace('skinimage',itemsshow[i-1]['img']).replace('searchid',itemsshow[i-1]['id']).replace('searchindex',itemsshow[i-1]['seed']).replace('searchwear',itemsshow[i-1]['float']);
				}
					
				for (var x = 0; x < itemsshow[i-1]['stickers'].length; x++ )
					ht = ht.replace(`stickerpos${x+1}`,itemsshow[i-1]['stickers'][x]['img_url']);  
				
				document.getElementById(`pos${pos}`).innerHTML = ht;
			}else{
				document.getElementById(`pos${pos}`).innerHTML =""
				document.getElementById(`pos${pos}`).style.visibility ="hidden"
			}
		}
		
		 
		document.getElementById('pages').innerHTML = "";
		pages = Math.ceil(itemsshow.length /24)
		var sta = 1
		if(pages>25 && last<=25)  pages = 25
		if(pages>50 && last<=50)  pages = 50
		if(pages>75 && last<=75)  pages = 75
		if(pages>100 && last<=100)  pages = 100
		if(pages>125 && last<=125)  pages = 125
		if(pages>150 && last<=150)  pages = 150
	
		if(last>25) sta = 26
		if(last>50) sta = 51
		if(last>75) sta = 76
		if(last>100) sta = 101
		if(last>125) sta = 126
		if(last>150) sta = 151
		if (pages){

		for (var i = sta; i <= pages; i++) document.getElementById('pages').innerHTML += `<div class="pages-numbers-frame-unselected "onclick="pageset(${i})"id="f${i}"><div class="pages-numbers-unselected"id="fn${i}">${i}</div></div>`;
		document.getElementById(`f${last}`).classList ='pages-numbers-frame-selected';
		document.getElementById(`fn${last}`).classList= 'pages-numbers-selected';
		}		
}