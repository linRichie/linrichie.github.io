import{_ as n,o as s,c as a,f as p}from"./app-55c326ac.js";const t={},e=p(`<h1 id="案例研究-文本统计" tabindex="-1"><a class="header-anchor" href="#案例研究-文本统计" aria-hidden="true">#</a> 案例研究：文本统计</h1><h2 id="主要学习内容" tabindex="-1"><a class="header-anchor" href="#主要学习内容" aria-hidden="true">#</a> 主要学习内容</h2><ul><li>问题描述</li><li>保留想要的字母</li><li>使用大型数据文件测试代码</li><li>找出出现次数较多的单词</li><li>将字符串转换成次数字典</li><li>组织在一起</li><li>练习</li><li>最终程序</li></ul><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><ul><li>前面的学习，都是为了演示python的某些功能。</li><li>将小小的代码片段组织成完整的程序是一大步</li><li>要编写规模较大的程序，必须要详细的规划，还需对如何以最佳方式结合使用各项python功能有所了解</li><li>刚开始编写较大的程序时，需要反复试验</li></ul><p><strong>这次学习的目的</strong> ： 能够循序渐进地开发一个较大的python项目。</p><ul><li><p>首先需要对解决的问题进行描述</p></li><li><p>然后创建一个解决问题的Python程序</p></li><li><p>并对其进行测试</p></li><li><p>通过编写程序，逐渐学会合并使用各种技术的最佳方法，并了解那些解决方法通常对解决那些问题比较有效</p></li></ul><h2 id="_1-问题描述" tabindex="-1"><a class="header-anchor" href="#_1-问题描述" aria-hidden="true">#</a> 1.问题描述</h2><ul><li><p>当需要解决重要的问题，进行编写程序时，可能不知道从何处下手</p></li><li><p>从笼统的角度说就是：</p><ul><li>编写大型程序时。得先明白要解决的问题</li></ul></li><li><p>未能正确认识要解决的问题，是极其常见的编程错误。</p></li><li><p>有时编程难，是因为没有真正明白自己需要做什么</p></li></ul><h4 id="这次学习要解决的问题" tabindex="-1"><a class="header-anchor" href="#这次学习要解决的问题" aria-hidden="true">#</a> 这次学习要解决的问题</h4><ul><li>计算并打印有关文本文件内容的统计数据</li><li>知道给定文本文件包含多少个字符、行、单词</li><li>还需要知道文件中出现次数最多的前10个单词，并按出现的次数进行排序</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># A long time ago,in a galaxy far,far away...</span>
<span class="token comment"># 上面的文字，包含</span>
<span class="token comment"># 一行文本，假定换行符为 \\n 被用于标识行尾，且不为空的文本文件至少包含一行</span>
<span class="token comment"># 46个字符，包括空格和标点在内</span>
<span class="token comment"># 总共10个单词，</span>

s <span class="token operator">=</span> <span class="token string">&#39;A long time ago,in a galaxy far, far away ...&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## split() 函数：以空格为分隔符，并返回对象 s 的所有字符串（以空格隔开）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>45
[&#39;A&#39;, &#39;long&#39;, &#39;time&#39;, &#39;ago,in&#39;, &#39;a&#39;, &#39;galaxy&#39;, &#39;far,&#39;, &#39;far&#39;, &#39;away&#39;, &#39;...&#39;]
</code></pre><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 前面的实例进行修改</span>
t <span class="token operator">=</span> <span class="token string">&#39;a long time ago in a galaxy far far away&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>[&#39;a&#39;, &#39;long&#39;, &#39;time&#39;, &#39;ago&#39;, &#39;in&#39;, &#39;a&#39;, &#39;galaxy&#39;, &#39;far&#39;, &#39;far&#39;, &#39;away&#39;]
10
</code></pre><ul><li>删除非字母字符存在一些缺点</li><li>1.字符数不对，因为有些字符被删除，但可以在修改前计算字符数</li><li>2.有些单词，没有将其标点符号删除的好方法 <ul><li>比如：I&#39;d中的撇号。如果删除（并将I转换成小写），结果为id，与原来的单词不同</li><li>将撇号替换成空格，结果将变为 I 和 d 两个单词</li><li>为解决上面的问题，我们将撇号（还有连字符）视为字母</li></ul></li><li>3.有些名字的首字母小写后，将变成单词。 <ul><li>如Polish(polish) 和Bonnie(bonnie).</li><li>这个看起来并非大问题</li></ul></li></ul><h2 id="_2-保留想要的字母" tabindex="-1"><a class="header-anchor" href="#_2-保留想要的字母" aria-hidden="true">#</a> 2.保留想要的字母</h2><ul><li>考虑如何自动将字符串转换成所需的格式。</li><li>将字符串中的大写替换成小写 使用： lower()函数</li><li>删除不想要的字符。 <ul><li>可以使用字符串函数 replace 将不要的字符串替换成空字符 <ul><li>缺点：需要调用replace很多从。每种不需要的字符就需要调用一次。相比保留的字符，要删除的字符太多。导致效率低下</li></ul></li><li>使用正则表达式</li></ul></li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 将字符串替换成小写</span>
s <span class="token operator">=</span> <span class="token string">&quot;I&#39;d like a copy!&quot;</span>
b <span class="token operator">=</span> s<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token comment"># lower() 函数： 将字符串中的大写变成小写</span>

<span class="token comment"># 删除不要的字符串</span>
<span class="token comment"># 1. 使用 replace()函数</span>
s <span class="token operator">=</span> <span class="token string">&quot;I&#39;d like a copy!&quot;</span>
c <span class="token operator">=</span> s<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;!&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span> <span class="token operator">*</span> <span class="token number">30</span><span class="token punctuation">)</span>
<span class="token comment"># 2.使用正则表达式</span>

<span class="token comment"># 包含所有想要保留的字符的集合</span>
keep <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span>
       <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;g&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;h&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;i&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;j&#39;</span><span class="token punctuation">,</span>
       <span class="token string">&#39;k&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;l&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;m&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;n&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;o&#39;</span><span class="token punctuation">,</span>
       <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;q&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;s&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;t&#39;</span><span class="token punctuation">,</span>
       <span class="token string">&#39;u&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;v&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;y&#39;</span><span class="token punctuation">,</span>
       <span class="token string">&#39;z&#39;</span><span class="token punctuation">,</span><span class="token string">&#39; &#39;</span><span class="token punctuation">,</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">,</span><span class="token string">&quot;&#39;&#39;&quot;</span><span class="token punctuation">}</span>

<span class="token keyword">def</span>  <span class="token function">normalize</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;
    Convert s to a normalized string.
    &#39;&#39;&#39;</span>
    result <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">for</span> c <span class="token keyword">in</span> s<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> c <span class="token keyword">in</span> keep<span class="token punctuation">:</span>
            result <span class="token operator">+=</span> c
    <span class="token keyword">return</span> result

<span class="token keyword">print</span><span class="token punctuation">(</span>normalize<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 这个函数以每次一个字符的方式遍历字符串s，仅当字符串包含在要保留的字符集合中，才将其附加到result末尾</span>

<span class="token comment"># 函数normalize 的另一个版本</span>
<span class="token keyword">def</span> <span class="token function">normalize</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;
    Convert s to a normalized string.
    &#39;&#39;&#39;</span>
    <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>c <span class="token keyword">for</span> c <span class="token keyword">in</span> s<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">if</span> c <span class="token keyword">in</span> keep<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>normalize<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>i&#39;d like a copy!
I&#39;d like a copy
******************************
id like a copy
id like a copy
</code></pre><h2 id="_3-使用大型数据文件测试代码" tabindex="-1"><a class="header-anchor" href="#_3-使用大型数据文件测试代码" aria-hidden="true">#</a> 3.使用大型数据文件测试代码</h2><ul><li>要处理文本文件，方法之一是将整个文件作为一个字符串读取到内存中</li></ul>`,22),i=[e];function l(o,c){return s(),a("div",null,i)}const r=n(t,[["render",l],["__file","案例研究-文本统计.html.vue"]]);export{r as default};
