import{_ as t,o as e,c as d,f as n}from"./app-55c326ac.js";const a={},s=n(`<h1 id="yum模块常用参数" tabindex="-1"><a class="header-anchor" href="#yum模块常用参数" aria-hidden="true">#</a> Yum模块常用参数</h1><h2 id="参数介绍" tabindex="-1"><a class="header-anchor" href="#参数介绍" aria-hidden="true">#</a> 参数介绍</h2><table><thead><tr><th>参数名</th><th>是否必须</th><th>默认值</th><th>选项值</th><th>参数说明</th></tr></thead><tbody><tr><td>conf_file</td><td>No</td><td></td><td></td><td>设定远程yum执行时所依赖的yum配置文件</td></tr><tr><td>disable_gpg_check</td><td>No</td><td>No</td><td>Yes/No</td><td>在安装包前检查包，只会影响state参数为present或者latest的时候</td></tr><tr><td>list</td><td>No</td><td></td><td></td><td>只能由ansible调用，不支持playbook，就是安装列表</td></tr><tr><td>name</td><td>Yes</td><td></td><td></td><td>你需要安装的包的名字，也可以这样使用<code>name=python=2.7</code>，安装python2.7</td></tr><tr><td>state</td><td>No</td><td>present</td><td>present/latest/absent</td><td>用于描述安装包最终状态，present/latest用于安装包，absent用于remove安装包</td></tr><tr><td>update_cache</td><td>No</td><td>No</td><td>Yes/No</td><td>用于安装包前执行更新list，只会影响state参数为present/latest的时候</td></tr></tbody></table><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: 安装最新版本的apache
    yum: name=httpd state=latest
   
- name: 移除apache
    yum: name=httpd state-absent
   
- name: 升级所有的软件包
    yum： name=* state=latest
    
- name: 从一个运程yum仓库安装nginx
    yum: name=http://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm state=present
    
- name: 从本地仓库安装nginix
    yum: name=/usr/local/src/nginx-release-centos-6-0.el6.ngx.noarch.rpm state=present
    
- name: 安装整个Development tools相关安装包
    yum: name=&quot;@Development tools&quot; state=present
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i=[s];function r(l,c){return e(),d("div",null,i)}const o=t(a,[["render",r],["__file","yum-module.html.vue"]]);export{o as default};
