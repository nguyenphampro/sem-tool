"use strict";$("#contentgeneratorimport").on("click",function(){$("#totalurls").html(""),$("#contentresult").val("");var e="";if($("#csvsource").val()||LIFT_APP.code||(e+="Please upload .csv file\n"),e)alert(e);else{var l=null,t="";$("#csvsource").val()&&(l=$("#csvsource").val()),LIFT_APP.code&&(l=LIFT_APP.code.getValue()),l=l.replace(/^(?:\r\n?|\n|\r|\s*)/gm,"").replace(/\n*$/,"").split("\n");for(var r=$("#readCSVTable #fkw").val(),a=$("#readCSVTable #furl").val(),n=0;n<l.length;n++){var c="";0<$("#add-title:checkbox:checked").length&&(c+=' title="'+replaceLIFT(l[n].split(",")[r]).trim()+'"'),0<$("#add-nofollow:checkbox:checked").length&&(c+=' rel="nofollow"'),0<$("#add-tab:checkbox:checked").length&&(c+=' target="_blank"'),n<l.length-1?t+='<a href="'+l[n].split(",")[a]+'"'+c+">"+replaceLIFT(l[n].split(",")[r]).trim()+"</a>, ":t+='<a href="'+l[n].split(",")[a]+'"'+c+">"+replaceLIFT(l[n].split(",")[r]).trim()+"</a>"}0<t.length&&($("#boxresult .rv").hide(),$("#totalurls").html(t),$("#contentresult").val(t),$("#boxresult .rs").removeClass("d-none"))}}),$("#contentgenerator").on("click",function(){$("#totalurls").html(""),$("#contentresult").val("");var e="",l=$("#contentkeyword").val().replace(/^(?:\r\n?|\n|\r|\s*)/gm,"").replace(/\n*$/,"").split("\n"),t=$("#contenturls").val().replace(/^(?:\r\n?|\n|\r|\s*)/gm,"").replace(/\n*$/,"").split("\n");if($("#contentkeyword").val()||(e+="Please enter keywords list\n"),$("#contenturls").val()||(e+="Please enter URLs list\n"),l.length!=t.length&&(e+="Something wrong!\n"),e)alert(e);else{for(var r="",a=0;a<l.length;a++){var n="";0<$("#add-title:checkbox:checked").length&&(n+=' title="'+replaceLIFT(l[a]).trim()+'"'),0<$("#add-nofollow:checkbox:checked").length&&(n+=' rel="nofollow"'),0<$("#add-tab:checkbox:checked").length&&(n+=' target="_blank"'),a<l.length-1?r+='<a href="'+t[a]+'"'+n+">"+replaceLIFT(l[a]).trim()+"</a>, ":r+='<a href="'+t[a]+'"'+n+">"+replaceLIFT(l[a]).trim()+"</a>"}0<r.length&&($("#boxresult .rv").hide(),$("#totalurls").html(r),$("#contentresult").val(r),$("#boxresult .rs").removeClass("d-none"))}});var clipboard=new ClipboardJS("[data-clipboard-target]");clipboard.on("success",function(e){$("#copy_toast").toast("show"),e.clearSelection()});