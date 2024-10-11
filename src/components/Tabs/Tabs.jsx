export function Tabs({ tabs, activeTabId, onTabSelected }) {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const activeTabHandler = tabId => {
    if (tabId !== activeTabId) {
      onTabSelected(tabId);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={activeTab.id === tab.id && `is-active`}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => activeTabHandler(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
}
