import{_ as s,r as i,o as d,c as l,b as e,e as r,w as c,d as n,f as t}from"./app-55c326ac.js";const v={},o=e("h1",{id:"docker-参数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker-参数","aria-hidden":"true"},"#"),n(" Docker 参数")],-1),u={class:"table-of-contents"},m=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-d: 以守护进程方式运行(后台)
-i: 表示已“交互模式”运行容器
-t: 表示容器启动后进入命令行
-v: 容器挂载。
-v /my/webapp:/usr/local/tomcat/webapps，冒号前为当前宿主机目录，冒号后为容器目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-run" tabindex="-1"><a class="header-anchor" href="#docker-run" aria-hidden="true">#</a> docker run</h2><p>docker run 是运行容器的直接入口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-d: 后台运行。此时所有I/O数据只能通过网络资源或者共享卷组来进行交互。因为container不再监听你执行docker run的这个终端命令行窗口
-a=[]               : Attach to \`STDIN\`, \`STDOUT\` and/or \`STDERR\`
-t=false            : Allocate a pseudo-tty
--sig-proxy=true    : Proxify all received signal to the process (non-TTY mode only)
-i=false            : Keep STDIN open even if not attached

## 但是当通过管道与容器进行交互时，就不能使用-t

--name              ：给容器命令
--rm                ：指在容器运行完之后自动清除

##  --rm 与 -d 不能共用

-v                  : 建一个数据卷挂载到目标容器中去
--privileged=true   ： 加入特权，就有了对容器的读写权限。

-p                  ： 端口映射

--link              ： 容器互联

docker attach 或者docker exec重新进入容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> nginx_01 <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 nginx_01

<span class="token comment"># -d:表示后台运行</span>
<span class="token comment"># --name：表示给容器命令</span>
<span class="token comment"># 最后的nginx_01：表示的是使用的镜像</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function b(p,h){const a=i("router-link");return d(),l("div",null,[o,e("nav",u,[e("ul",null,[e("li",null,[r(a,{to:"#docker-run"},{default:c(()=>[n("docker run")]),_:1})])])]),m])}const _=s(v,[["render",b],["__file","Docker-参数.html.vue"]]);export{_ as default};
