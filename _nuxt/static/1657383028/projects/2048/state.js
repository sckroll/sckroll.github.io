window.__NUXT__=(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1657383028",layout:"default",error:E,state:{post:{slug:"2048",description:"2048 게임을 클론하여 구현한 프로젝트",title:2048,image:"2048\u002Fmain.png",period:"2021\u002F09\u002F03 ~ 2021\u002F09\u002F22 (약 3주)",stacks:["JavaScript (Vanilla JS)"],toc:[{id:q,depth:r,text:q},{id:F,depth:r,text:G},{id:H,depth:n,text:I},{id:s,depth:n,text:s},{id:J,depth:n,text:K},{id:L,depth:n,text:M},{id:N,depth:n,text:x},{id:O,depth:n,text:P},{id:Q,depth:n,text:R},{id:S,depth:r,text:T},{id:t,depth:r,text:t}],body:{type:"root",children:[{type:b,tag:u,props:{id:q},children:[{type:b,tag:g,props:{href:"#%EA%B0%9C%EC%9A%94",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"유명한 "},{type:b,tag:g,props:{href:"https:\u002F\u002Fplay2048.co\u002F",rel:[y,z,A],target:B},children:[{type:a,value:"2048 게임"}]},{type:a,value:"을 클론하여 저만의 방식으로 만들어보았습니다. GitHub에 올라온 해당 게임의 리포지토리 등 2048에 관련된 소스코드를 참고하지 않고 스스로 알고리즘을 구현했으며, 원작에는 없는 일부 기능을 추가하였습니다. 별도의 프레임워크 없이 Vanilla JS로 구현했으며, JS로 직접 DOM을 다뤄보고 싶어서 초기 HTML의 구조는 싱글 페이지 애플리케이션(SPA)의 구조를 모방하였습니다."}]},{type:a,value:c},{type:b,tag:u,props:{id:F},children:[{type:b,tag:g,props:{href:"#%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:o,props:{id:H},children:[{type:b,tag:g,props:{href:"#%EC%A0%84%EC%B2%B4-%EA%B5%AC%EC%A1%B0",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:"앱 구조",src:"\u002Fimages\u002Fprojects\u002F2048\u002Fstructure.png"},children:[]}]},{type:a,value:c},{type:b,tag:o,props:{id:s},children:[{type:b,tag:g,props:{href:"#%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"게임의 전체적인 흐름은 다음과 같습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:"게임의 흐름",src:"\u002Fimages\u002Fprojects\u002F2048\u002Fflow.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"키보드 혹은 화면 슬라이드에 따라 블록(타일)을 이동시킬 때, 이동 방향에 따라 현재 블록 정보가 담긴 2차원 배열(이하 '행렬')을 변형시킨 후, 각 행에 대해 알고리즘을 적용하고 다시 원래 모습으로 변형시켜서 사용합니다."}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"아래 -\u003E 위로 이동: 기존 행렬을 왼쪽으로 90도 회전한 형태, 즉 행렬의 행과 열을 스왑 후 행의 순서를 뒤집은 상태\n"},{type:b,tag:f,props:{alt:"아래에서 위로",src:"\u002Fimages\u002Fprojects\u002F2048\u002Fmatrix-up.png"},children:[]}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"위 -\u003E 아래로 이동: 기존 행렬을 오른쪽으로 90도 회전한 형태, 즉 행렬의 행과 열을 스왑한 상태\n"},{type:b,tag:f,props:{alt:"위에서 아래로",src:"\u002Fimages\u002Fprojects\u002F2048\u002Fmatrix-down.png"},children:[]}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"오른쪽 -\u003E 왼쪽으로 이동: 기존 행렬을 좌우 반전한 형태, 즉 행렬의 열 순서를 뒤집은 상태\n"},{type:b,tag:f,props:{alt:"오른쪽에서 왼쪽으로",src:"\u002Fimages\u002Fprojects\u002F2048\u002Fmatrix-left.png"},children:[]}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"왼쪽 -\u003E 오른쪽으로 이동: 기존 행렬 그대로의 상태\n"},{type:b,tag:f,props:{alt:"왼쪽에서 오른쪽으로",src:"\u002Fimages\u002Fprojects\u002F2048\u002Fmatrix-right.png"},children:[]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이동 방향에 맞게 행렬을 변형시켰으면, 각 행에 대해 블록을 이동하거나 병합 혹은 삭제하는 알고리즘을 적용합니다. 가장 오른쪽(마지막) 인덱스부터 '기준'을 잡고 기준 인덱스를 줄여가며 그 왼쪽에 있는 모든 값('검사 대상')을 거꾸로 순회합니다. 다음과 같이 세 가지의 경우로 나누었습니다."}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"검사 대상이 "},{type:b,tag:e,props:{},children:[{type:a,value:v}]},{type:a,value:"이면, 다음 검사 대상으로\n"},{type:b,tag:f,props:{alt:"첫 번째 경우",src:"\u002Fimages\u002Fprojects\u002F2048\u002Fcase-1.png"},children:[]}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"검사 대상이 기준과 같은 값이면, 그 위치의 값을 "},{type:b,tag:e,props:{},children:[{type:a,value:v}]},{type:a,value:"으로 설정 후, 기준의 값은 "},{type:b,tag:e,props:{},children:[{type:a,value:"2"}]},{type:a,value:"배로 설정 & 현재 기준을 끝내고 다음 기준으로\n"},{type:b,tag:f,props:{alt:"두 번째 경우",src:"\u002Fimages\u002Fprojects\u002F2048\u002Fcase-2.png"},children:[]}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"검사 대상이 그 외의 값이면 현재 기준을 끝내고 다음 기준으로\n"},{type:b,tag:f,props:{alt:"세 번째 경우",src:"\u002Fimages\u002Fprojects\u002F2048\u002Fcase-3.png"},children:[]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"단, 기준의 값이 "},{type:b,tag:e,props:{},children:[{type:a,value:v}]},{type:a,value:"이면 기준과 검사 대상의 값을 스왑한 후 다음 검사 대상으로\n"},{type:b,tag:f,props:{alt:"세 번째 경우 추가 1",src:"\u002Fimages\u002Fprojects\u002F2048\u002Fcase-3-1.png"},children:[]},{type:a,value:c},{type:b,tag:f,props:{alt:"세 번째 경우 추가 2",src:"\u002Fimages\u002Fprojects\u002F2048\u002Fcase-3-2.png"},children:[]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:J},children:[{type:b,tag:g,props:{href:"#%ED%98%84%EC%9E%AC-%EC%A0%90%EC%88%98-%EC%B5%9C%EA%B3%A0-%EC%A0%90%EC%88%98-%ED%98%84%EC%9E%AC-%ED%84%B4-%ED%91%9C%EC%8B%9C",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:"현재 점수, 최고 점수, 현재 턴",src:"\u002Fimages\u002Fprojects\u002F2048\u002Fscore-turn.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"각 턴마다 현재 점수("},{type:b,tag:e,props:{},children:[{type:a,value:"Score"}]},{type:a,value:")와 턴("},{type:b,tag:e,props:{},children:[{type:a,value:"Turn"}]},{type:a,value:")을 업데이트하도록 했으며, 최고 점수("},{type:b,tag:e,props:{},children:[{type:a,value:"High Score"}]},{type:a,value:")의 경우 기존 최고 기록을 경신한 경우에만 로컬 스토리지("},{type:b,tag:e,props:{},children:[{type:a,value:"localStorage"}]},{type:a,value:")에 저장됩니다. 이렇게 저장된 최고 기록 데이터는 게임을 시작할 때마다 로컬 스토리지로부터 불러와 사용되며, 게임을 맨 처음 시작하는 경우와 같이 로컬 스토리지에 데이터가 없는 경우 "},{type:b,tag:e,props:{},children:[{type:a,value:v}]},{type:a,value:"으로 초기화됩니다."}]},{type:a,value:c},{type:b,tag:o,props:{id:L},children:[{type:b,tag:g,props:{href:"#%EB%B0%A9%ED%96%A5-%ED%82%A4%EC%99%80-%ED%99%94%EB%A9%B4-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C%EB%A1%9C-%EB%B8%94%EB%A1%9D-%EC%9D%B4%EB%8F%99",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"키보드 방향 키로 블록을 이동시킬 수 있지만, 원하는 방향으로 화면을 슬라이드하여 이동시킬 수도 있습니다. 슬라이드 조작은 데스크탑과 모바일 환경을 모두 지원합니다. 키 입력은 "},{type:b,tag:e,props:{},children:[{type:a,value:"keydown"}]},{type:a,value:" 이벤트로 받았으며, 마우스 슬라이드(드래그)는 "},{type:b,tag:e,props:{},children:[{type:a,value:"mousedown"}]},{type:a,value:w},{type:b,tag:e,props:{},children:[{type:a,value:"mouseup"}]},{type:a,value:w},{type:b,tag:e,props:{},children:[{type:a,value:"mousemove"}]},{type:a,value:" 이벤트를 사용했습니다. 하지만 모바일 환경에서는 마우스 이벤트가 동작하지 않아 별도의 터치 입력을 받는 "},{type:b,tag:e,props:{},children:[{type:a,value:"touchstart"}]},{type:a,value:w},{type:b,tag:e,props:{},children:[{type:a,value:"touchend"}]},{type:a,value:w},{type:b,tag:e,props:{},children:[{type:a,value:"touchmove"}]},{type:a,value:" 이벤트를 받아서 사용했습니다."}]},{type:a,value:c},{type:b,tag:o,props:{id:N},children:[{type:b,tag:g,props:{href:"#%EB%8B%A4%ED%81%AC-%EB%AA%A8%EB%93%9C",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:x,src:"\u002Fimages\u002Fprojects\u002F2048\u002Fdarkmode.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"prefers-color-scheme"}]},{type:a,value:" 미디어 쿼리로 시스템 다크 모드 여부를 판단하여 앱을 열자마자 다크 모드를 적용하며, 하단의 토글 버튼으로 다크 모드를 설정하거나 해제할 수 있습니다."}]},{type:a,value:c},{type:b,tag:o,props:{id:O},children:[{type:b,tag:g,props:{href:"#%EB%A1%9C%EA%B7%B8-%EA%B8%B0%EB%8A%A5",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:"로그 화면",src:"\u002Fimages\u002Fprojects\u002F2048\u002Flog-1.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{align:U},children:[{type:a,value:"▲ 로그 화면"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:"로그 툴팁",src:"\u002Fimages\u002Fprojects\u002F2048\u002Flog-2.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{align:U},children:[{type:a,value:"▲ 로그 툴팁"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"로그 토글 버튼을 클릭하여 로그 화면을 표시하거나 끌 수 있습니다. 지금까지 사용자가 이동한 방향, 이전 턴, 해당 턴에서 획득한 점수, 이전 턴의 블록 배치 상태를 확인할 수 있으며, 특히 블록 배치 상태는 아이콘에 마우스를 올리면 툴팁 형식으로 블록 배치 상태를 확인할 수 있습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"(사실 그렇게 쓸모있는 기능은 아닙니다만...)"}]},{type:a,value:c},{type:b,tag:o,props:{id:Q},children:[{type:b,tag:g,props:{href:"#%EB%B0%98%EC%9D%91%ED%98%95-%EB%94%94%EC%9E%90%EC%9D%B8",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:R}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:"table",props:{},children:[{type:b,tag:"thead",props:{},children:[{type:b,tag:V,props:{},children:[{type:b,tag:W,props:{},children:[{type:b,tag:f,props:{alt:"데스크탑 화면",src:"\u002Fimages\u002Fprojects\u002F2048\u002Fdesktop.png"},children:[]}]},{type:b,tag:W,props:{},children:[{type:b,tag:f,props:{alt:"모바일 화면",src:"\u002Fimages\u002Fprojects\u002F2048\u002Fmobile.png"},children:[]}]}]}]},{type:b,tag:"tbody",props:{},children:[{type:b,tag:V,props:{},children:[{type:b,tag:X,props:{},children:[{type:a,value:"▲ 데스크탑 화면"}]},{type:b,tag:X,props:{},children:[{type:a,value:"▲ 모바일 화면"}]}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"미디어 쿼리를 사용하여 특정 너비 이하일 경우 각 요소의 스타일을 조정하여 모바일 환경에서도 게임을 즐길 수 있도록 만들었습니다."}]},{type:a,value:c},{type:b,tag:u,props:{id:S},children:[{type:b,tag:g,props:{href:"#%EB%8A%90%EB%82%80-%EC%A0%90",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:T}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"간단한 게임이니만큼 빠른 시간 내에 구현할 수 있다고 나름 자신했지만, 생각보다 쉬운 일이 아니었습니다. 밑바닥부터 하나하나 만들어가면서 게임 알고리즘에 대해 탐구하고, 이를 어떻게 화면에 출력할 것인지, 그리고 어떻게 하면 효율적으로 코드를 작성할 수 있는지 고민해야 했습니다. Vue와 같은 프레임워크에 익숙해진 상태로 이를 구현하려다 보니 평소보다 많은 고민을 해야 했지만, 그만큼 배운 점도 많았다고 생각합니다. 특히 맨 처음 하나의 DOM부터 시작해서 다른 DOM을 붙여가며 화면에 렌더링하는 과정을 직접 구현해보면서 SPA가 어떻게 동작하는지 이해할 수 있었고, 키보드나 터치 이벤트 핸들러를 연결했을 때, "},{type:b,tag:e,props:{},children:[{type:a,value:"this"}]},{type:a,value:"가 올바르게 바인딩되지 않았을 경우에 대처하는 방법을 배웠숩니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"기능 구현에 집중하느라 리팩토링까지 끝낸 완벽한 코드라고 할 수 없지만, 다양한 추가 기능을 구현하면서 제가 잊고 있거나 모르고 있던 다양한 지식을 습득할 수 있어서 좋은 기회였습니다. 다음 프로젝트도 Vanilla JS로 만들지는 미지수지만, 적어도 이번 프로젝트에서 배운 내용을 이후에도 유용하게 사용할 것 같습니다."}]},{type:a,value:c},{type:b,tag:u,props:{id:t},children:[{type:b,tag:g,props:{href:"#%EB%A7%81%ED%81%AC",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"앱 URL: "},{type:b,tag:g,props:{href:Y,rel:[y,z,A],target:B},children:[{type:a,value:Y}]}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"GitHub: "},{type:b,tag:g,props:{href:Z,rel:[y,z,A],target:B},children:[{type:a,value:Z}]}]},{type:a,value:c}]}]},dir:"\u002Fprojects",path:_,extension:".md",createdAt:"2021-09-19T09:50:00.000Z",updatedAt:"2022-06-19T14:44:49.000Z"},isErrorPage:p,isDarkMode:p,isScrolled:p,isMobile:p,isTablet:p,hasHeaderImage:D,isMobileMenuOpened:p,headerImage:"url(\u002Fimages\u002Fprojects\u002F2048\u002Fmain.png)",perPage:10},serverRendered:D,routePath:_,config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:E},content:{dbHash:"6f5af980"}},colorMode:{preference:$,value:$,unknown:D,forced:p}}}("text","element","\n","p","code","img","a","true",-1,"span","icon","icon-link","li",3,"h3",false,"개요",2,"알고리즘","링크","h2","0",", ","다크 모드","nofollow","noopener","noreferrer","_blank","ul",true,null,"주요-기능","주요 기능","전체-구조","전체 구조","현재-점수-최고-점수-현재-턴-표시","현재 점수, 최고 점수, 현재 턴 표시","방향-키와-화면-슬라이드로-블록-이동","방향 키와 화면 슬라이드로 블록 이동","다크-모드","로그-기능","로그 기능","반응형-디자인","반응형 디자인","느낀-점","느낀 점","center","tr","th","td","https:\u002F\u002Fsckroll-2048.netlify.app","https:\u002F\u002Fgithub.com\u002Fsckroll\u002Fsckroll-2048","\u002Fprojects\u002F2048","system"));