import{_ as c,r as l,o as d,c as o,b as n,e as a,w as i,d as e,f as t}from"./app-55c326ac.js";const r={},m=n("h1",{id:"_04-利用commit理解镜像构成",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_04-利用commit理解镜像构成","aria-hidden":"true"},"#"),e(" 04. 利用commit理解镜像构成")],-1),p={class:"table-of-contents"},v=t(`<h2 id="镜像构成" tabindex="-1"><a class="header-anchor" href="#镜像构成" aria-hidden="true">#</a> 镜像构成</h2><p>docker commit命令除了学习之外，还有一些特殊的应用场合，比如被入侵后保存现场等。但是，不要使用docker commit定制镜像，定制镜像应该使用Dockerfile来完成。<br> 镜像是容器的基础，每次执行docker run的时候都会制定那个镜像作为容器运行的基础。之前，一直使用的都是来自Dokcer Hub的镜像。直接使用这些镜像是可以满足一定的需求，而当这些镜像无法直接满足需求时，就需要定制镜像。<br> 镜像是多层存储，每一层是在前一层的基础上进行的修改；而容器同样也是多层存储，是在以镜像为基础层，在其基础上加一层作为容器运行时的存储层。<br> 比如：定制一个web服务器，来说明镜像是如何构建</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> webserver <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 nginx
<span class="token comment"># 这条命令会用nginx镜像启动一个容器，这个容器命名为webserver，并且映射了80端口，这样就可以用浏览器访问这个nginx服务器。</span>
<span class="token comment"># 当没有这个nginx镜像的时候，会自动到Docker Hub官网进行一个下载</span>
<span class="token function">docker</span> container <span class="token function">ls</span>     <span class="token comment">#查看正在运行的容器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是在linux本机运行Docker，那么可以直接访问<code>http://localhost</code>；如果使用的是Docker Toolbox或者是在虚拟机、云服务器上安装<code>Docker</code>,则需要将<code>localhost</code>换成<code>虚拟机地址</code>或者<code>实际云服务器地址</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>用浏览器浏览 http://IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当我们想讲首页的内容进行改变的时候，就可以使用<code>docker exec</code>命令进入容器，修改内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> webserver <span class="token function">bash</span>
<span class="token comment"># -it 两个参数，-i:交互操作  -t：显示终端  bash：是进入bash操作界面，所以是需要终端的</span>

<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> webserver <span class="token function">bash</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;&lt;h1&gt;Welcome you come in my wanglh&lt;/h1&gt;&#39;</span> <span class="token operator">&gt;</span> /usr/share/nginx/html/index.html            <span class="token comment">#修改主页内容</span>
<span class="token builtin class-name">exit</span>

<span class="token comment">##解释说明：以交互式终端方式进入webserver容器，并执行bash命令，就是获得一个可操作的shell</span>

<span class="token function">docker</span> <span class="token function">diff</span> webserver       <span class="token comment">#查看容器具体的改动详情</span>
    C /run
    A /run/nginx.pid
    C /root
    A /root/.bash_history
    C /usr
    C /usr/share
    C /usr/share/nginx
    C /usr/share/nginx/html
    C /usr/share/nginx/html/index.html
    C /var
    C /var/cache
    C /var/cache/nginx
    A /var/cache/nginx/client_temp
    A /var/cache/nginx/fastcgi_temp
    A /var/cache/nginx/proxy_temp
    A /var/cache/nginx/scgi_temp
    A /var/cache/nginx/uwsgi_temp

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们定制好了变化，我们希望能将其保存下来形成镜像。</p><p>要知道，当我们运行一个容器的时候（如果不使用卷的话），我们做的任何文件修改都会被记录于容器存储层里。而 <code>Docker</code> 提供了一个 <code>docker commit</code> 命令，可以将容器的存储层保存下来成为镜像。换句话说，就是在原有镜像的基础上，再叠加上容器的存储层，并构成新的镜像。以后我们运行这个新镜像的时候，就会拥有原有容器最后的文件变化。 <code>docker commit</code>语法格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker commit [选项] &lt;容器ID或容器名&gt; [&lt;仓库名&gt;[:&lt;标签&gt;]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 用下面的命令将容器保存为镜像</span>
<span class="token function">docker</span> commit <span class="token punctuation">\\</span>
<span class="token parameter variable">--author</span> <span class="token string">&quot;To wanglh &lt;wlh_richard@163.com&gt;&quot;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--message</span> <span class="token string">&quot;修改默认主页内容&quot;</span> <span class="token punctuation">\\</span>
webserver <span class="token punctuation">\\</span>
nginx:v2  <span class="token comment">#回车</span>
sha256:7110fae189729281e7970cbd9abc8af210496325cef87011f4086ea91f693a2f

<span class="token comment">## 说明：--author是指定修改的作者，  --message则是记录本次修改的内容。不过这里的这些信息可以省略留空</span>

<span class="token function">docker</span> image <span class="token function">ls</span> <span class="token comment">#查看镜像，会看到新生成的镜像 nginx:v2</span>

<span class="token function">docker</span> <span class="token function">history</span> nginx:v2 <span class="token comment">#用它可以具体查看镜像内的历史记录</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面，我们就做好了一个新的镜像，接下来可以运行这个镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> web2 <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">81</span>:80 nginx:v2
<span class="token comment">## 说明：命令新的容器为web2.并且将容器的81映射到80端口。访问http://localhost:81，就会看到修改后的webserver一样</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为此，我们完成了定制镜像，使用的是docker commit命令，手动操作给旧的镜像添加了新的一层，形成新的镜像</p><h2 id="慎用-docker-commit" tabindex="-1"><a class="header-anchor" href="#慎用-docker-commit" aria-hidden="true">#</a> 慎用 docker commit</h2><p>使用 <code>docker commit</code> 命令虽然可以比较直观的帮助理解镜像分层存储的概念，但是实际环境中并不会这样使用。</p><p>首先，如果仔细观察之前的 <code>docker diff webserver</code> 的结果，你会发现除了真正想要修改的 <code>/usr/share/nginx/html/index.html</code> 文件外，由于命令的执行，还有很多文件被改动或添加了。这还仅仅是最简单的操作，如果是安装软件包、编译构建，那会有大量的无关内容被添加进来，如果不小心清理，将会导致镜像极为臃肿。</p><p>此外，使用 <code>docker commit</code> 意味着所有对镜像的操作都是黑箱操作，生成的镜像也被称为<code>黑箱镜像</code>，换句话说，就是除了制作镜像的人知道执行过什么命令、怎么生成的镜像，别人根本无从得知。而且，即使是这个制作镜像的人，过一段时间后也无法记清具体在操作的。虽然 <code>docker diff</code> 或许可以告诉得到一些线索，但是远远不到可以确保生成一致镜像的地步。这种黑箱镜像的维护工作是非常痛苦的。</p><p>而且，回顾之前提及的镜像所使用的分层存储的概念，除当前层外，之前的每一层都是不会发生改变的，换句话说，任何修改的结果仅仅是在当前层进行标记、添加、修改，而不会改动上一层。如果使用 <code>docker commit</code> 制作镜像，以及后期修改的话，每一次修改都会让镜像更加臃肿一次，所删除的上一层的东西并不会丢失，会一直如影随形的跟着这个镜像，即使根本无法访问到。这会让镜像更加臃肿。</p>`,19);function u(b,k){const s=l("router-link");return d(),o("div",null,[m,n("nav",p,[n("ul",null,[n("li",null,[a(s,{to:"#镜像构成"},{default:i(()=>[e("镜像构成")]),_:1})]),n("li",null,[a(s,{to:"#慎用-docker-commit"},{default:i(()=>[e("慎用 docker commit")]),_:1})])])]),v])}const g=c(r,[["render",u],["__file","Docker系列学习-04.利用commit理解镜像构成.html.vue"]]);export{g as default};
