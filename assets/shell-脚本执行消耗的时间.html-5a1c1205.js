import{_ as s,o as n,c as a,f as e}from"./app-55c326ac.js";const l={},i=e(`<h1 id="shell-脚本执行消耗的时间" tabindex="-1"><a class="header-anchor" href="#shell-脚本执行消耗的时间" aria-hidden="true">#</a> shell: 脚本执行消耗的时间</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/sbin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入需要执行的脚本：&quot;</span> shname

<span class="token assign-left variable">begin_time</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%s<span class="token variable">)</span></span>

<span class="token function">sh</span> <span class="token variable">$shname</span>

<span class="token assign-left variable">end_time</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%s<span class="token variable">)</span></span>
<span class="token assign-left variable">cost_time</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>end_time <span class="token operator">-</span> begin_time<span class="token variable">))</span></span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;执行脚本所花费的时间：<span class="token entity" title="\\033">\\033</span>[1m;32;40m<span class="token variable">$cost_time</span><span class="token entity" title="\\033">\\033</span>[0m 秒&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[i];function c(p,o){return n(),a("div",null,t)}const d=s(l,[["render",c],["__file","shell-脚本执行消耗的时间.html.vue"]]);export{d as default};
