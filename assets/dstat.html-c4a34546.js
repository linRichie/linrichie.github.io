import{_ as t,o as a,c as s,f as e}from"./app-55c326ac.js";const n={},l=e(`<h1 id="多类型资源统计工具-dstat" tabindex="-1"><a class="header-anchor" href="#多类型资源统计工具-dstat" aria-hidden="true">#</a> 多类型资源统计工具: dstat</h1><p>该命令整合了vmstat，iostat和ifstat三种命令。同时增加了新的特性和功能可以让你能及时看到各种的资源使用情况，从而能够使你对比和整合不同的资源使用情况。通过不同颜色和区块布局的界面帮助你能够更加清晰容易的获取信息。它也支持将信息数据导出到cvs格式文件中，从而用其他应用程序打开，或者导入到数据库中。</p><h2 id="dstat介绍" tabindex="-1"><a class="header-anchor" href="#dstat介绍" aria-hidden="true">#</a> dstat介绍</h2><ul><li>dstat结合了 vmstat，iostat，ifstat，netstat以及更多监控工具信息，跟ifstat一样，实时显示监控状态</li><li>基于python编写，方便扩展各种定制功能</li><li>分组统计设备信息</li><li>可以定制时间和输出间隔，比如<code>dstat -nf 2 5</code> 表示输出网络设备，2秒一次，一共输出5次</li><li>输出信息单位按最大整数计算，用颜色显示不同单位</li><li>可以输出csv文件，<code>dstat --output /tmp/filename.csv 2 5</code> 将dstat输出到filename.csv文件中，2秒一次，输出5次 需要注意： dstat时间控制参数一定要在文件输出后面。</li></ul><h2 id="dstat安装" tabindex="-1"><a class="header-anchor" href="#dstat安装" aria-hidden="true">#</a> dstat安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> dstat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="dstat参数介绍" tabindex="-1"><a class="header-anchor" href="#dstat参数介绍" aria-hidden="true">#</a> dstat参数介绍</h2><p>从左往右依次显示的是：CPU状态，磁盘读写状态，网络状态，分页状态，系统状态</p><p><code>man dstat</code> 查看dstat的参数：</p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:left;">-c</td><td style="text-align:left;">显示cpu当前状态</td></tr><tr><td style="text-align:left;">-C</td><td style="text-align:left;">加cpu号分别显示cpu</td></tr><tr><td style="text-align:left;">-l</td><td style="text-align:left;">显示负载统计量</td></tr><tr><td style="text-align:left;">-m</td><td style="text-align:left;">显示内存状态包括used，buffer，cache，free</td></tr><tr><td style="text-align:left;">-n</td><td style="text-align:left;">显示网卡总状态</td></tr><tr><td style="text-align:left;">-nf</td><td style="text-align:left;">分页显示网卡装填</td></tr><tr><td style="text-align:left;">-r</td><td style="text-align:left;">显示i/o统计</td></tr><tr><td style="text-align:left;">-s</td><td style="text-align:left;">显示交换分区的状态</td></tr><tr><td style="text-align:left;">-t</td><td style="text-align:left;">显示时间</td></tr><tr><td style="text-align:left;">-fs</td><td style="text-align:left;">显示文件系统统计数据，包括文件总数和innodes值</td></tr><tr><td style="text-align:left;">-nocolor</td><td style="text-align:left;">输出不现实颜色</td></tr><tr><td style="text-align:left;">-socket</td><td style="text-align:left;">统计网络数据</td></tr><tr><td style="text-align:left;">-tcp</td><td style="text-align:left;">显示tcp统计</td></tr><tr><td style="text-align:left;">-udp</td><td style="text-align:left;">显示udp统计</td></tr></tbody></table><h3 id="例子脚本" tabindex="-1"><a class="header-anchor" href="#例子脚本" aria-hidden="true">#</a> 例子脚本</h3><p>监控每天固定时间的网络状态并生成csv文件发送到邮箱</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">vim</span> /usr/src/dstat_consol.sh
<span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y-%m-%d<span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">$time</span>
dstat <span class="token parameter variable">-tcf</span> <span class="token parameter variable">--output</span> /tmp/eths_<span class="token variable">$time</span>.csv <span class="token number">1</span> <span class="token number">40</span>
<span class="token comment"># 一秒一次，一共输出40次</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$time</span>网路状态&quot;</span> <span class="token operator">|</span> mail <span class="token parameter variable">-a</span> /tmp/eths_<span class="token variable">$time</span>.csv <span class="token string">&quot;<span class="token variable">$time</span>网络状态&quot;</span> xxxx@qq.com
<span class="token function">chmod</span> +x /usr/src/dstat_consol.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">crontab</span> <span class="token parameter variable">-e</span>
<span class="token number">0</span> <span class="token number">10</span> * * * /usr/src/dstat_consol.sh <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,14),d=[l];function i(r,c){return a(),s("div",null,d)}const p=t(n,[["render",i],["__file","dstat.html.vue"]]);export{p as default};
