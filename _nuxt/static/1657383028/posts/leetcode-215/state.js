window.__NUXT__=(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1657383028",layout:"default",error:az,state:{post:{slug:"leetcode-215",description:"Kth Largest Element in an Array",title:"LeetCode 215번 문제",tags:"algorithm, leetcode, python, heap",toc:[{id:aA,depth:ak,text:aB},{id:aC,depth:ak,text:aD},{id:aE,depth:ak,text:aF},{id:aG,depth:al,text:"1. heapq 모듈 이용"},{id:aH,depth:al,text:"2. heapq 모듈의 heapify 이용"},{id:aI,depth:al,text:"3. heapq 모듈의 nlargest 이용"},{id:aJ,depth:al,text:aK},{id:am,depth:ak,text:am}],body:{type:"root",children:[{type:b,tag:an,props:{id:aA},children:[{type:b,tag:s,props:{href:"#%EB%AC%B8%EC%A0%9C-%EB%A7%81%ED%81%AC",ariaHidden:B,tabIndex:C},children:[{type:b,tag:c,props:{className:[D,E]},children:[]}]},{type:a,value:aB}]},{type:a,value:f},{type:b,tag:"p",props:{},children:[{type:b,tag:s,props:{href:aL,rel:[ar,as,at],target:au},children:[{type:a,value:aL}]}]},{type:a,value:f},{type:b,tag:an,props:{id:aC},children:[{type:b,tag:s,props:{href:"#%EB%82%98%EC%9D%98-%ED%92%80%EC%9D%B4",ariaHidden:B,tabIndex:C},children:[{type:b,tag:c,props:{className:[D,E]},children:[]}]},{type:a,value:aD}]},{type:a,value:f},{type:b,tag:F,props:{},children:[{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:H}]},{type:a,value:"는 최소 힙으로만 구현되어 있기 때문에, "},{type:b,tag:j,props:{},children:[{type:a,value:v}]},{type:a,value:" 리스트의 모든 요소의 부호를 뒤집어서 힙에 저장 후 해당하는 순서의 요소를 꺼내 다시 부호를 뒤집었다."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:M,props:{},children:[{type:a,value:f},{type:b,tag:N,props:{},children:[{type:a,value:O}]},{type:a,value:f},{type:b,tag:w,props:{markdown:z},children:[{type:a,value:f},{type:b,tag:w,props:{className:[P]},children:[{type:b,tag:Q,props:{className:[R,S]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:A}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:T}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:A}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:W}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:aM}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ac}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aN},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:av}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ad}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ae}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:aP},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:aQ},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ad}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ae}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,ap]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ai}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f}]}]}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:an,props:{id:aE},children:[{type:b,tag:s,props:{href:"#%EB%AC%B8%EC%A0%9C-%ED%92%80%EC%9D%B4",ariaHidden:B,tabIndex:C},children:[{type:b,tag:c,props:{className:[D,E]},children:[]}]},{type:a,value:aF}]},{type:a,value:f},{type:b,tag:aq,props:{id:aG},children:[{type:b,tag:s,props:{href:"#1-heapq-%EB%AA%A8%EB%93%88-%EC%9D%B4%EC%9A%A9",ariaHidden:B,tabIndex:C},children:[{type:b,tag:c,props:{className:[D,E]},children:[]}]},{type:a,value:"1. "},{type:b,tag:j,props:{},children:[{type:a,value:H}]},{type:a,value:" 모듈 이용"}]},{type:a,value:f},{type:b,tag:F,props:{},children:[{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"리트코드 31번 문제와 유사하지만, 이번 문제에서는 "},{type:b,tag:j,props:{},children:[{type:a,value:"Counter"}]},{type:a,value:"를 사용하지 않는다."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:M,props:{},children:[{type:a,value:f},{type:b,tag:N,props:{},children:[{type:a,value:O}]},{type:a,value:f},{type:b,tag:w,props:{markdown:z},children:[{type:a,value:f},{type:b,tag:w,props:{className:[P]},children:[{type:b,tag:Q,props:{className:[R,S]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:A}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:T}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:A}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:W}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:aM}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ac}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aN},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:av}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ad}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ae}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:aP},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:aQ},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ad}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ae}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,ap]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ai}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f}]}]}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:aq,props:{id:aH},children:[{type:b,tag:s,props:{href:"#2-heapq-%EB%AA%A8%EB%93%88%EC%9D%98-heapify-%EC%9D%B4%EC%9A%A9",ariaHidden:B,tabIndex:C},children:[{type:b,tag:c,props:{className:[D,E]},children:[]}]},{type:a,value:"2. "},{type:b,tag:j,props:{},children:[{type:a,value:H}]},{type:a,value:aR},{type:b,tag:j,props:{},children:[{type:a,value:aS}]},{type:a,value:aT}]},{type:a,value:f},{type:b,tag:F,props:{},children:[{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:aj}]},{type:a,value:"를 사용하여 리스트의 값을 하나씩 꺼내서 힙에 푸시할 필요가 없다."}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"단, "},{type:b,tag:j,props:{},children:[{type:a,value:aj}]},{type:a,value:"를 사용한 상태에서 힙에 하나라도 값을 추가하면 힙 특성이 깨지기 때문에 다시 "},{type:b,tag:j,props:{},children:[{type:a,value:aj}]},{type:a,value:"를 호출해야 한다."}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"하지만 이 문제에서는 "},{type:b,tag:j,props:{},children:[{type:a,value:aj}]},{type:a,value:" 이후에 값이 추가되지 않으므로 한 번만 호출해도 문제는 없다."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:M,props:{},children:[{type:a,value:f},{type:b,tag:N,props:{},children:[{type:a,value:O}]},{type:a,value:f},{type:b,tag:w,props:{markdown:z},children:[{type:a,value:f},{type:b,tag:w,props:{className:[P]},children:[{type:b,tag:Q,props:{className:[R,S]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:A}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:T}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:A}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:W}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:"Solution2"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ac}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\n        heapq"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:aS},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aU},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ad}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ae}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aU},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ai}]},{type:a,value:aV},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f}]}]}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:aq,props:{id:aI},children:[{type:b,tag:s,props:{href:"#3-heapq-%EB%AA%A8%EB%93%88%EC%9D%98-nlargest-%EC%9D%B4%EC%9A%A9",ariaHidden:B,tabIndex:C},children:[{type:b,tag:c,props:{className:[D,E]},children:[]}]},{type:a,value:"3. "},{type:b,tag:j,props:{},children:[{type:a,value:H}]},{type:a,value:aR},{type:b,tag:j,props:{},children:[{type:a,value:aW}]},{type:a,value:aT}]},{type:a,value:f},{type:b,tag:F,props:{},children:[{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:aX}]},{type:a,value:"를 사용하면 "},{type:b,tag:j,props:{},children:[{type:a,value:"n"}]},{type:a,value:"번째로 큰 값을 추출할 수 있다."}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:ah}]},{type:a,value:"번째만큼 큰 값이 가장 큰 값부터 순서대로 리스트로 리턴되며, 마지막 인덱스가 "},{type:b,tag:j,props:{},children:[{type:a,value:ah}]},{type:a,value:"번째 값이 된다."}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"힙이 아니더라도 내부적으로 "},{type:b,tag:j,props:{},children:[{type:a,value:aj}]},{type:a,value:"를 호출해주기 때문에 별도의 힙 처리를 할 필요가 없다."}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:aX}]},{type:a,value:"의 반대로 "},{type:b,tag:j,props:{},children:[{type:a,value:"nsmallest()"}]},{type:a,value:"도 있다."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:M,props:{},children:[{type:a,value:f},{type:b,tag:N,props:{},children:[{type:a,value:O}]},{type:a,value:f},{type:b,tag:w,props:{markdown:z},children:[{type:a,value:f},{type:b,tag:w,props:{className:[P]},children:[{type:b,tag:Q,props:{className:[R,S]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:A}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:T}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:A}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:W}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:"Solution3"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ac}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ai}]},{type:a,value:aV},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:aW},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,ap]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:f}]}]}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:aq,props:{id:aJ},children:[{type:b,tag:s,props:{href:"#4-%EC%A0%95%EB%A0%AC%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%92%80%EC%9D%B4",ariaHidden:B,tabIndex:C},children:[{type:b,tag:c,props:{className:[D,E]},children:[]}]},{type:a,value:aK}]},{type:a,value:f},{type:b,tag:F,props:{},children:[{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"입력값이 고정되어 있기 때문에 힙을 사용할 필요 없이 그저 한 번 정렬하는 것만으로 해결할 수 있다."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:M,props:{},children:[{type:a,value:f},{type:b,tag:N,props:{},children:[{type:a,value:O}]},{type:a,value:f},{type:b,tag:w,props:{markdown:z},children:[{type:a,value:f},{type:b,tag:w,props:{className:[P]},children:[{type:b,tag:Q,props:{className:[R,S]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:T}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:A}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:W}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:"Solution4"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ac}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,aY]},children:[{type:a,value:"# nums.sort()"}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,aY]},children:[{type:a,value:"# return nums[-k]"}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ai}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"sorted"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:" reverse"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,"boolean"]},children:[{type:a,value:"True"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:"k "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ap]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:f}]}]}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:an,props:{id:am},children:[{type:b,tag:s,props:{href:"#%EC%B6%9C%EC%B2%98",ariaHidden:B,tabIndex:C},children:[{type:b,tag:c,props:{className:[D,E]},children:[]}]},{type:a,value:am}]},{type:a,value:f},{type:b,tag:F,props:{},children:[{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p456-458.\n"},{type:b,tag:F,props:{},children:[{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{href:"https:\u002F\u002Fwww.onlybook.co.kr\u002Fentry\u002Falgorithm-interview",rel:[ar,as,at],target:au},children:[{type:a,value:"도서 정보"}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:s,props:{href:"https:\u002F\u002Fgithub.com\u002Fonlybooks\u002Falgorithm-interview",rel:[ar,as,at],target:au},children:[{type:a,value:"GitHub"}]}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f}]}]},text:"\n## 문제 링크\n\nhttps:\u002F\u002Fleetcode.com\u002Fproblems\u002Fkth-largest-element-in-an-array\u002F\n\n## 나의 풀이\n\n- `heapq`는 최소 힙으로만 구현되어 있기 때문에, `nums` 리스트의 모든 요소의 부호를 뒤집어서 힙에 저장 후 해당하는 순서의 요소를 꺼내 다시 부호를 뒤집었다.\n\n\u003Cdetails\u003E\n\u003Csummary\u003E소스 코드\u003C\u002Fsummary\u003E\n\u003Cdiv markdown=\"1\"\u003E\n\n```python\nimport heapq\nfrom typing import List\n\n\nclass MySolution1:\n    def findKthLargest(self, nums: List[int], k: int) -\u003E int:\n        heap = []\n        for i in range(len(nums)):\n            heapq.heappush(heap, -nums[i])\n        for _ in range(k-1):\n            heapq.heappop(heap)\n        return -heapq.heappop(heap)\n```\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdetails\u003E\n\n## 문제 풀이\n\n### 1. `heapq` 모듈 이용\n\n- 리트코드 31번 문제와 유사하지만, 이번 문제에서는 `Counter`를 사용하지 않는다.\n\n\u003Cdetails\u003E\n\u003Csummary\u003E소스 코드\u003C\u002Fsummary\u003E\n\u003Cdiv markdown=\"1\"\u003E\n\n```python\nimport heapq\nfrom typing import List\n\n\nclass MySolution1:\n    def findKthLargest(self, nums: List[int], k: int) -\u003E int:\n        heap = []\n        for i in range(len(nums)):\n            heapq.heappush(heap, -nums[i])\n        for _ in range(k-1):\n            heapq.heappop(heap)\n        return -heapq.heappop(heap)\n```\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdetails\u003E\n\n### 2. `heapq` 모듈의 `heapify` 이용\n\n- `heapify()`를 사용하여 리스트의 값을 하나씩 꺼내서 힙에 푸시할 필요가 없다.\n- 단, `heapify()`를 사용한 상태에서 힙에 하나라도 값을 추가하면 힙 특성이 깨지기 때문에 다시 `heapify()`를 호출해야 한다.\n- 하지만 이 문제에서는 `heapify()` 이후에 값이 추가되지 않으므로 한 번만 호출해도 문제는 없다.\n\n\u003Cdetails\u003E\n\u003Csummary\u003E소스 코드\u003C\u002Fsummary\u003E\n\u003Cdiv markdown=\"1\"\u003E\n\n```python\nimport heapq\nfrom typing import List\n\n\nclass Solution2:\n    def findKthLargest(self, nums: List[int], k: int) -\u003E int:\n        heapq.heapify(nums)\n\n        for _ in range(len(nums) - k):\n            heapq.heappop(nums)\n\n        return heapq.heappop(nums)\n```\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdetails\u003E\n\n### 3. `heapq` 모듈의 `nlargest` 이용\n\n- `nlargest()`를 사용하면 `n`번째로 큰 값을 추출할 수 있다.\n- `k`번째만큼 큰 값이 가장 큰 값부터 순서대로 리스트로 리턴되며, 마지막 인덱스가 `k`번째 값이 된다.\n- 힙이 아니더라도 내부적으로 `heapify()`를 호출해주기 때문에 별도의 힙 처리를 할 필요가 없다.\n- `nlargest()`의 반대로 `nsmallest()`도 있다.\n\n\u003Cdetails\u003E\n\u003Csummary\u003E소스 코드\u003C\u002Fsummary\u003E\n\u003Cdiv markdown=\"1\"\u003E\n\n```python\nimport heapq\nfrom typing import List\n\n\nclass Solution3:\n    def findKthLargest(self, nums: List[int], k: int) -\u003E int:\n        return heapq.nlargest(k, nums)[-1]\n```\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdetails\u003E\n\n### 4. 정렬을 이용한 풀이\n\n- 입력값이 고정되어 있기 때문에 힙을 사용할 필요 없이 그저 한 번 정렬하는 것만으로 해결할 수 있다.\n\n\u003Cdetails\u003E\n\u003Csummary\u003E소스 코드\u003C\u002Fsummary\u003E\n\u003Cdiv markdown=\"1\"\u003E\n\n```python\nfrom typing import List\n\n\nclass Solution4:\n    def findKthLargest(self, nums: List[int], k: int) -\u003E int:\n        # nums.sort()\n        # return nums[-k]\n        return sorted(nums, reverse=True)[k - 1]\n```\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdetails\u003E\n\n## 출처\n\n- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p456-458.\n  - [도서 정보](https:\u002F\u002Fwww.onlybook.co.kr\u002Fentry\u002Falgorithm-interview)\n  - [GitHub](https:\u002F\u002Fgithub.com\u002Fonlybooks\u002Falgorithm-interview)\n",dir:"\u002Fposts\u002F2021\u002F08\u002F25",path:"\u002Fposts\u002F2021\u002F08\u002F25\u002Fleetcode-215",extension:".md",createdAt:"2021-08-25T14:56:36.000Z",updatedAt:"2022-06-26T10:01:49.000Z"},isErrorPage:G,isDarkMode:G,isScrolled:G,isMobile:G,isTablet:G,hasHeaderImage:ay,isMobileMenuOpened:G,headerImage:"",perPage:10},serverRendered:ay,routePath:"\u002Fposts\u002Fleetcode-215",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:az},content:{dbHash:"6f5af980"}},colorMode:{preference:aZ,value:aZ,unknown:ay,forced:G}}}("text","element","span","token","punctuation","\n","keyword"," ",":","code","(","builtin",")","operator","int",",","-","li","a","[","]","nums","div","\n        ",".","1","import","true",-1,"icon","icon-link","ul",false,"heapq"," nums"," k","heap","heappop","details","summary","소스 코드","nuxt-content-highlight","pre","language-python","line-numbers","from"," typing "," List\n\n\n","class","class-name","\n    ","def","function","findKthLargest","self"," List","\u003E","for","in","range","\n            heapq","k","return","heapify()",2,3,"출처","h2"," heapq\n","number","h3","nofollow","noopener","noreferrer","_blank","=","len"," _ ",true,null,"문제-링크","문제 링크","나의-풀이","나의 풀이","문제-풀이","문제 풀이","1-heapq-모듈-이용","2-heapq-모듈의-heapify-이용","3-heapq-모듈의-nlargest-이용","4-정렬을-이용한-풀이","4. 정렬을 이용한 풀이","https:\u002F\u002Fleetcode.com\u002Fproblems\u002Fkth-largest-element-in-an-array\u002F","MySolution1","\n        heap "," i ","heappush","i"," 모듈의 ","heapify"," 이용","\n\n        "," heapq","nlargest","nlargest()","comment","system"));