
(function(compId){var _=null,y=true,n=false,x2='5.0.0',x1='5.0.1',g='image',x4='both',e28='${LoadBar}',e29='${NomeIlustrador}',e27='${CPai}',x3='5.0.1.386',lf='left',e25='${LoadingPreenchimento}',e34='${NomeEscritor}',e35='${EsferaAnimao}',e33='${Acordei}',o='opacity',bt='bottom',tp='top',rt='right',x23='rgba(255,255,255,1)',e32='${CMenino}',e26='${OlhosMenino}',x7='rgba(0,0,0,0)',e24='${TituloContent}',e31='${MeninoDormindo}',e30='${Cochilando}',x5='horizontal';var g15='CabecaMenino.svg',g16='OlhosMenino.svg',g13='NomeEscritor.svg',g14='NomeIlustrador.svg',g20='TituloLivroOver.svg',g11='Acordei%21.svg',g12='MeninoDormindo.svg',g10='Cochilando.svg',g9='LoadingCaixa.svg',g22='EsferaAnima%C3%A7%C3%A3o.svg',g8='LoadingPreenchimento.svg',g18='OlhosPai.svg',g17='CabecaPai.svg',g21='TituloLivro.svg';var s6="barraloading",s19="mexerolhos";var im='images/',aud='media/',vid='media/',js='js/',fonts={'source-sans-pro, sans-serif':'<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>'},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=["http://code.jquery.com/jquery-2.1.4.min.js","http://code.jquery.com/ui/1.11.4/jquery-ui.js"],symbols={"stage":{v:x1,mv:x2,b:x3,stf:x4,cg:x5,rI:n,cn:{dom:[{id:'LoadBar',t:'group',r:['auto','-16%','40%','16%','30%','auto'],userClass:s6,c:[{id:'LoadingPreenchimento',t:g,r:['-100%','8%','100.1%','89.3%','auto','auto'],f:[x7,im+g8,'0%','0%','100%','100%','no-repeat'],tf:[[],[],[],[],['0%']]},{id:'LoadingCaixa',t:g,r:['0%','0%','100.1%','100.1%','auto','auto'],f:[x7,im+g9,'0px','0px']},{id:'Cochilando',t:g,r:['10%','auto','80%','40%','auto','30%'],o:'1',f:[x7,im+g10,'0px','0px']},{id:'Acordei',t:g,r:['17.7%','33.5%','64.6%','39.1%','auto','auto'],o:'0',f:[x7,im+g11,'0px','0px']}]},{id:'MeninoDormindo',t:g,r:['auto','25%','45%','40%','100%','auto'],f:[x7,im+g12,'0px','0px']},{id:'NomeEscritor',t:g,r:['10.8%','-19.7%','24.6%','12.3%','auto','auto'],f:[x7,im+g13,'0px','0px']},{id:'NomeIlustrador',t:g,r:['auto','auto','14.3%','17.1%','19.3%','-24.6%'],f:[x7,im+g14,'0px','0px']},{id:'CMenino',t:'group',r:['auto','auto','53.3%','62.3%','10%','-62.2%'],c:[{id:'CabecaMenino',t:g,r:['auto','auto','100.1%','100%','0%','0%'],f:[x7,im+g15,'0px','0px']},{id:'OlhosMenino',t:g,r:['34%','74.9%','31.9%','12.4%','auto','auto'],f:[x7,im+g16,'0px','0px']}]},{id:'CPai',t:'group',r:['10%','-51.2%','30.8%','51.3%','auto','auto'],c:[{id:'CabecaPai',t:g,r:['0%','0%','100%','100%','auto','auto'],f:[x7,im+g17,'0px','0px']},{id:'CaixaOlhospai',t:'group',r:['17.7%','48.9%','65.7%','12.7%','auto','auto'],tf:[[],['-10']],c:[{id:'OlhosPai',t:g,r:['0%','0%','63%','65.4%','auto','auto'],f:[x7,im+g18,'0px','0px'],userClass:s19,tf:[[],['10']]}]}]},{id:'TituloContent',t:'group',r:['45%','-35%','35.7%','35%','auto','auto'],c:[{id:'TituloLivroOver',t:g,r:['0%','0%','100%','100%','auto','auto'],f:[x7,im+g20,'0px','0px']},{id:'TituloLivro',t:g,r:['0%','0%','100%','100%','auto','auto'],tt:'Visite a Nossa Pagina',cu:'pointer',o:'1',f:[x7,im+g21,'0px','0px']}]},{id:'EsferaAnimao',t:g,r:['10%','auto','6.3%','9.5%','auto','-9.5%'],f:[x7,im+g22,'0px','0px']}],style:{'${Stage}':{isStage:true,r:['null','null','1200px','800px','auto','auto'],overflow:'hidden',f:[x23]}}},tt:{d:18000,a:y,l:{"1":2000,"2":2500,"3":3500,"4":4750,"5":5750,"6":8000,"7":8767,"8":9500,"9":10000},data:[["eid157",tp,15250,1250,"easeOutBounce",e24,'-35%','3%'],["eid145",lf,2226,236,"linear",e25,'-100%','-90%'],["eid147",lf,2462,472,"linear",e25,'-90%','-80%'],["eid149",lf,2934,590,"linear",e25,'-80%','-60%'],["eid150",lf,3523,472,"linear",e25,'-60%','-50%'],["eid151",lf,3995,826,"linear",e25,'-50%','-40%'],["eid152",lf,4821,236,"linear",e25,'-40%','-30%'],["eid153",lf,5057,472,"linear",e25,'-30%','-20%'],["eid154",lf,5528,472,"linear",e25,'-20%','0%'],["eid113",lf,11000,508,"easeInQuint",e26,'33.99%','29.53%'],["eid111",lf,11508,742,"easeInQuint",e26,'29.53%','40.57%'],["eid109",lf,12500,500,"easeInQuint",e26,'40.57%','33.97%'],["eid117",tp,12750,2000,"easeOutQuint",e27,'-51.25%','0%'],["eid52",tp,0,1500,"easeOutQuint",e28,'-16%','65%'],["eid98",tp,8000,1500,"easeOutSine",e28,'65%','140%'],["eid114",tp,11000,508,"easeInQuint",e26,'74.88%','73.83%'],["eid112",tp,11508,742,"easeInQuint",e26,'73.83%','75.97%'],["eid110",tp,12500,500,"easeInQuint",e26,'75.97%','74.94%'],["eid138",bt,10000,3000,"easeOutExpo",e29,'-24.6%','37.69%'],["eid136",bt,16500,750,"easeOutExpo",e29,'37.69%','46.69%'],["eid168",bt,6500,500,"easeOutSine",e30,'30%','-40.3%'],["eid134",rt,16500,750,"easeOutExpo",e29,'19.33%','3.91%'],["eid97",tp,8000,1500,"easeOutSine",e31,'25%','100%'],["eid55",rt,1000,1250,"easeOutQuint",e31,'100%','27.5%'],["eid104",bt,10000,3000,"easeOutExpo",e32,'-62.25%','0%'],["eid170",o,7000,500,"linear",e33,'0','1'],["eid130",tp,12750,2000,"easeOutExpo",e34,'-19.7%','31.63%'],["eid125",tp,16500,750,"easeOutExpo",e34,'31.63%','55.75%'],["eid140",bt,17250,750,"easeOutExpo",e35,'-9.5%','5%']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("desktop_anime");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.$('.barraloading').css('overflow','hidden');$(document).mousemove(function(event){var janela_altura=$(window).outerHeight();var janela_largura=$(window).outerWidth();var cursor_x=event.pageX;var cursor_y=event.pageY;var posicaoolhos_x=cursor_x/janela_largura*35;var posicaoolhos_y=cursor_y/janela_altura*50;sym.$('.mexerolhos').css({'top':posicaoolhos_y+'%','left':posicaoolhos_x+'%'});})});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${TituloContent}","mouseenter",function(sym,e){sym.$('TituloLivro').stop().animate({'opacity':'0'},200);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${TituloContent}","mouseleave",function(sym,e){sym.$('TituloLivro').stop().animate({'opacity':'1'},200);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${TituloContent}","click",function(sym,e){$('#anime_inicio',window.parent.document).css('display','none');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"desktop_anime");