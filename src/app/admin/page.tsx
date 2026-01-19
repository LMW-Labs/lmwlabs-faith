'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  Users,
  FileText,
  Mail,
  DollarSign,
  ArrowLeft,
  RefreshCw,
  Eye,
  LogOut,
  ShieldAlert,
  Send,
  Copy,
  Check,
  Plus,
  ExternalLink
} from 'lucide-react'
import { supabase } from '@/lib/supabase'

// Allowed admin emails
const ADMIN_EMAILS = [
  'admin@lmwlabs.faith',
  'awyrick@lmwlabs.faith',
  'info@lmwlabs.faith'
]

interface Agreement {
  id: string
  agreement_number: string
  agreement_date: string
  client_business_name: string
  client_email: string
  total_amount: number
  status: string
  created_at: string
}

interface Client {
  id: string
  business_name: string
  contact_name: string
  email: string
  phone: string
  created_at: string
}

interface Contact {
  id: string
  name: string
  email: string
  company: string
  tier_interest: string
  message: string
  source: string
  created_at: string
}

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'overview' | 'agreements' | 'clients' | 'contacts'>('overview')
  const [agreements, setAgreements] = useState<Agreement[]>([])
  const [clients, setClients] = useState<Client[]>([])
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState<Agreement | Client | Contact | null>(null)
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [authChecking, setAuthChecking] = useState(true)

  // Agreement modal state
  const [showAgreementModal, setShowAgreementModal] = useState(false)
  const [agreementClient, setAgreementClient] = useState<Client | null>(null)
  const [agreementTier, setAgreementTier] = useState('growth')
  const [agreementAmount, setAgreementAmount] = useState('')
  const [agreementMode, setAgreementMode] = useState<'quote' | 'agreement'>('quote')
  const [agreementDescription, setAgreementDescription] = useState('')
  const [agreementProjectUrl, setAgreementProjectUrl] = useState('')
  const [copiedLink, setCopiedLink] = useState(false)

  // Check if user is authorized admin
  useEffect(() => {
    checkAdminAuth()
  }, [])

  const checkAdminAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession()

    if (!session) {
      router.push('/login')
      return
    }

    const email = session.user.email || ''
    setUserEmail(email)

    if (ADMIN_EMAILS.includes(email.toLowerCase())) {
      setIsAuthorized(true)
      setAuthChecking(false)
    } else {
      setIsAuthorized(false)
      setAuthChecking(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const fetchData = async () => {
    setLoading(true)

    const [agreementsRes, clientsRes, contactsRes] = await Promise.all([
      supabase.from('agreements').select('*').order('created_at', { ascending: false }).limit(50),
      supabase.from('clients').select('*').order('created_at', { ascending: false }).limit(50),
      supabase.from('contacts').select('*').order('created_at', { ascending: false }).limit(50)
    ])

    if (agreementsRes.data) setAgreements(agreementsRes.data)
    if (clientsRes.data) setClients(clientsRes.data)
    if (contactsRes.data) setContacts(contactsRes.data)

    setLoading(false)
  }

  useEffect(() => {
    if (isAuthorized) {
      fetchData()
    }
  }, [isAuthorized])

  const formatDate = (dateString: string) => {
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

  const generateAgreementLink = (client: Client) => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://lmwlabs.faith'
    const params = new URLSearchParams({
      business: client.business_name || '',
      contact: client.contact_name || '',
      email: client.email || '',
      phone: client.phone || '',
      clientId: client.id || '',
      tier: agreementTier,
      mode: agreementMode,
      ...(agreementAmount && { amount: agreementAmount }),
      ...(agreementDescription && { description: agreementDescription }),
      ...(agreementProjectUrl && { projectUrl: agreementProjectUrl })
    })
    return `${baseUrl}/agreement?${params.toString()}`
  }

  const copyAgreementLink = async () => {
    if (!agreementClient) return
    const link = generateAgreementLink(agreementClient)
    await navigator.clipboard.writeText(link)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2000)
  }

  const openSendAgreementModal = (client: Client) => {
    setAgreementClient(client)
    setAgreementTier('growth')
    setAgreementAmount('')
    setAgreementMode('quote')
    setAgreementDescription('')
    setAgreementProjectUrl('')
    setCopiedLink(false)
    setShowAgreementModal(true)
  }

  // Loading state while checking auth
  if (authChecking) {
    return (
      <main className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Checking authorization...</p>
        </div>
      </main>
    )
  }

  // Unauthorized state
  if (!isAuthorized) {
    return (
      <main className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-6">
            <ShieldAlert className="w-8 h-8 text-red-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Access Denied</h1>
          <p className="text-gray-400 mb-6">
            You don't have permission to access the admin dashboard.
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Logged in as: {userEmail}
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              href="/portal"
              className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            >
              Go to Portal
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600/30 transition-colors"
            >
              Logout
            </button>
          </div>
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
            <div className="flex items-center gap-4">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm hidden md:block">{userEmail}</span>
              <button
                onClick={fetchData}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Agreements</p>
                <p className="text-2xl font-bold text-white">{agreements.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Clients</p>
                <p className="text-2xl font-bold text-white">{clients.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Contacts</p>
                <p className="text-2xl font-bold text-white">{contacts.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Total Revenue</p>
                <p className="text-2xl font-bold text-white">
                  {formatCurrency(agreements.reduce((sum, a) => sum + (a.total_amount || 0), 0))}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {(['overview', 'agreements', 'clients', 'contacts'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setSelectedItem(null); }}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          {loading ? (
            <div className="p-12 text-center">
              <RefreshCw className="w-8 h-8 text-gray-500 animate-spin mx-auto mb-4" />
              <p className="text-gray-400">Loading data...</p>
            </div>
          ) : (
            <>
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-white mb-6">Recent Activity</h2>

                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Recent Agreements */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 mb-3">Recent Agreements</h3>
                      <div className="space-y-2">
                        {agreements.slice(0, 5).map((a) => (
                          <div key={a.id} className="p-3 bg-gray-800 rounded-lg">
                            <p className="text-white text-sm font-medium truncate">{a.client_business_name || 'Unnamed'}</p>
                            <p className="text-gray-400 text-xs">{a.agreement_number}</p>
                          </div>
                        ))}
                        {agreements.length === 0 && (
                          <p className="text-gray-500 text-sm">No agreements yet</p>
                        )}
                      </div>
                    </div>

                    {/* Recent Clients */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 mb-3">Recent Clients</h3>
                      <div className="space-y-2">
                        {clients.slice(0, 5).map((c) => (
                          <div key={c.id} className="p-3 bg-gray-800 rounded-lg">
                            <p className="text-white text-sm font-medium truncate">{c.business_name || c.contact_name}</p>
                            <p className="text-gray-400 text-xs truncate">{c.email}</p>
                          </div>
                        ))}
                        {clients.length === 0 && (
                          <p className="text-gray-500 text-sm">No clients yet</p>
                        )}
                      </div>
                    </div>

                    {/* Recent Contacts */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 mb-3">Recent Contacts</h3>
                      <div className="space-y-2">
                        {contacts.slice(0, 5).map((c) => (
                          <div key={c.id} className="p-3 bg-gray-800 rounded-lg">
                            <p className="text-white text-sm font-medium truncate">{c.name}</p>
                            <p className="text-gray-400 text-xs truncate">{c.email}</p>
                          </div>
                        ))}
                        {contacts.length === 0 && (
                          <p className="text-gray-500 text-sm">No contacts yet</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Agreements Tab */}
              {activeTab === 'agreements' && (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-800">
                      <tr>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Agreement #</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Client</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Date</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Amount</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Status</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {agreements.map((agreement) => (
                        <tr key={agreement.id} className="hover:bg-gray-800/50">
                          <td className="px-6 py-4 text-sm text-white font-mono">{agreement.agreement_number}</td>
                          <td className="px-6 py-4 text-sm text-gray-300">{agreement.client_business_name || 'N/A'}</td>
                          <td className="px-6 py-4 text-sm text-gray-400">{formatDate(agreement.agreement_date || agreement.created_at)}</td>
                          <td className="px-6 py-4 text-sm text-white">{formatCurrency(agreement.total_amount)}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                              agreement.status === 'signed' ? 'bg-green-500/20 text-green-400' :
                              agreement.status === 'pending' ? 'bg-amber-500/20 text-amber-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {agreement.status || 'pending'}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => setSelectedItem(agreement)}
                              className="text-blue-400 hover:text-blue-300"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                      {agreements.length === 0 && (
                        <tr>
                          <td colSpan={6} className="px-6 py-12 text-center text-gray-500">No agreements found</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Clients Tab */}
              {activeTab === 'clients' && (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-800">
                      <tr>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Business</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Contact</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Email</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Phone</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Added</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {clients.map((client) => (
                        <tr key={client.id} className="hover:bg-gray-800/50">
                          <td className="px-6 py-4 text-sm text-white">{client.business_name || 'N/A'}</td>
                          <td className="px-6 py-4 text-sm text-gray-300">{client.contact_name || 'N/A'}</td>
                          <td className="px-6 py-4 text-sm text-gray-400">{client.email}</td>
                          <td className="px-6 py-4 text-sm text-gray-400">{client.phone || 'N/A'}</td>
                          <td className="px-6 py-4 text-sm text-gray-400">{formatDate(client.created_at)}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => setSelectedItem(client)}
                                className="text-blue-400 hover:text-blue-300"
                                title="View Details"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => openSendAgreementModal(client)}
                                className="text-green-400 hover:text-green-300"
                                title="Send Agreement"
                              >
                                <Send className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {clients.length === 0 && (
                        <tr>
                          <td colSpan={6} className="px-6 py-12 text-center text-gray-500">No clients found</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Contacts Tab */}
              {activeTab === 'contacts' && (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-800">
                      <tr>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Name</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Email</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Company</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Interest</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Source</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Date</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-gray-400 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {contacts.map((contact) => (
                        <tr key={contact.id} className="hover:bg-gray-800/50">
                          <td className="px-6 py-4 text-sm text-white">{contact.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-400">{contact.email}</td>
                          <td className="px-6 py-4 text-sm text-gray-300">{contact.company || 'N/A'}</td>
                          <td className="px-6 py-4 text-sm text-gray-400">{contact.tier_interest || 'N/A'}</td>
                          <td className="px-6 py-4 text-sm text-gray-500 truncate max-w-[150px]">{contact.source || 'N/A'}</td>
                          <td className="px-6 py-4 text-sm text-gray-400">{formatDate(contact.created_at)}</td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => setSelectedItem(contact)}
                              className="text-blue-400 hover:text-blue-300"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                      {contacts.length === 0 && (
                        <tr>
                          <td colSpan={7} className="px-6 py-12 text-center text-gray-500">No contacts found</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </div>

        {/* Detail Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
            <div className="bg-gray-900 rounded-xl border border-gray-800 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-800 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Details</h3>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  &times;
                </button>
              </div>
              <div className="p-6">
                <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                  {JSON.stringify(selectedItem, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Send Agreement Modal */}
        {showAgreementModal && agreementClient && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
            <div className="bg-gray-900 rounded-xl border border-gray-800 max-w-lg w-full">
              <div className="p-6 border-b border-gray-800 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Send Agreement</h3>
                <button
                  onClick={() => setShowAgreementModal(false)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  &times;
                </button>
              </div>
              <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Client</p>
                  <p className="text-white font-medium">{agreementClient.business_name || agreementClient.contact_name}</p>
                  <p className="text-gray-400 text-sm">{agreementClient.email}</p>
                </div>

                {/* Document Type */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Document Type</label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setAgreementMode('quote')}
                      className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                        agreementMode === 'quote'
                          ? 'bg-amber-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      Quote
                    </button>
                    <button
                      type="button"
                      onClick={() => setAgreementMode('agreement')}
                      className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                        agreementMode === 'agreement'
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      Agreement
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {agreementMode === 'quote' ? 'Client reviews proposal before signing' : 'Client signs immediately'}
                  </p>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Package Tier</label>
                  <select
                    value={agreementTier}
                    onChange={(e) => setAgreementTier(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="self-managed">Self-Managed ($2,500 - $4,000)</option>
                    <option value="growth">Growth ($1,500 - $2,500)</option>
                    <option value="authority">Authority ($500 - $1,000)</option>
                    <option value="custom">Custom Build</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    {agreementTier === 'custom' ? 'Custom Amount *' : 'Custom Amount (optional)'}
                  </label>
                  <input
                    type="number"
                    value={agreementAmount}
                    onChange={(e) => setAgreementAmount(e.target.value)}
                    placeholder={agreementTier === 'custom' ? 'Enter amount' : 'Leave blank for tier default'}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Project URL (optional)</label>
                  <input
                    type="url"
                    value={agreementProjectUrl}
                    onChange={(e) => setAgreementProjectUrl(e.target.value)}
                    placeholder="e.g., https://clientwebsite.com"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Project Description (optional)</label>
                  <textarea
                    value={agreementDescription}
                    onChange={(e) => setAgreementDescription(e.target.value)}
                    placeholder="Brief description of services..."
                    rows={2}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <p className="text-sm text-gray-400 mb-2">
                    {agreementMode === 'quote' ? 'Quote' : 'Agreement'} Link
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      readOnly
                      value={generateAgreementLink(agreementClient)}
                      className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 text-sm truncate"
                    />
                    <button
                      onClick={copyAgreementLink}
                      className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors ${
                        copiedLink
                          ? 'bg-green-600 text-white'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {copiedLink ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copiedLink ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <a
                    href={generateAgreementLink(agreementClient)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Preview
                  </a>
                  <button
                    onClick={() => setShowAgreementModal(false)}
                    className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
