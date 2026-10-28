const projects = [
  {
    name: 'NEON CITY 2077',
    label: '程序化城市 · 步行、飞行与天气切换',
    type: '交互世界',
    year: '2026',
    image: 'assets/neon-clean.png',
    url: 'https://jiajinwu306.github.io/NEON-CITY-2077-V1.0.0/',
    action: '进入城市',
    featured: true
  },
  {
    name: 'SOLARIS',
    label: '从太阳系到宇宙网的三维旅程',
    type: '互动体验',
    year: '2026',
    image: 'assets/solaris.png',
    url: 'https://jiajinwu306.github.io/solaris-universe/',
    action: '进入体验'
  },
  {
    name: 'COMPOUND.OS',
    label: 'AI 资讯与日常记录的 Windows 工作台',
    type: '桌面应用',
    year: '2026',
    image: 'assets/compound.png',
    url: 'https://jiajinwu306.github.io/compound-os/',
    action: '在线预览'
  },
  {
    name: 'PayDance',
    label: '实时秒薪看板与 Windows 桌面封装',
    type: '桌面工具',
    year: '2026',
    image: 'assets/pay.png',
    url: 'https://d87c5881efd94f109193bddda4b70607.app.workbuddy.link/?demo',
    action: '在线演示'
  }
];

const arrow = '<span class="arrow" aria-hidden="true">↗</span>';
const app = document.querySelector('#app');

function projectMarkup(project, index) {
  const size = project.featured ? 'project project-featured' : 'project';
  return `
    <article class="${size}" data-reveal>
      <a class="project-image" href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="打开 ${project.name}">
        <img src="${project.image}" alt="${project.name} 项目真实画面" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}>
        <span class="image-open">${project.action} ${arrow}</span>
      </a>
      <div class="project-caption">
        <div>
          <h3><a href="${project.url}" target="_blank" rel="noopener noreferrer">${project.name} ${arrow}</a></h3>
          <p>${project.label}</p>
        </div>
        <span class="project-meta">${project.type}<br>${project.year}</span>
      </div>
    </article>`;
}

function render() {
  app.innerHTML = `
    <header class="site-header" id="top">
      <a class="identity" href="#top" aria-label="吴佳锦，回到顶部">
        <strong>吴佳锦</strong><span>WU JIAJIN</span>
      </a>
      <nav aria-label="主导航">
        <a href="#works">作品</a>
        <a href="#about">关于</a>
        <a href="https://github.com/jiajinwu306" target="_blank" rel="noopener noreferrer">GitHub ${arrow}</a>
      </nav>
    </header>
    <main>
      <section class="intro" aria-labelledby="page-title">
        <div class="intro-title">
          <span class="eyebrow">个人作品集 <i>·</i> 2026</span>
          <h1 id="page-title">吴佳锦 <span>WU JIAJIN</span></h1>
        </div>
        <div class="intro-copy">
          <p>把想法做成可以进入、<br class="desktop-break">也可以使用的作品。</p>
          <a class="text-link" href="#works">向下看作品 <span aria-hidden="true">↓</span></a>
        </div>
      </section>
      <section class="works" id="works" aria-labelledby="works-title">
        <div class="section-heading">
          <h2 id="works-title">精选作品</h2>
          <span>SELECTED WORKS <i>—</i> 04</span>
        </div>
        <div class="gallery-grid">
          ${projects.map(projectMarkup).join('')}
        </div>
      </section>
      <section class="quality-case" id="quality-case" aria-labelledby="quality-title" data-reveal>
        <div class="section-heading">
          <h2 id="quality-title">业务工具案例</h2>
          <span>PRODUCT CASE <i>—</i> 01</span>
        </div>
        <div class="quality-layout">
          <div class="quality-copy">
            <span class="eyebrow">AI 应用 · 质检工作流</span>
            <h3>AI 外呼智能质检</h3>
            <p class="quality-lead">把批量通话变成可追溯的复核任务：导入记录，按品牌规则评估意向，集中查看与原判断不一致的结果，再标记 Badcase。</p>
            <dl class="quality-facts">
              <div><dt>输入</dt><dd>Excel 通话记录、品牌规则与版本化 Prompt</dd></div>
              <div><dt>分析</dt><dd>意向评估与独立的 ASR 对话一致性风险检测</dd></div>
              <div><dt>交付</dt><dd>异常复核、Badcase 留痕、Excel 导出与本地 MCP 调用</dd></div>
            </dl>
            <p class="quality-note">界面展示使用完全合成的对话与编号。项目处理的实际业务数据未进入作品集；源码仓库为私有仓库。</p>
          </div>
          <figure class="quality-visual">
            <a href="assets/ai-quality-demo.png" target="_blank" rel="noopener noreferrer" aria-label="查看 AI 外呼质检合成数据演示界面原图"><img src="assets/ai-quality-demo.png" alt="AI 外呼质检工作台界面，展示合成通话记录" loading="lazy"></a>
            <figcaption>质检工作台 · 合成数据演示</figcaption>
          </figure>
        </div>
      </section>
    </main>
    <footer class="site-footer" id="about">
      <div class="footer-about">
        <span class="eyebrow">关于我</span>
        <h2>做产品，<br>也探索数字空间。</h2>
        <p>我是吴佳锦。关注 AI 产品与交互体验，作品从日常工具延伸到可漫游的城市。</p>
      </div>
      <div class="footer-contact">
        <span>联系与更多</span>
        <a href="mailto:19886028363@163.com">给我写邮件 ${arrow}</a>
        <a href="https://github.com/jiajinwu306" target="_blank" rel="noopener noreferrer">GitHub ${arrow}</a>
      </div>
      <small>WU JIAJIN <span>·</span> 2026</small>
    </footer>`;
}

render();

if (window.gsap && window.ScrollTrigger && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo('.project-featured .project-image img',
    { scale: 1.1 },
    { scale: 1, ease: 'none', scrollTrigger: { trigger: '.gallery-grid', start: 'top 80%', end: 'bottom 20%', scrub: true } }
  );
  gsap.utils.toArray('[data-reveal]').forEach(card => {
    gsap.from(card, {
      y: 22,
      opacity: 0,
      duration: 0.65,
      ease: 'power2.out',
      scrollTrigger: { trigger: card, start: 'top 88%', once: true }
    });
  });
  gsap.from('.site-footer > *', {
    y: 18,
    opacity: 0,
    duration: 0.5,
    stagger: 0.07,
    ease: 'power2.out',
    scrollTrigger: { trigger: '.site-footer', start: 'top 86%', once: true }
  });
}
