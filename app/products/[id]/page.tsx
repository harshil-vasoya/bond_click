import Image from "next/image"
import Link from "next/link"
import { Home } from "lucide-react"

export default function ProductDetail({ params }: { params: { id: string } }) {
  // In a real app, you would fetch this data from an API or database
  const product = {
    id: params.id,
    name: "Product Name",
    category: "Medical Assistant",
    description:
      "Eiusmod pariatur posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fermentum ullamcorper viverra laoreet.Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere",
    responsibility: "Visa Special",
    experience: "10 years+",
    email: "info@gmail.com",
    phone: "(407) 555-0101",
    ingredients: [
      { name: "Developing Process", percentage: 70 },
      { name: "Power Design", percentage: 60 },
      { name: "Comfort Functionality", percentage: 50 },
    ],
  }

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Product Details</h1>
          <div className="breadcrumb">
            <Link href="/">
              <Home size={16} />
            </Link>
            <span>&gt;</span>
            <span>Team Details</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-gray-200 aspect-square relative mb-4 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=400" alt={product.name} fill className="object-cover" />
              </div>
            </div>

            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-500 mb-6">{product.category}</p>

              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                  <div className="mb-4">
                    <span className="font-bold">Responsibility:</span>
                    <span className="ml-2">{product.responsibility}</span>
                  </div>
                  <div className="mb-4">
                    <span className="font-bold">Experience:</span>
                    <span className="ml-2">{product.experience}</span>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <span className="font-bold">Email:</span>
                    <span className="ml-2">{product.email}</span>
                  </div>
                  <div className="mb-4">
                    <span className="font-bold">Phone:</span>
                    <span className="ml-2">{product.phone}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">Description</h3>
              <p className="text-gray-600 mb-8">
                IELTS score is internationally recognized as an English Language proficiency requirement for higher
                education. In almost all countries including the USA, the United Kingdom, Australia, Canada, and New
                Zealand. The highest IELT Academic module test assesses whether you have adequate, possible band score
                is 9.0, most universities accept a score of 6.0 for undergraduate admission and 6.0-7.0 for graduate
                admission. There are two versions of the.
              </p>
              <p className="text-gray-600 mb-8">
                IELTS score is internationally recognized as an English Language proficiency requirement for higher
                education. In almost all countries including the USA, the United Kingdom, Australia, Canada, and New
                Zealand. The highest IELT Academic module test assesses whether you have adequate, possible band score
                is 9.0, most universities accept a score of 6.0 for undergraduate admission and 6.0-7.0 for graduate
                admission. There are two versions of the.
              </p>

              <h3 className="text-2xl font-bold mb-4">Ingredients</h3>
              <div className="space-y-4">
                {product.ingredients.map((ingredient, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span>{ingredient.name}</span>
                      <span>{ingredient.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-primary h-2.5 rounded-full"
                        style={{ width: `${ingredient.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

