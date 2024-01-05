import{_ as s,o as n,c as a,f as e}from"./app-55c326ac.js";const i={},l=e(`<h1 id="命令别名-alias" tabindex="-1"><a class="header-anchor" href="#命令别名-alias" aria-hidden="true">#</a> 命令别名:alias</h1><p>在<code>~</code>目录下的<code>.bashrc</code>文件里面进行设置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> ~/.bashrc

<span class="token comment"># 获取局域网IP</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ipi</span><span class="token operator">=</span><span class="token string">&quot;ifconfig | grep inet | grep 192 | awk &#39;{print <span class="token variable">$2</span>}&#39;&quot;</span>

<span class="token comment"># 获取公网IP</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ipe</span><span class="token operator">=</span><span class="token string">&#39;curl ipinfo.io/ip&#39;</span>

<span class="token comment"># 抓包</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">zhuabao</span><span class="token operator">=</span><span class="token string">&#39;sudo tcpdump -i any&#39;</span>

<span class="token comment"># 清屏</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token string">&#39;clear&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">curlb</span><span class="token operator">=</span><span class="token string">&#39;curl -s -o /dev/null -w &quot;19-10-25T11:24:10+08:00 %{http_code} %{time_namelookup} %{time_connect} %{time_appconnect} %{time_pretransfer} %{time_redirect} %{time_starttransfer} %{size_request} %{size_download} %{speed_download} %{time_total}\\n&quot;&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">curld</span><span class="token operator">=</span><span class="token string">&#39;curl -s -o /dev/null -w &quot;
              请求时间:  19-10-25T11:24:10+08:00
            HTTP状态码:  %{http_code}
           DNS解析时间:  %{time_namelookup} s
          建立连接时间:  %{time_connect} s
          连接完成时间:  %{time_appconnect} s
          准备传输时间:  %{time_pretransfer} s
            重定向时间:  %{time_redirect} s
          传输开始时间:  %{time_starttransfer} s
        请求数据包大小:  %{size_request} Bytes
        下载数据包大小:  %{size_download} Bytes
          平均下载速度:  %{speed_download} Bytes/s
                         --------------
            消耗总时长:  %{time_total} s \\n
&quot;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),t=[l];function c(r,o){return n(),a("div",null,t)}const p=s(i,[["render",c],["__file","alias.html.vue"]]);export{p as default};
