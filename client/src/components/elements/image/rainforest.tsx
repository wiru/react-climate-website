import rainforestImg from '@/public/images/rainforest.jpg'

export const Rainforest = () => {
  return (
    <img src={rainforestImg.src} className="object-cover absolute max-h-full min-h-full min-w-full opacity-20">
    </img>
  )
}