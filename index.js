var leftar =[11.5,24.5,37.5,50.5,63.5,76.5];
var topar =[20,35,50,65];
var glname = ""
var sold ={};
var sel =[];
var ssel =[];
var sortbyid =[]
var item = [];
var last = 1;
var pages = 1
var loadpage ="sold"
function myFunction(mode,name) {
	if (mode == 0){

		document.getElementById("stickers").classList.add("hidden");
		document.getElementById("stickers").classList.remove("visible");
		document.getElementById("site-selection").style.top = "170px"
		document.getElementById("foot").style.top = "88%"
		
		for (var i = 1; i <= 24; i++) {
			var pos = i ;
			document.getElementById(`pos${pos}`).style.top=`${topar[Math.floor((pos-1)/6)]}%`
		}
		if (sel.length>0) {load(item,sel);}else{load(item);}

	}else{
		
	document.getElementById("stickers").classList.remove("hidden");
	document.getElementById("stickers").classList.add("visible");		
	document.getElementById("site-selection").style.top = "250px"
	document.getElementById("foot").style.top = "90%"
		
		for (var i = 1; i <= 6; i++){ 
			change = document.getElementById(`pos${i}`);
			change.style.top = "24%"}
		for (var i = 7; i <= 12; i++){ 
			change = document.getElementById(`pos${i}`);
			change.style.top = "41%"}
		for (var i = 13; i <= 18; i++){ 
			change = document.getElementById(`pos${i}`);
			change.style.top = "58%"}
		for (var i = 19; i <= 24; i++){ 
			change = document.getElementById(`pos${i}`);
			change.style.top = "75%"}
		
		fetch(`https://raw.githubusercontent.com/marnov999/Katocraft/main/${loadpage}/${name.split(' | ')[0]}.json`)
		.then((response) => response.json())
		.then((json) =>loaditems(json,name))
		.catch(loaditems(sold,name)); 
		
	}
}

function gunset(target) {
	


	document.getElementById(target).classList.toggle('ellipse');
	document.getElementById(target).classList.toggle('ellipsef');
    if (document.getElementById(target).classList=='ellipsef')sel.unshift(target);
    if (document.getElementById(target).classList=='ellipse')sel = sel.filter(function(item) {return item !== target})
	last = 1;
	myFunction(0);
	if (sel.length>0) {load(item,sel);}else{load(item);}
}
    
	
function selectsale(target) {
	if (target == 0){
		document.getElementById('selectsales').style.backgroundColor  =" #ea146f";
		document.getElementById('selectlisted').style.backgroundColor  ="transparent";
		loadpage = "sold";
	}
	if (target == 1){
		document.getElementById('selectlisted').style.backgroundColor  =" #ea146f";
		document.getElementById('selectsales').style.backgroundColor  ="transparent";
		loadpage = "listed"
	}
	
}
function stickerset(target) {
  document.getElementById(target).classList.toggle('sticker-frame');
  document.getElementById(target).classList.toggle('sticker-frame-selected');
  if (document.getElementById(target).classList=='sticker-frame-selected')ssel.unshift(target);
    if (document.getElementById(target).classList=='sticker-frame')ssel = ssel.filter(function(item) {return item !== target})
		
	
	
	if (ssel.length>0) {

		fetch(`https://raw.githubusercontent.com/marnov999/Katocraft/main/${loadpage}/${glname.split(' | ')[0]}.json`)
		.then((response) => response.json())
		.then((json) =>loaditems(json,glname,ssel));  
	
	
	}else{
		
		

		fetch(`https://raw.githubusercontent.com/marnov999/Katocraft/main/${loadpage}/${glname.split(' | ')[0]}.json`)
		.then((response) => response.json())
		.then((json) =>loaditems(json,glname));  
	
	}
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
	
	if (ssel.length>0) {

		fetch(`https://raw.githubusercontent.com/marnov999/Katocraft/main/${loadpage}/${glname.split(' | ')[0]}.json`)
		.then((response) => response.json())
		.then((json) =>loaditems(json,glname,ssel));  
	
	
	}else{
		
		

		fetch(`https://raw.githubusercontent.com/marnov999/Katocraft/main/${loadpage}/${glname.split(' | ')[0]}.json`)
		.then((response) => response.json())
		.then((json) =>loaditems(json,glname));  
	
	}
	
	
	
	
	
	
}





function pageset(id) {
	if(id == -1) id=last-1
	if(id == -2) id=last+1
	if(id>=1 && id<=45) last=id
if (sel.length>0) {load(item,sel);}else{load(item);}
}


function loaddata(data){
	for (var key in data) {
		item.push([key,data[key]['url_steam']])	
	}
	load(item)
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







window.addEventListener('load', function () {
	for (var i = 1; i <= 24; i++) {
		var pos = i ;

				
		document.getElementById(`pos${pos}`).style.left=`${leftar[((pos-1)-Math.floor((pos-1)/6)*6)]}%`
		document.getElementById(`pos${pos}`).style.top=`${topar[Math.floor((pos-1)/6)]}%`
		document.getElementById(`pos${pos}`).style.visibility ="hidden"
		}

fetch('https://raw.githubusercontent.com/marnov999/Katocraft/main/img_datam.json')
    .then((response) => response.json())
    .then((json) =>loaddata(json));
}
)

function loaditems(items,name,sids) {
	glname = name
	name = name.slice(0,-1).split(' | ')

	document.getElementById('pages').innerHTML ="" 
	document.getElementById('sort').innerHTML ="" 
	document.getElementById("page").style.visibility ="hidden"
	document.getElementById("foot-line").classList.add('hidden');
	document.getElementById("foot-line").classList.add('visible');
	document.getElementById('back').innerHTML =`
	<div class="back-border" onclick = "myFunction(0)">
                                    <div class="back-text">Go Back</div>
                                </div>`;
								document.getElementById('sorthtml').innerHTML =`<div class="sort-by-border">
										<div class="sort-by-text">Sort by</div>
									</div>`;
	if (items.hasOwnProperty(name[1])){
		
		
		var itemsshow = []
		
		if (sids){
		for (var i = 0; i < sids.length; i++) {
			var add =0;
			for (var x = 0; x < items[name[1]].length; x++) {
				for (var y = 0; y < items[name[1]][x]['stickers'].length; y++ ){
					if (items[name[1]][x]['stickers'][y]['name'] == (sids[i]))
					add = 1;
				}
				if (add == 1){
					add = 0;
					if(! itemsshow.includes(items[name[1]][x]))
						itemsshow.push(items[name[1]][x])
				}
			}
		
		}
	}else{
		var itemsshow = items[name[1]]
	}

	if(sortbyid.includes('sor1'))itemsshow.sort(function(a,b){ return b['price']-a['price'] });
	if(sortbyid.includes('sor2'))itemsshow.sort(function(a,b){ return a['price']-b['price'] });	
	if(sortbyid.includes('sor3'))itemsshow.sort(function(a,b){ return b['float']-a['float'] });
	if(sortbyid.includes('sor4'))itemsshow.sort(function(a,b){ return a['float']-b['float'] });


		

	for (var i = 1; i <= 24; i++) {
		var pos = i;

		/*<div class="sskin-price-change skin-red">€900</div>*/
		/*<img class="sskin-arrow-down" src="./itemsort_files/arrow-down.svg"/>*/
		document.getElementById(`pos${pos}`).style.visibility ="visible"
		document.getElementById(`pos${pos}`).classList.remove('skin');
		document.getElementById(`pos${pos}`).classList.add('sskin');

		if(pos <=itemsshow.length){
		/* 	document.getElementById(`pos${pos}`).innerHTML */
	if (loadpage == "sold"){
		var ht = 
				`
					<div class="sskin-bot">
						<a href="viemimage" target="_blank">
						<div class="sskin-view skin-view-font" >View</div>
						</a>
						<div class="sskin-price skin-name-font">skinprice¥ (skineuro€) </div>
						<!--  <div class="sskin-price-change skim-green">€1.500</div> -->
					
						<div class="sskin-float">
							<div class="sskin-float-rank skin-float-font">skinwear</div>
							<div class="sskin-float-num skin-float-font">skinfloat</div>
						</div>
						<div class="rarity"></div>
						<!--  <img class="sskin-arrow-up"  src="./itemsort_files/arrow-up.svg"/> -->
						
						
					</div>
					<div class="sskin-top"></div>
					<div class="sskin-name skin-name-font">skinname</div>
					<img class="sskin-image" src="skinimage?fop=imageView/2/w/320/h/300" />
					<img class="sskin-sticker1" src="stickerpos1" onerror="this.style.display='none'"/>
					<img class="sskin-sticker2" src="stickerpos2" onerror="this.style.display='none'"/>
					<img class="sskin-sticker3" src="stickerpos3" onerror="this.style.display='none'"/>
					<img class="sskin-sticker4" src="stickerpos4" onerror="this.style.display='none'"/>
					<div class="sskin-sale">
						<div class="sskin-sale-border"></div>
						<p class="sskin-sale-text valign-text-middle opensans-bold-white-12px">
							<span>
								<span class="skin-status-font">Sold</span><span class="skin-date-font">&nbsp;</span><span class="skin-date-font">skintime</span>
							</span>
						</p>
					</div>
					`.replace('skinfloat',Number(itemsshow[pos-1]['float']).toFixed(4)).replace('skinname',itemsshow[pos-1]['name']).replace('skintime',timeConverter(itemsshow[pos-1]['sold'])).replace('skinprice',itemsshow[pos-1]['price']).replace('skineuro',Number(itemsshow[pos-1]['price']*0.1360).toFixed(1)).replace('skinwear',itemsshow[pos-1]['wear'].replace('-',' ').split(' ')[0].slice(0,1)+itemsshow[pos-1]['wear'].replace('-',' ').split(' ')[1].slice(0,1)).replace('rarity','Covert').replace('skinimage',itemsshow[pos-1]['img']).replace('viemimage',itemsshow[pos-1]['img']);
	}else{
		var ht = 
				`
					<div class="sskin-bot">
						<a href="viemimage" target="_blank">
						<div class="sskin-view skin-view-font" >View</div>
						</a>
						<div class="sskin-price skin-name-font">skinprice¥ (skineuro€) </div>
						<!--  <div class="sskin-price-change skim-green">€1.500</div> -->
					
						<div class="sskin-float">
							<div class="sskin-float-rank skin-float-font">skinwear</div>
							<div class="sskin-float-num skin-float-font">skinfloat</div>
						</div>
						<div class="rarity"></div>
						<!--  <img class="sskin-arrow-up"  src="./itemsort_files/arrow-up.svg"/> -->
						
						
					</div>
					<div class="sskin-top"></div>
					<div class="sskin-name skin-name-font">skinname</div>
					<img class="sskin-image" src="skinimage?fop=imageView/2/w/320/h/300" />
					<img class="sskin-sticker1" src="stickerpos1" onerror="this.style.display='none'"/>
					<img class="sskin-sticker2" src="stickerpos2" onerror="this.style.display='none'"/>
					<img class="sskin-sticker3" src="stickerpos3" onerror="this.style.display='none'"/>
					<img class="sskin-sticker4" src="stickerpos4" onerror="this.style.display='none'"/>
					<div class="sskin-sale">
						<div class="sskin-sale-border"></div>
						<p class="sskin-sale-text valign-text-middle opensans-bold-white-12px">
							<span>
								<span class="skin-status-font">Listed</span><span class="skin-date-font">&nbsp;</span><span class="skin-date-font">skintime</span>
							</span>
						</p>
					</div>
					`.replace('skinfloat',Number(itemsshow[pos-1]['float']).toFixed(4)).replace('skinname',itemsshow[pos-1]['name']).replace('skintime',timeConverter(itemsshow[pos-1]['listed'])).replace('skinprice',itemsshow[pos-1]['price']).replace('skineuro',Number(itemsshow[pos-1]['price']*0.1360).toFixed(1)).replace('skinwear',itemsshow[pos-1]['wear'].replace('-',' ').split(' ')[0].slice(0,1)+itemsshow[pos-1]['wear'].replace('-',' ').split(' ')[1].slice(0,1)).replace('rarity','Covert').replace('skinimage',itemsshow[pos-1]['img']).replace('viemimage',itemsshow[pos-1]['img']);
		
	}
		
		for (var x = 0; x < itemsshow[pos-1]['stickers'].length; x++ )
			ht = ht.replace(`stickerpos${x+1}`,itemsshow[pos-1]['stickers'][x]['img_url']);  
		
			document.getElementById(`pos${pos}`).innerHTML = ht;
		}
		else{
			document.getElementById(`pos${pos}`).innerHTML =""
			document.getElementById(`pos${pos}`).style.visibility ="hidden"
			
		}
	}
}else{
	
	for (var i = 1; i <= 24; i++) {
		var pos = i ;

				
		document.getElementById(`pos${pos}`).innerHTML =""
		document.getElementById(`pos${pos}`).style.visibility ="hidden"
		}
	
	}
}



function load(items,ids) {
	for (var i = 0; i < ssel.length; i++){
		
		document.getElementById(ssel[i]).classList.toggle('sticker-frame');
		document.getElementById(ssel[i]).classList.toggle('sticker-frame-selected');
	}
	ssel = []
		
	var itemsshow =[]
	if (ids){
		for (var i = 0; i < ids.length; i++) {
			var data = items.filter(x => x[0].includes(ids[i]))
			for (var y = 0; y < data.length; y++) {
				itemsshow.push(data[y])
			}
		}
	}else{
		var itemsshow = items
	}

	if(itemsshow.length- ((last-1)*24)<24){
		var len = itemsshow.length
	}else{
		var len = ((last)*24)
	}
	document.getElementById('pages').innerHTML ="" 
	document.getElementById('sort').innerHTML =`<div class="sales-select-border" >
								<div class="sales-select-back" onclick="selectsale(0)" id = "selectsales" style = "background-color:  #ea146f;">
									<div class="sales-select-text valign-text-middle">Sales</div>
								</div>
								<div class="sales-select-back" onclick = "selectsale(1)" id="selectlisted">
									<div class="sales-select-text valign-text-middle">For sale</div>
								</div>
							</div>` 
		if(loadpage=="sold") selectsale(0);
		if(loadpage=="listed") selectsale(1);
	
		document.getElementById('back').innerHTML =""
		document.getElementById('sorthtml').innerHTML =""
	var el = document.getElementById("page");
		el.style.visibility ="visible"
	el = document.getElementById("foot-line");
	el.classList.remove('hidden');
	el.classList.add('visible');

	for (var i = ((last-1)*24)+1; i <= ((last)*24); i++) {
		var pos = i - ((last-1)*24);
		document.getElementById(`pos${pos}`).style.visibility ="visible"
		document.getElementById(`pos${pos}`).classList.remove('sskin');
		document.getElementById(`pos${pos}`).classList.add('skin');
		if (pos <=len-(((last-1)*24))){
		document.getElementById(`pos${pos}`).innerHTML =
				`
					<div class="skin-top"></div>
					<div class="skin-name skin-name-font">skinname</div>
					<img
						class="skin-image"
						src="skinimage"
					/>
					<div class="skin-bot">
						 <div class="skin-view opensans-bold-gallery-14px" onclick="myFunction(1,'skinname')">View</div>
					</div>`.replace('skinname',itemsshow[i-1][0].split('|')[1]).replace('skinname',itemsshow[i-1][0]).replace('skinimage',itemsshow[i-1][1]);
				
		}else{
			document.getElementById(`pos${pos}`).innerHTML =""
			document.getElementById(`pos${pos}`).style.visibility ="hidden"
		}
		}

	
	pages = Math.ceil(itemsshow.length /24)
	var sta = 1
	if(pages>25 && last<=25)  pages = 25
	
	if(last>25) sta = 26


	for (var i = sta; i <= pages; i++) document.getElementById('pages').innerHTML += `<div class="pages-numbers-frame-unselected "onclick="pageset(${i})"id="f${i}"><div class="pages-numbers-unselected"id="fn${i}">${i}</div></div>`;

	document.getElementById(`f${last}`).classList ='pages-numbers-frame-selected';
	document.getElementById(`fn${last}`).classList= 'pages-numbers-selected'; 
	}

