import{_ as t,r,o,c as d,a as p,b as n,e,w as i,d as s,f as c}from"./app-55c326ac.js";const u={},v=n("h1",{id:"_09-访问仓库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_09-访问仓库","aria-hidden":"true"},"#"),s(" 09. 访问仓库")],-1),m={class:"table-of-contents"},b=c('<p>仓库(Repository)是集中存放镜像的地方。<br> 一个容易混淆的概念是 注册服务器(Registry)。实际上注册服务器是管理仓库的具体服务器，每个服务器上可以有多个仓库，而每个仓库下面有多个镜像。<br> 仓库可以被认为是一个具体的项目或者目录。<br> 例如对于仓库地址<code>dl.dockerpool.com/ubuntu</code>来说，<code>dl.dockerpool.com</code>是注册服务器的地址，<code>ubuntu</code>是仓库名</p><h2 id="docker-hub" tabindex="-1"><a class="header-anchor" href="#docker-hub" aria-hidden="true">#</a> Docker Hub</h2><p>目前Docker官方维护一个公共仓库 Docker Hub。其中已经包括了数量超过 15,000 的镜像。大部分需求都可以通过在 Docker Hub 中直接下载镜像来实现。</p><h3 id="注册" tabindex="-1"><a class="header-anchor" href="#注册" aria-hidden="true">#</a> 注册</h3>',4),k={href:"https://hub.docker.com",target:"_blank",rel:"noopener noreferrer"},h=c(`<h3 id="登录" tabindex="-1"><a class="header-anchor" href="#登录" aria-hidden="true">#</a> 登录</h3><p>可以通过执行<code>docker login</code>命令交互式的输入用户名及密码完成在命令行界面登录Docker Hub。可以通过 <code>docker logout</code> 退出登录</p><h3 id="拉取镜像" tabindex="-1"><a class="header-anchor" href="#拉取镜像" aria-hidden="true">#</a> 拉取镜像</h3><p>可通过 <code>docker search</code>命令来查找官方仓库中的镜像，并利用<code>docker pull</code>命令来将他下载到本地。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> search centos
NAME                               DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED
centos                             The official build of CentOS.                   <span class="token number">5258</span>                <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>                
ansible/centos7-ansible            Ansible on Centos7                              <span class="token number">121</span>                                     <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
jdeathe/centos-ssh                 CentOS-6 <span class="token number">6.10</span> x86_64 / CentOS-7 <span class="token number">7.5</span>.1804 x86…   <span class="token number">109</span>                                     <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
consol/centos-xfce-vnc             Centos container with <span class="token string">&quot;headless&quot;</span> VNC session…   <span class="token number">83</span>                                      <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
imagine10255/centos6-lnmp-php56    centos6-lnmp-php56                              <span class="token number">52</span>                                      <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明</strong> 可以看到返回了很多包含关键字的镜像，其中包括镜像名字、描述、收藏数（表示该镜像的受关注程度）、是否官方创建、是否自动创建。<br> 官方的镜像说明是官方项目组创建和维护的，automated 资源允许用户验证镜像的来源和内容。<br> 根据是否是官方提供，可将镜像资源分为两类。<br> 一种是类似 centos 这样的镜像，被称为基础镜像或根镜像。这些基础镜像由 Docker 公司创建、验证、支持、提供。这样的镜像往往使用单个单词作为名字。 还有一种类型，比如 tianon/centos 镜像，它是由 Docker 的用户创建并维护的，往往带有用户名称前缀。可以通过前缀 username/ 来指定使用某个用户提供的镜像，比如 tianon 用户。<br> 另外，在查找的时候通过 --filter=stars=N 参数可以指定仅显示收藏数量为 N 以上的镜像。</p><p>下载官方centos镜像到本地</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull centos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h3 id="推送镜像到自己的docker-hub上面" tabindex="-1"><a class="header-anchor" href="#推送镜像到自己的docker-hub上面" aria-hidden="true">#</a> 推送镜像到自己的docker Hub上面</h3><blockquote><p>将镜像推送到自己的docker Hub上面需要进行登录到自己的账户上。 请使用 <code>docker login</code>,退出登录请使用<code>docker logout</code>,之后使用docker push进行上传 用户也可以在登录后通过<code>docker push</code>命令将自己的镜像推送到Docker Hub<br> 下面命令中的<code>username</code>替换为自己的Docker账户用户名</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> search username
<span class="token function">docker</span> login 
    Username: wanglh973
    Password: 
    Login Succeeded
<span class="token function">docker</span> push wanglh973/centos:7   <span class="token comment">#可以看到上传失败，因为没有找到这个标签镜像，所以需要定义标签</span>
    The push refers to repository <span class="token punctuation">[</span>docker.io/wanglh973/centos<span class="token punctuation">]</span>
    An image does not exist locally with the tag: wanglh973/centos
<span class="token function">docker</span> tag  centos:7  wanglh973/centos:7     <span class="token comment">#定义标签</span>
<span class="token function">docker</span> push  wanglh973/centos:7              <span class="token comment">#进行上传</span>
    The push refers to repository <span class="token punctuation">[</span>docker.io/wanglh973/centos<span class="token punctuation">]</span>
    071d8bd76517: Mounted from library/centos 
    <span class="token number">7</span>: digest: sha256:365fc7f33107869dfcf2b3ba220ce0aa42e16d3f8e8b3c21d72af1ee622f0cf0 size: <span class="token number">529</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="自动创建" tabindex="-1"><a class="header-anchor" href="#自动创建" aria-hidden="true">#</a> 自动创建</h3><p><strong>自动创建</strong>：对于经常升级镜像内程序来说，十分方便 有时候，用户创建了镜像，安装了某个软件，如果软件发布新版本则需要手动更新镜像。</p><p>而自动创建允许用户通过 Docker Hub 指定跟踪一个目标网站（目前支持 GitHub 或 BitBucket）上的项目，一旦项目发生新的提交或者创建新的标签（tag），Docker Hub 会自动构建镜像并推送到 Docker Hub 中。</p><p>要配置自动创建，包括如下的步骤：</p><p>创建并登录 Docker Hub，以及目标网站；</p><p>在目标网站中连接帐户到 Docker Hub；</p>`,19),g={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},f=n("p",null,"选取一个目标网站中的项目（需要含 Dockerfile）和分支；",-1),w=n("p",null,"指定 Dockerfile 的位置，并提交创建。",-1),y={href:"https://registry.hub.docker.com/builds/",target:"_blank",rel:"noopener noreferrer"},_=c(`<hr><h2 id="私有仓库" tabindex="-1"><a class="header-anchor" href="#私有仓库" aria-hidden="true">#</a> 私有仓库</h2><p>构建本地私有仓库进行使用 docker-registry是官方提供的工具，可以用于构建私有的镜像仓库</p><h3 id="安装运行-docker-registry-其实就是创建私有仓库" tabindex="-1"><a class="header-anchor" href="#安装运行-docker-registry-其实就是创建私有仓库" aria-hidden="true">#</a> 安装运行 docker-registry 其实就是创建私有仓库</h3><h4 id="容器运行" tabindex="-1"><a class="header-anchor" href="#容器运行" aria-hidden="true">#</a> 容器运行</h4><p>可以通过获取官方<code>registry</code>镜像来运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">5000</span>:5000 <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--name</span> registry registry
<span class="token comment"># 使用官方的registry镜像来启动私有仓库。此时的私有仓库默认位置是 “创建在容器的 /var/log/registry”</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>详细安装过程</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载镜像</span>
<span class="token function">docker</span> pull registry

<span class="token comment">#启动容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">5000</span>:5000  <span class="token parameter variable">--restart</span> always <span class="token parameter variable">--name</span><span class="token operator">=</span>registry <span class="token parameter variable">-v</span> /mnt/docker:/var/lib/registry registry

-d:后台运行
-p:将容器的5000端口映射到宿主机的5000端口
--restart：docker服务重启后总是重启此容器
--name：    容器名
--v：将容器内的/var/lib/registry映射到宿主机的/mnt/docker目录

<span class="token comment">#此时 私有仓库已经启动之后就可以上传镜像到私有仓库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在私有仓库上传-搜索-下载镜像" tabindex="-1"><a class="header-anchor" href="#在私有仓库上传-搜索-下载镜像" aria-hidden="true">#</a> 在私有仓库上传，搜索，下载镜像</h3><p>创建好私有仓库后，就可以使用docker tag来标记每一个镜像，然后推动它到仓库中。如私有仓库地址为127.0.0.1</p><p>使用<code>docker tag</code>将<code>centos:7</code>这个镜像标记为<code>127.0.0.1:5000/centos:7</code><br> 格式：<br><code>docker tag image[:TAG] [REGISTRY_HOST[:REGISTRY_PORT]/REPOSITORY[:TAG]]</code><br> 标记之后进行上传<code>docker push</code><br> 使用<code>curl</code>查看仓库中的镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token number">127.0</span>.0.1:5000/v2/_catalog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用http进行推送镜像" tabindex="-1"><a class="header-anchor" href="#使用http进行推送镜像" aria-hidden="true">#</a> 使用http进行推送镜像</h3><p>当想让本网段的其他主机也能把镜像推送到私有仓库，就需要设置仓库地址为内网IP，但由于Docker默认不允许非HTTPS方式推送镜像。<br> 所以，需要通过Docker的配置选项来取消这个限制。或者配置能够通过HTTPS访问私有仓库。<br> Centos配置HTTP上传到私有仓库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/docker/daemon.json<span class="token punctuation">(</span>不存在，则创建文件<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;registry-mirror&quot;</span>:<span class="token punctuation">[</span>
      <span class="token string">&quot;https://registry.docker-cn.com&quot;</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;insecure-registries&quot;</span>:<span class="token punctuation">[</span>
      <span class="token string">&quot;192.168.199.100:5000&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="私有仓库高级配置" tabindex="-1"><a class="header-anchor" href="#私有仓库高级配置" aria-hidden="true">#</a> 私有仓库高级配置</h2><p>使用<code>Docker Compose</code>搭建一个拥有权限认证，TLS的私有仓库 在一个文件夹下完成下面的所有操作</p><h3 id="准备站点证书" tabindex="-1"><a class="header-anchor" href="#准备站点证书" aria-hidden="true">#</a> 准备站点证书</h3><p>当有一个域名，就可以使用<code>openssl</code>自行签发证书。 案例：搭建私有仓库地址：www.wanglhdocker.com <strong>过程</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建CA私钥</span>
openssl genrsa <span class="token parameter variable">-out</span> <span class="token string">&quot;root-ca.key&quot;</span> <span class="token number">4096</span>

<span class="token comment"># 利用私钥创建CA根证书请求文件</span>
openssl req <span class="token parameter variable">-new</span> <span class="token parameter variable">-key</span> <span class="token string">&quot;root-ca.key&quot;</span> <span class="token punctuation">\\</span>   
    <span class="token parameter variable">-out</span> <span class="token string">&quot;root-ca.csr&quot;</span> <span class="token parameter variable">-sha256</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-subj</span> <span class="token string">&#39;/C=CN/ST=Shanxi/L=Datong/O=Your Company Name/CN=Your Company Name Docker Registry CA&#39;</span>
<span class="token comment"># -subj /C 表示国家； /ST 表示省  /L 表示城市 /O 表示组织名 /CN通用名称</span>

<span class="token comment"># 配置CA根证书，新建root-ca.cnf</span>
<span class="token function">vim</span> root-ca.cnf
<span class="token punctuation">[</span>root-ca<span class="token punctuation">]</span>
basicConstraints <span class="token operator">=</span> critical,CA:TRUE,pathlen:1
keyUsage <span class="token operator">=</span> critical, nonRepudiation, cRLSign, keyCertSign
<span class="token assign-left variable">subjectKeyIdentifier</span><span class="token operator">=</span>hash

<span class="token comment"># 签发根证书</span>
openssl x509 <span class="token parameter variable">-req</span> <span class="token parameter variable">-days</span> <span class="token number">3650</span> <span class="token parameter variable">-in</span> <span class="token string">&quot;root-ca.csr&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-signkey</span> <span class="token string">&quot;root-ca.key&quot;</span> <span class="token parameter variable">-sha256</span> <span class="token parameter variable">-out</span> <span class="token string">&quot;root-ca.crt&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-extfile</span> <span class="token string">&quot;root-ca.cnf&quot;</span> <span class="token parameter variable">-extensions</span> <span class="token punctuation">\\</span>
    root_ca
    
<span class="token comment"># 生成站点SSL私钥</span>
openssl genrsa <span class="token parameter variable">-out</span> <span class="token string">&quot;www.wanglhdocker.com.key&quot;</span> <span class="token number">4096</span>

<span class="token comment"># 使用私钥生成证书请求文件</span>
openssl req <span class="token parameter variable">-new</span> <span class="token parameter variable">-key</span> <span class="token string">&quot;www.wanglhdocker.com.key&quot;</span> <span class="token parameter variable">-out</span> <span class="token string">&quot;site.csr&quot;</span> <span class="token parameter variable">-sha256</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-subj</span> <span class="token string">&#39;/C=CN/ST=Shanxi/L=Datong/O=Your Company Name/CN=www.wanglhdocker.com&#39;</span>

<span class="token comment"># 配置证书，新建site.cnf文件</span>
<span class="token function">vim</span> site.cnf
<span class="token punctuation">[</span>server<span class="token punctuation">]</span>
<span class="token assign-left variable">authorityKeyIdentifier</span><span class="token operator">=</span>keyid,issuer
basicConstraints <span class="token operator">=</span> critical,CA:FALSE
<span class="token assign-left variable">extendedKeyUsage</span><span class="token operator">=</span>serverAuth
keyUsage <span class="token operator">=</span> critical, digitalSignature, keyEncipherment
subjectAltName <span class="token operator">=</span> DNS:docker.domain.com, IP:127.0.0.1
<span class="token assign-left variable">subjectKeyIdentifier</span><span class="token operator">=</span>hash

<span class="token comment"># 签署站点SSL证书</span>
openssl x509 <span class="token parameter variable">-req</span> <span class="token parameter variable">-days</span> <span class="token number">750</span> <span class="token parameter variable">-in</span> <span class="token string">&quot;site.csr&quot;</span> <span class="token parameter variable">-sha256</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-CA</span> <span class="token string">&quot;root-ca.crt&quot;</span> <span class="token parameter variable">-CAkey</span> <span class="token string">&quot;root-ca.key&quot;</span> <span class="token parameter variable">-CAcreateserial</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-out</span> <span class="token string">&quot;www.wanglhdocker.com.crt&quot;</span> <span class="token parameter variable">-extfile</span> <span class="token string">&quot;site.cnf&quot;</span> <span class="token parameter variable">-extensions</span> server


<span class="token comment">##如此，就有了www.wanglhdocker.com的网站SSL私钥www.wanglhdocker.com.key和SSL证书www.wanglhdocker.com.crt及CA根证书 root-ca.crt</span>

<span class="token comment">#将上面的三个文件 移动到一个文件，删除其他文件夹</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置私有仓库" tabindex="-1"><a class="header-anchor" href="#配置私有仓库" aria-hidden="true">#</a> 配置私有仓库</h3><p>私有仓库的默认配置文件:<code>/etc/docker/registry/config.yml</code>。先本地编辑，在挂载到容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/docker/registry/config.yml
version: <span class="token number">0.1</span>
log:
  accesslog:
    disabled: <span class="token boolean">true</span>
  level: debug
  formatter: text
  fields:
    service: registry
    environment: staging
storage:
  delete:
    enabled: <span class="token boolean">true</span>
  cache:
    blobdescriptor: inmemory
  filesystem:
    rootdirectory: /var/lib/registry
auth:
  htpasswd:
    realm: basic-realm
    path: /etc/docker/registry/auth/nginx.htpasswd
http:
  addr: :443
  host: https://docker.domain.com
  headers:
    X-Content-Type-Options: <span class="token punctuation">[</span>nosniff<span class="token punctuation">]</span>
  http2:
    disabled: <span class="token boolean">false</span>
  tls:
    certificate: /etc/docker/registry/ssl/docker.domain.com.crt
    key: /etc/docker/registry/ssl/docker.domain.com.key
health:
  storagedriver:
    enabled: <span class="token boolean">true</span>
    interval: 10s
threshold: <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成http认证文件" tabindex="-1"><a class="header-anchor" href="#生成http认证文件" aria-hidden="true">#</a> 生成http认证文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> auth
<span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--entrypoint</span> htpasswd <span class="token punctuation">\\</span>
    registry <span class="token punctuation">\\</span>
    <span class="token parameter variable">-Bbn</span> username password <span class="token operator">&gt;</span> auth/nginx.htpasswd
<span class="token comment"># username password替换为自己的用户密码</span>

<span class="token comment">## 这里的username password就是之后登录到私有仓库的 用户名和密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编辑docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#编辑docker-compose-yml" aria-hidden="true">#</a> 编辑docker-compose.yml</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /docker-compose.yml <span class="token comment">#没有就创建</span>
version: <span class="token string">&#39;3&#39;</span>

services:
  registry:
    image: registry
    ports:
      - <span class="token string">&quot;443:443&quot;</span>
    volumes:
      - ./:/etc/docker/registry
      - registry-data:/var/lib/registry

volumes:
  registry-data:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改hosts，并启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/hosts <span class="token operator">&lt;&lt;</span><span class="token string">EOF
   127.0.0.1 www.wanglhdocker.com
EOF</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong> 当没有安装docker-comopse这个命令的时候，需要进行安装。下面是安装方法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/docker/compose/releases/download/1.24.0-rc1/docker-compose-<span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">\`</span></span>-<span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">\`</span></span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose
<span class="token function">mv</span> /use/local/bin/docker-compose /usr/bin/docker-compose
<span class="token function">chmod</span> +x /usr/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),x={href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"},q=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重新启动</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong> 在启动<code>docker-compose</code>如果由于关闭了防火墙，而没有重启<code>docker.server</code>,会出现下面的错误</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Creating network &quot;ssl_default&quot; with the default driver
ERROR: Failed to Setup IP tables: Unable to enable SKIP DNAT rule:  (iptables failed: iptables --wait -t nat -I DOCKER -i br-dc7a16c6d51f -j RETURN: iptables: No chain/target/match by that name.
 (exit status 1))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解决：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart docker<span class="token punctuation">(</span>或者service restart <span class="token function">docker</span><span class="token punctuation">)</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
 Creating network <span class="token string">&quot;ssl_default&quot;</span> with the default driver
 Creating volume <span class="token string">&quot;ssl_registry-data&quot;</span> with default driver
 Creating ssl_registry_1 <span class="token punctuation">..</span>. <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这样就搭建了一个具有权限认证、TLS的私有仓库。</p></blockquote><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker/certs.d/www.wanglhdocker.com
<span class="token function">cp</span> ssl/root-ca.crt /etc/docker/certs.d/www.wanglhdocker.com/ca.crt

<span class="token function">docker</span> login wanglhdocker.com

<span class="token function">docker</span> pull centos:7

<span class="token function">docker</span> tag centos:7 www.wanglhdocker.com/username/centos:7

<span class="token function">docker</span> push www.wanglhdocker.com/username/centos:7

<span class="token function">docker</span> image <span class="token function">rm</span> www.wanglhdocker.com/username/centos:7

<span class="token function">docker</span> pull www.wanglhdocker.com/username/centos:7

<span class="token function">docker</span> <span class="token builtin class-name">logout</span>

<span class="token function">docker</span> pull www.wanglhdocker.com/username/centos:7
    Error response from daemon: Get http://www.wanglhdocker.com/v2/: dial tcp <span class="token number">127.0</span>.0.1:80: connect: connection refused
    
<span class="token function">docker</span> tag centos:7 www.wanglhdocker.com/username/centos:7

<span class="token function">docker</span> push  www.wanglhdocker.com/username/centos:7
    The push refers to repository <span class="token punctuation">[</span>www.wanglhdocker.com/username/centos<span class="token punctuation">]</span>
    d69483a6face: Preparing 
    no basic auth credentials

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明：</strong> 从上面的测试可以看出，当使用443安全认证之后，可以用username password登录到自己的私有仓库。接下来进行下一步的认证，从内网或外网的其他机器访问这个私有仓库。<br> 需要注意的是：由于这里是自己自行签发的CA根证书，会导致不被系统信任，所以需要下载自己自行签发的CA根证书部署到其他机器。<br><strong>部署：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 环境准备</span>
<span class="token comment"># 1.将自行签发的CA根证书下载，并部署到192.168.50.111</span>
<span class="token comment"># 2.私有仓库的地址为192.168.50.66</span>
<span class="token comment"># 3.查看私有仓库的443端口是否正常启动</span>
<span class="token comment"># 4.在192.168.50.111上部署hosts</span>

<span class="token comment"># 私有仓库（192.168.50.66）：</span>
<span class="token function">scp</span> /etc/docker/certs.d/www.wanglhdocker.com/ca.crt <span class="token number">192.168</span>.50.111:/root

<span class="token comment"># 客户端（192.168.50.111）：</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker/certs.d/www.wanglhdocker.com
<span class="token function">mv</span> /root/ca.crt /etc/docker/certs.d/www.wanglhdocker.com
<span class="token builtin class-name">echo</span> <span class="token string">&quot;192.168.50.66 www.wanglhdocker.com&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts

<span class="token comment"># 用户名 username passowrd登录到192.168.50.66</span>
<span class="token function">docker</span> login www.wanglhdocker.com

<span class="token comment"># 进行测试，看能够pull到私有仓库的centos:7</span>
<span class="token function">docker</span> pull www.wanglhdocker.com/username/centos:7

<span class="token function">docker</span> image <span class="token function">ls</span>     <span class="token comment">#能够看到www.wanglhdocker.com/username/centos:7就表示能够从自己创建的私有仓库读取镜像服务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function C(S,D){const a=r("router-link"),l=r("ExternalLinkIcon");return o(),d("div",null,[v,p(" [toc] "),n("nav",m,[n("ul",null,[n("li",null,[e(a,{to:"#docker-hub"},{default:i(()=>[s("Docker Hub")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#注册"},{default:i(()=>[s("注册")]),_:1})]),n("li",null,[e(a,{to:"#登录"},{default:i(()=>[s("登录")]),_:1})]),n("li",null,[e(a,{to:"#拉取镜像"},{default:i(()=>[s("拉取镜像")]),_:1})]),n("li",null,[e(a,{to:"#推送镜像到自己的docker-hub上面"},{default:i(()=>[s("推送镜像到自己的docker Hub上面")]),_:1})]),n("li",null,[e(a,{to:"#自动创建"},{default:i(()=>[s("自动创建")]),_:1})])])]),n("li",null,[e(a,{to:"#私有仓库"},{default:i(()=>[s("私有仓库")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#安装运行-docker-registry-其实就是创建私有仓库"},{default:i(()=>[s("安装运行 docker-registry 其实就是创建私有仓库")]),_:1})]),n("li",null,[e(a,{to:"#在私有仓库上传-搜索-下载镜像"},{default:i(()=>[s("在私有仓库上传，搜索，下载镜像")]),_:1})]),n("li",null,[e(a,{to:"#使用http进行推送镜像"},{default:i(()=>[s("使用http进行推送镜像")]),_:1})])])]),n("li",null,[e(a,{to:"#私有仓库高级配置"},{default:i(()=>[s("私有仓库高级配置")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#准备站点证书"},{default:i(()=>[s("准备站点证书")]),_:1})]),n("li",null,[e(a,{to:"#配置私有仓库"},{default:i(()=>[s("配置私有仓库")]),_:1})]),n("li",null,[e(a,{to:"#生成http认证文件"},{default:i(()=>[s("生成http认证文件")]),_:1})]),n("li",null,[e(a,{to:"#编辑docker-compose-yml"},{default:i(()=>[s("编辑docker-compose.yml")]),_:1})])])]),n("li",null,[e(a,{to:"#测试"},{default:i(()=>[s("测试")]),_:1})])])]),b,n("p",null,[s("可以在 "),n("a",k,[s("https://hub.docker.com"),e(l)]),s(" 免费注册一个 Docker 账号。")]),h,n("p",null,[s("在 "),n("a",g,[s("Docker Hub"),e(l)]),s(" 中 【配置一个自动创建】")]),f,w,n("p",null,[s("之后，可以在 "),n("a",y,[s("Docker Hub"),e(l)]),s(" 的【自动创建页面】中跟踪每次创建的状态。")]),_,n("blockquote",null,[n("p",null,[s("详细请参考文档："),n("a",x,[s("安装Docker Compose"),e(l)])])]),q])}const A=t(u,[["render",C],["__file","Docker系列学习-09.访问仓库.html.vue"]]);export{A as default};
