__NUXT_JSONP__("/posts/leetcode-225", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN){ah.slug="leetcode-225";ah.description="Implement Stack using Queues";ah.title="LeetCode 225번 문제";ah.tags="algorithm, leetcode, python, queue, stack";ah.toc=[{id:ai,depth:P,text:aj},{id:ak,depth:P,text:al},{id:am,depth:P,text:an},{id:ao,depth:3,text:"push() 할 떄 큐를 이용해 재정렬"},{id:Q,depth:P,text:Q}];ah.body={type:"root",children:[{type:b,tag:R,props:{id:ai},children:[{type:b,tag:v,props:{href:"#%EB%AC%B8%EC%A0%9C-%EB%A7%81%ED%81%AC",ariaHidden:K,tabIndex:L},children:[{type:b,tag:c,props:{className:[M,N]},children:[]}]},{type:a,value:aj}]},{type:a,value:h},{type:b,tag:"p",props:{},children:[{type:b,tag:v,props:{href:ap,rel:[X,Y,Z],target:_},children:[{type:a,value:ap}]}]},{type:a,value:h},{type:b,tag:R,props:{id:ak},children:[{type:b,tag:v,props:{href:"#%EB%82%98%EC%9D%98-%ED%92%80%EC%9D%B4",ariaHidden:K,tabIndex:L},children:[{type:b,tag:c,props:{className:[M,N]},children:[]}]},{type:a,value:al}]},{type:a,value:h},{type:b,tag:S,props:{},children:[{type:a,value:h},{type:b,tag:x,props:{},children:[{type:a,value:"문제에서 오직 두 개의 큐를 사용해서 스택을 구현하라길래 Deque를 두 개 사용하여 풀었다."}]},{type:a,value:h},{type:b,tag:x,props:{},children:[{type:a,value:"큐의 기본 연산인 "},{type:b,tag:y,props:{},children:[{type:a,value:"뒤에서 push"}]},{type:a,value:", "},{type:b,tag:y,props:{},children:[{type:a,value:"앞에서 pop"}]},{type:a,value:"만 사용했으며, "},{type:b,tag:y,props:{},children:[{type:a,value:"len()"}]},{type:a,value:" 함수 대신 스택의 원소 개수를 변수에 저장하여 "},{type:b,tag:y,props:{},children:[{type:a,value:"empty()"}]},{type:a,value:" 메소드를 구현하였다."}]},{type:a,value:h}]},{type:a,value:h},{type:b,tag:aq,props:{},children:[{type:a,value:h},{type:b,tag:ar,props:{},children:[{type:a,value:as}]},{type:a,value:h},{type:b,tag:T,props:{markdown:z},children:[{type:a,value:h},{type:b,tag:T,props:{className:[at]},children:[{type:b,tag:au,props:{className:[av,aw]},children:[{type:b,tag:y,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ax}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ay]},children:[{type:a,value:"MyStack"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"temp_queue "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:H}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:V}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aC]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"+="}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:z}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:H}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"-="}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:z}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:E}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:H}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"value"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:E}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aI}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:E}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aJ}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:V}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"# push와 pop의 중복 코드를 별도의 메소드로 분리"}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"# 가장 위에 있는 원소, 즉 마지막으로 push한 원소를 제외하고"}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"# main_queue의 모든 원소를 차례대로 temp_queue에 push,"}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"# main_queue의 남은 원소를 변수 value에 저장한 다음"}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"# temp_queue에 push한 원소를 전부 다시 main_queue에 push 후 value 리턴"}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ac}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ae}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aK},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:H}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ac}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ae}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aK},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:E}]},{type:a,value:" value\n"}]}]}]},{type:a,value:h}]},{type:a,value:h}]},{type:a,value:h},{type:b,tag:R,props:{id:am},children:[{type:b,tag:v,props:{href:"#%EB%AC%B8%EC%A0%9C-%ED%92%80%EC%9D%B4",ariaHidden:K,tabIndex:L},children:[{type:b,tag:c,props:{className:[M,N]},children:[]}]},{type:a,value:an}]},{type:a,value:h},{type:b,tag:"h3",props:{id:ao},children:[{type:b,tag:v,props:{href:"#push-%ED%95%A0-%EB%96%84-%ED%81%90%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EC%9E%AC%EC%A0%95%EB%A0%AC",ariaHidden:K,tabIndex:L},children:[{type:b,tag:c,props:{className:[M,N]},children:[]}]},{type:b,tag:y,props:{},children:[{type:a,value:"push()"}]},{type:a,value:" 할 떄 큐를 이용해 재정렬"}]},{type:a,value:h},{type:b,tag:S,props:{},children:[{type:a,value:h},{type:b,tag:x,props:{},children:[{type:a,value:"요소 삽입 시 시간 복잡도가 O(n)이다."}]},{type:a,value:h},{type:b,tag:x,props:{},children:[{type:a,value:"위의 풀이보다는 비교적 간단하게 구현할 수 있다."}]},{type:a,value:h}]},{type:a,value:h},{type:b,tag:aq,props:{},children:[{type:a,value:h},{type:b,tag:ar,props:{},children:[{type:a,value:as}]},{type:a,value:h},{type:b,tag:T,props:{markdown:z},children:[{type:a,value:h},{type:b,tag:T,props:{className:[at]},children:[{type:b,tag:au,props:{className:[av,aw]},children:[{type:b,tag:y,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ax}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ay]},children:[{type:a,value:"solution1"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"q "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:H}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aC]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n\n        "},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"# 요소 삽입 후 맨 앞에 두는 상태로 재정렬"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ac}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ae}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aM}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aN},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:E}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aN},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:E}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aI}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aM}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aJ}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:V}]},{type:a,value:h}]}]}]},{type:a,value:h}]},{type:a,value:h}]},{type:a,value:h},{type:b,tag:R,props:{id:Q},children:[{type:b,tag:v,props:{href:"#%EC%B6%9C%EC%B2%98",ariaHidden:K,tabIndex:L},children:[{type:b,tag:c,props:{className:[M,N]},children:[]}]},{type:a,value:Q}]},{type:a,value:h},{type:b,tag:S,props:{},children:[{type:a,value:h},{type:b,tag:x,props:{},children:[{type:a,value:"박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p255-256.\n"},{type:b,tag:S,props:{},children:[{type:a,value:h},{type:b,tag:x,props:{},children:[{type:b,tag:v,props:{href:"https:\u002F\u002Fwww.onlybook.co.kr\u002Fentry\u002Falgorithm-interview",rel:[X,Y,Z],target:_},children:[{type:a,value:"도서 정보"}]}]},{type:a,value:h},{type:b,tag:x,props:{},children:[{type:b,tag:v,props:{href:"https:\u002F\u002Fgithub.com\u002Fonlybooks\u002Falgorithm-interview",rel:[X,Y,Z],target:_},children:[{type:a,value:"GitHub"}]}]},{type:a,value:h}]},{type:a,value:h}]},{type:a,value:h}]}]};ah.text="\n## 문제 링크\n\nhttps:\u002F\u002Fleetcode.com\u002Fproblems\u002Fimplement-stack-using-queues\u002F\n\n## 나의 풀이\n\n- 문제에서 오직 두 개의 큐를 사용해서 스택을 구현하라길래 Deque를 두 개 사용하여 풀었다.\n- 큐의 기본 연산인 `뒤에서 push`, `앞에서 pop`만 사용했으며, `len()` 함수 대신 스택의 원소 개수를 변수에 저장하여 `empty()` 메소드를 구현하였다.\n\n\u003Cdetails\u003E\n\u003Csummary\u003E소스 코드\u003C\u002Fsummary\u003E\n\u003Cdiv markdown=\"1\"\u003E\n\n```python\nclass MyStack:\n    def __init__(self):\n        self.main_queue, self.temp_queue = deque(), deque()\n        self.length = 0\n\n    def push(self, x: int) -\u003E None:\n        self.main_queue.appendleft(x)\n        self.length += 1\n\n    def pop(self) -\u003E int:\n        value = self.switch_queue()\n        self.length -= 1\n        return value\n\n    def top(self) -\u003E int:\n        value = self.switch_queue()\n        self.main_queue.appendleft(value)\n        return value\n\n    def empty(self) -\u003E bool:\n        return self.length == 0\n\n    # push와 pop의 중복 코드를 별도의 메소드로 분리\n    # 가장 위에 있는 원소, 즉 마지막으로 push한 원소를 제외하고\n    # main_queue의 모든 원소를 차례대로 temp_queue에 push,\n    # main_queue의 남은 원소를 변수 value에 저장한 다음\n    # temp_queue에 push한 원소를 전부 다시 main_queue에 push 후 value 리턴\n    def switch_queue(self) -\u003E int:\n        for _ in range(self.length - 1):\n            self.temp_queue.appendleft(self.main_queue.pop())\n        value = self.main_queue.pop()\n        for _ in range(self.length - 1):\n            self.main_queue.appendleft(self.temp_queue.pop())\n        return value\n```\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdetails\u003E\n\n## 문제 풀이\n\n### `push()` 할 떄 큐를 이용해 재정렬\n\n- 요소 삽입 시 시간 복잡도가 O(n)이다.\n- 위의 풀이보다는 비교적 간단하게 구현할 수 있다.\n\n\u003Cdetails\u003E\n\u003Csummary\u003E소스 코드\u003C\u002Fsummary\u003E\n\u003Cdiv markdown=\"1\"\u003E\n\n```python\nclass solution1:\n    def __init__(self):\n        self.q = deque()\n\n    def push(self, x: int) -\u003E None:\n        self.q.append(x)\n\n        # 요소 삽입 후 맨 앞에 두는 상태로 재정렬\n        for _ in range(len(self.q) - 1):\n            self.q.append(self.q.popleft())\n\n    def pop(self) -\u003E int:\n        return self.q.popleft()\n\n    def top(self) -\u003E int:\n        return self.q[0]\n\n    def empty(self) -\u003E bool:\n        return len(self.q) == 0\n```\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdetails\u003E\n\n## 출처\n\n- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p255-256.\n  - [도서 정보](https:\u002F\u002Fwww.onlybook.co.kr\u002Fentry\u002Falgorithm-interview)\n  - [GitHub](https:\u002F\u002Fgithub.com\u002Fonlybooks\u002Falgorithm-interview)\n";ah.dir="\u002Fposts\u002F2021\u002F05\u002F13";ah.path="\u002Fposts\u002F2021\u002F05\u002F13\u002Fleetcode-225";ah.extension=".md";ah.createdAt="2021-05-13T14:43:03.000Z";ah.updatedAt="2022-06-26T10:01:49.000Z";return {data:[{post:ah,prev:{slug:"leetcode-739",title:"LeetCode 739번 문제",createdAt:"2021-05-12T13:28:23.000Z"},next:{slug:"leetcode-232",title:"LeetCode 232번 문제",createdAt:"2021-05-13T14:48:38.000Z"}}],fetch:{},mutations:[["SET_POST",ah],["SET_HEADER_IMAGE_STATE",true],["SET_SCROLL_STATE",false]]}}("text","element","span","token","punctuation"," ",".","\n","(",")","operator","keyword",":","self","builtin","-","def","function","\n        ","number","\u003E","a","\n        self","li","code","1","\n    "," self","\n\n    ","int","return","q","main_queue","=","length ","comment","true",-1,"icon","icon-link","pop",2,"출처","h2","ul","div",",","0","appendleft","nofollow","noopener","noreferrer","_blank"," deque","\n        value ","switch_queue","for"," _ ","in","range","\n            self",{},"문제-링크","문제 링크","나의-풀이","나의 풀이","문제-풀이","문제 풀이","push-할-떄-큐를-이용해-재정렬","https:\u002F\u002Fleetcode.com\u002Fproblems\u002Fimplement-stack-using-queues\u002F","details","summary","소스 코드","nuxt-content-highlight","pre","language-python","line-numbers","class","class-name","__init__","push"," x","boolean","None","x"," value\n\n    ","top","empty","bool","==","temp_queue","append","len","popleft")));