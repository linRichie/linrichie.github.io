import{_ as i,r as p,o as l,c as o,b as n,e as t,w as e,d as s,f as c}from"./app-55c326ac.js";const u={},d=n("h1",{id:"python-业务服务监控",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#python-业务服务监控","aria-hidden":"true"},"#"),s(" Python: 业务服务监控")],-1),r={class:"table-of-contents"},k=c(`<ul><li>业务服务监控是运维体系中重要的环节，是保证业务服务质量的关键手段</li><li>python在监控方面提供大量的第三方工具，可以快速有效的开发企业级服务监控平台。</li><li>下面主要涉及文件与目录差异对比方法，HTTP质量监控 邮件告警等</li></ul><h2 id="文件内容差异对比方法" tabindex="-1"><a class="header-anchor" href="#文件内容差异对比方法" aria-hidden="true">#</a> 文件内容差异对比方法</h2><ul><li>通过 <strong>difflib</strong> 模块实现文件内容差异对比，这个模块无需安装，python自带</li><li>作用：对比文本之间的差异，支持输出可读性比较强的HTML文档。</li><li>与linux下的 <strong>diff</strong> 命令相似</li><li>使用 <strong>difflib</strong> 对比代码、配置文件的差别，版本控制方面是非常有用</li></ul><h3 id="比较两个字符串的差异" tabindex="-1"><a class="header-anchor" href="#比较两个字符串的差异" aria-hidden="true">#</a> 比较两个字符串的差异</h3><table><thead><tr><th>符号</th><th>含义</th></tr></thead><tbody><tr><td>&#39;-&#39;</td><td>包含在第一个序列行中，但不包含在第二个序列行</td></tr><tr><td>&#39;+&#39;</td><td>包含在第二个序列行中，但不包含在第一个序列行</td></tr><tr><td>&#39;&#39;</td><td>两个序列行一直</td></tr><tr><td>&#39;?&#39;</td><td>标志两个序列行存在增量差异</td></tr><tr><td>&#39;^&#39;</td><td>标志出两个序列行存在的差异字符</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 比较两个字符串的差异</span>
<span class="token keyword">import</span> difflib
text1 <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;
text1： #定义字符串1
This module provides classes and functions for comparing sequences.
including HTML and context and unified diffs.
difflib document v7.4
add string
&#39;&#39;&#39;</span>
text1_lines <span class="token operator">=</span> text1<span class="token punctuation">.</span>splitlines<span class="token punctuation">(</span><span class="token punctuation">)</span>              <span class="token comment"># 以行进行分隔，以便进行对比</span>

text2 <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;
text2:         # 定义字符串2
This module provides classes and functions for Comparing sequences.
including HTML and context and unified diffs.
difflib document v7.5
&#39;&#39;&#39;</span>
text2_lines <span class="token operator">=</span> text2<span class="token punctuation">.</span>splitlines<span class="token punctuation">(</span><span class="token punctuation">)</span>


d <span class="token operator">=</span> difflib<span class="token punctuation">.</span>Differ<span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment"># 创建Differ()对象</span>
diff <span class="token operator">=</span> d<span class="token punctuation">.</span>compare<span class="token punctuation">(</span>text1_lines<span class="token punctuation">,</span>text2_lines<span class="token punctuation">)</span>      <span class="token comment"># 采用compare方法对字符串进行比较</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>diff<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 本案例采用Diff()类对两个字符串进行比较， </span>
<span class="token comment"># 另外difflib的SequenceMatcher()类支持任意类型序列的比较 </span>
<span class="token comment"># HtmlDiff()类支持将比较结果输出为HTML格式</span>

<span class="token comment">#-----------------------------------------------------------#</span>

<span class="token comment"># 生成美观的对比HTML格式文档</span>
<span class="token keyword">import</span> difflib
text1 <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;
text1： #定义字符串1
This module provides classes and functions for comparing sequences.
including HTML and context and unified diffs.
difflib document v7.4
add string
&#39;&#39;&#39;</span>
text1_lines <span class="token operator">=</span> text1<span class="token punctuation">.</span>splitlines<span class="token punctuation">(</span><span class="token punctuation">)</span>              <span class="token comment"># 以行进行分隔，以便进行对比</span>

text2 <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;
text2:         # 定义字符串2
This module provides classes and functions for Comparing sequences.
including HTML and context and unified diffs.
difflib document v7.5
&#39;&#39;&#39;</span>
text2_lines <span class="token operator">=</span> text2<span class="token punctuation">.</span>splitlines<span class="token punctuation">(</span><span class="token punctuation">)</span>


d <span class="token operator">=</span> difflib<span class="token punctuation">.</span>HtmlDiff<span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment"># 创建Differ()对象</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>make_file<span class="token punctuation">(</span>text1_lines<span class="token punctuation">,</span>text2_lines<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例2-对比nginx配置文件差异" tabindex="-1"><a class="header-anchor" href="#示例2-对比nginx配置文件差异" aria-hidden="true">#</a> 示例2 对比Nginx配置文件差异</h3><ul><li>维护多个Nginx配置，时常需要对比不同版本配置文件的差异。来了解不同版本迭代后的更新项</li><li>实现思路是读取两个需要对比的配置文件</li><li>在以换行符作为分隔符</li><li>调用difflib.HtmlDiff()生成 HTML 格式的差异文档</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 实现案例的代码：</span>
<span class="token keyword">import</span> difflib
<span class="token keyword">import</span> sys

<span class="token keyword">try</span><span class="token punctuation">:</span>
    textfile1 <span class="token operator">=</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>                 <span class="token comment"># 第一个配置文件路径参数</span>
    textfile2 <span class="token operator">=</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>                 <span class="token comment"># 第二个配置文件路径参数</span>
<span class="token keyword">except</span> Exception<span class="token punctuation">,</span>e<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Error:&quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Usage: simple3.py filename1 filename2&quot;</span><span class="token punctuation">)</span>
    sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
<span class="token keyword">def</span> <span class="token function">readline</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">:</span>                     <span class="token comment"># 文件读取分隔函数</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        fileHandle <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span><span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span>
        text <span class="token operator">=</span> fileHandel<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>splitlines<span class="token punctuation">(</span><span class="token punctuation">)</span>             <span class="token comment"># 读取后以行进行分隔</span>
        fileHandle<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> text
    <span class="token keyword">except</span> IOError <span class="token keyword">as</span> error<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Read file Error:&#39;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
        
<span class="token keyword">if</span> textfile<span class="token operator">==</span><span class="token string">&quot;&quot;</span> <span class="token keyword">or</span> textfile2<span class="token operator">==</span><span class="token string">&quot;&quot;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Usage:simple3.py filename1 filename2&#39;</span><span class="token punctuation">)</span>
    sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
text1_lines <span class="token operator">=</span> readfile<span class="token punctuation">(</span>textfile1<span class="token punctuation">)</span>                   <span class="token comment"># 调用readfile函数，获取分割后的字符串</span>
text2_lines <span class="token operator">=</span> readfile<span class="token punctuation">(</span>textfile2<span class="token punctuation">)</span>

d <span class="token operator">=</span> difflib<span class="token punctuation">.</span>HtmlDiff<span class="token punctuation">(</span><span class="token punctuation">)</span>                      <span class="token comment"># 创建HtmlDiff()类对象</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>d<span class="token punctuation">.</span>make_file<span class="token punctuation">(</span>text1_lines<span class="token punctuation">,</span>text2_lines<span class="token punctuation">)</span><span class="token punctuation">)</span>     <span class="token comment"># 通过make_file方法输出HTML格式的比对结果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function v(m,b){const a=p("router-link");return l(),o("div",null,[d,n("nav",r,[n("ul",null,[n("li",null,[t(a,{to:"#文件内容差异对比方法"},{default:e(()=>[s("文件内容差异对比方法")]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#比较两个字符串的差异"},{default:e(()=>[s("比较两个字符串的差异")]),_:1})]),n("li",null,[t(a,{to:"#示例2-对比nginx配置文件差异"},{default:e(()=>[s("示例2 对比Nginx配置文件差异")]),_:1})])])])])]),k])}const x=i(u,[["render",v],["__file","Python-业务服务监控.html.vue"]]);export{x as default};
