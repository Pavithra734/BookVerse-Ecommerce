import { useState } from "react";

import {
  LayoutDashboard,
  BookOpen,
  Tags,
  Users,
  Package,
  ArrowRight,
  User,
  UserCircle,
} from "lucide-react";

import { Link, Navigate, useNavigate } from "react-router-dom";

import { useApp } from "../context/AppContext";

import Dashboard from "./Dashboard";
import AdminContent from "./AdminContent";
import AdminProfile from "./AdminProfile";

function Admin() {
  const { user } = useApp();

  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Dashboard");

  if (!user || user?.role !== "admin") {
    return <Navigate to="/login" />;
  }

  const tabs = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Books",
      icon: BookOpen,
    },
    {
      name: "Categories",
      icon: Tags,
    },
    {
      name: "Users",
      icon: Users,
    },
    {
      name: "Orders",
      icon: Package,
    },
    {
      name: "Profile",
      icon: UserCircle,
    },
  ];

  return (
    <div className="admin">

      <aside>

        <Link to="/" className="logo">
          <span>
            <BookOpen />
          </span>

          BookVerse
        </Link>

        <small>ADMIN PANEL</small>

        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <button
              key={tab.name}
              className={
                activeTab === tab.name ? "active" : ""
              }
              onClick={() => setActiveTab(tab.name)}
            >
              <Icon />
              {tab.name}
            </button>
          );
        })}

        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <ArrowRight />
          View Store
        </button>

      </aside>


      <main className="admin-main">

        <div className="admin-top">

          <div>
            <span className="eyebrow">
              ADMIN OVERVIEW
            </span>

            <h1>{activeTab}</h1>
          </div>


          <button
            className="admin-user"
            onClick={() => setActiveTab("Profile")}
          >
            <User />

            {user?.name || "Admin"}
          </button>

        </div>


        {activeTab === "Dashboard" ? (

          <Dashboard />

        ) : activeTab === "Profile" ? (

          <AdminProfile
            onNavigate={setActiveTab}
          />

        ) : (

          <AdminContent
            tab={activeTab}
          />

        )}

      </main>

    </div>
  );
}

export default Admin;