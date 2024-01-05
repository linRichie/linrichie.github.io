import{_ as e,o as s,c as n,f as a}from"./app-55c326ac.js";const c={},r=a(`<h1 id="_12-docker-hub加速器地址阿里云" tabindex="-1"><a class="header-anchor" href="#_12-docker-hub加速器地址阿里云" aria-hidden="true">#</a> 12. docker-hub加速器地址阿里云</h1><nav class="table-of-contents"><ul></ul></nav><ul><li><p>操作步骤</p><p><strong>Centos</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 版本要求: Centos7 Docker1.9以上</span>
<span class="token comment">#查找docker.service服务的配置文件位置</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> <span class="token string">&quot;docker.service&quot;</span>
<span class="token comment"># 复制配置文件到etc下</span>
<span class="token function">cp</span> <span class="token parameter variable">-n</span> /usr/lib/systemd/system/docker.service  /etc/systemd/system/doker.service    <span class="token comment"># -n, --no-clobber           不要覆盖已存在的文件(使前面的 -i 选项失效)</span>

<span class="token comment">#修改配置文件</span>
方法一：进入配置文件进行修改
方法二：直接使用sed进行修改
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s|ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock|ExecStart=/usr/bin/docker daemon --registry-mirror=https://x84nz4y4.mirror.aliyuncs.com|g&quot;</span> /etc/systemd/system/doker.service

<span class="token comment">#重启加速daemon，重启docker</span>
systemctl daemon-reload
systemctl restart docker.service 或者 <span class="token function">service</span> <span class="token function">docker</span> restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,3),t=[r];function i(o,d){return s(),n("div",null,t)}const m=e(c,[["render",i],["__file","Docker系列学习-12.设置docker-hub加速器地址.html.vue"]]);export{m as default};
