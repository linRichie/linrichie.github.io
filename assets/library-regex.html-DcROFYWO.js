import{_ as i,c as o,a as n,b as e,d as t,e as l,f as p,r,o as c}from"./app-BCC5ysrj.js";const d={},u={class:"vuepress-toc"},h={class:"vuepress-toc-item"},m={class:"vuepress-toc-item"},k={class:"vuepress-toc-item"},v={class:"vuepress-toc-item"},b={class:"vuepress-toc-item"},g={class:"vuepress-toc-item"},f={class:"vuepress-toc-item"},y={class:"vuepress-toc-item"},x={class:"vuepress-toc-item"},_={class:"vuepress-toc-item"},w={class:"vuepress-toc-item"},T={class:"vuepress-toc-item"},N={class:"vuepress-toc-item"};function j(q,s){const a=r("router-link");return c(),o("div",null,[s[13]||(s[13]=n("h1",{id:"re-正则表达式库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#re-正则表达式库"},[n("span",null,[n("code",null,"re"),e("：正则表达式库")])])],-1)),n("nav",u,[n("ul",null,[n("li",h,[t(a,{to:"#正则表达式的基本概念"},{default:l(()=>s[0]||(s[0]=[e("正则表达式的基本概念")])),_:1})]),n("li",m,[t(a,{to:"#导入-re-模块"},{default:l(()=>s[1]||(s[1]=[e("导入 re 模块")])),_:1})]),n("li",k,[t(a,{to:"#常用函数"},{default:l(()=>s[2]||(s[2]=[e("常用函数")])),_:1}),n("ul",null,[n("li",v,[t(a,{to:"#re-search"},{default:l(()=>s[3]||(s[3]=[e("re.search()")])),_:1})]),n("li",b,[t(a,{to:"#re-findall"},{default:l(()=>s[4]||(s[4]=[e("re.findall()")])),_:1})]),n("li",g,[t(a,{to:"#re-sub"},{default:l(()=>s[5]||(s[5]=[e("re.sub()")])),_:1})]),n("li",f,[t(a,{to:"#re-split"},{default:l(()=>s[6]||(s[6]=[e("re.split()")])),_:1})])])]),n("li",y,[t(a,{to:"#正则表达式语法"},{default:l(()=>s[7]||(s[7]=[e("正则表达式语法")])),_:1}),n("ul",null,[n("li",x,[t(a,{to:"#字符匹配"},{default:l(()=>s[8]||(s[8]=[e("字符匹配")])),_:1})]),n("li",_,[t(a,{to:"#边界匹配"},{default:l(()=>s[9]||(s[9]=[e("边界匹配")])),_:1})]),n("li",w,[t(a,{to:"#量词"},{default:l(()=>s[10]||(s[10]=[e("量词")])),_:1})]),n("li",T,[t(a,{to:"#分组和引用"},{default:l(()=>s[11]||(s[11]=[e("分组和引用")])),_:1})])])]),n("li",N,[t(a,{to:"#示例代码"},{default:l(()=>s[12]||(s[12]=[e("示例代码")])),_:1})])])]),s[14]||(s[14]=p(`<p>正则表达式（Regular Expression）是一种强大的工具，用于匹配和处理字符串。Python 提供了 <code>re</code> 模块来支持正则表达式的使用。本文将详细介绍 <code>re</code> 模块的功能和用法。</p><h2 id="正则表达式的基本概念" tabindex="-1"><a class="header-anchor" href="#正则表达式的基本概念"><span>正则表达式的基本概念</span></a></h2><p>正则表达式是一种模式，用于描述字符组合。它可以用于搜索、编辑或处理文本。常见的应用包括文本搜索、替换、验证输入等。</p><h2 id="导入-re-模块" tabindex="-1"><a class="header-anchor" href="#导入-re-模块"><span>导入 <code>re</code> 模块</span></a></h2><p>在使用正则表达式之前，需要导入 <code>re</code> 模块：</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> re</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="常用函数" tabindex="-1"><a class="header-anchor" href="#常用函数"><span>常用函数</span></a></h2><h3 id="re-search" tabindex="-1"><a class="header-anchor" href="#re-search"><span><code>re.search()</code></span></a></h3><p>在字符串中搜索正则表达式模式，返回第一个匹配对象。如果没有匹配，则返回 <code>None</code>。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> re</span>
<span class="line"></span>
<span class="line">pattern <span class="token operator">=</span> <span class="token string">&#39;cat&#39;</span></span>
<span class="line">string <span class="token operator">=</span> <span class="token string">&#39;The cat is on the roof.&#39;</span></span>
<span class="line"><span class="token keyword">match</span> <span class="token operator">=</span> re<span class="token punctuation">.</span>search<span class="token punctuation">(</span>pattern<span class="token punctuation">,</span> string<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token keyword">match</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Found:&quot;</span><span class="token punctuation">,</span> <span class="token keyword">match</span><span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="re-findall" tabindex="-1"><a class="header-anchor" href="#re-findall"><span><code>re.findall()</code></span></a></h3><p>返回字符串中所有与正则表达式模式匹配的非重叠项。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">r&#39;\\b\\w{3}\\b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;The cat is on the roof.&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>matches<span class="token punctuation">)</span>  <span class="token comment"># 输出: [&#39;The&#39;, &#39;cat&#39;, &#39;the&#39;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="re-sub" tabindex="-1"><a class="header-anchor" href="#re-sub"><span><code>re.sub()</code></span></a></h3><p>替换字符串中与正则表达式模式匹配的部分。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">result <span class="token operator">=</span> re<span class="token punctuation">.</span>sub<span class="token punctuation">(</span><span class="token string">r&#39;cat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dog&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;The cat is on the roof.&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>  <span class="token comment"># 输出: &#39;The dog is on the roof.&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="re-split" tabindex="-1"><a class="header-anchor" href="#re-split"><span><code>re.split()</code></span></a></h3><p>根据正则表达式模式分割字符串。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">parts <span class="token operator">=</span> re<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">r&#39;\\s+&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;The cat is on the roof.&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>parts<span class="token punctuation">)</span>  <span class="token comment"># 输出: [&#39;The&#39;, &#39;cat&#39;, &#39;is&#39;, &#39;on&#39;, &#39;the&#39;, &#39;roof.&#39;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="正则表达式语法" tabindex="-1"><a class="header-anchor" href="#正则表达式语法"><span>正则表达式语法</span></a></h2><h3 id="字符匹配" tabindex="-1"><a class="header-anchor" href="#字符匹配"><span>字符匹配</span></a></h3><ul><li><code>.</code> 匹配除换行符以外的任意字符。</li><li><code>\\d</code> 匹配任何数字，等价于 <code>[0-9]</code>。</li><li><code>\\D</code> 匹配任何非数字字符。</li><li><code>\\s</code> 匹配任何空白字符，包括空格、制表符、换页符等。</li><li><code>\\S</code> 匹配任何非空白字符。</li><li><code>\\w</code> 匹配任何字母数字字符，包括下划线，等价于 <code>[a-zA-Z0-9_]</code>。</li><li><code>\\W</code> 匹配任何非字母数字字符。</li></ul><h3 id="边界匹配" tabindex="-1"><a class="header-anchor" href="#边界匹配"><span>边界匹配</span></a></h3><ul><li><code>^</code> 匹配字符串的开头。</li><li><code>$</code> 匹配字符串的结尾。</li><li><code>\\b</code> 匹配一个单词边界。</li><li><code>\\B</code> 匹配非单词边界。</li></ul><h3 id="量词" tabindex="-1"><a class="header-anchor" href="#量词"><span>量词</span></a></h3><ul><li><code>*</code> 匹配前面的子表达式零次或多次。</li><li><code>+</code> 匹配前面的子表达式一次或多次。</li><li><code>?</code> 匹配前面的子表达式零次或一次。</li><li><code>{n}</code> 匹配前面的子表达式恰好 n 次。</li><li><code>{n,}</code> 匹配前面的子表达式至少 n 次。</li><li><code>{n,m}</code> 匹配前面的子表达式至少 n 次，至多 m 次。</li></ul><h3 id="分组和引用" tabindex="-1"><a class="header-anchor" href="#分组和引用"><span>分组和引用</span></a></h3><ul><li><code>()</code> 用于分组。</li><li><code>(?P&lt;name&gt;...)</code> 命名分组。</li><li><code>\\1</code>, <code>\\2</code>, ... 引用分组。</li></ul><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h2><p>以下是一个使用正则表达式的示例，演示如何提取电子邮件地址：</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> re</span>
<span class="line"></span>
<span class="line">text <span class="token operator">=</span> <span class="token string">&quot;Please contact us at support@example.com for further information.&quot;</span></span>
<span class="line">pattern <span class="token operator">=</span> <span class="token string">r&#39;[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}&#39;</span></span>
<span class="line">emails <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>pattern<span class="token punctuation">,</span> text<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Emails found:&quot;</span><span class="token punctuation">,</span> emails<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31))])}const A=i(d,[["render",j],["__file","library-regex.html.vue"]]),B=JSON.parse('{"path":"/fpython/library/library/library-regex.html","title":"re：正则表达式库","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"正则表达式的基本概念","slug":"正则表达式的基本概念","link":"#正则表达式的基本概念","children":[]},{"level":2,"title":"导入 re 模块","slug":"导入-re-模块","link":"#导入-re-模块","children":[]},{"level":2,"title":"常用函数","slug":"常用函数","link":"#常用函数","children":[{"level":3,"title":"re.search()","slug":"re-search","link":"#re-search","children":[]},{"level":3,"title":"re.findall()","slug":"re-findall","link":"#re-findall","children":[]},{"level":3,"title":"re.sub()","slug":"re-sub","link":"#re-sub","children":[]},{"level":3,"title":"re.split()","slug":"re-split","link":"#re-split","children":[]}]},{"level":2,"title":"正则表达式语法","slug":"正则表达式语法","link":"#正则表达式语法","children":[{"level":3,"title":"字符匹配","slug":"字符匹配","link":"#字符匹配","children":[]},{"level":3,"title":"边界匹配","slug":"边界匹配","link":"#边界匹配","children":[]},{"level":3,"title":"量词","slug":"量词","link":"#量词","children":[]},{"level":3,"title":"分组和引用","slug":"分组和引用","link":"#分组和引用","children":[]}]},{"level":2,"title":"示例代码","slug":"示例代码","link":"#示例代码","children":[]}],"git":{"updatedTime":1735029308000,"contributors":[{"name":"wanglinhao","username":"wanglinhao","email":"wanglinhao@wegooooo.com","commits":2}]},"filePathRelative":"fpython/library/library/library-regex.md"}');export{A as comp,B as data};