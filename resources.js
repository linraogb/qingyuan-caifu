(function () {
  var TOPICS = [
    { id: "all", label: "全部" },
    { id: "401k", label: "401(k)" },
    { id: "rsu", label: "RSU" },
    { id: "tax", label: "税务规划" },
    { id: "invest", label: "投资基础" }
  ];

  var ARTICLES = [
    {
      topic: "rsu",
      topicLabel: "RSU",
      title: "RSU 归属那天，该不该马上卖掉？",
      excerpt: "很多工程师在 RSU vest 当天纠结要不要立刻卖出。这篇文章拆解了集中持仓风险、预扣税常见误差，以及一套可以照搬的卖出节奏。",
      date: "2026年8月",
      readTime: 7
    },
    {
      topic: "rsu",
      topicLabel: "RSU",
      title: "为什么你的 RSU 预扣税总是不够？",
      excerpt: "雇主默认的 22% 联邦预扣税率，往往低于高收入工程师的实际边际税率。这里讲清楚缺口从哪来，以及如何提前补上。",
      date: "2026年7月",
      readTime: 6
    },
    {
      topic: "401k",
      topicLabel: "401(k)",
      title: "Mega Backdoor Roth，到底值不值得做？",
      excerpt: "不是每家公司的 401(k) 计划都支持税后供款和计划内转换。这篇文章教你先确认资格，再判断这笔额外税收优惠是否划算。",
      date: "2026年8月",
      readTime: 8
    },
    {
      topic: "401k",
      topicLabel: "401(k)",
      title: "跳槽时，旧公司的 401(k) 应该怎么处理？",
      excerpt: "留在原计划、转入新雇主计划，还是转入个人 IRA？三种选择在费用、投资选项和税务时机上的差别，一次说清楚。",
      date: "2026年6月",
      readTime: 5
    },
    {
      topic: "tax",
      topicLabel: "税务规划",
      title: "ISO 行权前，一定要算一遍 AMT",
      excerpt: "替代性最低税（AMT）是 ISO 行权中最容易被忽略的陷阱。文章附了一个简化的估算思路，帮你判断今年行权是否安全。",
      date: "2026年5月",
      readTime: 9
    },
    {
      topic: "tax",
      topicLabel: "税务规划",
      title: "年底前，这几件税务待办别拖到报税季",
      excerpt: "股票捐赠、损失收割、雇主福利截止日……这份清单汇总了工程师最容易在年底错过的税务动作。",
      date: "2026年11月",
      readTime: 6
    },
    {
      topic: "invest",
      topicLabel: "投资基础",
      title: "手里全是公司股票，投资组合该怎么调？",
      excerpt: "RSU 让很多工程师的净资产高度集中在一家公司。这里介绍一套循序渐进的再平衡思路，既控制风险也顾及税务成本。",
      date: "2026年4月",
      readTime: 7
    },
    {
      topic: "invest",
      topicLabel: "投资基础",
      title: "529 账户：给孩子存教育金的正确姿势",
      excerpt: "供款额度、州税抵扣、投资选项该怎么选？这篇文章从零开始梳理 529 账户的基本规则和常见误区。",
      date: "2026年3月",
      readTime: 6
    }
  ];

  var state = { filter: "all" };
  var tabsEl = document.getElementById("qy-tabs");
  var gridEl = document.getElementById("qy-grid");

  function renderTabs() {
    tabsEl.innerHTML = "";
    TOPICS.forEach(function (t) {
      var btn = document.createElement("button");
      btn.className = "qy-tab" + (t.id === state.filter ? " is-active" : "");
      btn.type = "button";
      btn.textContent = t.label;
      btn.addEventListener("click", function () {
        state.filter = t.id;
        renderTabs();
        renderGrid();
      });
      tabsEl.appendChild(btn);
    });
  }

  function renderGrid() {
    gridEl.innerHTML = "";
    var items = ARTICLES.filter(function (a) {
      return state.filter === "all" || a.topic === state.filter;
    });
    items.forEach(function (a) {
      var card = document.createElement("article");
      card.className = "qy-card";
      card.innerHTML =
        '<div class="qy-card__tag">' + a.topicLabel + "</div>" +
        '<h3 class="p-serif qy-card__title">' + a.title + "</h3>" +
        '<p class="qy-card__excerpt">' + a.excerpt + "</p>" +
        '<div class="qy-card__meta"><span>' + a.date + "</span><span>&#183;</span><span>阅读 " + a.readTime + " 分钟</span></div>";
      gridEl.appendChild(card);
    });
  }

  renderTabs();
  renderGrid();
})();
