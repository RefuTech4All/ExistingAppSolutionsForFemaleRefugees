webpackJsonp([1,4],{"/fcW":function(n,t){function l(n){throw new Error("Cannot find module '"+n+"'.")}l.keys=function(){return[]},l.resolve=l,n.exports=l,l.id="/fcW"},0:function(n,t,l){n.exports=l("x35b")},"1A80":function(n,t,l){"use strict";function u(n){return r._31(0,[(n()(),r._32(0,null,null,3,"md-toolbar",[["class","mat-toolbar"],["color","primary"],["role","toolbar"]],null,null,null,o.f,o.g)),r._33(16384,null,0,d._22,[[2,d._23],r.O],null,null),r._33(49152,null,0,d._24,[r.M,r.O],{color:[0,"color"]},null),(n()(),r._34(0,["\n  Existing App Solutions For Female Refugees\n"])),(n()(),r._34(null,["\n\n"])),(n()(),r._32(0,null,null,8,"td-message",[["color","blue"],["icon","info"],["label","GitHub"],["sublabel","Contribute on GitHub"]],[[40,"@tdFadeInOut",0],[40,"@tdCollapse",0],[4,"display",null]],[["component","@tdCollapse.done"]],function(n,t,l){var u=!0;if("component:@tdCollapse.done"===t){u=!1!==r._35(n,6).animationDoneListener()&&u}return u},i.a,i.b)),r._33(4243456,null,0,c.a,[r.M,r.N,r.O],{label:[0,"label"],sublabel:[1,"sublabel"],icon:[2,"icon"],color:[3,"color"]},null),(n()(),r._34(null,["\n  "])),(n()(),r._32(0,null,0,4,"a",[["class","mat-button"],["href","https://github.com/RefuTech4All/ExistingAppSolutionsForFemaleRefugees"],["md-button",""],["target","_blank"],["td-message-actions",""]],[[1,"disabled",0],[1,"aria-disabled",0],[8,"tabIndex",0]],[[null,"click"]],function(n,t,l){var u=!0;if("click"===t){u=!1!==r._35(n,10)._haltDisabledEvents(l)&&u}return u},o.h,o.i)),r._33(16384,null,0,d._22,[[2,d._23],r.O],null,null),r._33(180224,null,0,d._25,[d.b,d.l,r.O,r.M],null,null),r._33(16384,null,0,d._26,[],null,null),(n()(),r._34(0,["Visit GitHub Project"])),(n()(),r._34(null,["\n"])),(n()(),r._34(null,["\n\n"])),(n()(),r._32(0,null,null,2,"app-projects",[],null,null,null,s.a,s.b)),r._36(512,null,_.a,_.a,[f.i]),r._33(114688,null,0,b.a,[_.a],null,null),(n()(),r._34(null,["\n"]))],function(n,t){n(t,2,0,"primary"),n(t,6,0,"GitHub","Contribute on GitHub","info","blue"),n(t,17,0)},function(n,t){n(t,5,0,r._35(t,6).fadeAnimation,r._35(t,6).collapsedAnimation,r._35(t,6).hidden),n(t,8,0,r._35(t,10).disabled||null,r._35(t,10)._isAriaDisabled,r._35(t,10).tabIndex)})}function e(n){return r._31(0,[(n()(),r._32(0,null,null,1,"app-root",[],null,null,null,u,h)),r._33(49152,null,0,p.a,[],null,null)],null,null)}var a=l("Ni5f"),r=l("3j3K"),o=l("ZWsw"),d=l("fYnu"),i=l("RzPz"),c=l("ic7r"),s=l("mF87"),_=l("cVu2"),f=l("Fzro"),b=l("4kBE"),p=l("YWx4");l.d(t,"a",function(){return v});var m=[a.a],h=r._30({encapsulation:0,styles:m,data:{}}),v=r._37("app-root",p.a,e,{},{},[])},"4kBE":function(n,t,l){"use strict";var u=l("cVu2");l.d(t,"a",function(){return e});var e=function(){function n(n){this.projectsService=n,this.columns=[{name:"name",label:"Name"},{name:"status",label:"Status"},{name:"url",label:"Url"},{name:"email",label:"Email"},{name:"connection",label:"Connection"},{name:"presentation",label:"Presentation"},{name:"tags",label:"Tags",format:function(n){return n.join()}}],this.data=[]}return n.prototype.ngOnInit=function(){this.getProjects()},n.prototype.getProjects=function(){var n=this;this.projectsService.getProjects().then(function(t){n.data=t})},n.ctorParameters=function(){return[{type:u.a}]},n}()},Iksp:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u=function(){function n(){}return n}()},Ni5f:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u=[""]},YWx4:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u=function(){function n(){}return n}()},cVu2:function(n,t,l){"use strict";var u=l("Fzro"),e=l("eErF");l.n(e);l.d(t,"a",function(){return a});var a=function(){function n(n){this.http=n,this.url="https://raw.githubusercontent.com/RefuTech4All/ExistingAppSolutionsForFemaleRefugees/master/data.json"}return n.prototype.getProjects=function(){return this.http.get(this.url).toPromise().then(function(n){return n.json()}).catch(this.handleError)},n.prototype.handleError=function(n){return console.error("An error occurred",n),Promise.reject(n.message||n)},n.ctorParameters=function(){return[{type:u.i}]},n}()},kZql:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u={production:!0}},kke6:function(n,t,l){"use strict";var u=l("3j3K"),e=l("Iksp"),a=l("YWx4"),r=l("ZWsw"),o=l("1A80"),d=l("2Je8"),i=l("Qbdm"),c=l("fYnu"),s=l("1GJ2"),_=l("KN8t"),f=l("NVOs"),b=l("Fzro"),p=l("Um43"),m=l("w8Ub"),h=l("5oXY"),v=l("PD4z"),g=l("aObP"),j=l("cGuu"),k=l("XejC"),y=l("r9rR"),F=l("WvvV");l.d(t,"a",function(){return w});var w=u.b(e.a,[a.a],function(n){return u.c([u.d(512,u.e,u.f,[[8,[r.a,r.b,r.c,r.d,r.e,o.a]],[3,u.e],u.g]),u.d(5120,u.h,u.i,[[3,u.h]]),u.d(4608,d.a,d.b,[u.h]),u.d(4608,u.j,u.j,[]),u.d(5120,u.k,u.l,[]),u.d(5120,u.m,u.n,[]),u.d(5120,u.o,u.p,[]),u.d(4608,i.b,i.c,[i.d]),u.d(6144,u.q,null,[i.b]),u.d(4608,i.e,c.a,[]),u.d(5120,i.f,function(n,t,l,u){return[new i.g(n),new i.h(t),new i.i(l,u)]},[i.d,i.d,i.d,i.e]),u.d(4608,i.j,i.j,[i.f,u.r]),u.d(135680,i.k,i.k,[i.d]),u.d(4608,i.l,i.l,[i.j,i.k]),u.d(5120,s.a,_.a,[]),u.d(5120,s.b,_.b,[]),u.d(4608,s.c,_.c,[s.a,s.b]),u.d(5120,u.s,_.d,[i.l,s.c,u.r]),u.d(6144,i.m,null,[i.k]),u.d(4608,u.t,u.t,[u.r]),u.d(4608,i.n,i.n,[i.d]),u.d(4608,i.o,i.o,[i.d]),u.d(4608,f.a,f.a,[]),u.d(4608,b.a,b.a,[]),u.d(4608,b.b,b.c,[]),u.d(5120,b.d,b.e,[]),u.d(4608,b.f,b.f,[b.a,b.b,b.d]),u.d(4608,b.g,b.h,[]),u.d(5120,b.i,b.j,[b.f,b.g]),u.d(4608,c.b,c.b,[]),u.d(5120,c.c,c.d,[[3,c.c],u.r,c.b]),u.d(5120,c.e,c.f,[[3,c.e],c.c]),u.d(4608,c.g,c.g,[c.c,c.e]),u.d(5120,c.h,c.i,[[3,c.h]]),u.d(4608,c.j,c.j,[c.e]),u.d(4608,c.k,c.k,[c.g,c.h,u.e,c.j,u.u,u.v,u.r]),u.d(5120,c.l,c.m,[[3,c.l],u.r,c.b]),u.d(5120,c.n,c.o,[[3,c.n]]),u.d(4608,c.p,c.p,[]),u.d(4608,c.q,c.q,[c.b]),u.d(4608,c.r,c.r,[c.q,c.b,u.r]),u.d(5120,c.s,c.t,[[3,c.s],[2,c.u],c.b]),u.d(4608,c.v,c.v,[c.k,u.v,[2,d.c],[3,c.v]]),u.d(4608,c.w,c.w,[]),u.d(5120,c.x,c.y,[[3,c.x],[2,b.i],i.b]),u.d(4608,c.z,c.z,[c.k,c.s,[3,c.z]]),u.d(4608,p.a,_.e,[u.s]),u.d(4608,m.a,m.a,[h.a]),u.d(5120,v.a,v.b,[[3,v.a]]),u.d(512,d.d,d.d,[]),u.d(1024,u.w,i.p,[]),u.d(1024,u.x,function(n,t){return[i.q(n,t)]},[[2,i.r],[2,u.y]]),u.d(512,u.z,u.z,[[2,u.x]]),u.d(131584,u.A,u.A,[u.r,u.B,u.v,u.w,u.e,u.z]),u.d(2048,u.u,null,[u.A]),u.d(512,u.C,u.C,[u.u]),u.d(512,i.s,i.s,[[3,i.s]]),u.d(512,f.b,f.b,[]),u.d(512,f.c,f.c,[]),u.d(512,b.k,b.k,[]),u.d(512,c.A,c.A,[]),u.d(256,c.B,!0,[]),u.d(512,c.C,c.C,[[2,i.d],[2,c.B]]),u.d(512,c.D,c.D,[]),u.d(512,c.E,c.E,[]),u.d(512,c.F,c.F,[]),u.d(512,c.G,c.G,[]),u.d(512,c.H,c.H,[]),u.d(512,c.I,c.I,[]),u.d(512,c.J,c.J,[]),u.d(512,c.K,c.K,[]),u.d(512,c.L,c.L,[]),u.d(512,c.M,c.M,[]),u.d(512,c.N,c.N,[]),u.d(512,c.O,c.O,[]),u.d(512,c.P,c.P,[]),u.d(512,c.Q,c.Q,[]),u.d(512,c.R,c.R,[]),u.d(512,c.S,c.S,[]),u.d(512,c.T,c.T,[]),u.d(512,c.U,c.U,[]),u.d(512,c.V,c.V,[]),u.d(512,c.W,c.W,[]),u.d(512,c.X,c.X,[]),u.d(512,c.Y,c.Y,[]),u.d(512,c.Z,c.Z,[]),u.d(512,c._0,c._0,[]),u.d(512,c._1,c._1,[]),u.d(512,c._2,c._2,[]),u.d(512,c._3,c._3,[]),u.d(512,c._4,c._4,[]),u.d(512,c._5,c._5,[]),u.d(512,c._6,c._6,[]),u.d(512,c._7,c._7,[]),u.d(512,c._8,c._8,[]),u.d(512,c._9,c._9,[]),u.d(512,c._10,c._10,[]),u.d(512,c._11,c._11,[]),u.d(512,c._12,c._12,[]),u.d(512,c._13,c._13,[]),u.d(512,c._14,c._14,[]),u.d(512,_.f,_.f,[]),u.d(512,g.a,g.a,[]),u.d(512,j.a,j.a,[]),u.d(512,k.a,k.a,[]),u.d(512,y.a,y.a,[]),u.d(512,F.a,F.a,[]),u.d(512,e.a,e.a,[])])})},mF87:function(n,t,l){"use strict";function u(n){return r._31(0,[(n()(),r._32(0,null,null,4,"td-data-table",[],null,null,null,o.a,o.b)),r._36(5120,null,d.d,function(n){return[n]},[i.a]),r._33(1097728,null,1,i.a,[[2,c.d],r.N],{data:[0,"data"],columns:[1,"columns"]},null),r._38(603979776,1,{_templates:1}),(n()(),r._34(null,["\n"])),(n()(),r._34(null,["\n"]))],function(n,t){var l=t.component;n(t,2,0,l.data,l.columns)},null)}function e(n){return r._31(0,[(n()(),r._32(0,null,null,2,"app-projects",[],null,null,null,u,p)),r._36(512,null,_.a,_.a,[f.i]),r._33(114688,null,0,s.a,[_.a],null,null)],function(n,t){n(t,2,0)},null)}var a=l("mw6Q"),r=l("3j3K"),o=l("ty61"),d=l("NVOs"),i=l("gk9K"),c=l("Qbdm"),s=l("4kBE"),_=l("cVu2"),f=l("Fzro");l.d(t,"b",function(){return p}),t.a=u;var b=[a.a],p=r._30({encapsulation:0,styles:b,data:{}});r._37("app-projects",s.a,e,{},{},[])},mw6Q:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u=[""]},x35b:function(n,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=l("3j3K"),e=l("kZql"),a=l("Qbdm"),r=l("kke6");e.a.production&&l.i(u.a)(),l.i(a.a)().bootstrapModuleFactory(r.a)}},[0]);