import{_ as t,r as l,o as r,c as d,b as e,e as a,w as i,d as n,f as o}from"./app-55c326ac.js";const c={},p=e("h1",{id:"python-爬取网易云音乐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#python-爬取网易云音乐","aria-hidden":"true"},"#"),n(" Python: 爬取网易云音乐")],-1),u={class:"table-of-contents"},m=o(`<h2 id="安装selenium" tabindex="-1"><a class="header-anchor" href="#安装selenium" aria-hidden="true">#</a> 安装selenium</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> selenium
<span class="token comment"># 或者</span>
canda <span class="token function">install</span> selenium
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下载webdriver" tabindex="-1"><a class="header-anchor" href="#下载webdriver" aria-hidden="true">#</a> 下载webdriver</h2><p>要让selenium能够控制浏览器，并与浏览器进行访问，需要通过webdriver或者selenium<br> 各浏览器的webdriver下载点</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://link.zhihu.com/?target=http%3A//selenium-python.readthedocs.io/installation.html%23drivers
chrom浏览器
http://link.zhihu.com/?target=https%3A//sites.google.com/a/chromium.org/chromedriver/downloads
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置环境" tabindex="-1"><a class="header-anchor" href="#配置环境" aria-hidden="true">#</a> 配置环境</h2><p>在项目中搭建python使用webdriver，有分Global&amp;Local两种方式</p><ul><li><p>Global--把webdriver放在python的安装目录</p><ul><li>无论哪个python项目中，都可以直接使用chrom webdriver。通常采用这种方式配置</li></ul></li><li><p>Local--把webdriver放到对应的项目中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>比如有个爬虫项目selenium-test的目录结构  
selenium-test--&gt;page1--&gt;test1.py  
selenium-test--&gt;page2--&gt;test2.py  
所以test1.py&amp;test2.py都需要chrom webdriver  

所以就变成  
selenium-test--&gt;page1--&gt;test1.py &amp;&amp; chrom webdriver  
selenium-test--&gt;page2--&gt;test2.py &amp;&amp; chrom webdriver  
比较麻烦。而且会导致chrom webdriver过多，不易维护  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>测试能够获取正常网页的title，能获取，安装成功</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
driver<span class="token operator">=</span>webdriver<span class="token punctuation">.</span>Chrom<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">#开启chrom浏览器，因为安装的是chrom webdriver插件</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;http://www.baidu.com&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>driver<span class="token punctuation">.</span>title<span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,8);function v(h,b){const s=l("router-link");return r(),d("div",null,[p,e("nav",u,[e("ul",null,[e("li",null,[a(s,{to:"#安装selenium"},{default:i(()=>[n("安装selenium")]),_:1})]),e("li",null,[a(s,{to:"#下载webdriver"},{default:i(()=>[n("下载webdriver")]),_:1})]),e("li",null,[a(s,{to:"#配置环境"},{default:i(()=>[n("配置环境")]),_:1})])])]),m])}const _=t(c,[["render",v],["__file","Python-爬取网易云音乐.html.vue"]]);export{_ as default};
