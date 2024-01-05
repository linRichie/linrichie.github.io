import{_ as c,r as o,o as t,c as d,a as r,b as n,e as a,w as l,d as e,f as p}from"./app-55c326ac.js";const u={},m=n("h1",{id:"_13-数据管理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_13-数据管理","aria-hidden":"true"},"#"),e(" 13. 数据管理")],-1),v={class:"table-of-contents"},b=p(`<p>docker内部以及容器之间管理数据。有两种方式</p><ul><li>数据卷 (Volumes)</li><li>挂载主机目录 (Bind mounts)</li></ul><h2 id="数据卷" tabindex="-1"><a class="header-anchor" href="#数据卷" aria-hidden="true">#</a> 数据卷</h2><p><code>数据卷</code>是一个可供一个或多个容器使用的特殊目录，绕过UFS，提供许多特性：</p><ul><li><code>数据卷</code>可以在容器之间共享和重用</li><li>对<code>数据卷</code>的修改会立马生效</li><li>对<code>数据卷</code>的更新，不会影响镜像</li><li><code>数据卷</code>默认会一直存在，即使容器被删除</li></ul><blockquote><p>注意：数据卷 的使用，类似于 Linux 下对目录或文件进行 mount，镜像中的被指定为挂载点的目录中的文件会隐藏掉，能显示看的是挂载的 数据卷</p></blockquote><h3 id="创建数据卷" tabindex="-1"><a class="header-anchor" href="#创建数据卷" aria-hidden="true">#</a> 创建数据卷</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> volume create my-vol

<span class="token comment">#查看所有数据卷</span>
<span class="token function">docker</span> volume <span class="token function">ls</span> 

<span class="token comment">#查看指定数据卷的信息</span>
<span class="token function">docker</span> volume inspect my-vol 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动一个挂载数据卷的容器" tabindex="-1"><a class="header-anchor" href="#启动一个挂载数据卷的容器" aria-hidden="true">#</a> 启动一个挂载数据卷的容器</h3><p>用<code>docker run</code> 使用<code>--mount</code>参数，将<code>数据卷</code>挂载到容器里。在一次<code>docker run</code>中可以挂载多个<code>数据卷</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-P</span> <span class="token parameter variable">--name</span> web <span class="token punctuation">\\</span>
    <span class="token comment"># -v my-vol:/webapp \\</span>
    <span class="token parameter variable">--mount</span> <span class="token assign-left variable">source</span><span class="token operator">=</span>my-vol,target<span class="token operator">=</span>/webapp <span class="token punctuation">\\</span>
    training/webapp <span class="token punctuation">\\</span>
    python app.py
    
<span class="token comment"># source：接的是要挂载的文件或者数据卷</span>
<span class="token comment"># target: 接的是挂载的目的地文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看数据卷的具体信息" tabindex="-1"><a class="header-anchor" href="#查看数据卷的具体信息" aria-hidden="true">#</a> 查看数据卷的具体信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> imspect web      <span class="token comment">#查看web容器信息</span>
<span class="token comment"># 数据卷的信息在Mounts下面</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除数据卷" tabindex="-1"><a class="header-anchor" href="#删除数据卷" aria-hidden="true">#</a> 删除数据卷</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> volume <span class="token function">rm</span> my-vol


<span class="token comment"># 无主的数据卷可能会占据很多空间，要清理请使用以下命令</span>
<span class="token function">docker</span> volume prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>数据卷</code> 是被设计用来<code>持久化数据</code>的，它的生命周期独立于容器，<code>Docker</code> 不会在容器被删除后自动删除 <code>数据卷</code>，并且也不存在垃圾回收这样的机制来处理没有任何容器引用的 <code>数据卷</code>。如果需要在删除容器的同时移除数据卷。可以在删除容器的时候使用<code>docker rm -v</code>这个命令</p><hr><h2 id="挂载主机目录" tabindex="-1"><a class="header-anchor" href="#挂载主机目录" aria-hidden="true">#</a> 挂载主机目录</h2><h3 id="挂载一个主机目录作为数据卷" tabindex="-1"><a class="header-anchor" href="#挂载一个主机目录作为数据卷" aria-hidden="true">#</a> 挂载一个主机目录作为数据卷</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-P</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> web <span class="token punctuation">\\</span>
    <span class="token comment"># -v /src/webapp:/opt/webapp \\</span>
    <span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,source<span class="token operator">=</span>/src/webapp,target<span class="token operator">=</span>/opt/webapp <span class="token punctuation">\\</span>
    training/webapp <span class="token punctuation">\\</span>
    python app.py

<span class="token comment"># source：接的是要挂载的文件或者数据卷</span>
<span class="token comment"># target: 接的是挂载的目的地文件</span>

<span class="token comment"># 在--mount最后，还以加上权限。默认是读写权限 readonly是只读权限</span>

<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-P</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> web <span class="token punctuation">\\</span>
    <span class="token comment"># -v /src/webapp:/opt/webapp:ro \\</span>
    <span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,source<span class="token operator">=</span>/src/webapp,target<span class="token operator">=</span>/opt/webapp,readonly <span class="token punctuation">\\</span>
    training/webapp <span class="token punctuation">\\</span>
    python app.py

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看数据卷的具体信息-1" tabindex="-1"><a class="header-anchor" href="#查看数据卷的具体信息-1" aria-hidden="true">#</a> 查看数据卷的具体信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> inspect web
<span class="token comment"># 挂载主机目录的配置信息在Mounts下面</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以挂载本地主机文件作为数据卷</p>`,23),h={href:"https://michaelyou.github.io/2017/09/17/Docker%E6%95%B0%E6%8D%AE%E7%AE%A1%E7%90%86-Volume%EF%BC%8C-bind-mount%E5%92%8Ctmpfs-mount/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/kikajack/article/details/79474286",target:"_blank",rel:"noopener noreferrer"};function _(f,g){const s=o("router-link"),i=o("ExternalLinkIcon");return t(),d("div",null,[m,r(" [toc] "),n("nav",v,[n("ul",null,[n("li",null,[a(s,{to:"#数据卷"},{default:l(()=>[e("数据卷")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#创建数据卷"},{default:l(()=>[e("创建数据卷")]),_:1})]),n("li",null,[a(s,{to:"#启动一个挂载数据卷的容器"},{default:l(()=>[e("启动一个挂载数据卷的容器")]),_:1})]),n("li",null,[a(s,{to:"#查看数据卷的具体信息"},{default:l(()=>[e("查看数据卷的具体信息")]),_:1})]),n("li",null,[a(s,{to:"#删除数据卷"},{default:l(()=>[e("删除数据卷")]),_:1})])])]),n("li",null,[a(s,{to:"#挂载主机目录"},{default:l(()=>[e("挂载主机目录")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#挂载一个主机目录作为数据卷"},{default:l(()=>[e("挂载一个主机目录作为数据卷")]),_:1})]),n("li",null,[a(s,{to:"#查看数据卷的具体信息-1"},{default:l(()=>[e("查看数据卷的具体信息")]),_:1})])])])])]),b,n("blockquote",null,[n("p",null,[e("参考文献： "),n("a",h,[e("https://michaelyou.github.io/2017/09/17/Docker数据管理-Volume，-bind-mount和tmpfs-mount/"),a(i)]),n("a",k,[e("https://blog.csdn.net/kikajack/article/details/79474286"),a(i)])])])])}const w=c(u,[["render",_],["__file","Docker系列学习-13.数据管理.html.vue"]]);export{w as default};
