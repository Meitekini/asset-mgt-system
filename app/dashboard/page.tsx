"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Monitor,
  Shield,
  Users,
  AlertTriangle,
  TrendingUp,
  Activity,
  Plus,
  Eye,
  Download,
  RefreshCw,
  DollarSign,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [refreshing, setRefreshing] = useState(false)

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">Complete overview of your IT asset management system</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleRefresh}
              disabled={refreshing}
              className="flex items-center gap-2 bg-transparent"
            >
              <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
              <Monitor className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+12%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">License Compliance</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.2%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+2.1%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">342</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-blue-600">+8</span> new this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Cost</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$24,580</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-red-600">+5.2%</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Quick Actions
            </CardTitle>
            <CardDescription>Frequently used actions and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/hardware">
                <Button variant="outline" className="w-full h-20 flex flex-col gap-2 bg-transparent">
                  <Plus className="h-5 w-5" />
                  Add Hardware
                </Button>
              </Link>
              <Link href="/software">
                <Button variant="outline" className="w-full h-20 flex flex-col gap-2 bg-transparent">
                  <Shield className="h-5 w-5" />
                  Manage Licenses
                </Button>
              </Link>
              <Link href="/users">
                <Button variant="outline" className="w-full h-20 flex flex-col gap-2 bg-transparent">
                  <Users className="h-5 w-5" />
                  User Management
                </Button>
              </Link>
              <Link href="/compliance">
                <Button variant="outline" className="w-full h-20 flex flex-col gap-2 bg-transparent">
                  <Eye className="h-5 w-5" />
                  View Reports
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* System Health */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    System Health
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Hardware Status</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>License Compliance</span>
                      <span>94%</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>User Activity</span>
                      <span>87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Security Score</span>
                      <span>96%</span>
                    </div>
                    <Progress value={96} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Recent Assets */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Monitor className="h-5 w-5" />
                    Recent Assets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Dell OptiPlex 7090", type: "Desktop", status: "Active", date: "2 hours ago" },
                      { name: 'MacBook Pro 16"', type: "Laptop", status: "Assigned", date: "4 hours ago" },
                      { name: "HP LaserJet Pro", type: "Printer", status: "Maintenance", date: "1 day ago" },
                      { name: "Cisco Switch 2960", type: "Network", status: "Active", date: "2 days ago" },
                    ].map((asset, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{asset.name}</p>
                          <p className="text-sm text-muted-foreground">{asset.type}</p>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant={
                              asset.status === "Active"
                                ? "default"
                                : asset.status === "Assigned"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {asset.status}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">{asset.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  System Alerts
                </CardTitle>
                <CardDescription>Critical issues requiring immediate attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      type: "Critical",
                      message: "5 licenses expiring within 7 days",
                      time: "2 minutes ago",
                      icon: XCircle,
                    },
                    {
                      type: "Warning",
                      message: "Hardware maintenance overdue for 3 devices",
                      time: "1 hour ago",
                      icon: Clock,
                    },
                    {
                      type: "Info",
                      message: "New compliance policy update available",
                      time: "3 hours ago",
                      icon: CheckCircle,
                    },
                    {
                      type: "Warning",
                      message: "Unusual login activity detected",
                      time: "5 hours ago",
                      icon: AlertTriangle,
                    },
                  ].map((alert, index) => {
                    const Icon = alert.icon
                    return (
                      <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                        <Icon
                          className={`h-5 w-5 mt-0.5 ${
                            alert.type === "Critical"
                              ? "text-red-500"
                              : alert.type === "Warning"
                                ? "text-yellow-500"
                                : "text-blue-500"
                          }`}
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Badge
                              variant={
                                alert.type === "Critical"
                                  ? "destructive"
                                  : alert.type === "Warning"
                                    ? "secondary"
                                    : "default"
                              }
                            >
                              {alert.type}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{alert.time}</span>
                          </div>
                          <p className="mt-1">{alert.message}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
                <CardDescription>Latest system activities and user actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      user: "John Smith",
                      action: "Added new hardware asset",
                      item: "Dell OptiPlex 7090",
                      time: "2 minutes ago",
                    },
                    {
                      user: "Sarah Johnson",
                      action: "Updated license assignment",
                      item: "Microsoft Office 365",
                      time: "15 minutes ago",
                    },
                    {
                      user: "Mike Davis",
                      action: "Resolved compliance violation",
                      item: "Adobe Creative Suite",
                      time: "1 hour ago",
                    },
                    { user: "Lisa Chen", action: "Created new user account", item: "Tom Wilson", time: "2 hours ago" },
                    {
                      user: "System",
                      action: "Automated backup completed",
                      item: "Database backup",
                      time: "3 hours ago",
                    },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Activity className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">{activity.user}</span> {activity.action}
                        </p>
                        <p className="text-sm text-muted-foreground">{activity.item}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Asset Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">This Month</span>
                      <span className="text-2xl font-bold">+47</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-blue-600">23</p>
                        <p className="text-xs text-muted-foreground">Hardware</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-600">15</p>
                        <p className="text-xs text-muted-foreground">Software</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-purple-600">9</p>
                        <p className="text-xs text-muted-foreground">Users</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Cost Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Monthly Spend</span>
                      <span className="text-2xl font-bold">$24,580</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Hardware</span>
                        <span>$12,340 (50%)</span>
                      </div>
                      <Progress value={50} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>Software Licenses</span>
                        <span>$8,920 (36%)</span>
                      </div>
                      <Progress value={36} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>Maintenance</span>
                        <span>$3,320 (14%)</span>
                      </div>
                      <Progress value={14} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
