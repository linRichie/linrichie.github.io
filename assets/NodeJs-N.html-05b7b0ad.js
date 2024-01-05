import{_ as d,r as l,o,c,b as e,d as n,e as a,f as i}from"./app-55c326ac.js";const r={},t=i('<h1 id="node-js版本管理工具-n" tabindex="-1"><a class="header-anchor" href="#node-js版本管理工具-n" aria-hidden="true">#</a> Node.js版本管理工具 n</h1><h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3><ul><li><code>Node.js</code> 对于现在的前端开发人员来说是不可或缺的需要掌握的技能，但我们在使用时避免不了会需要切换不同的 <code>Node.js</code> 的版本来使用不同版本的特性，例如：稳定版本和最新版本（含最新特性的版本）。</li><li>这里我就详细介绍一下如何使用 <code>n</code> 管理 <code>Node.js</code> 的版本。</li></ul><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>',4),p={href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fn%23installation",title:"https://www.npmjs.com/package/n#installation",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"Brew",-1),v={href:"https://link.juejin.cn/?target=https%3A%2F%2Fbrew.sh%2F",title:"https://link.juejin.cn/?target=https%3A%2F%2Fbrew.sh%2F",target:"_blank",rel:"noopener noreferrer"},h=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用 npm / yarn</span>
<span class="token function">npm</span> i <span class="token parameter variable">-g</span> n
<span class="token function">yarn</span> global <span class="token function">add</span> n

<span class="token comment"># 使用 brew</span>
brew <span class="token function">install</span> n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命令详解" tabindex="-1"><a class="header-anchor" href="#命令详解" aria-hidden="true">#</a> 命令详解</h3><h4 id="版本查看" tabindex="-1"><a class="header-anchor" href="#版本查看" aria-hidden="true">#</a> 版本查看</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看 n 版本</span>
n --version/-V

<span class="token comment"># 查看 node 本地当前使用版本</span>
<span class="token function">node</span> --version/-v

<span class="token comment"># 查看 node 远程版本</span>
n lsr/ls-remote <span class="token punctuation">[</span>--all<span class="token punctuation">]</span> // 默认20个，--all展示所有

<span class="token comment"># 查看 n 管理的 node 版本</span>
n <span class="token punctuation">[</span>ls/list/--all<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装-node-js" tabindex="-1"><a class="header-anchor" href="#安装-node-js" aria-hidden="true">#</a> 安装 <code>Node.js</code></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装指定版本</span>
n <span class="token punctuation">[</span>install/i<span class="token punctuation">]</span> <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>

<span class="token comment"># 安装稳定版本</span>
n lts/stable

<span class="token comment"># 安装最新版本</span>
n latest/current

<span class="token comment"># 安装文件中对应 node 版本 [.n-node-version, .node-version, .nvmrc, or package.json]</span>
n auto

<span class="token comment"># 安装 package.json 对应 node 版本</span>
n engine

<span class="token comment"># 通过发布流的代码名 例如[ boron, carbon]</span>
n boron/carbon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="切换-node-js-版本" tabindex="-1"><a class="header-anchor" href="#切换-node-js-版本" aria-hidden="true">#</a> 切换 <code>Node.js</code> 版本</h4><ol><li>查看 <code>n</code> 管理的 <code>Node.js</code> 版本: <code>n ls/list/--all</code>；</li><li>通过上下方向键选择想要切换的版本后点击 <code>Enter</code> 键；</li><li>如果没有，可以通过: <code>n [install/i] &lt;version&gt;</code>，安装成功后会自动切到该版本。</li></ol><h4 id="查看-node-js-版本安装路径" tabindex="-1"><a class="header-anchor" href="#查看-node-js-版本安装路径" aria-hidden="true">#</a> 查看 <code>Node.js</code> 版本安装路径</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>n which/bin <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除-node-js-版本" tabindex="-1"><a class="header-anchor" href="#删除-node-js-版本" aria-hidden="true">#</a> 删除 <code>Node.js</code> 版本</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除当前版本</span>
n uninstall

<span class="token comment"># 删除指定版本</span>
n rm/- <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>

<span class="token comment"># 删除除当前版本之外的所有版本</span>
n prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="执行命令" tabindex="-1"><a class="header-anchor" href="#执行命令" aria-hidden="true">#</a> 执行命令</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用指定 node 版本</span>
n run/use/as <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span> <span class="token punctuation">[</span>args<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

<span class="token comment"># 先下载节点和npm，使用修改过的PATH执行命令</span>
n <span class="token builtin class-name">exec</span> <span class="token operator">&lt;</span>vers<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>cmd<span class="token operator">&gt;</span> <span class="token punctuation">[</span>args<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看帮助" tabindex="-1"><a class="header-anchor" href="#查看帮助" aria-hidden="true">#</a> 查看帮助</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>n help/-h/--help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="args-说明" tabindex="-1"><a class="header-anchor" href="#args-说明" aria-hidden="true">#</a> args 说明</h3><ul><li><code>-h, --help</code>：查看帮助信息；</li><li><code>-p, --preserve</code>：在 <code>Node.js</code> 的安装过程中保留 <code>npm</code> 和 <code>npx</code>；</li><li><code>-q, --quiet</code>：禁用 <code>curl</code> 输出，禁用日志消息处理“<code>auto</code>”和“<code>engine</code>”标签；</li><li><code>-d, --download</code>：仅下载；</li><li><code>-a, --arch</code>：覆盖系统架构；</li><li><code>--all</code>：<code>ls-remote</code> 默认展示 <code>20</code> 条，<code>--all</code> 展示全部；</li><li><code>--insecure</code>：关闭https请求的证书检查(可能需要在代理服务器后面)；</li><li><code>--use-xz/--no-use-xz</code>：覆盖自动检测 <code>xz</code> 支持和启用/禁用使用xz压缩节点下载。</li></ul>`,18);function m(b,k){const s=l("ExternalLinkIcon");return o(),c("div",null,[t,e("ul",null,[e("li",null,[n("官方介绍了几种安装方式，这里我就列两种常用的安装方式，有兴趣了解其他的可以去 "),e("a",p,[n("官方 GitHub"),a(s)]),n(" 上了解更多安装方式。")]),e("li",null,[n("使用 "),u,n(" 安装时，未安装可以参考 "),e("a",v,[n("Brew 官网安装"),a(s)]),n("。")])]),h])}const x=d(r,[["render",m],["__file","NodeJs-N.html.vue"]]);export{x as default};
