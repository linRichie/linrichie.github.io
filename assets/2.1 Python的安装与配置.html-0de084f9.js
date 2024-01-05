import{_ as n,o as a,c as s,f as e}from"./app-55c326ac.js";const i={},l=e(`<ul><li><a href="#21-python%E7%9A%84%E5%AE%89%E8%A3%85%E4%B8%8E%E9%85%8D%E7%BD%AE">2.1 Python的安装与配置</a><ul><li><a href="#211-%E5%AE%89%E8%A3%85">2.1.1 安装</a><ul><li><a href="#linux%E5%AE%89%E8%A3%85">Linux安装</a></li><li><a href="#windows%E5%AE%89%E8%A3%85">windows安装</a></li></ul></li><li><a href="#212-python%E5%8C%85%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7">2.1.2 Python包管理工具</a></li></ul></li></ul><h1 id="_2-1-python的安装与配置" tabindex="-1"><a class="header-anchor" href="#_2-1-python的安装与配置" aria-hidden="true">#</a> 2.1 Python的安装与配置</h1><h2 id="_2-1-1-安装" tabindex="-1"><a class="header-anchor" href="#_2-1-1-安装" aria-hidden="true">#</a> 2.1.1 安装</h2><h3 id="linux安装" tabindex="-1"><a class="header-anchor" href="#linux安装" aria-hidden="true">#</a> Linux安装</h3><h3 id="windows安装" tabindex="-1"><a class="header-anchor" href="#windows安装" aria-hidden="true">#</a> windows安装</h3><p>下载包，然后一步一步安装即可 安装完成后在终端输入：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python3 <span class="token parameter variable">-V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-1-2-python包管理工具" tabindex="-1"><a class="header-anchor" href="#_2-1-2-python包管理工具" aria-hidden="true">#</a> 2.1.2 Python包管理工具</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 升级pip</span>
python3 <span class="token parameter variable">-m</span> pip <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> pip

<span class="token comment"># 配置pip</span>
pip3 config <span class="token builtin class-name">set</span> global.index-url http://pypi.douban.com/simple/
pip3 config <span class="token builtin class-name">set</span> global.trusted-host pypi.tuna.tsinghua.edu.cn

<span class="token comment"># 查看配置信息</span>
pip3 config list

<span class="token comment"># 安装包</span>
pip3 <span class="token function">install</span> <span class="token operator">&lt;</span>package-name<span class="token operator">&gt;</span>

<span class="token comment"># 升级包</span>
pip3 <span class="token function">install</span> <span class="token parameter variable">-U</span> <span class="token operator">&lt;</span>package-name<span class="token operator">&gt;</span>
<span class="token comment"># 或者</span>
pip3 <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> <span class="token operator">&lt;</span>package-name<span class="token operator">&gt;</span>

<span class="token comment"># 卸载包</span>
pip3 uninstall <span class="token operator">&lt;</span>package-name<span class="token operator">&gt;</span>

<span class="token comment"># 指定源安装</span>
pip3 <span class="token function">install</span> <span class="token operator">&lt;</span>package-name<span class="token operator">&gt;</span> <span class="token parameter variable">-i</span> http://pypi.douban.com/simple/ --trusted-host pypi.douban.com

<span class="token comment"># 列出安装包</span>
pip3 list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),t=[l];function p(o,c){return a(),s("div",null,t)}const d=n(i,[["render",p],["__file","2.1 Python的安装与配置.html.vue"]]);export{d as default};
