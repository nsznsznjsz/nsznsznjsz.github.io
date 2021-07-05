import{d as e}from"./app.cad05c30.js";const a={},n=e('<h1 id="浏览器同源政策" tabindex="-1"><a class="header-anchor" href="#浏览器同源政策" aria-hidden="true">#</a> 浏览器同源政策</h1><h2 id="判断方式" tabindex="-1"><a class="header-anchor" href="#判断方式" aria-hidden="true">#</a> 判断方式</h2><ol><li>协议相同</li><li>域名相同</li><li>端口相同</li></ol><h3 id="cookie、localstorage-和-indexdb-无法读取" tabindex="-1"><a class="header-anchor" href="#cookie、localstorage-和-indexdb-无法读取" aria-hidden="true">#</a> Cookie、LocalStorage 和 IndexDB 无法读取</h3><p>Cookie 只有同源的网页才能共享</p><ul><li>如果一级域名相同, 可以将两个页面设置相同的 domain 共享 Cookie</li></ul><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>document.domain = &#39;example.com&#39;; // 指定Cookie的所属域名为一级域名\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="dom-无法获得" tabindex="-1"><a class="header-anchor" href="#dom-无法获得" aria-hidden="true">#</a> DOM 无法获得</h3><p>以下代码受到限制</p><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>document.getElementById(&quot;myIFrame&quot;).contentWindow.document\nwindow.parent.document.body\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h3><h4 id="一级域名相同" tabindex="-1"><a class="header-anchor" href="#一级域名相同" aria-hidden="true">#</a> 一级域名相同</h4><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>document.domain = &#39;example.com&#39;; // 两个网站都需要设置, 且完全相等\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="一级域名不相同" tabindex="-1"><a class="header-anchor" href="#一级域名不相同" aria-hidden="true">#</a> 一级域名不相同</h4><h5 id="片段识别符" tabindex="-1"><a class="header-anchor" href="#片段识别符" aria-hidden="true">#</a> 片段识别符</h5><p><strong>原理</strong>: 只改变片段标识符，不会引起页面刷新</p><ol><li>父窗口写 <code>URL#hash</code></li><li>子窗口监听 hashchange</li></ol><h5 id="window-name" tabindex="-1"><a class="header-anchor" href="#window-name" aria-hidden="true">#</a> window.name</h5><p><strong>原理</strong>: window.name容量很大，可以放置非常长的字符串</p><p><strong>缺点</strong>: 必须监听子窗口window.name属性的变化，影响网页性能</p><ol><li>父窗口打开子窗口，写入 name</li><li>子窗口写入name，跳转至父窗口同域名网页</li></ol><h5 id="cross-document-messaging" tabindex="-1"><a class="header-anchor" href="#cross-document-messaging" aria-hidden="true">#</a> cross-document messaging</h5><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>postMessage(&#39;Hello World!&#39;, &#39;http://bbb.com&#39;)\n\nwindow.addEventListener(&#39;message&#39;, handleMessage)\n\nevent = {\n  source, // 发送消息的窗口\n  origin, // 消息发向的网址\n  data // 消息内容\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="ajax-请求不能发送" tabindex="-1"><a class="header-anchor" href="#ajax-请求不能发送" aria-hidden="true">#</a> AJAX 请求不能发送</h2><h3 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp" aria-hidden="true">#</a> JSONP</h3><p>添加一个&lt;script&gt;元素，向服务器请求JSON数据</p><p>缺点: 只能发送 GET 请求</p><h3 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> WebSocket</h3><p>设置 origin</p><h3 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h3><h4 id="简单请求" tabindex="-1"><a class="header-anchor" href="#简单请求" aria-hidden="true">#</a> 简单请求</h4><p><strong>条件</strong></p><ol><li>三种类型之一: HEAD, GET, POST</li><li>只允许以下头信息: Accept, Accept-Language, Content-Language, Last-Event-ID</li><li>Content-Type: 限于三个值 <ul><li>application/x-www-form-urlencoded</li><li>multipart/form-data</li><li>text/plain</li></ul></li></ol><h4 id="非简单请求" tabindex="-1"><a class="header-anchor" href="#非简单请求" aria-hidden="true">#</a> 非简单请求</h4>',34);a.render=function(e,a){return n};export default a;
