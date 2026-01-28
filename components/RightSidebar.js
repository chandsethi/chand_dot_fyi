"use client";
export default function RightSidebar() {
  return (
    <aside className="right-sidebar">
      <div className="sidebar-container">
        <section className="whats-happening">
          <div className="header">
            <div className="title-group">
              <h2>What's happening</h2>
              <span className="subtitle">January 2026</span>
            </div>
            <div className="nav-arrows">
              <button aria-label="Previous month" className="arrow-btn" disabled>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><g><path d="M14.582 2.25L5.832 11h16.918v2H5.832l8.75 8.75-1.414 1.414L1.252 11.25 1.25 11l.002-.25 11.916-11.914 1.414 1.414z"></path></g></svg>
              </button>
              <button aria-label="Next month" className="arrow-btn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><g><path d="M9.418 2.25l1.414-1.414L22.748 12.75l.002.25-.002.25L10.832 25.164l-1.414-1.414 8.75-8.75H1.25v-2h16.918l-8.75-8.75z"></path></g></svg>
              </button>
            </div>
          </div>

          <div className="content">
            <div className="item">
              <p>Working on a new side project</p>
            </div>
            <div className="item">
              <p>Reading 'Designing Data-Intensive Apps'</p>
            </div>
            <div className="item">
              <p>Training for a half marathon</p>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .right-sidebar {
          width: var(--right-sidebar-width);
          padding-left: 32px;
          padding-right: 20px;
          padding-top: 12px;
        }
        .sidebar-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .whats-happening {
          background-color: #f7f9f9;
          border-radius: 16px;
          overflow: hidden;
        }
        .header {
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .title-group h2 {
          font-size: 20px;
          font-weight: 800;
          line-height: 24px;
        }
        .subtitle {
          font-size: 13px;
          color: var(--secondary-text);
          font-weight: 400;
        }
        .nav-arrows {
          display: flex;
          gap: 8px;
        }
        .arrow-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s;
        }
        .arrow-btn:hover:not(:disabled) {
          background-color: rgba(15, 20, 25, 0.1);
        }
        .arrow-btn:disabled {
          opacity: 0.5;
          cursor: default;
        }
        .content {
          margin-top: 4px;
        }
        .item {
          padding: 12px 16px;
          transition: background-color 0.2s;
          cursor: pointer;
        }
        .item:hover {
          background-color: rgba(0, 0, 0, 0.03);
        }
        .item p {
          font-size: 15px;
          font-weight: 600;
          line-height: 20px;
        }

        @media (max-width: 1000px) {
          .right-sidebar {
            width: 300px;
          }
        }

        @media (max-width: 700px) {
          .right-sidebar {
            display: none;
          }
        }
      `}</style>
    </aside>
  );
}
