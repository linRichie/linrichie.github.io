import{_ as a,o as e,c as s,f as n}from"./app-55c326ac.js";const i={},l=n(`<h1 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h1><h2 id="编辑创建-etc-ansible-hosts文件" tabindex="-1"><a class="header-anchor" href="#编辑创建-etc-ansible-hosts文件" aria-hidden="true">#</a> 编辑创建/etc/ansible/hosts文件</h2><p>此文件，主要是用于管理ansible进行远程操作的主机。但是你的public SSH必须在这些系统的“authorized_keys”中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/ansible/hosts <span class="token operator">&lt;&lt;</span>EOL
<span class="token number">192.168</span>.50.66
<span class="token number">192.168</span>.50.110
<span class="token number">192.168</span>.50.111
<span class="token number">192.168</span>.50.112
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible all <span class="token parameter variable">-m</span> <span class="token function">ping</span> 
ansible all <span class="token parameter variable">-a</span> <span class="token string">&quot;/bin/echo hello&quot;</span>    <span class="token comment">#-a:参数  模块的参数</span>
ansible servers <span class="token parameter variable">-m</span> <span class="token function">ping</span> <span class="token parameter variable">-o</span>      <span class="token comment">#-o:可以让结果在一行中进行显示</span>
ansible servers <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&#39;uptime&#39;</span>
ansibel servers <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&#39;uptime&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="公钥认证" tabindex="-1"><a class="header-anchor" href="#公钥认证" aria-hidden="true">#</a> 公钥认证</h2><p>当需要禁用<code>known_hosts</code>对key信息的确认提示，可以通过编辑/etc/ansible/ansible.cfg 或者 ~/.ansible.cfg进行实现</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>[default]
host_key_checking = False
# 或者：
export ANSIBLE_HOST_KEY_CHECKING=False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="inventory文件" tabindex="-1"><a class="header-anchor" href="#inventory文件" aria-hidden="true">#</a> Inventory文件</h1><p>Ansible可同时操作属于一个组的多台主机，组和主机之间的关系通过inventory文件配置，默认的文件路径为：<code>/etc/ansible/hosts</code><br> 除了默认文件外，你还可以同时使用多个inventory文件，也可以从动态源或云上拉取inventory配置信息。</p><h2 id="主机与组" tabindex="-1"><a class="header-anchor" href="#主机与组" aria-hidden="true">#</a> 主机与组</h2><p><code>/etc/ansible/hosts</code>文件的格式与Windows的ini配置文件类似 (清单文件) <code>ansible</code>只纳管定义在清单文件中的主机</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[nameserver]   
192.168.50.66
192.168.50.110
192.168.50.111
192.168.50.112

[dbserver]
192.168.50.66
192.168.50.110
192.168.50.111
192.168.50.112
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>#[]里面的是：组名，用于对系统进行分类，便于对不同系统进行个别的管理。</p></li><li><p>一个系统可以属于不同的组，比如一台服务器可以同时属于nameserver组和dbserver组，这是属于两个组的变量都可以为这台主机所用。但存在变量的优先级</p></li><li><p>如果有主机的SSH端口不是标准的22端口，可在主机名之后加上端口号，用冒号分割。SSH配置文件中列出的端口号不会在paramiko连接中使用，会在openssh连接中使用</p></li><li><p>端口号不是默认设置是，可明确表示为： aa.example.com:5599</p></li><li><p>当有一些静态IP地址，希望设置一些别名，但不是在系统的hosts文件中设置，或者是通过隧道在连接，就可以设置成如下：</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>jumper ansible_ssh_port=5555 ansible_ssh_host=192.168.50.66

# jumper：表示的是别名 连接的是192.168.50.66:5555 
这是通过inventory文件的特性功能设置的变量，一般，这不是设置变量的最好方式。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>一组相似的hostname，可以简写：</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>[webserver]
www.Client_[01:03].com
www[01:50].example.com

# 还可以定义字母范围的简写
[dataserver]
db-[a:f].example.com

# 对于每一个host，还可以选择连接类型和连接用户名
[targets]
localhost           ansible_connection=local
other1.example.com  ansible_connection=ssh      ansible_ssh_user=root
other2.example.com  ansible_connection=ssh      ansible_ssh_user=mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>以上对于inventory文件的设置是一种速记法，后面讨论如何将这些设置保存为“host_vars”目录中的独立文件</p></li></ul><h2 id="清单文件" tabindex="-1"><a class="header-anchor" href="#清单文件" aria-hidden="true">#</a> 清单文件</h2><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>[servers]
192.168.50.66
192.168.50.110
192.168.50.111
192.168.50.112
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认清单文件是<code>/etc/ansible/hosts</code><br> 在运行时通过<code>-i</code>参数指定清单文件</p><h2 id="测试主机连通性" tabindex="-1"><a class="header-anchor" href="#测试主机连通性" aria-hidden="true">#</a> 测试主机连通性</h2><p>ansible &lt;www.baidu.com&gt; -m ping 执行出现错误。原因：<code>ansible</code>只纳管定义在清单文件的主机</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible servers <span class="token parameter variable">-m</span> <span class="token function">ping</span> 
ansible server <span class="token parameter variable">-m</span> <span class="token function">ping</span> <span class="token parameter variable">-o</span>
<span class="token comment"># -o 参数：可以让结果在一个行中进行显示</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="执行远程指令" tabindex="-1"><a class="header-anchor" href="#执行远程指令" aria-hidden="true">#</a> 执行远程指令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible servers <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&#39;uptime&#39;</span>
ansible servers <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&#39;uptime&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="远程主机的yum管理" tabindex="-1"><a class="header-anchor" href="#远程主机的yum管理" aria-hidden="true">#</a> 远程主机的yum管理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 确认软件是否安装</span>
ansible servers <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&#39;rpm -qa | grep httpd&#39;</span>

<span class="token comment">## 安装httpd</span>
ansible servers <span class="token parameter variable">-m</span> yum <span class="token parameter variable">-a</span> <span class="token string">&#39;name=httpd state=latest&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="再次安装" tabindex="-1"><a class="header-anchor" href="#再次安装" aria-hidden="true">#</a> 再次安装</h2><p>再次安装时，就会检查客户端已安装的组件是否是最新的，若是最新的，就不会再次安装。<code>changed</code>字段会返回<code>false</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible servers <span class="token parameter variable">-m</span> yum <span class="token parameter variable">-a</span> <span class="token string">&#39;name=https,state=latest&#39;</span>
ansible Client --list-hosts
ansible Client <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&#39;hostname&#39;</span> <span class="token parameter variable">-o</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ansible-inventory内置参数" tabindex="-1"><a class="header-anchor" href="#ansible-inventory内置参数" aria-hidden="true">#</a> Ansible Inventory内置参数</h2><table><thead><tr><th>参数</th><th>用途</th><th>例子</th></tr></thead><tbody><tr><td>ansible_ssh_host</td><td>将要连接的远程主机名ssh地址</td><td>ansible_ssh_host=192.168.1.100</td></tr><tr><td>ansible_ssh_port</td><td>ssh端口</td><td>ansible_ssh_port=3000</td></tr><tr><td>ansible_ssh_user</td><td>ssh用户名</td><td>ansible_ssh_user=user</td></tr><tr><td>ansible_ssh_pass</td><td>ssh密码</td><td>ansible_ssh_pass=pass</td></tr><tr><td>ansible_sudo</td><td>sudo用户</td><td></td></tr><tr><td>ansible_sudo_pass</td><td>sudo密码</td><td></td></tr><tr><td>ansible_sudo_exe</td><td>sudo执行路径</td><td>ansible_sudo_exe=/usr/bin/sudo</td></tr><tr><td>ansible_connection</td><td>hosts连接方式</td><td>ansible_connection=local</td></tr><tr><td>ansible_ssh_private_key_file</td><td>hosts私钥</td><td>ansible_ssh_private_key_file=/root/key</td></tr></tbody></table><h2 id="ansible组件-ad-hoc" tabindex="-1"><a class="header-anchor" href="#ansible组件-ad-hoc" aria-hidden="true">#</a> Ansible组件 -Ad-Hoc</h2><p>ad hoc，临时的，在ansible中是指需要快速执行，并且不需要报错的命令。对于复杂的命令则需要playbook</p><h3 id="执行命令-m-shell" tabindex="-1"><a class="header-anchor" href="#执行命令-m-shell" aria-hidden="true">#</a> 执行命令 -m shell</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible Client <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&#39;hostname&#39;</span> <span class="token parameter variable">-o</span>

ansible Client <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&#39;uname -r&#39;</span> <span class="token parameter variable">-o</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复制文件-m-copy" tabindex="-1"><a class="header-anchor" href="#复制文件-m-copy" aria-hidden="true">#</a> 复制文件 -m copy</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible Clietn <span class="token parameter variable">-m</span> copy <span class="token parameter variable">-a</span> <span class="token string">&quot;src=test.sh dest=/tmp&quot;</span>

<span class="token comment">## src(srcation)：起始位置</span>
dest<span class="token punctuation">(</span>destlation<span class="token punctuation">)</span>：终点位置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="软件包管理-m-yum" tabindex="-1"><a class="header-anchor" href="#软件包管理-m-yum" aria-hidden="true">#</a> 软件包管理 -m yum</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible Client <span class="token parameter variable">-m</span> yum <span class="token parameter variable">-a</span> <span class="token string">&quot;name=vim state=present&quot;</span>

ansible Client <span class="token parameter variable">-m</span> yum <span class="token parameter variable">-a</span> <span class="token string">&quot;name=httpd state=absent&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务管理-m-service" tabindex="-1"><a class="header-anchor" href="#服务管理-m-service" aria-hidden="true">#</a> 服务管理 -m service</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible Client <span class="token parameter variable">-m</span> <span class="token function">service</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;name=httpd state=restarted enabled=yes&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ansible组件-facts" tabindex="-1"><a class="header-anchor" href="#ansible组件-facts" aria-hidden="true">#</a> Ansible组件- Facts</h2><p>facts组件是Ansible用于采集被管理主机信息的功能，可以使用<code>setup</code>模块查看主机所有的<code>facts</code>信息。可以使用<code>filter</code>参数对结果进行过滤</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible Client <span class="token parameter variable">-m</span> setup <span class="token parameter variable">-a</span> <span class="token string">&quot;filter=ansible_default_ipv4&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ansible组件-playbook" tabindex="-1"><a class="header-anchor" href="#ansible组件-playbook" aria-hidden="true">#</a> Ansible组件 - playbook</h2><p><code>playbook</code>是有一个或者多个<code>play</code>组成的列表。<code>play</code>的主要功能在于将实现归并为一组的主机装扮成实现通过ansible中的<code>task</code>定义好的角色<code>role</code><br> 根本上来讲，所谓的<code>task</code>无非是调用ansible的一个<code>module</code>。将多个<code>play</code>组织在一个<code>playbook</code>中，既可以让他们联合起来按事先编排的机制完成某一任务</p><h3 id="playbook示例" tabindex="-1"><a class="header-anchor" href="#playbook示例" aria-hidden="true">#</a> playbook示例</h3><ul><li>yaml文件</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> hosts<span class="token punctuation">:</span>Client
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install httpd
    <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=httpd state=present
    
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> copy httpd conf
    <span class="token key atrule">template</span><span class="token punctuation">:</span> src=/etc/httpd/conf/httpd.confn dest=/etc/httpd/conf/httpd owner=root group=root mode=0644
   
    <span class="token key atrule">notify</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> Restart Apache Service
   
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> enable htppd is running
    <span class="token key atrule">service</span><span class="token punctuation">:</span> name=httpd state=started enabled=yes

  <span class="token key atrule">handlers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Restart Apache Service
    <span class="token key atrule">service</span><span class="token punctuation">:</span> name=httpd state=restarted

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检查yaml文件" tabindex="-1"><a class="header-anchor" href="#检查yaml文件" aria-hidden="true">#</a> 检查yaml文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ansible-playbook Client.yaml --syntax-check
ansible-playbook Client.yaml --list-task
ansible-playbook Client.yaml --list-hosts

# 执行playbook
ansible-playbook Client.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,49),t=[l];function d(r,c){return e(),s("div",null,t)}const p=a(i,[["render",d],["__file","基本操作.html.vue"]]);export{p as default};
