__NUXT_JSONP__("/posts/leetcode-316", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ){ar.slug="leetcode-316";ar.description="Remove Duplicate Letters";ar.title="LeetCode 316번 문제";ar.tags="algorithm, leetcode, python, stack";ar.toc=[{id:as,depth:P,text:at},{id:au,depth:P,text:av},{id:aw,depth:P,text:ax},{id:ay,depth:az,text:aA},{id:aB,depth:az,text:aC},{id:Q,depth:P,text:Q}];ar.body={type:"root",children:[{type:b,tag:R,props:{id:as},children:[{type:b,tag:r,props:{href:"#%EB%AC%B8%EC%A0%9C-%EB%A7%81%ED%81%AC",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:at}]},{type:a,value:f},{type:b,tag:"p",props:{},children:[{type:b,tag:r,props:{href:aD,rel:[Y,Z,_],target:$},children:[{type:a,value:aD}]}]},{type:a,value:f},{type:b,tag:R,props:{id:au},children:[{type:b,tag:r,props:{href:"#%EB%82%98%EC%9D%98-%ED%92%80%EC%9D%B4-%ED%92%80%EC%9D%B4-%EC%8B%A4%ED%8C%A8",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:av}]},{type:a,value:f},{type:b,tag:I,props:{},children:[{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"스택의 마지막 원소보다 사전적 순서가 앞이면서 현재 글자가 스택에 존재하지 않으면 스택에서 pop하고, 현재 글자가 이미 스택에 존재하지 않으면 스택에 push하는 방법으로 해결하려 했지만 두 번째 테스트 케이스 "},{type:b,tag:o,props:{},children:[{type:a,value:"cbacdcbc"}]},{type:a,value:"에서 오답 처리가 되었다."}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"후술하겠지만 풀이 2번의 "},{type:b,tag:o,props:{},children:[{type:a,value:aE}]},{type:a,value:"를 사용하면 문제를 풀 수 있다. 아래는 마지막으로 제출한 오답 처리된 답안이다."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:aa,props:{},children:[{type:a,value:f},{type:b,tag:ab,props:{},children:[{type:a,value:ac}]},{type:a,value:f},{type:b,tag:D,props:{markdown:x},children:[{type:a,value:f},{type:b,tag:D,props:{className:[ad]},children:[{type:b,tag:ae,props:{className:[af,ag]},children:[{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ah}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:al}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,am]},children:[{type:a,value:"my_solution"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:J}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\n        stack "},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ao}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ap}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"# 1. 스택의 마지막 원소보다 사전적 순서가 앞인가?"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aF}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,N]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:J}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aq}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aG}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\n                    stack"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:aH},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"else"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\n                    "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"break"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"# 2. 해당 글자가 스택에 이미 존재하는가?"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aG}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\n                stack"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:T}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:aJ},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f}]}]}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:R,props:{id:aw},children:[{type:b,tag:r,props:{href:"#%EB%AC%B8%EC%A0%9C-%ED%92%80%EC%9D%B4",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:ax}]},{type:a,value:f},{type:b,tag:aK,props:{id:ay},children:[{type:b,tag:r,props:{href:"#1-%EC%9E%AC%EA%B7%80%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%B6%84%EB%A6%AC",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:aA}]},{type:a,value:f},{type:b,tag:I,props:{},children:[{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"일종의 분할 정복과 백트래킹을 응용하여 해결할 수 있다."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:aa,props:{},children:[{type:a,value:f},{type:b,tag:ab,props:{},children:[{type:a,value:ac}]},{type:a,value:f},{type:b,tag:D,props:{markdown:x},children:[{type:a,value:f},{type:b,tag:D,props:{className:[ad]},children:[{type:b,tag:ae,props:{className:[af,ag]},children:[{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ah}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:al}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,am]},children:[{type:a,value:aL}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:J}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"# 집합으로 정렬 (집합도 sorted()로 정렬할 수 있음)"}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ap}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"sorted"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"# 해당 문자를 포함한 이후의 모든 문자를 접미사로 지정"}]},{type:a,value:"\n            suffix "},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ao}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"index"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"# 전체 집합과 접미사 집합이 일치할 때 분리 진행"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"=="}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"# 기준점 문자는 이미 사용되었으므로 replace()로 제거 후 재귀 수행"}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:T}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"+"}]},{type:a,value:" self"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"replace"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:T}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:V}]},{type:a,value:f}]}]}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:aK,props:{id:aB},children:[{type:b,tag:r,props:{href:"#2-%EC%8A%A4%ED%83%9D%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%AC%B8%EC%9E%90-%EC%A0%9C%EA%B1%B0",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:aC}]},{type:a,value:f},{type:b,tag:I,props:{},children:[{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"스택과 "},{type:b,tag:o,props:{},children:[{type:a,value:aE}]},{type:a,value:"를 사용하여 풀 수 있다."}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"예시에서는 "},{type:b,tag:o,props:{},children:[{type:a,value:"counter"}]},{type:a,value:"와 "},{type:b,tag:o,props:{},children:[{type:a,value:O}]},{type:a,value:" 이외에 별도의 "},{type:b,tag:o,props:{},children:[{type:a,value:aN}]},{type:a,value:" 변수를 만들어 사용했는데, 파이썬 리스트의 "},{type:b,tag:o,props:{},children:[{type:a,value:y}]},{type:a,value:" 연산은 스택에는 존재하지 않기 때문이다. 즉, 변칙적인 풀이법이기 때문에 이미 처리된 문자 여부를 확인하기 위한 집합 "},{type:b,tag:o,props:{},children:[{type:a,value:aN}]},{type:a,value:" 변수를 사용하였다."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:aa,props:{},children:[{type:a,value:f},{type:b,tag:ab,props:{},children:[{type:a,value:ac}]},{type:a,value:f},{type:b,tag:D,props:{markdown:x},children:[{type:a,value:f},{type:b,tag:D,props:{className:[ad]},children:[{type:b,tag:ae,props:{className:[af,ag]},children:[{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"from"}]},{type:a,value:" collections "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"import"}]},{type:a,value:" Counter\n\n\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ah}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:al}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,am]},children:[{type:a,value:"solution2"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:J}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\n        counter"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:aP},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ao}]},{type:a,value:" Counter"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:aQ},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ap}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\n            counter"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"-="}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,N]},children:[{type:a,value:x}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"# 파이썬 리스트 자료형은 in 키워드를 사용할 수 있기 때문에"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"# seen 변수를 없애고 stack만 사용해도 되지만,"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"# 스택에 없는 검색 연산을 수행한 변칙적인 풀이법이기 때문에"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"# 별도의 seen 변수를 생성하여 in 연산을 수행"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"continue"}]},{type:a,value:"\n\n            "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"# 스택이 비어 있지 않고 현재 문자가 스택의 마지막 원소보다"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"# 사전적 순서가 뒤에 있으며, 뒤에 붙일 문자가 남아 있다면 스택에서 제거"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"# 현재 문자가 뒤에 한 번 더 나오는 건 카운터의 개수를 통해 알 수 있음"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"# (이미 위에서 해당 글자의 카운터를 하나 감소시켰으므로)"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aF}]},{type:a,value:aP},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aq}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\u003C"}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,N]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aq}]},{type:a,value:" counter"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,N]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:J}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,N]},children:[{type:a,value:"0"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\n                seen"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"remove"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:aH},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"\n            stack"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"\n            seen"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"add"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aQ},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:T}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:aJ},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f}]}]}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:R,props:{id:Q},children:[{type:b,tag:r,props:{href:"#%EC%B6%9C%EC%B2%98",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:Q}]},{type:a,value:f},{type:b,tag:I,props:{},children:[{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p247-251.\n"},{type:b,tag:I,props:{},children:[{type:a,value:f},{type:b,tag:t,props:{},children:[{type:b,tag:r,props:{href:"https:\u002F\u002Fwww.onlybook.co.kr\u002Fentry\u002Falgorithm-interview",rel:[Y,Z,_],target:$},children:[{type:a,value:"도서 정보"}]}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:b,tag:r,props:{href:"https:\u002F\u002Fgithub.com\u002Fonlybooks\u002Falgorithm-interview",rel:[Y,Z,_],target:$},children:[{type:a,value:"GitHub"}]}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f}]}]};ar.text="\n## 문제 링크\n\nhttps:\u002F\u002Fleetcode.com\u002Fproblems\u002Fremove-duplicate-letters\u002F\n\n## 나의 풀이 (풀이 실패)\n\n- 스택의 마지막 원소보다 사전적 순서가 앞이면서 현재 글자가 스택에 존재하지 않으면 스택에서 pop하고, 현재 글자가 이미 스택에 존재하지 않으면 스택에 push하는 방법으로 해결하려 했지만 두 번째 테스트 케이스 `cbacdcbc`에서 오답 처리가 되었다.\n- 후술하겠지만 풀이 2번의 `collections.Counter()`를 사용하면 문제를 풀 수 있다. 아래는 마지막으로 제출한 오답 처리된 답안이다.\n\n\u003Cdetails\u003E\n\u003Csummary\u003E소스 코드\u003C\u002Fsummary\u003E\n\u003Cdiv markdown=\"1\"\u003E\n\n```python\nclass Solution:\n    def my_solution(self, s: str) -\u003E str:\n        stack = []\n        for char in s:\n            # 1. 스택의 마지막 원소보다 사전적 순서가 앞인가?\n            while stack:\n                if stack[-1] \u003E char and char not in stack:\n                    stack.pop()\n                else:\n                    break\n            # 2. 해당 글자가 스택에 이미 존재하는가?\n            if char not in stack:\n                stack.append(char)\n        return ''.join(stack)\n```\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdetails\u003E\n\n## 문제 풀이\n\n### 1. 재귀를 이용한 분리\n\n- 일종의 분할 정복과 백트래킹을 응용하여 해결할 수 있다.\n\n\u003Cdetails\u003E\n\u003Csummary\u003E소스 코드\u003C\u002Fsummary\u003E\n\u003Cdiv markdown=\"1\"\u003E\n\n```python\nclass Solution:\n    def solution1(self, s: str) -\u003E str:\n        # 집합으로 정렬 (집합도 sorted()로 정렬할 수 있음)\n        for char in sorted(set(s)):\n            # 해당 문자를 포함한 이후의 모든 문자를 접미사로 지정\n            suffix = s[s.index(char):]\n            # 전체 집합과 접미사 집합이 일치할 때 분리 진행\n            if set(s) == set(suffix):\n                # 기준점 문자는 이미 사용되었으므로 replace()로 제거 후 재귀 수행\n                return char + self.solution1(suffix.replace(char, ''))\n        return ''\n```\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdetails\u003E\n\n### 2. 스택을 이용한 문자 제거\n\n- 스택과 `collections.Counter()`를 사용하여 풀 수 있다.\n- 예시에서는 `counter`와 `stack` 이외에 별도의 `seen` 변수를 만들어 사용했는데, 파이썬 리스트의 `in` 연산은 스택에는 존재하지 않기 때문이다. 즉, 변칙적인 풀이법이기 때문에 이미 처리된 문자 여부를 확인하기 위한 집합 `seen` 변수를 사용하였다.\n\n\u003Cdetails\u003E\n\u003Csummary\u003E소스 코드\u003C\u002Fsummary\u003E\n\u003Cdiv markdown=\"1\"\u003E\n\n```python\nfrom collections import Counter\n\n\nclass Solution:\n    def solution2(self, s: str) -\u003E str:\n        counter, seen, stack = Counter(s), set(), []\n\n        for char in s:\n            counter[char] -= 1\n            # 파이썬 리스트 자료형은 in 키워드를 사용할 수 있기 때문에\n            # seen 변수를 없애고 stack만 사용해도 되지만,\n            # 스택에 없는 검색 연산을 수행한 변칙적인 풀이법이기 때문에\n            # 별도의 seen 변수를 생성하여 in 연산을 수행\n            if char in seen:\n                continue\n\n            # 스택이 비어 있지 않고 현재 문자가 스택의 마지막 원소보다\n            # 사전적 순서가 뒤에 있으며, 뒤에 붙일 문자가 남아 있다면 스택에서 제거\n            # 현재 문자가 뒤에 한 번 더 나오는 건 카운터의 개수를 통해 알 수 있음\n            # (이미 위에서 해당 글자의 카운터를 하나 감소시켰으므로)\n            while stack and char \u003C stack[-1] and counter[stack[-1]] \u003E 0:\n                seen.remove(stack.pop())\n            stack.append(char)\n            seen.add(char)\n\n        return ''.join(stack)\n```\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdetails\u003E\n\n## 출처\n\n- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p247-251.\n  - [도서 정보](https:\u002F\u002Fwww.onlybook.co.kr\u002Fentry\u002Falgorithm-interview)\n  - [GitHub](https:\u002F\u002Fgithub.com\u002Fonlybooks\u002Falgorithm-interview)\n";ar.dir="\u002Fposts\u002F2021\u002F05\u002F10";ar.path="\u002Fposts\u002F2021\u002F05\u002F10\u002Fleetcode-316";ar.extension=".md";ar.createdAt="2021-05-10T13:37:05.000Z";ar.updatedAt="2022-06-26T10:01:49.000Z";return {data:[{post:ar,prev:{slug:"leetcode-20",title:"LeetCode 20번 문제",createdAt:"2021-05-07T14:14:31.000Z"},next:{slug:"leetcode-739",title:"LeetCode 739번 문제",createdAt:"2021-05-12T13:28:23.000Z"}}],fetch:{},mutations:[["SET_POST",ar],["SET_HEADER_IMAGE_STATE",true],["SET_SCROLL_STATE",false]]}}("text","element","span","token","punctuation","\n","keyword"," ",":","(",")","operator","\n            ","comment","code","builtin",".","a"," char ","li",",","[","]","1","in","true",-1,"icon","icon-link","div"," s","str","-","char","ul","\u003E","\n        "," stack","\n                ","number","stack",2,"출처","h2","if","return","string","''","set","s","nofollow","noopener","noreferrer","_blank","details","summary","소스 코드","nuxt-content-highlight","pre","language-python","line-numbers","class","class-name","Solution","\n    ","def","function","self","=","for","and",{},"문제-링크","문제 링크","나의-풀이-풀이-실패","나의 풀이 (풀이 실패)","문제-풀이","문제 풀이","1-재귀를-이용한-분리",3,"1. 재귀를 이용한 분리","2-스택을-이용한-문자-제거","2. 스택을 이용한 문자 제거","https:\u002F\u002Fleetcode.com\u002Fproblems\u002Fremove-duplicate-letters\u002F","collections.Counter()","while","not","pop","append","join","h3","solution1","suffix","seen"," seen"," stack ","\n\n        ")));