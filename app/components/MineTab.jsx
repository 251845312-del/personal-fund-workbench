'use client';

import { ChevronRight } from 'lucide-react';

export default function MineTab({
  visible = true,
  onMyEarnings
}) {
  return (
    <div className="mine-tab" style={{ display: visible ? undefined : 'none' }} aria-hidden={!visible || undefined}>
      <section className="mine-profile-card glass" aria-label="本地工作台">
        <div className="mine-profile-row">
          <div className="mine-profile-avatar">
            <span className="mine-profile-avatar-fallback">基</span>
          </div>
          <div className="mine-profile-text">
            <div className="mine-profile-title">个人基金工作台</div>
            <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>
              当前数据保存在本机浏览器
            </div>
          </div>
        </div>
      </section>

      <ul className="mine-menu-list" role="list">
        <li>
          <button type="button" className="mine-menu-row glass" onClick={onMyEarnings}>
            <span className="mine-menu-label">我的收益</span>
            <ChevronRight className="mine-menu-chevron" aria-hidden strokeWidth={2} />
          </button>
        </li>
      </ul>
    </div>
  );
}
