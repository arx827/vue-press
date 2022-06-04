import{_ as c,r as l,o as p,c as u,b as n,a as e,w as i,d as s,e as t}from"./app.f15ed2f5.js";const d={},r=n("h1",{id:"\u90E8\u7F72",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u90E8\u7F72","aria-hidden":"true"},"#"),s(" \u90E8\u7F72")],-1),h=n("p",null,"\u4E0B\u8FF0\u7684\u6307\u5357\u57FA\u65BC\u4EE5\u4E0B\u689D\u4EF6\uFF1A",-1),k=n("li",null,[s("Markdown \u6E90\u6587\u4EF6\u653E\u7F6E\u5728\u4F60\u9805\u76EE\u7684 "),n("code",null,"docs"),s(" \u76EE\u9304\uFF1B")],-1),_=n("li",null,[s("\u4F7F\u7528\u7684\u662F\u9ED8\u8A8D\u7684\u69CB\u5EFA\u8F38\u51FA\u76EE\u9304 ("),n("code",null,".vuepress/dist"),s(") \uFF1B")],-1),v=s("\u4F7F\u7528 "),m={href:"https://classic.yarnpkg.com/zh-Hans/",target:"_blank",rel:"noopener noreferrer"},b=s("Yarn classic"),g=s(" \u4F5C\u70BA\u5305\u7BA1\u7406\u5668\uFF0C\u7576\u7136\u4E5F\u53EF\u4EE5\u4F7F\u7528 NPM \u3002"),y=n("li",null,[s("VuePress \u4F5C\u70BA\u9805\u76EE\u4F9D\u8CF4\u5B89\u88DD\uFF0C\u4E26\u5728 "),n("code",null,"package.json"),s(" \u4E2D\u914D\u7F6E\u4E86\u5982\u4E0B\u8173\u672C\uFF1A")],-1),f=t(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages" aria-hidden="true">#</a> GitHub Pages</h2>`,2),E=s("\u8A2D\u7F6E\u6B63\u78BA\u7684 "),q=s("base"),x=s(" \u9078\u9805\u3002"),w=t("<p>\u5982\u679C\u4F60\u6E96\u5099\u767C\u5E03\u5230 <code>https://&lt;USERNAME&gt;.github.io/</code> \uFF0C\u4F60\u53EF\u4EE5\u7701\u7565\u9019\u4E00\u6B65\uFF0C\u56E0\u70BA <code>base</code> \u9ED8\u8A8D\u5C31\u662F <code>&quot;/&quot;</code> \u3002</p><p>\u5982\u679C\u4F60\u6E96\u5099\u767C\u5E03\u5230 <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code> \uFF0C\u4E5F\u5C31\u662F\u8AAA\u4F60\u7684\u5009\u5EAB\u5730\u5740\u662F <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> \uFF0C\u5247\u5C07 <code>base</code> \u8A2D\u7F6E\u70BA <code>&quot;/&lt;REPO&gt;/&quot;</code>\u3002</p>",2),P=s("\u9078\u64C7\u4F60\u60F3\u8981\u4F7F\u7528\u7684 CI \u5DE5\u5177\u3002\u9019\u88E1\u6211\u5011\u4EE5 "),j={href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"},R=s("GitHub Actions"),B=s(" \u70BA\u4F8B\u3002"),N=n("p",null,[s("\u5275\u5EFA "),n("code",null,".github/workflows/docs.yml"),s(" \u6587\u4EF6\u4F86\u914D\u7F6E\u5DE5\u4F5C\u6D41\u3002")],-1),C=t(`<details class="custom-container details"><summary>\u9EDE\u64CA\u5C55\u958B\u914D\u7F6E\u6A23\u4F8B</summary><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> docs

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># \u6BCF\u7576 push \u5230 main \u5206\u652F\u6642\u89F8\u767C\u90E8\u7F72</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span>
  <span class="token comment"># \u624B\u52D5\u89F8\u767C\u90E8\u7F72</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">docs</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u201C\u6700\u8FD1\u66F4\u65B0\u6642\u9593\u201D \u7B49 git \u65E5\u8A8C\u76F8\u95DC\u4FE1\u606F\uFF0C\u9700\u8981\u62C9\u53D6\u5168\u90E8\u63D0\u4EA4\u7D00\u9304</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u9078\u64C7\u8981\u4F7F\u7528\u7684 node \u7248\u672C</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;14&#39;</span>

      <span class="token comment"># \u7DE9\u5B58 node_modules</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache dependencies
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2
        <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            **/node_modules</span>
          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>yarn<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            \${{ runner.os }}-yarn-</span>

      <span class="token comment"># \u5982\u679C\u7DE9\u5B58\u6C92\u6709\u547D\u4E2D\uFF0C\u5B89\u88DD\u4F9D\u8CF4</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies
        <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile

      <span class="token comment"># \u904B\u884C\u69CB\u5EFA\u8173\u672C</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn docs<span class="token punctuation">:</span>build

      <span class="token comment"># \u67E5\u770B workflow \u7684\u6587\u6A94\u4F86\u7372\u53D6\u66F4\u591A\u4FE1\u606F</span>
      <span class="token comment"># @see https://github.com/crazy-max/ghaction-github-pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u90E8\u7F72\u5230 gh-pages \u5206\u652F</span>
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># \u90E8\u7F72\u76EE\u9304\u70BA VuePress \u7684\u9ED8\u8A8D\u8F38\u51FA\u76EE\u9304</span>
          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token comment"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),I={class:"custom-container tip"},O=n("p",{class:"custom-container-title"},"TIP",-1),A=s("\u8ACB\u53C3\u8003 "),G={href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},H=s("GitHub Pages \u5B98\u65B9\u6307\u5357"),L=s(" \u4F86\u7372\u53D6\u66F4\u591A\u4FE1\u606F\u3002"),V=n("h2",{id:"gitlab-pages",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gitlab-pages","aria-hidden":"true"},"#"),s(" GitLab Pages")],-1),S=s("\u8A2D\u7F6E\u6B63\u78BA\u7684 "),T=s("base"),U=s(" \u9078\u9805\u3002"),M=t("<p>\u5982\u679C\u4F60\u6E96\u5099\u767C\u5E03\u5230 <code>https://&lt;USERNAME&gt;.gitlab.io/</code> \uFF0C\u4F60\u53EF\u4EE5\u7701\u7565\u9019\u4E00\u6B65\uFF0C\u56E0\u6B64 <code>base</code> \u9ED8\u8A8D\u5C31\u662F <code>&quot;/&quot;</code> \u3002</p><p>\u5982\u679C\u4F60\u6E96\u5099\u767C\u5E03\u5230 <code>https://&lt;USERNAME&gt;.gitlab.io/&lt;REPO&gt;/</code> \uFF0C\u4E5F\u5C31\u662F\u8AAA\u4F60\u7684\u5009\u5EAB\u5730\u5740\u662F <code>https://gitlab.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> \uFF0C\u5247\u5C07 <code>base</code> \u8A2D\u7F6E\u70BA <code>&quot;/&lt;REPO&gt;/&quot;</code>\u3002</p>",2),D=s("\u5275\u5EFA "),F=n("code",null,".gitlab-ci.yml",-1),z=s(" \u6587\u4EF6\u4F86\u914D\u7F6E "),$={href:"https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/",target:"_blank",rel:"noopener noreferrer"},K=s("GitLab CI"),Y=s(" \u5DE5\u4F5C\u6D41\u3002"),W=t(`<details class="custom-container details"><summary>\u9EDE\u64CA\u5C55\u958B\u914D\u7F6E\u6A23\u4F8B</summary><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u9078\u64C7\u4F60\u8981\u4F7F\u7528\u7684 docker \u93E1\u50CF</span>
<span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>14<span class="token punctuation">-</span>buster

<span class="token key atrule">pages</span><span class="token punctuation">:</span>
  <span class="token comment"># \u6BCF\u7576 push \u5230 main \u5206\u652F\u6642\u89F8\u767C\u90E8\u7F72</span>
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> main

  <span class="token comment"># \u7DE9\u5B58 node_modules</span>
  <span class="token key atrule">cache</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> node_modules/

  <span class="token comment"># \u5B89\u88DD\u4F9D\u8CF4\u4E26\u904B\u884C\u69CB\u5EFA\u8173\u672C</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> yarn <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile
  <span class="token punctuation">-</span> yarn docs<span class="token punctuation">:</span>build <span class="token punctuation">-</span><span class="token punctuation">-</span>dest public

  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> public
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),J={class:"custom-container tip"},Q=n("p",{class:"custom-container-title"},"TIP",-1),X=s("\u8ACB\u53C3\u8003 "),Z={href:"https://docs.gitlab.com/ce/user/project/pages/#getting-started",target:"_blank",rel:"noopener noreferrer"},nn=s("GitLab Pages \u5B98\u65B9\u6307\u5357"),sn=s(" \u4F86\u7372\u53D6\u66F4\u591A\u4FE1\u606F\u3002"),en=n("h2",{id:"google-firebase",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#google-firebase","aria-hidden":"true"},"#"),s(" Google Firebase")],-1),an=s("\u8ACB\u78BA\u4FDD\u4F60\u5DF2\u7D93\u5B89\u88DD\u4E86 "),tn={href:"https://www.npmjs.com/package/firebase-tools",target:"_blank",rel:"noopener noreferrer"},on=s("firebase-tools"),ln=s("\u3002"),cn=n("li",null,[n("p",null,[s("\u5728\u4F60\u9805\u76EE\u7684\u6839\u76EE\u9304\u4E0B\u5275\u5EFA "),n("code",null,"firebase.json"),s(" \u548C "),n("code",null,".firebaserc"),s("\uFF0C\u4E26\u5305\u542B\u4EE5\u4E0B\u5185\u5BB9\uFF1A")])],-1),pn=t(`<p><code>firebase.json</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;hosting&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;public&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./docs/.vuepress/dist&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.firebaserc</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;projects&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;YOUR_FIREBASE_ID&gt;&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u5728\u57F7\u884C\u4E86 <code>yarn docs:build</code> \u6216 <code>npm run docs:build</code> \u5F8C, \u4F7F\u7528 <code>firebase deploy</code> \u6307\u4EE4\u4F86\u90E8\u7F72\u3002</li></ol>`,5),un={class:"custom-container tip"},dn=n("p",{class:"custom-container-title"},"TIP",-1),rn=s("\u8ACB\u53C3\u8003 "),hn={href:"https://firebase.google.com/docs/cli",target:"_blank",rel:"noopener noreferrer"},kn=s("Firebase CLI \u5B98\u65B9\u6307\u5357"),_n=s(" \u4F86\u7372\u53D6\u66F4\u591A\u4FE1\u606F\u3002"),vn=n("h2",{id:"heroku",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#heroku","aria-hidden":"true"},"#"),s(" Heroku")],-1),mn=s("\u9996\u5148\u5B89\u88DD "),bn={href:"https://devcenter.heroku.com/articles/heroku-cli",target:"_blank",rel:"noopener noreferrer"},gn=s("Heroku CLI"),yn=s("\uFF1B"),fn={href:"https://signup.heroku.com",target:"_blank",rel:"noopener noreferrer"},En=s("\u5728\u9019\u88E1"),qn=s(" \u8A3B\u518A\u4E00\u500B Heroku \u5E33\u865F\uFF1B"),xn=n("li",null,[n("p",null,[s("\u904B\u884C "),n("code",null,"heroku login"),s(" \u4E26\u586B\u5BEB\u4F60\u7684 Heroku \u8A8D\u8B49\u4FE1\u606F\uFF1A")])],-1),wn=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>heroku login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>\u5728\u4F60\u7684\u9805\u76EE\u6839\u76EE\u9304\u4E2D\uFF0C\u5275\u5EFA\u4E00\u500B\u540D\u70BA <code>static.json</code> \u7684\u6587\u4EF6\uFF0C\u4E26\u5305\u542B\u4E0B\u8FF0\u5185\u5BB9\uFF1A</li></ol><p><code>static.json</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./docs/.vuepress/dist&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Pn=s("\u9019\u88E1\u662F\u4F60\u9805\u76EE\u7684\u914D\u7F6E\uFF0C\u8ACB\u53C3\u8003 "),jn={href:"https://github.com/heroku/heroku-buildpack-static",target:"_blank",rel:"noopener noreferrer"},Rn=s("heroku-buildpack-static"),Bn=s(" \u4F86\u7372\u53D6\u66F4\u591A\u4FE1\u606F\u3002"),Nn=n("h2",{id:"layer0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#layer0","aria-hidden":"true"},"#"),s(" Layer0")],-1),Cn=s("\u8ACB\u67E5\u770B "),In={href:"https://docs.layer0.co/guides/vuepress",target:"_blank",rel:"noopener noreferrer"},On=s("Layer0 Documentation > Framework Guides > VuePress"),An=s(" \u3002"),Gn=n("h2",{id:"netlify",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#netlify","aria-hidden":"true"},"#"),s(" Netlify")],-1),Hn=s("\u524D\u5F80 "),Ln={href:"https://netlify.com",target:"_blank",rel:"noopener noreferrer"},Vn=s("Netlify"),Sn=s(" \uFF0C\u5F9E GitHub \u5275\u5EFA\u4E00\u500B\u65B0\u9805\u76EE\uFF0C\u4E26\u9032\u884C\u5982\u4E0B\u914D\u7F6E\uFF1A"),Tn=n("ul",null,[n("li",null,[n("strong",null,"Build Command:"),s(),n("code",null,"yarn docs:build")]),n("li",null,[n("strong",null,"Publish directory:"),s(),n("code",null,"docs/.vuepress/dist")])],-1),Un=s("\u8A2D\u7F6E "),Mn={href:"https://docs.netlify.com/configure-builds/environment-variables",target:"_blank",rel:"noopener noreferrer"},Dn=s("Environment variables"),Fn=s(" \u4F86\u9078\u64C7 Node \u7248\u672C\uFF1A"),zn=n("ul",null,[n("li",null,[n("code",null,"NODE_VERSION"),s(": 14")])],-1),$n=n("li",null,[n("p",null,"\u9EDE\u64CA deploy \u6309\u94AE\u3002")],-1),Kn=n("h2",{id:"vercel",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vercel","aria-hidden":"true"},"#"),s(" Vercel")],-1),Yn=s("\u524D\u5F80 "),Wn={href:"https://vercel.com",target:"_blank",rel:"noopener noreferrer"},Jn=s("Vercel"),Qn=s(" \uFF0C\u5F9E GitHub \u5275\u5EFA\u4E00\u500B\u65B0\u9805\u76EE\uFF0C\u4E26\u9032\u884C\u5982\u4E0B\u914D\u7F6E\uFF1A"),Xn=n("ul",null,[n("li",null,[n("strong",null,"FRAMEWORK PRESET:"),s(),n("code",null,"Other")]),n("li",null,[n("strong",null,"BUILD COMMAND:"),s(),n("code",null,"yarn docs:build")]),n("li",null,[n("strong",null,"OUTPUT DIRECTORY:"),s(),n("code",null,"docs/.vuepress/dist")])],-1),Zn=n("li",null,[n("p",null,"\u9EDE\u64CA deploy \u6309\u94AE\u3002")],-1),ns=n("h2",{id:"\u96F2\u958B\u767C-cloudbase",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u96F2\u958B\u767C-cloudbase","aria-hidden":"true"},"#"),s(" \u96F2\u958B\u767C CloudBase")],-1),ss={href:"https://cloudbase.net/?site=vuepress",target:"_blank",rel:"noopener noreferrer"},es=s("\u96F2\u958B\u767C CloudBase"),as=s(" \u662F\u4E00\u500B\u96F2\u539F\u751F\u4E00\u9AD4\u5316\u7684 Serverless \u96F2\u5E73\u53F0\uFF0C\u652F\u6301\u9759\u614B\u7DB2\u7AD9\u3001\u5BB9\u5668\u7B49\u591A\u7A2E\u6258\u7BA1\u80FD\u529B\uFF0C\u4E26\u63D0\u4F9B\u7C21\u4FBF\u7684\u90E8\u7F72\u5DE5\u5177 "),ts={href:"https://cloudbase.net/framework.html?site=vuepress",target:"_blank",rel:"noopener noreferrer"},os=s("CloudBase Framework"),ls=s(" \u4F86\u4E00\u9375\u90E8\u7F72\u61C9\u7528\u3002"),is=t(`<ol><li>\u5168\u5C40\u5B89\u88DD CloudBase CLI \uFF1A</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g @cloudbase/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),cs={start:"2"},ps=s("\u5728\u9805\u76EE\u6839\u76EE\u9304\u904B\u884C\u4EE5\u4E0B\u547D\u4EE4\u4E00\u9375\u90E8\u7F72 VuePress \u61C9\u7528\uFF0C\u5728\u90E8\u7F72\u4E4B\u524D\u53EF\u4EE5\u5148 "),us={href:"https://console.cloud.tencent.com/tcb/env/index?tdl_anchor=ad&tdl_site=vuejs",target:"_blank",rel:"noopener noreferrer"},ds=s("\u958B\u901A\u74B0\u5883"),rs=s("\uFF1A"),hs=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>cloudbase init --without-template
cloudbase framework:deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>CloudBase CLI \u9996\u5148\u6703\u8DF3\u8F49\u5230\u63A7\u5236\u53F0\u9032\u884C\u767B\u9304\u6388\u6B0A\uFF0C\u7136\u5F8C\u5C07\u6703\u4EA4\u4E92\u5F0F\u9032\u884C\u78BA\u8A8D\u3002</p><p>\u78BA\u8A8D\u4FE1\u606F\u5F8C\u6703\u7ACB\u5373\u9032\u884C\u90E8\u7F72\uFF0C\u90E8\u7F72\u5B8C\u6210\u5F8C\uFF0C\u53EF\u4EE5\u7372\u5F97\u4E00\u500B\u81EA\u52D5 SSL\uFF0CCDN \u52A0\u901F\u7684\u7DB2\u7AD9\u61C9\u7528\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u642D\u914D\u4F7F\u7528 GitHub Action \u4F86\u6301\u7E8C\u90E8\u7F72 GitHub \u4E0A\u7684 VuePress \u61C9\u7528\u3002</p><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>cloudbase init --template vuepress</code> \u5FEB\u901F\u5275\u5EFA\u548C\u90E8\u7F72\u4E00\u500B\u65B0\u7684 VuePress \u61C9\u7528\u3002</p>`,4),ks={class:"custom-container tip"},_s=n("p",{class:"custom-container-title"},"TIP",-1),vs=s("\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\u8ACB\u67E5\u770B CloudBase Framework \u7684"),ms={href:"https://github.com/TencentCloudBase/cloudbase-framework?site=vuepress#%E9%A1%B9%E7%9B%AE%E7%A4%BA%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"},bs=s("\u90E8\u7F72\u9805\u76EE\u793A\u4F8B"),gs=n("h2",{id:"_21-\u96F2\u76D2\u5B50",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_21-\u96F2\u76D2\u5B50","aria-hidden":"true"},"#"),s(" 21 \u96F2\u76D2\u5B50")],-1),ys=s("\u8ACB\u67E5\u770B "),fs={href:"https://www.21yunbox.com/docs/#/deploy-vuepress",target:"_blank",rel:"noopener noreferrer"},Es=s("21 \u96F2\u76D2\u5B50 - \u90E8\u7F72\u4E00\u500B VuePress \u9759\u614B\u7DB2\u9801"),qs=s("\u3002");function xs(ws,Ps){const a=l("ExternalLinkIcon"),o=l("RouterLink");return p(),u("div",null,[r,h,n("ul",null,[k,_,n("li",null,[v,n("a",m,[b,e(a)]),g]),y]),f,n("ol",null,[n("li",null,[n("p",null,[E,e(o,{to:"/reference/config.html#base"},{default:i(()=>[q]),_:1}),x]),w]),n("li",null,[n("p",null,[P,n("a",j,[R,e(a)]),B]),N])]),C,n("div",I,[O,n("p",null,[A,n("a",G,[H,e(a)]),L])]),V,n("ol",null,[n("li",null,[n("p",null,[S,e(o,{to:"/reference/config.html#base"},{default:i(()=>[T]),_:1}),U]),M]),n("li",null,[n("p",null,[D,F,z,n("a",$,[K,e(a)]),Y])])]),W,n("div",J,[Q,n("p",null,[X,n("a",Z,[nn,e(a)]),sn])]),en,n("ol",null,[n("li",null,[n("p",null,[an,n("a",tn,[on,e(a)]),ln])]),cn]),pn,n("div",un,[dn,n("p",null,[rn,n("a",hn,[kn,e(a)]),_n])]),vn,n("ol",null,[n("li",null,[n("p",null,[mn,n("a",bn,[gn,e(a)]),yn])]),n("li",null,[n("p",null,[n("a",fn,[En,e(a)]),qn])]),xn]),wn,n("p",null,[Pn,n("a",jn,[Rn,e(a)]),Bn]),Nn,n("p",null,[Cn,n("a",In,[On,e(a)]),An]),Gn,n("ol",null,[n("li",null,[n("p",null,[Hn,n("a",Ln,[Vn,e(a)]),Sn]),Tn]),n("li",null,[n("p",null,[Un,n("a",Mn,[Dn,e(a)]),Fn]),zn]),$n]),Kn,n("ol",null,[n("li",null,[n("p",null,[Yn,n("a",Wn,[Jn,e(a)]),Qn]),Xn]),Zn]),ns,n("p",null,[n("a",ss,[es,e(a)]),as,n("a",ts,[os,e(a)]),ls]),is,n("ol",cs,[n("li",null,[ps,n("a",us,[ds,e(a)]),rs])]),hs,n("div",ks,[_s,n("p",null,[vs,n("a",ms,[bs,e(a)])])]),gs,n("p",null,[ys,n("a",fs,[Es,e(a)]),qs])])}var Rs=c(d,[["render",xs],["__file","deployment.html.vue"]]);export{Rs as default};
