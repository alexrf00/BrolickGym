import type { Subscription } from "@/types/subscription"

interface SubscriptionDetailsProps {
  subscription: Subscription | null
}

const STATUS_STYLES: Record<string, string> = {
  active: "text-green-600",
  trialing: "text-blue-600",
  past_due: "text-yellow-600",
  unpaid: "text-red-600",
  canceled: "text-gray-500",
  incomplete: "text-orange-600",
  default: "text-muted-foreground",
}

export function SubscriptionDetails({ subscription }: SubscriptionDetailsProps) {
  if (!subscription) {
    return <p>No subscription details available.</p>
  }

  const status = subscription.status.toLowerCase()
  const statusStyle = STATUS_STYLES[status] || STATUS_STYLES.default

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-medium">Subscription Details</h3>
        <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
          <div className="text-muted-foreground">Plan</div>
          <div>{subscription.planName}</div>
          <div className="text-muted-foreground">Amount</div>
          <div>${subscription.subscriptionAmount.toFixed(2)} / month</div>
          <div className="text-muted-foreground">Status</div>
          <div className={`${statusStyle} font-medium`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </div>
        </div>
      </div>
    </div>
  )
}
