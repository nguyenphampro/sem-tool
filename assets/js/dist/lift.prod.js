"use strict";var LIFT_APP={version:"v3.6.1",KW:[],code:null,init:function(){$("#version").text(this.version),$(function(){$('[data-toggle="tooltip"]').tooltip()})},__a_kw:$("#a_kw"),__b_kw:$("#b_kw"),__c_kw:$("#c_kw"),__d_kw:$("#d_kw"),__e_kw:$("#e_kw"),akw_get:function(){return this.__a_kw.val().trim().split(",")},bkw_get:function(){return this.__b_kw.val().trim().split(",")},ckw_get:function(){return this.__c_kw.val().trim().split(",")},dkw_get:function(){return this.__d_kw.val().trim().split(",")},ekw_get:function(){return this.__e_kw.val().trim().split(",")},gen:function(){for(var t=0;t<this.akw_get().length;t++){var e=lift_encode(this.akw_get()[t].trim());if(0<e.length)for(var i=0;i<this.bkw_get().length;i++){var _=lift_encode(this.bkw_get()[i].trim());if(0<_.length){this.KW.push(e+" "+_);for(var n=0;n<this.ckw_get().length;n++){var r=lift_encode(this.ckw_get()[n].trim());if(0<r.length){this.KW.push(e+" "+_+" "+r);for(var s=0;s<this.dkw_get().length;s++){var h=lift_encode(this.dkw_get()[s].trim());if(0<h.length){this.KW.push(e+" "+_+" "+r+" "+h);for(var l=0;l<this.ekw_get().length;l++){var o=lift_encode(this.ekw_get()[l].trim());0<o.length&&this.KW.push(e+" "+_+" "+r+" "+h+" "+o)}}}}}}}}$("#results").text(lift_decode(LIFT_APP.KW.join("\n"))),$("#boxresult .rs").removeClass("d-none"),$("#boxresult .rv").hide(),$("#number").text(LIFT_APP.KW.length)}};LIFT_APP.init();