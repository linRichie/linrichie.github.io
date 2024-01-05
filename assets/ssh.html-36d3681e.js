import{_ as s,o as n,c as a,f as e}from"./app-55c326ac.js";const i={},l=e(`<h1 id="linux-ssh命令" tabindex="-1"><a class="header-anchor" href="#linux-ssh命令" aria-hidden="true">#</a> linux ssh命令</h1><p><strong>前言</strong><br> SSH(远程连接工具)连接原理：ssh服务是一个守护进程（demon），系统后天监客户端的连接。进程名为<code>sshd</code>，负责实时监听客户端的请求。默认端口：<code>22</code>，包括公共秘钥等交换信息<br> ssh服务器组成部分：openssh（提供ssh服务），openssl（提供加密程序）<br> 可用于远程的软件：Xshell，Securecrt，MObaxterm</p><h2 id="ssh的加密技术" tabindex="-1"><a class="header-anchor" href="#ssh的加密技术" aria-hidden="true">#</a> SSH的加密技术</h2><ul><li>加密技术：传输过程，数据加密<br> 1.SSH1没有对客户端的秘钥进行校验，容易被植入恶意代码<br> 2.SSH2 增加了一个确认联机正确性的Diffe_Hellman机制，每次数据传输，Server会检查数据来源的正确性，防止入侵<br> SSH2支持RSA和DSA密钥 DSA：数字签名 RSA：既可以数字签名又可以加密</li></ul><h2 id="ssh相关" tabindex="-1"><a class="header-anchor" href="#ssh相关" aria-hidden="true">#</a> SSH相关</h2><p>1.SSH，用于远程连接Linux服务器 2.SSH的默认端口是22，安全协议版本是SSH2 3.SSH服务器主要包含2个服务功能：SSH连接和SFTP服务器 4.SSH客户端包含：ssh连接命令和远程拷贝scp命令等 5.在防止SSH登录入侵时：密钥登录，更改默认端口，监听本地内网IP</p><h2 id="ssh命令" tabindex="-1"><a class="header-anchor" href="#ssh命令" aria-hidden="true">#</a> SSH命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.登录</span>
 <span class="token function">ssh</span> <span class="token parameter variable">-p22</span> uaername@ipaddress<span class="token punctuation">(</span>alias<span class="token punctuation">)</span>
<span class="token comment"># 2.直接执行命令</span>
 <span class="token function">ssh</span> root@ipaddress ll /root
<span class="token comment"># 3.查看已知主机</span>
 <span class="token function">cat</span> /root/.ssh/known_hosts
<span class="token comment"># 4.ssh远程执行sudo命令</span>
 <span class="token function">ssh</span> <span class="token parameter variable">-t</span> root@ipaddress <span class="token function">sudo</span> <span class="token function">rsync</span> hosts /etc/
<span class="token comment"># 5.scp</span>
<span class="token comment"># 1.功能，远程文件的安全加密</span>
  <span class="token function">scp</span> <span class="token parameter variable">-P22</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-p</span> /home/a.txt root@ipaddress:/home/a.txt
<span class="token comment"># 2.scp小结</span>
   scp是远程加密拷贝，cp是本地拷贝
   每次都是全量拷贝（效率不高，适合第一次，增量拷贝用rsync）
<span class="token comment"># 6.ssh自带的sftp功能</span>
 <span class="token number">1</span>.windows和linux的传输工具
  wincp filezip
  sftp：基于ssh的安全加密传输
  samba
 <span class="token number">2</span>.sftp客户端连接
  <span class="token function">sftp</span> <span class="token parameter variable">-oPort</span><span class="token operator">=</span><span class="token number">22</span> root@ipaddress
  put /etc/hosts /tmp
  get /etc/hosts /home/omd
 <span class="token number">3</span>.小结
  <span class="token number">1</span>.linux下使用命令：sftp <span class="token parameter variable">-oPort</span><span class="token operator">=</span><span class="token number">22</span> root@x.x.x.x
  <span class="token number">2</span>.put：将客户端本地路径文件上传
  <span class="token number">3</span>.get：下载服务器端内容到本地
  <span class="token number">4</span>.远程连接默认连接用户的家目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssh服务-后台相关" tabindex="-1"><a class="header-anchor" href="#ssh服务-后台相关" aria-hidden="true">#</a> SSH服务，后台相关</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查询openssl软件</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> openssh openssl

<span class="token comment"># 查询sshd进程</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">ssh</span>

<span class="token comment"># 查询ssh端口</span>
<span class="token function">netstat</span> <span class="token parameter variable">-lntup</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">ssh</span>
ss <span class="token parameter variable">-luntp</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">ssh</span>
<span class="token function">netstat</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">ssh</span>
<span class="token function">netstat</span> <span class="token parameter variable">-lnt</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">22</span>
<span class="token comment"># 技巧：netstat -lnt | grep ssh | wc -l 只要大于2个说明sshd服务正常</span>

<span class="token comment"># 查看ssh的秘钥目录</span>
ll /root/.ssh/known_hosts <span class="token comment">#当前用户家目录的.ssh目录下</span>

<span class="token comment"># ssh的配置文件</span>
<span class="token function">cat</span> /etc/ssh/sshd_config

<span class="token comment"># ssh的开启 关闭 重启</span>
<span class="token function">service</span> sshd start
systemctl start sshd
<span class="token function">service</span> sshd stop
systemctl stop sshd
<span class="token function">service</span> sshd restart
<span class="token function">service</span> sshd reload   <span class="token comment"># 推荐使用</span>
systemctl restart sshd

<span class="token comment"># ssh远程连接</span>
<span class="token function">ssh</span> ipaddress  <span class="token comment"># 默认利用当前宿主机用户名登录</span>
<span class="token function">ssh</span> username@ipaddress  <span class="token comment"># 利用远程机的用户登录</span>
<span class="token function">ssh</span> username@ipaddress <span class="token parameter variable">-o</span> <span class="token assign-left variable">stricthostkeychecking</span><span class="token operator">=</span>no <span class="token comment"># 首次登陆免输入yes登录</span>
<span class="token function">ssh</span> username@ipaddress <span class="token string">&quot;ls /root&quot;</span> <span class="token comment"># 当前远程登录到服务器之后执行命令</span>
<span class="token function">ssh</span> username@ipaddress <span class="token parameter variable">-t</span> <span class="token string">&quot;sh /home/a.sh&quot;</span> <span class="token comment"># 当前远程登录到服务器之后执行某个脚本</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssh免密设置" tabindex="-1"><a class="header-anchor" href="#ssh免密设置" aria-hidden="true">#</a> SSH免密设置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.进入用户的家目录</span>
 <span class="token builtin class-name">cd</span> /root/.ssh   <span class="token comment"># root用户就在root目录下的.ssh目录</span>
 <span class="token builtin class-name">cd</span> /home/username/.ssh <span class="token comment"># 普通用户就在家目录下的.ssh目录</span>

<span class="token comment"># 2.根据DSA算法生成私钥和公钥（默认建立在当前用户的家目录）</span>
 ssh-keygen <span class="token parameter variable">-t</span> dsa/rsa
  id_dsa/rsa  <span class="token comment"># 私钥</span>
  id_dsa.pub / id_rsa.pub  <span class="token comment"># 公钥</span>

<span class="token comment"># 3.拷贝公钥到目标服务器</span>
 ssh--copy-id <span class="token parameter variable">-i</span> id_dsa.pub username@ipaddress <span class="token comment"># 使用ssh登录默认端口</span>
 ssh-copy-id <span class="token parameter variable">-i</span> is_dsa_pub <span class="token parameter variable">-p</span> <span class="token number">666</span> username@ipaddress <span class="token comment"># 使用ssh登录指定的端口</span>

<span class="token comment"># 4.查看目标服务器生成的文件</span>
 ll /home/username/.ssh/authorized_keys

<span class="token comment"># 5.免密码登录目标服务器</span>
 <span class="token function">ssh</span> username@ipaddress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssh排查问题" tabindex="-1"><a class="header-anchor" href="#ssh排查问题" aria-hidden="true">#</a> SSH排查问题</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 判断物理链路是否通</span>
 <span class="token function">ping</span> ipaddress
 windows:psping ipaddress:ssh_port
 linux: paping ipaddress <span class="token parameter variable">-p</span> ssh_port

<span class="token comment"># 判断服务是否正常</span>
 telnet ipaddress ssh_port

<span class="token comment"># linux防火墙</span>
<span class="token function">service</span> iptables status <span class="token operator">&gt;</span> /etc/init.d/iptables status

<span class="token comment"># 打开ssh的调测进行观察</span>
<span class="token function">ssh</span> <span class="token parameter variable">-vvv</span> username@ipaddress <span class="token parameter variable">-p</span> ssh_port

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssh批量分发与管理方案" tabindex="-1"><a class="header-anchor" href="#ssh批量分发与管理方案" aria-hidden="true">#</a> SSH批量分发与管理方案</h2><ul><li>1.使用root做ssh key验证 <ul><li>优点：简单，易用</li><li>缺点：安全性能差，无法禁止root远程连接</li></ul></li><li>2.利用普通用户 --&gt; 生产环境一般都是使用普通用户 <ul><li>思路：把要分发的文件（公钥文件）拷贝到服务器用户的家目录，然后利用sudo授权拷贝分发的文件和对应目录</li><li>优点：安全</li><li>缺点：复杂，配置麻烦</li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.sudo授权</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;username All=(All)(表示的是权限) NOPASSWD:/usr/bin/rsync&#39;</span> <span class="token operator">&gt;&gt;</span> /etc/sudoers
visudo <span class="token parameter variable">-c</span>
<span class="token function">grep</span> username /etc/sudoers
<span class="token comment"># 2.ssh分发到服务器的家目录</span>
<span class="token function">ssh</span> <span class="token parameter variable">-p22</span> <span class="token parameter variable">-r</span> /etc/hosts username@ipaddress:~
<span class="token comment"># 3.ssh使用sudo复制到目标服务器的/etc</span>
<span class="token function">ssh</span> <span class="token parameter variable">-t</span> username@ipaddress <span class="token function">sudo</span> <span class="token function">rsync</span> hosts /etc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssh跳过hostkeychecking-不用输入yes" tabindex="-1"><a class="header-anchor" href="#ssh跳过hostkeychecking-不用输入yes" aria-hidden="true">#</a> SSH跳过HostKeyChecking，不用输入yes</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ssh跳过RSA key fingerprint 输入yes/no
在配置大量的节点之间需要连通的时候，如果自动复制很多节点，都需要输入yes，这样会显得很麻烦
解决方法：
1.修改配置文件/etc/ssh/ssh_config
 找  到  # StrictHostKeyChecking ask  
 修改为：StrictHostKeyChecking no 

2.添加参数 –o  【o=option】
 ssh root@192.168.25.133 -o &quot;StrictHostKeyChecking no&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ul><li>1.ssh远程的加密连接协议，相关软件openssh,openssl</li><li>2.默认端口22</li><li>3.ssh版本协议</li><li>4.服务器ssh连接，ftp连接，sshd守护进程，开机启动</li><li>5.ssh客户端重要命令：ssh(用户登录&amp;&amp;远程命令),scp,sftp,</li><li>6.安全验证方式：口令，密钥 学习原理</li><li>7.ssh服务优化：改端口，改监听，no root,no empty,no DNS,</li><li>8.ssh密钥对，公钥在服务器端，私钥在客户端</li></ul>`,21),t=[l];function c(r,d){return n(),a("div",null,t)}const o=s(i,[["render",c],["__file","ssh.html.vue"]]);export{o as default};
