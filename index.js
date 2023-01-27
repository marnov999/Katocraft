var leftar =[195,455,715,975,1235,1495];
var topar =[435,775,1115,1455];
var leftars =[260,650,1040,1430];
var topars =[435,945,1455,1965,2475,2985];
var loadedskin = []
var skintemplate =`<div class="skin-bot">
									<div class="skin-view skin-view-font" onclick="popup(1,'inspecturl','searchwear','searchindex','searchid','searchsold')">View</div>
									<div class="skin-price"> <span id="skinidprice" class="skin-name-font">skinprice¥</span > <span  class="skin-name-font" id="euroskinidprice" style="font-size:10px;">(skineuro€)</span > </div>
									
									changedprice
									<!--  <div class="skin-price-change skim-green">€1.500</div> -->
									<div class="skin-float skin-float-font" id="floatskinfont">
										<div class="skin-float-rank">skinwear</div>
										<div class="skin-float-num">skinfloat</div>
									</div>
									<div class="rarity"></div>
									changedpricearrow
									<!--  <img class="skin-arrow-up"  src="./itemsort_files/arrow-up.svg"/> -->
								</div>
								
								<div class="skin-top">
									statrack
								</div>
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
											<span class="skin-status-font">Sold</span>
											<span class="skin-date-font">&nbsp;</span>
											<span class="skin-date-font">skintime</span>
										</span>
									</p>
								</div>`
var skinviewtemplate 	=`        <div id="__next" data-reactroot="">
            <div class="Page_wrapper__0NhRM" id ="main" >
                <div class="Page_container__JgU8H">
                    <div class="Page_inner__8z_Tt">
                        <div class="Page_fullHeight__4Vyb6">
                            <div class="Page_childContainer__JRLxm">
                                <div class="Item_item__XTX4r">
                                    <div>
                                        <div class="ItemTitle_header__7a9e7">
                                            <h1>
                                                skinname<!-- -->
                                                
                                            </h1>
											skinstatrack
											
                                        </div>
                                        <div class="Item_layout__sPHi2" id ="posit" style="flex-direction:row;">
                                            <div id = "positchild">
                                                <div class="ItemHeader_viewContainer__03aIV">
                                                    <div class="ItemHeader_actualImage__tO689">
                                                        <picture class="ProgressiveImage_picture__nprEa">
                                                           
														   
                                                            <img srcset="
    skinimage
                                          " src="skinimage" style="
    max-height: 400px;
">
                                                        </picture>
														<div style="display:flex; max-width: 100%;flex-wrap: nowrap;">
           <div id = "stickerframe1" style="visibility:hidden;display:flex;flex-direction: column;max-width: 200px;">                                             <img  src="sticker1" onerror="this.style.display='none'" style="
max-height: 130%;
    width: 100%;
	width: 160px;
    object-fit: cover;
    padding: 10px;">
               <span style="
    font-family: var(--font-header-small);
    text-align: center;
	width: 160px;
">sticker1name</span>
          <span style="
    font-family: var(--font-header-small);
    text-align: center;
	width: 160px;
"><b>sticker1wear% wear</b></span>
           </div>    
      <div id = "stickerframe2" style="visibility:hidden;display:flex;flex-direction: column;max-width: 200px;">    
    <img src="sticker2" onerror="this.style.display='none'" style="
max-height: 130%;
width: 100%;
	width: 160px;
    object-fit: cover;
        padding: 10px;
"> <span style="
    text-align: center;
    font-family: var(--font-header-small);
	width: 160px;
">sticker2name</span><span style="
    font-family: var(--font-header-small);
    text-align: center;
	width: 160px;
"><b>sticker2wear% wear</b></span>
           </div>  

            <div id = "stickerframe3" style="visibility:hidden;display:flex;flex-direction: column;max-width: 200px;">    
     <img  src="sticker3" onerror="this.style.display='none'" style="
max-height: 130%;
width: 100%;
	width: 160px;
    object-fit: cover;
    padding: 10px;">   <span style="
    text-align: center;
    font-family: var(--font-header-small);
">sticker3name</span><span style="
    font-family: var(--font-header-small);
    text-align: center;
"><b>sticker3wear% wear</b></span>
           </div>     
                  <div id = "stickerframe4" style="visibility:hidden;display:flex;flex-direction: column;max-width: 200px;">    
                <img src="sticker4" onerror="this.style.display='none'" style="
max-height: 130%;
width: 100%;
	width: 160px;
    object-fit: cover;
        padding: 10px;
">
                     <span style="
    text-align: center;
    font-family: var(--font-header-small);
">sticker4name</span><span style="
    font-family: var(--font-header-small);
    text-align: center;
"><b>sticker4wear% wear</b></span>
           </div>                                      
														</div>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                            <div>
                                                <div class="ItemDetails_table__mSo9F">
                                                    <div class="ItemDetails_row__gcoCh ItemDetails_wear__2Bwfz">
                                                        skinwear<!-- -->
                                                        
                                                    </div>
                                                    <div class="ItemDetails_row__gcoCh">
                                                        <div>Float</div>
                                                        <div>skinfloat</div>
                                                    </div>
                                                    <div class="ItemDetails_row__gcoCh ItemDetails_floatbar__XtA3N">
                                                        <div class="FloatBar_container__iQHOz">
                                                            <div class="FloatBar_bar__0dl73">
                                                                <div class="FloatBar_fn___TQKw"></div>
                                                                <div class="FloatBar_mw__Xeeck"></div>
                                                                <div class="FloatBar_ft__5YCGn"></div>
                                                                <div class="FloatBar_ww__NwlPg"></div>
                                                                <div class="FloatBar_bs__xiw6t"></div>
                                                                <div class="FloatBar_float__F5966" style="left: skinfloatgraph%;"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ItemDetails_row__gcoCh">
                                                        <div>Rarity</div>
                                                        <div class="ItemDetails_raritycell__f7bIf">
                                                            <div class="ItemDetails_raritybar__Ib3LD" style="background-color: #;"></div>
                                                            skinrarity
                                                        </div>
                                                    </div>
                                                    <div class="ItemDetails_row__gcoCh">
                                                        <div>Type</div>
                                                        <div>skintype</div>
                                                    </div>
                                                    
                                                    <div class="ItemDetails_row__gcoCh">
                                                        <div>Paint index</div>
                                                        <div>skinseed</div>
                                                    </div>
                                                    <div class="ItemDetails_row__gcoCh ItemDetails_existsFrom__JkWBW">
                                                        
                                                        
                                                    </div>
                                                    <div class="ItemDetails_row__gcoCh ItemDetails_prices__cVHjG">
                                                        <div class="ItemDetails_priceContainer__OiVUf">
                                                            <div class="ItemDetails_buffPrice__6r_i2"><div>Buff: skinpricebuff¥</div></div>
                                                            <div>
                                                                <div class="ItemDetails_buffAndPrimary__lrDcl"><div class="ItemDetails_pricePrimary__j0nKS">€skinprice</div></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    skinbutton
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;							
								
var sel =[];
var ssel =[];
var sortbyid =[]
var items_saved = []
var last = 1;
var pages = 1;
var pmax = 0;
var loadpage ="sold"

function resizepage(m){
	
	if(m){
				
				document.getElementById(`items`).style.top = "150px"
				document.getElementById(`siteshift`).style.height = "4090px"
				document.getElementById(`page`).style.top = "3635px"
				document.getElementById(`page`).style.transform = "scale(1.25)";
				document.getElementById(`foot`).style.top = "3765px"
				document.getElementById(`foot`).style.transform = "scale(1.25)";
				document.getElementById(`sitelogo`).style.transform = "scale(1.25)";document.getElementById(`sitelogo`).style.left = "230px"
				document.getElementById(`head-twitter`).style.transform = "scale(1.25)";document.getElementById(`head-twitter`).style.left = "1562px"
				document.getElementById(`sitetitle`).style.transform = "scale(1.25)";
				document.getElementById(`number-of-skins-sold-Xp5hXp`).style.transform = "scale(1.25)";
				document.getElementById(`itemsnum`).style.transform = "scale(1.25)";document.getElementById(`itemsnum`).style.top = "215px";
				document.getElementById(`site-selection`).style.transform = "scale(1.25)";document.getElementById(`site-selection`).style.top = "290px";
	
				
				for (var i = 1; i <= loadedskin.length; i++) {
					var pos = i ;
					document.getElementById(`pos${pos}`).style.visibility ="visible"
					document.getElementById(`pos${pos}`).style.left=`${leftars[((pos-1)-Math.floor((pos-1)/4)*4)]}px`
					document.getElementById(`pos${pos}`).style.top=`${topars[Math.ceil(pos/4)-1]}px`;
					document.getElementById(`pos${pos}`).style.transform=`scale(1.5)`;
				}
		
			}else{
				for (var i = 1; i <= loadedskin.length; i++) {
					var pos = i ;
					document.getElementById(`pos${pos}`).style.visibility ="visible"
					document.getElementById(`pos${pos}`).style.left=`${leftar[((pos-1)-Math.floor((pos-1)/6)*6)]}px`
					document.getElementById(`pos${pos}`).style.top=`${topar[Math.ceil(pos/6)-1]}px`;
					document.getElementById(`pos${pos}`).style.transform=`scale(1.0)`;
				}
				document.getElementById(`items`).style.top = "0px"
				document.getElementById(`siteshift`).style.height = "2225px"
				document.getElementById(`page`).style.top = "1850px"
				document.getElementById(`page`).style.transform = "scale(1.0)";
				document.getElementById(`foot`).style.top = "1950px"
				document.getElementById(`foot`).style.transform = "scale(1.0)";
				document.getElementById(`sitelogo`).style.transform = "scale(1.0)";document.getElementById(`sitelogo`).style.left = "200px"
				document.getElementById(`head-twitter`).style.transform = "scale(1.0)";document.getElementById(`head-twitter`).style.left = "1582px"
				document.getElementById(`sitetitle`).style.transform = "scale(1.0)";
				document.getElementById(`number-of-skins-sold-Xp5hXp`).style.transform = "scale(1.0)";
				document.getElementById(`itemsnum`).style.transform = "scale(1.0)";document.getElementById(`itemsnum`).style.top = "200px";
				document.getElementById(`site-selection`).style.transform = "scale(1.0)";document.getElementById(`site-selection`).style.top = "250px";
			}
	
}

function popup(m,url,wear,index,id,sold) {
	
	if (m==0)document.getElementById('pop').style.visibility ="hidden"
	if (m==1){
	
	document.getElementById('pop').style.visibility ="visible"
	/* 
	<div  style="height:100%; width:100%;border:none; background-color: #FFF;border-radius: 10px 0px 10px 10px;position:absolute;"></div>"> */

	
	var data =`
	<div  onclick="popup(0)" style="z-index: 99;cursor: pointer;position: fixed;display: flex;align-items: center;background-color: #fff;justify-content: center;width: 32px;top: 15px;left: 15px;height: 32px;border-radius: 16px;border: 2px solid #e0e2e6;">
		<img class="skin-arrow-up" style="  margin-right: 3px;" src="./itemsort_files/arrow.svg"/>
		</i>
	</div>
	<iframe id="myframe"height="100%" width="100%" style="border:none;border-radius: 10px 0px 10px 10px;position:absolute;"></iframe>`
	
		
	
	document.getElementById('pop').innerHTML = data
	
	var iframe = document.getElementById('myframe'),
    iframedoc = iframe.contentDocument || iframe.contentWindow.document;
iframedoc.head.innerHTML =`  <meta charset="utf-8">
<style>.InputBar_input__AM8EI{background-color:var(--color-input-background);color:var(--color-text);border:1.5px solid var(--color-input-border);border-radius:10px;padding:16px 24px;width:100%;font-size:16px;text-overflow:ellipsis}.InputBar_input__AM8EI:focus{outline:none}.InputBar_input__AM8EI:disabled{background-color:var(--color-input-disabled)}.InputBar_input__AM8EI::-moz-placeholder,.InputBar_prefixInputContainer__iwosc input::-moz-placeholder{color:var(--color-input-placeholder);opacity:1!important}.InputBar_input__AM8EI:-ms-input-placeholder,.InputBar_prefixInputContainer__iwosc input:-ms-input-placeholder{color:var(--color-input-placeholder);opacity:1!important}.InputBar_input__AM8EI::placeholder,.InputBar_prefixInputContainer__iwosc input::placeholder{color:var(--color-input-placeholder);opacity:1!important}.InputBar_prefixInputContainer__iwosc{background-color:var(--color-input-background);border:1.5px solid var(--color-input-border);border-radius:10px;width:100%;font-size:16px;display:flex;align-items:center;overflow:hidden}.InputBar_prefixInputContainer__iwosc div{font-size:14px;line-height:22px;border-right:1px solid var(--color-input-separator);padding:0 10px}.InputBar_prefixInputContainer__iwosc input{background-color:var(--color-input-background);color:var(--text-color);padding:8px 24px;border:0;width:100%}.InputBar_prefixInputContainer__iwosc input:focus{outline:none}.InputBar_prefixInputContainer__iwosc a{color:var(--color-neutral-300);font-size:12px;font-weight:600;line-height:20px;white-space:nowrap;margin-right:16px}@media only screen and (min-width:768px){.InputBar_input__AM8EI{font-size:14px}}.SellPriceIndicator_container__Yeeqk{display:flex;flex-direction:column;width:100%}.SellPriceIndicator_bars__8TEw2{display:flex;justify-content:space-between}.SellPriceIndicator_bars__8TEw2>div{flex:1 1;margin:2px;height:3px}.SellPriceIndicator_text__vwGVf{font-weight:600;font-size:12px;line-height:23px}.SellPriceIndicator_container__Yeeqk>div:last-of-type{background-color:var(--color-background)}body.dark .SellPriceIndicator_container__Yeeqk>div:last-of-type{background-color:var(--color-neutral-600)}.SellPriceIndicator_noColor__BHLvQ{background-color:#eef0f2}.SellPriceIndicator_noPrice__R5JIR{color:#cdcecf;background-color:#eef0f2}.SellPriceIndicator_expensive__TGTLl{color:#ab5d5d;background-color:#ab5d5d}.SellPriceIndicator_pricey__bbSoG{color:#d9ab66;background-color:#d9ab66}.SellPriceIndicator_average__i2g1L{color:#68a688;background-color:#68a688}.SellPriceIndicator_good__O8mJc{color:#458968;background-color:#458968}.SellPriceIndicator_extreme__mo8aC{color:#13625d;background-color:#13625d}.PriceDetails_confirmDetails__aKXop .PriceDetails_confirmTitle__jE8jK{color:var(--color-neutral-500);font-weight:600;font-size:18px;line-height:28px;margin-bottom:8px}.PriceDetails_priceDetails__nZ72s{display:flex;align-items:center;justify-content:space-between;margin-top:8px;font-size:14px;line-height:22px;color:var(--color-neutral-400)}.PriceDetails_priceDetails__nZ72s .PriceDetails_priceTitle__Efxy0{font-weight:400}.PriceDetails_priceDetails__nZ72s .PriceDetails_price__RpHmq{font-weight:600}.PriceDetails_priceDetails__nZ72s .PriceDetails_priceGreen__LgJva{color:var(--color-float-dark-green)}.PriceDetails_priceDetails__nZ72s .PriceDetails_priceRed__oP2Ww{color:var(--color-warning-dark)}.PriceDetails_grayBorder__0_tLp{margin-top:16px;margin-bottom:16px;height:1px;background-color:var(--color-neutral-200);width:100%}.PriceDetails_bargainDetails__GlIeR{display:flex;align-items:center;justify-content:space-between;font-weight:600;font-size:14px;line-height:22px;color:var(--color-neutral-500)}.BargainDetails_details___3fRG{display:flex}.BargainDetails_details___3fRG .BargainDetails_itemDetails__jlbtG{padding-left:28px}.BargainDetails_details___3fRG .BargainDetails_priceContainer__SNFnF{text-align:right;flex:1 1}.BargainDetails_imageItem__obdDD,.BargainDetails_imageItem__obdDD img{max-height:100px;max-width:100px;margin-bottom:30px}.BargainDetails_itemDetails__jlbtG .BargainDetails_name__T09JD{color:var(--color-neutral-500);font-weight:600;font-size:14px;line-height:22px}.BargainDetails_priceContainer__SNFnF .BargainDetails_pricePrimary____uYk{color:var(--color-neutral-500);font-weight:600;font-size:16px;line-height:26px}.BargainDetails_priceContainer__SNFnF .BargainDetails_priceSecondary__9ulW_{color:var(--color-neutral-500);font-weight:200;font-size:16px;line-height:26px}.BargainDetails_wearAndFloat__iMCBN{color:var(--color-neutral-400);font-weight:400;font-size:12px;line-height:20px}.BargainDetails_wearAndFloat__iMCBN .BargainDetails_wear__8vjBM{margin-right:5px}.BargainDetails_itemDetails__jlbtG .BargainDetails_rarity__4OOE8{width:30px;height:4px;border-radius:2px}.BargainDetails_flex__FGffU{display:flex;align-items:center}@media only screen and (max-width:768px){.BargainDetails_imageItem__obdDD,.BargainDetails_imageItem__obdDD img{height:auto;width:60px;margin-bottom:20px}}.BargainDetails_gameNodeId__VGbVk{margin-top:2px;margin-bottom:6px;font-size:12px;line-height:20px}.BargainDetails_tier__GFoN4{background-color:#fde7f1;border-radius:5px;color:var(--color-primary);padding:4px;font-size:12px;line-height:15px;display:inline-block}.BargainDetails_details__TVhry{display:flex}.BargainDetails_details__TVhry .BargainDetails_itemDetails__Tb2L2{padding-left:28px}.BargainDetails_details__TVhry .BargainDetails_priceContainer__Xp6pR{text-align:right;flex:1 1}.BargainDetails_imageItem__k_4KK,.BargainDetails_imageItem__k_4KK img{max-width:100px;width:auto;border-radius:20px;margin-bottom:10px}.BargainDetails_itemDetails__Tb2L2 .BargainDetails_name___6fvg{color:var(--color-neutral-500);font-weight:600;font-size:14px;line-height:22px}.BargainDetails_itemDetails__Tb2L2 .BargainDetails_rarity__Ezw4R{width:30px;height:4px;border-radius:2px}.BargainDetails_flex__AGLnD{display:flex;align-items:center}.BargainDetails_wearAndFloat__iLzVN{color:var(--color-neutral-400);font-weight:400;font-size:12px;line-height:20px}.BargainDetails_wearAndFloat__iLzVN .BargainDetails_wear__ELxtX{margin-right:5px}.BargainDetails_priceContainer__Xp6pR .BargainDetails_buffPrice___1NWp{color:var(--color-neutral-300);font-weight:400;font-size:12px;line-height:20px}.BargainDetails_priceContainer__Xp6pR .BargainDetails_pricePrimary__FizjV{color:var(--color-neutral-500);font-weight:600;font-size:16px;line-height:26px}.BargainDetails_priceContainer__Xp6pR .BargainDetails_priceSecondary__5do5U{color:var(--color-neutral-500);font-weight:200;font-size:16px;line-height:26px}@media only screen and (max-width:768px){.BargainDetails_imageItem__k_4KK,.BargainDetails_imageItem__k_4KK img{height:auto;width:60px;margin-bottom:20px}}.BargainLayout_container__8Wkla{display:flex;justify-content:space-between;margin-bottom:60px;margin-top:40px}.BargainLayout_container__8Wkla>div{flex:1 1}.BargainLayout_container__8Wkla>div:first-child{margin-right:10px}.BargainLayout_container__8Wkla>div:last-child{margin-left:10px}.BargainLayout_explainer__JZcWj{background:var(--color-neutral-100);border-radius:10px;padding:16px;color:var(--color-neutral-400);font-size:14px;line-height:22px;font-weight:400}body.dark .BargainLayout_explainer__JZcWj{background:var(--color-neutral-200)}.BargainLayout_explainer__JZcWj h2{font-weight:600;font-size:20px;line-height:32px;color:var(--color-neutral-500)}.BargainLayout_explainer__JZcWj p{font-size:14px;margin:0}.BargainLayout_explainer__JZcWj h1{color:var(--color-header)}.BargainLayout_title__vPeJx{max-width:700px;margin-top:72px;font-weight:600;font-size:34px;line-height:54px;color:var(--color-neutral-500);font-family:var(--font-header-small)}body.dark .BargainLayout_grayContainer__xokXI{background:var(--color-neutral-600);box-shadow:none}.BargainLayout_grayContainer__xokXI{padding:24px;border:1px solid var(--color-neutral-100);box-shadow:0 0 8px hsla(0,0%,76%,.15);border-radius:10px;margin-bottom:24px}.BargainLayout_grayContainer__xokXI .BargainLayout_grayTitle__R31Hq{color:var(--color-neutral-500);font-weight:600;font-size:18px;line-height:28px;margin-bottom:20px}@media only screen and (max-width:768px){.BargainLayout_container__8Wkla{flex-direction:column-reverse}.BargainLayout_container__8Wkla>div{flex:unset}.BargainLayout_explainer__JZcWj{margin:20px 0;padding:32px;max-width:none}.BargainLayout_right__bqd7J{margin-left:0;width:100%}.BargainLayout_container__8Wkla>div{width:100%}}.OfferModal_explain__h_afP{display:flex;align-items:center}.OfferModal_explainPic__8aVgK>img{width:24px;margin-right:10px}.OfferModal_modal__cvzMZ{padding:48px;max-width:688px}.OfferModal_hidden__JoGKU{display:none}.OfferModal_title__TwtQl{font-weight:600;font-size:20px;line-height:32px;color:var(--color-neutral-500);text-align:center;margin-bottom:24px}.OfferModal_next__GCkKi{width:100%}.OfferModal_firstStep__2kEIq{position:relative;top:-16px}.OfferModal_minOffer__7J7E5{font-weight:600;font-size:12px;line-height:20px;color:var(--color-neutral-300);margin-top:8px}.OfferModal_explainer__Zow0z{margin-top:32px}.OfferModal_firstStep__2kEIq .OfferModal_imageItem__bJe4W,.OfferModal_firstStep__2kEIq .OfferModal_imageItem__bJe4W img{max-height:92px;max-width:200px;margin-bottom:30px}.OfferModal_firstStep__2kEIq .OfferModal_details__a_68p{display:flex}.OfferModal_details__a_68p .OfferModal_itemDetails__O6_cR{padding-left:28px}.OfferModal_itemDetails__O6_cR .OfferModal_name__R_rIP{color:var(--color-neutral-500);font-weight:600;font-size:14px;line-height:22px}.OfferModal_details__a_68p .OfferModal_priceContainer__YxZmS{text-align:right;flex:1 1}.OfferModal_priceContainer__YxZmS .OfferModal_buffPrice__PEC_3{color:var(--color-neutral-300);font-weight:400;font-size:12px;line-height:20px}.OfferModal_priceContainer__YxZmS .OfferModal_pricePrimary__yTszz{color:var(--color-neutral-500);font-weight:600;font-size:16px;line-height:26px}.OfferModal_priceContainer__YxZmS .OfferModal_priceSecondary__8FfmL{color:var(--color-neutral-500);font-weight:200;font-size:16px;line-height:26px}.OfferModal_next__GCkKi{margin-top:24px}.OfferModal_marginTop__5y44F{margin-top:32px}@media only screen and (max-width:768px){.OfferModal_modal__cvzMZ{padding:20px 20px 35px;margin-bottom:-10px}.OfferModal_firstStep__2kEIq{top:0}}.Sticker_container__aWWJd{padding-right:.4rem;font-size:.7rem;line-height:1.2rem;text-align:center}.Sticker_container__aWWJd img{height:1.6rem;transition:transform .2s}.Sticker_container__aWWJd img:hover{transform:scale(2.5)}.Stickers_container__z6yHo{display:flex}.FavoriteButton_button__Xkbi3{display:flex;align-items:center;justify-content:center;width:50px;height:50px;padding:0;border:2px solid var(--color-neutral-200);border-radius:25px;background-color:var(--color-background)}body.dark .FavoriteButton_button__Xkbi3{border-color:var(--color-neutral-300)}.FavoriteButton_button__Xkbi3 .FavoriteButton_image__U3N_A{background-color:var(--color-primary);margin-top:2px}.FavoriteButton_button__Xkbi3.FavoriteButton_small___5B0t{width:24px;height:24px;border-radius:12px;border-width:1px}.DelayedDeliveryCard_card__v3D__{position:relative;overflow:visible;display:flex;flex-direction:row;justify-content:space-between;align-items:center;flex-wrap:wrap;padding:8px;border-radius:4px;background-color:var(--color-neutral-100);font-size:12px}.DelayedDeliveryCard_card__v3D__ .DelayedDeliveryCard_text__L9iA3{display:flex;align-items:center}.DelayedDeliveryCard_card__v3D__ .DelayedDeliveryCard_delay__s8F4n{display:flex;align-items:center;height:21px;margin-left:auto;padding:0 8px;border:1px solid var(--color-primary);border-radius:12px;color:var(--color-primary)}.DelayedDeliveryCard_card__v3D__ .DelayedDeliveryCard_info__UO_hM{display:flex;margin-left:4px}.DelayedDeliveryCard_card__v3D__ .DelayedDeliveryCard_questionmark__i7RTb{background-color:var(--color-neutral-300)}.DelayedDeliveryCard_card__v3D__ .DelayedDeliveryCard_hover__1gnqC{display:none;position:absolute;left:0;bottom:40px;background-color:var(--color-neutral-0);max-width:265px;padding:12px;box-shadow:var(--shadow-card);border-radius:var(--border-radius);border:var(--border)}.DelayedDeliveryCard_card__v3D__ .DelayedDeliveryCard_info__UO_hM:hover .DelayedDeliveryCard_hover__1gnqC{display:flex}.ItemCardNewBody_top__o1Zid{background-color:var(--color-background);padding:12px 16px;display:flex;justify-content:space-between;font-style:normal;font-weight:600;font-size:12px;line-height:20px;color:var(--color-neutral-400)}body.dark .ItemCardNewBody_top__o1Zid{background-color:var(--color-neutral-600)}.ItemCardNewBody_name__SYDXg{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.ItemCardNewBody_statTrak__Vify2{color:#cd6a39}.ItemCardNewBody_middle__aL3D4{background-color:var(--color-neutral-100);display:flex;flex-direction:column;align-items:center;height:156px;position:relative}body.dark .ItemCardNewBody_middle__aL3D4{background:radial-gradient(47.9% 47.9% at 50% 52.1%,#1c2d46 0,rgba(51,61,77,.38) 100%)}.ItemCardNewBody_itemPicture__4uehA{height:128px;padding:12px;display:flex;flex-direction:column;justify-content:center}.ItemCardNewBody_itemPicture__4uehA picture{display:flex;align-items:center;justify-content:center}.ItemCardNewBody_itemPicture__4uehA picture,.ItemCardNewBody_itemPicture__4uehA picture img{max-width:100%;max-height:100%}.ItemCardNewBody_gloveBrightness__2JEkh>picture{filter:brightness(150%)}.ItemCardNewBody_forSale__R1siN{display:flex;align-items:center;justify-content:center;position:absolute;top:0;right:0;height:30px;background-color:#001462;border-radius:2px;font-weight:600;font-size:12px;text-align:center;color:var(--color-light);padding:0 14px}body.dark .ItemCardNewBody_forSale__R1siN{background-color:var(--color-primary)}.ItemCardNewBody_middlecontainer__in2jF{position:absolute;left:0;bottom:0;display:flex;align-items:center;justify-content:space-between;width:100%;padding:8px 12px}.ItemCardNewBody_stickers__PEHUM{align-self:flex-end;display:flex;align-items:center;height:28px}.ItemCardNewBody_bottom____qAl{background-color:var(--color-background);padding:16px}body.dark .ItemCardNewBody_bottom____qAl{background-color:var(--color-neutral-600)}.ItemCardNewBody_itemDetails__lQ__M{display:flex;justify-content:space-between;align-items:center;font-style:normal;font-weight:400;font-size:14px;line-height:22px;color:var(--color-neutral-400)}.ItemCardNewBody_wear__vFzrf{color:var(--color-neutral-200);margin-right:20px}.ItemCardNewBody_float__mpCp4,.ItemCardNewBody_wear__vFzrf{color:var(--color-neutral-300)}.ItemCardNewBody_rarity__JP5dS{width:30px;height:4px;border-radius:2px}.ItemCardNewBody_priceContainer__oUb_z{display:flex;flex-direction:column;margin-top:6px;text-align:left}.ItemCardNewBody_pricePrimaryDiscounted__5nX3a{font-style:normal;font-weight:700;font-size:18px;line-height:28px;color:var(--color-primary)}.ItemCardNewBody_priceStrikeThrough__rWypq{text-decoration:line-through}.ItemCardNewBody_pricePrimary__pqq_k{font-style:normal;font-weight:700;font-size:18px;line-height:28px;color:var(--color-neutral-400)}.ItemCardNewBody_pricePrimary__pqq_k.ItemCardNewBody_mobile___BBPo{display:none}.ItemCardNewBody_buffContainer__I1SZn{display:flex;justify-content:space-between;width:100%}.ItemCardNewBody_buffPrice__IfiBF{font-size:12px;line-height:23px;color:var(--color-neutral-400)}.ItemCardNewBody_priceSecondary___FdH3{font-style:normal;font-weight:400;font-size:12px;line-height:20px;color:var(--color-neutral-400)}.ItemCardNewBody_savings__Z6f1d{font-weight:600;font-size:12px;line-height:20px;color:var(--color-float-dark-green)}.ItemCardNewBody_savingsMinus__TmBGg{font-weight:600;font-size:12px;line-height:20px;color:var(--color-float-light-red)}@media only screen and (max-width:768px){.ItemCardNewBody_top__o1Zid{padding:12px}.ItemCardNewBody_middle__aL3D4{height:112px}.ItemCardNewBody_itemPicture__4uehA{height:90px}.ItemCardNewBody_middlecontainer__in2jF{padding:4px 8px}.ItemCardNewBody_bottom____qAl{padding:12px}}.ItemCardNewBody_nodeTierContainer__qkoi_{display:flex;justify-content:space-between;flex-direction:row}.ItemCardNewBody_tier__o9t0d{background-color:#fde7f1;border-radius:5px;color:var(--color-primary);padding:4px;font-size:12px;margin-top:2px;line-height:15px}.ItemCardNewBody_top__vEztL{background-color:var(--color-background);padding:12px 16px;display:flex;justify-content:space-between;font-style:normal;font-weight:600;font-size:12px;line-height:20px;color:var(--color-neutral-400)}body.dark .ItemCardNewBody_top__vEztL{background-color:var(--color-neutral-600)}.ItemCardNewBody_name__eSewR{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;color:var(--color-neutral-500);font-size:12px;font-weight:600}.ItemCardNewBody_middle__wrulx{background-color:var(--color-neutral-100);display:flex;flex-direction:column;align-items:center;height:220px;position:relative}body.dark .ItemCardNewBody_middle__wrulx{background:radial-gradient(47.9% 47.9% at 50% 52.1%,#1c2d46 0,rgba(51,61,77,.38) 100%)}.ItemCardNewBody_itemPicture__90OkO{height:220px;padding:12px;display:flex;flex-direction:column;justify-content:center}.ItemCardNewBody_itemPicture__90OkO picture{display:flex;align-items:center;justify-content:center}.ItemCardNewBody_itemPicture__90OkO,.ItemCardNewBody_itemPicture__90OkO img{max-width:auto;height:220px}.ItemCardNewBody_forSale__vyFVU{display:flex;align-items:center;justify-content:center;position:absolute;top:0;right:0;height:30px;background-color:#001462;border-radius:2px;font-weight:600;font-size:12px;text-align:center;color:var(--color-light);padding:0 14px}body.dark .ItemCardNewBody_forSale__vyFVU{background-color:var(--color-primary)}.ItemCardNewBody_middlecontainer__V2cT_{position:absolute;left:0;bottom:0;display:flex;align-items:center;justify-content:space-between;width:100%;padding:8px 12px}.ItemCardNewBody_bottom__NReb2{background-color:var(--color-background);padding:16px}body.dark .ItemCardNewBody_bottom__NReb2{background-color:var(--color-neutral-600)}.ItemCardNewBody_itemDetails__L1DQd{display:flex;flex-direction:column;justify-content:space-between;font-style:normal;line-height:22px}.ItemCardNewBody_itemDetails__L1DQd,.ItemCardNewBody_nodeId__wPyiE{font-weight:400;font-size:14px;color:var(--color-neutral-400)}.ItemCardNewBody_priceContainer__tGFcZ{display:flex;flex-direction:column;margin-top:6px;text-align:left}.ItemCardNewBody_pricePrimaryDiscounted__PUWiQ{font-style:normal;font-weight:700;font-size:18px;line-height:28px;color:var(--color-primary)}.ItemCardNewBody_priceStrikeThrough__knaqm{text-decoration:line-through}.ItemCardNewBody_pricePrimary__Uyeh9{font-style:normal;font-weight:700;font-size:18px;line-height:28px;color:var(--color-neutral-400)}.ItemCardNewBody_pricePrimary__Uyeh9.ItemCardNewBody_mobile__2RuxS{display:none}.ItemCardNewBody_priceSecondary__wqfB4{font-style:normal;font-weight:400;font-size:12px;line-height:20px;color:var(--color-neutral-400)}.ItemCardNewBody_savings___7cv2{font-weight:600;font-size:12px;line-height:20px;color:var(--color-float-dark-green)}.ItemCardNewBody_savingsMinus__bmplz{font-weight:600;font-size:12px;line-height:20px;color:var(--color-float-light-red)}@media only screen and (max-width:768px){.ItemCardNewBody_itemPicture__90OkO{padding:0}.ItemCardNewBody_itemPicture__90OkO,.ItemCardNewBody_itemPicture__90OkO img{max-width:100%;max-height:168px}.ItemCardNewBody_top__vEztL{padding:12px}.ItemCardNewBody_middle__wrulx{height:100%;width:100%}.ItemCardNewBody_middlecontainer__V2cT_{padding:4px 8px}.ItemCardNewBody_bottom__NReb2{padding:12px}}.Switch_checkbox__idGfh{height:0;width:0;visibility:hidden}.Switch_label__7dY4l{display:flex;align-items:center;justify-content:space-between;cursor:pointer;width:42px;height:26px;background:grey;border-radius:100px;position:relative;transition:background-color .2s}.Switch_label__7dY4l .Switch_button__WH3nW{content:"";position:absolute;top:2px;left:2px;width:22px;height:22px;border-radius:100px;transition:.2s;background:#fff;box-shadow:0 0 2px 0 hsla(0,0%,4%,.29)}.Switch_checkbox__idGfh:checked+.Switch_label__7dY4l .Switch_button__WH3nW{left:calc(100% - 2px);transform:translateX(-100%)}.Switch_label__7dY4l:active .Switch_button__WH3nW{width:60px}.Page_wrapper__0NhRM{width:100%}.Page_container__JgU8H{display:flex;flex-direction:column;justify-content:center;width:100%;height:100%;overflow:hidden}.Page_childContainer__JRLxm{margin:72px 0 80px}.Page_hideMobileTopBar__VlI99.Page_childContainer__JRLxm{margin-top:0}.Page_childContainer__JRLxm.Page_noBottomMargin__4naZd{margin-bottom:0}.Page_inner__8z_Tt{margin:0 var(--margin)}.Page_fullWidth__P2g9h .Page_inner__8z_Tt{margin:0}.Page_fullHeight__4Vyb6{display:flex;flex-direction:column;min-height:100vh}.Page_childContainer__JRLxm{flex:1 1}@media only screen and (min-width:768px){.Page_container__JgU8H{padding:0 60px}.Page_wrapper__0NhRM.Page_noLeftMargin__DGgqT>.Page_container__JgU8H{padding:0 60px 0 0}.Page_wrapper__0NhRM.Page_fullWidth__P2g9h>.Page_container__JgU8H{padding:0}.Page_wrapper__0NhRM{display:flex;justify-content:center}.Page_childContainer__JRLxm{margin:0px 0 0px}.Page_hideTopBar__OQiLO.Page_childContainer__JRLxm{margin-top:0}.Page_childContainer__JRLxm.Page_noBottomMargin__4naZd{margin-bottom:0}.Page_inner__8z_Tt{margin:0}}@media only screen and (min-width:1216px){.Page_container__JgU8H{padding:0 160px}.Page_wrapper__0NhRM.Page_noLeftMargin__DGgqT>.Page_container__JgU8H{padding:0 160px 0 0}.Page_wrapper__0NhRM.Page_fullWidth__P2g9h>.Page_container__JgU8H{padding:0}}.ItemCardNew_wrapper__phLcV{flex-grow:1;flex-basis:230px;width:230px;padding:0 10px 20px}.ItemCardNew_container__CX1a_{background:var(--color-background);border:1px solid var(--color-neutral-100);border-radius:10px;overflow:hidden;transition:transform .2s}body:not(.dark) .ItemCardNew_container__CX1a_{box-shadow:0 0 8px hsla(0,0%,76%,.15)}.ItemCardNew_top__bosSX{background-color:var(--color-background);padding:12px 16px;display:flex;justify-content:space-between;font-style:normal;font-weight:600;font-size:12px;line-height:20px;color:var(--color-neutral-400)}body.dark .ItemCardNew_top__bosSX{background-color:var(--color-neutral-600)}.ItemCardNew_middle__ySH13{background-color:var(--color-neutral-100);display:flex;flex-direction:column;align-items:center;height:156px;position:relative}body.dark .ItemCardNew_middle__ySH13{background:radial-gradient(47.9% 47.9% at 50% 52.1%,#1c2d46 0,rgba(51,61,77,.38) 100%)}.ItemCardNew_bottom__N1YoL{background-color:var(--color-background);padding:16px}body.dark .ItemCardNew_bottom__N1YoL{background-color:var(--color-neutral-600)}.ItemCardNew_itemDetails__JiMZK{display:flex;justify-content:space-between;align-items:center;font-style:normal;font-weight:400;font-size:14px;line-height:22px;color:var(--color-neutral-400)}.ItemCardNew_wear__FXImC{color:var(--color-neutral-200);margin-right:20px}.ItemCardNew_float__WZ85s,.ItemCardNew_wear__FXImC{color:var(--color-neutral-300)}.ItemCardNew_priceContainer__LJZr3{display:flex;flex-direction:column;margin-top:6px;text-align:left}.ItemCardNew_container__CX1a_.ItemCardNew_hover__3cqkl:hover{transform:scale(1.1)}.ItemCardNew_filler____xIr{padding:0!important}.ItemCardNew_priceIndicator__HCbVP{margin-bottom:4px}@media only screen and (max-width:768px){.ItemCardNew_wrapper__phLcV{padding:0 8px 16px;flex-basis:50%;min-width:50%}.ItemCardNew_container__CX1a_:hover{transform:none}}.ItemCardNew_privateListing__yGRKC{width:100%;border-top:1px solid var(--color-neutral-100);font-weight:200;font-size:14px;background-color:transparent;color:var(--color-neutral-500);padding:9px 0}.ItemCardNew_help___boZS{float:right}.ItemCardNew_buttonContainer__7AqrK{width:100%;border-top:1px solid var(--color-neutral-100);text-align:center;font-weight:700;font-size:14px;background-color:transparent;color:var(--color-neutral-500);padding:9px;cursor:pointer}.ItemCardNew_buttonContainer__7AqrK:hover,body.dark .ItemCardNew_buttonContainer__7AqrK{background-color:var(--color-neutral-100)}body.dark .ItemCardNew_buttonContainer__7AqrK:hover{background-color:var(--color-neutral-200)}.ItemCardNew_editButton__O_TL0{display:flex;align-items:center;justify-content:center;height:47px;margin-left:-16px;margin-right:-16px;margin-bottom:-16px;padding:16px;border-top:1px solid var(--color-neutral-100);font-size:14px;font-weight:700;color:#001462;cursor:pointer;text-align:center}body.dark .ItemCardNew_editButton__O_TL0{color:var(--color-neutral-500)}.ItemCardNew_editButton__O_TL0.ItemCardNew_dark__QPVEt{background-color:var(--color-blue-dark);color:var(--color-neutral-0)}body.dark .ItemCardNew_editButton__O_TL0.ItemCardNew_dark__QPVEt{background-color:var(--color-primary)}.ItemCardNew_editButton__O_TL0.ItemCardNew_light__vB671{color:#a3a9b9;cursor:default}.ItemCardNew_editButton__O_TL0>.ItemCardNew_spinner__kxiNk>div>div{border-color:var(--color-light)!important}@media only screen and (max-width:768px){.ItemCardNew_wear__FXImC{margin-right:12px}.ItemCardNew_priceContainer__LJZr3{margin-top:0}.ItemCardNew_buttonContainerMobile__eC1LC{display:none}.ItemCardNew_editButton__O_TL0{height:36px;font-size:10px;padding:12px;margin:0 -12px -12px}}.ItemCardNew_notShownOverlay__ONUx9{opacity:.5}.ItemCardNew_editArea__fDinb{display:flex;flex-direction:column;padding:16px}.ItemCardNew_inputField__62Zf7{margin:2px 0 14px}.ItemCardNew_editArea__fDinb input{font-size:12px;padding:6px 8px}.ItemCardNew_noPrice__hUe_Q{color:#dee0e7}.ItemCardNew_pricedSince__F3RHc{display:flex;margin-top:6px;font-size:11px;color:#cacdd1}.ItemCardNew_pricedSince__F3RHc.ItemCardNew_due__EIDXI{color:#eec6a1}.ItemCardNew_pricedSince__F3RHc>img{margin:0 4px 0 2px}.ItemCardNew_skeletonBlockPrimary__YFbWf{background-color:rgba(35,46,78,.1);height:16px;width:90px;border-radius:5px}.ItemCardNew_skeletonBlockSecondary__7VVy2{background-color:rgba(135,145,171,.1);height:12px;width:90px;border-radius:5px;margin-top:12px}.ItemCardNew_buttonsContainer__l5sB0{display:flex}.ItemCardNew_buttonBargain__K_2Um{border-left:1px solid var(--color-neutral-100)}.ItemCardNew_allowBargain__RsQAd{display:flex;justify-content:space-between;margin-bottom:10px;align-items:flex-end;height:35px;border-top:1px solid var(--color-neutral-100);font-weight:200;font-size:14px}@media only screen and (max-width:768px){.ItemCardNew_pricedSince__F3RHc{font-size:12px}}@media only screen and (max-width:320px){.ItemCardNew_wrapper__phLcV{padding:0 5px 10px}.ItemCardNew_buffPrice__JCFJq{font-size:11px}}.Carousel_container__Pyvh_{width:100%;margin-top:24px}.Carousel_top__01sLZ{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;width:100%}.Carousel_container__Pyvh_ h2{font-size:18px;font-weight:600;margin:0}.Carousel_navigation__qPkiA{display:flex;align-items:flex-end}.Carousel_navigation__qPkiA .Carousel_dots__iOeam{display:flex;margin-right:16px}.Carousel_navigation__qPkiA .Carousel_dot__rEYTG{width:15px;height:5px;background-color:var(--color-neutral-200);border-radius:5px;margin-right:4px}.Carousel_navigation__qPkiA .Carousel_dot__rEYTG.Carousel_active__zVRFy{background-color:var(--color-primary)}@media only screen and (max-width:768px){.Carousel_navigation__qPkiA .Carousel_dots__iOeam{display:none}}.Carousel_navigation__qPkiA .Carousel_dots__iOeam>:not(.Carousel_active__zVRFy),.Carousel_navigation__qPkiA .Carousel_left___9r3R.Carousel_active__zVRFy,.Carousel_navigation__qPkiA .Carousel_right__FFUXI.Carousel_active__zVRFy{cursor:pointer}.Carousel_left___9r3R{margin-right:24px}.Carousel_left___9r3R,.Carousel_right__FFUXI{background-color:var(--color-neutral-200)}body.dark .Carousel_left___9r3R,body.dark .Carousel_right__FFUXI{background-color:var(--color-neutral-100)}.Carousel_navigation__qPkiA .Carousel_left___9r3R.Carousel_active__zVRFy,.Carousel_navigation__qPkiA .Carousel_right__FFUXI.Carousel_active__zVRFy{background-color:var(--color-primary)}.Carousel_carousel___2OOy{display:flex;flex-flow:row nowrap;overflow-x:auto;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scroll-behavior:smooth;margin:16px 0 0 -10px;scrollbar-width:none}.Carousel_carousel___2OOy::-webkit-scrollbar{width:0!important}.Carousel_snap__wSgG8{scroll-snap-align:start;scroll-snap-stop:always}@media only screen and (max-width:1024px){.Carousel_container__Pyvh_{width:unset}.Carousel_container__Pyvh_ h2{font-size:16px}.Carousel_carousel___2OOy{width:unset;margin:16px 0 0 -8px}}.Viewer3D_container__3f0Is{position:relative;height:100%;width:100%}.Viewer3D_renderer__ViaPm{width:100%;height:100%;min-height:620px}.Viewer3D_spinner__U_lm2{position:absolute;top:0;height:100%;width:100%}@media only screen and (max-width:768px){.Viewer3D_renderer__ViaPm{width:100%;min-height:260px}}.DeliveryRateBox_box__Krvfp{border-radius:5px;color:#fff;padding:0 5px;font-size:12px}.DeliveryRateBox_darkGreen___t1vV{background-color:#35be3b}.DeliveryRateBox_green__mXYem{background-color:#66c03f}.DeliveryRateBox_lightGreen__02WoZ{background-color:#84c16a}.DeliveryRateBox_yellow__Jrwy_{background-color:#dbb043}.DeliveryRateBox_red__js6Cv{background-color:#e36e54}.DeliveryRateBox_darkRed__kDaCd{background-color:#d24244}.ProfileCard_eliteBadge__C4LQ_>img{position:absolute;width:60px;margin-top:-3px;margin-left:0;cursor:pointer}.ProfileCard_avatarElite__Ucz7f{background-image:linear-gradient(#fff,#fff),radial-gradient(circle at top left,#fed8a2,#f8a945)}.ProfileCard_avatarEliteDiamond__C9flI,.ProfileCard_avatarElite__Ucz7f{width:100px;height:100px;border-radius:50px;border:4px double transparent;background-origin:border-box;background-clip:padding-box,border-box}.ProfileCard_avatarEliteDiamond__C9flI{background-image:linear-gradient(#fff,#fff),radial-gradient(circle at top left,#82ccff,#1481cd)}.ProfileCard_top__pzuTD{display:flex;text-align:left;width:100%}.ProfileCard_buttonContainer__rGlNt{width:83%}.ProfileCard_buttonContainerFlex__AjFqW{flex-direction:column;display:flex}.ProfileCard_buttonFloat__AnHJh{float:right}.ProfileCard_goTo3D__8aYcG{float:right;margin-bottom:20px}.ProfileCard_goTo3DMobile__CslaW{float:none}.ProfileCard_buttonContainerMobile__4qdsW{display:none}.ProfileCard_avatarLink__heDnN{position:relative}.ProfileCard_avatar__RhrMQ{width:100px;height:100px;border-radius:50px;border:1px solid var(--color-neutral-200)}.ProfileCard_onlineIndicator__YLFO3{width:19px;height:19px;background-color:var(--color-neutral-300);border:4px solid var(--color-background);border-radius:9px;float:left;margin-top:3px}.ProfileCard_onlineIndicator__YLFO3.ProfileCard_online__M51fg{background-color:var(--color-float-dark-green)}.ProfileCard_last30Days__zCifW{margin-left:-6px;font-size:12px;margin-right:5px!important}.ProfileCard_details__7v5D_{display:flex;flex-direction:column;justify-content:center;margin-left:var(--margin);font-size:12px;color:var(--color-neutral-300)}.ProfileCard_steamId__q9OTE{font-weight:600;font-size:16px;line-height:24px;color:var(--color-neutral-500)}.ProfileCard_nameSteamGrid___HSm2{display:flex;margin-bottom:0;align-items:center;color:var(--color-neutral-500)}.ProfileCard_steamLogo__n1XBD{width:18px;height:18px;margin-left:10px}.ProfileCard_gamerpayDetails__O8BRJ{margin:1rem 0 0;text-align:left}.ProfileCard_onlineBox__7EHOv{margin-bottom:15px}.ProfileCard_onlineText__YQ76T{font-size:12px;color:var(--color-neutral-300)}.ProfileCard_dot__nj8sW{margin:0 8px}.ProfileCard_acceptRate__AXkFR{font-size:14px;min-width:245px}.ProfileCard_acceptRateBold__MArFC{font-weight:700;float:left;margin-left:12px;margin-right:12px!important}.ProfileCard_acceptRate__AXkFR span{margin-right:14px}.ProfileCard_acceptRate__AXkFR img{margin-right:8px}.ProfileCard_acceptRate__AXkFR div{display:flex;align-items:center}.ProfileCard_reseller__9hzPQ{font-weight:600;font-size:14px;line-height:22px}@media only screen and (max-width:768px){.ProfileCard_acceptRate__AXkFR{flex-direction:column}.ProfileCard_steamInfo__GuH1f{font-size:10px}.ProfileCard_buttonContainer__rGlNt{display:none}.ProfileCard_buttonContainerMobile__4qdsW{display:grid;margin-top:15px}}.ItemHeader_viewContainer__03aIV{background:var(--color-neutral-100);border-radius:10px;margin-bottom:16px;display:flex;flex-direction:column;align-items:center}body.dark .ItemHeader_viewContainer__03aIV{background:radial-gradient(47.9% 47.9% at 50% 52.1%,#1c2d46 0,rgba(51,61,77,.38) 100%)}.ItemHeader_actualImage__tO689{display:flex;flex-direction:column;align-items:center;margin:32px 0 64px}.ItemHeader_actualImage__tO689>img,.ItemHeader_actualImage__tO689>picture{padding:20px;max-width:100%}.ItemHeader_actualImage__tO689>picture>img{max-width:100%}.ItemHeader_imageEdge__8TcXO{display:flex;max-width:700px;justify-content:space-between;align-items:center}.ItemHeader_imageEdge__8TcXO>picture{width:100%;margin:16px}.ItemHeader_viewSwitchContainer__GVmi1{display:flex;flex-direction:column;width:100%;padding:0 24px}.ItemHeader_disclaimer__OX71g{display:flex;justify-content:center;align-items:center;font-size:10px;font-weight:600;font-stretch:normal;font-style:normal;line-height:16px;letter-spacing:normal;margin-bottom:16px}.ItemHeader_diclaimerIconBorder__rLivp{display:flex;align-items:center;justify-content:center;width:19px;height:19px;padding:0;border:2px solid var(--color-neutral-200);background-color:var(--color-background);border-radius:25px;color:var(--color-primary);margin-right:8px}.ItemHeader_viewSwitch__ah_WI{display:flex;justify-content:center;margin-bottom:32px}.ItemHeader_segmentedController__U4aA6{display:flex;justify-content:space-between;max-width:-moz-fit-content;max-width:fit-content;border:2px solid var(--color-neutral-200);border-radius:30px;padding:2px}body.dark .ItemHeader_segmentedController__U4aA6{border-color:var(--color-neutral-300)}.ItemHeader_segmentedController__U4aA6>*{padding:8px 22px;border-radius:30px;cursor:pointer;color:var(--color-header);font-size:12px;font-weight:600;font-stretch:normal;font-style:normal;line-height:20px;letter-spacing:normal}.ItemHeader_segmentedController__U4aA6>.ItemHeader_active__0gjea{background-color:var(--color-primary);color:var(--color-light)}.ItemHeader_inspectOnSteam__2AHGi{position:absolute;margin-top:-75px;margin-left:30px}.ItemHeader_inspectOnSteam__2AHGi>a>.ItemHeader_steamLogo__tgjAe{margin-right:10px}.ItemHeader_inspectOnSteam__2AHGi>a{display:flex;font-weight:700;align-items:center}.ItemHeader_row__iHBru{display:flex;justify-content:space-between;margin-bottom:16px}.ItemHeader_secondaryItemActions__D3Ta5{display:flex}.ItemHeader_secondaryItemActions__D3Ta5>div{margin-left:16px}.ItemHeader_sellerDesktop__EPCkM{border-radius:10px;padding:24px;display:flex}body.dark .ItemHeader_sellerDesktop__EPCkM{border:1px solid var(--color-neutral-200)}body:not(.dark) .ItemHeader_sellerDesktop__EPCkM{border:1px solid var(--color-light)}.ItemHeader_buttonContainer__lkDS8{width:83%}.ItemHeader_buttonFloat___8E0E{float:right}.ItemHeader_buttonContainerFlex__hmPkn{flex-direction:column;display:flex}.ItemHeader_goTo3D__y8cbk{float:right;margin-bottom:20px}.ItemHeader_priceContainer__1KncH{display:flex;justify-content:space-between;width:100%}.ItemHeader_buffPrice__mxXIM{white-space:nowrap}.ItemHeader_buffAndPrimary__UVuBE{display:flex;align-items:center}.ItemHeader_pricePrimary__PPxqo{text-align:right;font-weight:600;font-size:22px;margin-left:16px;white-space:nowrap}.ItemHeader_stickers__1O2pr{display:flex;font-size:12px;color:var(--color-neutral-300)}.ItemHeader_sticker__LIrAq{display:flex;flex-direction:column;align-items:center;position:relative;margin-right:10px}.ItemHeader_sticker__LIrAq>img{width:46px;transition:transform .1s}.ItemHeader_sticker__LIrAq img:hover{transform:scale(1.5) translateY(-10%)}.ItemHeader_sticker__LIrAq:hover .ItemHeader_hover__32J2E{display:flex}.ItemHeader_stickersHeader__KAlYB{font-weight:600;margin-bottom:20px}.ItemHeader_pricesMobile__k9Z07{display:none}.ItemHeader_savings__X2B1Z{font-weight:600;font-size:14px;line-height:20px;color:var(--color-float-dark-green);margin-left:16px}.ItemHeader_savingsMinus__a2DiB{font-weight:600;font-size:14px;line-height:20px;color:var(--color-float-light-red)}@media only screen and (max-width:768px){.ItemHeader_actualImage__tO689{margin:0}.ItemHeader_inspectOnSteam__2AHGi,.ItemHeader_viewSwitchContainer__GVmi1 .ItemHeader_indicator__48AsS{display:none}.ItemHeader_pricesMobile__k9Z07{display:block;padding-bottom:20px;border-bottom:1px solid var(--color-neutral-200)}.ItemHeader_goTo3D__y8cbk,.ItemHeader_sellerDesktop__EPCkM{display:none}.ItemHeader_stickers__1O2pr{position:relative}.ItemHeader_sticker__LIrAq{position:static}}.ItemHeader_viewContainer__0qetT{border-radius:10px;display:flex;flex-direction:column;align-items:center;margin-bottom:30px}body.dark .ItemHeader_viewContainer__0qetT{background:radial-gradient(47.9% 47.9% at 50% 52.1%,#1c2d46 0,rgba(51,61,77,.38) 100%)}.ItemHeader_actualImage__nHO5P{display:flex;flex-direction:column;align-items:center;margin:0}.ItemHeader_actualImage__nHO5P>img,.ItemHeader_actualImage__nHO5P>picture,.ItemHeader_actualImage__nHO5P>picture>img{max-width:100%}.ItemHeader_row__SLLNR{display:flex;justify-content:space-between;margin-bottom:16px}.ItemHeader_secondaryItemActions__9qCB4{display:flex}.ItemHeader_secondaryItemActions__9qCB4>div{margin-left:16px}.ItemHeader_sellerDesktop__ExR4X{border-radius:10px;padding:24px;display:flex}body.dark .ItemHeader_sellerDesktop__ExR4X{border:1px solid var(--color-neutral-200)}body:not(.dark) .ItemHeader_sellerDesktop__ExR4X{border:1px solid var(--color-light)}.ItemHeader_buttonContainer__HAPAQ{width:83%}.ItemHeader_buttonFloat__95BFl{float:right}.ItemHeader_buttonContainerFlex__AyPxH{flex-direction:column;display:flex}.ItemHeader_priceContainer__7QCB9{display:flex;justify-content:space-between;width:100%}.ItemHeader_pricePrimary__C36fG{text-align:right;font-weight:600;font-size:22px;margin-left:16px;white-space:nowrap}.ItemHeader_pricesMobile__ElNC5{display:none}.ItemHeader_savings__hec_1{font-weight:600;font-size:14px;line-height:20px;color:var(--color-float-dark-green);margin-left:16px}.ItemHeader_savingsMinus__JckPD{font-weight:600;font-size:14px;line-height:20px;color:var(--color-float-light-red)}.ItemHeader_goTo3D__Bdv1C{float:right;margin-bottom:20px}@media only screen and (max-width:768px){.ItemHeader_pricesMobile__ElNC5{display:block;padding-bottom:20px;border-bottom:1px solid var(--color-neutral-200)}.ItemHeader_goTo3D__Bdv1C,.ItemHeader_sellerDesktop__ExR4X{display:none}.ItemHeader_pricePrimary__C36fG{margin-left:0}}.FloatBar_container__iQHOz{width:100%}.FloatBar_bar__0dl73{width:100%;position:relative;display:inline-flex}.FloatBar_fn___TQKw{background-color:var(--color-float-dark-green);width:7%;height:12px;border-top-left-radius:6px;border-bottom-left-radius:6px}.FloatBar_mw__Xeeck{width:8%}.FloatBar_ft__5YCGn,.FloatBar_mw__Xeeck{background-color:var(--color-float-light-green);height:12px}.FloatBar_ft__5YCGn{width:23%}.FloatBar_ww__NwlPg{background-color:var(--color-float-light-red);width:7%;height:12px}.FloatBar_bs__xiw6t{background-color:var(--color-float-red);width:55%;height:12px;border-top-right-radius:6px;border-bottom-right-radius:6px}.FloatBar_float__F5966{width:2px;background-color:#000;height:100%;position:absolute}.ItemDetails_table__mSo9F{display:flex;flex-direction:column;width:100%}.ItemDetails_row__gcoCh{display:flex;justify-content:space-between;margin-bottom:16px}.ItemDetails_wear__2Bwfz{font-weight:600}.ItemDetails_floatbar__XtA3N{padding-bottom:16px;border-bottom:1px solid var(--color-neutral-200)}.ItemDetails_floatbar__XtA3N>*{flex:1 1}.ItemDetails_raritycell__f7bIf{display:flex;align-items:center}.ItemDetails_raritybar__Ib3LD{width:48px;height:4px;border-radius:2px;margin-right:8px}.ItemDetails_existsFrom__JkWBW{margin-bottom:32px}.ItemDetails_sellerMobile__X3rQF{display:none}.ItemDetails_sellerHeader__CN7hH{font-weight:600;margin-bottom:16px}.ItemDetails_priceContainer__OiVUf{display:flex;justify-content:space-between;width:100%}.ItemDetails_prices__cVHjG{padding-top:32px;border-top:1px solid var(--color-neutral-200);margin-bottom:40px}.ItemDetails_pricePrimary__j0nKS{text-align:right;font-weight:600;font-size:22px;margin-left:16px;white-space:nowrap}.ItemDetails_buffAndPrimary__lrDcl{display:flex;align-items:center}.ItemDetails_buffPrice__6r_i2{white-space:nowrap}.ItemDetails_button__FqHCF{display:flex}.ItemDetails_button__FqHCF>:last-child{margin-left:16px;flex-grow:1}.ItemDetails_buttonDiv__NJB_O{display:flex;flex-direction:column}.ItemDetails_buttonDiv__NJB_O>*{margin-bottom:10px}.ItemDetails_savings__YC0QE{font-weight:600;font-size:14px;line-height:20px;color:var(--color-float-dark-green);margin-left:16px}.ItemDetails_savingsMinus__2Lvmk{font-weight:600;font-size:14px;line-height:20px;color:var(--color-float-light-red)}.ItemDetails_delayedDeliveryCard__cOSaT{margin-bottom:24px;padding:16px 24px!important}@media only screen and (max-width:768px){.ItemDetails_sellerMobile__X3rQF{display:block}.ItemDetails_button__FqHCF{position:fixed;bottom:120px;left:0;width:100%;padding:10px var(--margin);z-index:1}.ItemDetails_button__FqHCF>button{align-self:inherit}.ItemDetails_mobileBid__U1BTA,.ItemDetails_mobileBid__U1BTA>button{background-color:var(--color-background)!important}.ItemDetails_prices__cVHjG{display:none}.ItemDetails_delayedDeliveryCard__cOSaT{margin-top:20px}}.ItemDetails_rowValue__x1_5m{font-weight:600}.ItemDetails_collectionHeader__tHz3G{font-weight:600;font-size:16px}.ItemDetails_table___CZ3G{display:flex;flex-direction:column;width:100%}.ItemDetails_row__BgyMQ{display:flex;justify-content:space-between;margin-bottom:16px}.ItemDetails_sellerMobile__fi2Tz{display:none}.ItemDetails_sellerHeader__v6iru{font-weight:600;margin-bottom:16px}.ItemDetails_priceContainer__xywaC{width:100%}.ItemDetails_prices__mxZG7{padding-top:32px;border-top:1px solid var(--color-neutral-200);margin-bottom:40px}.ItemDetails_pricePrimary__UHPfh{text-align:right;font-weight:600;font-size:22px;margin-left:16px;white-space:nowrap}.ItemDetails_button__DpCHC{display:flex}.ItemDetails_button__DpCHC>:last-child{margin-left:16px;flex-grow:1}.ItemDetails_buttonDiv__3aLK0{display:flex;flex-direction:column}.ItemDetails_buttonDiv__3aLK0>*{margin-bottom:10px}.ItemDetails_savings__9TrCp{font-weight:600;font-size:14px;line-height:20px;color:var(--color-float-dark-green);margin-left:16px}.ItemDetails_savingsMinus__lcpdK{font-weight:600;font-size:14px;line-height:20px;color:var(--color-float-light-red)}@media only screen and (max-width:768px){.ItemDetails_sellerMobile__fi2Tz{display:block}.ItemDetails_button__DpCHC{position:fixed;bottom:120px;left:0;width:100%;padding:10px var(--margin);z-index:1}.ItemDetails_button__DpCHC>button{align-self:inherit}.ItemDetails_mobileBid__An0ml,.ItemDetails_mobileBid__An0ml>button{background-color:var(--color-background)!important}.ItemDetails_prices__mxZG7{display:none}}.ItemTitle_header__7a9e7{display:flex;align-items:center;margin-bottom:10px;margin-top:32px}.ItemTitle_header__7a9e7>h1{margin-left:16px}.ItemTitle_quote__6SRAp{color:var(--color-neutral-400);margin:0 0 10px}.ItemTitle_statTrak__7uIKe{font-family:var(--font-body);font-weight:400;font-size:24px;color:var(--color-stattrak);margin-left:24px}.ItemTitle_header__DtNLP{display:flex;align-items:center;margin-bottom:10px;margin-top:32px}.ItemTitle_header__DtNLP>h1{margin-left:16px!important}@media only screen and (max-width:768px){.ItemTitle_header__DtNLP>h1{margin-top:0!important;margin-left:16px!important}}.Item_item__XTX4r h1{margin:0}.Item_layoutEvio__rs_b_,.Item_layout__sPHi2{display:flex;font-size:14px;padding-top:10px;margin-bottom:40px}.Item_layout__sPHi2>:first-child{flex:3 1;margin-right:43px}.Item_layoutEvio__rs_b_>:first-child{flex:1 1;margin-right:43px}.Item_layoutEvio__rs_b_>:last-child,.Item_layout__sPHi2>:last-child{flex:1 1}.Item_renderOutput__1gbq0{height:100%}.Item_hover__pzGQ4{display:none;position:absolute;left:0;top:60px;white-space:nowrap;flex-direction:column;justify-content:center;padding:10px 16px;border:2px solid var(--color-neutral-200);border-radius:10px;background-color:var(--color-background);z-index:1}@media only screen and (max-width:768px){.Item_item__XTX4r{flex-direction:column;margin-bottom:100px}.Item_item__XTX4r h1,.Item_item__XTX4r>:first-child{margin-top:20px}.Item_layoutEvio__rs_b_,.Item_layout__sPHi2{flex-direction:column}.Item_layout__sPHi2>:first-child{flex:initial;margin-right:0}.Item_layout__sPHi2>:last-child{flex:initial}.Item_layoutEvio__rs_b_>:first-child{flex:initial;margin-right:0}.Item_layoutEvio__rs_b_>:last-child{flex:initial}.Item_delayedDeliveryCard__N0XVF{margin-bottom:24px;padding:16px 24px!important}}@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap");@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap");:root{font-size:62.5%;--font-header:"Gilroy-Bold",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;--font-header-small:"Gilroy-SemiBold",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;--font-header-medium:"Gilroy-Medium",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;--font-body:"Open Sans",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;--font-size-body-large:16px;--font-size-body-small:14px;--font-size-body:var(--font-size-body-large);--font-size-caption-large:12px;--font-size-caption-small:11px;--font-size-footer-small:12px;--font-size-footer-x-small:11px;--line-height:1.5em;--color-dark:#0b1022;--color-light-darker:#e0e2e6;--color-light:#555;--color-neutral-0:#1f1f1f;--color-neutral-100:var(--color-light);--color-neutral-200:var(--color-light-darker);--color-neutral-300:#8b95ae;--color-neutral-400:#fff;--color-neutral-500:#fff;--color-neutral-600:var(--color-dark);--color-primary-light:#e86fa2;--color-primary:#ea1470;--color-primary-dark:#d71367;--color-error-light:#fac8ce;--color-error:#d09da2;--color-error-dark:#6d2028;--color-warning-light:#fef2da;--color-warning:#e1d4be;--color-warning-dark:#904122;--color-info-light:#e7f0f4;--color-info:#c6d9e9;--color-info-dark:#224e90;--color-float-dark-green:#79af61;--color-float-light-green:#9bc987;--color-float-yellow:#e6cc8a;--color-float-light-red:#e95658;--color-float-red:#b8191b;--color-rarity-consumer-grade:#b0c2d8;--color-rarity-industrial-grade:#5c99d5;--color-rarity-mil-spec-grade:#446df8;--color-rarity-restricted:#834ef8;--color-rarity-classified:#d239df;--color-rarity-covert:#eb4f50;--color-rarity-contraband:#e4ae49;--color-stattrak:#cd6a39;--color-card-background:var(--color-neutral-0);--color-card-flat-background:var(--color-neutral-100);--color-modal-background:var(--color-neutral-0);--shadow-card:0 0 8px hsla(0,0%,76%,.15);--color-input-background:var(--color-background);--color-input-border:var(--color-neutral-200);--color-input-placeholder:var(--color-neutral-300);--color-input-separator:var(--color-input-border);--color-input-disabled:var(--color-neutral-100);--color-grey:#171f35;--color-grey-light:#232e4e;--color-grey-lighter:#676c7e;--color-grey-blue:#3d6b8f;--color-blue-light:#3d4e8f;--color-blue-dark:#001462;--color-text-sub:#8791ab;--color-shadow:rgba(0,0,0,.25);--margin:20px;--margin-tablet:60px;--margin-widescreen:160px;--margin-horizontal:var(--margin);--border-radius:5px;--media-tablet:768px;--media-desktop:1024px;--media-widescreen:1216px;--media-fullhd:1408px}.dark,body[color-theme=dark]{--color-neutral-0:var(--color-dark);--color-neutral-100:#1e2933;--color-neutral-200:#1d2530;--color-neutral-300:#8293ac;--color-neutral-400:var(--color-light-darker);--color-neutral-500:var(--color-light);--color-neutral-600:#131920;--color-primary-light:#9c215566;--color-primary:#b82e69;--color-primary-dark:#9c2155;--color-error-light:#d89ca4;--color-error:#a45f69;--color-error-dark:#6d2028;--color-warning-light:#e7d1a4;--color-warning:#b7995b;--color-warning-dark:#904122;--color-info-light:#becfd6;--color-info:#638694;--color-info-dark:#224e90;--color-float-dark-green:#48673b;--color-float-light-green:#83a375;--color-float-yellow:#dcc68b;--color-float-light-red:#b13536;--color-float-red:#881315;--color-stattrak:#ba8e78;--color-card-background:var(--color-neutral-600);--color-card-flat-background:var(--color-neutral-600);--color-modal-background:var(--color-neutral-600);--shadow-card:none;--color-input-background:var(--color-neutral-200);--color-input-border:var(--color-neutral-100);--color-input-placeholder:var(--color-neutral-300);--color-input-separator:var(--color-neutral-300);--color-input-disabled:var(--color-neutral-0)}body{--color-background:var(--color-neutral-0);--color-text:var(--color-neutral-400);--color-header:var(--color-neutral-500);--color-border:var(--color-neutral-100);--border:1px solid var(--color-border)}@media only screen and (min-width:768px){:root{--margin-horizontal:var(--margin-tablet)}}@media only screen and (min-width:1216px){:root{--margin-horizontal:var(--margin-widescreen)}}body,html{padding:0;margin:0;font-family:var(--font-body);font-size:var(--font-size-body);font-weight:400;color:var(--color-text);line-height:var(--line-height);background-color:var(--color-background);scroll-behavior:smooth}a{color:inherit;text-decoration:none}*{box-sizing:border-box}h1{font-family:var(--font-header-small)}h2,h3,h4,h5,h6{font-family:var(--font-body)}h1,h2,h3,h4,h5,h6{line-height:1.4em;color:var(--color-header)}h1{font-size:34px;margin:72px 0 40px}h2{font-size:24px}h3{font-size:20px}h4{font-size:16px}h5{font-size:14px}h6{font-size:12px}@media only screen and (max-width:768px){h1{font-size:24px;margin:30px 0 20px}h2{font-size:20px}h3{font-size:16px}h4{font-size:14px}h5{font-size:12px}h6{font-family:var(--font-header-small);font-size:11px}}p{font-size:var(--font-size-body-large)}p.small{font-size:var(--font-size-body-small)}.body-small{font-weight:400}.body-small,.body-small-bold{font-family:var(--font-body);font-size:var(--font-size-body-small)}.body-small-bold{font-weight:600}.footer-small{font-weight:400}.footer-small,.footer-small-bold{font-family:var(--font-body);font-size:var(--font-size-footer-small)}.footer-small-bold{font-weight:600}button{font-family:var(--font-header)}button:hover{cursor:pointer}.fade-enter{opacity:0}.fade-enter-active,.fade-exit{opacity:1}.fade-exit-active{opacity:0}.fade-enter-active,.fade-exit-active{transition:opacity .5s}@import url("//hello.myfonts.net/count/3daaf1");@font-face{font-family:Gilroy-SemiBold;src:url(/_next/static/media/font.22897a51.woff2) format("woff2"),url(/_next/static/media/font.9c7d6dcf.woff) format("woff")}@font-face{font-family:Gilroy-Medium;src:url(/_next/static/media/font.e9fc365b.woff2) format("woff2"),url(/_next/static/media/font.8f7bba8e.woff) format("woff")}@font-face{font-family:Gilroy-Bold;src:url(/_next/static/media/font.1d40811b.woff2) format("woff2"),url(/_next/static/media/font.1999397c.woff) format("woff")}.ProgressiveImage_picture__nprEa{display:flex;align-items:center;justify-content:center}.ErrorBar_errorbar__avZfe{--bottom:300px;width:400px;margin-left:-200px;background-color:var(--color-error-light);color:var(--color-error-dark);font-size:16px;line-height:26px;border-radius:6px;border:1px solid var(--color-error);padding:12px 24px;position:fixed;z-index:10;left:50%;bottom:var(--bottom);visibility:visible;animation:ErrorBar_fadein__G98jk .5s,ErrorBar_stay__h3ayI 4s .5s;display:flex;justify-content:space-between;filter:drop-shadow(1px 4px 6px rgba(217,163,163,.2))}.ErrorBar_iconContainer__Xj17t{padding:2px 0}.ErrorBar_content__N6TJc{flex:1 1;padding:0 8px}.ErrorBar_cta__6R5UR{text-decoration:underline}.ErrorBar_cta__6R5UR,.ErrorBar_dismiss__KaHxO{font-weight:600;font-size:16px;line-height:22px}.ErrorBar_dismiss__KaHxO{cursor:pointer}@keyframes ErrorBar_fadein__G98jk{0%{bottom:0;opacity:0}to{bottom:var(--bottom);opacity:1}}@keyframes ErrorBar_stay__h3ayI{0%{bottom:var(--bottom);opacity:1}to{bottom:var(--bottom);opacity:1}}@keyframes ErrorBar_fadeout__PCluT{0%{bottom:var(--bottom);opacity:1}to{bottom:0;opacity:0}}@keyframes Spinner_spin__RdIhk{0%{transform:rotate(0)}to{transform:rotate(359deg)}}.Spinner_spinnerBox__C2yMy{width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:transparent;position:relative}.Spinner_spinnerBox__C2yMy>div{position:absolute}.Spinner_spinner__iiwLJ{border-top:3px solid var(--color-primary);border-left:3px solid var(--color-primary);border-radius:50%;animation:Spinner_spin__RdIhk .5s linear 0s infinite}.Spinner_done__nTR5p>.Spinner_spinner__iiwLJ{border:3px solid var(--color-primary);border-radius:50%;animation:none}.Spinner_normal__LJsd5{width:90px;height:90px}.Spinner_small__VLL9F{width:25px;height:25px}.Button_button___PIfE{--color-blue-dark:#001462;--color-blue-lighter:#7081c2;--color-topbar:#d4dbf7;--color-primary-hover:var(--color-primary-dark);--color-primary-pressed:var(--color-primary-dark);--color-primary-focused:var(--color-primary);--color-primary-disabled:var(--color-neutral-200);--font-color-primary:#fff;--font-color-primary-disabled:var(--color-neutral-300);--color-cta:var(--color-primary);--color-cta-hover:var(--color-primary-dark);--color-cta-disabled:var(--color-neutral-200);--color-cta-secondary:var(--color-primary);--color-cta-secondary-hover:var(--color-primary-dark);--color-cta-secondary-disabled:var(--color-neutral-200);--font-color-cta-secondary:var(--color-primary);--color-small-secondary:var(--color-neutral-200);--color-small-secondary-hover:var(--color-neutral-300)}body.dark .Button_button___PIfE{--color-primary-disabled:var(--color-primary-light);--font-color-primary:var(--color-neutral-500);--font-color-primary-disabled:var(--color-neutral-300);--color-cta-secondary-disabled:var(--color-neutral-100);--font-color-cta-secondary:var(--color-neutral-500)}.Button_button___PIfE{display:flex;align-items:center;justify-content:center;white-space:nowrap;height:41px;padding:0 25px;border:none;border-radius:20px;font-family:var(--font-body);font-weight:600;font-size:14px;background-color:var(--color-primary);color:var(--font-color-primary)}.Button_button___PIfE:hover{background-color:var(--color-primary-hover)}.Button_button___PIfE:active{background-color:var(--color-primary-pressed)}.Button_button___PIfE[disabled]{background-color:var(--color-primary-disabled);color:var(--font-color-primary-disabled)}.Button_button___PIfE>.Button_content__guezZ{display:flex;align-items:center}.Button_button___PIfE>.Button_content__guezZ>picture{margin-right:10px}.Button_spinner__pfSbw{position:absolute}.Button_button___PIfE.Button_waiting__syZQX>.Button_content__guezZ{visibility:hidden}.Button_button___PIfE.Button_waiting__syZQX>.Button_spinner__pfSbw>div>div{border-color:var(--color-light)!important}.Button_cta__gVRxV{    width: 100%;padding:0 70px;height:50px;border-radius:25px}.Button_button___PIfE.Button_secondarycta__KC01K{background-color:transparent;color:var(--font-color-cta-secondary);border:1.5px solid var(--color-cta-secondary);height:50px;border-radius:25px;padding:0 70px}.Button_secondarycta__KC01K:hover{background-color:transparent}.Button_secondarycta__KC01K:active,.Button_secondarycta__KC01K:hover{border-color:var(--color-cta-secondary-hover)}.Button_secondarycta__KC01K[disabled]{border-color:var(--color-cta-secondary-disabled);color:var(--font-color-primary-disabled)}.Button_secondarycta__KC01K.Button_waiting__syZQX>.Button_spinner__pfSbw>div>div{border-color:var(--color-cta-secondary)!important}.Button_button___PIfE.Button_smallsecondary__JH8Jh{background-color:transparent;color:var(--color-text);border:1.5px solid var(--color-small-secondary);box-shadow:none}.Button_smallsecondary__JH8Jh:hover{border-color:var(--color-small-secondary-hover)}.Button_smallsecondary__JH8Jh[disabled]{border-color:var(--color-cta-disabled);color:var(--font-color-primary-disabled)}.Button_smallsecondary__JH8Jh.Button_waiting__syZQX>.Button_spinner__pfSbw>div>div{border-color:var(--color-small-secondary)!important}.Button_button___PIfE.Button_topbar__KWcRj{background-color:transparent;color:var(--color-topbar);border:1.5px solid var(--color-topbar);filter:drop-shadow(0 0 50px rgba(218,223,246,.5));box-shadow:none}.Button_button___PIfE.Button_topbar__KWcRj:active,.Button_button___PIfE.Button_topbar__KWcRj:hover{color:var(--color-blue-lighter);border-color:var(--color-blue-lighter)}.Button_button___PIfE.Button_topbarinverse__IIRyF{background-color:transparent;color:var(--color-blue-dark);border:1.5px solid var(--color-blue-dark);box-shadow:none}body.dark .Button_button___PIfE.Button_topbarinverse__IIRyF{border:1.5px solid var(--color-topbar);color:var(--color-topbar)}@media only screen and (max-width:768px){.Button_button___PIfE.Button_secondarycta__KC01K,.Button_cta__gVRxV{padding:0 60px}}.GameNudge_nudgeContainer__Zaryu{display:flex;justify-content:center}.GameNudge_nudge__C0gUt{display:flex}.GameNudge_nudgeContent__CdSae{display:flex;justify-content:space-between;max-width:-moz-fit-content;max-width:fit-content;background-color:var(--color-dark);border-bottom-left-radius:25px;border-bottom-right-radius:25px;padding:4px 8px 8px}.GameNudge_nudgeContent__CdSae>span{color:var(--color-light-darker);font-size:16px;font-weight:600;padding:6px 8px;cursor:pointer}.GameNudge_highlighted__cAvnL{background:#363e63;border-radius:18px;cursor:default!important}.ArrowLeft_container__NS4W_{display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:16px;border:2px solid var(--color-neutral-200)}.ArrowLeft_container__NS4W_>*{background-color:var(--color-neutral-500);margin-right:3px}.DropdownMenu_eliteCTA__gZLvj{margin-top:0!important;padding:0 0 16px!important;border-bottom:1px solid var(--color-light)}.DropdownMenu_selector__ypndr{display:flex;align-items:center;position:relative;font-family:var(--font-body);font-size:var(--font-size-footer-small);font-weight:400;cursor:pointer;height:35px}.DropdownMenu_arrow__Tr518{margin-left:4px}.DropdownMenu_menu__Vb8L1{display:none;position:absolute;top:36px;align-items:center;margin:0;list-style-position:outside;list-style:none;padding:12px 16px;background:var(--color-card-background);border:1px solid var(--color-neutral-200);box-sizing:border-box;border-radius:10px;z-index:1}.DropdownMenu_langRow__XQ2zZ:hover .DropdownMenu_menu__Vb8L1,.DropdownMenu_selector__ypndr:hover .DropdownMenu_menu__Vb8L1{display:block}.DropdownMenu_item__V0iWl{display:flex;margin-top:4px;white-space:nowrap}.DropdownMenu_item__V0iWl:first-child{margin-top:0}.DropdownMenu_item__V0iWl>*{margin-left:10px}.DropdownMenu_item__V0iWl>:first-child{margin-left:0;width:28px}.DropdownMenu_item__V0iWl.DropdownMenu_active__HRQkI{font-weight:600}.DropdownMenu_item__V0iWl:hover{background:var(--color-neutral-200);opacity:.6;padding-left:16px;padding-right:16px;margin-left:-16px;margin-right:-16px}.DropdownMenu_changeCurrencyExplanation__xp0ol{color:var(--color-neutral-400);max-width:500px;text-align:center}.DropdownMenu_changeCurrencyExplanation__xp0ol button{margin-top:35px}.DropdownMenu_profileDropdown__T2V9F .DropdownMenu_menu__Vb8L1{top:38px;left:0}.DropdownMenu_profileDropdown__T2V9F .DropdownMenu_avatar__GeQbE img{width:33px;height:33px;border-radius:16px}.DropdownMenu_profileDropdown__T2V9F .DropdownMenu_item__V0iWl{margin-top:12px}.DropdownMenu_profileDropdown__T2V9F .DropdownMenu_item__V0iWl:first-child{margin-top:0}.DropdownMenu_profileDropdown__T2V9F .DropdownMenu_item__V0iWl>:first-child{width:unset}.DropdownMenu_profileDropdown__T2V9F .DropdownMenu_separator__NPsr4{border-top:1px solid var(--color-border);margin:12px 0 0}.DropdownMenu_profileDropdown__T2V9F>button{padding:0 4px}.DropdownMenu_profileDropdown__T2V9F .DropdownMenu_avatar__GeQbE{display:flex}.DropdownMenu_profileDropdown__T2V9F .DropdownMenu_arrow__Tr518{margin-left:8px}.DropdownMenu_selector__ypndr.DropdownMenu_profileDropdown__T2V9F{padding-bottom:15px;box-sizing:content-box;box-sizing:initial;padding-top:15px}.DropdownMenu_profileDropdown__T2V9F .DropdownMenu_menuItems__I7gaD{font-family:var( --font-body);display:none;position:absolute;align-items:center;list-style-position:outside;list-style:none;padding:16px;background:var(--color-card-background);box-sizing:border-box;border-radius:6px;z-index:1;top:53px;right:0;margin:10px 0 0;border:2px solid var(--color-light)}body.dark .DropdownMenu_menuItems__I7gaD{border:2px solid var(--color-neutral-200)}.DropdownMenu_profileDropdown__T2V9F .DropdownMenu_menuItems__I7gaD .DropdownMenu_item__V0iWl:hover{background:var(--color-neutral-100);opacity:1;padding-left:8px;padding-right:8px;margin-left:-8px;margin-right:-8px;border-radius:3px}.DropdownMenu_selector__ypndr:hover .DropdownMenu_menuItems__I7gaD{display:block}.DropdownMenu_selector__ypndr:hover .DropdownMenu_menuItems__I7gaD.DropdownMenu_hide__slzND{display:none}.DropdownMenu_profileDropdown__T2V9F .DropdownMenu_menuItems__I7gaD li{margin-top:8px;display:flex;align-items:center;color:var(--color-neutral-500);font-weight:400;line-height:22px;padding:4px 0}.DropdownMenu_profileDropdown__T2V9F .DropdownMenu_menuItems__I7gaD li:last-child{margin-top:12px}.DropdownMenu_profileDropdown__T2V9F .DropdownMenu_menuItems__I7gaD li.DropdownMenu_item__V0iWl a{display:flex;align-items:center;width:170px}.DropdownMenu_profileDropdown__T2V9F .DropdownMenu_menuItems__I7gaD li.DropdownMenu_item__V0iWl a.DropdownMenu_subitem___TS4t{width:100%;justify-content:space-between}.DropdownMenu_profileDropdown__T2V9F .DropdownMenu_menuItems__I7gaD li.DropdownMenu_item__V0iWl a.DropdownMenu_subitem___TS4t>div{display:flex;align-items:center}.DropdownMenu_profileDropdown__T2V9F .DropdownMenu_menuItems__I7gaD li .DropdownMenu_image__v04UJ{padding-right:8px}.DropdownMenu_dropdownL__VLkuk.DropdownMenu_menu__Vb8L1{font-family:var( --font-body);top:53px;margin-top:10px;left:auto;right:0;padding:16px;min-width:170px;width:auto;border-radius:6px;border:2px solid var(--color-light)}.DropdownMenu_submenu__ZNy_E{display:none}.DropdownMenu_submenu__ZNy_E.DropdownMenu_show__wpG1W{display:block}body.dark .DropdownMenu_dropdownL__VLkuk.DropdownMenu_menu__Vb8L1{border:2px solid var(--color-neutral-200)}.DropdownMenu_dropdownL__VLkuk.DropdownMenu_menu__Vb8L1 li.DropdownMenu_item__V0iWl{color:var(--color-neutral-500);font-weight:400;margin-top:7px;font-size:12px;line-height:22px}.DropdownMenu_dropdownL__VLkuk.DropdownMenu_menu__Vb8L1 li.DropdownMenu_item__V0iWl:hover{background:var(--color-neutral-100);opacity:1;padding-left:8px;padding-right:8px;margin-left:-8px;margin-right:-8px;border-radius:3px}.DropdownMenu_dropdownL__VLkuk.DropdownMenu_menu__Vb8L1 .DropdownMenu_title__H1s_N{font-weight:700;font-size:18px;line-height:28px;color:var(--color-neutral-500);display:flex;align-items:center;gap:8px;padding-bottom:10px}.DropdownMenu_dropdownL__VLkuk.DropdownMenu_menu__Vb8L1 .DropdownMenu_title__H1s_N .DropdownMenu_image__v04UJ{border:1px solid var(--color-neutral-200);width:24px;height:24px;background-color:#fff}.DropdownMenu_dropdownL__VLkuk.DropdownMenu_menu__Vb8L1 .DropdownMenu_title__H1s_N .DropdownMenu_image__v04UJ>*{background-color:var(--color-neutral-500)}body.dark .DropdownMenu_dropdownL__VLkuk.DropdownMenu_menu__Vb8L1 .DropdownMenu_title__H1s_N .DropdownMenu_image__v04UJ{background-color:var(--color-light)}body.dark .DropdownMenu_dropdownL__VLkuk.DropdownMenu_menu__Vb8L1 .DropdownMenu_title__H1s_N .DropdownMenu_image__v04UJ>*{background-color:var(--color-neutral-100)}.DropdownMenu_dropdownL__VLkuk.DropdownMenu_menu__Vb8L1 .DropdownMenu_title__H1s_N img{height:10px;width:auto}@media only screen and (min-width:768px){.DropdownMenu_selector__ypndr{font-family:var(--font-header-medium);font-size:14px;font-weight:400}.DropdownMenu_menu__Vb8L1{color:var(--color-text);left:-16px}.DropdownMenu_item__V0iWl.DropdownMenu_active__HRQkI{font-family:var(--font-header-small)}}.Badge_container__7Q5JZ{position:relative}.Badge_badge__YHU7a{position:absolute;top:0;right:0;height:12px;width:12px;font-size:10px;color:var(--color-background);background-color:#eb5757;padding:1px 3px;border-radius:8px;line-height:1;box-sizing:border-box;text-align:center}.Modal_background__SjnhA{display:flex;position:fixed;align-items:center;justify-content:center;z-index:2;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.5)}.Modal_modal__DX9SS{position:relative;background-color:var(--color-modal-background);box-shadow:0 4px 20px var(--color-shadow);border-radius:10px;display:flex;flex-direction:column;align-items:center;padding:60px;max-height:100%;max-width:100%;overflow-y:auto}body.dark .Modal_modal__DX9SS{border:var(--border)}.Modal_modal__DX9SS .Modal_close__iCgaZ{position:absolute;right:27px;top:27px;cursor:pointer;z-index:3;background-color:var(--color-neutral-300)}@media only screen and (max-width:768px){.Modal_modal__DX9SS{position:absolute;bottom:0;left:0;right:0;background-color:var(--color-modal-background);box-shadow:0 4px 20px var(--color-shadow);border-radius:10px;animation:Modal_slideUp__cuhk_ .7s ease;padding:60px var(--margin-horizontal)}@keyframes Modal_slideUp__cuhk_{0%{max-height:0}to{max-height:800px}}.Modal_background__SjnhA{background-color:rgba(0,0,0,.5);animation:Modal_darken__KdmaK .5s ease}@keyframes Modal_darken__KdmaK{0%{background-color:transparent}to{background-color:rgba(0,0,0,.5)}}.Modal_modal__DX9SS .Modal_close__iCgaZ{position:absolute;right:20px;top:20px;cursor:pointer;z-index:2}}.TopBar_header__ZzGiD{position:fixed;margin-top:0;left:0;width:100%;height:80px;z-index:3;background-color:var(--color-dark)}.TopBar_center__0j8va{display:flex;justify-content:center}.TopBar_rightAlign__L6No8{display:flex;justify-content:flex-end}.TopBar_nav__zYIdJ{display:flex;flex-wrap:wrap;align-items:center;height:100%;margin:0 160px;color:var(--color-light-darker)}.TopBar_nav__zYIdJ>*{height:100%;flex:1 1}.TopBar_nav__zYIdJ>a{display:flex;align-items:center;height:3.3rem}.TopBar_nav__zYIdJ>ul{display:flex;align-items:center;margin:0;padding:0;list-style-position:outside;list-style:none}.TopBar_nav__zYIdJ>li{display:inherit}.TopBar_item__mJzTI button{margin-left:28px}.TopBar_item__mJzTI a{display:flex;align-items:center;justify-content:center;margin:0;padding:0 20px;height:35px;font-family:var(--font-header-medium);font-weight:600;font-size:15px}.TopBar_nav__zYIdJ>ul>.TopBar_icon__9azCu>a{margin-left:0;padding:0;width:35px;height:35px}.TopBar_item__mJzTI .TopBar_active__4k6LX,.TopBar_item__mJzTI a:hover{background:#363e63;border-radius:17px}.TopBar_dropdown__tcWMk{margin-right:20px}.TopBar_avatar__RmmkD{margin-left:0}.TopBar_avatar__RmmkD img{width:33px;height:33px;border-radius:16px}.TopBar_nav__zYIdJ>ul>.TopBar_avatar__RmmkD a{padding:0;width:41px;height:41px;border-radius:20px}span.TopBar_balanceLabel__I0v_k{font-size:14px;font-weight:400;line-height:22px;color:#97a4d2}.TopBar_balanceAmount__9xtvb{white-space:nowrap}.TopBar_referBtn___eH1j .TopBar_referLink__f3WXA{border:2px solid var(--color-primary)!important;border-radius:30px!important;width:auto;height:45px!important;padding:14px 21px!important}.TopBar_referBtn___eH1j a div{font-size:14px;font-weight:600;line-height:22px;color:#fff}.TopBar_referBtn___eH1j a div img{margin-right:10px}@media only screen and (max-width:1216px){.TopBar_nav__zYIdJ{margin:0 60px}}@media only screen and (max-width:768px){.TopBar_header__ZzGiD{display:none}}.TopBar_nav__zYIdJ .TopBar_favorites__MCrlB a{padding-left:0;padding-right:0;margin-left:16px}.TopBar_nav__zYIdJ .TopBar_favorites__MCrlB div{display:flex;align-items:center;justify-content:center;height:33px;width:33px;border-radius:16px;border:2px solid rgba(214,220,245,.15)}.TopBar_nav__zYIdJ .TopBar_favorites__MCrlB img{height:16px;width:18px;margin-top:2px}.TopBar_nav__zYIdJ .TopBar_theme__v43By{width:38px;height:38px;background:no-repeat 50% url(/img/icons/Moon.svg);margin-left:20px;cursor:pointer}body.dark .TopBar_nav__zYIdJ .TopBar_theme__v43By{background:no-repeat 50% url(/img/icons/Sun.svg)}.TopBar_gameSelector__5_A3D{margin-right:16px}.GameDropdownMenu_selectGameButton__fzUZw,.GameDropdownMenu_selectGameButton__fzUZw:active,.GameDropdownMenu_selectGameButton__fzUZw:hover{border:0;background-color:transparent;color:#000;margin-right:25px}.GameDropdownMenu_selector__jqfx7{display:flex;align-items:center;position:relative;font-family:var(--font-body);font-size:var(--font-size-footer-small);font-weight:400;cursor:pointer;height:35px}.GameDropdownMenu_arrow__KgVQM{margin-left:4px}.GameDropdownMenu_langRow__ErY2R:hover .GameDropdownMenu_menu__eptWu,.GameDropdownMenu_selector__jqfx7:hover .GameDropdownMenu_menu__eptWu{display:block}.GameDropdownMenu_item__G43DP{display:flex;margin-top:4px;white-space:nowrap}.GameDropdownMenu_item__G43DP:first-child{margin-top:0}.GameDropdownMenu_item__G43DP>*{margin-left:10px}.GameDropdownMenu_item__G43DP>:first-child{margin-left:0;width:28px}.GameDropdownMenu_item__G43DP.GameDropdownMenu_active__Y1oU_{font-weight:600}.GameDropdownMenu_item__G43DP:hover{background:var(--color-neutral-200);opacity:.6;padding-left:16px;padding-right:16px;margin-left:-16px;margin-right:-16px}.GameDropdownMenu_profileDropdown__Z4xhl .GameDropdownMenu_menu__eptWu{top:38px;left:0}.GameDropdownMenu_profileDropdown__Z4xhl .GameDropdownMenu_item__G43DP{margin-top:12px}.GameDropdownMenu_profileDropdown__Z4xhl .GameDropdownMenu_item__G43DP:first-child{margin-top:0}.GameDropdownMenu_profileDropdown__Z4xhl .GameDropdownMenu_item__G43DP>:first-child{width:unset}.GameDropdownMenu_profileDropdown__Z4xhl .GameDropdownMenu_separator__1_6oJ{margin:12px 0 0}.GameDropdownMenu_profileDropdown__Z4xhl>button{padding:0 4px}.GameDropdownMenu_profileDropdown__Z4xhl .GameDropdownMenu_avatar__t6_13{display:flex}.GameDropdownMenu_profileDropdown__Z4xhl .GameDropdownMenu_arrow__KgVQM{margin-left:8px}.GameDropdownMenu_selector__jqfx7.GameDropdownMenu_profileDropdown__Z4xhl{padding-bottom:15px;box-sizing:content-box;box-sizing:initial;padding-top:15px}.GameDropdownMenu_profileDropdown__Z4xhl .GameDropdownMenu_menuItems__yLlKr{font-family:var( --font-body);display:none;position:absolute;align-items:center;list-style-position:outside;list-style:none;padding:16px;background:var(--color-card-background);box-sizing:border-box;border-radius:6px;z-index:1;top:53px;right:0;margin:10px 0 0;border:2px solid var(--color-light)}body.dark .GameDropdownMenu_menuItems__yLlKr{border:2px solid var(--color-neutral-200)}.GameDropdownMenu_selector__jqfx7:hover .GameDropdownMenu_menuItems__yLlKr{display:block}.GameDropdownMenu_selector__jqfx7:hover .GameDropdownMenu_menuItems__yLlKr.GameDropdownMenu_hide__qQpHv{display:none}.GameDropdownMenu_profileDropdown__Z4xhl .GameDropdownMenu_menuItems__yLlKr li{margin-top:8px;display:flex;align-items:center;color:var(--color-neutral-500);font-weight:400;line-height:22px;padding:4px 0}.GameDropdownMenu_profileDropdown__Z4xhl .GameDropdownMenu_menuItems__yLlKr li:last-child{margin-top:12px}.GameDropdownMenu_profileDropdown__Z4xhl .GameDropdownMenu_menuItems__yLlKr li.GameDropdownMenu_item__G43DP a{display:flex;align-items:center;width:170px}.GameDropdownMenu_profileDropdown__Z4xhl .GameDropdownMenu_menuItems__yLlKr li.GameDropdownMenu_item__G43DP a.GameDropdownMenu_subitem__CXpUc{width:100%;justify-content:space-between}.GameDropdownMenu_profileDropdown__Z4xhl .GameDropdownMenu_menuItems__yLlKr li.GameDropdownMenu_item__G43DP a.GameDropdownMenu_subitem__CXpUc>div{display:flex;align-items:center}.GameDropdownMenu_profileDropdown__Z4xhl .GameDropdownMenu_menuItems__yLlKr li .GameDropdownMenu_image__CTRMC{padding-right:8px}body.dark .GameDropdownMenu_dropdownL__JnXe_.GameDropdownMenu_menu__eptWu{border:2px solid var(--color-neutral-200)}@media only screen and (min-width:768px){.GameDropdownMenu_selector__jqfx7{font-family:var(--font-header-medium);font-size:14px;font-weight:400}.GameDropdownMenu_menu__eptWu{color:var(--color-text);left:-16px}.GameDropdownMenu_item__G43DP.GameDropdownMenu_active__Y1oU_{font-family:var(--font-header-small)}}.MobileTopBar_topbar__VPdK4{--topbar-height:7.2rem;position:fixed;margin-top:0;left:0;width:100%;height:var(--topbar-height);z-index:1;background:hsla(0,0%,100%,.95);box-shadow:0 0 1.8rem hsla(0,0%,76%,.25)}body.dark .MobileTopBar_topbar__VPdK4{background:var(--color-neutral-0);box-shadow:none;border-bottom:2px solid var(--color-neutral-100)}.MobileTopBar_topbar__VPdK4>*{height:100%}.MobileTopBar_nav__Lm_RT{display:flex;justify-content:space-between;align-items:center;height:100%;margin:0 20px}.MobileTopBar_nav__Lm_RT>ul{display:flex;align-items:center;margin:0;padding:0;list-style-position:outside;list-style:none}.MobileTopBar_nav__Lm_RT>ul>li{margin-left:16px}.MobileTopBar_nav__Lm_RT>ul>.MobileTopBar_language__rLxJj{margin-left:8px}.MobileTopBar_icon__tzJCB{display:flex;align-items:center;margin-left:2rem}.MobileTopBar_icon__tzJCB>a{margin-left:0;padding:0;width:3.5rem;height:3.5rem}.MobileTopBar_nav__Lm_RT>ul a:hover{background:rgba(214,220,245,.15);border-radius:1.7rem}.MobileTopBar_notloggedin__aE0i_>ul{left:0;right:inherit}.MobileTopBar_balanceLabel__A6VHB{color:var(--color-neutral-400);font-weight:400;font-size:14px;line-height:22px}.MobileTopBar_balanceAmount__RFSvG{font-weight:600;font-size:18px;line-height:28px;color:var(--color-neutral-500)}body.dark .MobileTopBar_buttonLight__A6_Gt,body:not(.dark) .MobileTopBar_buttonDark__Cp8wS{display:none}.MobileTopBar_referBtn__Enlf5 .MobileTopBar_referLink__HZvlf{border:2px solid var(--color-primary);border-radius:30px;width:auto;height:39px;padding:8px 16px}.MobileTopBar_referBtn__Enlf5 a img{width:20px}body.dark .MobileTopBar_referBtn__Enlf5 a div{color:#fff}.MobileTopBar_referBtn__Enlf5 .MobileTopBar_featherIcon__CCGCW{background-color:var(--color-neutral-500);margin-right:8px}body.dark .MobileTopBar_referBtn__Enlf5 .MobileTopBar_featherIconDark__MmEYN{background-color:#fff}.MobileTopBar_referBtn__Enlf5 a div{font-size:14px;font-weight:600;line-height:22px;color:var(--color-neutral-500)}@media only screen and (min-width:768px){.MobileTopBar_topbar__VPdK4{display:none}}.MobileTopBar_nav__Lm_RT .MobileTopBar_theme__LVb7U{width:20px;height:38px;background:no-repeat 50% url(/img/icons/Moon_dark.svg);margin-left:16px;cursor:pointer}body.dark .MobileTopBar_nav__Lm_RT .MobileTopBar_theme__LVb7U{background:no-repeat 50% url(/img/icons/Sun.svg)}.MobileTopBar_theme__LVb7U{display:none}.MobileBottomBar_bottombar__PuabB{position:fixed;bottom:0;left:0;width:100%;height:8rem;overflow-y:scroll;z-index:1;background:linear-gradient(180deg,#000a33,rgba(0,10,51,.94));color:var(--color-light-darker);font-family:var(--font-header-medium);font-weight:400;font-size:1.3rem}body.dark .MobileBottomBar_bottombar__PuabB{background:var(--color-neutral-0);border-top:2px solid var(--color-neutral-100)}.MobileBottomBar_nav__ok6Ph{height:100%;margin:0 var(--margin)}.MobileBottomBar_nav__ok6Ph>*{height:100%}.MobileBottomBar_bottombar__PuabB ul{display:flex;align-items:center;justify-content:space-evenly;margin:0;padding:0;list-style-position:outside;list-style:none}.MobileBottomBar_bottombar__PuabB li a{width:20vw;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center}.MobileBottomBar_bottombar__PuabB img{height:28px;width:28px;-o-object-fit:none;object-fit:none}.MobileBottomBar_inactive__3DsF0{color:#8293ac}@media only screen and (min-width:768px){.MobileBottomBar_bottombar__PuabB{display:none}}.Footer_footer__poAgU{--color-footer:var(--color-dark);--margin-frontpage:32px}.Footer_footer__poAgU a{cursor:pointer}.Footer_footer__poAgU{display:flex;flex-direction:column;background-color:var(--color-footer);padding-top:72px;padding-bottom:84px;padding-left:var(--margin-horizontal);padding-right:var(--margin-horizontal);margin-right:0}.Footer_footer__poAgU:not(.Footer_footer__poAgU.Footer_noLeftMargin__HQKr9){margin-left:0}body.dark .Footer_footer__poAgU{border-top:1px solid var(--color-neutral-100)}.Footer_footer__poAgU,.Footer_footer__poAgU a{color:var(--color-light)}.Footer_social__a1PKN{display:flex;justify-content:center;margin-bottom:60px}.Footer_social__a1PKN a{display:flex}.Footer_social__a1PKN img{width:40px;height:40px;margin-bottom:0;margin-left:20px;margin-right:20px}.Footer_topics__qIgFP{display:flex;justify-content:center;margin-bottom:60px}.Footer_topics__qIgFP a{font-size:18px;font-weight:600;margin:0 2vw}.Footer_info__ISa_q{display:flex;justify-content:center;font-size:14px;font-weight:600;color:var(--color-neutral-300);text-align:center}.Footer_info__ISa_q>*{margin:0 10px}.Footer_lemonway__hfZsh{width:144px;margin:0 auto 24px}@media only screen and (max-width:768px){.Footer_footer__poAgU{padding-top:24px}.Footer_footer__poAgU.Footer_noLeftMargin__HQKr9{margin-left:calc(-1 * var(--margin-horizontal))}.Footer_footer__poAgU:not(.Footer_showFooterOnMobile__bfIs1){display:none}.Footer_social__a1PKN{margin-bottom:40px;justify-content:flex-start}.Footer_social__a1PKN img{width:30px;height:30px;margin-left:0;margin-right:18px}.Footer_topics__qIgFP{margin-bottom:20px;flex-direction:column}.Footer_topics__qIgFP a{font-size:14px;margin:4px 0}.Footer_info__ISa_q{flex-direction:column;padding-bottom:20px;text-align:left;font-size:12px;font-weight:400}.Footer_info__ISa_q>*,.Footer_info__ISa_q>:first-child{margin:0}.Footer_lemonway__hfZsh{margin:0 0 24px}}</style>
		
		`
	
		for (var i = 0; i < loadedskin.length; i++){		
		
					if(loadedskin[i]['float']==wear) {
						if(loadedskin[i]['name'].includes('StatTrak'))
						var type = loadedskin[i]['name'].split(' ')[1]
						else
						var type = loadedskin[i]['name'].split(' ')[0]
						if(loadedskin[i]['name'].includes('StatTrak'))
						var skinstatrack = `<span class="ItemTitle_statTrak__7uIKe">StatTrak™</span>`
						else
						var skinstatrack = ""
					if(loadpage=="sold") var iframe = skinviewtemplate.replace("skinbutton",`<div class="ItemDetails_button__FqHCF">
                                                        <div class="ItemDetails_buttonDiv__NJB_O">
														
											
                                                            <button class="Button_button___PIfE Button_cta__gVRxV" style="    background-color: #4e4e4e;    cursor: auto;--color-primary-hover: #4e4e4e;--color-primary-pressed: #4e4e4e;">Sold searchsold</button>
															
                                                        </div>
                                                    </div>`).replace("searchsold",sold);
					else  var iframe = skinviewtemplate.replace("skinbutton",`<div class="ItemDetails_button__FqHCF">
                                                        <div class="ItemDetails_buttonDiv__NJB_O">
														<a href="https://buff.163.com/goods/idwebsiteskin?from=market#tab=selling&amp;min_paintwear=skinwarlow&amp;max_paintwear=skinwarhigh&amp;page_num=1&amp;paintseed=searchindex" target="_blank" rel="noopener noreferrer">
												
											
                                                            <button class="Button_button___PIfE Button_cta__gVRxV"><div class="Button_content__guezZ">Go to checkout</div></button>
															</a>
                                                        </div>
                                                    </div>`).replace("searchindex",index).replace("idwebsiteskin",id).replace("skinwarlow",wear).replace("skinwarhigh",(wear+1));
													
													
													
					iframe=iframe.replace('skinname',loadedskin[i]['name']).replace('skinwear',loadedskin[i]['wear']).replace('skinrarity',loadedskin[i]['rarity']).replace('skinseed',loadedskin[i]['seed'])
				.replace('skinpricebuff',loadedskin[i]['price']).replace('skinprice',Number(loadedskin[i]['price']*0.1360).toFixed(1))
				.replace('skinimage',loadedskin[i]['img']).replace('skinimage',loadedskin[i]['img']).replace('skintype',type)
				.replace('skinfloat',loadedskin[i]['float']).replace('skinfloatgraph',Number(loadedskin[i]['float'])*100).replace('skinstatrack',skinstatrack);
				
				for (var x = 1; x <= loadedskin[i]['stickers'].length; x++ )
					iframe = iframe.replace(`sticker${5-x}`,loadedskin[i]['stickers'][x-1]['img_url']).replace(`sticker${5-x}name`,loadedskin[i]['stickers'][x-1]['name']).replace(`sticker${5-x}wear`,(Number(loadedskin[i]['stickers'][x-1]['wear'])*100).toFixed(0));
				
				
				
				
				iframedoc.body.innerHTML = iframe;
				
				
				
				for (var x = 4; x > (4-loadedskin[i]['stickers'].length); x-- )
				iframedoc.getElementById(`stickerframe${x}`).style.visibility="visible"; 
					}
			}
			if(  document.body.offsetWidth <(1050)){
	iframedoc.getElementById('posit').style.cssText  ="flex-direction: column;";
	iframedoc.getElementById('positchild').style.cssText  ="    margin-right: 0;";
	}else{
	iframedoc.getElementById('posit').style.cssText  ="flex-direction: row;";
	iframedoc.getElementById('positchild').style.cssText  ="";
	
	}
	
;
}}

function gunset(target) {
	
	document.getElementById(target).classList.toggle('ellipse');
	document.getElementById(target).classList.toggle('ellipsef');
    if (document.getElementById(target).classList=='ellipsef')sel.unshift(target);
    if (document.getElementById(target).classList=='ellipse')sel = sel.filter(function(item) {return item !== target})
	last = 1;
window.history.replaceState('', '', updateURLParameter(window.location.href, "p", last));
	window.history.replaceState('', '', updateURLParameter(window.location.href, "g", sel));
	loaditems(items_saved);
}
    
function selectsale(target) {
	if (target == 0){
		document.getElementById('selectsales').style.backgroundColor  =" #ea146f";
		document.getElementById('selectlisted').style.backgroundColor  ="transparent";
		document.getElementById('soldorlisted').innerHTML  ="Sold";
		window.history.replaceState('', '', updateURLParameter(window.location.href, "sa", "s"));
		loadpage = "sold";
		last=1
		window.history.replaceState('', '', updateURLParameter(window.location.href, "p", last));
		document.getElementById('sortchange1').innerHTML ='<spam id="sor5"  class="ellipse"></spam>Sold : Recently'
		document.getElementById('sortchange2').innerHTML ='<spam id="sor6"  class="ellipse"></spam>Sold : Long ago'
		fetch(`https://raw.githubusercontent.com/csgosnipers/katocraft/main/${loadpage}/latest.json`)
		.then((response) => response.json())
		.then((json) =>loaditems(json))
	}
	if (target == 1){
		document.getElementById('selectlisted').style.backgroundColor  =" #ea146f";
		document.getElementById('selectsales').style.backgroundColor  ="transparent";
		document.getElementById('soldorlisted').innerHTML  ="Listed";
		window.history.replaceState('', '', updateURLParameter(window.location.href, "sa", "l"));
		loadpage = "listed"
		last=1
		window.history.replaceState('', '', updateURLParameter(window.location.href, "p", last));
		document.getElementById('sortchange1').innerHTML ='<spam id="sor5"  class="ellipse"></spam>Listed : Recently'
		document.getElementById('sortchange2').innerHTML ='<spam id="sor6"  class="ellipse"></spam>Listed : Long ago'
		fetch(`https://raw.githubusercontent.com/csgosnipers/katocraft/main/${loadpage}/latest.json`)
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
window.history.replaceState('', '', updateURLParameter(window.location.href, "p", last));
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
	window.history.replaceState('', '', updateURLParameter(window.location.href, "p", last));
	loaditems(items_saved);
	window.scrollTo(0,0)
}

window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

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


window.addEventListener("resize", function(event) {
    

	var wid =  16/(document.body.offsetWidth / 1920);
	
	if(wid>18) wid = 18;
	
	for(var i =1;i<=loadedskin.length;i++)
	document.getElementById(`skinidprice${i}`).style.fontSize=`${wid}px`;



	wid =  10/(document.body.offsetWidth / 1920);

	if(wid>12) wid = 12;
	for(var i =1;i<=loadedskin.length;i++)
	document.getElementById(`euroskinidprice${i}`).style.fontSize=`${wid}px`;
	
	wid =  14/(document.body.offsetWidth / 1920);

	if(wid>15) wid = 15;
	for(var i =1;i<=loadedskin.length;i++)
	document.getElementById(`floatskinfont${i}`).style.fontSize=`${wid}px`;
	
	
	
	
	
	
	
	
	if(window.mobileCheck() == false){
		var wid =  document.body.offsetWidth / 1920;
	
		document.getElementById('body').style.transform = `scale(${wid})`

			if(document.body.offsetWidth <(1150)){
				resizepage(1);
			}else{
				resizepage(0);
				}

	}
	
	
	if(document.getElementById('myframe')!=null){
		var iframe = document.getElementById('myframe'),
    iframedoc = iframe.contentDocument || iframe.contentWindow.document;
	
	if(  document.body.offsetWidth <(1050)){
	iframedoc.getElementById('posit').style.cssText  ="flex-direction: column;";
	iframedoc.getElementById('positchild').style.cssText  ="    margin-right: 0;";
	}else{
	iframedoc.getElementById('posit').style.cssText  ="flex-direction: row;";
	iframedoc.getElementById('positchild').style.cssText  ="";
	
	}
	}
	
	
})

window.addEventListener('load', function () {
	
	
	for (var i = 1; i <= 24; i++) {
		var pos = i ;
		document.getElementById(`pos${pos}`).style.visibility ="hidden"
		document.getElementById(`pos${pos}`).style.left=`${leftar[((pos-1)-Math.floor((pos-1)/6)*6)]}px`
		document.getElementById(`pos${pos}`).style.top=`${topar[Math.ceil(pos/6)-1]}px`;
		}
		
		
		
	 document.getElementById('body').style.height = `0px` 
	if(window.mobileCheck() == false){
		var wid =  document.body.offsetWidth / 1920;
		document.getElementById('body').style.transform = `scale(${wid})`
		
		
			if(document.body.offsetWidth <(1150)){
				resizepage(1);
			}else{
				resizepage(0);
				}

		
	}
	
	
	
	
	
	var urlString = document.URL;
    urlParams = parseURLParams(urlString);
	if(urlParams){
	
	if(urlParams.hasOwnProperty('sa'))if(urlParams['sa']=="s")selectsale(0);
	if(urlParams.hasOwnProperty('sa'))if(urlParams['sa']=="l")selectsale(1);
	if(urlParams.hasOwnProperty('se'))if(urlParams['se'][0]) document.getElementById('search').value = urlParams['se'][0];
	if(urlParams.hasOwnProperty('s'))if(urlParams['s'][0])  sortby(urlParams['s'][0]);
	if(urlParams.hasOwnProperty('g'))if(urlParams['g'][0]) for(var x =  urlParams['g'][0].split(',').length-1; 0<=x;x--)gunset(urlParams['g'][0].split(',')[x])
	if(urlParams.hasOwnProperty('si'))if(urlParams['si'][0]) for(var x =  urlParams['si'][0].split(',').length-1; 0<=x;x--)stickerset(urlParams['si'][0].split(',')[x])
	if(urlParams.hasOwnProperty('p'))if(urlParams['p'][0])last = parseInt(urlParams['p'][0]);
	}
	
		
		fetch(`https://raw.githubusercontent.com/csgosnipers/katocraft/main/${loadpage}/latest.json`)
		.then((response) => response.json())
		.then((json) =>loaditems(json))
			if(window.mobileCheck()) resizepage(1);


}
)


function loaditems(items,n) {
	
	items_saved = items


	
	
	if (n) last = 1
	window.history.replaceState('', '', updateURLParameter(window.location.href, "p", last));

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
					console.log(buf[y]['name'].split(' | ')[0])
					if(buf[y]['name'].split(' | ')[0].includes(sel[i]))
					itemsshow.push(buf[y])
				}
			}
		}else{
			itemsshow = buf
		}
		window.history.replaceState('', '', updateURLParameter(window.location.href, "se", document.getElementById('search').value));
		if (document.getElementById('search').value){
			
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
		loadedskin = []
		for (var i = ((last-1)*24)+1; i <= ((last)*24); i++) {
			var pos = i - ((last-1)*24);
			document.getElementById(`pos${pos}`).style.visibility ="visible"
			
			if(pos<=len-(((last-1)*24))){
				
				if (loadpage == "sold"){
					
					if (itemsshow[i-1]['name'].includes("StatTrak")){
					var ht = skintemplate.replace("statrack",'<span class="ItemCardNewBody_statTrak__Vify2" style="top: 7px;position: absolute;left: 200px;">ST</span>').replace('inspecturl',itemsshow[i-1]['url']).replace('skinfloat',Number(itemsshow[i-1]['float']).toFixed(4)).replace('skinname',itemsshow[i-1]['name'].split('|')[1]).replace('skintime',timeConverter(itemsshow[i-1]['sold'])).replace('skinprice',itemsshow[i-1]['price']).replace('skineuro',Number(itemsshow[i-1]['price']*0.1360).toFixed(1)).replace('skinwear',itemsshow[i-1]['wear'].replace('-',' ').split(' ')[0].slice(0,1)+itemsshow[i-1]['wear'].replace('-',' ').split(' ')[1].slice(0,1)).replace('rarity',itemsshow[i-1]['rarity']).replace('skinimage',itemsshow[i-1]['img']).replace('searchsold',timeConverter(itemsshow[i-1]['sold']));
					}else{
					var ht = skintemplate.replace("statrack","").replace('inspecturl',itemsshow[i-1]['url']).replace('skinfloat',Number(itemsshow[i-1]['float']).toFixed(4)).replace('skinname',itemsshow[i-1]['name'].split('|')[1]).replace('skintime',timeConverter(itemsshow[i-1]['sold'])).replace('skinprice',itemsshow[i-1]['price']).replace('skineuro',Number(itemsshow[i-1]['price']*0.1360).toFixed(1)).replace('skinwear',itemsshow[i-1]['wear'].replace('-',' ').split(' ')[0].slice(0,1)+itemsshow[i-1]['wear'].replace('-',' ').split(' ')[1].slice(0,1)).replace('rarity',itemsshow[i-1]['rarity']).replace('skinimage',itemsshow[i-1]['img']).replace('searchsold',timeConverter(itemsshow[i-1]['sold']));
					}
				
				
				}else{
					if (itemsshow[i-1]['name'].includes("StatTrak")){
					var ht = skintemplate.replace("statrack",'<span class="ItemCardNewBody_statTrak__Vify2" style="top: 7px;position: absolute;left: 200px;">ST</span>').replace('inspecturl',itemsshow[i-1]['url']).replace('Sold','Listed').replace('skinfloat',Number(itemsshow[i-1]['float']).toFixed(4)).replace('skinname',itemsshow[i-1]['name'].split('|')[1]).replace('skintime',timeConverter(itemsshow[i-1]['listed'])).replace('skinprice',itemsshow[i-1]['price']).replace('skineuro',Number(itemsshow[i-1]['price']*0.1360).toFixed(1)).replace('skinwear',itemsshow[i-1]['wear'].replace('-',' ').split(' ')[0].slice(0,1)+itemsshow[i-1]['wear'].replace('-',' ').split(' ')[1].slice(0,1)).replace('rarity',itemsshow[i-1]['rarity']).replace('skinimage',itemsshow[i-1]['img']).replace('searchid',itemsshow[i-1]['id']).replace('searchindex',itemsshow[i-1]['seed']).replace('searchwear',itemsshow[i-1]['float']);
					}else{
					var ht = skintemplate.replace("statrack","").replace('inspecturl',itemsshow[i-1]['url']).replace('Sold','Listed').replace('skinfloat',Number(itemsshow[i-1]['float']).toFixed(4)).replace('skinname',itemsshow[i-1]['name'].split('|')[1]).replace('skintime',timeConverter(itemsshow[i-1]['listed'])).replace('skinprice',itemsshow[i-1]['price']).replace('skineuro',Number(itemsshow[i-1]['price']*0.1360).toFixed(1)).replace('skinwear',itemsshow[i-1]['wear'].replace('-',' ').split(' ')[0].slice(0,1)+itemsshow[i-1]['wear'].replace('-',' ').split(' ')[1].slice(0,1)).replace('rarity',itemsshow[i-1]['rarity']).replace('skinimage',itemsshow[i-1]['img']).replace('searchid',itemsshow[i-1]['id']).replace('searchindex',itemsshow[i-1]['seed']).replace('searchwear',itemsshow[i-1]['float']);
					}
				}
				
				if (itemsshow[i-1]['priceold']!="NULL" && itemsshow[i-1]['priceold']!=itemsshow[i-1]['price']){
					if(Number(itemsshow[i-1]['priceold'])<Number(itemsshow[i-1]['price'])){var pricechangevalue =((Number(itemsshow[i-1]['price'])-Number(itemsshow[i-1]['priceold']))*0.1360).toFixed(0)}
					if(Number(itemsshow[i-1]['priceold'])<Number(itemsshow[i-1]['price']))ht=ht.replace("changedprice",`<div class="skin-price-change skin-red ">€${pricechangevalue}</div>`).replace("changedpricearrow",'<img class="skin-arrow-down"  src="./itemsort_files/arrow-down.svg"/>')
					if(Number(itemsshow[i-1]['priceold'])>Number(itemsshow[i-1]['price'])){var pricechangevalue =((Number(itemsshow[i-1]['priceold'])-Number(itemsshow[i-1]['price']))*0.1360).toFixed(0)}
					if(Number(itemsshow[i-1]['priceold'])>Number(itemsshow[i-1]['price']))ht=ht.replace("changedprice",`<div class="skin-price-change skim-green">€${pricechangevalue}</div>`).replace("changedpricearrow",'<img class="skin-arrow-up"  src="./itemsort_files/arrow-up.svg"/>')
				}else{
					ht=ht.replace("changedprice","").replace("changedpricearrow","").replace("searchwear",itemsshow[i-1]['float'])
				}
					
				for (var x = 0; x < itemsshow[i-1]['stickers'].length; x++ )
					ht = ht.replace(`stickerpos${x+1}`,itemsshow[i-1]['stickers'][x]['img_url']);  
				
					ht = ht.replace(`skinidprice`,`skinidprice${pos}`);   
					ht = ht.replace(`euroskinidprice`,`euroskinidprice${pos}`);   
					ht = ht.replace(`floatskinfont`,`floatskinfont${pos}`);   
				
				document.getElementById(`pos${pos}`).innerHTML = ht;
				loadedskin.push(itemsshow[i-1])
					var wid =  16/(document.body.offsetWidth / 1920);
					if(wid>20) wid = 20;
					document.getElementById(`skinidprice${pos}`).style.fontSize=`${wid}px`;
					wid =  10/(document.body.offsetWidth / 1920);
					if(wid>14) wid = 14;
					document.getElementById(`euroskinidprice${pos}`).style.fontSize=`${wid}px`;
					wid =  14/(document.body.offsetWidth / 1920);
					if(wid>15) wid = 15;
					document.getElementById(`floatskinfont${pos}`).style.fontSize=`${wid}px`;
				
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
backendURL = "https://marnov.pythonanywhere.com"

function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split('; ');
  let res;
  cArr.forEach(val => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  })
  return res
}

function LogIn(){
	let chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","0","1","2","3","4", "5", "6", "7", "8", "9"]
	let token = ""
	for (let x = 0; x < chars.length; x++)
		token += chars[Math.floor(Math.random() * chars.length)]
	var now = new Date();
	now.setTime(now.getTime() + 74500*36000);
	document.cookie = 'season_id='+token+';expires='+now.toUTCString()+';';
 	window.location.href = backendURL+`/auth?season_id=${token}`
}


setTimeout(CheckAuth,0);

async function CheckAuth(){
	await fetch(backendURL+'/verify?season_id=' + getCookie('season_id'),{method: "post"})
	.then(async response => response.json())
	.then(async jsonResponse => {
		console.log(jsonResponse['status'])
		if (jsonResponse['status'] == true){
			document.getElementById("login").style.display = "none";
			document.getElementById("loggedin").style.display = "block";
			document.getElementById("username").innerHTML = jsonResponse['name']
		}
	})
}


function LogOut(){
	document.cookie = "season_id=;";
	window.location.reload();
}
