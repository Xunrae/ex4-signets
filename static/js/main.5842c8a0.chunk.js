(this["webpackJsonpex4-signets"]=this["webpackJsonpex4-signets"]||[]).push([[0],{156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},179:function(e,t,a){},287:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(14),s=a.n(i),r=(a(156),a(47)),o=a(28),l=a(17),u=(a(157),a(158),a(339)),j=a(326),d=a(9),b=a(7);function h(e){var t=e.utilisateur;return Object(b.jsxs)("header",{className:"Entete",children:[Object(b.jsxs)("div",{className:"logo",children:["Signets",Object(b.jsx)(j.a,{variant:"outlined",size:"small",className:"btn-deconnexion",onClick:function(){return d.a.auth().signOut()},children:"D\xe9connexion"})]}),Object(b.jsxs)("div",{className:"utilisateur",children:[t.displayName," ",Object(b.jsx)(u.a,{className:"avatar",alt:t.displayName,src:t.photoURL})]})]})}var m=a(96),O=a.n(m),p=a(132),f=(a(165),a(166),a(331)),x=a(134),g=a.n(x),v=a.p+"static/media/couverture.2dc9ece9.webp",N=a(143),y=a(340),D=(a(167),a(133)),C=a.n(D);function I(){var e=n.a.useState(null),t=Object(l.a)(e,2),a=t[0],c=t[1],i=function(){c(null)};return Object(b.jsxs)("div",{className:"MenuMoreVert",children:[Object(b.jsx)(j.a,{className:"boutonMoreVert","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},children:Object(b.jsx)(C.a,{})}),Object(b.jsxs)(N.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:i,children:[Object(b.jsx)(y.a,{onClick:i,children:"Modifier"}),Object(b.jsx)(y.a,{onClick:i,children:"Supprimer"})]})]})}function S(e){e.id;var t=e.nom,a=e.couleur,c=e.datemodif,n=e.couverture,i=""!==c?"Modifi\xe9 : "+function(e){var t=e?new Date(1e3*e.seconds):new Date,a=["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"];return"".concat(t.getDate()," ").concat(a[t.getMonth()]," ").concat(t.getFullYear())}(c):";-P";return""==n&&(n=v),Object(b.jsxs)("article",{className:"Dossier",style:{backgroundColor:a},children:[Object(b.jsxs)("div",{className:"couverture",children:[Object(b.jsx)(f.a,{className:"deplacer","aria-label":"d\xe9placer",disableRipple:!0,children:Object(b.jsx)(g.a,{})}),Object(b.jsx)("img",{src:n,alt:t})]}),Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:i})]}),Object(b.jsx)(f.a,{className:"modifier","aria-label":"modifier",size:"small",children:Object(b.jsx)(I,{})})]})}var A=a(135);a(289);console.log(document.querySelector("#firebaseui-auth-container")),d.a.apps.length||d.a.initializeApp({apiKey:"AIzaSyCPHD2u1jjZfQ4d-W5qKImDKg1I9BalT4U",authDomain:"panier-achat-acl.firebaseapp.com",databaseURL:"https://panier-achat-acl-default-rtdb.firebaseio.com",projectId:"panier-achat-acl",storageBucket:"panier-achat-acl.appspot.com",messagingSenderId:"1051741793466",appId:"1:1051741793466:web:be8efccc79106ee3f36683",measurementId:"G-GFS0784J6L"});var k=new A.a.AuthUI(d.a.auth()),w=d.a.firestore();function V(e){var t=e.utilisateur,a=e.etatDossiers,n=Object(l.a)(a,2),i=n[0],s=n[1];Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,w.collection("utilisateurs-ex4").doc(t.uid).collection("dossiers").get();case 3:e.sent.forEach((function(e){a.push(Object(r.a)({id:e.id},e.data()))})),s(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var o=i.length>0?i.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(S,Object(r.a)({},e))},e.id)})):Object(b.jsx)("li",{children:Object(b.jsxs)("article",{className:"DossierVide",children:[Object(b.jsx)("p",{className:"dossiersVide",children:"Votre liste de dossiers est vide"}),Object(b.jsx)("p",{className:"smiley",children:";-P"})]})},"defaultKey");return Object(b.jsx)("ul",{className:"ListeDossiers",children:o})}var E=a(334),R=a(141),P=a.n(R);a(179),a(180);function F(){return Object(c.useEffect)((function(){return k.start("#firebaseui-widget",{signInOptions:[d.a.auth.GoogleAuthProvider.PROVIDER_ID,d.a.auth.FacebookAuthProvider.PROVIDER_ID,d.a.auth.GithubAuthProvider.PROVIDER_ID],signInFlow:"popup"},[])})),Object(b.jsxs)("div",{className:"Accueil",children:[Object(b.jsxs)("h3",{className:"logo",children:["Signets ",Object(b.jsx)("span",{children:"beta"})]}),Object(b.jsxs)("h2",{className:"amorce",children:["Organisez vos signets Web, ",Object(b.jsx)("br",{}),"Simple comme bonjour !"]}),Object(b.jsx)("h4",{className:"connexion-etiquette",children:"Connexion \xe0 Signets"}),Object(b.jsx)("div",{id:"firebaseui-widget"})]})}var M=a(335),T=a(337),z=a(333),B=a(332),G=a(338),K=a(142);function L(e){var t=e.ouvert,a=e.setOuvert,n=e.gererAjout,i=Object(c.useState)(""),s=Object(l.a)(i,2),r=s[0],o=s[1],u=Object(c.useState)(""),d=Object(l.a)(u,2),h=d[0],m=d[1],O=Object(c.useState)("#537169"),p=Object(l.a)(O,2),f=p[0],x=p[1];function g(){o(""),m(""),x("#537169")}return Object(b.jsx)("div",{className:"AjouterDossier",children:Object(b.jsxs)(T.a,{open:t,onClose:function(){return a(!1)},"aria-labelledby":"form-dialog-title",children:[Object(b.jsx)(G.a,{id:"form-dialog-title",children:"Ajouter un dossier"}),Object(b.jsxs)(B.a,{children:[Object(b.jsx)(M.a,{autoFocus:!0,margin:"normal",id:"nomDossier",label:"Nom du dossier",type:"text",fullWidth:!0,onChange:function(e){return o(e.target.value)},defaultValue:r}),Object(b.jsx)(M.a,{style:{margin:"30px 0 50px"},id:"urlImage",label:"Adresse de l'image de couverture",type:"text",fullWidth:!0,onChange:function(e){return m(e.target.value)},defaultValue:h}),Object(b.jsx)(K.a,{width:"100%",triangle:"hide",onChangeComplete:function(e,t){return x(e.hex)},color:f,colors:["#777777","#00a37d","#804e8b","#a07c1c","#007241","#36dd00"]})]}),Object(b.jsxs)(z.a,{children:[Object(b.jsx)(j.a,{onClick:function(){a(!1),g()},variant:"contained",color:"secondary",style:{marginTop:"20px"},children:"Annuler"}),Object(b.jsx)(j.a,{variant:"contained",onClick:function(){""!==r&&n(r,h,f),g()},color:"primary",style:{backgroundColor:"green",marginTop:"20px"},children:"Ajouter"})]})]})})}function U(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)([]),s=Object(l.a)(i,2),u=s[0],j=s[1],m=Object(c.useState)(!1),O=Object(l.a)(m,2),p=O[0],f=O[1];return Object(c.useEffect)((function(){d.a.auth().onAuthStateChanged((function(e){n(e),e&&w.collection("utilisateurs-ex4").doc(e.uid).set({nom:e.displayName,courriel:e.email,datecompte:d.a.firestore.FieldValue.serverTimestamp()},{merge:!0})}))}),[]),Object(b.jsx)("div",{className:"Appli",children:a?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{utilisateur:a}),Object(b.jsxs)("section",{className:"contenu-principal",children:[Object(b.jsx)(V,{utilisateur:a,etatDossiers:i}),Object(b.jsx)(L,{ouvert:p,setOuvert:f,gererAjout:function(e,t,c){var n={nom:e,couverture:t,couleur:c,datemodif:d.a.firestore.FieldValue.serverTimestamp(),signets:[]};w.collection("utilisateurs-ex4").doc(a.uid).collection("dossiers").add(n).then((function(e){e.get().then((function(e){return j([].concat(Object(o.a)(u),[Object(r.a)(Object(r.a)({},e.data()),{},{id:e.id})]))})),f(!1)}))}}),Object(b.jsx)(E.a,{onClick:function(){return f(!0)},className:"ajoutRessource",color:"primary","aria-label":"Ajouter dossier",children:Object(b.jsx)(P.a,{})})]})]}):Object(b.jsx)(F,{})})}s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(U,{})}),document.getElementById("racine"))}},[[287,1,2]]]);
//# sourceMappingURL=main.5842c8a0.chunk.js.map