export interface Subscription {
    id: string
    status: string
    planName: string
    currentPeriodEnd: string
    currentPeriodStart: string
    subscriptionAmount: number
    interval: string
  }
  