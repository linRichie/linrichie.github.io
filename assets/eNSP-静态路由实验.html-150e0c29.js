import{_ as e,o as n,c as s,f as a}from"./app-55c326ac.js";const i={},r=a(`<h1 id="ensp静态路由实验" tabindex="-1"><a class="header-anchor" href="#ensp静态路由实验" aria-hidden="true">#</a> eNSP静态路由实验</h1><h2 id="目的" tabindex="-1"><a class="header-anchor" href="#目的" aria-hidden="true">#</a> 目的</h2><ul><li>学会掌握华为路由器的相关配置命令</li><li>学会掌握路由的工作原理</li><li>学会掌握配置静态路由</li><li>学会掌握网络通信的基本规则与原理</li></ul><hr><h2 id="使用华为ensp模拟器进行实验" tabindex="-1"><a class="header-anchor" href="#使用华为ensp模拟器进行实验" aria-hidden="true">#</a> <strong>使用华为eNSP模拟器进行实验</strong></h2><p>实验基本思路：<br> 1.搭建基本的环境拓扑结构<br> 2.进行相关的基本配置<br> 3.开启设备，对路由和交换机进行相关的配置</p><hr><h3 id="开始实施" tabindex="-1"><a class="header-anchor" href="#开始实施" aria-hidden="true">#</a> 开始实施</h3><ul><li><p>1.环境的搭建与实验目的。<br> 环境：静态路由的实验。<br> 目的：实现两个不同网段的PC机能够正常通信</p></li><li><p>2.步骤：<br> 对PC机进行基本的配置（IP，子网掩码）<br> 开启设备，规划网段。</p></li><li><p>3.路由器配置</p><p><strong>R1: 配置接口的IP</strong></p><pre><code>  \`\`\` shell
  system-view
  sysname R1
  undo info-center enbale
  int GigabitEthernet0/0/0
  ip address 192.168.3.1 30
  int GigabitEthernet0/0/1
  ip address 192.168.1.1 24
  \`\`\`
</code></pre><p><strong>R2：配置接口IP</strong></p><pre><code>  \`\`\`shell
  system-view
  sysname R2
  undo info-center enable
  int GigabitEthernet0/0/0
  ip address 192.168.3.2 30
  int GigabitEthernet0/0/1
  ip address 192.168.2.1 24
  \`\`\`
</code></pre><p><strong>配置默认路由</strong></p><ul><li><p>配置默认路由的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ip</span> route-static 到达的IP网段<span class="token punctuation">(</span>网络号<span class="token punctuation">)</span> 子网掩码 下一跳的地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>R1：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ip</span> route-static <span class="token number">192.168</span>.2.0 <span class="token number">24</span> <span class="token number">192.168</span>.3.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>R2：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ip</span> route-static <span class="token number">192.168</span>.1.0 <span class="token number">24</span> <span class="token number">192.168</span>.3.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p><strong>配置PC机的网关</strong> 当pc机没有网关，就无法走出自己的网段。只能在自己所在网段的局域网进行通信<br><code>PC1：网关：192.168.1.1</code><br><code>PC2：网关：192.168.2.1</code></p></li></ul>`,9),t=[r];function l(d,c){return n(),s("div",null,t)}const o=e(i,[["render",l],["__file","eNSP-静态路由实验.html.vue"]]);export{o as default};
