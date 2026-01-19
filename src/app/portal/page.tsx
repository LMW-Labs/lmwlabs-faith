'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  FileText,
  CreditCard,
  Settings,
  LogOut,
  ArrowRight,
  CheckCircle,
  Clock,
  AlertCircle,
  Download,
  DollarSign,
  FolderOpen,
  ExternalLink
} from 'lucide-react'
import { supabase } from '@/lib/supabase'

interface UserProfile {
  id: string
  email: string
}

interface ClientProfile {
  id: string
  business_name: string
  logo_url: string | null
  welcome_message: string | null
}

interface Agreement {
  id: string
  agreement_number: string
  agreement_date: string
  client_business_name: string
  total_due_at_signing: number
  status: string
  created_at: string
}

interface Project {
  id: string
  name: string
  description: string
  status: string
  launch_date: string
  domain: string
  created_at: string
}

interface Invoice {
  id: string
  invoice_number: string
  description: string
  amount: number
  status: string
  due_date: string
  paid_date: string
  created_at: string
}

interface Document {
  id: string
  name: string
  description: string
  file_url: string
  file_type: string
  created_at: string
}

export default function PortalPage() {
  const router = useRouter()
  const [user, setUser] = useState<UserProfile | null>(null)
  const [clientProfile, setClientProfile] = useState<ClientProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [agreements, setAgreements] = useState<Agreement[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [documents, setDocuments] = useState<Document[]>([])

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession()

    if (!session) {
      router.push('/login')
      return
    }

    setUser({
      id: session.user.id,
      email: session.user.email || ''
    })

    // Fetch user's data
    await fetchUserData(session.user.email || '')
    setLoading(false)
  }

  const fetchUserData = async (email: string) => {
    // Fetch client profile for customization
    const { data: clientData } = await supabase
      .from('clients')
      .select('id, business_name, logo_url, welcome_message')
      .eq('email', email)
      .single()

    if (clientData) setClientProfile(clientData)

    // Fetch agreements for this user
    const { data: agreementsData } = await supabase
      .from('agreements')
      .select('*')
      .eq('client_email', email)
      .order('created_at', { ascending: false })

    if (agreementsData) setAgreements(agreementsData)

    // Fetch projects for this user
    const { data: projectsData } = await supabase
      .from('projects')
      .select('*')
      .eq('client_email', email)
      .order('created_at', { ascending: false })

    if (projectsData) setProjects(projectsData)

    // Fetch invoices for this user
    const { data: invoicesData } = await supabase
      .from('invoices')
      .select('*')
      .eq('client_email', email)
      .order('created_at', { ascending: false })

    if (invoicesData) setInvoices(invoicesData)

    // Fetch documents for this user
    const { data: documentsData } = await supabase
      .from('documents')
      .select('*')
      .eq('client_email', email)
      .order('created_at', { ascending: false })

    if (documentsData) setDocuments(documentsData)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount || 0)
  }

  const getStatusIcon = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'completed':
      case 'signed':
      case 'paid':
        return <CheckCircle className="w-4 h-4 text-green-400" />
      case 'in_progress':
      case 'active':
      case 'pending':
        return <Clock className="w-4 h-4 text-blue-400" />
      case 'overdue':
        return <AlertCircle className="w-4 h-4 text-red-400" />
      default:
        return <AlertCircle className="w-4 h-4 text-amber-400" />
    }
  }

  const getInvoiceStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'paid':
        return 'bg-green-500/20 text-green-400'
      case 'pending':
        return 'bg-amber-500/20 text-amber-400'
      case 'overdue':
        return 'bg-red-500/20 text-red-400'
      default:
        return 'bg-gray-500/20 text-gray-400'
    }
  }

  // Get active project name for personalized greeting
  const activeProject = projects.find(p => p.status === 'in_progress' || p.status === 'active')

  // Calculate invoice stats
  const pendingInvoices = invoices.filter(i => i.status === 'pending' || i.status === 'overdue')
  const totalPending = pendingInvoices.reduce((sum, i) => sum + (i.amount || 0), 0)

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading your portal...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              {clientProfile?.logo_url ? (
                <img src={clientProfile.logo_url} alt="Logo" className="w-10 h-10 object-contain rounded-lg" />
              ) : (
                <Image src="/images/logo.png" alt="LMW Labs" width={40} height={40} className="w-10 h-10 object-contain" />
              )}
              <span className="font-display font-bold text-xl text-white">
                {clientProfile?.business_name || 'Client Portal'}
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <div className="text-right hidden md:block">
                <p className="text-white text-sm font-medium">{user?.email}</p>
                <p className="text-gray-400 text-xs">Client Account</p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden md:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Banner - Personalized */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/20 p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {clientProfile?.welcome_message || (
              activeProject
                ? `Welcome back! Here's the latest on ${activeProject.name}`
                : 'Welcome to Your Portal'
            )}
          </h1>
          <p className="text-gray-300">
            View your agreements, track projects, manage invoices, and access your documents.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          <div className="bg-gray-900 rounded-xl p-4 md:p-6 border border-gray-800">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <FileText className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-gray-400 text-xs md:text-sm">Agreements</p>
                <p className="text-xl md:text-2xl font-bold text-white">{agreements.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-4 md:p-6 border border-gray-800">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
              </div>
              <div>
                <p className="text-gray-400 text-xs md:text-sm">Active Projects</p>
                <p className="text-xl md:text-2xl font-bold text-white">
                  {projects.filter(p => p.status === 'in_progress' || p.status === 'active').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-4 md:p-6 border border-gray-800">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
              </div>
              <div>
                <p className="text-gray-400 text-xs md:text-sm">Due</p>
                <p className="text-xl md:text-2xl font-bold text-white">{formatCurrency(totalPending)}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-4 md:p-6 border border-gray-800">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <FolderOpen className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-gray-400 text-xs md:text-sm">Documents</p>
                <p className="text-xl md:text-2xl font-bold text-white">{documents.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Agreements Section */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
            <div className="p-6 border-b border-gray-800 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Your Agreements</h2>
              <FileText className="w-5 h-5 text-gray-400" />
            </div>
            <div className="p-6">
              {agreements.length > 0 ? (
                <div className="space-y-4">
                  {agreements.map((agreement) => (
                    <div key={agreement.id} className="p-4 bg-gray-800 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-white font-medium">{agreement.agreement_number}</p>
                          <p className="text-gray-400 text-sm">{formatDate(agreement.agreement_date)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(agreement.status)}
                          <span className="text-sm text-gray-300 capitalize">{agreement.status || 'pending'}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-500 text-sm">{agreement.client_business_name}</p>
                        <p className="text-white font-semibold">{formatCurrency(agreement.total_due_at_signing)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <FileText className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-400">No agreements yet</p>
                  <p className="text-gray-500 text-sm mt-1">Your signed agreements will appear here</p>
                </div>
              )}
            </div>
          </div>

          {/* Projects Section */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
            <div className="p-6 border-b border-gray-800 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Your Projects</h2>
              <Settings className="w-5 h-5 text-gray-400" />
            </div>
            <div className="p-6">
              {projects.length > 0 ? (
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="p-4 bg-gray-800 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-white font-medium">{project.name}</p>
                          <p className="text-gray-400 text-sm line-clamp-1">{project.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(project.status)}
                          <span className="text-sm text-gray-300 capitalize">{project.status?.replace('_', ' ') || 'pending'}</span>
                        </div>
                      </div>
                      {project.launch_date && (
                        <p className="text-gray-500 text-sm">Launched: {formatDate(project.launch_date)}</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Settings className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-400">No projects yet</p>
                  <p className="text-gray-500 text-sm mt-1">Your active projects will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Invoices & Documents Row */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Invoices Section */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
            <div className="p-6 border-b border-gray-800 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Invoices</h2>
              <CreditCard className="w-5 h-5 text-gray-400" />
            </div>
            <div className="p-6">
              {invoices.length > 0 ? (
                <div className="space-y-4">
                  {invoices.map((invoice) => (
                    <div key={invoice.id} className="p-4 bg-gray-800 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-white font-medium">{invoice.invoice_number}</p>
                          <p className="text-gray-400 text-sm">{invoice.description}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${getInvoiceStatusColor(invoice.status)}`}>
                          {invoice.status || 'pending'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-500 text-sm">
                          {invoice.status === 'paid'
                            ? `Paid: ${formatDate(invoice.paid_date)}`
                            : `Due: ${formatDate(invoice.due_date)}`
                          }
                        </p>
                        <p className="text-white font-semibold">{formatCurrency(invoice.amount)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <CreditCard className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-400">No invoices yet</p>
                  <p className="text-gray-500 text-sm mt-1">Your invoices will appear here</p>
                </div>
              )}
            </div>
          </div>

          {/* Documents Section */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
            <div className="p-6 border-b border-gray-800 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Documents</h2>
              <FolderOpen className="w-5 h-5 text-gray-400" />
            </div>
            <div className="p-6">
              {documents.length > 0 ? (
                <div className="space-y-3">
                  {documents.map((doc) => (
                    <a
                      key={doc.id}
                      href={doc.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <Download className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-white font-medium group-hover:text-blue-400 transition-colors">{doc.name}</p>
                          <p className="text-gray-500 text-sm">{doc.file_type || 'Document'} &bull; {formatDate(doc.created_at)}</p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <FolderOpen className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-400">No documents yet</p>
                  <p className="text-gray-500 text-sm mt-1">Contracts and files will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-semibold mb-1">Need Help?</h3>
              <p className="text-gray-400 text-sm">Have questions about your project or account? We're here to help.</p>
            </div>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Contact Support
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
