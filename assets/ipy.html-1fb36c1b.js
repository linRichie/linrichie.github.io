import{_ as e,r as p,o as t,c as i,b as n,e as c,w as l,d as s,f as o}from"./app-55c326ac.js";const u={},r=n("h1",{id:"ipy-ip地址处理模块",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ipy-ip地址处理模块","aria-hidden":"true"},"#"),s(" IPy: IP地址处理模块")],-1),d={class:"table-of-contents"},k=o(`<ul><li>进行计算IP地址的 网段 网络掩码 广播地址 子网数 Ip类型等等</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Ipy在 linux 和 windows上的安装</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token triple-quoted-string string">&#39;&#39;&#39;
wget https：//pypi.python.org/packages/source/I/IPy/IPy-0.81.tar.gz --no-check-certificate
tar -zxvf IPy-0.81.tar.gz
cd IPy-0.81
python setup.py install
&#39;&#39;&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-letx line-numbers-mode" data-ext="letx"><pre class="language-letx"><code>wget https：//pypi.python.org/packages/source/I/IPy/IPy-0.81.tar.gz --no-check-certificate
tar -zxvf IPy-0.81.tar.gz
cd IPy-0.81
python setup.py install
​\`\`\`

## IP地址 网段的基本处理

- 使用version方法可以区分ipv4与ipv6

\`\`\`python
# 案例
from IPy import IP
ipv4 = IP(&#39;192.168.50.0/24&#39;).version()
ipv6 = IP(&#39;::1&#39;).version()
print(ipv4)
print(ipv6)
print(&#39;---&#39; * 20)

# 通过制定网段输出该网段的IP个数集所有地址清单
from IPy import IP
ip = IP(&#39;192.168.0.0/16&#39;)
print(ip.len())
for i in ip:
    print(i)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-letx line-numbers-mode" data-ext="letx"><pre class="language-letx"><code>4
6
------------------------------------------------------------
65536
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># IP几个常见的方法，包括反向解析名称，IP类型，IP转换</span>
<span class="token keyword">from</span> IPy <span class="token keyword">import</span> IP
ip <span class="token operator">=</span> IP<span class="token punctuation">(</span><span class="token string">&#39;192.168.50.20&#39;</span><span class="token punctuation">)</span>
ip_reverse <span class="token operator">=</span> ip<span class="token punctuation">.</span>reverseNames<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ip_reverse<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>ip<span class="token punctuation">.</span>iptype<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                     <span class="token comment"># 查看IP的类型   PRIVATE表示的是私网地址 PUBLIC表示的是公网地址</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>IP<span class="token punctuation">(</span><span class="token string">&#39;8.8.8.8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>iptype<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>          <span class="token comment"># 查看IP 8.8.8.8 的类型</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ip<span class="token punctuation">.</span><span class="token builtin">int</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                        <span class="token comment"># 将IP，转换为整数形式</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ip<span class="token punctuation">.</span>strHex<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                     <span class="token comment"># 将IP，转换成十六进制</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ip<span class="token punctuation">.</span>strBin<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                     <span class="token comment"># 将IP，转换成二进制</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>IP<span class="token punctuation">(</span><span class="token string">&#39;0x8080808&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                 <span class="token comment"># 十六进制转成IP格式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-letx line-numbers-mode" data-ext="letx"><pre class="language-letx"><code>[&#39;20.50.168.192.in-addr.arpa.&#39;]
------------------------------------------------------------
PRIVATE
------------------------------------------------------------
PUBLIC
------------------------------------------------------------
3232248340
------------------------------------------------------------
0xc0a83214
------------------------------------------------------------
11000000101010000011001000010100
------------------------------------------------------------
8.8.8.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># IP对网络地址的转换  案例</span>
<span class="token comment"># 根据IP与掩码生成网段格式</span>
<span class="token keyword">from</span> IPy <span class="token keyword">import</span> IP
<span class="token keyword">print</span><span class="token punctuation">(</span>IP<span class="token punctuation">(</span><span class="token string">&#39;192.168.50.0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>make_net<span class="token punctuation">(</span><span class="token string">&#39;255.255.255.0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>IP<span class="token punctuation">(</span><span class="token string">&#39;192.168.1.0/255.255.255.0&#39;</span><span class="token punctuation">,</span>make_net<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>IP<span class="token punctuation">(</span><span class="token string">&#39;192.168.1.0-192.168.1.255&#39;</span><span class="token punctuation">,</span>make_net<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-letx line-numbers-mode" data-ext="letx"><pre class="language-letx"><code>192.168.50.0/24
------------------------------------------------------------
192.168.1.0/24
------------------------------------------------------------
192.168.1.0/24
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 根据strNormal 方法指定不同wantprefixlen参数值以定制不同输出类型的网段，输出类型为字符串</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>IP<span class="token punctuation">(</span><span class="token string">&#39;192.168.1.0/24&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strNormal<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>IP<span class="token punctuation">(</span><span class="token string">&#39;192.168.1.0/24&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strNormal<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>IP<span class="token punctuation">(</span><span class="token string">&#39;192.168.1.0/24&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strNormal<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>IP<span class="token punctuation">(</span><span class="token string">&#39;192.168.1.0/24&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strNormal<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># wantprefixlen的取值的含义</span>
<span class="token comment"># wantprefixlen = 0 ， 无返回， 如 192.168.1.0</span>
<span class="token comment"># wantprefixlen = 1，  prefix格式 如 192.168.1.0/24</span>
<span class="token comment"># wantprefixlen = 2，  decimalentmask格式 如 192.168.1.0/255.255.255.0</span>
<span class="token comment"># wantprefixlen = 3，  lastIP格式   如 192.168.1.0--192.168.1.255</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-letx line-numbers-mode" data-ext="letx"><pre class="language-letx"><code>192.168.1.0
------------------------------------------------------------
192.168.1.0/24
------------------------------------------------------------
192.168.1.0/255.255.255.0
------------------------------------------------------------
192.168.1.0-192.168.1.255
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多网络计算方法" tabindex="-1"><a class="header-anchor" href="#多网络计算方法" aria-hidden="true">#</a> 多网络计算方法</h2><ul><li>比较两个网段是否存在包含，重叠等关系。</li><li>如同网络 不同 prefixlen 会认为是不相等的网段 10.0.0.0/16 不等于 10.0.0.0/24</li><li>相同的prefixlen但处于不同的网络地址 也是不相等的 如 10.0.0.0/16 不等于 192.0.0.0/16</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 案例</span>
A <span class="token operator">=</span> IP<span class="token punctuation">(</span><span class="token string">&#39;10.0.0.0/24&#39;</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> IP<span class="token punctuation">(</span><span class="token string">&#39;12.0.0.0/24&#39;</span><span class="token punctuation">)</span>    <span class="token comment"># 比较两个网段</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span>

<span class="token comment"># 判断IP地址和网段是否包含于另一个网段中</span>
B <span class="token operator">=</span> <span class="token string">&#39;192.168.1.100&#39;</span> <span class="token keyword">in</span> IP<span class="token punctuation">(</span><span class="token string">&#39;192.168.1.0/24&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>B<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span>

C <span class="token operator">=</span> IP<span class="token punctuation">(</span><span class="token string">&#39;192.168.1.0/24&#39;</span><span class="token punctuation">)</span> <span class="token keyword">in</span> IP<span class="token punctuation">(</span><span class="token string">&#39;192.168.0.0/16&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>C<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span>

<span class="token comment"># 判断两个网段是否存在重叠，采用IPy提供的overlaps方法</span>
D <span class="token operator">=</span> IP<span class="token punctuation">(</span><span class="token string">&#39;192.168.0.0/23&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>overlaps<span class="token punctuation">(</span><span class="token string">&#39;192.168.0.0/24&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>D<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;---&#39;</span> <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span>

E <span class="token operator">=</span> IP<span class="token punctuation">(</span><span class="token string">&#39;192.168.1.0/24&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>overlaps<span class="token punctuation">(</span><span class="token string">&#39;192.168.2.0&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>E<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-letx line-numbers-mode" data-ext="letx"><pre class="language-letx"><code>True
------------------------------------------------------------
True
------------------------------------------------------------
True
------------------------------------------------------------
1
------------------------------------------------------------
0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 综合案例</span>
<span class="token comment"># 根据输入的IP或者子网掩码返回网络 掩码 广播 反向解析 子网数 IP类型等信息</span>

ip_s <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入你的IP地址或网段地址：&#39;</span><span class="token punctuation">)</span>
ips <span class="token operator">=</span> IP<span class="token punctuation">(</span>ip_s<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ips<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ips<span class="token punctuation">.</span><span class="token builtin">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># ips.len()就相当于 len(ips)    当输入的是IP地址的时候，len(ips)就位1，否则就不是1</span>
<span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>ips<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;net: %s&#39;</span> <span class="token operator">%</span> ips<span class="token punctuation">.</span>net<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>            <span class="token comment"># 输出网路地址</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;netmask: %s&#39;</span> <span class="token operator">%</span> ips<span class="token punctuation">.</span>netmask<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># 输出网络掩码地址</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;broadcast: %s&#39;</span> <span class="token operator">%</span> ips<span class="token punctuation">.</span>broadcast<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出广播地址</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;reverse address: %s&#39;</span> <span class="token operator">%</span> ips<span class="token punctuation">.</span>reverseName<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment"># 输出地址反向解析名称</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;subnet: %s&#39;</span> <span class="token operator">%</span> ips<span class="token punctuation">.</span><span class="token builtin">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>               <span class="token comment"># 输出此网段的网络子网数，也就是可以分配的所有IP数</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;reverse addreee: %s&#39;</span> <span class="token operator">%</span> ips<span class="token punctuation">.</span>reverseName<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>     <span class="token comment"># 输出IP反向解析</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hexadecimal: %s&#39;</span> <span class="token operator">%</span> ips<span class="token punctuation">.</span>strHex<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>               <span class="token comment"># 输出十六进制地址</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;binary: %s&#39;</span> <span class="token operator">%</span> ips<span class="token punctuation">.</span>strBin<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                    <span class="token comment"># 输出二进制地址</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;iptype: %s&#39;</span> <span class="token operator">%</span> ips<span class="token punctuation">.</span>iptype<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                    <span class="token comment"># 输出地址类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-letx line-numbers-mode" data-ext="letx"><pre class="language-letx"><code>请输入你的IP地址或网段地址：192.168.10.0/24
192.168.10.0/24
256
net: 192.168.10.0
netmask: 255.255.255.0
broadcast: 192.168.10.255
reverse address: 10.168.192.in-addr.arpa.
subnet: 256
hexadecimal: 0xc0a80a00
binary: 11000000101010000000101000000000
iptype: PRIVATE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function v(m,b){const a=p("router-link");return t(),i("div",null,[r,n("nav",d,[n("ul",null,[n("li",null,[c(a,{to:"#多网络计算方法"},{default:l(()=>[s("多网络计算方法")]),_:1})])])]),k])}const y=e(u,[["render",v],["__file","ipy.html.vue"]]);export{y as default};
