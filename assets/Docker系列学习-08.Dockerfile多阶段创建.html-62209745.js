import{_ as l,r as c,o,c as t,b as n,e,w as i,d as a,f as p}from"./app-55c326ac.js";const d={},u=n("h1",{id:"_08-dockerfile多阶段创建",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_08-dockerfile多阶段创建","aria-hidden":"true"},"#"),a(" 08. Dockerfile多阶段创建")],-1),r={class:"table-of-contents"},v=p(`<h2 id="多阶段构建" tabindex="-1"><a class="header-anchor" href="#多阶段构建" aria-hidden="true">#</a> 多阶段构建</h2><hr><p><strong>之前的做法</strong> 在Docker 17.05之前，构建Docker镜像，通常采用两种方式：</p><ul><li>全部放入一个 Dockerfile</li><li>分散到多个 Dockerfile</li></ul><h4 id="全部放入一个dockerfile" tabindex="-1"><a class="header-anchor" href="#全部放入一个dockerfile" aria-hidden="true">#</a> 全部放入一个Dockerfile</h4><p>将所有的构建过程包含在一个Dockerfile中，带来的问题：</p><ul><li>镜像层次多，镜像体积较大，部署时间变长</li><li>源代码存在泄露的风险</li></ul><p>For example：<br> 编写app.go文件，程序输出Hello world！</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写<code>Dockerfile.one</code>文件</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>FROM golang<span class="token punctuation">:</span>1.9<span class="token punctuation">-</span>alpine
RUN apk <span class="token punctuation">-</span><span class="token punctuation">-</span>no<span class="token punctuation">-</span>cache add git ca<span class="token punctuation">-</span>certificates
WORKDIR /go/src/github.com/go/helloworld
COPY app.go .
RUN go get <span class="token punctuation">-</span>d <span class="token punctuation">-</span>v github.com/go<span class="token punctuation">-</span>sql<span class="token punctuation">-</span>driver/mysql \\
    <span class="token important">&amp;&amp;</span> CGO_ENABLED=0 GOOS=linux go build <span class="token punctuation">-</span>a <span class="token punctuation">-</span>installsuffix cgo <span class="token punctuation">-</span>o app . \\
    <span class="token important">&amp;&amp;</span> cp /go/src/github.com/go/helloworld/app /root
    
WORKDIR /root/
CMD <span class="token punctuation">[</span><span class="token string">&quot;./app&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> go/helloword:1 <span class="token parameter variable">-f</span> Dockerfile.one <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="分散到多个dockerfile" tabindex="-1"><a class="header-anchor" href="#分散到多个dockerfile" aria-hidden="true">#</a> 分散到多个Dockerfile</h4><p>另一种方式，就是我们事先在一个 Dockerfile 将项目及其依赖库编译测试打包好后，再将其拷贝到运行环境中，这种方式需要我们编写两个 Dockerfile 和一些编译脚本才能将其两个阶段自动整合起来，这种方式虽然可以很好地规避第一种方式存在的风险，但明显<strong>部署过程较复杂</strong>。</p><p>例如，编写 Dockerfile.build 文件</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>FROM golang<span class="token punctuation">:</span>1.9<span class="token punctuation">-</span>alpine

RUN apk <span class="token punctuation">-</span><span class="token punctuation">-</span>no<span class="token punctuation">-</span>cache add git

WORKDIR /go/src/github.com/go/helloworld

COPY app.go .

RUN go get <span class="token punctuation">-</span>d <span class="token punctuation">-</span>v github.com/go<span class="token punctuation">-</span>sql<span class="token punctuation">-</span>driver/mysql \\
  <span class="token important">&amp;&amp;</span> CGO_ENABLED=0 GOOS=linux go build <span class="token punctuation">-</span>a <span class="token punctuation">-</span>installsuffix cgo <span class="token punctuation">-</span>o app .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写 Dockerfile.copy 文件</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>FROM alpine<span class="token punctuation">:</span>latest

RUN apk <span class="token punctuation">-</span><span class="token punctuation">-</span>no<span class="token punctuation">-</span>cache add ca<span class="token punctuation">-</span>certificates

WORKDIR /root/

COPY app .

CMD <span class="token punctuation">[</span><span class="token string">&quot;./app&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建 build.sh</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token builtin class-name">echo</span> Building go/helloworld:build

<span class="token function">docker</span> build <span class="token parameter variable">-t</span> go/helloworld:build <span class="token builtin class-name">.</span> <span class="token parameter variable">-f</span> Dockerfile.build

<span class="token function">docker</span> create <span class="token parameter variable">--name</span> extract go/helloworld:build
<span class="token function">docker</span> <span class="token function">cp</span> extract:/go/src/github.com/go/helloworld/app ./app
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> extract

<span class="token builtin class-name">echo</span> Building go/helloworld:2

<span class="token function">docker</span> build --no-cache <span class="token parameter variable">-t</span> go/helloworld:2 <span class="token builtin class-name">.</span> <span class="token parameter variable">-f</span> Dockerfile.copy
<span class="token function">rm</span> ./app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在运行脚本即可构建镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x build.sh

./build.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对比两种方式生成的镜像大小</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> image <span class="token function">ls</span>

REPOSITORY      TAG    IMAGE ID        CREATED         SIZE
go/helloworld   <span class="token number">2</span>      f7cf3465432c    <span class="token number">22</span> seconds ago  <span class="token number">6</span>.47MB
go/helloworld   <span class="token number">1</span>      f55d3e16affc    <span class="token number">2</span> minutes ago   295MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>过程比较复杂，比较饶</strong></p><hr><h3 id="使用多阶段构建" tabindex="-1"><a class="header-anchor" href="#使用多阶段构建" aria-hidden="true">#</a> 使用多阶段构建</h3><p>用多阶段构建，只需要编写一个Dockerfile</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>FROM golang<span class="token punctuation">:</span>1.9<span class="token punctuation">-</span>alpine as builder

RUN apk <span class="token punctuation">-</span><span class="token punctuation">-</span>no<span class="token punctuation">-</span>cache add git

WORKDIR /go/src/github.com/go/helloworld/

RUN go get <span class="token punctuation">-</span>d <span class="token punctuation">-</span>v github.com/go<span class="token punctuation">-</span>sql<span class="token punctuation">-</span>driver/mysql

COPY app.go .

RUN CGO_ENABLED=0 GOOS=linux go build <span class="token punctuation">-</span>a <span class="token punctuation">-</span>installsuffix cgo <span class="token punctuation">-</span>o app .

FROM alpine<span class="token punctuation">:</span>latest as prod

RUN apk <span class="token punctuation">-</span><span class="token punctuation">-</span>no<span class="token punctuation">-</span>cache add ca<span class="token punctuation">-</span>certificates

WORKDIR /root/

COPY <span class="token punctuation">-</span><span class="token punctuation">-</span>from=0 /go/src/github.com/go/helloworld/app .

CMD <span class="token punctuation">[</span><span class="token string">&quot;./app&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> go/helloworld:3 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对比三个镜像大小</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> image <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="只构建某一阶段的镜像" tabindex="-1"><a class="header-anchor" href="#只构建某一阶段的镜像" aria-hidden="true">#</a> 只构建某一阶段的镜像</h4><p>可以是用<code>as</code>来为某一阶段命名</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>FROM golang<span class="token punctuation">:</span>1.0<span class="token punctuation">-</span>alpine ad builder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当只想构建builder阶段的镜像时，增加<code>--target=builder</code>参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">--target</span> builder <span class="token parameter variable">-t</span> username/imagename:tag <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="构建时从其他镜像复制文件" tabindex="-1"><a class="header-anchor" href="#构建时从其他镜像复制文件" aria-hidden="true">#</a> 构建时从其他镜像复制文件</h4><p>上面使用<code>COPY --from=0 /go/src/github.com/go/helloworld/app .</code> 从上一阶段的镜像中复制文件，<code>--from=0</code>表示对是从上一个阶段镜像。。<br> 也可以复制任意镜像中的文件</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>COPY <span class="token punctuation">-</span><span class="token punctuation">-</span>from=nginx<span class="token punctuation">:</span>latest /etc/nginx/nginx.conf /nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,42);function m(b,k){const s=c("router-link");return o(),t("div",null,[u,n("nav",r,[n("ul",null,[n("li",null,[e(s,{to:"#多阶段构建"},{default:i(()=>[a("多阶段构建")]),_:1}),n("ul",null,[n("li",null,[e(s,{to:"#使用多阶段构建"},{default:i(()=>[a("使用多阶段构建")]),_:1})])])])])]),v])}const h=l(d,[["render",m],["__file","Docker系列学习-08.Dockerfile多阶段创建.html.vue"]]);export{h as default};
