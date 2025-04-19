interface OrderDetails {
    subscription: number
    enrollmentFee: number
    tax: number
    total: number
  }
  
  interface OrderSummaryProps {
    details: OrderDetails
  }
  
  export default function OrderSummary({ details }: OrderSummaryProps) {
    return (
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
        <div className="bg-gray-50 p-4 rounded-md">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Monthly Subscription</span>
              <span className="font-medium">${details.subscription.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Enrollment Fee</span>
              <span className="font-medium">${details.enrollmentFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span className="font-medium">${details.tax.toFixed(2)}</span>
            </div>
            <div className="border-t border-gray-200 pt-3 mt-3">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${details.total.toFixed(2)}</span>
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-4">
              <p>
                You will be charged ${details.total.toFixed(2)} today, and then ${details.subscription.toFixed(2)}{" "}
                monthly.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  