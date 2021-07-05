import{d as n}from"./app.cad05c30.js";const s={},a=n('<h1 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h1><div class="language-C ext-C line-numbers-mode"><pre class="language-C"><code>assign(chars)\ninsert(S, pos, T) // 插入串\ndel(S, pos, len)\ncopy(T)\ncompare(S, T)\ngetLength(S)\nclear(S)\ncat(S, T) // 连接\nsubString(S, pos, len)\nsubIndex(S, T, pos) // 若 T 为 S 子串, 返回 T 在 S[pos] 后第一次出现的索引\ndestory(S)\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><h3 id="定长串" tabindex="-1"><a class="header-anchor" href="#定长串" aria-hidden="true">#</a> 定长串</h3><div class="language-C ext-C line-numbers-mode"><pre class="language-C"><code>typedef struct {\n  char ch[MAX_SIZE];\n  int len;\n} String\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="链串" tabindex="-1"><a class="header-anchor" href="#链串" aria-hidden="true">#</a> 链串</h3><p>线性字符串</p><div class="language-C ext-C line-numbers-mode"><pre class="language-C"><code>typedef struct {\n  char * ch;\n  int len;\n} String\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="块链串" tabindex="-1"><a class="header-anchor" href="#块链串" aria-hidden="true">#</a> 块链串</h3><div class="language-C ext-C line-numbers-mode"><pre class="language-C"><code>typedef struct Block {\n  char ch[BOLOCK_SIZE];\n  struct Block * next;\n} Block;\n\ntypedef struct {\n  Block * head;\n  Block * tail;\n  int len;\n} String\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="模式匹配" tabindex="-1"><a class="header-anchor" href="#模式匹配" aria-hidden="true">#</a> 模式匹配</h2><ul><li>Brute-Force 算法 (回溯)</li><li>KMP (无回溯)</li></ul>',12);s.render=function(n,s){return a};export default s;