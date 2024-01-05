import{_ as p,r as o,o as i,c,b as n,e as t,w as e,d as s,f as l}from"./app-55c326ac.js";const u={},r=n("h1",{id:"python-读取目录下的所有内容",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#python-读取目录下的所有内容","aria-hidden":"true"},"#"),s(" Python: 读取目录下的所有内容")],-1),d={class:"table-of-contents"},k=l(`<h2 id="目录读取" tabindex="-1"><a class="header-anchor" href="#目录读取" aria-hidden="true">#</a> 目录读取</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
1.读取指定目录下的所有文件
2.读取指定文件，输出文件内容
3.创建一个文件并保存到指定目录
&quot;&quot;&quot;</span>

<span class="token keyword">import</span> os
<span class="token comment">#遍历指定目录，显示目录下的所有文件名</span>
<span class="token keyword">def</span> <span class="token function">eachfile</span><span class="token punctuation">(</span>filepath<span class="token punctuation">)</span><span class="token punctuation">:</span>
    pathDir <span class="token operator">=</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>filepath<span class="token punctuation">)</span>
    <span class="token keyword">for</span> allDer <span class="token keyword">in</span> pathDir
        child <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">&#39;%s%s&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>filepath<span class="token punctuation">,</span>allDir<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;gbk&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        
<span class="token comment">#读取文件内容并打印</span>
<span class="token keyword">def</span> <span class="token function">readFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
    fopen<span class="token operator">=</span><span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> eachline <span class="token keyword">in</span> fopen<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;读取内容如下&#39;</span>，eachline<span class="token punctuation">)</span>
    fopen<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
<span class="token comment">#读取多行文字，写入指定文件并保存到指定文件夹</span>
<span class="token keyword">def</span> <span class="token function">writefile</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
    dopen<span class="token operator">=</span><span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span><span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;\\r 请输入多行文字，输入。回车保存&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        aline <span class="token operator">=</span> <span class="token builtin">raw_input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> alinen <span class="token operator">!=</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">:</span>
            fopen<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39;%s%s&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>aline<span class="token punctuation">,</span>os<span class="token punctuation">.</span>linesep<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;文件已保存&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span>
    fopen<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
<span class="token keyword">if</span> __name__<span class="token operator">=</span><span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    filePath<span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    filePathI<span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    filePathC<span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    eachfile<span class="token punctuation">(</span>filePathC<span class="token punctuation">)</span>
    readpath<span class="token punctuation">(</span>filePath<span class="token punctuation">)</span>
    writefile<span class="token punctuation">(</span>filePathI<span class="token punctuation">)</span>
    
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_99乘法表" tabindex="-1"><a class="header-anchor" href="#_99乘法表" aria-hidden="true">#</a> 99乘法表</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> j i rang<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;{}*{}={}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span>i<span class="token punctuation">,</span>i<span class="token operator">*</span>j<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function v(m,b){const a=o("router-link");return i(),c("div",null,[r,n("nav",d,[n("ul",null,[n("li",null,[t(a,{to:"#目录读取"},{default:e(()=>[s("目录读取")]),_:1})]),n("li",null,[t(a,{to:"#_99乘法表"},{default:e(()=>[s("99乘法表")]),_:1})])])]),k])}const f=p(u,[["render",v],["__file","Python-读取目录下的所有内容.html.vue"]]);export{f as default};
