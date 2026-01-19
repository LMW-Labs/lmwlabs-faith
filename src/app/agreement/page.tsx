'use client'

import { useState, useRef, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'

function AgreementFormContent() {
  const searchParams = useSearchParams()

  // Generate unique agreement number: LMW-YYYYMMDD-HHMMSS
  const generateAgreementNumber = () => {
    const now = new Date()
    const date = now.toISOString().split('T')[0].replace(/-/g, '')
    const time = now.toTimeString().split(' ')[0].replace(/:/g, '')
    return `LMW-${date}-${time}`
  }

  // Pre-fill from URL params (for admin sending to clients)
  const [formData, setFormData] = useState({
    agreementNumber: generateAgreementNumber(),
    agreementDate: new Date().toISOString().split('T')[0],
    clientBusinessName: searchParams.get('business') || '',
    clientContactName: searchParams.get('contact') || '',
    clientEmail: searchParams.get('email') || '',
    clientPhone: searchParams.get('phone') || '',
    clientId: searchParams.get('clientId') || '',
    selectedPackage: searchParams.get('tier') || '',
    customBuildFee: searchParams.get('amount') || '',
    customBuildDescription: '',
    selectedRevShare: 'growth',
    selectedMaintenance: '',
    summaryBuild: '',
    summaryPremium: '$0',
    summaryMaintenance: '',
    clientTitle: '',
    acknowledgment: false
  })

  const [signature, setSignature] = useState<string | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [canvasContext, setCanvasContext] = useState<CanvasRenderingContext2D | null>(null)

  // LMW Labs Tiers
  const packages = [
    {
      value: 'self-managed',
      label: 'Self-Managed',
      priceRange: '$2,500 - $4,000',
      minPrice: 2500,
      maxPrice: 4000,
      monthly: '$0/mo',
      desc: 'Full ownership. Custom 5-8 page website, mobile responsive, basic SEO, 30 days support. You keep 100% affiliate revenue.',
      revShare: 'none'
    },
    {
      value: 'growth',
      label: 'Growth',
      priceRange: '$1,500 - $2,500',
      minPrice: 1500,
      maxPrice: 2500,
      monthly: '$100/mo',
      desc: 'Shared success. Custom 5-10 page website, ongoing SEO, hosting included, 1 blog post/month, 70/30 affiliate split (LMW/You).',
      revShare: '70/30'
    },
    {
      value: 'authority',
      label: 'Authority',
      priceRange: '$500 - $1,000',
      minPrice: 500,
      maxPrice: 1000,
      monthly: '$150/mo',
      desc: 'Maximum value. Custom 10-15 page website, full SEO, 4 blog posts/month, Google Business management. LMW keeps affiliate revenue.',
      revShare: '100/0'
    }
  ]

  const maintenanceOptions = [
    { value: 'included', label: 'Included with package', price: 0, desc: 'Monthly fee covers maintenance' },
    { value: 'hourly', label: 'As-Needed - $100/hour', price: 100, desc: 'Billed per hour for custom work' }
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.strokeStyle = '#1e1e4b'
        ctx.lineWidth = 2
        ctx.lineCap = 'round'
        setCanvasContext(ctx)
      }
    }
  }, [])

  useEffect(() => {
    // Update summary when selections change
    const pkg = packages.find(p => p.value === formData.selectedPackage)
    const maint = maintenanceOptions.find(m => m.value === formData.selectedMaintenance)

    const buildFee = formData.customBuildFee ? parseFloat(formData.customBuildFee) : (pkg?.minPrice || 0)
    const maintPrice = maint && maint.value !== 'included'
      ? `$${maint.price}/hr`
      : formData.selectedPackage === 'custom'
        ? 'TBD'
        : (pkg?.monthly || '$0')

    setFormData(prev => ({
      ...prev,
      summaryBuild: buildFee ? `$${buildFee.toLocaleString()}` : '',
      summaryMaintenance: maintPrice
    }))
  }, [formData.selectedPackage, formData.selectedMaintenance, formData.customBuildFee])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value

    // When package changes, update rev share automatically
    if (name === 'selectedPackage' && typeof value === 'string') {
      const pkg = packages.find(p => p.value === value)
      if (value === 'custom') {
        // Custom package selected - clear customBuildFee to let user enter it
        setFormData(prev => ({
          ...prev,
          selectedPackage: value,
          selectedRevShare: 'custom',
          customBuildFee: prev.customBuildFee // Keep any existing custom fee
        }))
      } else {
        // Standard package selected - clear customBuildFee
        setFormData(prev => ({
          ...prev,
          selectedPackage: value,
          selectedRevShare: pkg?.revShare || 'growth',
          customBuildFee: '' // Clear custom fee when selecting a standard package
        }))
      }
    } else if (name === 'acknowledgment') {
      setFormData(prev => ({
        ...prev,
        acknowledgment: value as boolean
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value as string
      }))
    }
  }

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }

    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height

    if ('touches' in e) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY
      }
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    }
  }

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    if (!canvasContext) return
    setIsDrawing(true)
    const coords = getCoordinates(e)
    canvasContext.beginPath()
    canvasContext.moveTo(coords.x, coords.y)
  }

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !canvasContext) return
    e.preventDefault()
    const coords = getCoordinates(e)
    canvasContext.lineTo(coords.x, coords.y)
    canvasContext.stroke()
  }

  const stopDrawing = () => {
    if (isDrawing && canvasContext && canvasRef.current) {
      setIsDrawing(false)
      canvasContext.closePath()
      setSignature(canvasRef.current.toDataURL())
    }
  }

  const clearSignature = () => {
    const canvas = canvasRef.current
    if (canvas && canvasContext) {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height)
      setSignature(null)
    }
  }

  const calculateTotal = () => {
    const pkg = packages.find(p => p.value === formData.selectedPackage)
    const buildFee = formData.customBuildFee ? parseFloat(formData.customBuildFee) : (pkg?.minPrice || 0)
    // 50% deposit due at signing
    return buildFee / 2
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!signature) {
      alert('Please provide your signature')
      return
    }

    if (!formData.acknowledgment) {
      alert('Please acknowledge the terms and conditions')
      return
    }

    setIsSaving(true)

    // Save to Supabase
    try {
      const pkg = packages.find(p => p.value === formData.selectedPackage)

      const { error } = await supabase.from('agreements').insert({
        agreement_number: formData.agreementNumber,
        agreement_date: formData.agreementDate,
        client_business_name: formData.clientBusinessName,
        client_contact_name: formData.clientContactName,
        client_email: formData.clientEmail,
        client_phone: formData.clientPhone,
        client_title: formData.clientTitle,
        client_id: formData.clientId || null,
        selected_package: formData.selectedPackage,
        custom_build_fee: formData.customBuildFee ? parseFloat(formData.customBuildFee) : pkg?.minPrice,
        custom_build_description: formData.customBuildDescription,
        selected_rev_share: formData.selectedRevShare,
        selected_maintenance: formData.selectedMaintenance,
        total_due_at_signing: calculateTotal(),
        signature_data: signature,
        status: 'signed'
      })

      if (error) {
        console.error('Supabase error:', error)
      }
    } catch (err) {
      console.error('Failed to save agreement:', err)
    }

    // Generate PDF
    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF()

    const margin = 20
    let y = 20
    const pkg = packages.find(p => p.value === formData.selectedPackage)

    // Header
    doc.setFontSize(18)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(30, 30, 75) // primary-950
    doc.text('WEBSITE SERVICES AGREEMENT', margin, y)
    y += 8
    doc.setFontSize(12)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(100)
    doc.text('LMW Labs LLC', margin, y)
    y += 10

    doc.setTextColor(0)
    doc.setFontSize(10)
    doc.text(`Agreement #: ${formData.agreementNumber}`, margin, y)
    y += 6
    doc.text(`Agreement Date: ${formData.agreementDate}`, margin, y)
    y += 12

    // Parties
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(30, 30, 75)
    doc.text('PARTIES', margin, y)
    y += 7
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(0)
    doc.text('Provider: LMW Labs LLC, Brandon, Mississippi', margin, y)
    y += 6
    doc.text(`Client: ${formData.clientBusinessName}`, margin, y)
    y += 6
    doc.text(`Contact: ${formData.clientContactName}`, margin, y)
    y += 6
    doc.text(`Email: ${formData.clientEmail}  |  Phone: ${formData.clientPhone}`, margin, y)
    y += 12

    // Selected Package
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(30, 30, 75)
    doc.text('SELECTED SERVICES', margin, y)
    y += 7
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(0)

    const buildFee = formData.customBuildFee ? parseFloat(formData.customBuildFee) : (pkg?.minPrice || 0)
    doc.text(`Package: ${pkg?.label || 'Custom'} (${pkg?.priceRange})`, margin, y)
    y += 6
    doc.text(`Build Fee: $${buildFee.toLocaleString()}`, margin, y)
    y += 6
    doc.text(`Monthly Fee: ${pkg?.monthly || 'N/A'}`, margin, y)
    y += 6

    if (formData.customBuildDescription) {
      doc.setFont('helvetica', 'italic')
      const descLines = doc.splitTextToSize(`Services: ${formData.customBuildDescription}`, 170)
      descLines.forEach((line: string) => {
        doc.text(line, margin, y)
        y += 5
      })
      doc.setFont('helvetica', 'normal')
      y += 2
    }

    // Affiliate Revenue
    y += 4
    doc.text('Affiliate Revenue Split:', margin, y)
    y += 6
    if (pkg?.value === 'self-managed') {
      doc.text('  Client keeps 100% of affiliate revenue', margin, y)
    } else if (pkg?.value === 'growth') {
      doc.text('  70% LMW Labs / 30% Client', margin, y)
    } else if (pkg?.value === 'authority') {
      doc.text('  LMW Labs keeps 100% of affiliate revenue', margin, y)
    }
    y += 12

    // Investment Summary
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(30, 30, 75)
    doc.text('INVESTMENT SUMMARY', margin, y)
    y += 7
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(0)

    doc.text(`Total Build Fee: $${buildFee.toLocaleString()}`, margin, y)
    y += 6
    doc.text(`Monthly Fee: ${pkg?.monthly || '$0'}`, margin, y)
    y += 8
    doc.setFont('helvetica', 'bold')
    doc.text(`DEPOSIT DUE AT SIGNING (50%): $${calculateTotal().toLocaleString()}`, margin, y)
    y += 6
    doc.setFont('helvetica', 'normal')
    doc.text(`Balance due upon completion: $${calculateTotal().toLocaleString()}`, margin, y)
    y += 15

    // Terms
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(30, 30, 75)
    doc.text('KEY TERMS', margin, y)
    y += 7
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(0)

    const terms = [
      '• Work begins upon receipt of deposit',
      '• Balance due upon project completion before launch',
      '• Monthly fees begin after website launch',
      '• 30-day written notice required for service cancellation',
      '• Client owns website content and branding',
      '• LMW Labs retains code ownership until full payment',
    ]

    terms.forEach(term => {
      doc.text(term, margin, y)
      y += 5
    })
    y += 10

    // Signature
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(30, 30, 75)
    doc.text('CLIENT SIGNATURE', margin, y)
    y += 10

    if (signature) {
      doc.addImage(signature, 'PNG', margin, y, 60, 25)
      y += 30
    }

    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(0)
    doc.text(`Printed Name: ${formData.clientContactName}`, margin, y)
    y += 6
    doc.text(`Title: ${formData.clientTitle}`, margin, y)
    y += 6
    doc.text(`Business: ${formData.clientBusinessName}`, margin, y)
    y += 6
    doc.text(`Date: ${formData.agreementDate}`, margin, y)
    y += 15

    // Footer
    doc.setFontSize(9)
    doc.setTextColor(100)
    doc.text('LMW Labs LLC | Brandon, Mississippi | info@lmwlabs.faith', margin, 280)

    // Save
    doc.save(`LMW_Labs_Agreement_${formData.clientBusinessName.replace(/\s+/g, '_')}.pdf`)
    setIsSaving(false)
    setShowSuccess(true)
  }

  const handlePayNow = async () => {
    setIsProcessingPayment(true)
    try {
      const pkg = packages.find(p => p.value === formData.selectedPackage)
      const buildFee = formData.customBuildFee ? parseFloat(formData.customBuildFee) : (pkg?.minPrice || 0)
      const depositAmount = buildFee / 2

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tier: formData.selectedPackage,
          amount: depositAmount,
          customerEmail: formData.clientEmail,
          customerName: formData.clientContactName,
        }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Failed to create payment session. Please try again.')
      }
    } catch (error) {
      console.error('Payment error:', error)
      alert('Payment failed. Please try again.')
    }
    setIsProcessingPayment(false)
  }

  if (showSuccess) {
    const pkg = packages.find(p => p.value === formData.selectedPackage)
    const buildFee = formData.customBuildFee ? parseFloat(formData.customBuildFee) : (pkg?.minPrice || 0)
    const depositAmount = buildFee / 2

    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-950 to-primary-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Agreement Signed!</h2>
          <p className="text-gray-600 mb-6">
            Your signed agreement has been saved and downloaded.
          </p>

          {/* Payment Section */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
            <h3 className="font-semibold text-gray-800 mb-2">Deposit Due</h3>
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-600">50% of {formData.summaryBuild}</span>
              <span className="text-xl font-bold text-green-700">${depositAmount.toLocaleString()}</span>
            </div>
            <button
              onClick={handlePayNow}
              disabled={isProcessingPayment}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isProcessingPayment ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Pay Deposit Now
                </>
              )}
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">Secure payment via Stripe</p>
          </div>

          <div className="space-y-3">
            <Link
              href="/"
              className="block w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Pay Later
            </Link>
            <p className="text-gray-500 text-xs">
              We&apos;ll send payment instructions via email if you prefer to pay later.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-950 to-primary-900 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/images/logo.png"
              alt="LMW Labs"
              width={60}
              height={60}
              className="mx-auto"
            />
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Website Services Agreement</h1>
          <p className="text-primary-300">LMW Labs LLC</p>
          <p className="text-primary-400 text-sm mt-2">Agreement #: {formData.agreementNumber}</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Client Information */}
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Client Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Name *</label>
                <input
                  type="text"
                  name="clientBusinessName"
                  value={formData.clientBusinessName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name *</label>
                <input
                  type="text"
                  name="clientContactName"
                  value={formData.clientContactName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="clientEmail"
                    value={formData.clientEmail}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    name="clientPhone"
                    value={formData.clientPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Title</label>
                <input
                  type="text"
                  name="clientTitle"
                  value={formData.clientTitle}
                  onChange={handleInputChange}
                  placeholder="e.g., Owner, CEO, Manager"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                />
              </div>
            </div>
          </div>

          {/* Website Package */}
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Website Package *</h2>
            <div className="space-y-3">
              {packages.map(pkg => (
                <label
                  key={pkg.value}
                  className={`block p-4 border-2 rounded-lg cursor-pointer transition ${
                    formData.selectedPackage === pkg.value
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-start">
                    <input
                      type="radio"
                      name="selectedPackage"
                      value={pkg.value}
                      checked={formData.selectedPackage === pkg.value}
                      onChange={handleInputChange}
                      required
                      className="mt-1 mr-3"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div className="font-semibold text-gray-800">{pkg.label}</div>
                        <div className="text-right">
                          <div className="font-bold text-green-700">{pkg.priceRange}</div>
                          <div className="text-sm text-gray-500">+ {pkg.monthly}</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{pkg.desc}</div>
                    </div>
                  </div>
                </label>
              ))}
              {/* Custom Build Option */}
              <label
                className={`block p-4 border-2 rounded-lg cursor-pointer transition ${
                  formData.selectedPackage === 'custom'
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-primary-300'
                }`}
              >
                <div className="flex items-start">
                  <input
                    type="radio"
                    name="selectedPackage"
                    value="custom"
                    checked={formData.selectedPackage === 'custom'}
                    onChange={handleInputChange}
                    className="mt-1 mr-3"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div className="font-semibold text-gray-800">Custom Build</div>
                      <div className="text-right">
                        <div className="font-bold text-green-700">Custom Price</div>
                        <div className="text-sm text-gray-500">Negotiated</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Custom project with negotiated pricing and scope.</div>
                    {formData.selectedPackage === 'custom' && (
                      <div className="mt-3">
                        <input
                          type="number"
                          name="customBuildFee"
                          value={formData.customBuildFee}
                          onChange={handleInputChange}
                          placeholder="Enter custom amount"
                          required={formData.selectedPackage === 'custom'}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </label>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description of Services</label>
              <textarea
                name="customBuildDescription"
                value={formData.customBuildDescription}
                onChange={handleInputChange}
                placeholder="Describe specific features, pages, or requirements for this project..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-gray-900"
              />
            </div>
          </div>

          {/* Investment Summary */}
          <div className="p-6 border-b border-gray-100 bg-gray-50">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Investment Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Website Build Fee:</span>
                <span className="font-semibold text-gray-900">{formData.summaryBuild || '—'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Monthly Fee:</span>
                <span className="font-semibold text-gray-900">
                  {formData.selectedPackage === 'custom'
                    ? 'TBD'
                    : packages.find(p => p.value === formData.selectedPackage)?.monthly || '—'}
                </span>
              </div>
              <div className="border-t border-gray-300 pt-2 mt-2">
                <div className="flex justify-between text-base">
                  <span className="font-bold text-gray-800">Deposit Due at Signing (50%):</span>
                  <span className="font-bold text-green-700">${calculateTotal().toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Balance due upon project completion</p>
              </div>
            </div>
          </div>

          {/* Signature */}
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Your Signature *</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-2 bg-white">
              <canvas
                ref={canvasRef}
                width={500}
                height={150}
                className="w-full touch-none cursor-crosshair bg-gray-50 rounded"
                style={{ maxHeight: '150px' }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="text-sm text-gray-500">Draw your signature above (works on mobile too)</p>
              <button
                type="button"
                onClick={clearSignature}
                className="text-sm text-red-600 hover:text-red-700 font-medium"
              >
                Clear Signature
              </button>
            </div>
          </div>

          {/* Acknowledgment */}
          <div className="p-6 border-b border-gray-100">
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                name="acknowledgment"
                checked={formData.acknowledgment}
                onChange={handleInputChange}
                className="mt-1 mr-3 w-5 h-5"
              />
              <span className="text-sm text-gray-700">
                I have read, understand, and agree to all terms and conditions in this Agreement,
                including the payment terms, service scope, and affiliate revenue structure as described.
              </span>
            </label>
          </div>

          {/* Submit */}
          <div className="p-6 bg-gray-50">
            <button
              type="submit"
              disabled={isSaving}
              className="w-full bg-primary-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSaving ? 'Processing...' : 'Sign & Download Agreement'}
            </button>
            <p className="text-center text-sm text-gray-500 mt-3">
              Your signed agreement will be saved and downloaded as a PDF
            </p>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center mt-8 text-primary-300 text-sm">
          <p>LMW Labs LLC | Brandon, Mississippi</p>
          <p>info@lmwlabs.faith</p>
        </div>
      </div>
    </div>
  )
}

export default function AgreementPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-primary-950 to-primary-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <AgreementFormContent />
    </Suspense>
  )
}
