import {
  User,
  Mail,
  ShieldCheck,
  BookOpen,
  Users,
  Package,
  Settings,
  ArrowRight,
} from "lucide-react";

import { useApp } from "../context/AppContext";

function AdminProfile({ onNavigate }) {
  const { user } = useApp();

  return (
    <div className="admin-profile">

      {/* Admin Welcome Card */}
      <div className="profile-welcome">
        <div className="profile-avatar">
          <User />
        </div>

        <div className="profile-welcome-text">
          <span className="profile-eyebrow">ADMIN ACCOUNT</span>

          <h2>
            Welcome, {user?.name || "Admin"}
          </h2>

          <p>
            Manage your BookVerse store and account settings.
          </p>
        </div>

        <div className="admin-role">
          <ShieldCheck />
          Administrator
        </div>
      </div>


      {/* Statistics */}
      <div className="profile-stats">

        <div className="profile-stat">
          <div className="profile-stat-icon">
            <BookOpen />
          </div>

          <div>
            <h3>1,286</h3>
            <p>Books Available</p>
          </div>
        </div>

        <div className="profile-stat">
          <div className="profile-stat-icon">
            <Users />
          </div>

          <div>
            <h3>1,842</h3>
            <p>Registered Users</p>
          </div>
        </div>

        <div className="profile-stat">
          <div className="profile-stat-icon">
            <Package />
          </div>

          <div>
            <h3>248</h3>
            <p>Total Orders</p>
          </div>
        </div>

      </div>


      {/* Main Profile Sections */}
      <div className="profile-content">

        {/* Account Details */}
        <div className="profile-card">

          <div className="profile-card-header">
            <div>
              <span>PERSONAL INFORMATION</span>
              <h3>Account Details</h3>
            </div>

            <User />
          </div>


          <div className="account-detail">
            <div className="detail-icon">
              <User />
            </div>

            <div className="detail-text">
              <span>Full Name</span>
              <strong>
                {user?.name || "Admin"}
              </strong>
            </div>
          </div>


          <div className="account-detail">
            <div className="detail-icon">
              <Mail />
            </div>

            <div className="detail-text">
              <span>Email Address</span>
              <strong>
                {user?.email || "admin@bookverse.com"}
              </strong>
            </div>
          </div>


          <div className="account-detail">
            <div className="detail-icon">
              <ShieldCheck />
            </div>

            <div className="detail-text">
              <span>Account Type</span>
              <strong>Administrator</strong>
            </div>
          </div>

        </div>


        {/* Quick Access */}
        <div className="profile-card">

          <div className="profile-card-header">
            <div>
              <span>QUICK ACCESS</span>
              <h3>Admin Controls</h3>
            </div>

            <Settings />
          </div>


          {/* Manage Books */}
          <button
            className="quick-access-button"
            onClick={() => onNavigate("Books")}
          >
            <div className="quick-icon">
              <BookOpen />
            </div>

            <div className="quick-text">
              <strong>Manage Books</strong>
              <span>Add, edit and remove books</span>
            </div>

            <ArrowRight className="quick-arrow" />
          </button>


          {/* Manage Users */}
          <button
            className="quick-access-button"
            onClick={() => onNavigate("Users")}
          >
            <div className="quick-icon">
              <Users />
            </div>

            <div className="quick-text">
              <strong>Manage Users</strong>
              <span>View and manage users</span>
            </div>

            <ArrowRight className="quick-arrow" />
          </button>


          {/* Manage Orders */}
          <button
            className="quick-access-button"
            onClick={() => onNavigate("Orders")}
          >
            <div className="quick-icon">
              <Package />
            </div>

            <div className="quick-text">
              <strong>Manage Orders</strong>
              <span>Review customer orders</span>
            </div>

            <ArrowRight className="quick-arrow" />
          </button>

        </div>

      </div>


      {/* Administrator Access */}
      <div className="administrator-access">

        <ShieldCheck />

        <div>
          <strong>Administrator Access</strong>

          <p>
            You have access to the BookVerse administration panel.
            This frontend project stores account data locally in your browser.
          </p>
        </div>

      </div>

    </div>
  );
}

export default AdminProfile;