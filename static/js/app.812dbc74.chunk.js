(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{100:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAmCAYAAAA4LpBhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIVSURBVHgBxVeLccIwDBW9DsAG9QZlhHQDukE2KBuQDcgGYQOuE4QNQicwG4QNVBtk8uJ8SK9K++58yclCTx9bEUQzgZmX9BdwRIlbB7dqvuGF5oKQWe5iRXPAGf4AEk+8AQcS0kZEmIM8pFe3rs6gAcIM5InIKtKGM1qI8SKSVyJPSRM+bRClAfkGamtIE87gWoyXINuCI2vSBkRU+DR68r76zkWKqKdG+DyBwMjrZbFYXMI7PE9ufbq1R32ne6afQI59yc19CyglnQZ0l1LPqif6q/4jMsPt+oSTaHsM9snrAbnlvtMshBZ+nHHUUfh2avfczoB/LzhqeZKBFGy2iUUhbFY8oX2Jk2ai3iEQ48YOvFHtl87eCjJj0ZMAQ4qISra/ByR59yhIGdz050O8UcqGausay+CTW0FwJl2EqeEYN4o7qds4kS4C6Ve88UT/AE967aOsPzKe5fna2YEjrToucvOhr+OAfKShlm+kCPkiHd3yhNvYo0w8ykkZcm1CN9riRtLpi7rEKdxXe7+z4E1CM0D6r201IUhxSTOB45FVTlqIVv3/x2BLnDNaHhjM42g3pAQ4SJYHRpY1XGhDv0R0ZdIxxXzMM8mId24jaz2ghx/w/JF33mgFxKkceX+fd9wdSwMK0THiTNDrzFyLIWL38EUf+rAfqflk+YaejOi9w5D+GNz8T7HicTaSygx0y7EafgOwHDlv40ZxIwAAAABJRU5ErkJggg=="},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return z}));var o=n(4),i=n.n(o),a=n(193),r=n(194),c=n(2),l=n(17),s=n(66),d=n(6),u=n(28),h=n(3),g=n(44),p=n(54),j=n(0),x=n.n(j),b=n(24),f=n(57),O=n.n(f),y=n(7),m=Object(j.createContext)(null),A=function(){return Object(j.useContext)(m)},S=function(e){var t=e.children,n=Object(j.useState)(null),o=i()(n,2),a=o[0],r=o[1];return Object(y.jsx)(m.Provider,{value:[a,r],children:t})},T=function(){var e=x.a.useState(""),t=i()(e,2),o=t[0],a=t[1],r=x.a.useState(""),c=i()(r,2),j=c[0],f=c[1],m=Object(b.k)(),S=A(),T=i()(S,2),w=(T[0],T[1]);return Object(y.jsxs)(s.a,{behavior:"ios"===d.a.OS?"padding":"height",style:k.container,children:[Object(y.jsx)(h.a,{style:k.logobox,children:Object(y.jsx)(u.a,{style:k.logo,source:n(100)})}),Object(y.jsx)(l.a,{style:k.titleText,children:"Sign In"}),Object(y.jsx)(l.a,{style:k.questionText,children:"Already have an account?"}),Object(y.jsx)(p.a,{onPress:function(){m.navigate("SignUp")},children:Object(y.jsx)(l.a,{style:k.linkText,children:"Sign Up"})}),Object(y.jsxs)(h.a,{style:k.inputContainer,children:[Object(y.jsx)(l.a,{style:k.inputText,children:"Email"}),Object(y.jsx)(g.a,{style:k.input,placeholder:"ilkayalti@hotmail.com",value:o,placeholderTextColor:"#D8D8D8",onChangeText:a}),Object(y.jsx)(l.a,{style:k.inputText,children:"Password"}),Object(y.jsx)(g.a,{style:k.input,placeholder:"********",value:j,placeholderTextColor:"#D8D8D8",onChangeText:f,secureTextEntry:!0})]}),Object(y.jsx)(p.a,{style:k.signupButton,onPress:function(){O()({method:"post",url:"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword",params:{key:"AIzaSyBmwnPUwrIFFtMYKg3qR1y_Hf1S-1vwk8E"},data:{email:o,password:j}}).then((function(e){w(e.data)})).catch((function(e){console.warn(e.message)}))},children:Object(y.jsx)(l.a,{style:k.signup,children:"Login"})})]})},k=c.a.create({container:{flex:1,backgroundColor:"#000417",paddingHorizontal:32,paddingTop:"android"===d.a.OS?25:0},titleText:{color:"#fff",fontSize:36,fontWeight:"bold"},logobox:{width:27,height:35,marginTop:32,marginBottom:27},logo:{width:"100%",height:"100%"},questionText:{color:"#D8D8D8",marginTop:12,fontSize:18},linkText:{color:"#99E6FC",textDecorationLine:"underline",fontSize:18},inputContainer:{marginTop:49},inputText:{color:"#D8D8D8",fontSize:14,marginTop:17},input:{backgroundColor:"#4B5378",borderRadius:5,padding:16,marginTop:3,height:56,fontSize:18},signupButton:{backgroundColor:"#67D9FA",width:160,height:48,borderRadius:5,marginTop:28,marginLeft:"52%",justifyContent:"center",alignItems:"center"},signup:{color:"#fff",fontSize:16,fontWeight:"bold"}}),w=n(5),D=n.n(w);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){D()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=function(){var e=x.a.useState(""),t=i()(e,2),o=t[0],a=t[1],r=x.a.useState(""),c=i()(r,2),j=c[0],f=c[1],m=x.a.useState(""),S=i()(m,2),T=S[0],k=S[1],w=Object(b.k)(),D=A(),v=i()(D,2),I=(v[0],v[1]);return Object(y.jsxs)(s.a,{behavior:"ios"===d.a.OS?"padding":"height",style:B.container,children:[Object(y.jsx)(h.a,{style:B.logobox,children:Object(y.jsx)(u.a,{style:B.logo,source:n(100)})}),Object(y.jsx)(l.a,{style:B.titleText,children:"Sign Up"}),Object(y.jsx)(l.a,{style:B.questionText,children:"Already have an account?"}),Object(y.jsx)(p.a,{onPress:function(){w.navigate("SignIn")},children:Object(y.jsx)(l.a,{style:B.linkText,children:"Sign in"})}),Object(y.jsxs)(h.a,{style:B.inputContainer,children:[Object(y.jsx)(l.a,{style:B.inputText,children:"Your Name"}),Object(y.jsx)(g.a,{style:B.input,placeholder:"ilkayus",value:T,placeholderTextColor:"#D8D8D8",onChangeText:k}),Object(y.jsx)(l.a,{style:B.inputText,children:"Your Email"}),Object(y.jsx)(g.a,{style:B.input,placeholder:"ilkayalti@hotmail.com",value:o,placeholderTextColor:"#D8D8D8",onChangeText:a}),Object(y.jsx)(l.a,{style:B.inputText,children:"Your Password"}),Object(y.jsx)(g.a,{style:B.input,placeholder:"********",value:j,placeholderTextColor:"#D8D8D8",onChangeText:f,secureTextEntry:!0})]}),Object(y.jsx)(p.a,{style:B.signupButton,onPress:function(){O()({method:"post",url:"https://identitytoolkit.googleapis.com/v1/accounts:signUp",params:{key:"AIzaSyBmwnPUwrIFFtMYKg3qR1y_Hf1S-1vwk8E"},data:{email:o,password:j}}).then((function(e){O()({method:"post",url:"https://identitytoolkit.googleapis.com/v1/accounts:update",params:{key:"AIzaSyBmwnPUwrIFFtMYKg3qR1y_Hf1S-1vwk8E"},data:{idToken:e.data.idToken,displayName:T}}).then((function(t){I(C(C({},t.data),{},{idToken:e.data.idToken}))})).catch((function(e){alert(e.message)})),console.log(e.data)})).catch((function(e){alert(e.message)}))},children:Object(y.jsx)(l.a,{style:B.signup,children:"SIGN UP"})})]})},B=c.a.create({container:{flex:1,backgroundColor:"#000417",paddingHorizontal:32,paddingTop:"android"===d.a.OS?25:0},titleText:{color:"#fff",fontSize:36,fontWeight:"bold"},logobox:{width:27,height:35,marginTop:32,marginBottom:27},logo:{width:"100%",height:"100%"},questionText:{color:"#D8D8D8",marginTop:12,fontSize:18},linkText:{color:"#99E6FC",textDecorationLine:"underline",fontSize:18},inputContainer:{marginTop:49},inputText:{color:"#D8D8D8",fontSize:14,marginTop:17},input:{backgroundColor:"#4B5378",borderRadius:5,padding:16,marginTop:3,height:56,fontSize:18},signupButton:{backgroundColor:"#67D9FA",width:160,height:48,borderRadius:5,marginTop:28,marginLeft:"52%",justifyContent:"center",alignItems:"center"},signup:{color:"#fff",fontSize:16,fontWeight:"bold"}}),E=function(){var e=A(),t=i()(e,1)[0];return Object(y.jsx)(h.a,{children:Object(y.jsx)(l.a,{style:{fontSize:40,color:"#000"},children:t.displayName})})};c.a.create({});function z(){var e=Object(r.a)();return Object(y.jsx)(a.a,{children:Object(y.jsx)(S,{children:Object(y.jsx)((function(){var t=A();return i()(t,1)[0]?Object(y.jsx)(e.Navigator,{screenOptions:{headerShown:!1},children:Object(y.jsx)(e.Screen,{name:"Profile",component:E})}):Object(y.jsxs)(e.Navigator,{screenOptions:{headerShown:!1},children:[Object(y.jsx)(e.Screen,{name:"SignUp",component:I}),Object(y.jsx)(e.Screen,{name:"SignIn",component:T})]})}),{})})})}c.a.create({})},134:function(e,t,n){e.exports=n(186)}},[[134,1,2]]]);
//# sourceMappingURL=app.812dbc74.chunk.js.map