window.__NUXT__=(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1657381514",layout:"default",error:aD,state:{post:{slug:"leetcode-819",description:"Most Common Word",title:"LeetCode 819번 문제",tags:"algorithm, leetcode, python, string",toc:[{id:aE,depth:O,text:aF},{id:aG,depth:O,text:aH},{id:aI,depth:O,text:aJ},{id:aK,depth:P,text:"1. 리스트 컴프리헨션과 defaultdict() 사용"},{id:aL,depth:P,text:"2. 리스트 컴프리헨션과 Counter 객체 사용"},{id:aM,depth:O,text:aN},{id:aO,depth:P,text:aP},{id:aQ,depth:P,text:aR},{id:V,depth:P,text:V},{id:W,depth:O,text:W}],body:{type:"root",children:[{type:b,tag:Q,props:{id:aE},children:[{type:b,tag:o,props:{href:"#%EB%AC%B8%EC%A0%9C-%EB%A7%81%ED%81%AC",ariaHidden:v,tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:aF}]},{type:a,value:f},{type:b,tag:"p",props:{},children:[{type:b,tag:o,props:{href:aS,rel:[ab,ac,ad],target:ae},children:[{type:a,value:aS}]}]},{type:a,value:f},{type:b,tag:Q,props:{id:aG},children:[{type:b,tag:o,props:{href:"#%EB%82%98%EC%9D%98-%ED%92%80%EC%9D%B4",ariaHidden:v,tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:aH}]},{type:a,value:f},{type:b,tag:af,props:{},children:[{type:a,value:f},{type:b,tag:ag,props:{},children:[{type:a,value:ah}]},{type:a,value:f},{type:b,tag:I,props:{markdown:J},children:[{type:a,value:f},{type:b,tag:I,props:{className:[X]},children:[{type:b,tag:Y,props:{className:[Z,_]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:R}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:" re\n\n\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ak}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,al]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ao}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ap]},children:[{type:a,value:"my_solution"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:at}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"# 소문자화된 paragraph를 정규식을 사용하여 특수문자를 공백으로 치환, 단어 분리"}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:t}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"'[!?\\',;.]'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:ay},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:az},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"# 각 단어의 개수를 저장하는 딕셔너리"}]},{type:a,value:"\n        counter "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:t}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"{"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"}"}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:$}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:F}]},{type:a,value:aT},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\n            "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aa}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:F}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\n                "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aa}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:F}]},{type:a,value:" counter"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\n                    counter"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:t}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:T}]},{type:a,value:"\n                counter"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aU}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:J}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"# 딕셔너리에 저장된 항목 중 value가 가장 큰 항목의 key를 리턴"}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aB}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:aV}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"counter"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"items"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:aW},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"lambda"}]},{type:a,value:aX},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aX},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f}]}]}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:Q,props:{id:aI},children:[{type:b,tag:o,props:{href:"#%EB%AC%B8%EC%A0%9C-%ED%92%80%EC%9D%B4",ariaHidden:v,tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:aJ}]},{type:a,value:f},{type:b,tag:U,props:{id:aK},children:[{type:b,tag:o,props:{href:"#1-%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EC%BB%B4%ED%94%84%EB%A6%AC%ED%97%A8%EC%85%98%EA%B3%BC-defaultdict-%EC%82%AC%EC%9A%A9",ariaHidden:v,tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:"1. 리스트 컴프리헨션과 "},{type:b,tag:i,props:{},children:[{type:a,value:aY}]},{type:a,value:" 사용"}]},{type:a,value:f},{type:b,tag:af,props:{},children:[{type:a,value:f},{type:b,tag:ag,props:{},children:[{type:a,value:ah}]},{type:a,value:f},{type:b,tag:I,props:{markdown:J},children:[{type:a,value:f},{type:b,tag:I,props:{className:[X]},children:[{type:b,tag:Y,props:{className:[Z,_]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:R}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:aZ},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:R}]},{type:a,value:a_},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:" defaultdict\n\n\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ak}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,al]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ao}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ap]},children:[{type:a,value:"solution1"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:at}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:a$}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:t}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:ba},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:$}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:F}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:bb}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:ay},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:az},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aa}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:F}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"# collections.defaultdict()로 int 기본값이 자동으로 부여되게 설정"}]},{type:a,value:bc},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:t}]},{type:a,value:" defaultdict"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"int"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:$}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:F}]},{type:a,value:aT},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\n            counts"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aU}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:J}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"# counts에서 값이 가장 큰 키를 리턴"}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aB}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:aV}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:bd},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:aW},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:t}]},{type:a,value:bd},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"get"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:U,props:{id:aL},children:[{type:b,tag:o,props:{href:"#2-%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EC%BB%B4%ED%94%84%EB%A6%AC%ED%97%A8%EC%85%98%EA%B3%BC-counter-%EA%B0%9D%EC%B2%B4-%EC%82%AC%EC%9A%A9",ariaHidden:v,tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:"2. 리스트 컴프리헨션과 "},{type:b,tag:i,props:{},children:[{type:a,value:"Counter"}]},{type:a,value:" 객체 사용"}]},{type:a,value:f},{type:b,tag:af,props:{},children:[{type:a,value:f},{type:b,tag:ag,props:{},children:[{type:a,value:ah}]},{type:a,value:f},{type:b,tag:I,props:{markdown:J},children:[{type:a,value:f},{type:b,tag:I,props:{className:[X]},children:[{type:b,tag:Y,props:{className:[Z,_]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:R}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:aZ},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:R}]},{type:a,value:a_},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:" Counter\n\n\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ak}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,al]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ao}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ap]},children:[{type:a,value:"solution2"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:at}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:a$}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:t}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:ba},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:$}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:F}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:bb}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:ay},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:az},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aa}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:F}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"# Counter 모듈 사용"}]},{type:a,value:bc},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:t}]},{type:a,value:" Counter"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"words"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"# 가장 흔하게 등장하는 단어의 첫 번째 인덱스를 리턴"}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aB}]},{type:a,value:" counts"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"most_common"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f}]}]}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:Q,props:{id:aM},children:[{type:b,tag:o,props:{href:"#%EB%B0%B0%EC%9A%B4-%EC%A0%90",ariaHidden:v,tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:aN}]},{type:a,value:f},{type:b,tag:U,props:{id:aO},children:[{type:b,tag:o,props:{href:"#%EC%A0%95%EA%B7%9C%EC%8B%9D-%EA%B4%80%EB%A0%A8",ariaHidden:v,tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:aP}]},{type:a,value:f},{type:b,tag:H,props:{},children:[{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:"정규식에서 "},{type:b,tag:i,props:{},children:[{type:a,value:"\\w"}]},{type:a,value:"는 단어 문자(Word Character)를 뜻하며, "},{type:b,tag:i,props:{},children:[{type:a,value:"^"}]},{type:a,value:"은 "},{type:b,tag:i,props:{},children:[{type:a,value:S}]},{type:a,value:"을 의미한다. 그리고 "},{type:b,tag:i,props:{},children:[{type:a,value:"re"}]},{type:a,value:" 모듈의 "},{type:b,tag:i,props:{},children:[{type:a,value:"sub(pattern, repl, string)"}]},{type:a,value:" 함수는 대상 문자열 "},{type:b,tag:i,props:{},children:[{type:a,value:B}]},{type:a,value:"에 대해 정규식 "},{type:b,tag:i,props:{},children:[{type:a,value:"pattern"}]},{type:a,value:"에 해당되는 문자들을 "},{type:b,tag:i,props:{},children:[{type:a,value:"repl"}]},{type:a,value:"로 치환하는 역할을 한다.\n"},{type:b,tag:H,props:{},children:[{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:"따라서 문제 풀이에 사용된 정규식은 단어 문자를 제외한 모든 문자(특수 문자)를 공백으로 치환하는 역할을 수행한다."}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:U,props:{id:aQ},children:[{type:b,tag:o,props:{href:"#%ED%8A%B9%EC%88%98%EB%AC%B8%EC%9E%90%EB%A5%BC-%EA%B3%B5%EB%B0%B1%EC%9C%BC%EB%A1%9C-%EC%B9%98%ED%99%98%ED%95%9C-%EC%9D%B4%EC%9C%A0",ariaHidden:v,tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:aR}]},{type:a,value:f},{type:b,tag:H,props:{},children:[{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:"여기서 특수문자를 "},{type:b,tag:be,props:{},children:[{type:a,value:"제거"}]},{type:a,value:"하지 않고 "},{type:b,tag:be,props:{},children:[{type:a,value:"공백으로 치환"}]},{type:a,value:"하는 이유는 아래와 같다."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:I,props:{className:[X]},children:[{type:b,tag:Y,props:{className:[Z,_]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"  paragraph "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:t}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"'a, a, a, a, b,b,b,c, c'"}]},{type:a,value:"\n  banned "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:t}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"'a'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:H,props:{},children:[{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:"만약 특수문자를 제거한다면 출력값은 "},{type:b,tag:i,props:{},children:[{type:a,value:"b"}]},{type:a,value:"가 나와야 하지만, "},{type:b,tag:i,props:{},children:[{type:a,value:"bbbc"}]},{type:a,value:"가 출력된다. 특수문자가 제거된 상태에서 "},{type:b,tag:i,props:{},children:[{type:a,value:"split()"}]},{type:a,value:"을 하면 문자가 붙어버리기 때문이다. 따라서 이를 방지하기 위해 특수문자를 공백으로 치환해야 한다."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:U,props:{id:V},children:[{type:b,tag:o,props:{href:"#%EA%B8%B0%ED%83%80",ariaHidden:v,tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:V}]},{type:a,value:f},{type:b,tag:H,props:{},children:[{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:"리스트 컴프리헨션(List Comprehension)을 사용하여 단어 문자 추출과 단어의 "},{type:b,tag:i,props:{},children:[{type:a,value:"banned"}]},{type:a,value:" 포함 여부를 동시에 다룰 수 있다."}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"collections.defaultdict()"}]},{type:a,value:"를 사용하면 딕셔너리의 키 존재 유무를 확인할 필요 없이 "},{type:b,tag:i,props:{},children:[{type:a,value:aY}]},{type:a,value:"의 인수로 들어가는 자료형으로 기본값을 넣을 수 있다. 가령 "},{type:b,tag:i,props:{},children:[{type:a,value:"defaultdict(int)"}]},{type:a,value:"라면 새로 생성되는 키의 기본값은 "},{type:b,tag:i,props:{},children:[{type:a,value:T}]},{type:a,value:"이 되는 셈이다."}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"collections.Counter()"}]},{type:a,value:"를 사용하면 내가 풀었던 방법처럼 굳이 딕셔너리에 저장하면서 개수를 구할 필요가 없다. "},{type:b,tag:i,props:{},children:[{type:a,value:"Counter()"}]},{type:a,value:"의 인수로 리스트 등을 넣어주면 각 항목의 개수를 알아서 구해주기 때문이다. 여기서 가장 높은 빈도로 등장하는 항목을 구하려면 "},{type:b,tag:i,props:{},children:[{type:a,value:"most_common(1)"}]},{type:a,value:" 메소드를 사용하면 된다.\n"},{type:b,tag:H,props:{},children:[{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:"이때 리스트에 들어 있는 튜플이 반환된다. (ex: "},{type:b,tag:i,props:{},children:[{type:a,value:"[('ball', 2)]"}]},{type:a,value:j}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:Q,props:{id:W},children:[{type:b,tag:o,props:{href:"#%EC%B6%9C%EC%B2%98",ariaHidden:v,tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:W}]},{type:a,value:f},{type:b,tag:H,props:{},children:[{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:"박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p151-152.\n"},{type:b,tag:H,props:{},children:[{type:a,value:f},{type:b,tag:u,props:{},children:[{type:b,tag:o,props:{href:"https:\u002F\u002Fwww.onlybook.co.kr\u002Fentry\u002Falgorithm-interview",rel:[ab,ac,ad],target:ae},children:[{type:a,value:"도서 정보"}]}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:b,tag:o,props:{href:"https:\u002F\u002Fgithub.com\u002Fonlybooks\u002Falgorithm-interview",rel:[ab,ac,ad],target:ae},children:[{type:a,value:"GitHub"}]}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f}]}]},text:"\n## 문제 링크\n\nhttps:\u002F\u002Fleetcode.com\u002Fproblems\u002Fmost-common-word\u002F\n\n## 나의 풀이\n\n\u003Cdetails\u003E\n\u003Csummary\u003E소스 코드\u003C\u002Fsummary\u003E\n\u003Cdiv markdown=\"1\"\u003E\n\n```python\nfrom typing import List\nimport re\n\n\nclass Solution:\n    def my_solution(self, paragraph: str, banned: List[str]) -\u003E str:\n        # 소문자화된 paragraph를 정규식을 사용하여 특수문자를 공백으로 치환, 단어 분리\n        words = re.sub('[!?\\',;.]', ' ', paragraph.lower()).split()\n\n        # 각 단어의 개수를 저장하는 딕셔너리\n        counter = {}\n        for word in words:\n            if word not in banned:\n                if word not in counter:\n                    counter[word] = 0\n                counter[word] += 1\n\n        # 딕셔너리에 저장된 항목 중 value가 가장 큰 항목의 key를 리턴\n        return max(counter.items(), key=lambda x: x[1])[0]\n```\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdetails\u003E\n\n## 문제 풀이\n\n### 1. 리스트 컴프리헨션과 `defaultdict()` 사용\n\n\u003Cdetails\u003E\n\u003Csummary\u003E소스 코드\u003C\u002Fsummary\u003E\n\u003Cdiv markdown=\"1\"\u003E\n\n```python\nfrom typing import List\nimport re\nfrom collections import defaultdict\n\n\nclass Solution:\n    def solution1(self, paragraph: str, banned: List[str]) -\u003E str:\n        # 입력값에 대한 전처리 작업 수행 (데이터 클렌징)\n        words = [word for word in re.sub(r'[^\\w]', ' ', paragraph).lower().split() if word not in banned]\n\n        # collections.defaultdict()로 int 기본값이 자동으로 부여되게 설정\n        counts = defaultdict(int)\n        for word in words:\n            counts[word] += 1\n\n        # counts에서 값이 가장 큰 키를 리턴\n        return max(counts, key=counts.get)\n```\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdetails\u003E\n\n### 2. 리스트 컴프리헨션과 `Counter` 객체 사용\n\n\u003Cdetails\u003E\n\u003Csummary\u003E소스 코드\u003C\u002Fsummary\u003E\n\u003Cdiv markdown=\"1\"\u003E\n\n```python\nfrom typing import List\nimport re\nfrom collections import Counter\n\n\nclass Solution:\n    def solution2(self, paragraph: str, banned: List[str]) -\u003E str:\n        # 입력값에 대한 전처리 작업 수행 (데이터 클렌징)\n        words = [word for word in re.sub(r'[^\\w]', ' ', paragraph).lower().split() if word not in banned]\n\n        # Counter 모듈 사용\n        counts = Counter(words)\n\n        # 가장 흔하게 등장하는 단어의 첫 번째 인덱스를 리턴\n        return counts.most_common(1)[0][0]\n```\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdetails\u003E\n\n## 배운 점\n\n### 정규식 관련\n\n- 정규식에서 `\\w`는 단어 문자(Word Character)를 뜻하며, `^`은 `not`을 의미한다. 그리고 `re` 모듈의 `sub(pattern, repl, string)` 함수는 대상 문자열 `string`에 대해 정규식 `pattern`에 해당되는 문자들을 `repl`로 치환하는 역할을 한다.\n  - 따라서 문제 풀이에 사용된 정규식은 단어 문자를 제외한 모든 문자(특수 문자)를 공백으로 치환하는 역할을 수행한다.\n\n### 특수문자를 공백으로 치환한 이유\n\n- 여기서 특수문자를 **제거**하지 않고 **공백으로 치환**하는 이유는 아래와 같다.\n\n```python\n  paragraph = 'a, a, a, a, b,b,b,c, c'\n  banned = ['a']\n```\n  - 만약 특수문자를 제거한다면 출력값은 `b`가 나와야 하지만, `bbbc`가 출력된다. 특수문자가 제거된 상태에서 `split()`을 하면 문자가 붙어버리기 때문이다. 따라서 이를 방지하기 위해 특수문자를 공백으로 치환해야 한다.\n\n### 기타\n\n- 리스트 컴프리헨션(List Comprehension)을 사용하여 단어 문자 추출과 단어의 `banned` 포함 여부를 동시에 다룰 수 있다.\n- `collections.defaultdict()`를 사용하면 딕셔너리의 키 존재 유무를 확인할 필요 없이 `defaultdict()`의 인수로 들어가는 자료형으로 기본값을 넣을 수 있다. 가령 `defaultdict(int)`라면 새로 생성되는 키의 기본값은 `0`이 되는 셈이다.\n- `collections.Counter()`를 사용하면 내가 풀었던 방법처럼 굳이 딕셔너리에 저장하면서 개수를 구할 필요가 없다. `Counter()`의 인수로 리스트 등을 넣어주면 각 항목의 개수를 알아서 구해주기 때문이다. 여기서 가장 높은 빈도로 등장하는 항목을 구하려면 `most_common(1)` 메소드를 사용하면 된다.\n  - 이때 리스트에 들어 있는 튜플이 반환된다. (ex: `[('ball', 2)]`)\n\n## 출처\n\n- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p151-152.\n  - [도서 정보](https:\u002F\u002Fwww.onlybook.co.kr\u002Fentry\u002Falgorithm-interview)\n  - [GitHub](https:\u002F\u002Fgithub.com\u002Fonlybooks\u002Falgorithm-interview)\n",dir:"\u002Fposts\u002F2021\u002F04\u002F24",path:"\u002Fposts\u002F2021\u002F04\u002F24\u002Fleetcode-819",extension:".md",createdAt:"2021-04-24T09:20:54.000Z",updatedAt:"2022-06-26T10:01:49.000Z"},isErrorPage:K,isDarkMode:K,isScrolled:K,isMobile:K,isTablet:K,hasHeaderImage:aC,isMobileMenuOpened:K,headerImage:"",perPage:10},serverRendered:aC,routePath:"\u002Fposts\u002Fleetcode-819",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:aD},content:{dbHash:"1f4e3c70"}},colorMode:{preference:bf,value:bf,unknown:aC,forced:K}}}("text","element","span","token","punctuation","\n","keyword"," ","code",")","operator","(",":",",","a","[","]","builtin",".","=","li","true",-1,"icon","icon-link","str","comment","string","import","\n        "," word ","in","number","ul","div","1",false," paragraph"," banned","\n\n        ",2,3,"h2","from","not","0","h3","기타","출처","nuxt-content-highlight","pre","language-python","line-numbers","for","if","nofollow","noopener","noreferrer","_blank","details","summary","소스 코드"," typing "," List\n","class","class-name","Solution","\n    ","def","function","self"," List","-","\u003E","\n        words "," re","sub","' '","lower","split","word","return",true,null,"문제-링크","문제 링크","나의-풀이","나의 풀이","문제-풀이","문제 풀이","1-리스트-컴프리헨션과-defaultdict-사용","2-리스트-컴프리헨션과-counter-객체-사용","배운-점","배운 점","정규식-관련","정규식 관련","특수문자를-공백으로-치환한-이유","특수문자를 공백으로 치환한 이유","https:\u002F\u002Fleetcode.com\u002Fproblems\u002Fmost-common-word\u002F"," words","+=","max"," key"," x","defaultdict()"," re\n"," collections ","# 입력값에 대한 전처리 작업 수행 (데이터 클렌징)","word ","r'[^\\w]'","\n        counts ","counts","strong","system"));