import{_ as l,r as d,o as t,c,b as n,d as e,e as i,a as o,f as s}from"./app-55c326ac.js";const r={},v=n("h1",{id:"playbook介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#playbook介绍","aria-hidden":"true"},"#"),e(" Playbook介绍")],-1),p={href:"https://ansible-tran.readthedocs.io/en/latest/docs/playbooks.html",target:"_blank",rel:"noopener noreferrer"},u=s(`<p><code>Playbook</code>与<code>ad-hoc</code>相比,是一种完全不同的运用ansible的方式，类似与<code>saltstack</code>的<code>state</code>状态文件。<code>ad-hoc</code>无法持久使用，<code>playbook</code>可以持久使用。 <code>playbook</code>是由一个或多个<code>play</code>组成的列表，<code>play</code>的主要功能在于将事先归并为一组的主机装扮成事先通过<code>ansible</code>中的<code>task</code>定义好的角色。从根本上来讲，所谓的<code>task</code>无非是调用<code>ansible</code>的一个<code>module</code>。将多个<code>play</code>组织在一个<code>playbook</code>中，即可以让它们联合起来按事先编排的机制完成某一任务</p><h2 id="playbook核心元素" tabindex="-1"><a class="header-anchor" href="#playbook核心元素" aria-hidden="true">#</a> Playbook核心元素</h2><ul><li>Hosts 执行的远程主机列表</li><li>Tasks 任务集</li><li>Varniables 内置变量或自定义变量在playbook中调用</li><li>Templates 模板，即使用模板语法的文件，比如配置文件等</li><li>Handlers 和notity结合使用，由特定条件触发的操作，满足条件方才执行，否则不执行</li><li>tags 标签，指定某条任务执行，用于选择运行playbook中的部分代码。</li></ul><h2 id="playbook语法" tabindex="-1"><a class="header-anchor" href="#playbook语法" aria-hidden="true">#</a> Playbook语法</h2><p><code>playbook</code>使用<code>yaml</code>语法格式，后缀可以是<code>yaml</code>,也可以是<code>yml</code>。</p><ul><li>在单一一个<code>playbook</code>文件中，可以连续三个连子号(<code>---</code>)区分多个<code>play</code>。还有选择性的连续三个点好(<code>...</code>)用来表示<code>play</code>的结尾，也可省略。</li><li>次行开始正常写<code>playbook</code>的内容，一般都会写上描述该<code>playbook</code>的功能。</li><li>使用#号注释代码。</li><li>缩进必须统一，不能空格和<code>tab</code>混用。</li><li>缩进的级别也必须是一致的，同样的缩进代表同样的级别，程序判别配置的级别是通过缩进结合换行实现的。</li><li><code>YAML</code>文件内容和<code>Linux</code>系统大小写判断方式保持一致，是区分大小写的，<code>k/v</code>的值均需大小写敏感</li><li><code>k/v</code>的值可同行写也可以换行写。同行使用:分隔。</li><li><code>v</code>可以是个字符串，也可以是一个列表</li><li>一个完整的代码块功能需要最少元素包括 <code>name: task</code></li></ul><h3 id="一个简单的示例" tabindex="-1"><a class="header-anchor" href="#一个简单的示例" aria-hidden="true">#</a> 一个简单的示例</h3><ul><li><p>创建playbook文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> playbook01.yml <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
---                       #固定格式
- hosts: 192.168.1.31     #定义需要执行主机
  remote_user: root       #远程用户
  vars:                   #定义变量
    http_port: 8088       #变量

  tasks:                             #定义一个任务的开始
    - name: create new file          #定义任务的名称
      file: name=/tmp/playtest.txt state=touch   #调用模块，具体要做的事情
    - name: create new user
      user: name=test02 system=yes shell=/sbin/nologin
    - name: install package
      yum: name=httpd
    - name: config httpd
      template: src=./httpd.conf dest=/etc/httpd/conf/httpd.conf
      notify:                 #定义执行一个动作(action)让handlers来引用执行，与handlers配合使用
        - restart apache      #notify要执行的动作，这里必须与handlers中的name定义内容一致
    - name: copy index.html
      copy: src=/var/www/html/index.html dest=/var/www/html/index.html
    - name: start httpd
      service: name=httpd state=started
  handlers:                                    #处理器：更加tasks中notify定义的action触发执行相应的处理动作
    - name: restart apache                     #要与notify定义的内容相同
      service: name=httpd state=restarted      #触发要执行的动作
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>测试页面准备</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;&lt;h1&gt;playbook test file&lt;/h1&gt;&quot;</span> <span class="token operator">&gt;&gt;</span>/var/www/html/index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>配置文件准备</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> httpd.conf <span class="token operator">|</span><span class="token function">grep</span> ^Listen
    Listen <span class="token punctuation">{</span><span class="token punctuation">{</span> http_port <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行playbook， 第一次执行可以加-C选项，检查写的playbook是否ok</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible-playbook playbook01.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>输出结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PLAY [192.168.1.31] *********************************************************************************************
TASK [Gathering Facts] ******************************************************************************************
ok: [192.168.1.31]
TASK [create new file] ******************************************************************************************
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>验证上面playbook执行的结果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible <span class="token number">192.168</span>.1.31 <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&#39;ls /tmp/playtest.txt &amp;&amp; id test02&#39;</span>
<span class="token comment"># 192.168.1.31 | CHANGED | rc=0 &gt;&gt; /tmp/playtest.txt uid=990(test02) gid=985(test02) 组=985(test02)</span>

<span class="token function">curl</span> <span class="token number">192.168</span>.1.31:8088
<span class="token comment"># &lt;h1&gt;playbook test file&lt;/h1&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="playbook的运行方式" tabindex="-1"><a class="header-anchor" href="#playbook的运行方式" aria-hidden="true">#</a> Playbook的运行方式</h2><p>通过<code>ansible-playbook</code>命令运行 格式：<code>ansible-playbook ... [options]</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible-playbook <span class="token parameter variable">-h</span>

<span class="token comment">#ansible-playbook常用选项：</span>
<span class="token comment"># --check  or -C    #只检测可能会发生的改变，但不真正执行操作</span>
<span class="token comment"># --list-hosts      #列出运行任务的主机</span>
<span class="token comment"># --list-tags       #列出playbook文件中定义所有的tags</span>
<span class="token comment"># --list-tasks      #列出playbook文件中定义的所以任务集</span>
<span class="token comment"># --limit           #主机列表 只针对主机列表中的某个主机或者某个组执行</span>
<span class="token comment"># -f                #指定并发数，默认为5个</span>
<span class="token comment"># -t                #指定tags运行，运行某一个或者多个tags。（前提playbook中有定义tags）</span>
<span class="token comment"># -v                #显示过程  -vv  -vvv更详细</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="playbook中元素属性" tabindex="-1"><a class="header-anchor" href="#playbook中元素属性" aria-hidden="true">#</a> Playbook中元素属性</h2><h3 id="主机与用户" tabindex="-1"><a class="header-anchor" href="#主机与用户" aria-hidden="true">#</a> 主机与用户</h3><p>在一个<code>playbook</code>开始时，最先定义的是要操作的主机和用户</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> 192.168.1.31
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了上面的定义外，还可以在某一个<code>tasks</code>中定义要执行该任务的远程用户</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span> 
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run df <span class="token punctuation">-</span>h
    <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> test
    <span class="token key atrule">shell</span><span class="token punctuation">:</span> name=df <span class="token punctuation">-</span>h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以定义使用<code>sudo</code>授权用户执行该任务</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span> 
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run df <span class="token punctuation">-</span>h
    <span class="token key atrule">sudo_user</span><span class="token punctuation">:</span> test
    <span class="token key atrule">sudo</span><span class="token punctuation">:</span> yes
    <span class="token key atrule">shell</span><span class="token punctuation">:</span> name=df <span class="token punctuation">-</span>h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tasks任务列表" tabindex="-1"><a class="header-anchor" href="#tasks任务列表" aria-hidden="true">#</a> tasks任务列表</h3><p>每一个<code>task</code>必须有一个名称<code>name</code>,这样在运行<code>playbook</code>时，从其输出的任务执行信息中可以很清楚的辨别是属于哪一个<code>task</code>的，如果没有定义 <code>name</code>，<code>action</code>的值将会用作输出信息中标记特定的<code>task</code>。 每一个<code>playbook</code>中可以包含一个或者多个<code>tasks</code>任务列表，每一个<code>tasks</code>完成具体的一件事，（任务模块）比如创建一个用户或者安装一个软件等，在<code>hosts</code>中定义的主机或者主机组都将会执行这个被定义的<code>tasks</code>。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> create new file
    <span class="token key atrule">file</span><span class="token punctuation">:</span> path=/tmp/test01.txt state=touch
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> create new user
    <span class="token key atrule">user</span><span class="token punctuation">:</span> name=test001 state=present
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="handlers与notify" tabindex="-1"><a class="header-anchor" href="#handlers与notify" aria-hidden="true">#</a> Handlers与Notify</h3><p>很多时候当我们某一个配置发生改变，我们需要重启服务，（比如httpd配置文件文件发生改变了）这时候就可以用到<code>handlers</code>和<code>notify</code>了； (当发生改动时)<code>notify actions</code>会在<code>playbook</code>的每一个task结束时被触发，而且即使有多个不同task通知改动的发生，<code>notify actions</code>知会被触发一次；比如多个<code>resources</code>指出因为一个配置文件被改动，所以<code>apache</code>需要重启，但是重新启动的操作知会被执行一次。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> httpd.yml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
#用于安装httpd并配置启动
---
- hosts: 192.168.1.31
  remote_user: root

  tasks:
  - name: install httpd
    yum: name=httpd state=installed
  - name: config httpd
    template: src=/root/httpd.conf dest=/etc/httpd/conf/httpd.conf
    notify:
      - restart httpd
  - name: start httpd
    service: name=httpd state=started

  handlers:
    - name: restart httpd
      service: name=httpd state=restarted

#这里只要对httpd.conf配置文件作出了修改，修改后需要重启生效，在tasks中定义了restart httpd这个action，然后在handlers中引用上面tasks中定义的notify。
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="playbook中变量的使用" tabindex="-1"><a class="header-anchor" href="#playbook中变量的使用" aria-hidden="true">#</a> Playbook中变量的使用</h2><p><strong>环境说明</strong>：这里配置了两个组，一个apache组和一个nginx组</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/ansible/hosts <span class="token operator">&lt;&lt;</span><span class="token string">EOF
[apache]
192.168.1.36
192.168.1.33

[nginx]
192.168.1.3[1:2]
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命令行指定变量" tabindex="-1"><a class="header-anchor" href="#命令行指定变量" aria-hidden="true">#</a> 命令行指定变量</h3><p>执行<code>playbook</code>时候通过参数<code>-e</code>传入变量，这样传入的变量在整个<code>playbook</code>中都可以被调用，属于全局变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> variables.yml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
    ---
    - hosts: all
      remote_user: root

      tasks:
        - name: install pkg
          yum: name={{ pkg }}
EOF</span>
<span class="token comment"># 执行playbook 指定pkg</span>
ansible-playbook <span class="token parameter variable">-e</span> <span class="token string">&quot;pkg=httpd&quot;</span> variables.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hosts文件中定义变量" tabindex="-1"><a class="header-anchor" href="#hosts文件中定义变量" aria-hidden="true">#</a> hosts文件中定义变量</h3><p>在<code>/etc/ansible/hosts</code>文件中定义变量，可以针对每个主机定义不同的变量，也可以定义一个组的变量，然后直接在<code>playbook</code>中直接调用。注意，组中定义的变量没有单个主机中的优先级高。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编辑hosts文件定义变量</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/ansible/hosts <span class="token operator">&lt;&lt;</span><span class="token string">EOF
[apache]
192.168.1.36 webdir=/opt/test     #定义单个主机的变量
192.168.1.33
[apache:vars]      #定义整个组的统一变量
webdir=/web/test

[nginx]
192.168.1.3[1:2]
[nginx:vars]
webdir=/opt/web
EOF</span>

<span class="token comment"># 编辑playbook文件</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> variables.yml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
---
- hosts: all
  remote_user: root

  tasks:
    - name: create webdir
      file: name={{ webdir }} state=directory   #引用变量

EOF</span>
<span class="token comment"># 执行playbook</span>
ansible-playbook variables.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="playbook文件中定义变量" tabindex="-1"><a class="header-anchor" href="#playbook文件中定义变量" aria-hidden="true">#</a> playbook文件中定义变量</h3><p>编写<code>playbook</code>时，直接在里面定义变量，然后直接引用，可以定义多个变量；注意：如果在执行<code>playbook</code>时，又通过<code>-e</code>参数指定变量的值，那么会以<code>-e</code>参数指定的为准。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编辑playbook</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> variables.yml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
---
- hosts: all
  remote_user: root
  vars:                #定义变量
    pkg: nginx         #变量1
    dir: /tmp/test1    #变量2

  tasks:
    - name: install pkg
      yum: name={{ pkg }} state=installed    #引用变量
    - name: create new dir
      file: name={{ dir }} state=directory   #引用变量
EOF</span>

<span class="token comment"># 执行playbook</span>
ansible-playbook variables.yml

<span class="token comment"># 如果执行时候又重新指定了变量的值，那么会已重新指定的为准</span>
ansible-playbook <span class="token parameter variable">-e</span> <span class="token string">&quot;dir=/tmp/test2&quot;</span> variables.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调用setup模块获取变量" tabindex="-1"><a class="header-anchor" href="#调用setup模块获取变量" aria-hidden="true">#</a> 调用setup模块获取变量</h3>`,38),m=n("code",null,"setup",-1),b=n("code",null,"playbook",-1),h={href:"https://buji595.github.io/2019/05/27/Ansible",target:"_blank",rel:"noopener noreferrer"},k=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编辑playbook文件</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> variables.yml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
---
- hosts: all
  remote_user: root

  tasks:
    - name: create file
      file: name={{ ansible_fqdn }}.log state=touch   #引用setup中的ansible_fqdn

EOF</span>
<span class="token comment"># 执行playbook</span>
ansible-playbook variables.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="独立的变量yaml文件中定义" tabindex="-1"><a class="header-anchor" href="#独立的变量yaml文件中定义" aria-hidden="true">#</a> 独立的变量YAML文件中定义</h3><p>为了方便管理将所有的变量统一放在一个独立的变量<code>YAML</code>文件中，<code>laybook</code>文件直接引用文件调用变量即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 定义存放变量的文件</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> var.yml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
var1: vsftpd
var2: httpd
EOF</span>

<span class="token comment"># 编写playbook</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> variables.yml <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
---
- hosts: all
  remote_user: root
  vars_files:    #引用变量文件
    - ./var.yml   #指定变量文件的path（这里可以是绝对路径，也可以是相对路径）

  tasks:
    - name: install package
      yum: name={{ var1 }}   #引用变量
    - name: create file
      file: name=/tmp/{{ var2 }}.log state=touch   #引用变量
EOF</span>

<span class="token comment"># 执行playbook</span>
ansible-playbook  variables.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="playbook中标签的使用" tabindex="-1"><a class="header-anchor" href="#playbook中标签的使用" aria-hidden="true">#</a> Playbook中标签的使用</h2><ul><li><p>一个<code>playbook</code>文件中，执行时如果想执行某一个任务，那么可以给每个任务集进行打标签，这样在执行的时候可以通过<code>-t</code>选择指定标签执行，还可以通过<code>--skip-tags</code>选择除了某个标签外全部执行等。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编辑playbook</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> httpd.yml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
---
- hosts: 192.168.1.31
  remote_user: root

  tasks:
    - name: install httpd
      yum: name=httpd state=installed
      tags: inhttpd

    - name: start httpd
      service: name=httpd state=started
      tags: sthttpd

    - name: restart httpd
      service: name=httpd state=restarted
      tags: 
        - rshttpd
        - rs_httpd
EOF</span>
<span class="token comment"># 正常执行的结果</span>
ansible-playbook httpd.yml 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><ul><li><p>通过<code>-t</code>选项指定<code>tags</code>进行执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 通过-t指定tags名称，多个tags用逗号隔开</span>
ansible-playbook <span class="token parameter variable">-t</span> rshttpd httpd.yml 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过<code>--skip-tags</code>选项排除不执行的<code>tags</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible-playbook --skip-tags inhttpd httpd.yml 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="playbook中模板的使用" tabindex="-1"><a class="header-anchor" href="#playbook中模板的使用" aria-hidden="true">#</a> Playbook中模板的使用</h2><p><code>template</code>模板为我们提供了动态配置服务，使用<code>jinja2</code>语言，里面支持多种条件判断、循环、逻辑运算、比较操作等。其实说白了也就是一个文件，和之前配置文件使用<code>copy</code>一样，只是使用<code>copy</code>，不能根据服务器配置不一样进行不同动态的配置。这样就不利于管理。 说明： 1、多数情况下都将<code>template</code>文件放在和<code>playbook</code>文件同级的<code>templates</code>目录下（手动创建），这样<code>playbook</code>文件中可以直接引用，会自动去找这个文件。如果放在别的地方，也可以通过绝对路径去指定。 2、模板文件后缀名为<code>.j2</code>。</p>`,9),g={href:"http://www.ansible.com.cn/docs/playbooks_loops.html#standard-loops",target:"_blank",rel:"noopener noreferrer"},y=s(`<h3 id="示例-通过template安装httpd" tabindex="-1"><a class="header-anchor" href="#示例-通过template安装httpd" aria-hidden="true">#</a> 示例：通过template安装httpd</h3><ul><li><p><code>playbook</code>文件编写</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#模板示例</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> testtmp.yml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
---
- hosts: all
  remote_user: root
  vars:
    - listen_port: 88    #定义变量

  tasks:
    - name: Install Httpd
      yum: name=httpd state=installed
    - name: Config Httpd
      template: src=httpd.conf.j2 dest=/etc/httpd/conf/httpd.conf    #使用模板
      notify: Restart Httpd
    - name: Start Httpd
      service: name=httpd state=started
      
  handlers:
    - name: Restart Httpd
      service: name=httpd state=restarted
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>模板文件准备，<code>httpd</code>配置文件准备，这里配置文件端口使用了变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> templates/httpd.conf.j2 <span class="token operator">|</span><span class="token function">grep</span> ^Listen
<span class="token comment"># Listen {{ listen_port }}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看目录结构</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 目录结构</span>
tree <span class="token builtin class-name">.</span>
    <span class="token builtin class-name">.</span>
    ├── templates
    │   └── httpd.conf.j2
    └── testtmp.yml
    <span class="token number">1</span> directory, <span class="token number">2</span> files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行<code>playbook</code>，由于<code>192.168.1.36</code>那台机器是<code>6</code>的系统，模板文件里面的配置文件是<code>7</code>上面默认的<code>httpd</code>配置文件，<code>httpd</code>版本不一样(<code>6默认版本为2.2.15，7默认版本为2.4.6</code>)，所以拷贝过去后启动报错。下面使用<code>playbook</code>中的判断语句进行处理；此处先略过</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible-playbook testtmp.yml 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="template之when" tabindex="-1"><a class="header-anchor" href="#template之when" aria-hidden="true">#</a> template之when</h3>`,3),f={href:"http://www.ansible.com.cn/docs/playbooks_conditionals.html#when",target:"_blank",rel:"noopener noreferrer"},x=s(`<p>条件测试：如果需要根据变量、<code>facts</code>或此前任务的执行结果来做为某<code>task</code>执行与否的前提时要用到条件测试，通过<code>when</code>语句执行，在<code>task</code>中使用<code>jinja2</code>的语法格式、 when语句： 在<code>task</code>后添加<code>when</code>子句即可使用条件测试；<code>when</code>语句支持<code>jinja2</code>表达式语法。</p><p>类似这样：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">command</span><span class="token punctuation">:</span> /bin/false
    <span class="token key atrule">register</span><span class="token punctuation">:</span> result
    <span class="token key atrule">ignore_errors</span><span class="token punctuation">:</span> <span class="token boolean important">True</span>
  <span class="token punctuation">-</span> <span class="token key atrule">command</span><span class="token punctuation">:</span> /bin/something
    <span class="token key atrule">when</span><span class="token punctuation">:</span> result<span class="token punctuation">|</span>failed
  <span class="token punctuation">-</span> <span class="token key atrule">command</span><span class="token punctuation">:</span> /bin/something_else
    <span class="token key atrule">when</span><span class="token punctuation">:</span> result<span class="token punctuation">|</span>success
  <span class="token punctuation">-</span> <span class="token key atrule">command</span><span class="token punctuation">:</span> /bin/still/something_else
    <span class="token key atrule">when</span><span class="token punctuation">:</span> result<span class="token punctuation">|</span>skipped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="示例-通过when语句完善上面的httpd配置" tabindex="-1"><a class="header-anchor" href="#示例-通过when语句完善上面的httpd配置" aria-hidden="true">#</a> 示例：通过when语句完善上面的httpd配置</h4>`,4),_=s(`<li><p>准备两个配置文件，一个<code>centos6</code>系统<code>httpd</code>配置文件，一个<code>centos7</code>系统httpd配置文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tree templates/
    templates/
    ├── httpd6.conf.j2     <span class="token comment">#6系统2.2.15版本httpd配置文件</span>
    └── httpd7.conf.j2     <span class="token comment">#7系统2.4.6版本httpd配置文件</span>

    <span class="token number">0</span> directories, <span class="token number">2</span> files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),w=n("code",null,"playbook",-1),E={href:"https://buji595.github.io/2019/05/27/Ansible",target:"_blank",rel:"noopener noreferrer"},F=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#when示例</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> testtmp.yml <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
---
- hosts: all
  remote_user: root
  vars:
    - listen_port: 88

  tasks:
    - name: Install Httpd
      yum: name=httpd state=installed
    - name: Config System6 Httpd
      template: src=httpd6.conf.j2 dest=/etc/httpd/conf/httpd.conf
      when: ansible_distribution_major_version == &quot;6&quot;   #判断系统版本，为6便执行上面的template配置6的配置文件
      notify: Restart Httpd
    - name: Config System7 Httpd
      template: src=httpd7.conf.j2 dest=/etc/httpd/conf/httpd.conf
      when: ansible_distribution_major_version == &quot;7&quot;   #判断系统版本，为7便执行上面的template配置7的配置文件
      notify: Restart Httpd
    - name: Start Httpd
      service: name=httpd state=started

  handlers:
    - name: Restart Httpd
      service: name=httpd state=restarted
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),O=n("li",null,[n("p",null,"执行playbook"),n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,`ansible-playbook testtmp.yml
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])])],-1),q=s(`<h3 id="template之with-items" tabindex="-1"><a class="header-anchor" href="#template之with-items" aria-hidden="true">#</a> template之with_items</h3><p><code>with_items</code>迭代，当有需要重复性执行的任务时，可以使用迭代机制。 对迭代项的引用，固定变量名为<code>“item”</code>，要在task中使用with_items给定要迭代的元素列表。 列表格式：   字符串   字典</p><h4 id="示例1-通过with-items安装多个不同软件" tabindex="-1"><a class="header-anchor" href="#示例1-通过with-items安装多个不同软件" aria-hidden="true">#</a> 示例1：通过with_items安装多个不同软件**</h4><ul><li><p>编写<code>playbook</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 示例with_items</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> testwith.yml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
---
- hosts: all
  remote_user: root

  tasks:
    - name: Install Package
      yum: name={{ item }} state=installed   #引用item获取值
      with_items:     #定义with_items
        - httpd
        - vsftpd
        - nginx
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>上面<code>tasks</code>写法等同于：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Httpd
      <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=httpd state=installed
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Vsftpd
      <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=vsftpd state=installed
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Nginx
      <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=nginx state=installed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="示例2-通过嵌套子变量创建用户并加入不同的组" tabindex="-1"><a class="header-anchor" href="#示例2-通过嵌套子变量创建用户并加入不同的组" aria-hidden="true">#</a> 示例2：通过嵌套子变量创建用户并加入不同的组**</h4><ul><li><p>编写<code>playbook</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 示例with_items嵌套子变量</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> testwith01.yml <span class="token operator">&lt;&lt;</span><span class="token string">EOF

---
- hosts: all
  remote_user: root

  tasks:
    - name: Create New Group
      group: name={{ item }} state=present
      with_items: 
        - group1
        - group2
        - group3 

    - name: Create New User
      user: name={{ item.name }} group={{ item.group }} state=present
      with_items:
        - { name: &#39;user1&#39;, group: &#39;group1&#39; } 
        - { name: &#39;user2&#39;, group: &#39;group2&#39; } 
        - { name: &#39;user3&#39;, group: &#39;group3&#39; }
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行<code>playbook</code>并验证</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 执行playbook</span>
ansible-playbook testwith01.yml

<span class="token comment"># 验证是否成功创建用户及组</span>
ansible all <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&#39;tail -3 /etc/passwd&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="template之for-if" tabindex="-1"><a class="header-anchor" href="#template之for-if" aria-hidden="true">#</a> template之for if</h3><p>通过使用<code>for</code>，<code>if</code>可以更加灵活的生成配置文件等需求，还可以在里面根据各种条件进行判断，然后生成不同的配置文件、或者服务器配置相关等。</p><h4 id="示例1" tabindex="-1"><a class="header-anchor" href="#示例1" aria-hidden="true">#</a> 示例1</h4><ul><li><p>编写<code>playbook</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># template for 示例</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> testfor01.yml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
---
* hosts: all
  remote_user: root
  vars:
    nginx_vhost_port:
      - 81
      - 82
      - 83

  tasks:
    * name: Templage Nginx Config
      template: src=nginx.conf.j2 dest=/tmp/nginx_test.conf
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>模板文件编写</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 循环playbook文件中定义的变量，依次赋值给port</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> templates/nginx.conf.j2 <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
{% for port in nginx_vhost_port %}
server{
      listen: {{ port }};
      server_name: localhost;
}
{% endfor %}
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行<code>playbook</code>并查看生成结果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible-playbook testfor01.yml

<span class="token comment"># 去到一个节点看下生成的结果发现自动生成了三个虚拟主机</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /tmp/nginx_test.conf<span class="token operator">&lt;&lt;</span><span class="token string">EOF
server{
      listen: 81;
      server_name: localhost;
}
server{
      listen: 82;
      server_name: localhost;
}
server{
      listen: 83;
      server_name: localhost;
}
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="示例2" tabindex="-1"><a class="header-anchor" href="#示例2" aria-hidden="true">#</a> 示例2</h4><ul><li><p>编写<code>playbook</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> testfor02.yml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
# template for 示例
---
- hosts: all
  remote_user: root
  vars:
    nginx_vhosts:
      - web1:
        listen: 8081
        server_name: &quot;web1.example.com&quot;
        root: &quot;/var/www/nginx/web1&quot;
      - web2:
        listen: 8082
        server_name: &quot;web2.example.com&quot;
        root: &quot;/var/www/nginx/web2&quot;
      - web3:
        listen: 8083
        server_name: &quot;web3.example.com&quot;
        root: &quot;/var/www/nginx/web3&quot;

  tasks:
    - name: Templage Nginx Config
      template: src=nginx.conf.j2 dest=/tmp/nginx_vhost.conf
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>模板文件编写</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> templates/nginx.conf.j2 <span class="token operator">&lt;&lt;</span><span class="token string">EOF
{% for vhost in nginx_vhosts %}
server{
    listen:    {{ vhost.listen }};
    server_name:    {{ vhost.server_name }};
    root:   {{ vhost.root }}; 
}
{% endfor %}
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行<code>playbook</code>并查看生成结果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible-playbook testfor02.yml

<span class="token comment"># 去到一个节点看下生成的结果发现自动生成了三个虚拟主机</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /tmp/nginx_vhost.conf <span class="token operator">&lt;&lt;</span><span class="token string">EOF
server{
      listen:    8081;
      server_name:    web1.example.com;
      root:   /var/www/nginx/web1; 
}
server{
      listen:    8082;
      server_name:    web2.example.com;
      root:   /var/www/nginx/web2; 
}
server{
      listen:    8083;
      server_name:    web3.example.com;
      root:   /var/www/nginx/web3; 
}
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="示例3" tabindex="-1"><a class="header-anchor" href="#示例3" aria-hidden="true">#</a> 示例3</h4><p>在for循环中再嵌套if判断，让生成的配置文件更加灵活</p><ul><li>编写<code>playbook</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> testfor03.yml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
# template for 示例
---
- hosts: all
remote_user: root
vars:
  nginx_vhosts:
    - web1:
      listen: 8081
      root: &quot;/var/www/nginx/web1&quot;
    - web2:
      server_name: &quot;web2.example.com&quot;
      root: &quot;/var/www/nginx/web2&quot;
    - web3:
      listen: 8083
      server_name: &quot;web3.example.com&quot;
      root: &quot;/var/www/nginx/web3&quot;

tasks:
  - name: Templage Nginx Config
    template: src=nginx.conf.j2 dest=/tmp/nginx_vhost.conf
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>模板文件编写</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 说明：这里添加了判断，如果listen没有定义的话，默认端口使用8888，如果server_name有定义，那么生成的配置文件中才有这一项。</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> templates/nginx.conf.j2  <span class="token operator">&lt;&lt;</span><span class="token string">EOF
{% for vhost in nginx_vhosts %}
server {
  {% if vhost.listen is defined %}
  listen:    {{ vhost.listen }};
  {% else %}
  listen: 8888;
  {% endif %}
  {% if vhost.server_name is defined %}
  server_name:    {{ vhost.server_name }};
  {% endif %}
  root:   {{ vhost.root }}; 
}
{% endfor %}
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>执行<code>playbook</code>并查看生成结果</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible-playbook testfor03.yml

<span class="token comment"># 去到一个节点看下生成的结果发现自动生成了三个虚拟主机</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /tmp/nginx_vhost.conf <span class="token operator">&lt;&lt;</span><span class="token string">EOF
server {
  listen:    8081;
  root:   /var/www/nginx/web1; 
}
server {
  listen: 8888;
  server_name:    web2.example.com;
  root:   /var/www/nginx/web2; 
}
server {
  listen:    8083;
  server_name:    web3.example.com;
  root:   /var/www/nginx/web3; 
}
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function j(H,A){const a=d("ExternalLinkIcon");return t(),c("div",null,[v,n("p",null,[n("a",p,[e("playbook参考文档"),i(a)])]),u,n("p",null,[m,e("模块默认是获取主机信息的，有时候在"),b,e("中需要用到，所以可以直接调用。常用的参数[参考]("),n("a",h,[e("https://buji595.github.io/2019/05/27/Ansible"),i(a)]),e(" Ad-hoc常用Module/#setup)")]),k,n("p",null,[n("a",g,[e("循环参考"),i(a)])]),y,n("p",null,[n("a",f,[e("when语句参考"),i(a)])]),x,n("ul",null,[_,n("li",null,[n("p",null,[e("修改"),w,e("文件，通过setup模块获取系统版本去判断。[setup常用模块]("),n("a",E,[e("https://buji595.github.io/2019/05/27/Ansible"),i(a)]),e(" Ad-hoc常用Module/#setup)")]),F]),O]),q,o(` 
#### 上面三个示例的图片展示效果

**例一**

![img](https://img2018.cnblogs.com/blog/1210730/201906/1210730-20190603182408963-2004947736.png)

**例二**

![img](https://img2018.cnblogs.com/blog/1210730/201906/1210730-20190603182435304-125352301.png)

**例三**

![img](https://img2018.cnblogs.com/blog/1210730/201906/1210730-20190603182451646-877767815.png) `)])}const N=l(r,[["render",j],["__file","Playbook-1.html.vue"]]);export{N as default};
