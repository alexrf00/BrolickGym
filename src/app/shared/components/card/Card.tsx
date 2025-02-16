import '@/app/shared/components/card/card.scss'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  )
}

