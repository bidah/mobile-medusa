import { ProductProvider } from 'lib/context/product-context'
// import { useIntersection } from 'lib/hooks/use-in-view'
import { Product } from '@medusajs/medusa'
import ProductTabs from 'modules/products/components/product-tabs'
import RelatedProducts from 'modules/products/components/related-products'
import ProductInfo from 'modules/products/templates/product-info'
import React, { useRef } from 'react'
import { View, Text, ScrollView, Stack } from '../../../design'
import ImageGallery from '../components/image-gallary'
// import MobileActions from '../components/mobile-actions'

type ProductTemplateProps = {
  product: Product
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product }) => {
  // const info = useRef<HTMLDivElement>(null)
  const info = useRef(null)

  // const inView = useIntersection(info, '0px')

  return (
    <ProductProvider product={product}>
      <View className=" small:flex-row small:items-start web:small:container web:pt-16 small:web:pt-2 relative mt-4 flex flex-col justify-center px-3 py-6">
        <View className="small:mb-0 mb-7 flex flex-col gap-y-8">
          <ImageGallery images={product.images} />
        </View>
        <Stack
          space={10}
          className="small:sticky small:top-20 small:py-0 small:max-w-[344px] medium:max-w-[400px] flex w-full flex-col "
          ref={info}
        >
          <ProductInfo product={product} />
          <ProductTabs product={product} />
        </Stack>
      </View>
      <View className="content-container small:px-8 small:my-32 ios:my-2 web:my-16 px-3">
        <RelatedProducts product={product} />
      </View>
      {/*<MobileActions product={product} show={!inView} />*/}
    </ProductProvider>
  )
}

export default ProductTemplate
