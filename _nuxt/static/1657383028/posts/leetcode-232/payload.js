__NUXT_JSONP__("/posts/leetcode-232", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO){ah.slug="leetcode-232";ah.description="Implement Queue using Stacks";ah.title="LeetCode 232번 문제";ah.tags="algorithm, leetcode, python, queue, stack";ah.toc=[{id:ai,depth:R,text:aj},{id:ak,depth:R,text:al},{id:am,depth:R,text:an},{id:ao,depth:3,text:ap},{id:S,depth:R,text:S}];ah.body={type:"root",children:[{type:b,tag:T,props:{id:ai},children:[{type:b,tag:A,props:{href:"#%EB%AC%B8%EC%A0%9C-%EB%A7%81%ED%81%AC",ariaHidden:N,tabIndex:O},children:[{type:b,tag:c,props:{className:[P,Q]},children:[]}]},{type:a,value:aj}]},{type:a,value:h},{type:b,tag:"p",props:{},children:[{type:b,tag:A,props:{href:aq,rel:[ab,ac,ad],target:ae},children:[{type:a,value:aq}]}]},{type:a,value:h},{type:b,tag:T,props:{id:ak},children:[{type:b,tag:A,props:{href:"#%EB%82%98%EC%9D%98-%ED%92%80%EC%9D%B4",ariaHidden:N,tabIndex:O},children:[{type:b,tag:c,props:{className:[P,Q]},children:[]}]},{type:a,value:al}]},{type:a,value:h},{type:b,tag:U,props:{},children:[{type:a,value:h},{type:b,tag:F,props:{},children:[{type:a,value:"전반적으로 225번 문제와 유사하다. 차이점이 있다면 Deque 대신 파이썬 리스트(스택)으로 큐를 구현하는 것이다."}]},{type:a,value:h}]},{type:a,value:h},{type:b,tag:ar,props:{},children:[{type:a,value:h},{type:b,tag:as,props:{},children:[{type:a,value:at}]},{type:a,value:h},{type:b,tag:V,props:{markdown:x},children:[{type:a,value:h},{type:b,tag:V,props:{className:[au]},children:[{type:b,tag:av,props:{className:[aw,ax]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ay}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,az]},children:[{type:a,value:"MyQueue"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"temp_stack "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:J}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:J}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:aC}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aF]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aH},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"+="}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:x}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:X}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:Z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:J}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:X}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:Z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"-="}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:x}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:M}]},{type:a,value:aJ},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:X}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:Z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:J}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"value"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:X}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:Z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:M}]},{type:a,value:aJ},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aL}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:M}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ag}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:aC}]},{type:a,value:h}]}]}]},{type:a,value:h}]},{type:a,value:h}]},{type:a,value:h},{type:b,tag:T,props:{id:am},children:[{type:b,tag:A,props:{href:"#%EB%AC%B8%EC%A0%9C-%ED%92%80%EC%9D%B4",ariaHidden:N,tabIndex:O},children:[{type:b,tag:c,props:{className:[P,Q]},children:[]}]},{type:a,value:an}]},{type:a,value:h},{type:b,tag:"h3",props:{id:ao},children:[{type:b,tag:A,props:{href:"#%EC%8A%A4%ED%83%9D-2%EA%B0%9C-%EC%82%AC%EC%9A%A9",ariaHidden:N,tabIndex:O},children:[{type:b,tag:c,props:{className:[P,Q]},children:[]}]},{type:a,value:ap}]},{type:a,value:h},{type:b,tag:U,props:{},children:[{type:a,value:h},{type:b,tag:F,props:{},children:[{type:b,tag:q,props:{},children:[{type:a,value:"push()"}]},{type:a,value:aM},{type:b,tag:q,props:{},children:[{type:a,value:I}]},{type:a,value:" 스택에만 저장한다."}]},{type:a,value:h},{type:b,tag:F,props:{},children:[{type:b,tag:q,props:{},children:[{type:a,value:aN}]},{type:a,value:aM},{type:b,tag:q,props:{},children:[{type:a,value:E}]},{type:a,value:" 스택의 마지막 원소, 즉 가장 위의 값만 사용하면 되므로 "},{type:b,tag:q,props:{},children:[{type:a,value:I}]},{type:a,value:" 스택에 어떤 원소가 push되든 "},{type:b,tag:q,props:{},children:[{type:a,value:E}]},{type:a,value:" 스택만 사용한다."}]},{type:a,value:h},{type:b,tag:F,props:{},children:[{type:b,tag:q,props:{},children:[{type:a,value:"pop()"}]},{type:a,value:"은 "},{type:b,tag:q,props:{},children:[{type:a,value:E}]},{type:a,value:" 스택이 비어있을 수도 있으므로 "},{type:b,tag:q,props:{},children:[{type:a,value:aN}]},{type:a,value:" 메소드 사용 후 "},{type:b,tag:q,props:{},children:[{type:a,value:E}]},{type:a,value:" 스택에서 pop한다."}]},{type:a,value:h}]},{type:a,value:h},{type:b,tag:ar,props:{},children:[{type:a,value:h},{type:b,tag:as,props:{},children:[{type:a,value:at}]},{type:a,value:h},{type:b,tag:V,props:{markdown:x},children:[{type:a,value:h},{type:b,tag:V,props:{className:[au]},children:[{type:b,tag:av,props:{className:[aw,ax]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ay}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,az]},children:[{type:a,value:"solution1"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:I}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:J}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:J}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aF]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aH},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:M}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,"comment"]},children:[{type:a,value:"# output이 없으면 output의 요소를 모두 input에 push"}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"if"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"not"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\n            "},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"while"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\n                self"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:M}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aL}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:M}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:I}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ag}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"and"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ag}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:h}]}]}]},{type:a,value:h}]},{type:a,value:h}]},{type:a,value:h},{type:b,tag:T,props:{id:S},children:[{type:b,tag:A,props:{href:"#%EC%B6%9C%EC%B2%98",ariaHidden:N,tabIndex:O},children:[{type:b,tag:c,props:{className:[P,Q]},children:[]}]},{type:a,value:S}]},{type:a,value:h},{type:b,tag:U,props:{},children:[{type:a,value:h},{type:b,tag:F,props:{},children:[{type:a,value:"박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p257-258.\n"},{type:b,tag:U,props:{},children:[{type:a,value:h},{type:b,tag:F,props:{},children:[{type:b,tag:A,props:{href:"https:\u002F\u002Fwww.onlybook.co.kr\u002Fentry\u002Falgorithm-interview",rel:[ab,ac,ad],target:ae},children:[{type:a,value:"도서 정보"}]}]},{type:a,value:h},{type:b,tag:F,props:{},children:[{type:b,tag:A,props:{href:"https:\u002F\u002Fgithub.com\u002Fonlybooks\u002Falgorithm-interview",rel:[ab,ac,ad],target:ae},children:[{type:a,value:"GitHub"}]}]},{type:a,value:h}]},{type:a,value:h}]},{type:a,value:h}]}]};ah.text="\n## 문제 링크\n\nhttps:\u002F\u002Fleetcode.com\u002Fproblems\u002Fimplement-queue-using-stacks\u002F\n\n## 나의 풀이\n\n- 전반적으로 225번 문제와 유사하다. 차이점이 있다면 Deque 대신 파이썬 리스트(스택)으로 큐를 구현하는 것이다.\n\n\u003Cdetails\u003E\n\u003Csummary\u003E소스 코드\u003C\u002Fsummary\u003E\n\u003Cdiv markdown=\"1\"\u003E\n\n```python\nclass MyQueue:\n    def __init__(self):\n        self.main_stack, self.temp_stack = [], []\n        self.length = 0\n\n    def push(self, x: int) -\u003E None:\n        self.main_stack.append(x)\n        self.length += 1\n\n    def pop(self) -\u003E int:\n        for _ in range(self.length - 1):\n            self.temp_stack.append(self.main_stack.pop())\n        value = self.main_stack.pop()\n        for _ in range(self.length - 1):\n            self.main_stack.append(self.temp_stack.pop())\n        self.length -= 1\n        return value\n\n    def peek(self) -\u003E int:\n        for _ in range(self.length - 1):\n            self.temp_stack.append(self.main_stack.pop())\n        value = self.main_stack.pop()\n        self.main_stack.append(value)\n        for _ in range(self.length - 1):\n            self.main_stack.append(self.temp_stack.pop())\n        return value\n\n    def empty(self) -\u003E bool:\n        return self.length == 0\n```\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdetails\u003E\n\n## 문제 풀이\n\n### 스택 2개 사용\n\n- `push()`는 `input` 스택에만 저장한다.\n- `peek()`는 `output` 스택의 마지막 원소, 즉 가장 위의 값만 사용하면 되므로 `input` 스택에 어떤 원소가 push되든 `output` 스택만 사용한다.\n- `pop()`은 `output` 스택이 비어있을 수도 있으므로 `peek()` 메소드 사용 후 `output` 스택에서 pop한다.\n\n\u003Cdetails\u003E\n\u003Csummary\u003E소스 코드\u003C\u002Fsummary\u003E\n\u003Cdiv markdown=\"1\"\u003E\n\n```python\nclass solution1:\n    def __init__(self):\n        self.input = []\n        self.output = []\n\n    def push(self, x: int) -\u003E None:\n        self.input.append(x)\n\n    def pop(self) -\u003E int:\n        self.peek()\n        return self.output.pop()\n\n    def peek(self) -\u003E int:\n        # output이 없으면 output의 요소를 모두 input에 push\n        if not self.output:\n            while self.input:\n                self.output.append(self.input.pop())\n        return self.output[-1]\n\n    def empty(self) -\u003E bool:\n        return self.input == [] and self.output == []\n```\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdetails\u003E\n\n## 출처\n\n- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p257-258.\n  - [도서 정보](https:\u002F\u002Fwww.onlybook.co.kr\u002Fentry\u002Falgorithm-interview)\n  - [GitHub](https:\u002F\u002Fgithub.com\u002Fonlybooks\u002Falgorithm-interview)\n";ah.dir="\u002Fposts\u002F2021\u002F05\u002F13";ah.path="\u002Fposts\u002F2021\u002F05\u002F13\u002Fleetcode-232";ah.extension=".md";ah.createdAt="2021-05-13T14:48:38.000Z";ah.updatedAt="2022-06-26T10:01:49.000Z";return {data:[{post:ah,prev:{slug:"leetcode-225",title:"LeetCode 225번 문제",createdAt:"2021-05-13T14:43:03.000Z"},next:{slug:"leetcode-622",title:"LeetCode 622번 문제",createdAt:"2021-05-15T04:51:08.000Z"}}],fetch:{},mutations:[["SET_POST",ah],["SET_HEADER_IMAGE_STATE",true],["SET_SCROLL_STATE",false]]}}("text","element","span","token","punctuation"," ",".","\n","operator","(",")","keyword",":","self","builtin","-","code","\n        ","def","function","\n        self"," self","pop","1","main_stack","number","a","length ","\u003E","append","output","li","[","]","input","=","\n\n    ","int","return","true",-1,"icon","icon-link",2,"출처","h2","ul","div",",","for"," _ ","in","range","\n            self","temp_stack","nofollow","noopener","noreferrer","_blank","peek","==",{},"문제-링크","문제 링크","나의-풀이","나의 풀이","문제-풀이","문제 풀이","스택-2개-사용","스택 2개 사용","https:\u002F\u002Fleetcode.com\u002Fproblems\u002Fimplement-queue-using-stacks\u002F","details","summary","소스 코드","nuxt-content-highlight","pre","language-python","line-numbers","class","class-name","\n    ","__init__","0","push"," x","boolean","None","x","\n        value "," value\n\n    ","empty","bool","는 ","peek()","output ")));