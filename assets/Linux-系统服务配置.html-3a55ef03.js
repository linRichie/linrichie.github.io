import{_ as e,o as s,c as a,f as n}from"./app-55c326ac.js";const t={},i=n(`<h1 id="系统服务配置" tabindex="-1"><a class="header-anchor" href="#系统服务配置" aria-hidden="true">#</a> 系统服务配置</h1><h2 id="system-service" tabindex="-1"><a class="header-anchor" href="#system-service" aria-hidden="true">#</a> System.service</h2><p>服务单元，每一个服务都是以.service进行表示的。可以自启动的系统服务和init下面的服务，都是用于设置启动的。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl list-unit-file <span class="token parameter variable">--type</span><span class="token operator">=</span>service
<span class="token comment"># 列出系统所有systemd的unit服务文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>STATE</th><th>说明</th></tr></thead><tbody><tr><td>disabled</td><td>开机不启动</td></tr><tr><td>enabled</td><td>开机自启动</td></tr><tr><td>static</td><td>对应的Unit文件没有定义[Install]区域，所以无法设置为开机启动</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看服务包含哪些内容</span>
systemctl <span class="token function">cat</span> sshd.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>常用命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start/stop/restart/enbale/disable xxx/service
<span class="token comment"># 启动/关闭/重启/开启自启/开机不自启/ 服务</span>

systemctl <span class="token parameter variable">--failed</span>
<span class="token comment"># 查看启动失败的服务列表</span>

systemctl daemon-relaod
<span class="token comment"># 重新加载所有的service文件</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),d=[i];function l(r,c){return s(),a("div",null,d)}const v=e(t,[["render",l],["__file","Linux-系统服务配置.html.vue"]]);export{v as default};
