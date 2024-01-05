import{_ as n,o as s,c as a,f as t}from"./app-55c326ac.js";const e={},p=t(`<h1 id="_4-flask案例-框架网页查询ip" tabindex="-1"><a class="header-anchor" href="#_4-flask案例-框架网页查询ip" aria-hidden="true">#</a> 4. flask案例: 框架网页查询IP</h1><h2 id="创建flask对象" tabindex="-1"><a class="header-anchor" href="#创建flask对象" aria-hidden="true">#</a> 创建flask对象</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
<span class="token comment"># name 是Python中的特殊变量，如果文件作为主程序执行，那么__name__变量的值就是__main__，如果是被其他模块引入，那么__name__的值就是模块名称。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编写主程序" tabindex="-1"><a class="header-anchor" href="#编写主程序" aria-hidden="true">#</a> 编写主程序</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 在主程序中执行run()来启动应用</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>port<span class="token operator">=</span><span class="token number">8080</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;0.0.0.0&#39;</span><span class="token punctuation">)</span>     <span class="token comment"># 允许其他主机进行访问</span>
<span class="token comment"># 改名启动一个本地服务器，默认情况下其地址是localhost:5000，在上面的代码中，我们使用关键字参数port将监听端口修改为8080。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 使用app变量的route()装饰器来告诉Flask框架URL如何触发我们的视图函数：</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello_world</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Hello World&quot;</span>

<span class="token comment"># 上面的标识，对路径&#39;/&#39;的请求，将转为对hello_world()函数的调用。很直白，对吧？</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 整个代码</span>
form flask <span class="token keyword">import</span> Flask
app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello_world</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Hello World!&quot;</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>port<span class="token operator">=</span><span class="token number">8080</span><span class="token punctuation">)</span>

<span class="token comment"># 之后运行 app.py</span>
python app<span class="token punctuation">.</span>py

<span class="token comment"># 之后浏览器访问 http://127.0.0.1:8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用html模块" tabindex="-1"><a class="header-anchor" href="#使用html模块" aria-hidden="true">#</a> 使用HTML模块</h2><p>如何将原始的HTMl代码插入FLask应用</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask
app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    user <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">:</span><span class="token string">&quot;Jone&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;
&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;Templating&lt;/title&gt;
    &lt;head&gt;
    &lt;body&gt;
        &lt;h1&gt;Hello,&#39;&#39;&#39;</span> <span class="token operator">+</span> user<span class="token punctuation">[</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;！, you’re &#39;&#39;&#39;</span> <span class="token operator">+</span> user<span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token triple-quoted-string string">&#39;&#39;&#39; years old.&lt;/h1&gt;
    &lt;/body&gt;
&lt;/html&gt;&#39;&#39;&#39;</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>port<span class="token operator">=</span><span class="token number">8080</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>form flask <span class="token keyword">import</span> Flask<span class="token punctuation">,</span> render_template
app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/hello&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> render_template<span class="token punctuation">(</span><span class="token string">&#39;index.html&#39;</span><span class="token punctuation">,</span> name <span class="token operator">=</span> <span class="token string">&#39;Alex&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

代码中，模板文件index<span class="token punctuation">.</span>html依赖于变量name，其内容如下<span class="token punctuation">:</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
  <span class="token punctuation">{</span><span class="token operator">%</span> <span class="token keyword">if</span> name <span class="token operator">%</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>Hello <span class="token punctuation">{</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
  <span class="token punctuation">{</span><span class="token operator">%</span> <span class="token keyword">else</span> <span class="token operator">%</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>Hello<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
  <span class="token punctuation">{</span><span class="token operator">%</span> endif <span class="token operator">%</span><span class="token punctuation">}</span>
 <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>

在浏览器中访问http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">:</span><span class="token number">8080</span><span class="token operator">/</span>hello<span class="token operator">/</span>alex：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="完整代码示例" tabindex="-1"><a class="header-anchor" href="#完整代码示例" aria-hidden="true">#</a> 完整代码示例</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask<span class="token punctuation">,</span> render_template<span class="token punctuation">,</span> request
<span class="token keyword">import</span> requests
<span class="token keyword">import</span> json
<span class="token keyword">import</span> os

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
<span class="token comment">#app.jinja_env.variable_start_string = &#39;{{&#39;</span>
<span class="token comment">#app.jinja_env.variable_end_string = &#39;}}&#39;</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">signin_form</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;&lt;form action=&quot;/&quot; method=&quot;post&quot;&gt;
              &lt;p&gt;&lt;input name=&quot;qip&quot;&gt;&lt;/p &gt;
              &lt;p&gt;&lt;button type=&quot;submit&quot;&gt;查询&lt;/button&gt;&lt;/p &gt;
              &lt;/form&gt;&#39;&#39;&#39;</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    ip <span class="token operator">=</span> request<span class="token punctuation">.</span>form<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;qip&#39;</span><span class="token punctuation">)</span>
    url_base <span class="token operator">=</span> <span class="token string">&quot;http://freeapi.ipip.net/&quot;</span> <span class="token operator">+</span> ip
    result <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token operator">=</span>url_base<span class="token punctuation">)</span>
    <span class="token comment">#result = os.popen(&#39;curl http://freeapi.ipip.net/&#39; %ip)</span>
    <span class="token keyword">return</span> <span class="token builtin">str</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[p];function l(i,c){return s(),a("div",null,o)}const r=n(e,[["render",l],["__file","flask-example.html.vue"]]);export{r as default};
