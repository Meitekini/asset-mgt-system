"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
import { Search, Plus, FileText, AlertTriangle, CheckCircle, Clock, Download, Edit, Trash2 } from "lucide-react"

// Mock data for licenses
const mockLicenses = [
  {
    id: 1,
    name: "Microsoft Office 365",
    vendor: "Microsoft",
    type: "Subscription",
    totalLicenses: 100,
    usedLicenses: 87,
    availableLicenses: 13,
    expiryDate: "2024-12-31",
    cost: 1200,
    status: "active",
    compliance: "compliant",
  },
  {
    id: 2,
    name: "Adobe Creative Suite",
    vendor: "Adobe",
    type: "Subscription",
    totalLicenses: 25,
    usedLicenses: 25,
    availableLicenses: 0,
    expiryDate: "2024-06-15",
    cost: 2500,
    status: "active",
    compliance: "at-risk",
  },
  {
    id: 3,
    name: "Windows Server 2022",
    vendor: "Microsoft",
    type: "Perpetual",
    totalLicenses: 10,
    usedLicenses: 8,
    availableLicenses: 2,
    expiryDate: "N/A",
    cost: 5000,
    status: "active",
    compliance: "compliant",
  },
  {
    id: 4,
    name: "Slack Business+",
    vendor: "Slack",
    type: "Subscription",
    totalLicenses: 150,
    usedLicenses: 142,
    availableLicenses: 8,
    expiryDate: "2024-03-20",
    cost: 1800,
    status: "expiring",
    compliance: "non-compliant",
  },
]

export default function SoftwarePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  // Calculate summary statistics
  const totalLicenses = mockLicenses.reduce((sum, license) => sum + license.totalLicenses, 0)
  const totalUsed = mockLicenses.reduce((sum, license) => sum + license.usedLicenses, 0)
  const totalCost = mockLicenses.reduce((sum, license) => sum + license.cost, 0)
  const expiringLicenses = mockLicenses.filter((license) => license.status === "expiring").length

  // Filter licenses based on search and status
  const filteredLicenses = mockLicenses.filter((license) => {
    const matchesSearch =
      license.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      license.vendor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || license.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge variant="default" className="bg-green-100 text-green-800">
            Active
          </Badge>
        )
      case "expiring":
        return <Badge variant="destructive">Expiring Soon</Badge>
      case "expired":
        return <Badge variant="secondary">Expired</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getComplianceBadge = (compliance: string) => {
    switch (compliance) {
      case "compliant":
        return (
          <Badge variant="default" className="bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Compliant
          </Badge>
        )
      case "at-risk":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            <Clock className="w-3 h-3 mr-1" />
            At Risk
          </Badge>
        )
      case "non-compliant":
        return (
          <Badge variant="destructive">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Non-Compliant
          </Badge>
        )
      default:
        return <Badge variant="outline">{compliance}</Badge>
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Software License Management</h1>
          <p className="text-gray-600 mt-2">Track and manage your software licenses and compliance</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add License
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New License</DialogTitle>
              <DialogDescription>Add a new software license to your inventory</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="software-name">Software Name</Label>
                <Input id="software-name" placeholder="e.g., Microsoft Office 365" />
              </div>
              <div>
                <Label htmlFor="vendor">Vendor</Label>
                <Input id="vendor" placeholder="e.g., Microsoft" />
              </div>
              <div>
                <Label htmlFor="license-type">License Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select license type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="subscription">Subscription</SelectItem>
                    <SelectItem value="perpetual">Perpetual</SelectItem>
                    <SelectItem value="concurrent">Concurrent</SelectItem>
                    <SelectItem value="named-user">Named User</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="total-licenses">Total Licenses</Label>
                  <Input id="total-licenses" type="number" placeholder="100" />
                </div>
                <div>
                  <Label htmlFor="cost">Annual Cost ($)</Label>
                  <Input id="cost" type="number" placeholder="1200" />
                </div>
              </div>
              <div>
                <Label htmlFor="expiry-date">Expiry Date</Label>
                <Input id="expiry-date" type="date" />
              </div>
              <div>
                <Label htmlFor="notes">Notes</Label>
                <Textarea id="notes" placeholder="Additional notes about this license..." />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsAddDialogOpen(false)}>Add License</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Licenses</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalLicenses}</div>
            <p className="text-xs text-muted-foreground">{totalUsed} in use</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">License Utilization</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round((totalUsed / totalLicenses) * 100)}%</div>
            <p className="text-xs text-muted-foreground">{totalLicenses - totalUsed} available</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Annual Cost</CardTitle>
            <div className="text-green-600">$</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalCost.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Total licensing cost</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expiring Soon</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{expiringLicenses}</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search licenses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="expiring">Expiring Soon</SelectItem>
            <SelectItem value="expired">Expired</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
          <Download className="w-4 h-4" />
          Export
        </Button>
      </div>

      {/* License Table */}
      <Card>
        <CardHeader>
          <CardTitle>License Inventory</CardTitle>
          <CardDescription>Manage your software licenses and track compliance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Software</th>
                  <th className="text-left py-3 px-4 font-medium">Type</th>
                  <th className="text-left py-3 px-4 font-medium">Usage</th>
                  <th className="text-left py-3 px-4 font-medium">Expiry</th>
                  <th className="text-left py-3 px-4 font-medium">Cost</th>
                  <th className="text-left py-3 px-4 font-medium">Status</th>
                  <th className="text-left py-3 px-4 font-medium">Compliance</th>
                  <th className="text-left py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredLicenses.map((license) => (
                  <tr key={license.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium">{license.name}</div>
                        <div className="text-sm text-gray-500">{license.vendor}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant="outline">{license.type}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="text-sm">
                          {license.usedLicenses}/{license.totalLicenses}
                        </div>
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${(license.usedLicenses / license.totalLicenses) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{license.expiryDate}</td>
                    <td className="py-3 px-4 text-sm">${license.cost.toLocaleString()}</td>
                    <td className="py-3 px-4">{getStatusBadge(license.status)}</td>
                    <td className="py-3 px-4">{getComplianceBadge(license.compliance)}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
