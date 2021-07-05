import{r as e,o as a,c as n,a as r,F as s,b as l,d as i}from"./app.cad05c30.js";const t={},o=r("h1",{id:"json-web-token",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#json-web-token","aria-hidden":"true"},"#"),l(" Json Web Token")],-1),d=r("p",null,[r("strong",null,"主要用途"),l(" 身份认证, 签名数据, 可以防止被篡改, 但不能储存未加密数据")],-1),h=r("p",null,[r("strong",null,"同类技术"),l(" session 复制, session 持久化")],-1),u={href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"},c=l("Auth0"),p={href:"https://tools.ietf.org/html/rfc7519",target:"_blank",rel:"noopener noreferrer"},b=l("RFC 7519"),g=i('<h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><p>Header.Playload.Signature</p><h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{\n  &quot;alg&quot;: &quot;HS256&quot;,\n  &quot;typ&quot;: &quot;JWT&quot;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="payload" tabindex="-1"><a class="header-anchor" href="#payload" aria-hidden="true">#</a> Payload</h3><p>https://www.iana.org/assignments/jwt/jwt.xhtml</p><h3 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>HMACSHA256(\n  base64UrlEncode(header) + &quot;.&quot; + base64UrlEncode(payload),\n  your - 256 - bit - secret\n)\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="http-header" tabindex="-1"><a class="header-anchor" href="#http-header" aria-hidden="true">#</a> HTTP Header</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Authorization: Bearer &lt;token&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h2><ul><li>自包含: 降低数据库请求次数</li><li>不用担心 CORS</li><li>服务器无状态，易横向扩展</li></ul><h2 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h2><ul><li><p>包含认证信息，因此一旦信息泄露，任何人都可以获得令牌的所有权限</p><ul><li>有效期不宜太长</li><li>重要操作时应验证身份</li><li>HTTPS</li></ul></li><li><p>服务器无状态，无法撤销令牌</p></li><li><p>签名数据可以防止篡改，但不能储存未加密数据</p></li></ul><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><ul><li>OAuth2.0 的 Authorization Code</li><li>信息传输，用于检验信息是否被篡改</li><li>登录状态保持</li><li>OpenID Connect</li></ul>',16),m={href:"https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-with-identity-providers.html",target:"_blank",rel:"noopener noreferrer"},f=l("Using Tokens with User Pools"),v={href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-token-and-claims",target:"_blank",rel:"noopener noreferrer"},x=l("Microsoft identity platform ID tokens"),k={href:"https://auth0.com/docs/tokens",target:"_blank",rel:"noopener noreferrer"},j=l("Tokens used by Auth0");t.render=function(l,i){const t=e("OutboundLink");return a(),n(s,null,[o,d,h,r("p",null,[r("a",u,[c,r(t)])]),r("p",null,[r("a",p,[b,r(t)])]),g,r("p",null,[r("a",m,[f,r(t)])]),r("p",null,[r("a",v,[x,r(t)])]),r("p",null,[r("a",k,[j,r(t)])])],64)};export default t;
