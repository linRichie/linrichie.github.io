import{_ as l,r as p,o as i,c,b as n,d as a,e,f as t}from"./app-55c326ac.js";const o={},u=t(`<h1 id="playbook-操作" tabindex="-1"><a class="header-anchor" href="#playbook-操作" aria-hidden="true">#</a> Playbook 操作</h1><h2 id="任务" tabindex="-1"><a class="header-anchor" href="#任务" aria-hidden="true">#</a> 任务</h2><p>任务定义了应由配置执行的单个步骤。它通常涉及模块的使用或原始命令的执行（实际上，它只是为处理原始命令而创建的模块）。这是任务的外观：</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>- name: Tfis is a task
  yum: name=vim state=latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>该<code>- name</code>部分实际上是可选的。但建议在执行任务时显示在配置的输出上。<strong>表示的是：描述信息</strong><br> 该<code>yum</code>部分是一个内置的Ansible模块，抽象了基于Centos的发行版上的包管理。 用来告诉Ansible<br><code>name=vim</code>,表示的是包名，其状态为<code>latest</code>。这将导致程序包管理器安装此程序包。</p><h2 id="playbook格式" tabindex="-1"><a class="header-anchor" href="#playbook格式" aria-hidden="true">#</a> Playbook格式</h2><p>playbook由YMAL语言编写。YAML参考了其他多种语言，包括：XML、C语言、Python、Perl<br> YMAL格式是类似于JSON的文件格式，便于人理解和阅读，同时便于书写。首先学习了解一下YMAL的格式，对我们后面书写playbook很有帮助。以下为playbook常用到的YMAL格式。</p>`,7),d={href:"http://docs.ansible.com/YAMLSyntax.html",target:"_blank",rel:"noopener noreferrer"},r=n("br",null,null,-1),k={href:"http://note.youdao.com/noteshare?id=4d62dbfa52bfb64670a9253d759bd66a&sub=46C40D5C83444EE788C943A2A052FE66",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all                
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>                    
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install mysql<span class="token punctuation">-</span>server package
      <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=mysql<span class="token punctuation">-</span>server state=present
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Starting mysql service
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=mysqld state=started
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>hosts: 指定使用哪个主机或主机组运行下面tasks,每个playbook都必须指定hosts，hosts也可以使用通配符格式。主机或主机组在inventory中指定<code>ini</code>文件(默认为<code>/etc/ansible/hosts</code>，也可以自己编辑。<code>-i</code>可以指定inventory文件)。在运行清单文件的时候，-list-hosts选项会显示那些主机将会参与执行task的过程中。</li><li>remote_user： 指定远程主机中的那个<code>用户</code>远程登录系统，在远程系统执行<code>tasks</code>的用户，可以任意指定，也可以sudo，但是用户必须要有执行相应task的权限</li><li>tasks： 指定远程主机将要执行的一系列动作。tasks的核心为ansible的模块。tasks包含<code>name</code>和要执行的模块，<code>name</code>是可选的，只是为了便于用户阅读。还是建议加上去，模块是必须的，同时也要给予模块相应的参数。</li></ul><h2 id="playbook运行结果" tabindex="-1"><a class="header-anchor" href="#playbook运行结果" aria-hidden="true">#</a> Playbook运行结果</h2><p>用ansible_playbook运行playbook文件，得到的输出内容是JSON格式</p><ul><li>绿色: 表示执行成功，系统保持原样</li><li>黄色：表示系统状态发生改变</li><li>红色：表示执行失败，显示错误输出。</li></ul><p>当运行playbook文件的时候，<strong>不能</strong>使用<code>ansible</code>,而是使用<code>ansiblee-playbook</code></p><h3 id="列出远程主机" tabindex="-1"><a class="header-anchor" href="#列出远程主机" aria-hidden="true">#</a> 列出远程主机</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible-playbook Client.yaml --list-hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="ansible具有幂等性" tabindex="-1"><a class="header-anchor" href="#ansible具有幂等性" aria-hidden="true">#</a> ansible具有幂等性</h3><blockquote><p>再次执行的时候ansible会检测这个task是否已经执行过, 如果这个task任务执行过,它不会再次执行task任务, 而是直接显示ok状态.</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all
  <span class="token key atrule">become</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Update apt<span class="token punctuation">-</span>cache
      <span class="token key atrule">yum</span><span class="token punctuation">:</span> update_cache=yes
      
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Vim
      <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=vim state=latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all
  <span class="token key atrule">become</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>                         <span class="token comment">#使用变量 变量为Packages，变量值为vim</span>
    <span class="token key atrule">packages</span><span class="token punctuation">:</span> vim
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Packages
      <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> Packages <span class="token punctuation">}</span><span class="token punctuation">}</span> state=latest         <span class="token comment">#引用变量</span>
      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Using Loops(使用循环)</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Packages
  <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> item <span class="token punctuation">}</span><span class="token punctuation">}</span> state=latest         <span class="token comment">#将循环里的进行安装，这里的item相当于字典</span>
  <span class="token key atrule">with_items</span><span class="token punctuation">:</span>                               <span class="token comment">#使用循环</span>
    <span class="token punctuation">-</span> vim   
    <span class="token punctuation">-</span> git
    <span class="token punctuation">-</span> curl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all
  <span class="token key atrule">sudo</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
    <span class="token key atrule">packages</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vim&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;git&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;curl&#39;</span><span class="token punctuation">]</span>
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install packages
      <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=<span class="token punctuation">{</span><span class="token punctuation">{</span> item <span class="token punctuation">}</span><span class="token punctuation">}</span> state=latest
      <span class="token key atrule">with_items</span><span class="token punctuation">:</span> packages              <span class="token comment">#所需要循环的列表是“packages列表”</span>
<span class="token comment">## 使用一个数组变量来进行循环</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用条件" tabindex="-1"><a class="header-anchor" href="#使用条件" aria-hidden="true">#</a> 使用条件</h4><p>例如，条件可以用于基于变量或来自命令的输出来动态地决定是否应该执行任务。<br> 下面是尽在基于Centos的系统上执行的任务示例：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Shutdown Centos Based Systems
  <span class="token key atrule">command</span><span class="token punctuation">:</span> /sbin/shutdown <span class="token punctuation">-</span>t now
  <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_os_family == &quot;Centos&quot;

<span class="token comment"># 上面when相当于if，表示一个判断语句，当表达式为\`\`True\`\`的时候，才执行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">## ignore-erroes 表示的是：当前面的任务执行失败，不影响后面任务的执行</span>
<span class="token comment">## debug 表示的是：用于显示变量或调试消息的内容，可以打印字符串(使用msg参数)。或打印变量的内容(使用var参数)</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Check if PHP is install
  <span class="token key atrule">register</span><span class="token punctuation">:</span> php_installed
  <span class="token key atrule">command</span><span class="token punctuation">:</span> php <span class="token punctuation">-</span>v
  <span class="token key atrule">ignore_errors</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> This task is only executed if PHP is installed
  <span class="token key atrule">debug</span><span class="token punctuation">:</span> var=php_install
  <span class="token key atrule">when</span><span class="token punctuation">:</span> php_installed<span class="token punctuation">|</span>success
  
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> This task is only executed if PHP is NOT isntalled
  <span class="token key atrule">debug</span><span class="token punctuation">:</span> msg=&#39;PHP is NOT installed&#39;
  <span class="token key atrule">when</span><span class="token punctuation">:</span> php_installed<span class="token punctuation">|</span>failed

<span class="token comment">##当安装成功，var为php-install</span>
<span class="token comment">##当安装失败，输出 PHP is not installed</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用模块" tabindex="-1"><a class="header-anchor" href="#使用模块" aria-hidden="true">#</a> 使用模块</h2><p>模板通常用于设置配置文件，允许使用变量和其他功能，以使这些文件更通用和可重用。Ansible使用Jinja2模板引擎。<br> 例子：设置Apache虚拟主机，使用变量为该主机这只文档根目录</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#vhost.tpl</span>
&lt;VirtualHost <span class="token important">*:80&gt;</span>
    ServerAdmin webmaster@localhost
    DocumentRoot <span class="token punctuation">{</span><span class="token punctuation">{</span> doc_root <span class="token punctuation">}</span><span class="token punctuation">}</span>
    
    &lt;Directory <span class="token punctuation">{</span><span class="token punctuation">{</span> doc_root  <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">&gt;</span>
    AllowOverride All
    Require all granted
    &lt;/Directory<span class="token punctuation">&gt;</span>
&lt;/VirtualHost<span class="token punctuation">&gt;</span>

<span class="token comment">## 内置模块template用于从任务应用模块。</span>
<span class="token comment">## 将上面的文件命令：vhost.tpl，并放在与playbook同一目录下。则可以使用该模块替换默认的Apache虚拟主机</span>

<span class="token comment">#Client.yaml</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Change default Apache virtual host
  <span class="token key atrule">template</span><span class="token punctuation">:</span> src=vhost.tpl dest=/etc/apach2/sites<span class="token punctuation">-</span>available/000<span class="token punctuation">-</span>default.conf\\
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义和触发处理程序" tabindex="-1"><a class="header-anchor" href="#定义和触发处理程序" aria-hidden="true">#</a> 定义和触发处理程序</h2><p>处理程序用于触发服务中的状态更改，例如重新启动或停止。处理程序的行为与任务非常相似，按照定义的顺序执行一次，但只有先前从notify任务中的指令触发才会执行。<br> 处理程序通常被定义为<code>handlers</code>剧本的一部分中的数组</p><p>在前面设置了一个Apache虚拟主机。如果要确保在虚拟主机更改后重新启动Apache，首先需要为Apache服务创建一个处理程序。这就是在剧本中定义处理程序的方式：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">handlers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restart apache
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=apache2 state=restarted
      
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> other handler
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=other state=restarted
      
name这里的指令很重要，因为它将是此处理程序的唯一标识符。要从任务中触发此处理程序，您应该使用以下notify选项：
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Change default Apache virtual host
  <span class="token key atrule">template</span><span class="token punctuation">:</span> src=vhost.tpl dest=/etc/apache2/sites<span class="token punctuation">-</span>available/000<span class="token punctuation">-</span>default.conf
  <span class="token key atrule">notify</span><span class="token punctuation">:</span> restart apache
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整的示例，包括用于设置Apache的模板文件和由Web服务器提供的HTML文件，该文件夹还包含一个Vagrantfile，可让您使用由Vagrant管理的虚拟机以简化的设置测试该剧本。</p><p>playbook.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all                <span class="token comment">#设置主机名 all表示所有。</span>
  <span class="token key atrule">become</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>                     <span class="token comment"># 设置变量 doc_rot为变量名</span>
    <span class="token key atrule">doc_root</span><span class="token punctuation">:</span> /var/www/example
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>                    <span class="token comment"># 执行操作指令</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Update apt
      <span class="token key atrule">yum</span><span class="token punctuation">:</span> update_cache=yes
    
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Apache
      <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=apache2 state=latest
      
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Create custom document root
      <span class="token key atrule">file</span><span class="token punctuation">:</span> path=<span class="token punctuation">{</span><span class="token punctuation">{</span> doc_root <span class="token punctuation">}</span><span class="token punctuation">}</span> state=directory owner=www<span class="token punctuation">-</span>data group=www<span class="token punctuation">-</span>date
      
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up HtML file
      <span class="token key atrule">copy</span><span class="token punctuation">:</span> src=index.html dest=<span class="token punctuation">{</span><span class="token punctuation">{</span> doc_root <span class="token punctuation">}</span><span class="token punctuation">}</span>/index.html owner=www<span class="token punctuation">-</span>data mode=0644
      
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up Apache virtual host file
      <span class="token key atrule">template</span><span class="token punctuation">:</span> src=vhost.tpl dest=/etc/apache2/sites<span class="token punctuation">-</span>available/000<span class="token punctuation">-</span>default.conf
      <span class="token key atrule">notify</span><span class="token punctuation">:</span> restart apache
  <span class="token key atrule">handlers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restart apache
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=apache2 state=restarted

<span class="token comment">## template，用于从任务应用模块，就是把vhost.tpl 喜欢到 /etc/apache2/sites-available/000-default.conf</span>

<span class="token comment">## notify: 触发 当上一任务执行完，触发了规则，之后进入handlers里面，由于进行重启服务</span>
handlers<span class="token punctuation">-</span><span class="token punctuation">-</span>〉name 与 notify 对应，表示的是触发的规则

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function v(b,y){const s=p("ExternalLinkIcon");return i(),c("div",null,[u,n("blockquote",null,[n("p",null,[a("YMAL语法请参考"),n("a",d,[a("http://docs.ansible.com/YAMLSyntax.html"),e(s)]),r,n("a",k,[a("http://note.youdao.com/noteshare?id=4d62dbfa52bfb64670a9253d759bd66a&sub=46C40D5C83444EE788C943A2A052FE66"),e(s)])])]),m])}const g=l(o,[["render",v],["__file","Playbook-2.html.vue"]]);export{g as default};
