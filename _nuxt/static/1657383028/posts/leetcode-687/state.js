window.__NUXT__=(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi,bj){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1657383028",layout:"default",error:av,state:{post:{slug:"leetcode-687",description:"Longest Univalue Path",title:"LeetCode 687번 문제",tags:"algorithm, leetcode, python, dfs, tree",toc:[{id:aw,depth:Y,text:ax},{id:ay,depth:Y,text:az},{id:aA,depth:Y,text:aB},{id:aC,depth:3,text:aD},{id:Z,depth:Y,text:Z}],body:{type:aj,children:[{type:b,tag:_,props:{id:aw},children:[{type:b,tag:v,props:{href:"#%EB%AC%B8%EC%A0%9C-%EB%A7%81%ED%81%AC",ariaHidden:O,tabIndex:P},children:[{type:b,tag:c,props:{className:[Q,R]},children:[]}]},{type:a,value:ax}]},{type:a,value:j},{type:b,tag:"p",props:{},children:[{type:b,tag:v,props:{href:aE,rel:[ak,al,am],target:an},children:[{type:a,value:aE}]}]},{type:a,value:j},{type:b,tag:_,props:{id:ay},children:[{type:b,tag:v,props:{href:"#%EB%82%98%EC%9D%98-%ED%92%80%EC%9D%B4-%ED%92%80%EC%9D%B4-%EC%8B%A4%ED%8C%A8",ariaHidden:O,tabIndex:P},children:[{type:b,tag:c,props:{className:[Q,R]},children:[]}]},{type:a,value:az}]},{type:a,value:j},{type:b,tag:$,props:{},children:[{type:a,value:j},{type:b,tag:G,props:{},children:[{type:a,value:"543번 문제를 응용해서 풀어보려 했으나 역부족이었다..."}]},{type:a,value:j}]},{type:a,value:j},{type:b,tag:aF,props:{},children:[{type:a,value:j},{type:b,tag:aG,props:{},children:[{type:a,value:aH}]},{type:a,value:j},{type:b,tag:aa,props:{markdown:s},children:[{type:a,value:j},{type:b,tag:aa,props:{className:[aI]},children:[{type:b,tag:aJ,props:{className:[aK,aL]},children:[{type:b,tag:aM,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ab}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ac]},children:[{type:a,value:aN}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:H}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:aP}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:aQ},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:aR},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aS},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:aT},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:aU},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:aV},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ab}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ac]},children:[{type:a,value:"MySolution1"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"\n    longest"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:w}]},{type:a,value:aW},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:H}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:aX}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:aY},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ao}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:H}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:aZ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ao}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"# 존재하지 않는 노드의 상태값은 -1"}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:M}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"not"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:N}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"# 왼쪽, 오른쪽의 각 리프 노드까지 탐색"}]},{type:a,value:a_},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:a$},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"# 상태값"}]},{type:a,value:"\n            distance "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:w}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:M}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:X}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:M}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:ba},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:bb},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aq}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:ba},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:bb},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aq}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"\u002F\u002F"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ar}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ai}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ai}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:bc},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ai}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:X}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:bd},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ai}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:X}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:bd},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:bc},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"# 가장 긴 경로"}]},{type:a,value:be},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"longest "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"longest"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:" distance"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:N}]},{type:a,value:" distance\n\n        dfs"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:N}]},{type:a,value:bf},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"longest\n"}]}]}]},{type:a,value:j}]},{type:a,value:j}]},{type:a,value:j},{type:b,tag:_,props:{id:aA},children:[{type:b,tag:v,props:{href:"#%EB%AC%B8%EC%A0%9C-%ED%92%80%EC%9D%B4",ariaHidden:O,tabIndex:P},children:[{type:b,tag:c,props:{className:[Q,R]},children:[]}]},{type:a,value:aB}]},{type:a,value:j},{type:b,tag:"h3",props:{id:aC},children:[{type:b,tag:v,props:{href:"#1-%EC%83%81%ED%83%9C%EA%B0%92-%EA%B1%B0%EB%A6%AC-%EA%B3%84%EC%82%B0-dfs",ariaHidden:O,tabIndex:P},children:[{type:b,tag:c,props:{className:[Q,R]},children:[]}]},{type:a,value:aD}]},{type:a,value:j},{type:b,tag:$,props:{},children:[{type:a,value:j},{type:b,tag:G,props:{},children:[{type:a,value:"내 예상대로 543번 문제와 유사한 방법으로 풀 수 있는 문제였다."}]},{type:a,value:j},{type:b,tag:G,props:{},children:[{type:a,value:"백트래킹 과정에서 현재 노드는 양쪽 자식 노드를 모두 연결할 수 있지만, 현재 노드의 부모 노드는 현재 노드의 양쪽 자식 노드 중 하나만 연결해야 한다는 트리의 특징을 간과했기 때문에 제대로 풀이하지 못한 듯하다."}]},{type:a,value:j}]},{type:a,value:j},{type:b,tag:aF,props:{},children:[{type:a,value:j},{type:b,tag:aG,props:{},children:[{type:a,value:aH}]},{type:a,value:j},{type:b,tag:aa,props:{markdown:s},children:[{type:a,value:j},{type:b,tag:aa,props:{className:[aI]},children:[{type:b,tag:aJ,props:{className:[aK,aL]},children:[{type:b,tag:aM,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ab}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ac]},children:[{type:a,value:aN}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:H}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:aP}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:aQ},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:aR},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aS},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:aT},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:aU},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:aV},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ab}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ac]},children:[{type:a,value:"Solution1"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"\n    result"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:w}]},{type:a,value:aW},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:H}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:aX}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:aY},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ao}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:H}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:aZ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"# 존재하지 않는 노드의 상태값을 0으로 설정"}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:M}]},{type:a,value:" node "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"is"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:N}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:w}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"# 존재하지 않는 노드까지 DFS 재귀 탐색"}]},{type:a,value:a_},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:a$},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"# 현재 노드가 자식 노드와 동일한 경우 거리 1 증가"}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:M}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:X}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:bg},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:bh}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:bg},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:w}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:M}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:X}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:bi},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:bh}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:bi},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:w}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"# 왼쪽과 오른쪽 자식 노드 간 거리의 합 최댓값이 결과"}]},{type:a,value:be},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"result "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"result"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"# 자식 노드 상태값 중 큰 값 리턴"}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"# 현재 노드는 양쪽 자식 노드를 모두 연결할 수 있지만"}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"# 현재 노드의 부모 노드에서는 지금의 양쪽 자식 노드를 동시에 연결할 수 없기 때문에"}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"# 양쪽 자식 노드 중 한쪽만 선택해야 함 (이왕이면 더 큰 쪽으로 선택)"}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:N}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"\n\n        dfs"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:N}]},{type:a,value:bf},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"result\n"}]}]}]},{type:a,value:j}]},{type:a,value:j}]},{type:a,value:j},{type:b,tag:_,props:{id:Z},children:[{type:b,tag:v,props:{href:"#%EC%B6%9C%EC%B2%98",ariaHidden:O,tabIndex:P},children:[{type:b,tag:c,props:{className:[Q,R]},children:[]}]},{type:a,value:Z}]},{type:a,value:j},{type:b,tag:$,props:{},children:[{type:a,value:j},{type:b,tag:G,props:{},children:[{type:a,value:"박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p393-396.\n"},{type:b,tag:$,props:{},children:[{type:a,value:j},{type:b,tag:G,props:{},children:[{type:b,tag:v,props:{href:"https:\u002F\u002Fwww.onlybook.co.kr\u002Fentry\u002Falgorithm-interview",rel:[ak,al,am],target:an},children:[{type:a,value:"도서 정보"}]}]},{type:a,value:j},{type:b,tag:G,props:{},children:[{type:b,tag:v,props:{href:"https:\u002F\u002Fgithub.com\u002Fonlybooks\u002Falgorithm-interview",rel:[ak,al,am],target:an},children:[{type:a,value:"GitHub"}]}]},{type:a,value:j}]},{type:a,value:j}]},{type:a,value:j}]}]},text:"\n## 문제 링크\n\nhttps:\u002F\u002Fleetcode.com\u002Fproblems\u002Flongest-univalue-path\u002F\n\n## 나의 풀이 (풀이 실패)\n\n- 543번 문제를 응용해서 풀어보려 했으나 역부족이었다...\n\n\u003Cdetails\u003E\n\u003Csummary\u003E소스 코드\u003C\u002Fsummary\u003E\n\u003Cdiv markdown=\"1\"\u003E\n\n```python\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\nclass MySolution1:\n    longest: int = 0\n\n    def longestUnivaluePath(self, root: TreeNode) -\u003E int:\n        def dfs(node: TreeNode) -\u003E int:\n            # 존재하지 않는 노드의 상태값은 -1\n            if not node:\n                return -1\n\n            # 왼쪽, 오른쪽의 각 리프 노드까지 탐색\n            left = dfs(node.left)\n            right = dfs(node.right)\n\n            # 상태값\n            distance = 0\n            if node.left and node.right:\n                if node.left.val == node.right.val == node.val:\n                    distance += (math.ceil(left \u002F 2) + 1) + (math.ceil(right \u002F 2) \u002F\u002F 2 + 1)\n                elif node.left.val == node.val:\n                    distance += left + 1\n                elif node.right.val == node.val:\n                    distance += right + 1\n            elif node.left and node.left.val == node.val:\n                distance += left + 1\n            elif node.right and node.right.val == node.val:\n                distance += right + 1\n\n            # 가장 긴 경로\n            self.longest = max(self.longest, distance)\n            return distance\n\n        dfs(root)\n        return self.longest\n```\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdetails\u003E\n\n## 문제 풀이\n\n### 1. 상태값 거리 계산 DFS\n\n- 내 예상대로 543번 문제와 유사한 방법으로 풀 수 있는 문제였다.\n- 백트래킹 과정에서 현재 노드는 양쪽 자식 노드를 모두 연결할 수 있지만, 현재 노드의 부모 노드는 현재 노드의 양쪽 자식 노드 중 하나만 연결해야 한다는 트리의 특징을 간과했기 때문에 제대로 풀이하지 못한 듯하다.\n\n\u003Cdetails\u003E\n\u003Csummary\u003E소스 코드\u003C\u002Fsummary\u003E\n\u003Cdiv markdown=\"1\"\u003E\n\n```python\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\nclass Solution1:\n    result: int = 0\n\n    def longestUnivaluePath(self, root: TreeNode) -\u003E int:\n        def dfs(node: TreeNode):\n            # 존재하지 않는 노드의 상태값을 0으로 설정\n            if node is None:\n                return 0\n\n            # 존재하지 않는 노드까지 DFS 재귀 탐색\n            left = dfs(node.left)\n            right = dfs(node.right)\n\n            # 현재 노드가 자식 노드와 동일한 경우 거리 1 증가\n            if node.left and node.left.val == node.val:\n                left += 1\n            else:\n                left = 0\n            if node.right and node.right.val == node.val:\n                right += 1\n            else:\n                right = 0\n\n            # 왼쪽과 오른쪽 자식 노드 간 거리의 합 최댓값이 결과\n            self.result = max(self.result, left + right)\n\n            # 자식 노드 상태값 중 큰 값 리턴\n            # 현재 노드는 양쪽 자식 노드를 모두 연결할 수 있지만\n            # 현재 노드의 부모 노드에서는 지금의 양쪽 자식 노드를 동시에 연결할 수 없기 때문에\n            # 양쪽 자식 노드 중 한쪽만 선택해야 함 (이왕이면 더 큰 쪽으로 선택)\n            return max(left, right)\n\n        dfs(root)\n        return self.result\n```\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdetails\u003E\n\n## 출처\n\n- 박상길, 『파이썬 알고리즘 인터뷰』, 책만(2020), p393-396.\n  - [도서 정보](https:\u002F\u002Fwww.onlybook.co.kr\u002Fentry\u002Falgorithm-interview)\n  - [GitHub](https:\u002F\u002Fgithub.com\u002Fonlybooks\u002Falgorithm-interview)\n",dir:"\u002Fposts\u002F2021\u002F06\u002F16",path:"\u002Fposts\u002F2021\u002F06\u002F16\u002Fleetcode-687",extension:".md",createdAt:"2021-06-15T15:50:17.000Z",updatedAt:"2022-06-26T10:01:49.000Z"},isErrorPage:F,isDarkMode:F,isScrolled:F,isMobile:F,isTablet:F,hasHeaderImage:au,isMobileMenuOpened:F,headerImage:"",perPage:10},serverRendered:au,routePath:"\u002Fposts\u002Fleetcode-687",config:{_app:{basePath:aq,assetsPath:"\u002F_nuxt\u002F",cdnURL:av},content:{dbHash:"6f5af980"}},colorMode:{preference:bj,value:bj,unknown:au,forced:F}}}("text","element","span","token","punctuation","operator"," ",".","keyword","\n",":","="," node","number","(",")","\n            ","comment","1",",","val ","a","0","builtin","==","+","\n\n            ","left","right","val","+=",false,"li","def","function","self","left ","node","if","return","true",-1,"icon","icon-link","boolean","None","right ","int","\n                ","and",2,"출처","h2","ul","div","class","class-name"," right"," TreeNode","-","\n        "," dfs","elif","root","nofollow","noopener","noreferrer","_blank","\u003E","\n                    distance ","\u002F","2"," left ","max",true,null,"문제-링크","문제 링크","나의-풀이-풀이-실패","나의 풀이 (풀이 실패)","문제-풀이","문제 풀이","1-상태값-거리-계산-dfs","1. 상태값 거리 계산 DFS","https:\u002F\u002Fleetcode.com\u002Fproblems\u002Flongest-univalue-path\u002F","details","summary","소스 코드","nuxt-content-highlight","pre","language-python","line-numbers","code","TreeNode","\n    ","__init__"," val"," left","\n        self"," val\n        self"," left\n        self"," right\n\n\n","\n\n    ","longestUnivaluePath"," root","dfs","\n            left ","\n            right ","math","ceil"," right ","\n                distance ","\n            self"," self","\n                left ","else","\n                right ","system"));