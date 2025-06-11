"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, MapPin, Trash2, Calendar, Shield, CreditCard, AlertTriangle, Truck, Weight } from "lucide-react"

interface SkipData {
  id: number
  size: number
  hire_period_days: number
  price_before_vat: number
  vat: number
  allowed_on_road: boolean
  allows_heavy_waste: boolean
  transport_cost: number | null
  per_tonne_cost: number | null
  postcode: string
  area: string
  forbidden: boolean
  created_at: string
  updated_at: string
}

const steps = [
  { icon: MapPin, label: "Postcode", completed: true },
  { icon: Trash2, label: "Waste Type", completed: true },
  { icon: CheckCircle, label: "Select Skip", active: true },
  { icon: Shield, label: "Permit Check", completed: false },
  { icon: Calendar, label: "Choose Date", completed: false },
  { icon: CreditCard, label: "Payment", completed: false },
]

export default function SkipSelection() {
  const [skips, setSkips] = useState<SkipData[]>([])
  const [selectedSkip, setSelectedSkip] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call with the provided data
    const mockData: SkipData[] = [
      {
        id: 17933,
        size: 4,
        hire_period_days: 14,
        transport_cost: null,
        per_tonne_cost: null,
        price_before_vat: 278,
        vat: 20,
        postcode: "NR32",
        area: "",
        forbidden: false,
        created_at: "2025-04-03T13:51:46.897146",
        updated_at: "2025-04-07T13:16:52.813",
        allowed_on_road: true,
        allows_heavy_waste: true,
      },
      {
        id: 17934,
        size: 6,
        hire_period_days: 14,
        transport_cost: null,
        per_tonne_cost: null,
        price_before_vat: 305,
        vat: 20,
        postcode: "NR32",
        area: "",
        forbidden: false,
        created_at: "2025-04-03T13:51:46.897146",
        updated_at: "2025-04-07T13:16:52.992",
        allowed_on_road: true,
        allows_heavy_waste: true,
      },
      {
        id: 17935,
        size: 8,
        hire_period_days: 14,
        transport_cost: null,
        per_tonne_cost: null,
        price_before_vat: 375,
        vat: 20,
        postcode: "NR32",
        area: "",
        forbidden: false,
        created_at: "2025-04-03T13:51:46.897146",
        updated_at: "2025-04-07T13:16:53.171",
        allowed_on_road: true,
        allows_heavy_waste: true,
      },
      {
        id: 17936,
        size: 10,
        hire_period_days: 14,
        transport_cost: null,
        per_tonne_cost: null,
        price_before_vat: 400,
        vat: 20,
        postcode: "NR32",
        area: "",
        forbidden: false,
        created_at: "2025-04-03T13:51:46.897146",
        updated_at: "2025-04-07T13:16:53.339",
        allowed_on_road: false,
        allows_heavy_waste: false,
      },
      {
        id: 17937,
        size: 12,
        hire_period_days: 14,
        transport_cost: null,
        per_tonne_cost: null,
        price_before_vat: 439,
        vat: 20,
        postcode: "NR32",
        area: "",
        forbidden: false,
        created_at: "2025-04-03T13:51:46.897146",
        updated_at: "2025-04-07T13:16:53.516",
        allowed_on_road: false,
        allows_heavy_waste: false,
      },
      {
        id: 17938,
        size: 14,
        hire_period_days: 14,
        transport_cost: null,
        per_tonne_cost: null,
        price_before_vat: 470,
        vat: 20,
        postcode: "NR32",
        area: "",
        forbidden: false,
        created_at: "2025-04-03T13:51:46.897146",
        updated_at: "2025-04-07T13:16:53.69",
        allowed_on_road: false,
        allows_heavy_waste: false,
      },
      {
        id: 17939,
        size: 16,
        hire_period_days: 14,
        transport_cost: null,
        per_tonne_cost: null,
        price_before_vat: 496,
        vat: 20,
        postcode: "NR32",
        area: "",
        forbidden: false,
        created_at: "2025-04-03T13:51:46.897146",
        updated_at: "2025-04-07T13:16:53.876",
        allowed_on_road: false,
        allows_heavy_waste: false,
      },
      {
        id: 15124,
        size: 20,
        hire_period_days: 14,
        transport_cost: 248,
        per_tonne_cost: 248,
        price_before_vat: 992,
        vat: 20,
        postcode: "NR32",
        area: "",
        forbidden: false,
        created_at: "2025-04-03T13:51:40.344435",
        updated_at: "2025-04-07T13:16:52.434",
        allowed_on_road: false,
        allows_heavy_waste: true,
      },
      {
        id: 15125,
        size: 40,
        hire_period_days: 14,
        transport_cost: 248,
        per_tonne_cost: 248,
        price_before_vat: 992,
        vat: 20,
        postcode: "NR32",
        area: "",
        forbidden: false,
        created_at: "2025-04-03T13:51:40.344435",
        updated_at: "2025-04-07T13:16:52.603",
        allowed_on_road: false,
        allows_heavy_waste: false,
      },
    ]

    setTimeout(() => {
      setSkips(mockData)
      setLoading(false)
    }, 500)
  }, [])

  const calculateTotalPrice = (priceBeforeVat: number, vat: number) => {
    return priceBeforeVat + (priceBeforeVat * vat) / 100
  }

  const getSkipImage = (size: number) => {
    return `/placeholder.svg?height=200&width=300&text=${size}+Yard+Skip`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    step.completed
                      ? "bg-green-500 border-green-500 text-white"
                      : step.active
                        ? "bg-blue-500 border-blue-500 text-white"
                        : "bg-gray-100 border-gray-300 text-gray-400"
                  }`}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                <span
                  className={`ml-3 text-sm font-medium ${
                    step.completed || step.active ? "text-gray-900" : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${step.completed ? "bg-green-500" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>
          <Progress value={50} className="h-2" />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Perfect Skip Size</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the ideal skip size for your project. All prices include VAT and 14-day hire period.
          </p>
        </div>

        {/* Skip Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-48 bg-gray-200 rounded-lg" />
                </CardHeader>
                <CardContent>
                  <div className="h-4 bg-gray-200 rounded mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {skips.map((skip) => (
              <Card
                key={skip.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  selectedSkip === skip.id ? "ring-2 ring-blue-500 shadow-lg" : "hover:shadow-lg"
                }`}
                onClick={() => setSelectedSkip(skip.id)}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={getSkipImage(skip.size) || "/placeholder.svg"}
                      alt={`${skip.size} Yard Skip`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-900 font-semibold">
                        {skip.size} Yards
                      </Badge>
                    </div>
                    {selectedSkip === skip.id && (
                      <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                        <CheckCircle className="w-12 h-12 text-blue-600" />
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{skip.size} Yard Skip</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">
                        £{calculateTotalPrice(skip.price_before_vat, skip.vat).toFixed(0)}
                      </div>
                      <div className="text-sm text-gray-500">inc. VAT</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {skip.hire_period_days} day hire period
                    </div>

                    <div className="flex items-center gap-2">
                      {skip.allowed_on_road ? (
                        <Badge variant="outline" className="text-green-700 border-green-300">
                          <Truck className="w-3 h-3 mr-1" />
                          Road Placement OK
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-amber-700 border-amber-300">
                          <AlertTriangle className="w-3 h-3 mr-1" />
                          Private Land Only
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {skip.allows_heavy_waste ? (
                        <Badge variant="outline" className="text-blue-700 border-blue-300">
                          <Weight className="w-3 h-3 mr-1" />
                          Heavy Waste OK
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-gray-600 border-gray-300">
                          <Weight className="w-3 h-3 mr-1" />
                          Light Waste Only
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="text-xs text-gray-500 space-y-1">
                    <div>Price before VAT: £{skip.price_before_vat}</div>
                    <div>
                      VAT ({skip.vat}%): £{((skip.price_before_vat * skip.vat) / 100).toFixed(0)}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button
                    className={`w-full transition-all duration-300 ${
                      selectedSkip === skip.id ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedSkip(skip.id)
                    }}
                  >
                    {selectedSkip === skip.id ? "Selected" : "Select This Skip"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {/* Continue Button */}
        {selectedSkip && (
          <div className="flex justify-center">
            <Button size="lg" className="px-8 py-3 text-lg bg-green-600 hover:bg-green-700">
              Continue to Permit Check
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
