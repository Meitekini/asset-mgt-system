"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  Search,
  Filter,
  Plus,
  FileText,
  TrendingUp,
  AlertCircle,
} from "lucide-react"

// Mock data for compliance
const complianceStats = {
  totalPolicies: 24,
  compliantAssets: 1847,
  violations: 23,
  pendingRemediation: 8,
  complianceScore: 94,
}

const policies = [
  {
    id: 1,
    name: "Software License Compliance",
    category: "Licensing",
    status: "active",
    compliance: 96,
    violations: 3,
    lastAudit: "2024-01-15",
    description: "Ensures all software installations have valid licenses",
  },
  {
    id: 2,
    name: "Security Patch Management",
    category: "Security",
    status: "active",
    compliance: 89,
    violations: 12,
    lastAudit: "2024-01-14",
    description: "Requires critical security patches within 30 days",
  },
  {
    id: 3,
    name: "Hardware Lifecycle Policy",
    category: "Asset Management",
    status: "active",
    compliance: 98,
    violations: 2,
    lastAudit: "2024-01-13",
    description: "Manages hardware refresh cycles and end-of-life procedures",
  },
  {
    id: 4,
    name: "Data Retention Policy",
    category: "Data Governance",
    status: "active",
    compliance: 92,
    violations: 6,
    lastAudit: "2024-01-12",
    description: "Defines data retention periods and disposal procedures",
  },
]

const violations = [
  {
    id: 1,
    policy: "Software License Compliance",
    asset: "DEV-LAPTOP-045",
    severity: "high",
    description: "Unlicensed Adobe Creative Suite installation detected",
    detected: "2024-01-16",
    status: "open",
    assignee: "John Smith",
  },
  {
    id: 2,
    policy: "Security Patch Management",
    asset: "SRV-WEB-001",
    severity: "critical",
    description: "Critical security patch missing for 45 days",
    detected: "2024-01-15",
    status: "in-progress",
    assignee: "Sarah Johnson",
  },
  {
    id: 3,
    policy: "Hardware Lifecycle Policy",
    asset: "WKS-FINANCE-012",
    severity: "medium",
    description: "Hardware exceeds 5-year lifecycle policy",
    detected: "2024-01-14",
    status: "open",
    assignee: "Mike Davis",
  },
  {
    id: 4,
    policy: "Data Retention Policy",
    asset: "DB-ARCHIVE-003",
    severity: "low",
    description: "Data retention period exceeded by 30 days",
    detected: "2024-01-13",
    status: "resolved",
    assignee: "Lisa Chen",
  },
]

const auditLogs = [
  {
    id: 1,
    timestamp: "2024-01-16 14:30:00",
    user: "System",
    action: "Policy Violation Detected",
    details: "Unlicensed software found on DEV-LAPTOP-045",
    severity: "high",
  },
  {
    id: 2,
    timestamp: "2024-01-16 10:15:00",
    user: "Sarah Johnson",
    action: "Remediation Started",
    details: "Security patch deployment initiated for SRV-WEB-001",
    severity: "medium",
  },
  {
    id: 3,
    timestamp: "2024-01-15 16:45:00",
    user: "System",
    action: "Compliance Scan Completed",
    details: "Weekly compliance scan finished - 23 violations found",
    severity: "low",
  },
  {
    id: 4,
    timestamp: "2024-01-15 09:20:00",
    user: "Lisa Chen",
    action: "Violation Resolved",
    details: "Data retention violation resolved for DB-ARCHIVE-003",
    severity: "low",
  },
]

export default function CompliancePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSeverity, setSelectedSeverity] = useState("all")
  const [isAddPolicyOpen, setIsAddPolicyOpen] = useState(false)

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-100 text-red-800 border-red-200"
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-red-100 text-red-800 border-red-200"
      case "in-progress":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "resolved":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const filteredViolations = violations.filter((violation) => {
    const matchesSearch =
      violation.policy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      violation.asset.toLowerCase().includes(searchTerm.toLowerCase()) ||
      violation.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSeverity = selectedSeverity === "all" || violation.severity === selectedSeverity
    return matchesSearch && matchesSeverity
  })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Compliance Management</h1>
          <p className="text-gray-600 mt-2">Monitor policy compliance and manage violations</p>
        </div>
        <Dialog open={isAddPolicyOpen} onOpenChange={setIsAddPolicyOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Policy
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Policy</DialogTitle>
              <DialogDescription>Create a new compliance policy for your organization</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="policy-name">Policy Name</Label>
                <Input id="policy-name" placeholder="Enter policy name" />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="licensing">Licensing</SelectItem>
                    <SelectItem value="security">Security</SelectItem>
                    <SelectItem value="asset-management">Asset Management</SelectItem>
                    <SelectItem value="data-governance">Data Governance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Enter policy description" />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsAddPolicyOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsAddPolicyOpen(false)}>Create Policy</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{complianceStats.complianceScore}%</div>
            <p className="text-xs text-muted-foreground">+2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Policies</CardTitle>
            <Shield className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{complianceStats.totalPolicies}</div>
            <p className="text-xs text-muted-foreground">Active policies</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliant Assets</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{complianceStats.compliantAssets.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Meeting all policies</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Violations</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{complianceStats.violations}</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Remediation</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{complianceStats.pendingRemediation}</div>
            <p className="text-xs text-muted-foreground">In progress</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="violations" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="violations">Violations</TabsTrigger>
          <TabsTrigger value="policies">Policies</TabsTrigger>
          <TabsTrigger value="audit">Audit Log</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        {/* Violations Tab */}
        <TabsContent value="violations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Policy Violations</CardTitle>
              <CardDescription>Active violations requiring attention</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Search and Filters */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search violations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
                  <SelectTrigger className="w-full sm:w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Severities</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Violations Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Policy</th>
                      <th className="text-left py-3 px-4 font-medium">Asset</th>
                      <th className="text-left py-3 px-4 font-medium">Severity</th>
                      <th className="text-left py-3 px-4 font-medium">Status</th>
                      <th className="text-left py-3 px-4 font-medium">Assignee</th>
                      <th className="text-left py-3 px-4 font-medium">Detected</th>
                      <th className="text-left py-3 px-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredViolations.map((violation) => (
                      <tr key={violation.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div>
                            <div className="font-medium">{violation.policy}</div>
                            <div className="text-sm text-gray-500">{violation.description}</div>
                          </div>
                        </td>
                        <td className="py-3 px-4 font-mono text-sm">{violation.asset}</td>
                        <td className="py-3 px-4">
                          <Badge className={getSeverityColor(violation.severity)}>{violation.severity}</Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Badge className={getStatusColor(violation.status)}>{violation.status}</Badge>
                        </td>
                        <td className="py-3 px-4">{violation.assignee}</td>
                        <td className="py-3 px-4 text-sm text-gray-500">{violation.detected}</td>
                        <td className="py-3 px-4">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Policies Tab */}
        <TabsContent value="policies" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Policies</CardTitle>
              <CardDescription>Manage organizational compliance policies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {policies.map((policy) => (
                  <div key={policy.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{policy.name}</h3>
                        <p className="text-sm text-gray-600">{policy.description}</p>
                      </div>
                      <Badge variant="outline">{policy.category}</Badge>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-4">
                        <div className="text-sm">
                          <span className="text-gray-500">Compliance: </span>
                          <span className="font-medium text-green-600">{policy.compliance}%</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">Violations: </span>
                          <span className="font-medium text-red-600">{policy.violations}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">Last Audit: </span>
                          <span className="font-medium">{policy.lastAudit}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          Run Audit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Audit Log Tab */}
        <TabsContent value="audit" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Audit Log</CardTitle>
              <CardDescription>Track all compliance-related activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {auditLogs.map((log) => (
                  <div key={log.id} className="flex items-start gap-4 p-4 border rounded-lg">
                    <div className="flex-shrink-0">
                      {log.severity === "high" && <AlertCircle className="h-5 w-5 text-red-500" />}
                      {log.severity === "medium" && <AlertTriangle className="h-5 w-5 text-yellow-500" />}
                      {log.severity === "low" && <CheckCircle className="h-5 w-5 text-green-500" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{log.action}</h4>
                          <p className="text-sm text-gray-600">{log.details}</p>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <div>{log.user}</div>
                          <div>{log.timestamp}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Reports</CardTitle>
              <CardDescription>Generate and view compliance reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Monthly Compliance Report</h3>
                      <p className="text-sm text-gray-600">Comprehensive monthly overview</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Generate Report
                  </Button>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="font-semibold">Policy Compliance Summary</h3>
                      <p className="text-sm text-gray-600">Policy-by-policy breakdown</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Generate Report
                  </Button>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                    <div>
                      <h3 className="font-semibold">Violations Report</h3>
                      <p className="text-sm text-gray-600">Detailed violation analysis</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Generate Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
