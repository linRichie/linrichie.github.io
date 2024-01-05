import{_ as i,r as t,o as l,c as o,b as n,d as s,e,f as c}from"./app-55c326ac.js";const p={},d=c(`<h1 id="_02-docker安装" tabindex="-1"><a class="header-anchor" href="#_02-docker安装" aria-hidden="true">#</a> 02. Docker安装</h1><h4 id="_1-实验前的准备" tabindex="-1"><a class="header-anchor" href="#_1-实验前的准备" aria-hidden="true">#</a> 1.实验前的准备</h4><ul><li>准备两台虚拟机 <ul><li>docker1：192.168.76.128</li><li>docker2：192.168.79.128</li></ul></li><li>关闭防火墙</li></ul><h4 id="_2-步骤" tabindex="-1"><a class="header-anchor" href="#_2-步骤" aria-hidden="true">#</a> 2.步骤</h4><p><strong>1. 2台虚拟机做SSH免密</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>配置两台虚拟机的网卡
docker1机器
<span class="token comment"># docker1 &gt; /etc/hostname</span>
<span class="token comment"># hostname docker1</span>
<span class="token comment"># systemctl restart network</span>

docker2机器
<span class="token comment"># docker2 &gt; /etc/hostname </span>
<span class="token comment"># hostname docker2</span>
<span class="token comment"># systemctl restart network</span>

做免密
docker1
<span class="token comment"># ssh-keygen -t rsa</span>
<span class="token comment"># ssh-copy-id -i /root/.ssh/id_rsa.pub 192.168.76.129</span>
<span class="token comment"># ssh 192.168.76.129  /不用密码登陆上去说明成功</span>
<span class="token comment"># exit</span>

docker2
<span class="token comment"># ssh-keygen -t rsa</span>
<span class="token comment"># ssh-copy-id -i /root/.ssh/id_rsa.pub 192.168.76.128</span>
<span class="token comment"># ssh 192.168.76.128   /不用密码登陆上去说明成功</span>
<span class="token comment"># exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 2台机器配置yum源</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#：A机器</span>
<span class="token comment"># wget -O /etc/yum.repos.d/  https://download.docker.com/linux/centos/docker-ce.repo</span>
<span class="token comment"># vim /etc/yum.repos.d/aliyun.com</span>
<span class="token punctuation">[</span>aliyun<span class="token punctuation">]</span>
name=aliyun
baseurl=https<span class="token punctuation">:</span>//mirrors.aliyun.com/centos/7/os/x86_64/
gpgcheck=0
enabled=1

<span class="token comment"># vim /etc/yum.repos.d/docker.repo</span>
<span class="token punctuation">[</span>docker<span class="token punctuation">-</span>ce<span class="token punctuation">-</span>stable<span class="token punctuation">]</span>
name=Docker CE Stable <span class="token punctuation">-</span> $basearch
baseurl=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/7/$basearch/stable
enabled=1
gpgcheck=0      <span class="token comment">#选择信任，不做检查</span>
gpgkey=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/gpg

<span class="token punctuation">[</span>docker<span class="token punctuation">-</span>ce<span class="token punctuation">-</span>stable<span class="token punctuation">-</span>debuginfo<span class="token punctuation">]</span>
name=Docker CE Stable <span class="token punctuation">-</span> Debuginfo $basearch
baseurl=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/7/debug<span class="token punctuation">-</span>$basearch/stable
enabled=0
gpgcheck=1
gpgkey=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/gpg

<span class="token punctuation">[</span>docker<span class="token punctuation">-</span>ce<span class="token punctuation">-</span>stable<span class="token punctuation">-</span>source<span class="token punctuation">]</span>
name=Docker CE Stable <span class="token punctuation">-</span> Sources
baseurl=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/7/source/stable
enabled=0
gpgcheck=1
gpgkey=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/gpg

<span class="token punctuation">[</span>docker<span class="token punctuation">-</span>ce<span class="token punctuation">-</span>edge<span class="token punctuation">]</span>
name=Docker CE Edge <span class="token punctuation">-</span> $basearch
baseurl=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/7/$basearch/edge
enabled=0
gpgcheck=1
gpgkey=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/gpg

<span class="token punctuation">[</span>docker<span class="token punctuation">-</span>ce<span class="token punctuation">-</span>edge<span class="token punctuation">-</span>debuginfo<span class="token punctuation">]</span>
name=Docker CE Edge <span class="token punctuation">-</span> Debuginfo $basearch
baseurl=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/7/debug<span class="token punctuation">-</span>$basearch/edge
enabled=0
gpgcheck=1
gpgkey=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/gpg

<span class="token punctuation">[</span>docker<span class="token punctuation">-</span>ce<span class="token punctuation">-</span>edge<span class="token punctuation">-</span>source<span class="token punctuation">]</span>
name=Docker CE Edge <span class="token punctuation">-</span> Sources
baseurl=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/7/source/edge
enabled=0
gpgcheck=1
gpgkey=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/gpg

<span class="token punctuation">[</span>docker<span class="token punctuation">-</span>ce<span class="token punctuation">-</span>test<span class="token punctuation">]</span>
name=Docker CE Test <span class="token punctuation">-</span> $basearch
baseurl=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/7/$basearch/test
enabled=0
gpgcheck=1
gpgkey=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/gpg

<span class="token punctuation">[</span>docker<span class="token punctuation">-</span>ce<span class="token punctuation">-</span>test<span class="token punctuation">-</span>debuginfo<span class="token punctuation">]</span>
name=Docker CE Test <span class="token punctuation">-</span> Debuginfo $basearch
baseurl=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/7/debug<span class="token punctuation">-</span>$basearch/test
enabled=0
gpgcheck=1
gpgkey=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/gpg

<span class="token punctuation">[</span>docker<span class="token punctuation">-</span>ce<span class="token punctuation">-</span>test<span class="token punctuation">-</span>source<span class="token punctuation">]</span>
name=Docker CE Test <span class="token punctuation">-</span> Sources
baseurl=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/7/source/test
enabled=0
gpgcheck=1
gpgkey=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/gpg

<span class="token punctuation">[</span>docker<span class="token punctuation">-</span>ce<span class="token punctuation">-</span>nightly<span class="token punctuation">]</span>
name=Docker CE Nightly <span class="token punctuation">-</span> $basearch
baseurl=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/7/$basearch/nightly
enabled=0
gpgcheck=1
gpgkey=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/gpg

<span class="token punctuation">[</span>docker<span class="token punctuation">-</span>ce<span class="token punctuation">-</span>nightly<span class="token punctuation">-</span>debuginfo<span class="token punctuation">]</span>
name=Docker CE Nightly <span class="token punctuation">-</span> Debuginfo $basearch
baseurl=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/7/debug<span class="token punctuation">-</span>$basearch/nightly
enabled=0
gpgcheck=1
gpgkey=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/gpg

<span class="token punctuation">[</span>docker<span class="token punctuation">-</span>ce<span class="token punctuation">-</span>nightly<span class="token punctuation">-</span>source<span class="token punctuation">]</span>
name=Docker CE Nightly <span class="token punctuation">-</span> Sources
baseurl=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/7/source/nightly
enabled=0
gpgcheck=1
gpgkey=https<span class="token punctuation">:</span>//download.docker.com/linux/centos/gpg

scp /etc/yum.repos.d/docker.repo /etc/yum.repos.d/docker.repo  192.168.76.129<span class="token punctuation">:</span>/etc/yum.repos.d/
<span class="token comment"># yum makecache</span>

docker2
<span class="token comment"># yum makecache</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 2台机器安装docker</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#docker1</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce
<span class="token comment">###安装docker-ce的时候，可能会显示安装报错，缺少安装包，但是由于有些镜像里面没有，经过查找，下面是下载这个包的地址</span>
<span class="token function">wget</span> ftp://mirror.switch.ch/pool/4/mirror/scientificlinux/7x/external_products/extras/x86_64/container-selinux-2.9-4.el7.noarch.rpm
下载完成后，继续安装
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> container-selinux-2.9-4.el7.noarch.rpm
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce
systemctl start <span class="token function">docker</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token function">docker</span>     <span class="token comment">#存在表示安装完成</span>
<span class="token function">scp</span> container-selinux-2.9-4.el7.noarch.rpm <span class="token number">192.168</span>.76.129:/root

<span class="token function">ssh</span> <span class="token number">192.168</span>.76.12<span class="token operator"><span class="token file-descriptor important">9</span>&lt;</span><span class="token operator">&lt;</span>EOF
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> container-selinux-2.9-4.el7.noarch.rpm
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce
systemctl start <span class="token function">docker</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token function">docker</span>     <span class="token comment">#存在表示安装环境部署完成</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>完成上面的步骤表示docker已经安装完成，环境也已经部署好了，接下来介绍一下docker的简单命令</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull 镜像名          <span class="token comment">#下载镜像</span>
<span class="token function">docker</span> push 镜像名          <span class="token comment">#上传镜像</span>
<span class="token function">docker</span> images              <span class="token comment">#查看镜像</span>
<span class="token function">docker</span> search 镜像名        <span class="token comment">#查找镜像</span>
<span class="token function">docker</span> save 镜像名:latest <span class="token operator">&gt;</span>镜像名.tar <span class="token comment">#导出镜像为tar包</span>
<span class="token function">docker</span> load <span class="token operator">&lt;</span> 镜像名.tar    <span class="token comment">#导入镜像</span>
<span class="token function">docker</span> rmi 镜像名           <span class="token comment">#删除docker镜像</span>

<span class="token function">docker</span> run <span class="token parameter variable">-it</span> 镜像名   <span class="token comment">#用docker启动镜像（通过默认的标签latest启动，当修改了镜像名和标签的时候，需要加上新的标签 docker run -it 新镜像名:新标签）</span>
<span class="token builtin class-name">exit</span>                    <span class="token comment">#退出docker镜像</span>

镜像常用命令
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> nginx     <span class="token comment">#启动nginx镜像</span>
<span class="token function">docker</span> <span class="token function">ps</span>               <span class="token comment">#查看后台运行的容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-q</span>            <span class="token comment">#只显示容器ID</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>            <span class="token comment">#显示所有容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span>           <span class="token comment">#显示所有的容器ID</span>
<span class="token function">docker</span> <span class="token function">history</span> centos   <span class="token comment">#查看centos镜像历史（制作过程）</span>
<span class="token function">docker</span> rmi 镜像名       <span class="token comment">#删除镜像，容器启动时，删除镜像会失败。要管关闭容器，在删除镜像</span>
<span class="token function">docker</span> tage 镜像名:标签 新镜像名:新标签     <span class="token comment">#修改镜像的名称和标签，默认标签为latest</span>
<span class="token function">docker</span> inspect centos   <span class="token comment">#查看镜像的底层信息</span>

容器命令
<span class="token function">docker</span> stop 容器ID      <span class="token comment">#关闭容器</span>
<span class="token function">docker</span> start 容器ID     <span class="token comment">#启动容器</span>
<span class="token function">docker</span> restart 容器ID   <span class="token comment">#重启容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> 容器ID        <span class="token comment">#容器运行中删除不了，需要先关闭容器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="镜像加速" tabindex="-1"><a class="header-anchor" href="#镜像加速" aria-hidden="true">#</a> 镜像加速</h3><p>在使用过程中发现拉取Docker镜像十分缓慢，可以配置Docker国内镜像加速</p><h4 id="添加内核参数" tabindex="-1"><a class="header-anchor" href="#添加内核参数" aria-hidden="true">#</a> 添加内核参数</h4><p>如果在CentOS使用Docker CE看到下面的警告信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>WARNING: bridge-nf-call-iptables is disabled
WARNING: bridge-nf-call-ip6tables is disabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>添加内核配置参数以启用这些功能。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tee</span> <span class="token parameter variable">-a</span> /etc/sysctl.conf <span class="token operator">&lt;&lt;</span> <span class="token parameter variable">-EOF</span>
net.bridge.bridge-nf-call-ip6tables <span class="token operator">=</span> <span class="token number">1</span>
net.bridge.bridge-nf-call-iptables <span class="token operator">=</span> <span class="token number">1</span>
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后重新加载<code>sysctl.conf</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="docker配置镜像加速器" tabindex="-1"><a class="header-anchor" href="#docker配置镜像加速器" aria-hidden="true">#</a> Docker配置镜像加速器</h3>`,22),r=n("br",null,null,-1),u={href:"https://registry.docker-cn.com",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),v={href:"https://cr.console.aliyun.com/cn-hangzhou/mirrors",target:"_blank",rel:"noopener noreferrer"},k=n("br",null,null,-1),b={href:"https://reg-mirror.qiniu.com",target:"_blank",rel:"noopener noreferrer"},h=c(`<h4 id="centos" tabindex="-1"><a class="header-anchor" href="#centos" aria-hidden="true">#</a> Centos</h4><ul><li><p>对于systemd的系统，在/etc/docker/daemon.json中写入下面内容（文件不存在则创建）</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;https://registry.docker-cn.com&quot;</span>
        <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重新启动服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="检查加速器是否生效" tabindex="-1"><a class="header-anchor" href="#检查加速器是否生效" aria-hidden="true">#</a> 检查加速器是否生效</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> info  <span class="token comment">#出现下面的内容，说明生效</span>
<span class="token comment"># Registry Mirrors: https://registry.docker-cn.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除镜像的操作" tabindex="-1"><a class="header-anchor" href="#删除镜像的操作" aria-hidden="true">#</a> 删除镜像的操作</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
<span class="token function">docker</span> stop 容器ID
<span class="token function">docker</span> <span class="token function">rm</span> 容器ID
<span class="token function">docker</span> rmi 镜像名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function g(f,y){const a=t("ExternalLinkIcon");return l(),o("div",null,[d,n("p",null,[s("国内从 Docker Hub 拉取镜像有时会遇到困难，此时可以配置镜像加速器。Docker 官方和国内很多云服务商都提供了国内加速器服务，例如："),r,n("a",u,[s("Docker官港提供的中国registry mirror"),e(a)]),m,n("a",v,[s("阿里云加速器(需要登录账号获取)"),e(a)]),k,n("a",b,[s("七牛云加速器"),e(a)])]),h])}const _=i(p,[["render",g],["__file","Docker系列学习-02.安装docker.html.vue"]]);export{_ as default};
