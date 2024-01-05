import{_ as e,r as o,o as l,c as i,b as n,e as t,w as p,d as s,f as c}from"./app-55c326ac.js";const u={},r=n("h1",{id:"python-检查url是否能正常访问",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#python-检查url是否能正常访问","aria-hidden":"true"},"#"),s(" Python: 检查URL是否能正常访问")],-1),k={class:"table-of-contents"},d=c(`<h2 id="方法-1" tabindex="-1"><a class="header-anchor" href="#方法-1" aria-hidden="true">#</a> 方法 1</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>strimport urllib<span class="token punctuation">.</span>request
<span class="token keyword">import</span> time

opener<span class="token operator">=</span>urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>build_opener<span class="token punctuation">(</span><span class="token punctuation">)</span>
opener<span class="token punctuation">.</span>addheaders<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;User-agent&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Mozilla/49.0.2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

<span class="token comment">#下面的文件就是放置的所有URL</span>
<span class="token builtin">file</span><span class="token operator">=</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;test.txt&#39;</span><span class="token punctuation">)</span>
lines<span class="token operator">=</span><span class="token builtin">file</span><span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span>
aa<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment"># 下面的循环就是将读取到的URL一条一条的加入到aa数组中</span>
<span class="token keyword">for</span> line <span class="token keyword">in</span> lines<span class="token punctuation">:</span>
    temp<span class="token operator">=</span>line<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>   
    aa<span class="token punctuation">.</span>append<span class="token punctuation">(</span>temp<span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>aa<span class="token punctuation">)</span>

<span class="token operator">//</span><span class="token operator">/</span>
 replace<span class="token punctuation">(</span><span class="token punctuation">)</span>函数的作用：
 把字符串中的old<span class="token punctuation">(</span>旧字符串<span class="token punctuation">)</span>替换成new<span class="token punctuation">(</span>新的字符串<span class="token punctuation">)</span>。
 如果制定第三个参数<span class="token builtin">max</span>，则替换不超过<span class="token builtin">max</span>
 语法<span class="token punctuation">:</span>
     <span class="token builtin">str</span><span class="token punctuation">.</span>relpace<span class="token punctuation">(</span>old<span class="token punctuation">,</span>ner<span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token builtin">max</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
 在上面的例子中 line时获取txt文档里面的URL，通过replace<span class="token punctuation">(</span><span class="token punctuation">)</span>函数
 将存在的<span class="token string">&#39;\\n&#39;</span><span class="token punctuation">(</span>换行符<span class="token punctuation">)</span>替换为<span class="token string">&#39;&#39;</span><span class="token punctuation">(</span>空<span class="token punctuation">)</span>
<span class="token operator">//</span><span class="token operator">/</span>


<span class="token comment">#进行检查</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;开始检查....&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> a <span class="token keyword">in</span> aa<span class="token punctuation">:</span>
    tempUrl<span class="token operator">=</span>a
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        opener<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>tempUrl<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>tempUrl<span class="token operator">+</span><span class="token string">&quot;没问题&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> urllib<span class="token punctuation">.</span>error<span class="token punctuation">.</span>Httperror<span class="token punctuation">:</span>
        <span class="token keyword">print</span> <span class="token punctuation">(</span>tempUrl <span class="token operator">+</span> <span class="token string">&quot;访问页面有问题&quot;</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>        <span class="token comment">#睡2秒</span>
    <span class="token keyword">except</span> urllib<span class="token punctuation">.</span>error<span class="token punctuation">.</span>URLError<span class="token punctuation">:</span>
        <span class="token keyword">print</span> <span class="token punctuation">(</span>tempUrl <span class="token operator">+</span> <span class="token string">&quot;访问页面有问题&quot;</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>        <span class="token comment">#谁2秒 </span>
<span class="token builtin">file</span><span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>           

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法-2" tabindex="-1"><a class="header-anchor" href="#方法-2" aria-hidden="true">#</a> 方法 2</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request
<span class="token keyword">import</span> time

opener<span class="token operator">=</span>urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>build_opener<span class="token punctuation">(</span><span class="token punctuation">)</span>
opener<span class="token punctuation">.</span>addheaders<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;User-agent&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Mozilla/49.0.2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token builtin">file</span><span class="token operator">=</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">r&quot;C:\\Users\\Administrator\\Desktop\\work\\http-code\\yuming\\tx002.txt&quot;</span><span class="token punctuation">)</span>
lines<span class="token operator">=</span><span class="token builtin">file</span><span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#下面的文件就是放置的所有URL</span>
<span class="token keyword">for</span> line <span class="token keyword">in</span> lines<span class="token punctuation">:</span>
    <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;开始检查....&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        opener<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>line<span class="token operator">+</span><span class="token string">&quot;没问题&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> urllib<span class="token punctuation">.</span>error<span class="token punctuation">.</span>HTTPError<span class="token punctuation">:</span>
        <span class="token keyword">print</span> <span class="token punctuation">(</span>line <span class="token operator">+</span> <span class="token string">&quot;访问页面有问题&quot;</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>        <span class="token comment">#睡2秒</span>
    <span class="token keyword">except</span> urllib<span class="token punctuation">.</span>error<span class="token punctuation">.</span>URLError<span class="token punctuation">:</span>
        <span class="token keyword">print</span> <span class="token punctuation">(</span>line <span class="token operator">+</span> <span class="token string">&quot;访问页面有问题&quot;</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>        <span class="token comment">#谁2秒</span>
<span class="token builtin">file</span><span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="python检查网页能否打开" tabindex="-1"><a class="header-anchor" href="#python检查网页能否打开" aria-hidden="true">#</a> python检查网页能否打开</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> urllib<span class="token punctuation">.</span>request <span class="token keyword">import</span> urlopen
url<span class="token operator">=</span><span class="token string">&quot;&quot;</span>
resq<span class="token operator">=</span>urlopen<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
code<span class="token operator">=</span>resq<span class="token punctuation">.</span>getcode<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>url<span class="token punctuation">,</span>code<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function v(m,b){const a=o("router-link");return l(),i("div",null,[r,n("nav",k,[n("ul",null,[n("li",null,[t(a,{to:"#方法-1"},{default:p(()=>[s("方法 1")]),_:1})]),n("li",null,[t(a,{to:"#方法-2"},{default:p(()=>[s("方法 2")]),_:1})]),n("li",null,[t(a,{to:"#python检查网页能否打开"},{default:p(()=>[s("python检查网页能否打开")]),_:1})])])]),d])}const y=e(u,[["render",v],["__file","Python-检查URL是否能正常访问.html.vue"]]);export{y as default};
