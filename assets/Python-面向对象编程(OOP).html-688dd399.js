import{_ as t,r as l,o,c as i,b as n,e,w as p,d as s,f as c}from"./app-55c326ac.js";const u={},r=n("h1",{id:"python-面向对象编程-oop",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#python-面向对象编程-oop","aria-hidden":"true"},"#"),s(" Python: 面向对象编程(OOP)")],-1),d={class:"table-of-contents"},k=c(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- 编写类
- 显示对象
- 灵活的初始化
- 设置函数和获取函数
- 继承
- 多态
- 其他学习
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>OOP是组织程序的方法，提倡仔细设计和代码重用。</p></li><li><p>大多数现代编程语言都支持OOP。</p></li><li><p>本质上说，对象是一组数据以及操作这些数据的函数。</p></li><li><p>前面学习的，一直在使用python对象，因为数字，字符串，列表，字典和函数都是对象。</p></li><li><p>要创建新型对象，必须先创建类。</p></li><li><p>本质上说，类就是设计蓝图，用于创建特定类型的对象。</p></li><li><p>类指定了 <strong>对象</strong> 将 <strong>包含</strong> 那些 <strong>数据</strong> 和 <strong>函数</strong>，还指定 <strong>对象</strong> 和其他 <strong>类</strong> 之间的关系。对象 <strong>封装</strong> 了数据以及操作这些数据的 <strong>函数</strong> 。</p></li><li><p>一个 <strong>重要</strong> 的OOP功能是 <strong>继承</strong> ：</p></li></ul><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h2><ul><li>创建新类时，可以让它 <strong>继承</strong> 既有类的 <strong>数据</strong> 和 <strong>函数</strong> 。这样可以避免重新编写代码。</li></ul><h3 id="编写类" tabindex="-1"><a class="header-anchor" href="#编写类" aria-hidden="true">#</a> 编写类</h3><ul><li>在OOP语言中， <code>__init__</code> 被成为构造函数，因为它构造对象</li><li>每次创建新对象时，都将调用构造函数。</li><li>在Java和C++等语言中，创建对象时需要使用关键字 new</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 介绍OOP，编写一个表示人的类</span>
<span class="token comment"># 代码</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;
    Class to represent a person
    &#39;&#39;&#39;</span>
    
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">0</span>
        
        
<span class="token comment"># 上面的代码定义了一个名为Person类。</span>
<span class="token comment"># 它定义了Person对象包含的数据和函数</span>
<span class="token comment"># 上面的Person类很简单，包含数据name和age</span>
<span class="token comment"># 当前唯一一个函数时__init__,这是用于初始化对象值的标准函数。</span>
<span class="token comment"># 当你创建Person对象时，Python将自动调用__init__。</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><ul><li>在类中定义的函数叫做：<strong>方法</strong></li><li>与__init__一样，方法的第一个参数必须时self（会详细地讨论self）</li></ul><h2 id="定义的person类的使用" tabindex="-1"><a class="header-anchor" href="#定义的person类的使用" aria-hidden="true">#</a> 定义的Person类的使用</h2><ul><li><p>要常见Person对象，只需调用Person()。</p></li><li><p>这导致Python运行Person类中的函数<code>__init__</code>,并返回一个新的Person对象</p></li><li><p>变量age和name包含在对象中，因此每个创建的Person对象都有自己的name和age</p></li><li><p>要访问name和age，必须使<strong>句点</strong>表示法指定存储他们的对象</p></li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 下面的方法可以使用定义Person类</span>
p <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
p<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">35</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
p<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Nome&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span>


<span class="token comment">## 在这个例子中。变量p 指向一个 Person对象。</span>
<span class="token comment">## 从 Person类的定义可知，Person对象包含变量 age 和 name </span>
<span class="token comment">## 可以像使用常规变量那样使用。</span>
<span class="token comment">## 但必须使用句点表示法：即： p.age 和 p.name</span>
<span class="token comment">## Python自动给每个对象添加特殊变量self</span>
<span class="token comment">## 这个self变量指向本省，让类中的函数能够明确地引用对象地数据和函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数self" tabindex="-1"><a class="header-anchor" href="#参数self" aria-hidden="true">#</a> 参数self</h2><ul><li>在上面的例子中，调用Person()时，没有提供任何参数，但函数<code>__init__(self)</code>期望获得名为self的输入。</li><li>这是因为在OOP中，<code>self</code> 是一个指向对象本身的变量。概念简单。理解不容易</li></ul><h3 id="提示" tabindex="-1"><a class="header-anchor" href="#提示" aria-hidden="true">#</a> 提示</h3><ul><li><p>所有类都应该有方法<code>__init__(self)</code>，这个方法的职责是初始化对象，如初始化对象的变量。</p></li><li><p>方法<code>__init__</code>仅被调用一次-------在对象被创建时。</p></li><li><p>可根据需要给<code>__init__</code>指定其他参数</p></li><li><p>遵循Python的标准做法，将<code>__init__</code>的第一个参数命名为self。</p></li><li><p>并非必须这样做，可根据自己的喜好使用任何变量名(而不是self)。</p></li><li><p>在python中，可像其他数据类型一样使用对象：可将他们传递给函数，存储到列表和字典中、保存到文件中等等</p></li></ul><h2 id="显示对象" tabindex="-1"><a class="header-anchor" href="#显示对象" aria-hidden="true">#</a> 显示对象</h2><ul><li>方法是类中定义地函数。</li><li>下面给Person类添加一个方法，用于打印Person对象的内容</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 打印 Person对象的内容</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;
    Class to represent a person
    &#39;&#39;&#39;</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39; &#39;</span>
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">def</span> <span class="token function">display</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Person(&#39;%s&#39;,%d)&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">)</span>
        
<span class="token comment"># 方法display 将Person 对象的内容以适合程序员阅读的格式打印到屏幕上</span>

p <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token punctuation">)</span>
p<span class="token punctuation">.</span>display<span class="token punctuation">(</span><span class="token punctuation">)</span>
p<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Bob&#39;</span>
p<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">35</span>
p<span class="token punctuation">.</span>display<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 方法display的效果很好，但还可以使用下面更好的方法</span>
<span class="token comment">## python提供了一些特殊方法，让你能够定制对象以支持天衣无缝的打印</span>
<span class="token comment">## 例如，特殊方法 __str__ 用于生成对象的字符串表示</span>

<span class="token keyword">class</span> <span class="token class-name">Persom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;
    Class to represent a person
    &#39;&#39;&#39;</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39; &#39;</span>
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">def</span> <span class="token function">display</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Person(&#39;%s&#39;,%d)&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span>self<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Person(&#39;%s&#39;,%d) % (self.name,self.age)&quot;</span>

g <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## 还可以使用str简化display</span>

<span class="token keyword">class</span> <span class="token class-name">Persom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;
    Class to represent a person
    &#39;&#39;&#39;</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39; &#39;</span>
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">def</span> <span class="token function">display</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Person(&#39;%s&#39;,%d) % (self.name,self.age)&quot;</span>
    
f <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token punctuation">)</span>
f<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Mon&#39;</span>
f<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">35</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>display<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment">## 还可以定义特殊方法 __repr__ 返回对象的‘官方’（official）表示。</span>
<span class="token comment">## 如：Person对象的默认官方表示不太实用</span>
aaa <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>aaa<span class="token punctuation">)</span>

<span class="token comment">## 通过添加方法 __repr__ 可控制这里打印的字符串。大大多数类中，方法 __repr__ 都与方法 __str__ 相同</span>
<span class="token keyword">class</span> <span class="token class-name">Persom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;
    Class to represent a person
    &#39;&#39;&#39;</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39; &#39;</span>
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">def</span> <span class="token function">display</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Person(&#39;%s&#39;,age) % (self.name,self.age)&quot;</span>
    <span class="token keyword">def</span> <span class="token function">__repr__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">str</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span>
    
ccccc <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ccccc<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>ccccc<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment">## 创建自己的类和对象时，编写函数__str__ 和 __repr__ 几乎总是值得的。</span>
<span class="token comment">## 对于显示对象的内容很有帮助，而显示对象的内容有助于调试程序</span>

<span class="token comment">## 当定义了方法__repr__,但没有定义方法 __str__，则对象调用str()时，将执行__repr__</span>
<span class="token comment">## 添加方法 __repr__ 后，可进一步简化发放display</span>
<span class="token comment">##    def display(self):</span>
<span class="token comment">##        print(self)</span>
<span class="token comment">## 实际上，没有必要编写方法display</span>

<span class="token comment">## python建议将对象的字符串表示设置为创建对象所需的代码。</span>
<span class="token comment">## 这种约定，能够轻松地创建对象---只需要将字符串表示复制并粘贴到命令行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="灵活的初始化" tabindex="-1"><a class="header-anchor" href="#灵活的初始化" aria-hidden="true">#</a> 灵活的初始化</h2><ul><li>当需要创建特定的姓名和年龄的Person对象，可以用一个比较的方法是，在构造对象时将姓名和年龄传递给<code>__init__</code></li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 重写__init__</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>age <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Person(&#39;%s&#39;,age) % (self.name,self.age)&quot;</span>
    <span class="token keyword">def</span> <span class="token function">__repr__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">str</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span>
    
cde <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token string">&#39;Moe&#39;</span><span class="token punctuation">,</span><span class="token number">66</span><span class="token punctuation">)</span>
cde
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="特性装饰器" tabindex="-1"><a class="header-anchor" href="#特性装饰器" aria-hidden="true">#</a> 特性装饰器</h2><ul><li>特性装饰器 融 变量的简洁与函数的灵活于一身。</li><li>装饰器指出函数或方法有点特点，这是使用它们来指示设置函数和获取函数</li><li>获取函数返回变量的值，将使用@property装饰器来指出</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 使用@property装饰器来指出</span>
<span class="token decorator annotation punctuation">@property</span>
<span class="token keyword">def</span> <span class="token function">age</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;
    Return this person&#39;s age.
    &#39;&#39;&#39;</span>
    <span class="token keyword">return</span> self<span class="token punctuation">.</span>_age

<span class="token comment">## 这个age方法除必不可少的self外，不接受任何参数。</span>
<span class="token comment">## 我们在它前面加上了 @property，指出这是一个获取函数。这个方法的名称将被用于设置变量</span>
<span class="token comment">## 还将底层变量self.age重命名为：self._age</span>
<span class="token comment">## 在对象变量前加上下划线是一种常见的作法。</span>
<span class="token comment">## 这里使用这个变量与方法age区分</span>
<span class="token comment">## 修改Person类为下面的样子：</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>age <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>_age <span class="token operator">=</span> age
    
    <span class="token decorator annotation punctuation">@property</span>
    <span class="token keyword">def</span> <span class="token function">age</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_age
    
    <span class="token decorator annotation punctuation">@age<span class="token punctuation">.</span>setter</span>
    <span class="token keyword">def</span> <span class="token function">age</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token number">0</span> <span class="token operator">&lt;</span> age <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>_age <span class="token operator">=</span> age
        
    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Person(&#39;%s&#39;,%s)&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>_name<span class="token punctuation">,</span>self<span class="token punctuation">.</span>_age<span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">__repr__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">str</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span>

m <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token string">&#39;Lia&#39;</span><span class="token punctuation">,</span><span class="token number">33</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>
m<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">55</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
m<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">4</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>age<span class="token punctuation">)</span>

n <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token string">&#39;lin&#39;</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
n<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">30</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
n<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">6</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>

<span class="token comment">## 给age提供了设置函数和获取函数，编写的代码就像直接使用变量age</span>
<span class="token comment">## 差别在于：遇到代码m.age = -4/-6 时，python实际上将调用方法 age(self,age)</span>
<span class="token comment">## 同样，遇到代码m.age时，将调用函数age(self,age)</span>
<span class="token comment">## 这样的好处： 赋值语法简单，同时可控制变量的设置和获取方式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="私有变量" tabindex="-1"><a class="header-anchor" href="#私有变量" aria-hidden="true">#</a> 私有变量</h2><ul><li>不以下划线打头的变量是公有变量，任何代码都可以访问它们。</li><li>为降低self._age被直接修改的可能性。主要有以下几种方式 <ul><li>将其重命名为 <code>self.__age</code>，即在变量名开头包含两个下划线。 <ul><li><p>两个下划线表明：age是私有变量，不应在Person类外直接访问它。</p></li><li><p>要直接访问<code>self.__age</code>，需要在前面加上<code>_Person</code></p><p>p._Person__age = -44 print(p)</p></li><li><p>这降低了直接修改的可能性</p></li></ul></li></ul></li></ul><blockquote><p>在编写大型程序时，一条使用的经验是：首先将所有对象变量都设置为私有的。当有充分理由的情况下将其改为公有的。</p></blockquote><h2 id="继承-1" tabindex="-1"><a class="header-anchor" href="#继承-1" aria-hidden="true">#</a> 继承</h2><ul><li>继承是一种重用类的集之，能够这样创建全新的类：给既有类的拷贝添加变量和方法</li><li>当需要开发一款游戏，其中设计人类玩家和计算机玩家。为此，可以创建一个Player类，</li><li>这个Player类。包含所有玩家都有的东西</li></ul><h3 id="术语" tabindex="-1"><a class="header-anchor" href="#术语" aria-hidden="true">#</a> 术语</h3><ul><li><p>在下面的例子中</p></li><li><p>我们可以有下面的说法：</p><ul><li>Human 扩展了 Player</li><li>Human 从 Player 派生而来</li><li>Human 是 Player 的字类。而 Player 是 Human 的超类</li><li>Human 是一个 Player</li></ul></li><li><p>最后一个术语，意味着所有人都是玩家。</p></li><li><p>要创建类层次结构，一种方法是考虑类之间可能存在的是一个关系</p></li></ul><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><p><code>class New_name(Load_name)</code></p><ul><li>New_name: 表示的是：定义的新类的名称</li><li>Load_name：表示的是：之前的或者存在的类的名称</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 案例 Player类</span>
<span class="token keyword">class</span> <span class="token class-name">Player</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>_score <span class="token operator">=</span> <span class="token number">0</span>
        
    <span class="token keyword">def</span> <span class="token function">reset_score</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_score <span class="token operator">=</span> <span class="token number">0</span>
        
    <span class="token keyword">def</span> <span class="token function">incr_score</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_score <span class="token operator">=</span> self<span class="token punctuation">.</span>_score <span class="token operator">+</span> <span class="token number">1</span>
    
    <span class="token keyword">def</span> <span class="token function">get_name</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_name
    
    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;name = &#39;%s&#39;,score = %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>_name<span class="token punctuation">,</span>self<span class="token punctuation">.</span>_score<span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">__repr__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&#39;Player(%s)&#39;</span> <span class="token operator">%</span> <span class="token builtin">str</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span>
    
abcdfg <span class="token operator">=</span> Player<span class="token punctuation">(</span><span class="token string">&#39;Moe&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>abcdfg<span class="token punctuation">)</span>

abcdfg<span class="token punctuation">.</span>incr_score<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>abcdfg<span class="token punctuation">)</span>

abcdfg<span class="token punctuation">.</span>reset_score<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>abcdfg<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>name = &#39;Moe&#39;,score = 0
name = &#39;Moe&#39;,score = 1
name = &#39;Moe&#39;,score = 0
</code></pre><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 上面中，我们创建了一个类Player，下面，我们创建类Human继承Player类</span>

<span class="token comment">## 创建一个Human类，表示人类玩家，一种办法是通过复制并粘贴新建Player类的一个拷贝，</span>
<span class="token comment">## 在添加让玩家走棋的方法 make_move(self)。</span>

<span class="token comment">## 另一种方法，就是使用继承，让Human类继承Player类的所有变量和方法。就不需要在进行编写</span>

<span class="token keyword">class</span> <span class="token class-name">Human</span><span class="token punctuation">(</span>Player<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>


<span class="token comment"># 在Python中，pass语句表示“什么都不做”，对Human类来说，是一个完整而实用的定义。</span>

hfg <span class="token operator">=</span> Human<span class="token punctuation">(</span><span class="token string">&#39;wlinhao&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>hfg<span class="token punctuation">)</span>

hfg<span class="token punctuation">.</span>incr_score<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>hfg<span class="token punctuation">)</span>

hfg<span class="token punctuation">.</span>reset_score<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>hfg<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>name = &#39;wlinhao&#39;,score = 0
name = &#39;wlinhao&#39;,score = 1
name = &#39;wlinhao&#39;,score = 0
</code></pre><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 重写方法</span>
<span class="token comment"># 上面的例子中。h 的字符串表示为 Player，但更准确的说法，h应该是Human。</span>
<span class="token comment"># 修复这样的问题，可给Human定义 __repr__</span>

<span class="token keyword">class</span> <span class="token class-name">Human</span><span class="token punctuation">(</span>Player<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__repe__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&#39;Human(%s)&#39;</span> <span class="token operator">%</span> <span class="token builtin">str</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span>
    
h <span class="token operator">=</span> Human<span class="token punctuation">(</span><span class="token string">&quot;wlinhao&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span>


<span class="token comment"># 创建 Computer 类</span>
<span class="token keyword">class</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span>Player<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__repr__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&#39;Computer(%s)&#39;</span> <span class="token operator">%</span> <span class="token builtin">str</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>name = &#39;wlinhao&#39;,score = 0
</code></pre><h2 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h2><ul><li>演示 OOP 的强大</li><li>创建一个名为 Undercut的简单游戏。</li><li>这个游戏中，两玩家同时选择一个1--10的整数</li><li>如果一个玩家选择的整数比对方选择整数的小1，则该玩家获胜，否则平手</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## Undercut游戏 案例</span>

<span class="token keyword">class</span> <span class="token class-name">Player</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>_score <span class="token operator">=</span> <span class="token number">0</span>
        
    <span class="token keyword">def</span> <span class="token function">reset_score</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_score <span class="token operator">=</span> <span class="token number">0</span>
        
    <span class="token keyword">def</span> <span class="token function">incr_score</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_score <span class="token operator">=</span> self<span class="token punctuation">.</span>_score <span class="token operator">+</span> <span class="token number">1</span>
    
    <span class="token keyword">def</span> <span class="token function">get_name</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_name
    
    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;name = &#39;%s&#39;,score = %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>_name<span class="token punctuation">,</span>self<span class="token punctuation">.</span>_score<span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">__repr__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&#39;Player(%s)&#39;</span> <span class="token operator">%</span> <span class="token builtin">str</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span>
    
    
<span class="token keyword">def</span> <span class="token function">play_undercut</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span>p2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    p1<span class="token punctuation">.</span>reset_score<span class="token punctuation">(</span><span class="token punctuation">)</span>
    p2<span class="token punctuation">.</span>reset_score<span class="token punctuation">(</span><span class="token punctuation">)</span>
    m1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>get_move<span class="token punctuation">(</span><span class="token punctuation">)</span>
    m2 <span class="token operator">=</span> p2<span class="token punctuation">.</span>get_move<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%s move: %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>p1<span class="token punctuation">.</span>get_name<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>m1<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%s move: %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>p2<span class="token punctuation">.</span>get_name<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>m2<span class="token punctuation">)</span><span class="token punctuation">)</span>
    
    <span class="token keyword">if</span> m1 <span class="token operator">==</span> m2 <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span>
        p1<span class="token punctuation">.</span>incr_score<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> p1<span class="token punctuation">,</span>p2<span class="token punctuation">,</span><span class="token string">&#39;%s wins!&#39;</span> <span class="token operator">%</span> p1<span class="token punctuation">.</span>get_name<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token keyword">elif</span> m2 <span class="token operator">==</span> m1 <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span>
        p2<span class="token punctuation">.</span>incr_score<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> p1<span class="token punctuation">,</span>p2<span class="token punctuation">,</span><span class="token string">&#39;%s wins!&#39;</span> <span class="token operator">%</span> p2<span class="token punctuation">.</span>get_name<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> p1<span class="token punctuation">,</span>p2<span class="token punctuation">,</span><span class="token string">&#39;draw: no winner&#39;</span>
    
    
<span class="token comment">## 在上面的函数中，调用了p1.get_move()和p2.get_move()</span>
<span class="token comment">## 下面来实现这些函数</span>

<span class="token comment">## 由于在游戏Undercut中，走法不过是选择1--10的数字</span>
<span class="token comment">## 但是人类玩家是通过键盘键入一个1--10的数字，而计算机使用函数选择数字</span>
<span class="token comment">## 因此 Human 和 Computer 类需要专用的get_move(self)方法</span>

<span class="token comment">## 下面为Human类的方法 get_move</span>

<span class="token keyword">class</span> <span class="token class-name">Human</span><span class="token punctuation">(</span>Player<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__repr__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&#39;Human(%s)&#39;</span> <span class="token operator">%</span> <span class="token builtin">str</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">get_move</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
            <span class="token keyword">try</span><span class="token punctuation">:</span>
                n <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;%s move (1 - 10):&#39;</span> <span class="token operator">%</span> self<span class="token punctuation">.</span>get_name<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            
                <span class="token keyword">if</span> <span class="token number">1</span> <span class="token operator">&lt;=</span> n <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">:</span>
                    <span class="token keyword">return</span> n
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Oops!&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">except</span><span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Oops!&#39;</span><span class="token punctuation">)</span>
                
<span class="token comment"># 上面的功能就是要求用户一致输入时正确的1 -- 10 的整数为止</span>
<span class="token comment"># try/except 结构用于捕获异常。</span>

<span class="token keyword">import</span> random

<span class="token keyword">class</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span>Player<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__repr__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&#39;Computer(%s)&#39;</span> <span class="token operator">%</span> <span class="token builtin">str</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">get_move</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
    
<span class="token comment">## 代码基本上完成了，下面进行游戏的试玩</span>

jisuanji <span class="token operator">=</span> Computer<span class="token punctuation">(</span><span class="token string">&#39;Hal Bot&#39;</span><span class="token punctuation">)</span>
renlei <span class="token operator">=</span> Human<span class="token punctuation">(</span><span class="token string">&#39;lia&#39;</span><span class="token punctuation">)</span>
play_undercut<span class="token punctuation">(</span>jisuanji<span class="token punctuation">,</span>renlei<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>lia move (1 - 10):4
Hal Bot move: 8
lia move: 4
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    (Computer(name = &#39;Hal Bot&#39;,score = 0),
     Human(name = &#39;lia&#39;,score = 0),
     &#39;draw: no winner&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47);function v(m,b){const a=l("router-link");return o(),i("div",null,[r,n("nav",d,[n("ul",null,[n("li",null,[e(a,{to:"#继承"},{default:p(()=>[s("继承")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#编写类"},{default:p(()=>[s("编写类")]),_:1})])])]),n("li",null,[e(a,{to:"#方法"},{default:p(()=>[s("方法")]),_:1})]),n("li",null,[e(a,{to:"#定义的person类的使用"},{default:p(()=>[s("定义的Person类的使用")]),_:1})]),n("li",null,[e(a,{to:"#参数self"},{default:p(()=>[s("参数self")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#提示"},{default:p(()=>[s("提示")]),_:1})])])]),n("li",null,[e(a,{to:"#显示对象"},{default:p(()=>[s("显示对象")]),_:1})]),n("li",null,[e(a,{to:"#灵活的初始化"},{default:p(()=>[s("灵活的初始化")]),_:1})]),n("li",null,[e(a,{to:"#特性装饰器"},{default:p(()=>[s("特性装饰器")]),_:1})]),n("li",null,[e(a,{to:"#私有变量"},{default:p(()=>[s("私有变量")]),_:1})]),n("li",null,[e(a,{to:"#继承-1"},{default:p(()=>[s("继承")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#术语"},{default:p(()=>[s("术语")]),_:1})]),n("li",null,[e(a,{to:"#语法"},{default:p(()=>[s("语法")]),_:1})])])]),n("li",null,[e(a,{to:"#多态"},{default:p(()=>[s("多态")]),_:1})])])]),k])}const f=t(u,[["render",v],["__file","Python-面向对象编程(OOP).html.vue"]]);export{f as default};
