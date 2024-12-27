import{_ as l,c as i,a as s,d as e,e as p,f as o,r as c,o as r,b as t}from"./app-BCC5ysrj.js";const u={},d={class:"vuepress-toc"},k={class:"vuepress-toc-item"},m={class:"vuepress-toc-item"},v={class:"vuepress-toc-item"},b={class:"vuepress-toc-item"},y={class:"vuepress-toc-item"},h={class:"vuepress-toc-item"},f={class:"vuepress-toc-item"},w={class:"vuepress-toc-item"};function x(g,n){const a=c("router-link");return r(),i("div",null,[n[8]||(n[8]=s("h1",{id:"try-exception-异常",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#try-exception-异常"},[s("span",null,"Try/Exception 异常")])],-1)),s("nav",d,[s("ul",null,[s("li",k,[e(a,{to:"#引发异常"},{default:p(()=>n[0]||(n[0]=[t("引发异常")])),_:1})]),s("li",m,[e(a,{to:"#捕获异常"},{default:p(()=>n[1]||(n[1]=[t("捕获异常")])),_:1})]),s("li",v,[e(a,{to:"#try-except-块"},{default:p(()=>n[2]||(n[2]=[t("try/except 块")])),_:1}),s("ul",null,[s("li",b,[e(a,{to:"#捕获多种异常"},{default:p(()=>n[3]||(n[3]=[t("捕获多种异常")])),_:1})]),s("li",y,[e(a,{to:"#捕获所有异常"},{default:p(()=>n[4]||(n[4]=[t("捕获所有异常")])),_:1})])])]),s("li",h,[e(a,{to:"#清理操作"},{default:p(()=>n[5]||(n[5]=[t("清理操作")])),_:1})]),s("li",f,[e(a,{to:"#另一种格式设置方法"},{default:p(()=>n[6]||(n[6]=[t("另一种格式设置方法")])),_:1})]),s("li",w,[e(a,{to:"#with语句"},{default:p(()=>n[7]||(n[7]=[t("with语句")])),_:1})])])]),n[9]||(n[9]=o(`<ul><li>在发生异常时，如果不采取任何措施，程序通常会立即停止运行，并显示栈跟踪---异常发生前调用的函数清单。对确定导致错误的代码有帮助</li></ul><h2 id="引发异常" tabindex="-1"><a class="header-anchor" href="#引发异常"><span>引发异常</span></a></h2><ul><li><p>如除以0抛出异常：ZeroDivisionError</p></li><li><p>语法错误异常：SyntaxError</p></li><li><p>代码任何地方都可</p></li><li><p><strong>注意</strong> 大量内置的异常，被组织成层次结构，可参阅：<a href="http://dosc.python.org/3/library/exceptions.heml#bltin-exceptions" target="_blank" rel="noopener noreferrer">http://dosc.python.org/3/library/exceptions.heml#bltin-exceptions</a></p></li></ul><h2 id="捕获异常" tabindex="-1"><a class="header-anchor" href="#捕获异常"><span>捕获异常</span></a></h2><ul><li><p>异常发生，有两种选择;</p><ul><li>1.忽略异常，让程序崩溃并显示栈跟踪。程序开发期间，这样做，对栈跟踪提供的调试信息很有帮</li><li>2.捕获异常，并打印友好的错误信息乃至试图修复问题。对于供非程序员使用的程序，几乎都这样做</li></ul></li><li><p>使用语法：</p><p>try: ...... except Errorname(异常名): ......</p></li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 捕获异常案例</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">get_age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">try</span><span class="token punctuation">:</span></span>
<span class="line">            n <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;how old are you?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">return</span> n</span>
<span class="line">        <span class="token keyword">except</span> ValueError<span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Please enter an intefer value.&#39;</span><span class="token punctuation">)</span></span>
<span class="line">            </span>
<span class="line"><span class="token comment"># while循环中的try/except快，可将可能引发异常的代码放在try快中</span></span>
<span class="line"><span class="token comment"># 当try快中的代码发生异常，就会跳过其他没有执行的语句，立即跳转到except快中。</span></span>
<span class="line"><span class="token comment"># 如果try快没有引发异常，将跳过 except ValueError快</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="try-except-块" tabindex="-1"><a class="header-anchor" href="#try-except-块"><span>try/except 块</span></a></h2><ul><li><p>工作原理有点类似if语句</p></li><li><p>if语句是根据布尔表达式的结果决定下面执行的内容</p></li><li><p>try/except根据是否出现了异常决定下面执行的内容</p></li><li><p>同一函数可能引发多种异常，所以就需要进行多种异常的捕获</p></li></ul><h3 id="捕获多种异常" tabindex="-1"><a class="header-anchor" href="#捕获多种异常"><span>捕获多种异常</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment">## 处理多种异常的try/except快</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">convert_init</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span>base<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">try</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token builtin">int</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span>base<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">except</span> <span class="token punctuation">(</span>ValueError<span class="token punctuation">,</span>TypeError<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">&#39;error&#39;</span></span>
<span class="line">    </span>
<span class="line"><span class="token comment"># 分别处理不同的异常</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">convert_ini2</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span>base<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">try</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token builtin">int</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>base<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">except</span> ValueError<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">&quot;value error&quot;</span></span>
<span class="line">    <span class="token keyword">except</span> TypeError<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">&quot;type error&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="捕获所有异常" tabindex="-1"><a class="header-anchor" href="#捕获所有异常"><span>捕获所有异常</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 在except中没有指定异常，将捕获所有异常</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">convert_to_init</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span>base<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">try</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token builtin">int</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span>base<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">except</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">&#39;error&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="清理操作" tabindex="-1"><a class="header-anchor" href="#清理操作"><span>清理操作</span></a></h2><ul><li>在try/except 块中，可以包含 执行清理操作的finally代码块</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 清理操作案例（或者说语法）</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">invert</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">try</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token number">1</span><span class="token operator">/</span>x</span>
<span class="line">    <span class="token keyword">except</span> ZeroDivisionError<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">&#39;error&#39;</span></span>
<span class="line">    <span class="token keyword">finally</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;invert(%s) done&#39;</span> <span class="token operator">%</span> x<span class="token punctuation">)</span></span>
<span class="line">        </span>
<span class="line"><span class="token comment"># finally块肯定会执行，不管是否发生异常都要执行某些代码块时，很有用处</span></span>
<span class="line"><span class="token comment"># 如通常将关闭文件的语句放在finally块中，这样文件肯定会被关闭，即使发生了IOError</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="另一种格式设置方法" tabindex="-1"><a class="header-anchor" href="#另一种格式设置方法"><span>另一种格式设置方法</span></a></h2><ul><li>在上述的代码块中，为让文件每行开头的行号右对齐，并在行号的左边填充零。</li><li>print语句都使用了字符串插入</li><li>当需要使用格式字符串，可将print语句替换成下面的语句</li></ul><p>print(&#39;{0:04}{1}&#39;.format(num,line),end = &#39;&#39;)</p><h2 id="with语句" tabindex="-1"><a class="header-anchor" href="#with语句"><span>with语句</span></a></h2><ul><li>为了确保发生异常，也能尽快执行清理操作。可以使用python语句with</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 在屏幕上打印文件内容，并在每一行加上行号</span></span>
<span class="line">num <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>fname<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">for</span> line <span class="token keyword">in</span> f<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;{0:04}{1}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span>line<span class="token punctuation">)</span><span class="token punctuation">,</span>end <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    num <span class="token operator">=</span> num <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 由于不知道文件将在何时关闭，f通常在for循环结束后关闭，但不清楚去确切的时间。</span></span>
<span class="line"><span class="token comment"># 当不知需要后，f 保持打开状态时不确定的，当其他程序访问这个文件，就会导致出错</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 改进，使用with语句</span></span>
<span class="line"><span class="token comment"># 确保不在需要的文件尽早关闭 可使用with语句</span></span>
<span class="line">num <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>fname<span class="token punctuation">,</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">for</span> line <span class="token keyword">in</span> f<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;{0:04}{1}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span>line<span class="token punctuation">)</span><span class="token punctuation">,</span>end <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span></span>
<span class="line">        num <span class="token operator">=</span> num <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21))])}const E=l(u,[["render",x],["__file","statement-try_exception.html.vue"]]),T=JSON.parse('{"path":"/fpython/library/statement/statement-try_exception.html","title":"Try/Exception 异常","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"引发异常","slug":"引发异常","link":"#引发异常","children":[]},{"level":2,"title":"捕获异常","slug":"捕获异常","link":"#捕获异常","children":[]},{"level":2,"title":"try/except 块","slug":"try-except-块","link":"#try-except-块","children":[{"level":3,"title":"捕获多种异常","slug":"捕获多种异常","link":"#捕获多种异常","children":[]},{"level":3,"title":"捕获所有异常","slug":"捕获所有异常","link":"#捕获所有异常","children":[]}]},{"level":2,"title":"清理操作","slug":"清理操作","link":"#清理操作","children":[]},{"level":2,"title":"另一种格式设置方法","slug":"另一种格式设置方法","link":"#另一种格式设置方法","children":[]},{"level":2,"title":"with语句","slug":"with语句","link":"#with语句","children":[]}],"git":{"updatedTime":1735029308000,"contributors":[{"name":"Linkefou","username":"Linkefou","email":"wlh724567296@163.com","commits":1},{"name":"wanglinhao","username":"wanglinhao","email":"wanglinhao@wegooooo.com","commits":4}]},"filePathRelative":"fpython/library/statement/statement-try_exception.md"}');export{E as comp,T as data};