import{_ as b}from"./plugin-vue_export-helper.ad25fb64.js";import{S as V,P as ne,D as oe,V as se,p as re,q as ae,r as s,o as c,c as v,l as t,s as n,a as x,t as m,h as _,F as L,b as R,d as g,L as ie,A as ce,G as le,u as _e,y as ue,z as G,j as A,I as pe,B as de,n as J,M as Y,w as me,v as he,i as q,C as ge,E as fe,H as ve,m as ye,J as we}from"./vendor.2070a7ee.js";const Se={zh_CN:"\u7B80\u4E2D\u670D(CN)",en_US:"Global Server(EN)",ja_JP:"\u65E5\u672C\u30B5\u30FC\u30D0\u30FC(JP)",ko_KR:"\uD55C\uAD6D \uC11C\uBC84(KR)",zh_TW:"\u7E41\u4E2D\u670D(TW)"},be={zh_CN:"\u5F53\u524D\u8BED\u8A00",en_US:"Current Language",ja_JP:"\u73FE\u5728\u306E\u8A00\u8A9E",ko_KR:"\uD604\uC7AC \uC5B8\uC5B4",zh_TW:"\u7576\u524D\u8A9E\u8A00"},xe={zh_CN:"\u8BF7\u4ECE\u76EE\u5F55\u4E2D\u9009\u62E9\u6545\u4E8B\u67E5\u770B",en_US:"Select the story you wanna view from the menu",ja_JP:"Select the story you wanna view from the menu",ko_KR:"Select the story you wanna view from the menu",zh_TW:"\u8ACB\u5F9E\u76EE\u9304\u4E2D\u9078\u64C7\u6545\u4E8B\u67E5\u770B"},Ie={zh_CN:"\u9996\u9875",en_US:"Homepage",ja_JP:"\u30DB\u30FC\u30E0\u30DA\u30FC\u30B8",ko_KR:"\uD648\uD398\uC774\uC9C0",zh_TW:"\u9996\u9801"},ke={zh_CN:"\u4E3B\u9898\u66F2",en_US:"Maintheme",ja_JP:"Maintheme",ko_KR:"Maintheme",zh_TW:"\u4E3B\u9898\u66F2"},ze={zh_CN:"\u63D2\u66F2",en_US:"Intermezzi",ja_JP:"Intermezzi",ko_KR:"Intermezzi",zh_TW:"\u63D2\u66F2"},Te={zh_CN:"\u522B\u4F20",en_US:"Sidestory",ja_JP:"Sidestory",ko_KR:"Sidestory",zh_TW:"\u522B\u4F20"},Ne={zh_CN:"\u6545\u4E8B\u96C6",en_US:"Storyset",ja_JP:"Storyset",ko_KR:"Storyset",zh_TW:"\u6545\u4E8B\u96C6"},Ce={zh_CN:"\u5E72\u5458\u5BC6\u5F55",en_US:"Operators' Records",ja_JP:"Operators' Records",ko_KR:"Operators' Records",zh_TW:"\u5E79\u54E1\u5BC6\u9304"},Le={zh_CN:"\u641C\u7D22",en_US:"Search",ja_JP:"\u691C\u7D22",ko_KR:"Search",zh_TW:"\u641C\u7D22"},$e={zh_CN:"\u8BBE\u7F6E",en_US:"Settings",ja_JP:"Settings",ko_KR:"Settings",zh_TW:"\u8BBE\u7F6E"},je={zh_CN:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E",en_US:"Reset All Settings",ja_JP:"Reset All Settings",ko_KR:"Reset All Settings",zh_TW:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E"},Re={zh_CN:"\u535A\u58EB\u79F0\u547C",en_US:"Doctor's Name",ja_JP:"\u30C9\u30AF\u30BF\u30FC\u306E\u540D\u524D",ko_KR:"Doctor's Name",zh_TW:"\u535A\u58EB\u7A31\u547C"},Ae={zh_CN:"\u663E\u793A\u7A7A\u767D\u5206\u5272\u884C",en_US:"Show Blank Seperation Line",ja_JP:"Show Blank Seperation Line",ko_KR:"Show Blank Seperation Line",zh_TW:"\u986F\u793A\u7A7A\u767D\u5206\u5272\u884C"},Oe={zh_CN:"\u9690\u85CF\u91CD\u590D\u4EBA\u540D",en_US:"Hide Duplicate Names",ja_JP:"Hide Duplicate Names",ko_KR:"Hide Duplicate Names",zh_TW:"\u96B1\u85CF\u91CD\u8907\u4EBA\u540D"},De={zh_CN:"\u5E94\u7528\u8BBE\u7F6E",en_US:"Apply Setting",ja_JP:"Apply Setting",ko_KR:"Apply Setting",zh_TW:"\u5E94\u7528\u8BBE\u7F6E"},Je={zh_CN:"\u8FD4\u56DE\u76EE\u5F55",en_US:"Return to Menu",ja_JP:"Return to Menu",ko_KR:"Return to Menu",zh_TW:"\u8FD4\u56DE\u76EE\u9304"},Ue={zh_CN:"\u76EE\u5F55",en_US:"Menu",ja_JP:"Menu",ko_KR:"Menu",zh_TW:"\u76EE\u9304"},Me={zh_CN:"\u5BFC\u51FAExcel",en_US:"Export to Excel",ja_JP:"Export to Excel",ko_KR:"Export to Excel",zh_TW:"\u5C0E\u51FAExcel"},Pe={zh_CN:"\u663E\u793A\u7B80\u4ECB",en_US:"Show Intro",ja_JP:"Show Intro",ko_KR:"Show Intro",zh_TW:"\u986F\u793A\u7C21\u4ECB"};var D={server:Se,currentLang:be,selectStory:xe,homepage:Ie,main:ke,intermezzi:ze,ss:Te,mini:Ne,or:Ce,search:Le,setting:$e,clear:je,dr:Re,showDelay:Ae,hideName:Oe,save:De,home:Je,menu:Ue,export2excel:Me,showIntro:Pe};const Z=["zh_CN","en_US","ko_KR","ja_JP","zh_TW"];var P=new URLSearchParams(window.location.search),E=P.get("s"),$=window.localStorage.getItem("lang"),K=window.localStorage.getItem("doctor"),F=window.localStorage.getItem("hidetip"),W=window.localStorage.getItem("showDelay"),H=window.localStorage.getItem("hideName"),M=window.localStorage.getItem("wversion"),Ee=P.get("f"),Ke={eventName:"Loading..."},Q=!1;const X=13;E||(E="zh_CN");(!$||$=="none"||$=="Default")&&($=navigator.language.replace("-","_"));$=="ja"&&($="ja_JP");Z.indexOf($)==-1&&($="en_US");console.log("Current Language: "+$);K||(K="{@nickname}");F||(F=!1);W||(W="y");H||(H="n");(!M||M<X)&&(M=X,window.localStorage.setItem("wversion",M),Q=!0);var N={urlParams:P,l:$,langList:Z,server:E,doctor:K,hidetip:F,showDelay:W,hideName:H,storyFile:Ee,storyData:Ke,intermezzi:["act9d0","act18d0","act18d3"],wversion:M,isOldversion:Q,parseContent(e){if(e){const r=/<color=([\w#]+)>(.+?)<\/color>/gm,i='<span style="color:$1">$2</span>';e=e.replaceAll("{@nickname}",this.doctor),e=e.replaceAll("\\n","<br/>"),e=e.replace(r,i)}return e},focus(){var e=document.getElementsByClassName("storyFocused")[0];e&&e.scrollIntoView({behavior:"smooth",block:"center"}),console.log("focused!")}};const Fe={data(){return{i18n:D,currentLang:N.l,langOpts:N.langList,doctor:N.doctor,showDelay:N.showDelay}},props:{showsettings:{type:Boolean,default:!1}},components:{SettingsIcon:V,LangIcon:ne,DrNameIcon:oe,BlankIcon:se,SaveIcon:re,ResetIcon:ae},methods:{save(){window.localStorage.setItem("doctor",this.doctor),window.localStorage.setItem("showDelay",this.showDelay),window.localStorage.setItem("hideName",this.hideName),window.localStorage.setItem("lang",this.currentLang),window.location.reload(!0)},clearSetting(){window.localStorage.clear(),window.location.reload(!0)}}},We=_(" Dr. ");function He(e,r,i,a,o,l){const p=s("SettingsIcon"),u=s("n-icon"),d=s("n-button"),f=s("n-space"),I=s("LangIcon"),k=s("n-radio-button"),z=s("n-radio-group"),w=s("DrNameIcon"),y=s("n-input"),T=s("BlankIcon"),C=s("n-switch"),j=s("ResetIcon"),O=s("SaveIcon"),U=s("n-drawer-content"),h=s("n-drawer");return c(),v(L,null,[t(d,{text:"",class:"SettingsBtn",onClick:r[0]||(r[0]=S=>i.showsettings=!0)},{default:n(()=>[t(u,null,{default:n(()=>[t(p)]),_:1})]),_:1}),t(h,{show:i.showsettings,"onUpdate:show":r[6]||(r[6]=S=>i.showsettings=S),placement:"top"},{default:n(()=>[t(U,{closable:""},{header:n(()=>[t(f,{"item-style":"display:flex;",align:"center"},{default:n(()=>[t(u,null,{default:n(()=>[t(p)]),_:1}),x("span",null,m(o.i18n.setting[o.currentLang]),1)]),_:1})]),footer:n(()=>[t(f,{"item-style":"display:flex;",align:"center",justify:"end"},{default:n(()=>[t(d,{strong:"",secondary:"",type:"error",onClick:r[4]||(r[4]=S=>l.clearSetting())},{default:n(()=>[t(u,null,{default:n(()=>[t(j)]),_:1}),_(" "+m(o.i18n.clear[o.currentLang]),1)]),_:1}),t(d,{strong:"",type:"primary",onClick:r[5]||(r[5]=S=>l.save())},{default:n(()=>[t(u,null,{default:n(()=>[t(O)]),_:1}),_(" "+m(o.i18n.save[o.currentLang]),1)]),_:1})]),_:1})]),default:n(()=>[t(f,{"item-style":"display:flex;",align:"center"},{default:n(()=>[t(u,null,{default:n(()=>[t(I)]),_:1}),_(" "+m(o.i18n.currentLang[o.currentLang])+": ",1),t(z,{value:o.currentLang,"onUpdate:value":r[1]||(r[1]=S=>o.currentLang=S)},{default:n(()=>[(c(!0),v(L,null,R(o.langOpts,S=>(c(),g(k,{key:S,value:S},{default:n(()=>[_(m(S),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),t(f,{"item-style":"display:flex;",align:"center"},{default:n(()=>[t(u,null,{default:n(()=>[t(w)]),_:1}),_(" "+m(o.i18n.dr[o.currentLang])+": ",1),t(f,{"item-style":"display:flex;",align:"center",justify:"end"},{default:n(()=>[We,t(y,{value:o.doctor,"onUpdate:value":r[2]||(r[2]=S=>o.doctor=S),type:"text",placeholder:"{@nickname}"},null,8,["value"])]),_:1})]),_:1}),t(f,{"item-style":"display:flex;",align:"center"},{default:n(()=>[t(u,null,{default:n(()=>[t(T)]),_:1}),_(" "+m(o.i18n.showDelay[o.currentLang])+": ",1),t(C,{value:o.showDelay,"onUpdate:value":r[3]||(r[3]=S=>o.showDelay=S),"checked-value":"y","unchecked-value":"n"},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["show"])],64)}var Be=b(Fe,[["render",He]]);const Ve={data(){return{serverOpts:this.getServerOpts(),i18n:D,showsettings:!1}},created(){this.$watch(()=>this.$route.params,(e,r)=>{r.server!=e.server&&(this.serverOpts=this.getServerOpts())})},props:{server:{type:String}},components:{LangIcon:ie,ArrowDropDown:ce,SettingsIcon:V,Settings:Be},methods:{getServerOpts(){var e=[];for(var r in D.server)e.push({label:D.server[r],key:r,disabled:r==this.$route.params.server});return e},pushServer(e){this.$router.push("/"+e+"/menu")}}},Ge=_(" Arknights Story Text Reader ");function Ye(e,r,i,a,o,l){const p=s("n-image"),u=s("n-h2"),d=s("n-space"),f=s("LangIcon"),I=s("n-icon"),k=s("ArrowDropDown"),z=s("n-button"),w=s("n-dropdown"),y=s("Settings"),T=s("n-layout-header");return c(),g(T,null,{default:n(()=>[t(d,{"item-style":"display: flex;",justify:"space-between",align:"center",class:"header"},{default:n(()=>[t(d,{"item-style":"display: flex;",align:"center"},{default:n(()=>[t(p,{src:"/src/assets/favicon.png",width:"40"}),t(u,{style:{margin:"0px",padding:"5px"},strong:""},{default:n(()=>[Ge]),_:1})]),_:1}),t(d,{justify:"space-around","item-style":"display: flex;",align:"center"},{default:n(()=>[t(w,{options:o.serverOpts,onSelect:l.pushServer,class:"serverSelect"},{default:n(()=>[t(z,{text:""},{default:n(()=>[t(I,null,{default:n(()=>[t(f)]),_:1}),_(" "+m(o.i18n.server[e.$route.params.server])+" ",1),t(I,null,{default:n(()=>[t(k)]),_:1})]),_:1})]),_:1},8,["options","onSelect"]),t(y)]),_:1})]),_:1})]),_:1})}var ee=b(Ve,[["render",Ye]]);const qe={data(){return{latestUpdate:0}},components:{Github:le,Discord:_e},created(){fetch("https://raw.githubusercontent.com/050644zf/ArknightsStoryJson/main/log.json").then(e=>e.json()).then(e=>{this.latestUpdate=e.latestCommitTime})},methods:{dateFormatter(e){var r=new Date(e*1e3),i="";return i=r.getUTCFullYear()+"-"+(r.getUTCMonth()+1)+"-"+r.getUTCDate()+" "+r.getUTCHours()+":"+r.getUTCMinutes()+":"+r.getUTCSeconds(),i},load(e){window.location=e}}},Ze=x("br",null,null,-1),Qe=_(" \u5F53\u524D\u72B6\u6001 / Current Status: "),Xe=x("br",null,null,-1),et=x("img",{src:"https://app.travis-ci.com/050644zf/ArknightsStoryTextReader.svg?branch=master"},null,-1),tt=_("\xA0 "),nt=x("img",{src:"https://github.com/050644zf/ArknightsStoryTextReader/actions/workflows/ASTRAutoUpdater.yml/badge.svg"},null,-1);function ot(e,r,i,a,o,l){const p=s("Github"),u=s("n-icon"),d=s("n-button"),f=s("Discord"),I=s("n-space"),k=s("n-text"),z=s("n-layout-footer");return c(),g(z,null,{default:n(()=>[t(I,{justify:"space-around",class:"footer"},{default:n(()=>[t(I,{justify:"space-around"},{default:n(()=>[t(d,{text:"",onClick:r[0]||(r[0]=w=>l.load("https://github.com/050644zf/ArknightsStoryTextReader"))},{default:n(()=>[t(u,{size:"32"},{default:n(()=>[t(p)]),_:1})]),_:1}),t(d,{text:"",onClick:r[1]||(r[1]=w=>l.load("https://discord.gg/rihq"))},{default:n(()=>[t(u,{size:"32"},{default:n(()=>[t(f)]),_:1})]),_:1})]),_:1}),t(k,null,{default:n(()=>[_(" \u6700\u540E\u66F4\u65B0 / Last Update (UTC) : "+m(l.dateFormatter(o.latestUpdate)),1),Ze,Qe,Xe,et,tt,nt]),_:1})]),_:1})]),_:1})}var st=b(qe,[["render",ot]]);const rt={data(){return{darkTheme:ue}},components:{Header:ee,Footer:st}};function at(e,r,i,a,o,l){const p=s("router-view"),u=s("Footer"),d=s("n-config-provider"),f=s("n-layout");return c(),g(f,null,{default:n(()=>[t(d,{theme:o.darkTheme},{default:n(()=>[t(p),t(u)]),_:1},8,["theme"])]),_:1})}var it=b(rt,[["render",at]]);const ct={data(){return{server:this.$route.params.server,intermezzi:N.intermezzi}},created(){this.initServerData(),this.$watch(()=>this.$route.params,(e,r)=>{r.server!=e.server&&window.location.reload()})},components:{Header:ee},methods:{async initServerData(){let e=await fetch("https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/"+this.server+"/gamedata/excel/story_review_table.json").then(l=>l.json()),r=await fetch("https://raw.githubusercontent.com/050644zf/ArknightsStoryJson/main/"+this.server+"/chardict.json").then(l=>l.json()),i=await fetch("https://raw.githubusercontent.com/050644zf/ArknightsStoryJson/main/"+this.server+"/storyinfo.json").then(l=>l.json()),a=await fetch("https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/"+this.server+"/gamedata/excel/chapter_table.json").then(l=>l.json()),o=await this.getEventList(e,r);a=await this.getMainthemeData(a,o),window.sessionStorage.setItem("server",this.server),window.sessionStorage.setItem("menudata",JSON.stringify(e)),window.sessionStorage.setItem("chardict",JSON.stringify(r)),window.sessionStorage.setItem("infodata",JSON.stringify(i)),window.sessionStorage.setItem("eventList",JSON.stringify(o)),window.sessionStorage.setItem("chapterdata",JSON.stringify(a))},async getEventList(e,r){var i={maintheme:[],intermezzi:[],sidestory:[],storyset:[],or:[]},a;for(a in e)if(e[a].entryType=="MAINLINE")i.maintheme.push(e[a]);else if(e[a].entryType=="ACTIVITY")this.intermezzi.indexOf(a)==-1?i.sidestory.push(e[a]):i.intermezzi.push(e[a]);else if(e[a].entryType=="MINI_ACTIVITY")i.storyset.push(e[a]);else if(e[a].entryType=="NONE"){var o=a.split("_")[1],l=a.split("_")[3];e[a].name=r[o].name,e[a].cid=r[o].id,e[a].cin=o,e[a].set=l,i.or.push(e[a])}return i.intermezzi.sort(function(p,u){return p.startTime-u.startTime}),i.sidestory.sort(function(p,u){return p.startTime-u.startTime}),i.storyset.sort(function(p,u){return p.startTime-u.startTime}),i},async getMainthemeData(e,r){for(var i in e){var a=[],o=!1;for(var l of r.maintheme)l.id==e[i].startZoneId&&(o=!0),o&&a.push(l.id),l.id==e[i].endZoneId&&(o=!1);e[i].events=a}return e}}};function lt(e,r,i,a,o,l){const p=s("Header"),u=s("router-view"),d=s("n-loading-bar-provider");return c(),v(L,null,[t(p,{server:e.$route.params.server},null,8,["server"]),t(d,null,{default:n(()=>[t(u)]),_:1})],64)}var _t=b(ct,[["render",lt]]);const ut={data(){return{cdata:window.sessionStorage.getItem("chapterdata")?JSON.parse(window.sessionStorage.getItem("chapterdata")):[],mdata:window.sessionStorage.getItem("menudata")?JSON.parse(window.sessionStorage.getItem("menudata")):{}}}},pt=["src"];function dt(e,r,i,a,o,l){const p=s("n-h3"),u=s("n-text"),d=s("n-space"),f=s("n-card"),I=s("n-step"),k=s("n-steps");return c(),g(k,{vertical:""},{"finish-icon":n(()=>[]),default:n(()=>[(c(!0),v(L,null,R(o.cdata,(z,w)=>(c(),g(I,{key:w},{title:n(()=>[t(d,null,{default:n(()=>[t(p,{strong:"",style:{margin:"0px"}},{default:n(()=>[_(m(z.chapterName),1)]),_:2},1024),t(u,{depth:"3"},{default:n(()=>[_(m(z.chapterName2),1)]),_:2},1024)]),_:2},1024)]),default:n(()=>[t(d,{vertical:""},{default:n(()=>[t(d,{"item-style":"display: flex;",align:"center"},{default:n(()=>[(c(!0),v(L,null,R(z.events,(y,T)=>(c(),g(f,{"content-style":"padding: 0px;",key:T,size:"large",class:"episode",onClick:C=>e.$router.push("/"+e.$route.params.server+"/event/"+y)},{cover:n(()=>[x("img",{src:"https://raw.githubusercontent.com/050644zf/ArknightsStoryJson/main/img/icons/"+y+".png",class:"mainicon",style:{height:"100px",width:"100px",margin:"auto"}},null,8,pt)]),default:n(()=>[t(u,{strong:""},{default:n(()=>[_(m(o.mdata[y].name),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})}var te=b(ut,[["render",dt]]);const mt={props:["eventype"],data(){return{mdata:window.sessionStorage.getItem("menudata")?JSON.parse(window.sessionStorage.getItem("menudata")):{},eventList:window.sessionStorage.getItem("eventList")?JSON.parse(window.sessionStorage.getItem("eventList")):[]}},components:{ForwardIcon:G}},ht=["src"],gt=["src"];function ft(e,r,i,a,o,l){const p=s("n-h2"),u=s("n-text"),d=s("n-space"),f=s("ForwardIcon"),I=s("n-icon"),k=s("n-button"),z=s("n-list-item"),w=s("n-list");return c(),g(d,{class:"events"},{default:n(()=>[t(w,null,{default:n(()=>[(c(!0),v(L,null,R(o.eventList[i.eventype],(y,T)=>(c(),g(z,{key:T,style:{width:"100%"}},{suffix:n(()=>[t(k,{text:"",onClick:C=>e.$router.push("/"+e.$route.params.server+"/event/"+y.id)},{default:n(()=>[t(I,{size:"32"},{default:n(()=>[t(f)]),_:1})]),_:2},1032,["onClick"])]),default:n(()=>[t(d,{"item-style":"display:flex",align:"top"},{default:n(()=>[i.eventype!="or"?(c(),v("img",{key:0,src:"https://raw.githubusercontent.com/050644zf/ArknightsStoryJson/main/img/banners/"+y.id+".png"},null,8,ht)):(c(),v("img",{key:1,src:"https://aceship.github.io/AN-EN-Tags/img/avatars/char_"+y.cid+"_"+y.cin+".png",style:{height:"64px"}},null,8,gt)),t(p,{style:{padding:"0px"}},{default:n(()=>[_(m(y.name),1)]),_:2},1024),i.eventype=="or"?(c(),g(u,{key:2,depth:"3"},{default:n(()=>[_("#"+m(y.set),1)]),_:2},1024)):A("",!0)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}var vt=b(mt,[["render",ft]]);const yt={},wt=_(" \u6B22\u8FCE\u8BBF\u95EE\u660E\u65E5\u65B9\u821F\u5267\u60C5\u6587\u672C\u9605\u8BFB\u5668\uFF01"),St=x("br",null,null,-1),bt=_(" Welcome to Arknights Story Text Reader! "),xt=_(" \u8FD9\u662F\u65B0\u7248ASTR\u7684beta\u6D4B\u8BD5\uFF0C\u5C1A\u672A\u8FD8\u539F\u65E7\u7248ASTR\u7684\u6240\u6709\u529F\u80FD\uFF0C\u4E14\u6682\u672A\u4F18\u5316\u79FB\u52A8\u7AEF\u7F51\u9875\u3002"),It=x("br",null,null,-1),kt=_(" This is the beta version of ASTR, and it is not yet fully supporting the features in the old version of ASTR, and it is not optimized for mobile."),zt=x("br",null,null,-1),Tt=x("br",null,null,-1),Nt=_(" \u4F60\u53EF\u4EE5"),Ct=x("a",{href:"https://050644zf.github.io/ArknightsStoryTextReader/?s=zh_CN"},"\u5355\u51FB\u6B64\u5904",-1),Lt=_("\u8BBF\u95EE\u65E7\u7248ASTR\u3002"),$t=x("br",null,null,-1),jt=_(" You can "),Rt=x("a",{href:"https://050644zf.github.io/ArknightsStoryTextReader/?s=zh_CN"},"click here",-1),At=_(" to visit the old version of ASTR. "),Ot=_(" Todo List: "),Dt=_("Implement the export, search feature."),Jt=_("Optimize the UI in events menu & Operators' Records menu "),Ut=_("Optimize the warpping logic in menu page"),Mt=_("Improve the content page");function Pt(e,r){const i=s("n-h1"),a=s("n-text"),o=s("n-hr"),l=s("n-h3"),p=s("n-li"),u=s("n-ol"),d=s("n-space");return c(),g(d,{vertical:"",class:"homepage"},{default:n(()=>[t(i,{prefix:"bar"},{default:n(()=>[wt,St,bt]),_:1}),t(a,null,{default:n(()=>[xt,It,kt,zt,Tt,Nt,Ct,Lt,$t,jt,Rt,At]),_:1}),t(o),t(l,{prefix:"bar"},{default:n(()=>[Ot]),_:1}),t(u,null,{default:n(()=>[t(p,null,{default:n(()=>[Dt]),_:1}),t(p,null,{default:n(()=>[Jt]),_:1}),t(p,null,{default:n(()=>[Ut]),_:1}),t(p,null,{default:n(()=>[Mt]),_:1})]),_:1})]),_:1})}var Et=b(yt,[["render",Pt]]);const Kt={data(){return{navi:{maintheme:{icon:"terminal-maintheme",title:"main"},intermezzi:{icon:"terminal-intermezzi",title:"intermezzi"},sidestory:{icon:"terminal-sidestory",title:"ss"},storyset:{icon:"terminal-storyset",title:"mini"},or:{icon:"terminal-record",title:"or"}},i18n:D,currentLang:N.l}},components:{InfoIcon:pe,SearchIcon:de,Maintheme:te,Events:vt,Homepage:Et}},Ft={class:"menucontent"},Wt=_(" To Be Done ");function Ht(e,r,i,a,o,l){const p=s("InfoIcon"),u=s("n-icon"),d=s("Homepage"),f=s("n-tab-pane"),I=s("Maintheme"),k=s("Events"),z=s("SearchIcon"),w=s("n-tabs"),y=s("router-view"),T=s("n-layout-content");return c(),g(T,{class:"menupage"},{default:n(()=>[t(w,{type:"line","justify-content":"space-evenly"},{default:n(()=>[t(f,{name:"home"},{tab:n(()=>[t(u,null,{default:n(()=>[t(p)]),_:1}),_("\xA0"+m(o.i18n.homepage[o.currentLang]),1)]),default:n(()=>[t(d)]),_:1}),(c(!0),v(L,null,R(o.navi,(C,j,O)=>(c(),g(f,{name:j,key:O},{tab:n(()=>[t(u,null,{default:n(()=>[x("div",{class:J(C.icon)},null,2)]),_:2},1024),_("\xA0"+m(o.i18n[C.title][o.currentLang]),1)]),default:n(()=>[x("div",Ft,[j=="maintheme"?(c(),g(I,{key:0})):(c(),g(k,{key:1,eventype:j},null,8,["eventype"]))])]),_:2},1032,["name"]))),128)),t(f,{name:"search"},{tab:n(()=>[t(u,null,{default:n(()=>[t(z)]),_:1}),_("\xA0"+m(o.i18n.search[o.currentLang]),1)]),default:n(()=>[Wt]),_:1})]),_:1}),t(y)]),_:1})}var Bt=b(Kt,[["render",Ht]]);const Vt={data(){return{eventid:this.$route.params.event,data:window.sessionStorage.getItem("menudata")?JSON.parse(window.sessionStorage.getItem("menudata")):{},infodata:window.sessionStorage.getItem("infodata")?JSON.parse(window.sessionStorage.getItem("infodata")):{},i18n:D,currentLang:N.l,showIntro:!1}},components:{MenuIcon:Y,ForwardIcon:G}};function Gt(e,r,i,a,o,l){const p=s("MenuIcon"),u=s("n-icon"),d=s("n-breadcrumb-item"),f=s("n-breadcrumb"),I=s("n-affix"),k=s("n-text"),z=s("n-switch"),w=s("n-space"),y=s("n-h3"),T=s("ForwardIcon"),C=s("n-button"),j=s("n-list-item"),O=s("n-list"),U=s("n-layout-content");return c(),g(U,null,{default:n(()=>[t(w,{vertical:"",class:"eventpage"},{default:n(()=>[t(I,{top:40,"trigger-top":20,position:"fixed"},{default:n(()=>[t(f,{class:"breadcrumb"},{default:n(()=>[t(d,{onClick:r[0]||(r[0]=h=>e.$router.push("/"+e.$route.params.server+"/menu"))},{default:n(()=>[t(u,null,{default:n(()=>[t(p)]),_:1}),_(" "+m(o.i18n.menu[o.currentLang]),1)]),_:1}),t(d,null,{default:n(()=>[_(m(o.data[o.eventid].name),1)]),_:1})]),_:1})]),_:1}),t(w,null,{default:n(()=>[t(k,null,{default:n(()=>[_(m(o.i18n.showIntro[o.currentLang]),1)]),_:1}),t(z,{value:o.showIntro,"onUpdate:value":r[1]||(r[1]=h=>o.showIntro=h)},null,8,["value"])]),_:1}),t(O,null,{default:n(()=>[(c(!0),v(L,null,R(o.data[o.eventid].infoUnlockDatas,(h,S)=>(c(),g(j,{key:S},{suffix:n(()=>[t(C,{text:"",onClick:$n=>e.$router.push({path:"/"+e.$route.params.server+"/content",query:{f:h.storyTxt}})},{default:n(()=>[t(u,{size:"32"},{default:n(()=>[t(T)]),_:1})]),_:2},1032,["onClick"])]),default:n(()=>[t(w,{vertical:""},{default:n(()=>[t(w,{"item-style":"display:flex;",align:"end"},{default:n(()=>[t(y,{style:{margin:"0px"},prefix:"bar"},{default:n(()=>[_(m(h.storyName),1)]),_:2},1024),t(k,{depth:"3"},{default:n(()=>[_(m(h.storyCode)+" "+m(h.avgTag),1)]),_:2},1024)]),_:2},1024),me(t(k,{depth:"2"},{default:n(()=>[_(m(o.infodata[h.storyTxt]),1)]),_:2},1536),[[he,o.showIntro]])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})}var Yt=b(Vt,[["render",Gt]]);const qt={data(){return{data:{},chardict:{},eventList:{},lang:"zh_CN",server:"zh_CN",i18n:{},showMenu:!0,showLangSelect:!1}},created(){this.loadData()},methods:{async loadData(){this.data=await fetch("https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/"+this.server+"/gamedata/excel/story_review_table.json").then(e=>e.json()),this.chardict=await fetch("https://raw.githubusercontent.com/050644zf/ArknightsStoryJson/main/"+this.server+"/chardict.json").then(e=>e.json()),this.eventList=await this.getEventList(this.data,this.chardict)},async getEventList(e,r){var i=[],a;for(a in e)if(e[a].entryType=="MAINLINE")i.push(e[a]);else if(e[a].entryType=="ACTIVITY")i.push(e[a]);else if(e[a].entryType=="MINI_ACTIVITY")i.push(e[a]);else if(e[a].entryType=="NONE"){var o=a.split("_")[1],l=a.split("_")[3];e[a].name=r[o].name+" - "+l,i.push(e[a])}return i}}};function Zt(e,r,i,a,o,l){const p=s("n-layout-sider");return c(),g(p,null,{default:n(()=>[_(m(o.eventList),1)]),_:1})}var Qt=b(qt,[["render",Zt]]);const Xt={data(){return{line:this.inputline,hideName:!1}},mounted(){this.hideName=this.isHideName()},props:{inputline:Object,story:Object,lidx:Number},methods:{parseContent(e){return N.parseContent(e)},isHideName(){if(this.lidx=="0"||N.hideName=="n"||!this.line)return!1;var e=this.story[this.lidx-1];return!!(e.prop=="name"&&e.attributes&&this.line.attributes&&e.attributes.name==this.line.attributes.name)}}},en={class:"textblock"},tn=["innerHTML"];function nn(e,r,i,a,o,l){return c(),v("div",en,[x("div",{class:J({nameblock:!0,hideName:o.hideName})},m(o.line.attributes.name),3),x("div",{class:"contentblock",innerHTML:l.parseContent(o.line.attributes.content)},null,8,tn)])}var on=b(Xt,[["render",nn]]);const sn={data(){return{line:this.inputline}},props:{inputline:Object},methods:{parseContent(e){return N.parseContent(e)}}},rn=["innerHTML"];function an(e,r,i,a,o,l){return c(),v("div",{class:J(o.line.prop),style:q({"text-align":o.line.attributes.alignment}),innerHTML:l.parseContent(o.line.attributes.text)},null,14,rn)}var cn=b(sn,[["render",an]]);const ln={data(){return{line:this.inputline}},props:{inputline:Object},methods:{parseContent(e){return N.parseContent(e)},jumpTo(e){var r=document.getElementById(e);r.scrollIntoView({behavior:"smooth",block:"center"})},addClass(e,r){var i=document.getElementById(e);i.classList.add(r)},removeClass(e,r){var i=document.getElementById(e);i.classList.remove(r)}}},_n=["onClick","onMouseover","onMouseout","innerHTML"];function un(e,r,i,a,o,l){return c(),v("div",{class:J(o.line.prop)},[(c(!0),v(L,null,R(o.line.attributes.values.split(";"),(p,u)=>(c(),v("div",{key:p,class:"option",onClick:d=>l.jumpTo(o.line.targetLine["option"+p]),onMouseover:d=>l.addClass(o.line.targetLine["option"+p],"PredicateFocused"),onMouseout:d=>l.removeClass(o.line.targetLine["option"+p],"PredicateFocused"),innerHTML:l.parseContent(o.line.attributes.options.split(";")[u])},null,40,_n))),128))],2)}var pn=b(ln,[["render",un]]);const dn={data(){return{line:this.inputline}},props:{inputline:Object}},mn={key:0,class:"optText"};function hn(e,r,i,a,o,l){return c(),v("div",{class:J(o.line.prop)},[o.line.endOfOpt?A("",!0):(c(),v("div",mn,"Options: "+m(o.line.attributes.references.replaceAll(";"," ")),1))],2)}var gn=b(dn,[["render",hn]]);const fn={data(){return{line:this.inputline}},props:{inputline:Object}};function vn(e,r,i,a,o,l){return c(),v("div",{class:J(o.line.prop),style:q({height:o.line.attributes.time*30+"px"})},null,6)}var yn=b(fn,[["render",vn]]);const wn={data(){return{line:this.inputline}},props:{inputline:Object}},Sn=["src"];function bn(e,r,i,a,o,l){return c(),v("img",{class:"Image",src:"https://aceship.github.io/AN-EN-Tags/img/avg/images/"+o.line.attributes.image+".png"},null,8,Sn)}var xn=b(wn,[["render",bn]]);const In={data(){return{path:this.$route.query.f,data:{},server:this.$route.params.server,i18n:D,currentLang:N.l,showDelay:N.showDelay,loading:!0,loadingbar:ge()}},created(){this.loadingbar.start(),this.getStoryData(),this.$watch(()=>this.$route.params,(e,r)=>{r.server==e.server&&r.path!=e.path&&this.getStoryData()})},components:{Menu:Qt,Nameline:on,Subtitle:cn,Decision:pn,Predicate:gn,Delay:yn,Showimg:xn,MenuIcon:Y},methods:{async getStoryData(){this.loading=!0,fetch("https://raw.githubusercontent.com/050644zf/ArknightsStoryJson/main/"+this.server+"/gamedata/story/"+this.path+".json").then(e=>e.json()).then(e=>{this.data=e,this.loading=!1,this.loadingbar.finish()}).catch()}}},kn=["id"],zn=x("div",{style:{clear:"both"}},null,-1);function Tn(e,r,i,a,o,l){const p=s("n-skeleton"),u=s("MenuIcon"),d=s("n-icon"),f=s("n-breadcrumb-item"),I=s("n-breadcrumb"),k=s("n-affix"),z=s("Nameline"),w=s("Subtitle"),y=s("Decision"),T=s("Predicate"),C=s("Delay"),j=s("Showimg"),O=s("n-layout-content"),U=s("n-layout");return c(),g(U,null,{default:n(()=>[t(O,{class:"content",ref:"content"},{default:n(()=>[t(k,{top:20,"trigger-top":20,position:"fixed"},{default:n(()=>[o.loading?(c(),g(p,{key:0,class:"breadcrumb"})):(c(),g(I,{key:1,class:"breadcrumb"},{default:n(()=>[t(f,null,{default:n(()=>[t(d,null,{default:n(()=>[t(u)]),_:1}),_(" "+m(o.i18n.menu[o.currentLang]),1)]),_:1}),t(f,{onClick:r[0]||(r[0]=h=>e.$router.push("/"+e.$route.params.server+"/event/"+o.data.eventid))},{default:n(()=>[_(m(o.data.eventName),1)]),_:1}),t(f,null,{default:n(()=>[_(m(o.data.storyCode)+" "+m(o.data.storyName)+" - "+m(o.data.avgTag),1)]),_:1})]),_:1}))]),_:1}),(c(!0),v(L,null,R(o.data.storyList,(h,S)=>(c(),v("div",{key:h.id,class:"line",id:"line"+h.id},[h.prop=="name"?(c(),g(z,{key:0,inputline:h,lidx:S,story:o.data.storyList},null,8,["inputline","lidx","story"])):A("",!0),h.prop=="Subtitle"?(c(),g(w,{key:1,inputline:h},null,8,["inputline"])):A("",!0),h.prop=="Decision"?(c(),g(y,{key:2,inputline:h},null,8,["inputline"])):A("",!0),h.prop=="Predicate"?(c(),g(T,{key:3,inputline:h},null,8,["inputline"])):A("",!0),h.prop=="Delay"&&o.showDelay=="y"?(c(),g(C,{key:4,inputline:h},null,8,["inputline"])):A("",!0),h.prop=="Image"&&h.attributes.image?(c(),g(j,{key:5,inputline:h},null,8,["inputline"])):A("",!0),zn],8,kn))),128))]),_:1},512)]),_:1})}var Nn=b(In,[["render",Tn]]);const Cn=[{path:"/:server",component:_t,children:[{path:"menu",component:Bt,children:[{path:"maintheme",component:te}]},{path:"event/:event",component:Yt},{path:"content",component:Nn}]},{path:"/",redirect:"/zh_CN/menu"}],Ln=fe({history:ve(),routes:Cn}),B=ye(it);B.use(we);B.use(Ln);B.mount("#ASTR");
